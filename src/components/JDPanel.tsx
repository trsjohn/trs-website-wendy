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

export default function JDPanel({ role }: JDPanelProps) {
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

      {role.sourceJdJson ? (
        <section className="text-sm mt-3">
          <h3 className="font-semibold mb-1">Source Job Description (JSON)</h3>
          <pre className="whitespace-pre-wrap opacity-90 text-neutral-300">
            {JSON.stringify(role.sourceJdJson, null, 2)}
          </pre>
        </section>
      ) : null}
    </div>
  );
}