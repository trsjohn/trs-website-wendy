export type TrsJdTemplate = {
  trs_jd_about_company: string;
  trs_jd_about_role: string;
  trs_jd_job_duties: string[];
  trs_jd_job_skills: string[];
  trs_jd_job_compensation: string;
};

export async function templatizeJD(
  jd_text: string,
  role_title?: string,
  client_name?: string
): Promise<TrsJdTemplate> {
  const res = await fetch("/api/templatize-jd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jd_text, role_title, client_name }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`Templatize failed: ${res.status} ${msg}`);
  }
  return (await res.json()) as TrsJdTemplate;
}


