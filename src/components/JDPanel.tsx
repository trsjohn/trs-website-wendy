"use client";

interface JDPanelProps {
  role: {
    id: string;
    title: string;
    client?: string;
    location?: string | null;
    comp?: string | null;
    jd_text?: string;
    sourceJdJson?: unknown | null;
  };
}

interface ParsedJobData {
  job_title?: string;
  location?: string;
  tags?: string[];
  about_company?: string;
  about_role?: string;
  responsibilities?: string[];
  requirements?: string[];
  tech_stack?: string[];
  compensation?: string;
  [key: string]: unknown;
}

export default function JDPanel({ role }: JDPanelProps) {
  // Parse the JSON data
  let parsedData: ParsedJobData | null = null;
  try {
    if (role.sourceJdJson && typeof role.sourceJdJson === 'object') {
      parsedData = role.sourceJdJson as ParsedJobData;
    }
  } catch (error) {
    console.error('Error parsing job description JSON:', error);
  }

  // Fallback to basic display if no structured data
  if (!parsedData) {
    return (
      <div className="rounded-2xl border border-neutral-800 p-6 bg-black/60 text-white shadow-sm space-y-4">
        <div>
          <h2 className="font-semibold text-xl mb-2">
            {role.title}
            {role.client ? <> — {role.client}</> : null}
          </h2>
          {role.location && <p className="text-sm text-gray-300 mb-1">📍 {role.location}</p>}
          {role.comp && <p className="text-sm text-gray-300 mb-3">💰 {role.comp}</p>}
        </div>

        {role.jd_text && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Job Description</h3>
            <div className="text-sm text-gray-300 bg-neutral-800/50 p-3 rounded-md">
              <pre className="whitespace-pre-wrap">{role.jd_text}</pre>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-800 p-6 bg-black/60 text-white shadow-sm space-y-6">
      {/* Job Title */}
      <div>
        <h2 className="font-semibold text-xl mb-2">
          {parsedData.job_title || role.title}
          {role.client ? <> — {role.client}</> : null}
        </h2>
      </div>

      {/* Location */}
      {(parsedData.location || role.location) && (
        <div>
          <p className="text-sm text-gray-300">
            📍 {parsedData.location || role.location}
          </p>
        </div>
      )}

      {/* Tags */}
      {parsedData.tags && parsedData.tags.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {parsedData.tags.map((tag: string, index: number) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* About the Company */}
      {parsedData.about_company && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">About the Company</h4>
          <div className="text-sm text-gray-300 bg-neutral-800/50 p-3 rounded-md">
            {parsedData.about_company}
          </div>
        </div>
      )}

      {/* About the Role */}
      {parsedData.about_role && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">About the Role</h4>
          <div className="text-sm text-gray-300 bg-neutral-800/50 p-3 rounded-md">
            {parsedData.about_role}
          </div>
        </div>
      )}

      {/* Responsibilities */}
      {parsedData.responsibilities && parsedData.responsibilities.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Responsibilities</h4>
          <div className="space-y-1">
            {parsedData.responsibilities.map((responsibility: string, index: number) => (
              <div key={index} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Requirements */}
      {parsedData.requirements && parsedData.requirements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Requirements</h4>
          <div className="space-y-1">
            {parsedData.requirements.map((requirement: string, index: number) => (
              <div key={index} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1.5 flex-shrink-0">•</span>
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {parsedData.tech_stack && parsedData.tech_stack.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {parsedData.tech_stack.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300 border border-purple-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Compensation (if available) */}
      {(parsedData.compensation || role.comp) && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Compensation</h4>
          <div className="text-sm text-gray-300 bg-neutral-800/50 p-3 rounded-md">
            💰 {parsedData.compensation || role.comp}
          </div>
        </div>
      )}
    </div>
  );
}