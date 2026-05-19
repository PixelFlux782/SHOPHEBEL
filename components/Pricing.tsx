"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { FULL_ANALYSE_URL, PREMIUM_ANALYSE_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const tiers = [
  {
    name: "Analyse-Teaser",
    price: "0 EUR",
    desc: "Erste Einschätzung deiner Website mit Score und den wichtigsten Hinweisen.",
    href: WEBSITE_ANALYSE_URL,
    cta: "Kostenlos analysieren",
    recommended: false,
    features: ["Gesamt-Score", "Ersteinschätzung", "1-2 Hauptprobleme"],
  },
  {
    name: "Vollanalyse",
    price: "5 EUR",
    desc: "Vollständige automatisierte Analyse mit Detailbewertungen und ersten Empfehlungen.",
    href: FULL_ANALYSE_URL,
    cta: "Vollanalyse freischalten",
    recommended: true,
    features: ["alle Scores", "UX-/Trust-/SEO-Breakdown", "Schwachstellen und Prioritäten light"],
  },
  {
    name: "Premium Analyse",
    price: "49 EUR",
    desc: "Strategischer Premium-Report mit Prioritäten, Visual Audit Notes und 7-Tage-Plan.",
    href: PREMIUM_ANALYSE_URL,
    cta: "Premium Analyse starten",
    recommended: false,
    features: ["Premium Report", "Conversion-Hypothesen", "PDF Export"],
  },
];

export const Pricing = () => {
  return (
    <section id="preise" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Klarer Einstieg. Klare Entscheidung.
        </h2>
        <p className="mt-4 text-brand-muted">
          Starte kostenlos, schalte die Vollanalyse für 5 EUR frei oder nutze die Premium Analyse für strategische Prioritäten.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full hover:-translate-y-1 ${
              tier.recommended
                ? "bg-blue-600/20 border-blue-500/50 shadow-[0_20px_50px_rgba(37,99,235,0.15)] lg:scale-105 z-10 backdrop-blur-md"
                : "bg-white/[0.03] border-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            }`}
          >
            <div className="mb-8">
              {tier.recommended && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-4 block">
                  Empfohlen
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 tracking-tight">{tier.name}</h3>
              <div className="text-3xl font-bold">{tier.price}</div>
            </div>
            <p className="text-brand-muted text-sm mb-8 leading-relaxed">{tier.desc}</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                  <Check className="w-4 h-4 text-brand-blue" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`w-full py-3 rounded-lg font-medium transition-all text-center ${
                tier.recommended ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-white/10 text-white border border-white/20"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
