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

interface JobData {
  job_title?: string;
  location?: string;
  tags?: string[];
  about_company?: string;
  about_role?: string;
  responsibilities?: string[];
  requirements?: string[];
  [key: string]: unknown;
}

function formatList(items: string[] | undefined): string[] {
  if (!items || !Array.isArray(items)) return [];
  return items.filter(item => item && typeof item === 'string' && item.trim().length > 0);
}

function formatText(text: string | undefined): string {
  if (!text || typeof text !== 'string') return '';
  return text.trim();
}

export default function JDPanel({ role }: JDPanelProps) {
  // Debug: Log the data to understand what we're working with
  console.log('JDPanel - role data:', role);
  console.log('JDPanel - sourceJdJson:', role.sourceJdJson);
  
  // Parse the JSON data if available
  const jobData = role.sourceJdJson && typeof role.sourceJdJson === 'object' && role.sourceJdJson !== null
    ? role.sourceJdJson as JobData
    : null;
    
  console.log('JDPanel - parsed jobData:', jobData);

  return (
    <div className="rounded-2xl border border-neutral-800 p-6 bg-black/60 text-white shadow-sm space-y-6">
      {/* Job Title */}
      <div>
        <h2 className="text-xl font-bold text-red-400 mb-2">
          {jobData?.job_title || role.title}
        </h2>
      </div>

      {/* Location */}
      {(jobData?.location || role.location) && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
          <p className="text-neutral-200">
            {formatText(jobData?.location) || role.location}
          </p>
        </div>
      )}

      {/* Tags */}
      {jobData?.tags && formatList(jobData.tags).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {formatList(jobData.tags).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-sm text-red-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* About the Company */}
      {jobData?.about_company && formatText(jobData.about_company) && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">About the Company</h3>
          <div className="text-neutral-200 leading-relaxed whitespace-pre-wrap">
            {formatText(jobData.about_company)}
          </div>
        </div>
      )}

      {/* About the Role */}
      {jobData?.about_role && formatText(jobData.about_role) && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">About the Role</h3>
          <div className="text-neutral-200 leading-relaxed whitespace-pre-wrap">
            {formatText(jobData.about_role)}
          </div>
        </div>
      )}

      {/* Responsibilities */}
      {jobData?.responsibilities && formatList(jobData.responsibilities).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Responsibilities</h3>
          <ul className="space-y-2">
            {formatList(jobData.responsibilities).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-200">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {jobData?.requirements && formatList(jobData.requirements).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
          <ul className="space-y-2">
            {formatList(jobData.requirements).map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-200">
                <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Fallback to plain text if no structured data */}
      {!jobData && role.jd_text && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Job Description</h3>
          <div className="text-neutral-200 leading-relaxed whitespace-pre-wrap">
            {role.jd_text}
          </div>
        </div>
      )}

      {/* Show message if no job description available */}
      {!jobData && !role.jd_text && (
        <div className="text-center py-8">
          <p className="text-neutral-400">No detailed job description available.</p>
        </div>
      )}

      {/* Debug section - remove after fixing */}
      <div className="bg-red-900/20 border border-red-500/30 p-4 rounded mt-6">
        <h3 className="text-red-400 font-semibold mb-2">Debug Info:</h3>
        <div className="text-xs text-gray-300 space-y-2">
          <div><strong>Has sourceJdJson:</strong> {role.sourceJdJson ? 'Yes' : 'No'}</div>
          <div><strong>Has jd_text:</strong> {role.jd_text ? 'Yes' : 'No'}</div>
          <div><strong>Parsed jobData:</strong> {jobData ? 'Yes' : 'No'}</div>
          {jobData && (
            <div>
              <strong>Available fields:</strong> {Object.keys(jobData).join(', ')}
            </div>
          )}
          <div className="mt-2">
            <strong>Raw sourceJdJson:</strong>
            <pre className="text-xs mt-1 max-h-40 overflow-y-auto">
              {JSON.stringify(role.sourceJdJson, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}