"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StaggeredReveal from "@/components/StaggeredReveal";
import LogoMarquee from "@/components/LogoMarquee";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { Target, Zap, Search, BarChart3, BadgeCheck, TrendingUp, ArrowDown, CheckCircle, XCircle } from "lucide-react";

export default function HomePage() {
  const SafeIcon = ({ Icon, className = "" }: { Icon: React.ElementType; className?: string }) =>
    Icon ? <Icon className={className} aria-hidden /> : <span className={className} aria-hidden>•</span>;

  const testimonials = [
    {
      pull: (
        <>
          <span className="text-red-500 font-extrabold">Best</span> recruiter I have worked with
        </>
      ),
      full: "Best recruiter I have worked with",
      author: "Hector G.",
      role: "People Operations, Environmental Services Company",
      avatar: "/clients/buzzsolutionsinc_logo.jpg",
    },
    {
      pull: (
        <>
          I feel <span className="text-red-500 font-extrabold">great</span> about the role
        </>
      ),
      full: "I feel great about the role! Both of you are recruiting heroes — this job sounds awesome.",
      author: "Joe",
      role: "Red Team Engineer",
      avatar: "/clients/LbclC98S_400x400.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best match</span> I have had so far
        </>
      ),
      full: "I am definitely excited to start this venture with them. I too believe this is the best match I've had so far.",
      author: "Brandi",
      role: "CISO",
      avatar: "/clients/insight_assurance_logo.jpg",
    },
    {
      pull: (
        <>
          The first time a firm actually <span className="text-red-500 font-extrabold">delivered</span>
        </>
      ),
      full: "I am impressed. This is the first time working with a recruiting company that anything actually panned out. Usually I find it's a waste of time.",
      author: "Alex",
      role: "Security Advisor",
      avatar: "/clients/channels4_profile.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">most thoughtful</span> process I have experienced
        </>
      ),
      full: "This was a really smooth process and I loved the style of your questions. They were really thoughtful and I enjoyed our conversations.",
      author: "Candidate",
      role: "Placed via TRS",
      avatar: "/clients/consilium_labs_logo.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best partner relationship</span> we have had
        </>
      ),
      full: "You've been the best recruiter relationship we've had — really appreciate it.",
      author: "Matt",
      role: "CEO, Cybersecurity Firm",
      avatar: "/clients/consilium_labs_logo.jpg",
    },
  ];

  return (
    <div className="space-y-0">

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-5xl">
          <StaggeredReveal delay={100}>
            <h1 className="text-[clamp(3.4rem,9vw,7rem)] font-black leading-[0.9] uppercase text-white">
              Recruiting is
              <span className="text-red-500"> broken.</span>
              <br />
              We fixed it.
            </h1>
          </StaggeredReveal>

          <StaggeredReveal delay={300}>
            <p className="mt-8 text-lg text-neutral-300 max-w-2xl leading-relaxed">
              TRS is an embedded talent partner for technical companies that need to hire well, fast, and without building an internal recruiting team. We provide a proprietary infrastructure and pipeline managed by seasoned recruiting experts.
            </p>
          </StaggeredReveal>

          <StaggeredReveal delay={450}>
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-sm">
              <div>
                <div className="text-4xl font-black text-red-500">9</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Days to First Shortlist</div>
              </div>
              <div>
                <div className="text-4xl font-black text-red-500">135+</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Roles Closed</div>
              </div>
              <div>
                <div className="text-4xl font-black text-red-500">21</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Day Avg. Time to Hire</div>
              </div>
            </div>
          </StaggeredReveal>

          <StaggeredReveal delay={600}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" aria-label="Talk to us">
                <Button className="px-8 h-12 border border-red-500 shadow-md shadow-red-500/30 text-base font-bold uppercase tracking-wider">Talk to Us</Button>
              </Link>
              <Link href="/#how-it-works" aria-label="See how it works">
                <Button variant="ghost" className="px-8 h-12 text-base font-bold uppercase tracking-wider">See How It Works</Button>
              </Link>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* ── Logos ── */}
      <section aria-label="Trusted by" className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-t border-white/10">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Trusted By</p>
          <LogoMarquee
            className="rounded-xl p-2"
            durationSeconds={25}
            logos={[
              { src: "/clients/0_0.jpg", alt: "Client Logo" },
              { src: "/clients/0_3.jpg", alt: "Client Logo" },
              { src: "/clients/1749691145498.jpg", alt: "Client Logo" },
              { src: "/clients/American_Express_logo_(2018).svg", alt: "American Express" },
              { src: "/clients/buzzsolutionsinc_logo.jpg", alt: "Buzz Solutions" },
              { src: "/clients/channels4_profile.jpg", alt: "Client Logo" },
              { src: "/clients/consilium_labs_logo.jpg", alt: "Consilium Labs" },
              { src: "/clients/exa_ai_logo.jpg", alt: "Exa AI" },
              { src: "/clients/grsee_consulting_logo.jpg", alt: "GRSee Consulting" },
              { src: "/clients/hightouchio_logo.jpg", alt: "Hightouch" },
              { src: "/clients/images.jpg", alt: "Client Logo" },
              { src: "/clients/insight_assurance_logo.jpg", alt: "Insight Assurance" },
              { src: "/clients/LbclC98S_400x400.jpg", alt: "Client Logo" },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <blockquote className="text-neutral-300 italic text-sm">
              &quot;TRS gave us finalists in 5 days. Faster than our internal team. Filtered down from 250 candidates.&quot;
            </blockquote>
            <cite className="text-neutral-500 text-xs mt-2 block not-italic">— Abby W., HR Executive</cite>
          </div>
        </Reveal>
      </section>

      {/* ── Not a Recruiting Agency ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-widest text-red-500">What TRS Actually Is</p>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black uppercase text-white leading-tight">
                Not a Standard Recruiting Agency
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Most firms send you a stack of resumes and wait for a check. TRS runs your entire hiring process — intake, sourcing, scoring, screening, coordination, offer negotiation — on infrastructure we built from scratch. You do not manage us. We report to you like an internal team.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                We built our own end-to-end platform because the tools that exist were not built by people who understood recruiting. Ours is. Every candidate we submit has been auto-sourced, scored against a custom model built from your actual requirements, and personally screened by a senior recruiter with decades of domain experience.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                The result is more time to focus on your business. Let us labor over the details. Just make the final critical decisions.
              </p>
            </div>
            <div className="border-l border-white/10 pl-10 space-y-6">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Case Studies</p>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">15 Days</div>
                <div className="text-sm text-neutral-300">Head of Engineering placed for a cybersecurity firm. Role had been open for months before TRS was engaged.</div>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-1">
                <div className="text-3xl font-black text-white">6 Roles, 1 Month</div>
                <div className="text-sm text-neutral-300">AEs, CSMs, and an SDR hired for a technical services company. Every candidate sourced outbound by TRS.</div>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-1">
                <div className="text-3xl font-black text-white">7 Roles, 1 Client</div>
                <div className="text-sm text-neutral-300">Security and GTM roles across a single retained engagement. TRS acted as the company&apos;s full talent function for the duration.</div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold leading-relaxed">The software handles volume. The humans handle judgment. Every submission reflects both.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Who We Serve ── */}
      <section
        id="who-we-serve"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24"
      >
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Who We Serve</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">Built for a Specific Situation</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              TRS works best for a specific kind of company. The industry varies. The situations do not.
            </p>
          </div>

          {/* Self-identification checklist */}
          <div className="grid md:grid-cols-3 gap-px bg-white/10 mb-px">
            {[
              {
                title: "Your roles require real domain knowledge",
                description: "A generalist recruiter would not know a strong candidate from a weak one. The role has technical depth, specialized credentials, or niche experience that most firms have never sourced for.",
                icon: Target,
              },
              {
                title: "You have no dedicated recruiting function",
                description: "A founder doing their own hiring, one HR person managing ten other things, or nothing at all. Hiring is falling on someone for whom it is not the primary job.",
                icon: Zap,
              },
              {
                title: "You have real revenue and real urgency",
                description: "An unfilled role has a direct cost to the business. You are not on a long runway waiting to see what happens. The right hire matters and so does the timeline.",
                icon: TrendingUp,
              },
              {
                title: "You are weighing a full-time recruiter hire",
                description: "If you are about to post a Director of Talent Acquisition, talk to us first. The math usually favors a retained partner over a salaried hire before you reach consistent high volume.",
                icon: BarChart3,
              },
              {
                title: "You have been burned by a firm before",
                description: "You paid a retainer or a placement fee and got a stack of irrelevant profiles. You know what bad looks like and you are not interested in repeating it.",
                icon: BadgeCheck,
              },
              {
                title: "You need executive or leadership search",
                description: "High-stakes hires where the wrong call sets you back a year. vCISO, CISO, Head of Engineering, Head of Sales, founding team roles. We have placed them.",
                icon: Search,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200"
              >
                <SafeIcon Icon={item.icon} className="h-5 w-5 text-red-500 mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/contact" aria-label="Talk to us">
              <Button className="px-8 h-11 font-bold uppercase tracking-wider">Talk to Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Industries We Know ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Domain Depth</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none max-w-4xl">
              We Know These Worlds
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl text-sm">
              These are the domains where we thrive, with direct experience, closed placements, and the knowledge to uniquely evaluate candidates.
            </p>
          </div>
 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {[
              {
                domain: "Cybersecurity and compliance services",
                detail: "SOC 2 auditors, vCISO providers, penetration testing firms, FedRAMP consultants. We know the difference between a SOC analyst and a SOC 2 auditor. We have filled both.",
              },
              {
                domain: "Defense and government engineering",
                detail: "Systems engineers, RF and radar specialists, ISR software developers, and defense-adjacent technical roles. Highly specialized candidate pools that generic sourcing cannot reach.",
              },
              {
                domain: "Deep tech and hardware",
                detail: "ML engineers, computer vision specialists, embedded systems, signal processing. Roles where the technical bar is high and the candidate pool is small.",
              },
              {
                domain: "Technical B2B services",
                detail: "Engineering services and professional services companies where every hire needs to understand the domain they are delivering into.",
              },
              {
                domain: "GTM for technical companies",
                detail: "Sales, CS, and BD roles where the product or service requires real explanation. Domain-fluent candidates who can have the conversation from day one.",
              },
              {
                domain: "Executive and C-suite search",
                detail: "Leadership hires across all of the above. High-stakes searches with structured evaluation and full screening reports.",
              },
            ].map(({ domain, detail }) => (
              <div key={domain} className="bg-neutral-950 p-6 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-200">
                <h3 className="font-black text-white text-lg uppercase tracking-wide leading-snug">{domain}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Model Comparison</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">
              Run the Numbers
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              The decision most growing companies face is not TRS versus another firm. It is TRS versus hiring someone full-time. Here is what that actually looks like.
            </p>
          </div>

          <div className="border-t border-b border-white/10">
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-500 w-1/4"></th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-400 w-1/4">Internal recruiter</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-400 w-1/4">Contingency agency</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-red-500 w-1/4 border-l border-red-500/30 bg-red-500/5">TRS retained</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    {
                      label: "Annual cost",
                      internal: "$90–115k salary + benefits + ATS tools",
                      contingency: "$15–25% per hire (~$20k per $100k role)",
                      trs: "Starting at $5k/mo",
                    },
                    {
                      label: "Roles per year",
                      internal: "15–25 avg.",
                      contingency: "Unlimited but expensive at scale",
                      trs: "Unlimited active roles",
                    },
                    {
                      label: "Ramp time",
                      internal: "60–90 days to full productivity",
                      contingency: "Fast to start, no process ownership",
                      trs: "Same day",
                    },
                    {
                      label: "Pipeline visibility",
                      internal: "ATS dependent",
                      contingency: "None",
                      trs: "Real-time, full funnel",
                    },
                    {
                      label: "Data ownership",
                      internal: "Yours",
                      contingency: "They own the candidate relationship",
                      trs: "Yours — full access and export, always",
                    },
                    {
                      label: "Culture depth",
                      internal: "High over time",
                      contingency: "Low — generalist sourcing",
                      trs: "High from day one",
                    },
                    {
                      label: "Avg. time to hire",
                      internal: "40–60 days",
                      contingency: "30–45 days",
                      trs: "21 days",
                    },
                    {
                      label: "What happens if hiring slows",
                      internal: "Fixed cost regardless of volume",
                      contingency: "No cost, no continuity",
                      trs: "Pause or adjust — no long-term lock-in",
                    },
                  ].map(({ label, internal, contingency, trs }, i) => (
                    <tr key={i} className="align-top text-sm">
                      <td className="px-6 py-4 font-bold uppercase tracking-wide text-white text-xs">{label}</td>
                      <td className="px-6 py-4 text-neutral-400">{internal}</td>
                      <td className="px-6 py-4 text-neutral-400">{contingency}</td>
                      <td className="px-6 py-4 font-semibold text-white border-l border-red-500/30 bg-red-500/5">{trs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden divide-y divide-white/10">
              {[
                { label: "Annual cost", others: "$90k–115k (internal) or $20k/hire (contingency)", trs: "Starting at $5k/mo" },
                { label: "Avg. time to hire", others: "30–60 days", trs: "21 days" },
                { label: "Pipeline visibility", others: "None or ATS only", trs: "Real-time, full funnel" },
                { label: "Data ownership", others: "Yours or theirs", trs: "Always yours" },
                { label: "Ramp time", others: "60–90 days (internal)", trs: "Same day" },
                { label: "Culture depth", others: "Low to medium", trs: "High from day one" },
              ].map(({ label, others, trs }, i) => (
                <div key={i} className="p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">{label}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 p-3">
                      <div className="text-xs uppercase tracking-wide text-neutral-500 mb-1">Others</div>
                      <div className="text-sm text-neutral-300">{others}</div>
                    </div>
                    <div className="bg-red-500/10 p-3 ring-1 ring-red-500/30">
                      <div className="text-xs uppercase tracking-wide text-red-500 mb-1">TRS</div>
                      <div className="text-sm text-white font-semibold">{trs}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-2xl">
            <p className="text-neutral-300 text-sm leading-relaxed">
              If you are hiring 6 or more people a year, contingency fees compound fast. If you are not yet at consistent volume, a full-time recruiter salary is hard to justify. TRS sits in that window — embedded expertise, full process ownership, at a fraction of the overhead. When hiring slows, you are not carrying a fixed cost.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── What You Actually Get ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">What You Get</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none max-w-4xl">
              Everything That Goes Into a Hire
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              Every engagement includes the full stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                title: "Deep intake, not a job description hand-off",
                desc: "We extract the real job from a 30-minute conversation — must-haves, soft signals, red flags, culture context. No JD required. We write it.",
              },
              {
                title: "Real-time pipeline visibility",
                desc: "You see every candidate we have sourced, scored, and screened — not just the ones we decided to show you. Full funnel, full transparency, always.",
              },
              {
                title: "Scored shortlists with written rationale",
                desc: "Every submitted candidate arrives with a multi-dimensional scorecard, a full screening call report, and a clear recommendation. You interview with context.",
              },
              {
                title: "Senior screening calls",
                desc: "Every candidate is personally interviewed by an experienced recruiter before reaching you. Structured evaluation across technical fit, domain knowledge, culture signals, and communication.",
              },
              {
                title: "Candidate ownership and data",
                desc: "All pipeline data, conversation history, and candidate records belong to you. Full export at any time. Nothing is held hostage.",
              },
              {
                title: "Offer management and coordination",
                desc: "We handle scheduling, candidate communication, offer structuring, and negotiation. You show up to final interviews and make decisions.",
              },
              {
                title: "Slack or client portal integration",
                desc: "We work inside your existing communication setup. No new tool to learn. Status updates, submissions, and questions flow through wherever works for you.",
              },
              {
                title: "60-day replacement guarantee",
                desc: "If a placed candidate does not work out within 60 days, we replace them. We stand behind the work.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200 flex gap-4">
                <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-bold text-white text-lg uppercase tracking-wide mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Infrastructure ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">The Platform</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none max-w-4xl">
              Software helps us focus on what matters
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              The value of our infrastructure is not the technology. It is that the technology handles the operational work — sourcing volume, scoring, outreach, pipeline tracking — so the recruiter can focus entirely on judgment, culture read, and finding the right person for this specific team at this specific moment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "Req Synthesis",
                desc: "Every intake call, email, and Slack message is synthesized into a weighted scoring model specific to your role — including the things you mentioned once in passing.",
                badge: "AI-Driven",
                badgeStyle: "border border-red-800 text-red-700 bg-red-950/40",
              },
              {
                num: "02",
                title: "Auto Source",
                desc: "Candidates are sourced and scored against your synthesis, not generic keywords. The system works across thousands of profiles before a human ever reviews one.",
                badge: "AI-Scored",
                badgeStyle: "border border-red-800 text-red-700 bg-red-950/40",
              },
              {
                num: "03",
                title: "Outreach",
                desc: "Multi-touch sequences built from the req synthesis and personalized per candidate. Managed across LinkedIn, email, and SMS with full response tracking.",
                badge: "AI + Human",
                badgeStyle: "border border-red-900/60 text-red-400 bg-neutral-900",
              },
              {
                num: "04",
                title: "Messaging",
                desc: "Every candidate conversation — across every channel — lives in one place. Nothing falls through the gaps.",
                badge: "AI + Human",
                badgeStyle: "border border-red-900/60 text-red-400 bg-neutral-900",
              },
              {
                num: "05",
                title: "Screening",
                desc: "A senior recruiter conducts structured interviews with questions built from your synthesis. Scored across five behavioral dimensions with a full written report.",
                badge: "Human-Led",
                badgeStyle: "border border-neutral-700 text-neutral-400 bg-neutral-900",
              },
              {
                num: "06",
                title: "Submit",
                desc: "Candidate arrives with an AI-scored profile, a human screening report, and a recommendation. You have everything you need before the first interview.",
                badge: "AI + Human",
                badgeStyle: "border border-red-900/60 text-red-400 bg-neutral-900",
              },
            ].map(({ num, title, desc, badge, badgeStyle }) => (
              <div
                key={num}
                className="p-5 flex flex-col gap-3 bg-neutral-950 hover:bg-white/5 transition-colors duration-200"
              >
                <div className="text-3xl font-black text-red-500/60 leading-none">{num}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white">{title}</div>
                <p className="text-xs text-neutral-400 leading-relaxed flex-1">{desc}</p>
                <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${badgeStyle}`}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Roles We Know ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Roles We Know</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none max-w-4xl">
              Roles Most Firms Cannot Fill
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              Thirty years of experience placing technical and GTM talent across specialized industries. These are the roles where domain knowledge is the difference between a good search and a wasted one.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
            {[
              {
                category: "Security Leadership",
                roles: ["vCISO", "CISO", "Head of Cybersecurity", "Security Advisor", "Director of Security"],
              },
              {
                category: "Compliance and Audit",
                roles: ["SOC 2 Auditor", "FedRAMP Consultant", "GRC Analyst", "Compliance Manager", "Penetration Tester"],
              },
              {
                category: "Defense and Engineering",
                roles: ["Systems Engineer", "RF Engineer", "Signals Processing Engineer", "ISR Software Developer", "Algorithm Engineer"],
              },
              {
                category: "Technical Engineering",
                roles: ["Head of Engineering", "Founding Engineer", "ML Engineer", "Computer Vision Engineer", "Data Engineer"],
              },
              {
                category: "GTM for Technical Companies",
                roles: ["Head of Sales", "Account Executive", "Customer Success Manager", "SDR", "Partnership Manager"],
              },
            ].map(({ category, roles }) => (
              <div key={category} className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200">
                <p className="text-xs uppercase tracking-widest text-red-500 mb-4">{category}</p>
                <ul className="space-y-2">
                  {roles.map((role) => (
                    <li key={role} className="text-sm text-neutral-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" aria-hidden />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ── Testimonials ── */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">What Clients Say</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">from our partners</h2>
            <p className="text-neutral-400 mt-3">Founders, hiring managers, security leaders, and placed candidates.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-white/10 p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-white leading-tight">{t.author}</div>
                    {t.role && <div className="text-neutral-500 text-xs leading-tight">{t.role}</div>}
                  </div>
                </div>
                <blockquote className="mt-4">
                  <div className="text-lg font-bold leading-snug text-white">&ldquo;{t.pull}&rdquo;</div>
                </blockquote>
              </div>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ── Engagements ── */}
      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Engagements</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">How We Engage</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl">
                Our primary model is retained. It is where we do our best work and where clients see the most value. We offer contingency for a limited number of well-defined roles. Not sure which fits? We will tell you on the first call.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {[
                {
                  name: "Retained Partner",
                  tag: "Best Value",
                  desc: "The full TRS experience. Unlimited active roles, dedicated team, full pipeline management, real-time visibility, and ongoing partnership. This is how we operate as your embedded talent function. Starting at $5k/month.",
                  highlight: true,
                },
                {
                  name: "Success Based",
                  tag: null,
                  desc: "Available for 1 to 2 well-defined roles where a longer commitment does not make sense. You pay on hire. A small deposit is applied toward the success fee at placement. Best for specific, time-sensitive needs.",
                  highlight: false,
                },
                {
                  name: "Managed Service",
                  tag: 'Coming Soon',
                  desc: "TRS deploys its platform as your company\u2019s own recruiting infrastructure, then operates it on your behalf on an ongoing basis. Your own portal, your own pipeline, managed by us. For companies ready to build a real talent function without building a team.",
                  highlight: false,
                },
              ].map(({ name, tag, desc, highlight }) => (
                <div key={name} className={`py-6 flex flex-col sm:flex-row sm:items-center gap-4 ${highlight ? "sm:gap-8" : ""}`}>
                  <div className="sm:w-56 shrink-0 flex items-center gap-3">
                    <span className="font-black uppercase text-white text-base">{name}</span>
                    {tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-red-500 text-white px-2 py-0.5 shrink-0">{tag}</span>
                    )}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">{desc}</p>
                  <Link href="/contact" aria-label={`Learn more about ${name}`} className="shrink-0">
                    <Button variant="ghost" className="h-9 px-5 text-xs font-bold uppercase tracking-wider">Learn More</Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-neutral-300 text-sm">One call is all it takes to figure out what fits.</p>
              <Link href="/contact" aria-label="Talk to us">
                <Button className="px-6 h-10 shrink-0 font-bold uppercase tracking-wider text-sm">Talk to Us</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">The Process</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">Here Is Exactly What Happens</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">What the first days of an engagement actually look like.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                step: "01",
                title: "We Talk",
                desc: "One call. We align on the role, your team, and what a great hire actually looks like. You sign the intake agreement and we get to work the same day. No JD required — we write it.",
                detail: "Same-day start.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "TRS integrates into your Slack or gives you access to our client portal. Full pipeline visibility from day one. You see every candidate, every score, every note — nothing filtered before it reaches you.",
                detail: "Full visibility from the start.",
              },
              {
                step: "03",
                title: "You Hire",
                desc: "First shortlist in under 9 days. Every candidate arrives with a scorecard, screening call report, and a clear recommendation. We handle all coordination and offer negotiation.",
                detail: "Avg. time to hire: 21 days.",
              },
            ].map(({ step, title, desc, detail }) => (
              <div key={step} className="bg-neutral-950 p-8 hover:bg-white/5 transition-colors duration-200">
                <div className="text-5xl font-black text-red-500/40 leading-none mb-6">{step}</div>
                <h3 className="font-black uppercase text-white text-lg mb-3">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 border-t border-white/10 pt-8">
            <p className="text-white font-bold text-lg max-w-sm">Ready to see your first shortlist in under 9 days?</p>
            <Link href="/contact" aria-label="Talk to us">
              <Button className="px-8 h-11 font-bold uppercase tracking-wider shrink-0">Talk to Us</Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Common Questions</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">The Hard Questions</h2>
              <p className="text-neutral-400 mt-3 max-w-2xl">What people actually want to know before getting on a call.</p>
            </div>
            <div className="space-y-2">
              {[
                {
                  q: "How is this different from a contingency recruiter?",
                  a: "A contingency recruiter sends you profiles and collects a fee if you hire one. TRS runs the entire process — intake, sourcing, scoring, screening, coordination, offer management — on proprietary infrastructure. You get a partner with full accountability for outcomes, not a sourcing vendor hoping to get lucky.",
                },
                {
                  q: "We already tried a recruiter and it didn\u2019t work.",
                  a: "That is the most common thing we hear. Most firms send a stack of resumes and disappear. We own the process start to finish. Every submission comes with a scorecard and a screening report. If you have been burned before, you will recognize the difference immediately.",
                },
                {
                  q: "We are thinking about hiring an internal recruiter. Why would we use TRS instead?",
                  a: "A full-time recruiter runs $90–115k all-in before you factor in ATS tools, ramp time, and the risk of a bad hire. TRS starts at $5k/month with no ramp, no overhead, and no commitment if hiring slows. If you are at consistent high volume and need a cultural steward long-term, an internal hire can make sense. Before that point, the math usually favors a retained partner.",
                },
                {
                  q: "We don\u2019t have a job description ready.",
                  a: "Most JDs are wrong anyway. We extract the real job from a 30-minute intake call — must-haves, soft signals, red flags, culture context. We write the JD. You approve it. Then we build the search.",
                },
                {
                  q: "Our hiring bar is very specific.",
                  a: "Specific requirements are where we do our best work. The scoring model we build for your role is based on your actual requirements — including the things you only mentioned once. Generic sourcing fails on specific roles. Ours does not.",
                },
                {
                  q: "How fast is fast, really?",
                  a: "First shortlist in under 9 days. Average time to hire is 21 days. We have placed a Head of Engineering in 15 days and filled 6 GTM roles in one month. That is the system working, not the exception.",
                },
                {
                  q: "We already have an internal recruiter. Can TRS still help?",
                  a: "Yes, depending on the situation. If your internal team is stretched and needs a specialist for technical or executive roles, TRS can run specific searches alongside them. We are not a good fit if an internal recruiter is managing us as a vendor.",
                },
                {
                  q: "What if it doesn\u2019t work out?",
                  a: "60-day replacement guarantee on most engagements. No long-term contracts. If we are not adding value, we will say so.",
                },
              ].map((faq, index) => (
                <details key={index} className="group border border-neutral-800">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-bold text-white uppercase tracking-wide text-sm hover:bg-white/5 transition-colors">
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="max-w-7xl mx-auto px-6 sm:px-8 py-32 sm:py-40">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">135+ roles closed. Avg. time to hire: 21 days.</p>
            <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase text-white leading-none">
              Considering hiring options?
              <br />
              <span className="text-red-500">Talk to Us First.</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-400 max-w-xl mx-auto">
              One call. We will tell you honestly whether TRS is the right fit, what the engagement would look like, and what it costs.
            </p>
            <div className="mt-10">
              <Link href="/contact" aria-label="Talk to us">
                <Button className="h-14 px-14 font-bold uppercase tracking-widest text-base bg-red-600 hover:bg-red-500 border-0">Talk to Us</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* JSON-LD */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TRS",
            url: "https://trsolutions.io",
          }),
        }}
      />
    </div>
  );
}