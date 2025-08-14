import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StaggeredReveal from "@/components/StaggeredReveal";
import LogoMarquee from "@/components/LogoMarquee";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import ValueSplit from "@/components/ValueSplit";
import { Target, Handshake, ShieldCheck, Zap, Wrench, Search, ListChecks, FileText, Hand, BarChart3, BadgeCheck, Timer, DollarSign, Eye, TrendingUp, ArrowDown, Check } from "lucide-react";
import TilesGrid from "@/components/TilesGrid";
import FeatureSlice from "@/components/FeatureSlice";

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
      role: "People Operations at Buzz Solutions",
      avatar: "/clients/channels4_profile.jpg",
    },
    {
      pull: (
        <>
          I feel <span className="text-red-500 font-extrabold">great</span> about the role — recruiting heroes
        </>
      ),
      full:
        "I feel great about the role! Both of you are recruiting heros this job sounds awesome.",
      author: "Joe",
      role: "Red Team Engineer",
      avatar: "/clients/LbclC98S_400x400.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best match</span> I’ve had so far
        </>
      ),
      full:
        "I am definitely excited to start this venture with them! I too believe this is the best match I've had so far! About a week or 2 ago I was contacted for a couple job offers but it was like did those Recruiters even read my profile? They were for Software Developer roles & I'm just like in what way does my profile show \"Developer\". I can count on 1 hand how many Recruiters I've encountered in 20 years that actually understood the industry they hire for & know how to read candidate profiles or Resumes (You & John are now added to that very small list).\nI don't understand how it has become so off-the-rails.\nI truly appreciate what you & John have done to get me here! Having all the skills I have in Cybersecurity doesn't mean much if I don't know which doors to knock on, so thank you very much for working with me!",
      author: "Brandi",
      role: "CISO",
      avatar: "/clients/insight_assurance_logo.jpg",
    },
    {
      pull: (
        <>
          The first time a recruiter actually <span className="text-red-500 font-extrabold">panned out</span>
        </>
      ),
      full:
        "I am impressed. This is the first time working with a recruiting company that anything actually panned out. Usually I find it's a waste of time.",
      author: "Alex",
      role: "Security Advisor",
      avatar: "/clients/buzzsolutionsinc_logo.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best recruiter relationship</span> we’ve had
        </>
      ),
      full: "You've been the best recruiter relationship we've had so really appreciate it.",
      author: "Matt",
      role: "CEO",
      avatar: "/clients/consilium_labs_logo.jpg",
    },
  ];
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="grid md:grid-cols-2 items-start gap-10">
          <div className="text-center md:text-left md:mt-8">
            <StaggeredReveal delay={100}>
              <h1 className="text-hero font-bold tracking-tight text-white">
                Full-Stack<br />Recruiting Engine
              </h1>
            </StaggeredReveal>
            
            <StaggeredReveal delay={300}>
              <p className="mt-3 text-subhero text-neutral-100 max-w-2xl md:max-w-none mx-auto md:mx-0 font-semibold">
                Faster hires, better fits, zero wasted interviews.
              </p>
            </StaggeredReveal>
            
            <div className="mt-5 text-neutral-100 max-w-2xl md:max-w-xl mx-auto md:mx-0 space-y-1">
              <StaggeredReveal delay={500}>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="h-4 w-4 text-red-500" aria-hidden />
                  <span>50,000+ Network</span>
                </div>
              </StaggeredReveal>
              
              <StaggeredReveal delay={600}>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="h-4 w-4 text-red-500" aria-hidden />
                  <span>30+ Years Experience</span>
                </div>
              </StaggeredReveal>
              
              <StaggeredReveal delay={700}>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Check className="h-4 w-4 text-red-500" aria-hidden />
                  <span>AI + Human Recruiting System</span>
                </div>
              </StaggeredReveal>
              
              <StaggeredReveal delay={800}>
                <p className="mt-2 font-semibold text-lg text-white underline decoration-white decoration-2">
                  Built and Operated by Experts Who&apos;ve Done the Work
                </p>
              </StaggeredReveal>
            </div>
            
            <StaggeredReveal delay={900}>
              <div className="mt-8 flex flex-col sm:flex-row md:justify-start justify-center gap-3">
                <Link href="/roles" aria-label="Find Your Next Role">
                  <Button className="px-6 h-11">Find Your Next Role</Button>
                </Link>
                <Link href="/services" aria-label="Hire the Right Talent">
                  <Button variant="ghost" className="px-6 h-11">Hire the Right Talent</Button>
                </Link>
              </div>
            </StaggeredReveal>

            {/* TRS Workflow */}
            <StaggeredReveal delay={1100}>
              <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">TRS Workflow</h3>
              <div>
                {[
                  { 
                    step: "1", 
                    title: "Outreach", 
                    description: "AI-powered sourcing and targeted candidate identification",
                    details: [
                      "Boolean search optimization across 50+ platforms",
                      "LinkedIn automation with personalized messaging",
                      "Passive candidate identification and engagement",
                      "Competitive intelligence and market mapping"
                    ]
                  },
                  { 
                    step: "2", 
                    title: "Intake", 
                    description: "Initial screening and requirements alignment",
                    details: [
                      "30-minute discovery call to understand role requirements",
                      "Technical skills assessment and cultural fit criteria",
                      "Compensation benchmarking and market analysis",
                      "Timeline and expectations alignment"
                    ]
                  },
                  { 
                    step: "3", 
                    title: "Score", 
                    description: "Comprehensive evaluation using custom rubrics",
                    details: [
                      "10-point custom rubric tailored to your specific role",
                      "Technical competency assessment",
                      "Cultural alignment and soft skills evaluation",
                      "Reference checks and background verification"
                    ]
                  },
                  { 
                    step: "4", 
                    title: "Submit", 
                    description: "Decision-ready candidates with detailed briefs",
                    details: [
                      "Comprehensive candidate brief with scores and insights",
                      "Interview transcripts and key conversation highlights",
                      "Salary expectations and negotiation guidance",
                      "Only top 10% of candidates reach your desk"
                    ]
                  },
                  { 
                    step: "5", 
                    title: "Feedback", 
                    description: "Client input and outcome tracking",
                    details: [
                      "Real-time feedback collection after each submission",
                      "Interview outcome tracking and analysis",
                      "Candidate experience monitoring",
                      "Continuous calibration of search criteria"
                    ]
                  },
                  { 
                    step: "6", 
                    title: "Iterate", 
                    description: "Process refinement and continuous improvement",
                    details: [
                      "Weekly search strategy optimization",
                      "AI model training based on successful placements",
                      "Market insights and competitive intelligence updates",
                      "Process refinement for faster time-to-hire"
                    ]
                  },
                ].map(({ step, title, description, details }, index, array) => (
                  <div key={step}>
                    <div className="group rounded-lg border border-white/10 p-6 bg-red-500/[0.05] border-l-4 border-l-red-500/60 hover:bg-red-500/[0.08] transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step}
                        </div>
                        <span className="font-semibold text-neutral-100 text-base">{title}</span>
                      </div>
                      <div className="text-neutral-200 text-base leading-relaxed ml-9">{description}</div>
                      
                      {/* Expanded details on hover */}
                      <div className="ml-9 mt-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 ease-out">
                        <div className="border-t border-white/10 pt-3">
                          <p className="text-neutral-300 text-sm mb-2 font-medium">What we do:</p>
                          <ul className="space-y-1">
                            {details.map((detail, i) => (
                              <li key={i} className="text-neutral-300 text-sm flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {index < array.length - 1 && (
                      <div className="flex justify-center py-3">
                        <ArrowDown className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </div>
            </StaggeredReveal>
          </div>
          <div className="hidden md:block md:mt-0">
            <div className="relative ml-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/8 via-purple-500/10 via-red-600/8 to-transparent rounded-2xl animate-pulse -z-10"></div>
              <Image
                src="/churn.png"
                alt="Full-stack recruiting engine illustration"
                width={640}
                height={800}
                className="w-full h-auto opacity-90 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature slices */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-8">
        <FeatureSlice
          variant="light"
          imagePosition="right"
          eyebrow="Workflow"
          title="Briefs that make decisions faster"
          description="Every candidate arrives with a structured brief—scores, transcripts, and context—so you spend time only where it matters."
          bullets={["10-point rubric tailored to your role", "Outcome-driven learning each week"]}
          image={{ src: "/recruitment-flowchart.png", alt: "Recruitment Process Flowchart", width: 1024, height: 1024, background: true }}
          ctas={[{ href: "/services", label: "See how it works" }, { href: "/contact", label: "Talk to sales", variant: "ghost" }]}
        />
      </section>

      {/* Speed / Value */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <Reveal>
          <ValueSplit
            claim="4× faster"
            title="than typing — decision-ready candidates without wasted interviews"
            bullets={[
              { title: "Signal over noise", body: "Custom rubrics and brief summaries get you to 'yes/no' quickly." },
              { title: "Tight feedback loop", body: "We learn from outcomes and adapt every week." },
            ]}
            caption="Based on historical client cycles and internal benchmarks"
          />
        </Reveal>
      </section>

      {/* Logos */}
      <section aria-label="Trusted by" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Trusted by:</h2>
        <LogoMarquee
          className="rounded-2xl p-2"
          durationSeconds={25}
          logos={[
            { src: "/clients/1749691145498.jpg", alt: "Client Logo" },
            { src: "/clients/American_Express_logo_(2018).svg", alt: "American Express" },
            { src: "/clients/buzzsolutionsinc_logo.jpg", alt: "Buzz Solutions" },
            { src: "/clients/channels4_profile.jpg", alt: "Channels 4" },
            { src: "/clients/consilium_labs_logo.jpg", alt: "Consilium Labs" },
            { src: "/clients/download.jpg", alt: "Client Logo" },
            { src: "/clients/grsee_consulting_logo.jpg", alt: "GRSee Consulting" },
            { src: "/clients/insight_assurance_logo.jpg", alt: "Insight Assurance" },
            { src: "/clients/LbclC98S_400x400.jpg", alt: "Client Logo" },
          ]}
        />
      </section>

      {/* Values & Focus */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm relative scroll-mt-24 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/50 to-neutral-900/0"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Core Values */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Core Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <li className="flex items-start gap-3">
                <SafeIcon Icon={Target} className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-neutral-300 leading-snug">
                  <strong>Outcome Over Output</strong> — We don’t chase activity; we chase hires that stick.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <SafeIcon Icon={Handshake} className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-neutral-300 leading-snug">
                  <strong>Human–AI Harmony</strong> — We blend tech and intuition; AI assists, humans decide.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <SafeIcon Icon={ShieldCheck} className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-neutral-300 leading-snug">
                  <strong>Extreme Ownership</strong> — We own results end-to-end and improve continuously.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <SafeIcon Icon={Zap} className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-neutral-300 leading-snug">
                  <strong>Speed with Substance</strong> — We move fast and do it right.
                </p>
              </li>
              <li className="flex items-start gap-3 md:col-span-2">
                <SafeIcon Icon={Wrench} className="h-5 w-5 text-red-500 mt-1 shrink-0" />
                <p className="text-neutral-300 leading-snug">
                  <strong>Builder’s Mindset</strong> — We test, learn, and evolve so today is better than yesterday.
                </p>
              </li>
            </ul>
          </div>

          {/* Core Focus */}
          <div id="core-focus" className="space-y-4">
            <h2 className="text-2xl font-semibold">Core Focus</h2>
            <p className="text-neutral-100 text-lg md:text-xl font-semibold leading-snug">
              We fix broken hiring by blending AI, automation, and human expertise into recruiting systems that actually work.
            </p>
            <p className="text-neutral-300">
              Specializing in early-stage tech startups with a human-in-the-loop approach.
            </p>
          </div>
        </div>
      </section>

      {/* TRS is for … tiles */}
      <section id="how" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold">TRS is for…</h2>
        <TilesGrid
          items={[
            { Icon: Search, title: "Source Smarter", description: "AI-boosted Boolean + targeted outreach to find top talent others miss." },
            { Icon: ListChecks, title: "Score What Matters", description: "10-point custom rubric tailored to your role, not generic checklists." },
            { Icon: FileText, title: "Decision Clarity", description: "Candidate briefs with scores, transcripts, and context for quick yes/no." },
            { Icon: Hand, title: "Stay Hands-On", description: "Your preferences guide the search; we adapt in real time." },
            { Icon: BarChart3, title: "Built for Growth", description: "Systems that scale with your team — from one hire to a full department." },
            { Icon: Zap, title: "Faster Cycles", description: "From intake to offer quicker with fewer wasted interviews." },
          ]}
        />
      </section>

      {/* Differentiators */}
      <section id="differentiators" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm scroll-mt-24 rounded-2xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left / Top: Proof bullets + callout */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">What sets us apart</h2>
            <p className="font-semibold text-neutral-100">Why companies choose TRS over traditional recruiters and AI sourcing tools:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={Timer} className="h-5 w-5 text-red-500 mt-0.5" />
                <span><strong>2–3x faster</strong> hiring cycle than the industry average.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={BadgeCheck} className="h-5 w-5 text-red-500 mt-0.5" />
                <span><strong>90%+ retention</strong> rate for placed candidates.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={DollarSign} className="h-5 w-5 text-red-500 mt-0.5" />
                <span><strong>50% lower cost</strong> compared to agencies.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={Eye} className="h-5 w-5 text-red-500 mt-0.5" />
                <span><strong>100% AI + human review</strong> of candidates before you see them.</span>
              </li>
            </ul>

            {/* Differentiator callout */}
            <div className="mt-6 rounded-lg border border-red-500/50 bg-white/5 p-4">
              <p className="text-base md:text-lg font-semibold text-white">
                Other AI HR stops at names — we deliver decision-ready candidates.
              </p>
            </div>
          </div>

          {/* Right / Bottom: Comparison table */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-white/5 text-sm text-neutral-300">
                    <tr>
                      <th className="px-4 py-3 w-1/2">Traditional Recruiter</th>
                      <th className="px-4 py-3 w-1/2">TRS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      {
                        label: "Candidate quality",
                        Icon: BadgeCheck,
                        traditional: "Unvetted resumes and keyword matches",
                        trs: "Decision-ready candidates with scorecards and context",
                      },
                      {
                        label: "Speed",
                        Icon: Timer,
                        traditional: "Weeks between outreach and submission",
                        trs: "2–3x faster cycles with continuous sourcing + automation",
                      },
                      {
                        label: "Cost",
                        Icon: DollarSign,
                        traditional: "High retainers + % fees",
                        trs: "50% lower than agencies with flexible models",
                      },
                      {
                        label: "Level of vetting",
                        Icon: Eye,
                        traditional: "Basic resume screen",
                        trs: "AI + human review of 100% of candidates",
                      },
                      {
                        label: "Learning from outcomes",
                        Icon: TrendingUp,
                        traditional: "Static process, no feedback loop",
                        trs: "System learns from hires and failures to improve every week",
                      },
                    ].map(({ label, Icon, traditional, trs }, i) => (
                      <tr key={i} className="align-top">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 text-xs text-neutral-400">
                             <SafeIcon Icon={Icon} className="h-4 w-4 text-red-500" />
                            <span>{label}</span>
                          </div>
                          <div className="mt-1 text-neutral-200">{traditional}</div>
                        </td>
                        <td className="px-4 py-4 bg-red-500/[0.05] border-l border-red-500/30">
                          <div className="flex items-center gap-2 text-xs text-neutral-400">
                             <SafeIcon Icon={Icon} className="h-4 w-4 text-red-500" />
                            <span>{label}</span>
                          </div>
                          <div className="mt-1 text-neutral-100">{trs}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked version */}
              <div className="md:hidden divide-y divide-white/10">
                {[
                  {
                    label: "Candidate quality",
                    Icon: BadgeCheck,
                    traditional: "Unvetted resumes and keyword matches",
                    trs: "Decision-ready candidates with scorecards and context",
                  },
                  {
                    label: "Speed",
                    Icon: Timer,
                    traditional: "Weeks between outreach and submission",
                    trs: "2–3x faster cycles with continuous sourcing + automation",
                  },
                  {
                    label: "Cost",
                    Icon: DollarSign,
                    traditional: "High retainers + % fees",
                    trs: "50% lower than agencies with flexible models",
                  },
                  {
                    label: "Level of vetting",
                    Icon: Eye,
                    traditional: "Basic resume screen",
                    trs: "AI + human review of 100% of candidates",
                  },
                  {
                    label: "Learning from outcomes",
                    Icon: TrendingUp,
                    traditional: "Static process, no feedback loop",
                    trs: "System learns from hires and failures to improve every week",
                  },
                ].map(({ label, Icon, traditional, trs }, i) => (
                  <div key={i} className="p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Icon className="h-4 w-4 text-red-500" aria-hidden />
                      <span>{label}</span>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      <div className="rounded-md bg-white/5 p-3">
                        <div className="text-xs uppercase tracking-wide text-neutral-400">Traditional Recruiter</div>
                        <div className="mt-1 text-neutral-200">{traditional}</div>
                      </div>
                      <div className="rounded-md bg-red-500/[0.06] p-3 ring-1 ring-red-500/20">
                        <div className="text-xs uppercase tracking-wide text-neutral-400">TRS</div>
                        <div className="mt-1 text-neutral-100">{trs}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-2">Testimonials:</h2>
        <p className="text-neutral-300 mb-6">Trusted by founders, hiring managers, and security leaders.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-all duration-200 ease-out hover:shadow-red-500/20 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-semibold leading-tight">{t.author}</div>
                  {t.role && <div className="text-neutral-400 leading-tight">{t.role}</div>}
                </div>
              </div>

              <blockquote className="mt-4">
                <div className="text-lg md:text-xl font-bold leading-snug">“{t.pull}”</div>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hire decision-ready candidates in 21 days or less.</h2>
          <p className="mt-2 text-neutral-300">Skip the noise. Get briefed, scored, interview-ready talent only.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" aria-label="Book a demo">
              <Button className="h-11 px-6">Book a demo</Button>
            </Link>
            <Link href="/contact" aria-label="Get a consultation">
              <Button variant="ghost" className="h-11 px-6">Get a consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Organization */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TRS',
            url: 'https://trs.example',
          }),
        }}
      />
    </div>
  );
}
