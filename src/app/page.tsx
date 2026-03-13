"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StaggeredReveal from "@/components/StaggeredReveal";
import LogoMarquee from "@/components/LogoMarquee";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

import { Target, Zap, Search, ListChecks, FileText, Hand, BarChart3, BadgeCheck, Timer, DollarSign, Eye, TrendingUp, ArrowDown } from "lucide-react";
import TilesGrid from "@/components/TilesGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getRecentIssues } from "@/lib/newsletter";

export default function HomePage() {
  const SafeIcon = ({ Icon, className = "" }: { Icon: React.ElementType; className?: string }) =>
    Icon ? <Icon className={className} aria-hidden /> : <span className={className} aria-hidden>•</span>;

  const headline = "Better Hires, Faster.<br />For Companies That Can't Afford to Get It Wrong.";

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
      full: "I feel great about the role! Both of you are recruiting heros this job sounds awesome.",
      author: "Joe",
      role: "Red Team Engineer",
      avatar: "/clients/LbclC98S_400x400.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best match</span> I've had so far
        </>
      ),
      full: "I am definitely excited to start this venture with them! I too believe this is the best match I've had so far!",
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
      full: "I am impressed. This is the first time working with a recruiting company that anything actually panned out. Usually I find it's a waste of time.",
      author: "Alex",
      role: "Security Advisor",
      avatar: "/clients/buzzsolutionsinc_logo.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">best recruiter relationship</span> we've had
        </>
      ),
      full: "You've been the best recruiter relationship we've had so really appreciate it.",
      author: "Matt",
      role: "CEO",
      avatar: "/clients/consilium_labs_logo.jpg",
    },
  ];

  const recentIssues = getRecentIssues(3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-24">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left md:mt-8">
            <StaggeredReveal delay={100}>
              <h1 className="text-hero font-bold tracking-tight text-white" dangerouslySetInnerHTML={{ __html: headline }}>
              </h1>
            </StaggeredReveal>

            <StaggeredReveal delay={300}>
              <p className="mt-3 text-subhero text-neutral-100 max-w-2xl md:max-w-none mx-auto md:mx-0 font-semibold">
                TRS is a full-service recruiting partner for established, revenue-generating companies that need to hire right — and hire fast.
              </p>
            </StaggeredReveal>

            <StaggeredReveal delay={500}>
              <div className="mt-8 flex flex-col sm:flex-row md:justify-start justify-center gap-3">
                <Link href="/contact" aria-label="Let's talk">
                  <Button className="px-6 h-11 border border-red-500 shadow-md shadow-red-500/30">Let&apos;s talk</Button>
                </Link>
                <Link href="/services" aria-label="See how it works">
                  <Button variant="ghost" className="px-6 h-11">See how it works</Button>
                </Link>
              </div>
            </StaggeredReveal>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section aria-label="Trusted by" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm scroll-mt-24">
        <h2 className="text-xl font-semibold mb-4">Trusted by:</h2>
        <LogoMarquee
          className="rounded-2xl p-2"
          durationSeconds={25}
          logos={[
            { src: "/clients/0_0.jpg", alt: "Client Logo" },
            { src: "/clients/0_3.jpg", alt: "Client Logo" },
            { src: "/clients/1749691145498.jpg", alt: "Client Logo" },
            { src: "/clients/American_Express_logo_(2018).svg", alt: "American Express" },
            { src: "/clients/buzzsolutionsinc_logo.jpg", alt: "Buzz Solutions" },
            { src: "/clients/channels4_profile.jpg", alt: "Channels 4" },
            { src: "/clients/consilium_labs_logo.jpg", alt: "Consilium Labs" },
            { src: "/clients/exa_ai_logo.jpg", alt: "Exa AI" },
            { src: "/clients/grsee_consulting_logo.jpg", alt: "GRSee Consulting" },
            { src: "/clients/hightouchio_logo.jpg", alt: "Hightouch" },
            { src: "/clients/images.jpg", alt: "Client Logo" },
            { src: "/clients/insight_assurance_logo.jpg", alt: "Insight Assurance" },
            { src: "/clients/LbclC98S_400x400.jpg", alt: "Client Logo" },
          ]}
        />

        {/* Client Microquote */}
        <div className="mt-6 max-w-2xl mx-auto text-center">
          <blockquote className="text-neutral-300 italic">
            &quot;TRS gave us finalists in 5 days. Faster than our internal team. Filtered down from 250 candidates.&quot;
          </blockquote>
          <cite className="text-neutral-400 text-sm mt-2 block">— Abby W. HR Executive</cite>
        </div>
      </section>

      {/* Use Cases */}
      <section
        id="use-cases"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm relative scroll-mt-24"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Who TRS is built for</h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Established companies with real revenue, real urgency, and no margin for a bad hire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {[
            {
              title: "Companies without an internal recruiter",
              description: "Founders and hiring managers who need roles filled fast without a full-time HR hire.",
              icon: Zap,
            },
            {
              title: "PE and IB-backed companies",
              description: "Firms that need experienced talent placed quickly, accurately, and discreetly.",
              icon: TrendingUp,
            },
            {
              title: "Cybersecurity & infrastructure",
              description: "Technical companies that need recruiters who actually understand the roles.",
              icon: Target,
            },
            {
              title: "Established SaaS companies",
              description: "Post-PMF companies scaling sales, engineering, and ops who need quality over volume.",
              icon: BarChart3,
            },
            {
              title: "Companies burned by recruiters before",
              description: "If you've paid retainers and gotten irrelevant resumes, you know what bad recruiting costs.",
              icon: BadgeCheck,
            },
            {
              title: "Executive & C-suite searches",
              description: "High-stakes leadership hires where the wrong call sets you back a year.",
              icon: Search,
            },
          ].map((useCase, index) => (
            <div
              key={index}
              className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200"
            >
              <SafeIcon Icon={useCase.icon} className="h-5 w-5 text-red-500 mb-4" />
              <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                {useCase.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/contact" aria-label="Let's Talk">
            <Button className="px-6 h-11">Let&apos;s Talk</Button>
          </Link>
        </div>
      </section>

      {/* Differentiators */}
      <section id="differentiators" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm scroll-mt-24 rounded-2xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">What sets us apart</h2>
            <p className="font-semibold text-neutral-100">Why companies choose TRS over traditional recruiters and AI sourcing tools:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={BadgeCheck} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>35+ roles closed across AI, security, and GTM</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={Timer} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>Avg time to shortlist: &lt;7 days</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={TrendingUp} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>Backed by repeat clients and referrals</span>
              </li>
            </ul>
            <div className="mt-6 rounded-lg border border-red-500/50 bg-white/5 p-4">
              <p className="text-base md:text-lg font-semibold text-white">
                Other AI HR stops at names — we deliver decision-ready candidates.
              </p>
            </div>
          </div>

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
                <div className="text-lg md:text-xl font-bold leading-snug">&ldquo;{t.pull}&rdquo;</div>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">How it works</h2>
          <div>
            {[
              {
                step: "1",
                title: "Intake call",
                description: "We align on your needs, confirm it's a good fit, and agree on terms. You share your JDs. We get to work."
              },
              {
                step: "2",
                title: "Sourcing & outreach",
                description: "We run your JDs through our proprietary system — matching against our 50,000+ candidate network and auto-sourcing new candidates simultaneously."
              },
              {
                step: "3",
                title: "Screening & interviews",
                description: "We interview every candidate ourselves. We verify who they are, identify gaps, and assess strengths — so you don't have to."
              },
              {
                step: "4",
                title: "Scoring & delivery",
                description: "Every candidate is scored against your JD and everything you've told us. You only see the best. First candidates can arrive the same day. Most clients have 3–5 vetted, screened candidates within 2 weeks."
              },
              {
                step: "5",
                title: "Feedback loop",
                description: "You tell us what's working. We update our scoring and outreach. Average time from start to hire: 21 days."
              },
            ].map(({ step, title, description }, index, array) => (
              <div key={step}>
                <div className="rounded-lg border border-white/10 p-6 bg-red-500/[0.05] border-l-4 border-l-red-500/60">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step}
                    </div>
                    <span className="font-semibold text-neutral-100 text-base">{title}</span>
                  </div>
                  <div className="text-neutral-200 text-base leading-relaxed ml-9">{description}</div>
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
      </section>

      {/* Speed / Value */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <Reveal>
          <div className="grid md:grid-cols-2 items-start gap-10">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-neutral-200">
                  <span className="text-red-500 mt-1">✓</span>
                  <span className="text-3xl font-semibold">50,000+ Candidate Network</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-200">
                  <span className="text-red-500 mt-1">✓</span>
                  <span className="text-3xl font-semibold">30+ Years of Experience</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-200">
                  <span className="text-red-500 mt-1">✓</span>
                  <span className="text-3xl font-semibold">1 Process that Works</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-red-500/30 border border-red-500/50 rounded-2xl p-4">
                <div className="text-lg font-medium text-white">Recruiting tools are broken. Siloed. Not intuitive.</div>
              </div>
              <div className="bg-green-500/30 border border-green-500/50 rounded-2xl p-4">
                <div className="text-lg font-medium text-white">Our process works. Smart tools + selective AI = better hires.</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">How we engage</h2>
            <p className="text-neutral-400 mt-2">Every engagement includes full sourcing, screening, scorecards, and offer management. We tell you which model fits before you commit.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl border-2 border-red-500 p-6 bg-red-500/5 shadow-lg shadow-red-500/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Common</span>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">Retained Search</h3>
              <p className="text-sm text-neutral-400 mb-4">For companies that need a true recruiting partner — not a vendor.</p>
              <ul className="space-y-2 text-neutral-200 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Unlimited active roles</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>3–5 vetted candidates per role within 2 weeks</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Full pipeline management and offer negotiation</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Weekly data-driven pipeline reports</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Dedicated 2–3 person TRS team</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6 bg-white/5">
              <h3 className="text-xl font-semibold mb-1 text-white">Contingent Recruiting</h3>
              <p className="text-sm text-neutral-400 mb-4">Pay on results. Small upfront deposit — so both sides are serious from day one.</p>
              <ul className="space-y-2 text-neutral-200 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Small deposit required — applied in full toward your success fee at hire.</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Sourcing, screening, and scorecards included</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Best for 1-2 defined roles with clear requirements</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Competitive success fee + 60-day replacement guarantee</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6 bg-white/5">
              <h3 className="text-xl font-semibold mb-1 text-white">Staffing</h3>
              <p className="text-sm text-neutral-400 mb-4">Fast placement for contract, temp-to-hire, or backfill needs.</p>
              <ul className="space-y-2 text-neutral-200 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Access to 50,000+ pre-vetted candidates</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Contract, temp-to-hire, and direct placements</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Ideal for temporary projects, backfills, or scaling a team fast</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>First candidates within days</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✓</span><span>Fully managed onboarding, payroll, and compliance</span></li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-300 text-sm">Not sure which engagement fits? We&apos;ll tell you on the first call — no pressure, no pitch.</p>
            <Link href="/contact" aria-label="Talk to us">
              <Button className="px-6 h-10 shrink-0">Talk to us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-center">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Why not just use another recruiter?",
                a: "Most recruiters send you a pile of resumes and disappear. We own the entire process — sourcing, screening, scorecards, and offer negotiation. You get decision-ready candidates, not noise."
              },
              {
                q: "Why not just use an AI tool?",
                a: "AI tools surface names. We surface the right people — vetted, scored, and ready for you to interview. The difference is judgment, and that's human."
              },
              {
                q: "Are you a recruiting service or a product?",
                a: "We are both. Or one or the other. Whatever you need. Some clients use us as their recruiter. Others plug us in like software. The OS works either way."
              },
              {
                q: "How fast is \"fast\"?",
                a: "First shortlist delivered in under 7 days. Each candidate comes with a scorecard, transcript highlights, and a clear recommendation — so you can make a decision, not just a meeting."
              },
              {
                q: "Can we start small with just PSaaS?",
                a: "Yes. Many do. It's the cleanest way to cut noise before we scale into full recruiting."
              },
              {
                q: "What if our hiring bar is super specific?",
                a: "Good. Specific is our advantage. Most recruiters get confused by nuanced requirements. We extract the real job — must-haves, soft signals, red flags — and build the search around it."
              },
              {
                q: "Do you replace our ATS?",
                a: "No. We plug into it or run parallel. Your data stays intact."
              },
              {
                q: "Will candidates feel like they talked to a bot?",
                a: "No. We use AI to prep, not to hide. People talk to people."
              },
              {
                q: "What if this doesn't work?",
                a: "We pause or pivot. No long contracts, no excuses. If we're not adding value, we'll tell you before you do."
              }
            ].map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-neutral-800 bg-white/5">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-white hover:bg-white/10 transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    <ArrowDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-neutral-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Newsletter</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Hiring systems, AI, and real recruiting—practical, no fluff.
              </p>
              <NewsletterSignup className="max-w-md mx-auto" />
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Recent Issues</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {recentIssues.map((issue) => (
                  <article
                    key={issue.slug}
                    className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="font-bold text-white mb-2">{issue.title}</h4>
                    <p className="text-neutral-300 text-sm mb-3 leading-relaxed">
                      {issue.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <time className="text-neutral-400" dateTime={issue.date}>
                        {formatDate(issue.date)}
                      </time>
                      <Link
                        href={`/newsletter/${issue.slug}`}
                        className="text-red-400 hover:text-red-300 font-medium transition-colors"
                      >
                        Read issue
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/newsletter"
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  View all issues →
                </Link>
              </div>
            </div>
          </div>
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