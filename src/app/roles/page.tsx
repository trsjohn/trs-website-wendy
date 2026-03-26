"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRoles, type Role } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { normalizeJD } from "@/lib/types";
import TagBubbles from "@/components/TagBubbles";

interface JobData {
  client?: string;
  location?: string;
  compensation?: string;
  contract_type?: string;
}

function JobDetails({ sourceJdJson }: { sourceJdJson: unknown }) {
  if (!sourceJdJson || typeof sourceJdJson !== 'object' || sourceJdJson === null) {
    return null;
  }

  const jobData = sourceJdJson as Record<string, unknown>;
  const details: JobData = {
    client: typeof jobData.client === 'string' ? jobData.client : undefined,
    location: typeof jobData.location === 'string' ? jobData.location : undefined,
    compensation: typeof jobData.compensation === 'string' ? jobData.compensation : undefined,
    contract_type: typeof jobData.contract_type === 'string' ? jobData.contract_type : undefined,
  };

  const hasAnyDetails = Object.values(details).some(value => value !== undefined);
  if (!hasAnyDetails) return null;

  return (
    <div className="space-y-1 text-sm text-neutral-400 mt-3">
      {details.client && (
        <p><span className="text-neutral-500 uppercase tracking-widest text-xs">Client </span>{details.client}</p>
      )}
      {details.location && (
        <p><span className="text-neutral-500 uppercase tracking-widest text-xs">Location </span>{details.location}</p>
      )}
      {details.compensation && (
        <p><span className="text-neutral-500 uppercase tracking-widest text-xs">Compensation </span>{details.compensation}</p>
      )}
      {details.contract_type && (
        <p><span className="text-neutral-500 uppercase tracking-widest text-xs">Type </span>{details.contract_type}</p>
      )}
    </div>
  );
}

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRoles() {
      try {
        setLoading(true);
        const data = await getRoles();
        setRoles(data);
      } catch (err) {
        console.error("Error fetching roles:", err);
        setError("Failed to load roles. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadRoles();
  }, []);

  if (loading) {
    return (
      <div className="space-y-0">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-4">Open Positions</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
              Available<br />
              <span className="text-red-500">Roles.</span>
            </h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-neutral-500 text-xs uppercase tracking-widest">Loading roles...</p>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-0">
        <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-red-500 mb-4">Open Positions</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
              Available<br />
              <span className="text-red-500">Roles.</span>
            </h1>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <p className="text-red-400 text-sm">{error}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">Open Positions</p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
            Available<br />
            <span className="text-red-500">Roles.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-300 max-w-xl leading-relaxed">
            Every role is placed by a human who has read the brief, understands the company, and will personally screen every candidate we send.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {roles.length === 0 ? (
          <div className="border-t border-white/10 pt-12 pb-12">
            <p className="text-neutral-400 mb-3">No roles are currently available.</p>
            <p className="text-sm text-neutral-500">
              Check back soon or{" "}
              <Link href="/contact" className="text-red-400 hover:text-red-300 transition-colors">
                contact us
              </Link>{" "}
              to learn about upcoming opportunities.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {roles.map((role) => {
              const displayTitle = role.title.split("—")[0]?.trim() || role.title;

              let tags: string[] = [];
              if (role.sourceJdJson) {
                try {
                  const normalizedJD = normalizeJD(role.sourceJdJson);
                  tags = normalizedJD.tags || [];
                } catch (error) {
                  console.error("Error normalizing JD for tags:", error);
                }
              }

              return (
                <div
                  key={role.id}
                  className="py-8 flex flex-col sm:flex-row sm:items-center gap-6 hover:bg-white/[0.02] transition-colors px-2 -mx-2"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-black uppercase tracking-wide text-white mb-2">
                      {displayTitle}
                    </h2>
                    <TagBubbles tags={tags} className="mb-1" />
                    <JobDetails sourceJdJson={role.sourceJdJson} />
                  </div>
                  <div className="shrink-0">
                    <Link href={`/apply?role=${role.id}`}>
                      <Button className="h-10 px-6 font-bold uppercase tracking-wider text-sm">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Don't see the right role */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-32 sm:py-40 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Get in Touch</p>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase text-white leading-none">
            Don&apos;t See the<br />
            <span className="text-red-500">Right Role?</span>
          </h2>
          <p className="mt-8 text-lg text-neutral-400 max-w-lg mx-auto">
            We&apos;re always looking for exceptional talent. Get in touch and let us know what you&apos;re looking for.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button className="h-14 px-14 font-bold uppercase tracking-widest text-base bg-red-600 hover:bg-red-500 border-0">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}