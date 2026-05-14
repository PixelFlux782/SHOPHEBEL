"use client";

import { motion } from "framer-motion";
import { Eye, Search, Shield, Smartphone, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

import { CONVERSION_OPTIMIERUNG_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const features = [
  {
    title: "UX Analyse",
    icon: Eye,
    desc: "Erkennt, ob Besucher den Wert, die nächste Aktion und den roten Faden sofort verstehen.",
    href: WEBSITE_ANALYSE_URL,
  },
  {
    title: "SEO & AI Visibility",
    icon: Search,
    desc: "Prüft, ob Inhalte für Suchmaschinen und KI-Antworten klar, vertrauenswürdig und zitierbar wirken.",
    href: WEBSITE_ANALYSE_URL,
  },
  {
    title: "Conversion Bottlenecks",
    icon: Target,
    desc: "Macht sichtbar, wo CTAs, Angebotslogik oder Entscheidungspfade gute Besucher ausbremsen.",
    href: CONVERSION_OPTIMIERUNG_URL,
  },
  {
    title: "Mobile Experience",
    icon: Smartphone,
    desc: "Bewertet, ob mobile Nutzer schnell genug Orientierung, Vertrauen und Kontaktmöglichkeit finden.",
    href: CONVERSION_OPTIMIERUNG_URL,
  },
  {
    title: "Trust & Positioning",
    icon: Shield,
    desc: "Findet fehlende Beweise, unklare Positionierung und Signale, die vor der Anfrage Sicherheit geben.",
    href: WEBSITE_ANALYSE_URL,
  },
  {
    title: "Revenue Opportunities",
    icon: TrendingUp,
    desc: "Priorisiert Potenziale, die nicht nur besser aussehen, sondern Anfragen, Umsatz und Abschlusskraft verbessern.",
    href: CONVERSION_OPTIMIERUNG_URL,
  },
];

export const Features = () => {
  return (
    <section id="leistungen" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-brand-muted">
          Was Shophebel sichtbar macht.
        </h2>
        <p className="text-brand-muted max-w-2xl mx-auto">
          Keine Datenflut. Shophebel verdichtet Website-Signale zu den Hebeln, die Vertrauen, Anfragen und Umsatz beeinflussen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.04)", y: -2 }}
            className="bg-white/[0.03] backdrop-blur-md transition-all duration-300"
          >
            <Link href={feature.href} className="block h-full p-10">
              <feature.icon className="w-6 h-6 text-brand-blue mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
              <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-blue-300/80">
                Mehr erfahren
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
