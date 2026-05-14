"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { ANALYSE_APP_URL } from "@/lib/constants";

type MenuItem = {
  label: string;
  href: string;
  description: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    label: "Plattform",
    items: [
      {
        label: "Website Audit",
        href: ANALYSE_APP_URL,
        description: "Kostenloser Check für UX, Technik, Trust, Conversion und Sichtbarkeit.",
      },
      {
        label: "Visuelle Analyse",
        href: "/#analyse",
        description: "Screenshots, sichtbare Reibung und konkrete Layout-Hebel einordnen.",
      },
      {
        label: "AI Visibility",
        href: "/ki-sichtbarkeit",
        description: "AEO/GEO-Grundlagen, Schema.org, Entitäten und FAQ-Potenzial prüfen.",
      },
      {
        label: "Reports",
        href: "/shophebel/report",
        description: "Einfache Reports mit Maßnahmen, Textideen und Entwickler-To-dos.",
      },
    ],
  },
  {
    label: "Angebote",
    items: [
      {
        label: "Free Audit",
        href: ANALYSE_APP_URL,
        description: "Schnelle Diagnose ohne Login und ohne Datenflut.",
      },
      {
        label: "Premium Report",
        href: "/shophebel/report",
        description: "Priorisierte Maßnahmen und klare nächste Schritte.",
      },
      {
        label: "Umsetzung & Service",
        href: "/shophebel/optimierung",
        description: "Persönliche Auswertung und Hilfe bei der Umsetzung.",
      },
      {
        label: "Kostenlose Tools",
        href: "/tools",
        description: "Website Check, Snippet Generator, Trust Check und Checklisten.",
      },
    ],
  },
  {
    label: "Lösungen",
    items: [
      {
        label: "Für Onlineshops",
        href: "/leistungen",
        description: "Produktseiten, Trust, Checkout und Kaufargumente verbessern.",
      },
      {
        label: "Für lokale Betriebe",
        href: "/leistungen",
        description: "Kontakt, Standortsignale und Anfragewege klarer machen.",
      },
      {
        label: "Für Dienstleister",
        href: "/leistungen",
        description: "Angebote, Expertenwirkung und Lead-Strecken schärfen.",
      },
      {
        label: "Für Agenturen",
        href: "/leistungen",
        description: "Audit-Logik und Reports als Grundlage für Kundenprojekte.",
      },
    ],
  },
  {
    label: "Ressourcen",
    items: [
      {
        label: "AI Sichtbarkeit",
        href: "/ki-sichtbarkeit",
        description: "Warum klassische SEO nicht mehr reicht.",
      },
      {
        label: "Checklisten",
        href: "/tools/google-business-profil-checkliste",
        description: "Kompakte Prüflisten für schnelle Verbesserungen.",
      },
      {
        label: "Beispiele",
        href: "/#analyse",
        description: "So können Scores, Reports und visuelle Hinweise aussehen.",
      },
    ],
  },
];

const simpleLinks = [{ label: "Preise", href: "/preise" }];

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="group relative flex items-center rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white">
      <span className={isActive ? "text-white" : ""}>{children}</span>
      {isActive ? (
        <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />
      ) : (
        <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/70 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </Link>
  );
}

function MegaMenu({ group }: { group: MenuGroup }) {
  const pathname = usePathname();
  const isActive = group.items.some(item => pathname === item.href);

  return (
    <div className="group relative">
      <button
        type="button"
        className="relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
      >
        <span className={isActive ? "text-white" : ""}>{group.label}</span>
        <span className={`transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'}`}>
          <ChevronIcon />
        </span>
        {isActive ? (
          <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />
        ) : (
          <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/70 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </button>
      <div className="invisible absolute left-1/2 top-full z-40 w-[min(42rem,calc(100vw-3rem))] -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 group-hover:translate-y-0 translate-y-2">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/95 p-3 shadow-[0_20px_80px_-20px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
          <div className="grid gap-2 sm:grid-cols-2">
            {group.items.map((item) => (
              <Link key={item.label} href={item.href} className="group/item flex flex-col rounded-xl border border-transparent p-4 transition-all hover:bg-white/5 hover:border-white/10">
                <span className="text-sm font-semibold text-slate-200 transition-colors group-hover/item:text-white">{item.label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-500 transition-colors group-hover/item:text-slate-400">{item.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "border-b border-white/[0.08] bg-[#030712]/70 backdrop-blur-xl shadow-lg" 
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Shophebel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
              {menuGroups.slice(0, 3).map((group) => (
                <MegaMenu key={group.label} group={group} />
              ))}
              {simpleLinks.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
              <MegaMenu group={menuGroups[3]} />
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="/shophebel/report"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                Report ansehen
              </Link>
              <Link
                href={ANALYSE_APP_URL}
                className="inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]"
              >
                Website prüfen
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Menü öffnen"
                aria-expanded={isOpen}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-[#030712]/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[70] flex w-full max-w-md flex-col overflow-y-auto border-l border-white/10 bg-[#030712] px-6 py-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                     <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <span className="text-lg font-bold tracking-tight text-white">Shophebel</span>
                </div>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)} 
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10" 
                  aria-label="Menü schließen"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile Navigation">
                {menuGroups.map((group) => (
                  <section key={group.label}>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400/80 mb-3">{group.label}</p>
                    <div className="grid gap-1.5">
                      {group.items.map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          onClick={() => setIsOpen(false)} 
                          className="group/mobitem flex flex-col rounded-xl p-3 transition-colors hover:bg-white/5"
                        >
                          <span className="text-sm font-semibold text-slate-200 group-hover/mobitem:text-white">{item.label}</span>
                          <span className="mt-1 text-xs text-slate-500 line-clamp-1">{item.description}</span>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
                <section>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400/80 mb-3">Direktlinks</p>
                  <div className="grid gap-1.5">
                    {simpleLinks.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href} 
                        onClick={() => setIsOpen(false)} 
                        className="rounded-xl p-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link 
                  href="/shophebel/report" 
                  onClick={() => setIsOpen(false)} 
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Premium Report ansehen
                </Link>
                <Link 
                  href={ANALYSE_APP_URL}
                  onClick={() => setIsOpen(false)} 
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Kostenlose Analyse starten
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
