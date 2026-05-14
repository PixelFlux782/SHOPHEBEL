"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { CONVERSION_OPTIMIERUNG_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const navLinks = [
  { label: "Website Analyse", href: WEBSITE_ANALYSE_URL },
  { label: "Conversion Optimierung", href: CONVERSION_OPTIMIERUNG_URL },
  { label: "Plattform", href: "/#analyse" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-5">
      <div className="w-full max-w-7xl flex items-center justify-between px-4 py-4 sm:px-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.10)]">
        <div className="flex min-w-0 items-center gap-5 lg:gap-8">
          <Link href="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
            <Image 
              src="/branding/logo_only_letter.jpeg" 
              alt="Logo" 
              width={28} 
              height={28} 
              className="rounded-sm grayscale brightness-200"
            />
            <span className="font-semibold tracking-tighter text-base uppercase text-white/90">SHOPHEBEL</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/75 font-medium">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white transition-all duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={WEBSITE_ANALYSE_URL}
          className="hidden bg-blue-600/80 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20 sm:inline-flex"
        >
          Kostenlos analysieren
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="absolute left-4 right-4 top-[5.75rem] rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={WEBSITE_ANALYSE_URL}
            onClick={() => setIsOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
          >
            Website kostenlos analysieren
          </Link>
        </div>
      ) : null}
    </nav>
  );
};
