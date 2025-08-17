"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";
import StaggeredReveal from "@/components/StaggeredReveal";
import LogoMarquee from "@/components/LogoMarquee";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import ValueSplit from "@/components/ValueSplit";
import { Target, Handshake, ShieldCheck, Zap, Search, ListChecks, FileText, Hand, BarChart3, BadgeCheck, Timer, DollarSign, Eye, TrendingUp, ArrowDown, Check } from "lucide-react";
import TilesGrid from "@/components/TilesGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getRecentIssues } from "@/lib/newsletter";

export default function HomePage() {
  const SafeIcon = ({ Icon, className = "" }: { Icon: React.ElementType; className?: string }) =>
    Icon ? <Icon className={className} aria-hidden /> : <span className={className} aria-hidden>•</span>;
  
  // A/B test headlines based on query parameter
  const [headline, setHeadline] = useState('We ship hires.<br />Not spreadsheets.');
  const [altText, setAltText] = useState('We ship hires. Not spreadsheets.');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const variant = params.get('variant');
    
    switch (variant) {
      case 'b':
        setHeadline('We ship hires.<br />Not headaches.');
        setAltText('We ship hires. Not headaches.');
        break;
      case 'c':
        setHeadline('Real hires, fast.<br />No BS.');
        setAltText('Real hires, fast. No BS.');
        break;
      default:
        setHeadline('We ship hires.<br />Not spreadsheets.');
        setAltText('We ship hires. Not spreadsheets.');
    }
  }, []);
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
        <div className="grid md:grid-cols-2 items-start gap-10">
          <div className="text-center md:text-left md:mt-8">
            <StaggeredReveal delay={100}>
              <h1 className="text-hero font-bold tracking-tight text-white" dangerouslySetInnerHTML={{ __html: headline }}>
              </h1>
            </StaggeredReveal>
            
            <StaggeredReveal delay={300}>
              <p className="mt-3 text-subhero text-neutral-100 max-w-2xl md:max-w-none mx-auto md:mx-0 font-semibold">
                TRS is a Recruiting OS — AI + humans in the loop. Fast loops. Clean signals. Better hires.
              </p>
            </StaggeredReveal>
            

            
            <StaggeredReveal delay={500}>
              <div className="mt-8 flex flex-col sm:flex-row md:justify-start justify-center gap-3">
                <Link href="/contact" aria-label="See candidates in your inbox">
                  <Button className="px-6 h-11">See candidates in your inbox</Button>
                </Link>
                <Link href="/services" aria-label="See how it works">
                  <Button variant="ghost" className="px-6 h-11">See how it works</Button>
                </Link>
              </div>
            </StaggeredReveal>

            {/* How It Works */}
            <StaggeredReveal delay={1100}>
              <div className="mt-12">
              <div>
                {[
                  { 
                    step: "1", 
                    title: "Kickoff", 
                    description: "We extract the real job. Must-haves. Soft signals. Red flags.",
                    details: [
                      "Boolean search optimization across 50+ platforms",
                      "LinkedIn automation with personalized messaging",
                      "Passive candidate identification and engagement",
                      "Competitive intelligence and market mapping"
                    ]
                  },
                  { 
                    step: "2", 
                    title: "Sourcing", 
                    description: "Boolean. Sales Navigator. X-ray. Warm intros.",
                    details: [
                      "Boolean search optimization across 50+ platforms",
                      "LinkedIn automation with personalized messaging",
                      "Passive candidate identification and engagement",
                      "Competitive intelligence and market mapping"
                    ]
                  },
                  { 
                    step: "3", 
                    title: "Parsing + Enrichment", 
                    description: "Resumes, LinkedIn, transcripts. Structured. Searchable.",
                    details: [
                      "30-minute discovery call to understand role requirements",
                      "Technical skills assessment and cultural fit criteria",
                      "Compensation benchmarking and market analysis",
                      "Timeline and expectations alignment"
                    ]
                  },
                  { 
                    step: "4", 
                    title: "AI Scoring", 
                    description: "Role rubrics. 100-point score. Evidence from source text.",
                    details: [
                      "10-point custom rubric tailored to your specific role",
                      "Technical competency assessment",
                      "Cultural alignment and soft skills evaluation",
                      "Reference checks and background verification"
                    ]
                  },
                  { 
                    step: "5", 
                    title: "Human Review", 
                    description: "We read. We listen. We adjust. We add judgment.",
                    details: [
                      "Comprehensive candidate brief with scores and insights",
                      "Interview transcripts and key conversation highlights",
                      "Salary expectations and negotiation guidance",
                      "Only top 10% of candidates reach your desk"
                    ]
                  },
                  { 
                    step: "6", 
                    title: "Client Delivery", 
                    description: "Portal or clean report. Inbound/outbound tags. Notes and next steps.",
                    details: [
                      "Real-time feedback collection after each submission",
                      "Interview outcome tracking and analysis",
                      "Candidate experience monitoring",
                      "Continuous calibration of search criteria"
                    ]
                  },
                  { 
                    step: "7", 
                    title: "Feedback Loop", 
                    description: "Your feedback tunes the model. Each slate gets sharper.",
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
                alt={altText}
                width={640}
                height={800}
                className="w-full h-auto opacity-90 relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* Speed / Value */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <Reveal>
          <ValueSplit
            claim="< 7 days"
            title="from intake to first slate — decision-ready candidates without wasted interviews"
            bullets={[
              { title: "Signal over noise", body: "Custom rubrics and brief summaries get you to 'yes/no' quickly." },
              { title: "Tight feedback loop", body: "We learn from outcomes and adapt every week." },
            ]}
            caption="Based on historical client cycles and internal benchmarks"
          />
        </Reveal>
      </section>

      {/* The TRS Difference - What you see vs don't see */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">The TRS Difference</h3>
            <p className="text-neutral-300 text-sm">What you experience vs. what stays behind the scenes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                <Check className="h-5 w-5" />
                What you actually get:
              </h4>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Scorecards with receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Transcript highlights</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                  <span>Clear next steps</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                What you never deal with:
              </h4>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 text-lg leading-none">✗</span>
                  <span>Busywork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 text-lg leading-none">✗</span>
                  <span>Chaos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 text-lg leading-none">✗</span>
                  <span>Vendor hopscotch</span>
                </li>
              </ul>
            </div>
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
        
        {/* Client Microquote */}
        <div className="mt-6 max-w-2xl mx-auto text-center">
          <blockquote className="text-neutral-300 italic">
            &quot;TRS gave us finalists in 5 days. Faster than our internal team. Filtered down from 250 candidates.&quot;
          </blockquote>
          <cite className="text-neutral-400 text-sm mt-2 block">— Abby W. HR Executive</cite>
        </div>
      </section>

      {/* Values & Focus */}
      <section
        id="mission"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm relative scroll-mt-24 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/50 to-neutral-900/0"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* For Startups */}
          <div id="for-startups" className="space-y-6">
            <h2 className="text-2xl font-semibold">For Startups</h2>
            
            {/* Section intro */}
            <div className="space-y-3">
            <p className="text-neutral-100 text-lg md:text-xl font-semibold leading-snug">
                You are busy. You still need judgment.
              </p>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={Handshake} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>We act like a teammate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={ShieldCheck} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>We protect your bar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={Zap} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>We move fast without breaking the candidate experience.</span>
                </li>
              </ul>
            </div>

            {/* Where we shine */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Where we shine</h3>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={TrendingUp} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>Seed to Series B, 11–50 people</span>
                </li>
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={Target} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>AI, security, infra, GTM</span>
                </li>
                <li className="flex items-start gap-3">
                  <SafeIcon Icon={BarChart3} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>High bar, low internal bandwidth</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="/contact" aria-label="Get your first slate">
                <Button className="px-6 h-11">Get your first slate</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Agencies */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">For Agencies</h2>
            
            {/* Section intro */}
            <div className="space-y-3">
              <p className="text-neutral-100 text-lg md:text-xl font-semibold leading-snug">
                Make your shop modern overnight
              </p>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Use our OS under your brand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Keep your client. Increase your win rate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Human + AI without a platform team.</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link href="/contact" aria-label="Partner with TRS">
                <Button className="px-6 h-11">Partner with TRS</Button>
              </Link>
            </div>
          </div>

          {/* What you get */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Drop-in tools for your workflow</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-start gap-3">
                <SafeIcon Icon={ListChecks} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <div className="text-neutral-200 font-medium">Scoring templates</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-start gap-3">
                <SafeIcon Icon={FileText} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <div className="text-neutral-200 font-medium">Candidate reports</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-start gap-3">
                <SafeIcon Icon={Search} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <div className="text-neutral-200 font-medium">Sourcing playbooks</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-start gap-3">
                <SafeIcon Icon={Eye} className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <div className="text-neutral-200 font-medium">Light portal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">Simple, aligned pricing</h2>
          
          {/* Simple Rules - MOVED ABOVE AS CREDIBILITY ANCHOR */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 text-center">Simple rules</h3>
            <div className="flex flex-wrap justify-center gap-6 text-neutral-200">
              <span className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>No setup fees.</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>Clear exit.</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>We pause if we cannot add value.</span>
              </span>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* PSaaS - HIGHLIGHTED AS PREFERRED OPTION */}
            <div className="relative rounded-2xl border-2 border-red-500 p-6 bg-red-500/5 shadow-lg shadow-red-500/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">PSaaS</h3>
              <div className="text-2xl font-bold text-red-500 mb-4">From $4,000 / month</div>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>AI scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Human review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Shortlists</span>
              </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Weekly recalibration</span>
              </li>
              </ul>
            </div>

            {/* Contract Recruiting */}
            <div className="rounded-2xl border border-neutral-800 p-6 bg-white/5">
              <h3 className="text-xl font-semibold mb-2">Contract Recruiting</h3>
              <div className="text-2xl font-bold text-red-500 mb-4">From $12,000 / month</div>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Dedicated recruiter</span>
              </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Weekly sprint plans</span>
              </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Slate commitments</span>
              </li>
            </ul>
          </div>

            {/* Executive Search */}
            <div className="rounded-2xl border border-neutral-800 p-6 bg-white/5">
              <h3 className="text-xl font-semibold mb-2">Executive Search</h3>
              <div className="text-2xl font-bold text-red-500 mb-4">Flat + success, or % of first year</div>
              <ul className="space-y-2 text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Aligned incentives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Market mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Finals management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" aria-label="Start with the plan that fits">
              <Button className="px-6 h-11">Start with the plan that fits</Button>
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
                a: "Because most recruiters spam LinkedIn. We built a system that actually closes hires."
              },
              {
                q: "Why not just use an AI tool?",
                a: "Tools don't close hires. We use AI where it helps, but humans make the calls."
              },
              {
                q: "Are you a recruiting service or a product?",
                a: "We are both. Or one or the other. Whatever you need. Some clients use us as their recruiter. Others plug us in like software. The OS works either way."
              },
              {
                q: "How fast is \"fast\"?",
                a: "First slate in under a week once we have a real intake."
              },
              {
                q: "Can we start small with just PSaaS?",
                a: "Yes. Many do. It's the cleanest way to cut noise before we scale into full recruiting."
              },
              {
                q: "What if our hiring bar is super specific?",
                a: "Good. Specific beats vague. Give us the signals and we'll find them."
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
                a: "We pivot or pause. No drama. No long contracts. No excuses."
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

      {/* TRS is for … tiles */}
      <section id="how" className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold">Who we work best with</h2>
        <TilesGrid
          items={[
            { Icon: Search, title: "Find people others miss", description: "AI-boosted Boolean + targeted outreach to find top talent others miss." },
            { Icon: ListChecks, title: "Score What Matters", description: "10-point custom rubric tailored to your role, not generic checklists." },
            { Icon: FileText, title: "See the tradeoffs fast", description: "Candidate briefs with scores, transcripts, and context for quick yes/no." },
            { Icon: Hand, title: "Stay Hands-On", description: "Your preferences guide the search; we adapt in real time." },
            { Icon: BarChart3, title: "Built for Growth", description: "Systems that scale with your team — from one hire to a full department." },
            { Icon: Zap, title: "From intake to offer in days", description: "From intake to offer quicker with fewer wasted interviews." },
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
                <SafeIcon Icon={BadgeCheck} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>35+ roles closed across AI, security, and GTM</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={Timer} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>Avg time to first slate: &lt; 7 days</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <SafeIcon Icon={TrendingUp} className="h-5 w-5 text-red-500 mt-0.5" />
                <span>Backed by repeat clients and referrals</span>
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

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Newsletter</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Hiring systems, AI, and real recruiting—practical, no fluff.
              </p>
              <NewsletterSignup className="max-w-md mx-auto" />
            </div>

            {/* Recent Issues */}
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

              {/* View All Link */}
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
