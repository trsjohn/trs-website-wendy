"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/roles", label: "Roles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "backdrop-blur bg-black/60 border-b border-white/10"
          : "bg-transparent border-b border-red-500/60"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="TRS home">
          <Image
            src="/logo.png"
            alt="TRS logo"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40 py-2 inline-flex items-center"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex items-center rounded px-3 py-2 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/40"
          >
            Apply
          </Link>
          <Link
            href="https://app.trsolutions.io/auth"
            className="ml-2 inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-black to-red-600 transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400/40"
          >
            Client Portal
          </Link>
        </nav>
        <button
          className="md:hidden rounded bg-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-red-500/60 px-4 pb-4 bg-black/80 backdrop-blur">
          <div className="flex flex-col gap-3 pt-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-red-500">
                {l.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="rounded px-3 py-2 mt-2 hover:text-red-500">Apply</Link>
            <Link
              href="https://app.trsolutions.io/auth"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-black to-red-600 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20"
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


