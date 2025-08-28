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
  req_number?: string;
  job_title?: string;
  client?: string;
  tags?: string[];
  level?: string;
  open_positions?: number;
  contract_type?: string;
  location?: string;
  compensation?: string;
  remote_policy?: string;
  about_company?: string;
  about_role?: string;
  responsibilities?: string[];
  requirements?: string[];
  tech_stack?: string[];
  [key: string]: any;
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
  if (!role.sourceJdJson) {
    return (
      <div className="rounded-2xl border border-neutral-800 p-4 bg-black/60 text-white shadow-sm">
        <h2 className="font-semibold text-lg mb-3">No job description available</h2>
      </div>
    );
  }

  const jobData = role.sourceJdJson as JobData;

  return (
    <div className="rounded-2xl border border-neutral-800 p-6 bg-black/60 text-white shadow-sm space-y-4">
      {/* Req Details */}
      <div>
        <h2 className="font-bold text-lg mb-3 text-red-400">Req Details</h2>
        
        {jobData.req_number && (
          <div className="mb-2">
            <span className="font-semibold">Req #{jobData.req_number}</span>
          </div>
        )}
        
        <div className="space-y-2 text-sm">
          {jobData.job_title && (
            <div>
              <span className="font-semibold text-neutral-300">Job Title</span>
              <div className="text-white">{formatText(jobData.job_title)}</div>
            </div>
          )}
          
          {jobData.client && (
            <div>
              <span className="font-semibold text-neutral-300">Client</span>
              <div className="text-white">{formatText(jobData.client)}</div>
            </div>
          )}
          
          {formatList(jobData.tags).length > 0 && (
            <div>
              <span className="font-semibold text-neutral-300">Tags</span>
              <div className="text-white">
                {formatList(jobData.tags).join('\n')}
              </div>
            </div>
          )}
          
          {jobData.level && (
            <div>
              <span className="font-semibold text-neutral-300">Level</span>
              <div className="text-white">{formatText(jobData.level)}</div>
            </div>
          )}
          
          {jobData.open_positions && (
            <div>
              <span className="font-semibold text-neutral-300">Open Positions</span>
              <div className="text-white">{jobData.open_positions}</div>
            </div>
          )}
          
          {jobData.contract_type && (
            <div>
              <span className="font-semibold text-neutral-300">Contract Type</span>
              <div className="text-white">{formatText(jobData.contract_type)}</div>
            </div>
          )}
          
          {jobData.location && (
            <div>
              <span className="font-semibold text-neutral-300">Location</span>
              <div className="text-white">{formatText(jobData.location)}</div>
            </div>
          )}
          
          {jobData.compensation && (
            <div>
              <span className="font-semibold text-neutral-300">Compensation</span>
              <div className="text-white">{formatText(jobData.compensation)}</div>
            </div>
          )}
          
          {jobData.remote_policy && (
            <div>
              <span className="font-semibold text-neutral-300">Remote Policy</span>
              <div className="text-white">{formatText(jobData.remote_policy)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Job Description */}
      <div>
        <h2 className="font-bold text-lg mb-3 text-red-400">Job Description</h2>
        
        {jobData.about_company && (
          <div className="mb-4">
            <h3 className="font-semibold text-neutral-300 mb-2">About the Company</h3>
            <div className="text-white text-sm whitespace-pre-wrap leading-relaxed">
              {formatText(jobData.about_company)}
            </div>
          </div>
        )}
        
        {jobData.about_role && (
          <div className="mb-4">
            <h3 className="font-semibold text-neutral-300 mb-2">About the Role</h3>
            <div className="text-white text-sm whitespace-pre-wrap leading-relaxed">
              {formatText(jobData.about_role)}
            </div>
          </div>
        )}
        
        {formatList(jobData.responsibilities).length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-neutral-300 mb-2">Responsibilities</h3>
            <div className="text-white text-sm space-y-2">
              {formatList(jobData.responsibilities).map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {formatList(jobData.requirements).length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-neutral-300 mb-2">Requirements</h3>
            <div className="text-white text-sm space-y-2">
              {formatList(jobData.requirements).map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {formatList(jobData.tech_stack).length > 0 && (
          <div>
            <h3 className="font-semibold text-neutral-300 mb-2">Tech Stack</h3>
            <div className="text-white text-sm space-y-1">
              {formatList(jobData.tech_stack).map((item, index) => (
                <div key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}