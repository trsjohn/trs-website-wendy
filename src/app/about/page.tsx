import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const team = [
    { 
      name: "Alex Ricciardelli", 
      role: "CEO & Co-Founder", 
      image: "/team/alex-ricciardelli.jpg",
      email: "alex@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/alexricciardelli/",
      bio: "Led recruiting for hyper-growth startups before founding TRS."
    },
    { 
      name: "John Frank", 
      role: "COO & Co-Founder", 
      image: "/team/john-frank.jpg",
      email: "john@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/johnfranktrs/",
      bio: "Operations leader who built systems for scaling teams."
    },
    { 
      name: "Nicholas Ricciardelli", 
      role: "Head of Recruiting", 
      image: "/team/nicholas-ricciardelli.jpg",
      email: "nick@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/nicholas-ricciardelli-3623b118/",
      bio: "20+ years of recruiting leadership across industries."
    }
  ];

  const values = [
    {
      title: "Outcome Over Output",
      description: "We measure success by hires that stick, not activity."
    },
    {
      title: "AI + Human Harmony", 
      description: "Tech accelerates, people decide."
    },
    {
      title: "Extreme Ownership",
      description: "We own results end-to-end."
    },
    {
      title: "Speed with Substance",
      description: "Fast, but never sloppy."
    },
    {
      title: "Builder's Mindset",
      description: "Always learning, always improving."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-section-y space-y-20">
      {/* Hero Section - Mission */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Mission</h1>
        <div className="space-y-4 text-xl lg:text-2xl text-neutral-200 leading-relaxed">
          <p>Hiring is broken. Too much noise, too little judgment.</p>
          <p>TRS exists to deliver better hires, faster — combining AI precision with human expertise.</p>
        </div>
      </section>

      {/* Values Section - Simplified */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <h3 className="font-bold text-white mb-2 group-hover:text-brand transition-colors">
                {value.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section - Cleaner */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={member.name} className="group">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full mb-4 ring-2 ring-neutral-800 group-hover:ring-brand/50 transition-all">
                <Image
                  src={member.image}
                  alt={`${member.name} headshot`}
                  width={128}
                  height={128}
                  className="h-32 w-32 object-cover"
                  priority={index === 0}
                />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
              <p className="text-brand font-medium mb-3">{member.role}</p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex items-center justify-center gap-4">
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
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Simplified */}
      <section className="text-center bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Team?</h2>
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
          Whether you need one key hire or a full recruiting system, TRS delivers outcomes that stick.
        </p>
        <Link href="/contact">
          <Button className="px-8 py-3 text-lg font-semibold bg-brand hover:bg-red-600 text-white">
            Get Started
          </Button>
        </Link>
      </section>
    </div>
  );
}


