// The public JD manifest is the contract for this site: it lists exactly the
// reqs that have a published anonymized JD and carries the PDF URL for each.
// No auth, no API key, no database query — a plain public JSON file.
const MANIFEST_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public-jds/index.json`;

export type PublicJd = {
  req_id: string;
  req_no: number;
  job_title: string;
  location: string | null;
  work_arrangement: string | null;
  contract_type: string | null;
  pdf_url: string;
  updated_at: string;
};

type Manifest = {
  generated_at?: string;
  reqs?: PublicJd[];
};

export async function getPublicJds(): Promise<PublicJd[]> {
  const res = await fetch(MANIFEST_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to load JD manifest: ${res.status}`);
  }
  const data = (await res.json()) as Manifest;
  return data.reqs ?? [];
}
