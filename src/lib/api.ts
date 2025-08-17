import { supabase } from "./supabase";

export type Role = {
  id: string;
  title: string;
  sourceJdJson?: unknown | null;
};


export async function getRoles(): Promise<Role[]> {
  const { data, error } = await supabase
    .from("reqs")
    .select(["id", "job_title", "status", "source_jd_json"].join(","))
    .eq("status", "Open")
    .order("job_title", { ascending: true });

  if (error) {
    console.error("Supabase getRoles error:", error);
    throw new Error(error.message);
  }

  const rows = (data ?? []) as unknown[];
  return rows.map((row) => {
    const r = row as { id: string; job_title?: string | null; source_jd_json?: unknown | null };
    return {
      id: r.id,
      title: r.job_title ?? "Untitled Role",
      sourceJdJson: r.source_jd_json ?? null,
    };
  });
}

// keep FastAPI for application submit
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export interface ApplicationData {
  role_id: string;
  role_title: string;
  client_name: string;
  name: string;
  email: string;
  linkedin?: string;
  why: string;
  resume: File;
}

export async function submitApplication(data: ApplicationData) {
  const formData = new FormData();
  formData.append("role_id", data.role_id);
  formData.append("role_title", data.role_title);
  formData.append("client_name", data.client_name);
  formData.append("name", data.name);
  formData.append("email", data.email);
  if (data.linkedin) formData.append("linkedin", data.linkedin);
  formData.append("why", data.why);
  formData.append("resume", data.resume);

  const res = await fetch(`${API_BASE}/api/apply`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Failed to submit application: ${res.status} ${txt}`);
  }
  return res.json();
}