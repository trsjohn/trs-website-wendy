import OpenAI from "openai";

export const runtime = "nodejs"; // ensure server runtime, not edge

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  // Fail fast at load time if key is missing
  console.error("[templatize-jd] OPENAI_API_KEY is missing");
}

const client = new OpenAI({ apiKey: OPENAI_API_KEY });

type Output = {
  trs_jd_about_company: string;
  trs_jd_about_role: string;
  trs_jd_job_duties: string[];
  trs_jd_job_skills: string[];
  trs_jd_job_compensation: string;
};

type ErrorLike = {
  status?: number;
  response?: { status?: number; data?: unknown };
  message?: string;
};

// Strict schema for deterministic JSON
const jsonSchema = {
  name: "TrsJdTemplate",
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      trs_jd_about_company: { type: "string" },
      trs_jd_about_role: { type: "string" },
      trs_jd_job_duties: { type: "array", items: { type: "string" } },
      trs_jd_job_skills: { type: "array", items: { type: "string" } },
      trs_jd_job_compensation: { type: "string" },
    },
    required: [
      "trs_jd_about_company",
      "trs_jd_about_role",
      "trs_jd_job_duties",
      "trs_jd_job_skills",
      "trs_jd_job_compensation",
    ],
  },
} as const;

// Safety: cap JD length (tokens) to avoid context errors
function sanitizeJD(jd: string, maxChars = 15000): string {
  const cleaned = jd.replace(/\u0000/g, "").trim();
  return cleaned.length > maxChars ? cleaned.slice(0, maxChars) : cleaned;
}

// Generic retry wrapper with exponential backoff
async function withRetries<T>(
  fn: () => Promise<T>,
  retries = 2,
  baseDelayMs = 600
): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastErr = err;
      const e = err as ErrorLike | undefined;
      const status = e?.status ?? e?.response?.status;
      const body = e?.response?.data ?? e?.message;
      console.error(`[templatize-jd] attempt ${i + 1} failed`, { status, body });

      // Retry only on 429/5xx and network-like errors
      const isRetryable = (s: number | undefined) =>
        s === 429 || (typeof s === "number" && s >= 500 && s < 600) || s === undefined;
      if (i < retries && isRetryable(status)) {
        const delay = baseDelayMs * Math.pow(2, i);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      break;
    }
  }
  throw lastErr;
}

// Try multiple parse paths to handle SDK variations
function parseResponseToJson(resp: unknown): Output {
  // New Responses API common shapes
  try {
    const parsed = (resp as { output_parsed?: unknown })?.output_parsed as Output | undefined;
    if (parsed) return parsed;
  } catch {}

  try {
    const content = (resp as { output?: Array<{ content?: Array<{ type?: string; text?: string }> }> })
      ?.output?.[0]?.content?.[0];
    if (content?.type === "output_text" && content?.text) {
      return JSON.parse(content.text);
    }
  } catch {}

  // Chat-style fallback (older SDKs)
  try {
    const text = (resp as { choices?: Array<{ message?: { content?: unknown } }> })
      ?.choices?.[0]?.message?.content;
    if (typeof text === "string") {
      return JSON.parse(text);
    }
  } catch {}

  // Last-ditch: stringified body
  throw new Error("Could not parse JSON from model response.");
}

export async function POST(req: Request) {
  const started = Date.now();
  try {
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "Server misconfigured: OPENAI_API_KEY missing" }), { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const { jd_text, role_title, client_name } = body as {
      jd_text: string;
      role_title?: string;
      client_name?: string;
    };

    if (!jd_text || typeof jd_text !== "string") {
      return new Response(JSON.stringify({ error: "jd_text is required" }), { status: 400 });
    }

    const jd = sanitizeJD(jd_text);

    const system = [
      "You are TRS’s JD normalizer.",
      "Task: anonymize employer details and return a concise, deduplicated summary in a fixed JSON schema.",
      "Rules:",
      "- Replace company names with 'the company' or 'our client'.",
      "- Be direct and factual; short sentences.",
      "- Preserve concrete requirements (skills, years, tech).",
      "- Summarize comp as a simple range + type when present.",
      "- Output MUST match the JSON schema exactly—no extra fields.",
    ].join("\n");

    const user = [
      role_title ? `Role Title: ${role_title}` : "",
      client_name ? `Client Name: ${client_name}` : "",
      "Raw JD:",
      jd,
    ].filter(Boolean).join("\n\n");

    const resp = await withRetries(() =>
      client.responses.create({
        model: "gpt-4o-mini",
        temperature: 0.2,
        input: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        text: {
          format: {
            type: "json_schema",
            name: jsonSchema.name,
            schema: jsonSchema.schema,
          },
        },
      })
    );

    const json = parseResponseToJson(resp);

    // Quick shape guard
    if (
      !json?.trs_jd_about_company ||
      !Array.isArray(json?.trs_jd_job_duties) ||
      !Array.isArray(json?.trs_jd_job_skills)
    ) {
      console.error("[templatize-jd] Invalid shape from model", json);
      return new Response(JSON.stringify({ error: "Invalid model output" }), { status: 502 });
    }

    const ms = Date.now() - started;
    console.log(`[templatize-jd] success in ${ms}ms, role_title="${role_title || ""}"`);
    return Response.json(json, { status: 200 });
  } catch (err: unknown) {
    const ms = Date.now() - started;
    const e = err as ErrorLike | undefined;
    const status = e?.status ?? e?.response?.status ?? 500;
    const message = e?.message || "JD templatization failed";
    console.error(`[templatize-jd] error after ${ms}ms`, { status, message });
    return new Response(JSON.stringify({ error: message }), { status });
  }
}


