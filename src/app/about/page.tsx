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
      name: "Nicholas Ricciardelli",
      role: "Head of Recruiting",
      image: "/team/nicholas-ricciardelli.jpg",
      email: "nick@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/nicholas-ricciardelli-3623b118/",
      bio: "30+ years in technical and executive recruiting and staffing. With a background placing talent at companies including Nvidia, Bank of America, and Intel, he brings a gut instinct that no software can replicate and the track record to back it up."
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
      name: "Wendy Trattner",
      role: "CMO & Technical Advisor",
      image: "/team/wendy-trattner.jpg",
      email: "wendy@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/wtratt/",
      bio: "MIT mechanical engineer and founder with a background in deeptech startups. Wendy leads marketing and GTM strategy. She also brings her engineering background to technical candidate screening, giving clients a sharper eye on their most complex hires."
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
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-section-y space-y-24">

      {/* Mission */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">Why TRS exists</h1>
        <div className="space-y-5 text-lg text-neutral-300 leading-relaxed">
          <p>The right team can move mountains. We&apos;ve seen it.</p>
          <p>Alex Ricciardelli built his career learning to read people under pressure across psychology, cybersecurity sales, and six years in private equity. He co-founded TRS with his best friend John, and his father Nicholas, whose 30+ year career placing talent at companies like Nvidia and Intel gave the firm an unfair head start.</p>
          <p>Together they saw an opportunity to build something different. Not just a recruiting firm. A fully proprietary recruiting infrastructure, architected from scratch. They knew the existing tools weren&apos;t built by recruiters, and weren&apos;t keeping up with the most advanced technologies.</p>
          <p>The result is a process that consistently outpaces every other firm TRS has competed against. A 50,000+ candidate network. An average time to shortlist under 9 days. And a team that takes full ownership from the first intake call to the signed offer.</p>
          <p>Because building the team right isn&apos;t just a hiring decision. It&apos;s the most important decision a business leader can make.</p>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-3xl font-bold mb-12">What we believe</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="border-t border-white/10 pt-6">
              <h3 className="font-bold text-white mb-2 text-lg">{value.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold mb-4">The team</h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
          A small team with deep experience. We don&apos;t scale by hiring junior recruiters. We scale by building better systems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div key={member.name} className="group">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full mb-5 ring-1 ring-white/10 transition-all duration-200">
                <Image
                  src={member.image}
                  alt={`${member.name}`}
                  width={112}
                  height={112}
                  className="h-28 w-28 object-cover"
                  priority={index === 0}
                />
              </div>
              <h3 className="font-bold text-white text-base mb-0.5">{member.name}</h3>
              <p className="text-red-400 text-sm font-medium mb-3">{member.role}</p>
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

      {/* Proprietary tech callout */}
      <section className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-5">Built differently, by design</h2>
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
        <div className="space-y-4">
          {[
            { stat: "135+", label: "Roles closed" },
            { stat: "<9 days", label: "Avg. time to shortlist" },
            { stat: "21 days", label: "Avg. start to hire" },
            { stat: "50,000+", label: "Candidate network" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-neutral-400">{label}</span>
              <span className="text-white font-bold text-xl">{stat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-2xl border border-white/10 bg-white/5 p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to hire right?</h2>
        <p className="text-lg text-neutral-300 mb-8 max-w-xl mx-auto">
          One call is all it takes. We&apos;ll tell you if we&apos;re the right fit — and if we are, we get to work immediately.
        </p>
        <Link href="/contact">
          <Button className="px-8 h-12 text-base font-semibold border border-red-500 shadow-md shadow-red-500/20">
            Let&apos;s talk
          </Button>
        </Link>
      </section>

    </div>
  );
}