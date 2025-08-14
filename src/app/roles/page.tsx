"use client";
import { useEffect, useState } from "react";
import { getRoles, type Role } from "@/lib/api";
import Link from "next/link";

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => { getRoles().then(setRoles).catch(() => setRoles([])); }, []);

  const filtered = roles.filter(r => {
    const s = (r.title + " " + (r.location || "")).toLowerCase();
    return s.includes(q.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Open Roles</h1>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search title or location…"
          className="w-64 rounded border border-neutral-800 bg-transparent px-3 py-2"
        />
      </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="grid gap-4">
        {filtered.map(r => (
          <div key={r.id} className="rounded-2xl border border-neutral-800 p-5">
            <h3 className="font-semibold mb-1">{r.title.split("—")[0].split(" - ")[0].trim()}</h3>
            {r.location && <p className="text-sm text-neutral-300 mb-2">📍 {r.location}</p>}
            {r.comp && <p className="text-sm text-neutral-300 mb-3">💰 {r.comp}</p>}
            <Link href={`/apply?role=${r.id}`} className="rounded bg-white/10 px-3 py-2 hover:bg-white/20 inline-block">
              View & Apply
            </Link>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-neutral-300">No roles found.</p>}
      </div>
      </section>
    </div>
  );
}


