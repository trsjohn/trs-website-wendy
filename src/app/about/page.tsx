import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const team = [
    {
      name: "Alex Ricciardelli",
      role: "Co-Founder & CEO",
      image: "/team/alex-ricciardelli.jpeg",
      email: "alex@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/alexricciardelli/",
      bio: "Alex brings a background in psychology, cybersecurity sales, and six years in private equity: industries where reading people and making the right call under pressure isn't optional. He leads the firm's growth, client relationships, and vision. Former NCAA D1 golfer at USF."
    },
    {
      name: "John Frank",
      role: "Co-Founder & COO",
      image: "/team/john-frank.jpg",
      email: "john@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/johnfranktrs/",
      bio: "The builder behind TRS. When the existing recruiting platforms weren't good enough, John built the proprietary infrastructure that powers everything TRS does. He keeps everything operating behind the scenes, from sourcing and scoring to pipeline management and workflow automation."
    },
    {
      name: "Nicholas Ricciardelli",
      role: "Head of Recruiting",
      image: "/team/nicholas-ricciardelli.jpg",
      email: "nick@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/nicholas-ricciardelli-3623b118/",
      bio: "30+ years in technical and executive recruiting and staffing. With a background placing talent at companies including Nvidia, Bank of America, and Intel, he brings a gut instinct that no software can replicate and the track record to back it up."
    },
    {
      name: "Wendy Trattner",
      role: "Head of Growth",
      image: "/team/wendy-trattner.jpg",
      email: "wendy@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/wtratt/",
      bio: "MIT mechanical engineer and founder with a background in deeptech startups. Wendy leads marketing and growth strategy. She also brings her engineering background to technical candidate screening, giving clients a sharper eye on their most complex hires."
    },
  ];

  const values = [
    {
      title: "Outcomes, not activity",
      description: "We measure success by hires that stick, not resumes sent."
    },
    {
      title: "Technology as a tool",
      description: "We built our own infrastructure because better tools mean better hiring."
    },
    {
      title: "Humans, not just numbers",
      description: "People talk to people. Intuition, experience, and compassion are invaluable."
    },
    {
      title: "Judgment over volume",
      description: "We'd rather send you three right candidates than thirty wrong ones."
    },
    {
      title: "Nothing gets lost",
      description: "Every detail you share shapes your search. We build systems so context doesn't fall through the cracks."
    },
    {
      title: "Always building",
      description: "We keep improving the system, the process, and ourselves with every search we run."
    }
  ];

  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">About TRS</p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
            Why TRS<br />
            <span className="text-red-500">Exists.</span>
          </h1>
          <div className="mt-10 space-y-5 text-lg text-neutral-300 leading-relaxed max-w-3xl">
            <p>The right team can move mountains. We&apos;ve seen it.</p>
            <p>Alex Ricciardelli built his career learning to read people under pressure across psychology, cybersecurity sales, and six years in private equity. He co-founded TRS with his best friend John, and his father Nicholas, whose 30+ year career placing talent at companies like Nvidia and Intel gave the firm an unfair head start.</p>
            <p>Together they saw an opportunity to build something different. Not just a recruiting firm. A fully proprietary recruiting infrastructure, architected from scratch. The existing tools weren&apos;t built by recruiters and weren&apos;t keeping up with the most advanced technologies.</p>
            <p>The result is a process that consistently outpaces every other firm TRS has competed against. A 50,000+ candidate network. An average time to shortlist under 9 days. And a team that takes full ownership from the first intake call to the signed offer.</p>
            <p>Because building the right team isn&apos;t just a hiring decision. It&apos;s the most important decision a business leader can make.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Principles</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">What We Believe</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {values.map((value, index) => (
            <div key={index} className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200">
              <h3 className="font-black uppercase text-white mb-3 text-base tracking-wide">{value.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-3">The People</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none">The Team</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl">
            A small team with deep experience. We don&apos;t scale by hiring junior recruiters. We scale by building better systems.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {team.map((member, index) => (
            <div key={member.name} className="bg-neutral-950 p-6 hover:bg-white/5 transition-colors duration-200">
              <div className="h-20 w-20 overflow-hidden rounded-full mb-5 ring-1 ring-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                  priority={index === 0}
                />
              </div>
              <h3 className="font-black uppercase text-white text-base tracking-wide mb-0.5">{member.name}</h3>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-neutral-500 hover:text-white transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Built Differently */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">Infrastructure</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase text-white leading-none mb-8">Built Differently,<br />By Design</h2>
            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                We didn&apos;t set out to build a software company. We set out to build a better recruiting firm, and realized the only way to do that was to build the infrastructure ourselves.
              </p>
              <p>
                Our proprietary system covers the entire workflow: intelligent auto-sourcing, candidate scoring, adaptive multichannel outreach, pipeline management, and interview intelligence. It integrates directly into your Slack or existing tools.
              </p>
              <p>
                Our in-house software isn&apos;t publicly available yet, but it gives our clients a structural edge that no other agency can match.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 md:pt-0 md:border-t-0 md:border-l md:border-white/10 md:pl-16">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">By the Numbers</p>
            <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
              {[
                { stat: "135+", label: "Roles closed" },
                { stat: "<9 days", label: "Avg. time to shortlist" },
                { stat: "21 days", label: "Avg. start to hire" },
                { stat: "50,000+", label: "Candidate network" },
                { stat: "30+", label: "Years of combined experience" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-center justify-between py-4">
                  <span className="text-neutral-400 text-sm uppercase tracking-wide">{label}</span>
                  <span className="text-white font-black text-2xl">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 sm:py-40">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Get Started</p>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase text-white leading-none">
            Ready to<br />
            <span className="text-red-500">Hire Right?</span>
          </h2>
          <p className="mt-8 text-lg text-neutral-400 max-w-lg mx-auto">
            One call is all it takes. We&apos;ll tell you if we&apos;re the right fit, and if we are, we get to work immediately.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button className="h-14 px-14 font-bold uppercase tracking-widest text-base bg-red-600 hover:bg-red-500 border-0">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}