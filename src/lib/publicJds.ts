// The public JD manifest is the contract for this site: it lists exactly the
// reqs that have a published anonymized JD and carries the PDF URL for each.
// No auth, no API key, no database query — a plain public JSON file.
const MANIFEST_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public-jds/index.json`;

export type Salary = {
  min: number | null;
  max: number | null;
  currency: string | null;
};

export type YearsExperience = {
  low: number | null;
  high: number | null;
};

export type PublicJd = {
  req_id: string;
  req_no: number;
  job_title: string;
  location: string | null;
  work_arrangement: string | null;
  contract_type: string | null;
  department: string | null;
  specialization: string | null;
  industry: string[];
  seniority_level: string[];
  tags: string[];
  tech_stack: string[];
  years_experience: YearsExperience | null;
  salary: Salary | null;
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

export type JdGroup = {
  department: string;
  roles: PublicJd[];
};

// Every current req has a department, but the manifest doesn't guarantee it,
// so anything missing collects here and is pinned to the bottom.
const UNCATEGORIZED = "Other";

/** Bucket roles by department: largest group first, "Other" always last. */
export function groupByDepartment(roles: PublicJd[]): JdGroup[] {
  const buckets = new Map<string, PublicJd[]>();

  for (const role of roles) {
    const key = role.department?.trim() || UNCATEGORIZED;
    const existing = buckets.get(key);
    if (existing) existing.push(role);
    else buckets.set(key, [role]);
  }

  return [...buckets.entries()]
    .map(([department, group]) => ({
      department,
      roles: [...group].sort((a, b) => a.job_title.localeCompare(b.job_title)),
    }))
    .sort((a, b) => {
      if (a.department === UNCATEGORIZED) return 1;
      if (b.department === UNCATEGORIZED) return -1;
      return b.roles.length - a.roles.length || a.department.localeCompare(b.department);
    });
}

/** "$120K – $140K", "$110K+", or null when there's nothing worth showing. */
export function formatSalary(salary: Salary | null): string | null {
  if (!salary) return null;
  const k = (n: number) => `$${Math.round(n / 1000)}K`;
  const { min, max } = salary;
  if (min && max) return `${k(min)} – ${k(max)}`;
  if (min) return `${k(min)}+`;
  if (max) return `Up to ${k(max)}`;
  return null;
}

/** "8+ yrs", "4–12 yrs", or null. */
export function formatExperience(yoe: YearsExperience | null): string | null {
  if (!yoe) return null;
  const { low, high } = yoe;
  if (low && high) return `${low}–${high} yrs`;
  if (low) return `${low}+ yrs`;
  if (high) return `Up to ${high} yrs`;
  return null;
}
