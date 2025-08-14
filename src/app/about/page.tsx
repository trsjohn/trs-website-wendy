import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  const team = [
    { 
      name: "Alex Ricciardelli", 
      role: "CEO, Co-Founder", 
      image: "/team/alex-ricciardelli.jpg",
      email: "alex@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/alexricciardelli/"
    },
    { 
      name: "John Frank", 
      role: "COO, Co-Founder", 
      image: "/team/john-frank.jpg",
      email: "john@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/johnfranktrs/"
    },
    { 
      name: "Nicholas Ricciardelli", 
      role: "Director of Recruiting", 
      image: "/team/nicholas-ricciardelli.jpg",
      email: "nick@trsolutions.io",
      linkedin: "https://www.linkedin.com/in/nicholas-ricciardelli-3623b118/"
    },
  ];

  return (
    <div className="space-y-16">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm space-y-3">
        <h1 className="text-3xl font-bold text-center">About TRS</h1>
        <p className="text-neutral-300 text-center">
          We help startups hire with speed and clarity. TRS blends structured recruiting
          with modern automation and AI, while keeping people at the center.
        </p>
        <p className="text-neutral-300 text-center">
          In an era where AI-generated resumes are flooding the market, having a human in the loop has never been more important. You need an expert — someone who knows recruiting inside out, leverages modern technology, and has built a system to optimize every step of the process.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 pb-section-y sm:pb-section-y-sm rounded-2xl border border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={m.name} className="text-center space-y-4">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border border-neutral-800 bg-white/5">
                <Image
                  src={m.image}
                  alt={`${m.name} headshot`}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-cover"
                  priority={i === 0}
                />
              </div>
              <div className="font-semibold text-white text-lg">{m.name}</div>
              <div className="text-neutral-300">{m.role}</div>
              <div className="flex items-center justify-center gap-4 mt-3">
                <a
                  href={`mailto:${m.email}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={`Email ${m.name}`}
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={`${m.name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


