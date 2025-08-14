import Link from "next/link";

export default function ServicesPage() {
  const sections = [
    {
      title: "Pre-Screening-as-a-Service (PSaaS)",
      bullets: [
        "AI-enhanced phone screens run by experienced recruiters.",
        "Custom rubrics, transcripts, and recordings delivered instantly.",
        "Pass/fail clarity so hiring managers only spend time on top-tier candidates.",
      ],
    },
    {
      title: "Contract Recruiting",
      bullets: [
        "Your dedicated recruiter + our tech stack, on demand.",
        "We run sprint-based hiring aligned to your goals, combining high-touch outreach with automation.",
        "Weekly operating cadence, outcomes over output, and visibility through our client portal.",
      ],
    },
    {
      title: "Executive Search",
      bullets: [
        "Founder, VP, and Director-level hiring — powered by TRS's human expertise + proprietary recruiting OS.",
        "Structured pipelines, AI-optimized sourcing, and decision-ready scorecards.",
        "Crisp updates, transparent dashboards, and candidate briefs that make hiring fast and clear.",
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
                <Link href="/contact" className="rounded bg-white/10 px-3 py-2 hover:bg-white/20">Contact us</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


