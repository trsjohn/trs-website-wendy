import Link from "next/link";

export default function ServicesPage() {
  const sections = [
    {
      title: "Executive Search",
      bullets: [
        "We specialize in leadership hiring: Founders, VPs, and Directors who shape the trajectory of your company.",
        "We start with a tight intake brief that clarifies must-haves, nice-to-haves, and cultural fit.",
        "Expect crisp updates and transparent reporting, so you're never left guessing where things stand.",
        "Our targeted outreach goes deep into networks, surfacing decision-ready finalists instead of a flood of resumes.",
        "You focus on your top priority role — we make sure the right leader is in the seat.",
      ],
    },
    {
      title: "Contract Recruiting",
      bullets: [
        "Plug in an on-demand recruiter who works directly inside your systems and processes.",
        "We run weekly sprints tied to active requisitions, so progress is predictable and measurable.",
        "From sourcing to pipeline building, through interviews, feedback loops, and offers — we own the full cycle.",
        "You get the flexibility of scaling recruiting up or down without adding permanent headcount.",
        "Tell us your top priority role, and we'll start moving candidates through the funnel immediately.",
      ],
    },
    {
      title: "Pre-Screening as a Service (PSaaS)",
      bullets: [
        "You bring the inbound applicants — we handle the heavy lifting.",
        "Every candidate gets run through our AI scoring model combined with a human-in-the-loop verdict.",
        "We pull transcripts from structured calls, giving you both the raw conversation and a scored summary.",
        "You only meet the candidates worth your time, with full visibility into why they're recommended.",
      ],
    },
    {
      title: "Recruiting Engine Buildout",
      bullets: [
        "For companies that don't need a recruiter, but need a system. We come in, design, and implement a complete recruiting engine that your team can run internally.",
        "End-to-end workflow design: sourcing → outreach → screening → tracking → reporting",
        "Custom candidate scoring rubrics and interview guides",
        "Tech stack setup and automation (ATS, messaging, integrations)",
        "Training your team to run the process without outside recruiters",
        "Documented playbooks and benchmarks tailored to your hiring goals",
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


