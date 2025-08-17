import Link from "next/link";

export default function ServicesPage() {
  const sections = [
    {
      title: "Executive Search",
      bullets: [
        "Founder, VP, Director",
        "Tight briefs. Crisp updates.",
        "Targeted outreach. Decision-ready finals.",
      ],
    },
    {
      title: "Contract Recruiting",
      bullets: [
        "On-demand recruiter in your system",
        "Weekly sprints aligned to active reqs",
        "Pipeline, interviews, offers end-to-end",
      ],
    },
    {
      title: "Pre-Screening as a Service (PSaaS)",
      bullets: [
        "You bring applicants. We screen.",
        "AI score + human verdict + transcript pulls",
        "You only meet the ones worth your time",
      ],
    },
    {
      title: "Add-ons",
      bullets: [
        "Interview design and rubrics",
        "Candidate messaging refresh",
        "Employer brand quick pass",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Services</h1>
        <div className="space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-800 p-6">
              <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
              <ul className="list-disc list-inside space-y-1 text-neutral-300">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/contact" className="rounded bg-white/10 px-3 py-2 hover:bg-white/20">Tell us your top priority role</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


