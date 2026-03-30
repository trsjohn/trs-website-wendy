"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StaggeredReveal from "@/components/StaggeredReveal";
import LogoMarquee from "@/components/LogoMarquee";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

import { Target, Zap, Search, BarChart3, BadgeCheck, TrendingUp, ArrowDown } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getRecentIssues } from "@/lib/newsletter";

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
      avatar: "/clients/buzzsolutionsinc_logo.jpg",
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
          The <span className="text-red-500 font-extrabold">best match</span> I&apos;ve had so far
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
      avatar: "/clients/channels4_profile.jpg",
    },
    {
      pull: (
        <>
          The <span className="text-red-500 font-extrabold">most thoughtful questions</span> I&apos;ve ever been asked
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
          The <span className="text-red-500 font-extrabold">best recruiter relationship</span> we&apos;ve had
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
    <div className="space-y-0">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-5xl">
          <StaggeredReveal delay={100}>
             <h1 className="text-[clamp(3.4rem,9vw,7rem)] font-black leading-[0.9] uppercase text-white">
              Your Lean Recruiting Team.
              <span className="text-red-500"> Run by Experts,</span>
              <br />
              {" "}Powered by AI.
            </h1>
          </StaggeredReveal>

          <StaggeredReveal delay={300}>
            <p className="mt-8 text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Full service recruiting partner powered by AI, with the speed, accuracy, and cultural intuition traditional agencies can&apos;t match.
            </p>
          </StaggeredReveal>

          <StaggeredReveal delay={450}>
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-sm">
              <div>
                <div className="text-4xl font-black text-red-500">3&times;</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Faster Time-to-Fill</div>
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
              <Link href="/contact" aria-label="Let's talk">
                <Button className="px-8 h-12 border border-red-500 shadow-md shadow-red-500/30 text-base font-bold uppercase tracking-wider">Let&apos;s Talk</Button>
              </Link>
              <Link href="/#how-it-works" aria-label="See how it works">
                <Button variant="ghost" className="px-8 h-12 text-base font-bold uppercase tracking-wider">See How It Works</Button>
              </Link>
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Logos */}
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
          <div className="mt-6 max-w-2xl">
            <blockquote className="text-neutral-300 italic text-sm">
              &quot;TRS gave us finalists in 5 days. Faster than our internal team. Filtered down from 250 candidates.&quot;
            </blockquote>
            <cite className="text-neutral-500 text-xs mt-2 block not-italic">— Abby W., HR Executive</cite>
          </div>
        </Reveal>
      </section>

      {/* Why We Built This */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-widest text-red-500">Why We Built This</p>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black uppercase text-white leading-tight">
                We Built Our Own Infrastructure. From Scratch.
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Most recruiting agencies stitch together LinkedIn, a job board, and whatever ATS their ops person set up years ago. We tried those tools. They were frustrating, disconnected, and not built by recruiters. So we built our own.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                TRS runs on a fully proprietary end-to-end system: intelligent auto-sourcing, candidate scoring, adaptive multichannel outreach, pipeline management, and interview intelligence, all built around how great recruiting actually works.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                We also learned that sending great candidates isn&apos;t enough. Founders and lean teams don&apos;t have the bandwidth to manage a pipeline, keep candidates warm, or negotiate offers. We do all of it, so you can focus on your business.
              </p>
            </div>
            <div className="border-l border-white/10 pl-10 space-y-6">
              <p className="text-xs uppercase tracking-widest text-neutral-500">Recent Results</p>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">15 Days</div>
                <div className="text-sm text-neutral-300">Head of Engineering placed for a cybersecurity company</div>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-1">
                <div className="text-3xl font-black text-white">1 Month</div>
                <div className="text-sm text-neutral-300">3 AEs, 2 CSMs, and 1 SDR hired for a software company. Every candidate sourced outbound by TRS.</div>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-1">
                <div className="text-3xl font-black text-white">Best Taste</div>
                <div className="text-sm text-neutral-300">Clients consistently tell us TRS has better candidate intuition than any recruiting firm they&apos;ve worked with. We take that seriously.</div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold leading-relaxed">Other firms patch together outdated tools. We built our own so we could offer more data, precision, speed, and better hires.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Use Cases */}
      <section
        id="use-cases"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24"
      >
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Who We Serve</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">Who TRS Is Built For</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              Established companies with real revenue, real urgency, and no margin for a bad hire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
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
                <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2 leading-snug">
                  {useCase.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/contact" aria-label="Let's Talk">
              <Button className="px-8 h-11 font-bold uppercase tracking-wider">Let&apos;s Talk</Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Model Comparison */}
      <section id="differentiators" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Model Comparison</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">
              The Numbers Don&apos;t Lie
            </h2>
            {/* <p className="text-neutral-400 mt-4 max-w-2xl">
              See exactly where traditional models fall short and where TRS delivers.
            </p> */}
          </div>

          <div className="border-t border-b border-white/10">
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-500 w-1/5"></th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-400 w-1/5">Contingency</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-400 w-1/5">Traditional RPO</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-neutral-400 w-1/5">Internal TA</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-widest text-red-500 w-1/5 border-l border-red-500/30 bg-red-500/5">TRS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { label: "Setup Time",            contingency: "None",                        rpo: "2–6 weeks",          internalTA: "2–4 weeks",          trs: "Hours" },
                    { label: "Avg. Time-to-Hire",     contingency: "30–45 days",                  rpo: "35–50 days",         internalTA: "40–60 days",         trs: "21 days" },
                    { label: "Pipeline Visibility",   contingency: "None",                        rpo: "Weekly reports",     internalTA: "ATS dependent",      trs: "Real-time, full funnel" },
                    { label: "Sourcing",              contingency: "Manual, recruiter-dependent", rpo: "Manual + tools",     internalTA: "Job boards + inbound", trs: "AI-scored, automated" },
                    { label: "Candidate Scoring",     contingency: "Subjective gut feel",         rpo: "Basic screening",    internalTA: "Varies by team",     trs: "Multi-stage AI + human" },
                    { label: "Cost Per Hire",         contingency: "$15K–$25K+",                  rpo: "$6.7K–$10K",         internalTA: "Internal overhead",  trs: "$5K–$8K" },
                    { label: "Volume",                contingency: "1-6 roles",                   rpo: "15+ hires/yr",       internalTA: "Limited by headcount",trs: "Any volume, any stage" },
                    { label: "Process Control",       contingency: "Outsourced entirely",         rpo: "Shared",             internalTA: "Full control",       trs: "Full transparency + AI" },
                  ].map(({ label, contingency, rpo, internalTA, trs }, i) => (
                    <tr key={i} className="align-top text-sm">
                      <td className="px-6 py-4 font-bold uppercase tracking-wide text-white text-xs">{label}</td>
                      <td className="px-6 py-4 text-neutral-400">{contingency}</td>
                      <td className="px-6 py-4 text-neutral-400">{rpo}</td>
                      <td className="px-6 py-4 text-neutral-400">{internalTA}</td>
                      <td className="px-6 py-4 font-semibold text-white border-l border-red-500/30 bg-red-500/5">{trs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked */}
            <div className="md:hidden divide-y divide-white/10">
              {[
                { label: "Setup Time",          traditional: "2–6 weeks (RPO)",              trs: "Hours" },
                { label: "Avg. Time-to-Hire",   traditional: "35–60 days",                   trs: "21 days" },
                { label: "Pipeline Visibility", traditional: "None / weekly reports",         trs: "Real-time, full funnel" },
                { label: "Sourcing",            traditional: "Manual, recruiter-dependent",   trs: "AI-scored, automated" },
                { label: "Candidate Scoring",   traditional: "Subjective gut feel",           trs: "Multi-stage AI + human" },
                { label: "Cost Per Hire",       traditional: "$6.7K–$25K+",                  trs: "$5K–$8K" },
                { label: "Volume Minimum",      traditional: "15–25 hires/yr (RPO)",          trs: "No minimum" },
                { label: "Process Control",     traditional: "Outsourced or ATS-dependent",   trs: "Full transparency + AI" },
              ].map(({ label, traditional, trs }, i) => (
                <div key={i} className="p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">{label}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 p-3">
                      <div className="text-xs uppercase tracking-wide text-neutral-500 mb-1">Others</div>
                      <div className="text-sm text-neutral-300">{traditional}</div>
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
        </Reveal>
      </section>

      {/* Our Infrastructure */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Our Infrastructure</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none max-w-4xl">
              End-to-End. AI-Powered. Human Where It Matters.
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              We built a workflow that actually works. AI handles volume. Humans handle judgment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "Req Synthesis",
                desc: "AI synthesizes your calls, emails, Slack, and JD into weighted scoring signals",
                badge: "AI-Driven",
                badgeStyle: "border border-red-800 text-red-700 bg-red-950/40",
              },
              {
                num: "02",
                title: "Auto Source",
                desc: "AI scores and ranks candidates against your synthesis, not keyword matches.",
                badge: "AI-Scored",
                badgeStyle: "border border-red-800 text-red-700 bg-red-950/40",
              },
              {
                num: "03",
                title: "Outreach",
                desc: "Multi-touch cadences generated from the synthesis, personalized per candidate",
                badge: "AI + Human",
                badgeStyle: "border border-red-900/60 text-red-400 bg-neutral-900",
              },
              {
                num: "04",
                title: "Messaging",
                desc: "Centralized hub for all candidate conversations with AI-assisted responses",
                badge: "AI + Human",
                badgeStyle: "border border-red-900/60 text-red-400 bg-neutral-900",
              },
              {
                num: "05",
                title: "Screening",
                desc: "Human recruiter calls with structured scoring across 5 behavioral dimensions",
                badge: "Human-Led",
                badgeStyle: "border border-neutral-700 text-neutral-400 bg-neutral-900",
              },
              {
                num: "06",
                title: "Submit",
                desc: "Complete candidate profile with AI + human scores, synthesis match, and call report",
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

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-white/10">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl font-black text-white">50K+</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Candidate Network</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white">30+</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Years of Experience</div>
            </div>
            <div>
              <div className="text-6xl font-black text-white">135+</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2">Roles Closed</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Engagements</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">How We Engage</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl">Not sure which fits? We&apos;ll tell you on the first call. Every engagement includes full sourcing, screening, scorecards, and offer management, integrated directly into your Slack or client portal.</p>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {[
                {
                  name: "Retained Search",
                  tag: "Most Common",
                  desc: "A true recruiting partner for companies with ongoing hiring needs. Unlimited active roles, dedicated team, full pipeline management.",
                  highlight: true,
                },
                {
                  name: "Contingent Recruiting",
                  tag: null,
                  desc: "Pay on results. Best for 1–2 defined roles where you need quality without a long commitment. Small deposit applied toward your success fee at hire.",
                  highlight: false,
                },
                {
                  name: "Staffing",
                  tag: null,
                  desc: "Fast placement for contract, temp-to-hire, or high-volume needs. Access to 50,000+ pre-vetted candidates. First candidates within days.",
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
              <p className="text-neutral-300 text-sm">Ready to get started? One call is all it takes.</p>
              <Link href="/contact" aria-label="Talk to us">
                <Button className="px-6 h-10 shrink-0 font-bold uppercase tracking-wider text-sm">Talk to Us</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Social Proof</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">What Clients Say</h2>
            <p className="text-neutral-400 mt-3">Trusted by founders, hiring managers, and security leaders.</p>
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

      {/* What Happens Next */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10 scroll-mt-24">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">The Process</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">Here&apos;s Exactly What Happens</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">Here is what the first few days look like.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                step: "01",
                title: "We Talk",
                desc: "One call. We align on the role, your team, and what a great hire actually looks like. You sign the intake agreement and we get to work the same day.",
                detail: "No JD? We write one.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "TRS integrates into your Slack or gives you access to our client portal. Full pipeline visibility from day one. You see every candidate, every score, every note.",
                detail: "Full visibility, start to finish.",
              },
              {
                step: "03",
                title: "You Hire",
                desc: "First shortlist in under 9 days. Every candidate comes with a scorecard, call notes, and a clear recommendation. We handle all coordination and offer negotiation.",
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

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Objections</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">The Hard Questions</h2>
              <p className="text-neutral-400 mt-3 max-w-2xl">The things people actually wonder before they get on a call.</p>
            </div>
            <div className="space-y-2">
              {[
                {
                  q: "We already tried a recruiter and it didn't work.",
                  a: "That's the most common thing we hear. Most recruiters send a pile of resumes and disappear. We own the entire process: sourcing, screening, scorecards, offer negotiation. We'd rather send you three people worth interviewing than fifteen you have to wade through. If you've been burned before, you'll recognize the difference immediately."
                },
                {
                  q: "We don't have a job description ready.",
                  a: "Most JDs are wrong anyway. We extract the real job from a 30-minute intake call: must-haves, soft signals, red flags, culture fit. We write the JD. You approve it. Then we build the search around it."
                },
                {
                  q: "Our hiring bar is very specific and nuanced.",
                  a: "Specific is our advantage. Most recruiters get confused by nuanced requirements. We go deep on your role and build the search around what you actually need, including the things you only mentioned once."
                },
                {
                  q: "How fast is fast, really?",
                  a: "First shortlist in under 9 days. Average time to hire is 21 days. We placed a Head of Engineering for a cybersecurity company in 15 days and hired 6 GTM roles for a software company in one month. Those aren't outliers. That's the system working."
                },
                {
                  q: "Our budget is tight right now.",
                  a: "Contingent recruiting means you only pay on results. A small deposit is applied in full toward your success fee when you hire. No hire, no fee."
                },
                {
                  q: "Why not just use an AI sourcing tool?",
                  a: "AI tools surface names. We surface the right people: sourced, scored, personally called, and ready to interview. The difference is judgment, and that part is human."
                },
                {
                  q: "Will this disrupt our current workflow?",
                  a: "No. We plug into your Slack or give you access to our client portal. We work around your setup. Your ATS stays intact."
                },
                {
                  q: "What if it doesn't work out?",
                  a: "We pause or pivot. No long contracts. 60-day replacement guarantee on most engagements. If we're not adding value, we'll say so."
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

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <Reveal>
          <div className="border-t border-b border-white/10 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Stay Sharp</p>
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase text-white leading-none mb-4">Newsletter</h2>
                <p className="text-neutral-300 mb-8">
                  Hiring systems, AI, and real recruiting. Practical, no fluff.
                </p>
                <NewsletterSignup className="max-w-md mx-auto" />
              </div>

              <div className="mt-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 text-center">Recent Issues</h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {recentIssues.map((issue) => (
                    <article
                      key={issue.slug}
                      className="border border-white/10 p-5 hover:bg-white/5 transition-colors"
                    >
                      <h4 className="font-bold text-white mb-2 text-sm">{issue.title}</h4>
                      <p className="text-neutral-400 text-xs mb-3 leading-relaxed">
                        {issue.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <time className="text-neutral-500" dateTime={issue.date}>
                          {formatDate(issue.date)}
                        </time>
                        <Link
                          href={`/newsletter/${issue.slug}`}
                          className="text-red-400 hover:text-red-300 font-bold uppercase tracking-wide transition-colors"
                        >
                          Read &rarr;
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/newsletter"
                    className="text-red-400 hover:text-red-300 font-bold uppercase tracking-widest text-xs transition-colors"
                  >
                    View All Issues &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-7xl mx-auto px-6 sm:px-8 py-32 sm:py-40">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">135+ roles closed. Avg. time to hire: 21 days.</p>
            <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase text-white leading-none">
              Stop Renting Recruiters.<br />
              <span className="text-red-500">Own the Process.</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-400">Hire excellent talent in 21 days or less.</p>
            <div className="mt-10">
              <Link href="/contact" aria-label="Talk to us">
                <Button className="h-14 px-14 font-bold uppercase tracking-widest text-base bg-red-600 hover:bg-red-500 border-0">Talk to Us</Button>
              </Link>
            </div>
          </div>
        </Reveal>
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
            url: 'https://trsolutions.io',
          }),
        }}
      />
    </div>
  );
}