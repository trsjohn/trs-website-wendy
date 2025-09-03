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
  
  if (!hasAnyDetails) {
    return null;
  }
  
  return (
    <div className="space-y-2 text-sm text-neutral-300">
      {details.client && (
        <p><span className="text-neutral-400">Client:</span> {details.client}</p>
      )}
      {details.location && (
        <p><span className="text-neutral-400">Location:</span> {details.location}</p>
      )}
      {details.compensation && (
        <p><span className="text-neutral-400">Compensation:</span> {details.compensation}</p>
      )}
      {details.contract_type && (
        <p><span className="text-neutral-400">Type:</span> {details.contract_type}</p>
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-8">Available Roles</h1>
          <div className="text-neutral-300">Loading roles...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-8">Available Roles</h1>
          <div className="text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Available Roles</h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Explore our current open positions and find the role that&apos;s right for you.
        </p>
      </div>

      {roles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-neutral-300 mb-4">No roles are currently available.</div>
          <p className="text-sm text-neutral-400">
            Check back soon or{" "}
            <Link href="/contact" className="text-red-400 hover:text-red-300">
              contact us
            </Link>{" "}
            to learn about upcoming opportunities.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => {
            // Extract the main title (before the dash if present)
            const displayTitle = role.title.split("—")[0]?.trim() || role.title;
            
            // Extract tags from the job data
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
                className="rounded-2xl border border-neutral-800 bg-white/5 p-6 transition-all duration-200 hover:bg-white/10 hover:border-neutral-700"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {displayTitle}
                  </h2>
                  
                  <TagBubbles tags={tags} className="mb-3" />
                  
                  <JobDetails sourceJdJson={role.sourceJdJson} />
                </div>

                <div className="mt-auto">
                  <Link href={`/apply?role=${role.id}`}>
                    <Button className="w-full">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Call to action */}
      <div className="mt-12 text-center">
        <div className="rounded-2xl border border-neutral-800 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Don&apos;t see the right role?
          </h2>
          <p className="text-neutral-300 mb-6">
            We&apos;re always looking for exceptional talent. Get in touch and let us know what you&apos;re looking for.
          </p>
          <Link href="/contact">
            <Button variant="ghost">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
