export type JD = {
  title: string;
  level?: string | null;
  locations?: string[];
  location_type?: string | null;
  remote_policy?: string | null;
  employment_type?: string | null;
  salary?: string | null;
  tags?: string[];
  about_company?: string | null;
  about_role?: string | null;
  responsibilities?: string[];
  requirements?: string[];
  nice_to_haves?: string[];
  benefits?: string[];
};

export function normalizeJD(raw: unknown): JD {
  // Type guard to ensure we're working with an object
  const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null;
  };

  let j: Record<string, unknown> = {};
  
  if (isObject(raw)) {
    // Try to extract from nested structures
    if (isObject(raw.parsed) && isObject(raw.parsed.json)) {
      j = raw.parsed.json;
    } else if (isObject(raw.json)) {
      j = raw.json;
    } else {
      j = raw;
    }
  }

  return {
    title: typeof j.title === 'string' ? j.title : "Untitled Role",
    level: typeof j.level === 'string' ? j.level : null,
    locations: Array.isArray(j.locations) ? j.locations.filter((loc): loc is string => typeof loc === 'string') : [],
    location_type: typeof j.location_type === 'string' ? j.location_type : null,
    remote_policy: typeof j.remote_policy === 'string' ? j.remote_policy : null,
    employment_type: typeof j.employment_type === 'string' ? j.employment_type : null,
    salary: typeof j.salary === 'string' ? j.salary : null,
    tags: Array.isArray(j.tags) ? j.tags.filter((tag): tag is string => typeof tag === 'string') : [],
    about_company: typeof j.about_company === 'string' ? j.about_company : null,
    about_role: typeof j.about_role === 'string' ? j.about_role : null,
    responsibilities: Array.isArray(j.responsibilities) ? j.responsibilities.filter((resp): resp is string => typeof resp === 'string') : [],
    requirements: Array.isArray(j.requirements) ? j.requirements.filter((req): req is string => typeof req === 'string') : [],
    nice_to_haves: Array.isArray(j.nice_to_haves) ? j.nice_to_haves.filter((nth): nth is string => typeof nth === 'string') : [],
    benefits: Array.isArray(j.benefits) ? j.benefits.filter((ben): ben is string => typeof ben === 'string') : [],
  };
}
