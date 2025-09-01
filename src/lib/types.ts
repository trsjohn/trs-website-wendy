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

  // Safe string extraction
  const getString = (obj: Record<string, unknown>, key: string): string | null => {
    const value = obj[key];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      // Filter out empty strings and literal "null" strings
      if (trimmed && trimmed.toLowerCase() !== 'null') {
        return trimmed;
      }
    }
    return null;
  };

  // Safe array extraction
  const getStringArray = (obj: Record<string, unknown>, key: string): string[] => {
    const value = obj[key];
    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }
    return [];
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

  // Handle TRS template format (trs_jd_* fields)
  const isTrsFormat = j.trs_jd_about_company || j.trs_jd_about_role;
  
  if (isTrsFormat) {
    return {
      title: getString(j, 'title') || "Job Description",
      level: getString(j, 'level'),
      locations: getStringArray(j, 'locations'),
      location_type: getString(j, 'location_type'),
      remote_policy: getString(j, 'remote_policy'),
      employment_type: getString(j, 'employment_type'),
      salary: getString(j, 'trs_jd_job_compensation') || getString(j, 'salary'),
      tags: getStringArray(j, 'tags'),
      about_company: getString(j, 'trs_jd_about_company'),
      about_role: getString(j, 'trs_jd_about_role'),
      responsibilities: getStringArray(j, 'trs_jd_job_duties'),
      requirements: getStringArray(j, 'trs_jd_job_skills'),
      nice_to_haves: getStringArray(j, 'nice_to_haves'),
      benefits: getStringArray(j, 'benefits'),
    };
  }

  // Handle standard format
  return {
    title: getString(j, 'title') || "Untitled Role",
    level: getString(j, 'level'),
    locations: getStringArray(j, 'locations'),
    location_type: getString(j, 'location_type'),
    remote_policy: getString(j, 'remote_policy'),
    employment_type: getString(j, 'employment_type'),
    salary: getString(j, 'salary') || getString(j, 'compensation'),
    tags: getStringArray(j, 'tags'),
    about_company: getString(j, 'about_company'),
    about_role: getString(j, 'about_role'),
    responsibilities: getStringArray(j, 'responsibilities') || getStringArray(j, 'duties'),
    requirements: getStringArray(j, 'requirements') || getStringArray(j, 'skills'),
    nice_to_haves: getStringArray(j, 'nice_to_haves'),
    benefits: getStringArray(j, 'benefits'),
  };
}
