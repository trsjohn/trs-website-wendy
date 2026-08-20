"use client";

import { useEffect, useState } from "react";

interface JDPanelProps {
  role: {
    id: string;
    title: string;
    client?: string;
    location?: string | null;
    comp?: string | null;
    jd_text?: string;
  };
}

// Anonymized JD PDFs are published to a public bucket keyed on the req id, so
// the URL is derivable from data we already have — no auth, no lookup call.
const jdPdfUrl = (reqId: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public-jds/${reqId}.pdf`;

type PdfState = "checking" | "ready" | "missing";

export default function JDPanel({ role }: JDPanelProps) {
  const pdfUrl = jdPdfUrl(role.id);
  const [pdfState, setPdfState] = useState<PdfState>("checking");

  useEffect(() => {
    let cancelled = false;
    setPdfState("checking");

    fetch(pdfUrl, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setPdfState(res.ok ? "ready" : "missing");
      })
      .catch(() => {
        // A network/CORS failure isn't proof the file is absent — only a real
        // error response is. Stay optimistic and let the iframe try.
        if (!cancelled) setPdfState("ready");
      });

    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div className="rounded-2xl border border-neutral-800 p-4 bg-black/60 text-white shadow-sm">
      <h2 className="font-semibold text-lg mb-1">
        {role.title}
        {role.client ? <> — {role.client}</> : null}
      </h2>
      {role.location && <p className="text-sm text-gray-300 mb-1">📍 {role.location}</p>}
      {role.comp && <p className="text-sm text-gray-300 mb-3">💰 {role.comp}</p>}

      {role.jd_text ? (
        <section className="text-sm">
          <h3 className="font-semibold mb-1">Job Description</h3>
          <pre className="whitespace-pre-wrap opacity-90">{role.jd_text}</pre>
        </section>
      ) : null}

      <section className="mt-4">
        <h3 className="font-semibold mb-3 text-white">Job Description</h3>

        {pdfState === "checking" && (
          <div className="flex h-24 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-sm text-neutral-400">
            Loading job description…
          </div>
        )}

        {pdfState === "ready" && (
          <div className="flex flex-col gap-3">
            {/* navpanes=0 keeps Chrome's PDF viewer from auto-opening its
                thumbnail sidebar; view=FitH fits the page to the frame width.
                The fallback link below deliberately omits these so the full
                viewer is available in a real tab. */}
            <iframe
              key={role.id}
              src={`${pdfUrl}#navpanes=0&view=FitH`}
              title={`${role.title} job description`}
              className="h-[600px] w-full rounded-xl border border-neutral-700 bg-neutral-900"
            />
            {/* iOS Safari frequently refuses to render a PDF in an iframe, so
                the direct link is a real fallback, not just a convenience. */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center self-start rounded-md border border-white/20 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Open PDF
            </a>
          </div>
        )}

        {pdfState === "missing" && (
          <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-4 text-sm text-neutral-400">
            The full job description isn&apos;t posted for this role yet — submit your
            application below and we&apos;ll send it over.
          </div>
        )}
      </section>
    </div>
  );
}
