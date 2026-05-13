"use client";
import { Check } from "lucide-react";
import Link from "next/link";

import { ANALYSE_APP_URL } from "@/lib/constants";

const tiers = [
  {
    name: "Website-Check",
    price: "49 EUR",
    desc: "Automatisierter Quick-Report Ihrer Shop-Performance.",
    href: ANALYSE_APP_URL,
    cta: "Website Check",
    recommended: false,
  },
  {
    name: "Shop-Optimierung",
    price: "490 EUR",
    desc: "Manuelle Experten-Analyse mit klaren Handlungsanweisungen.",
    href: "#kontakt",
    cta: "Shop Optimierung",
    recommended: true,
  },
  {
    name: "Relaunch Begleitung",
    price: "Individuell",
    desc: "Komplette strategische Neuausrichtung Ihres Shops.",
    href: "#kontakt",
    cta: "Relaunch Begleitung",
    recommended: false,
  },
];

export const Pricing = () => {
  return (
    <section id="preise" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-16">Transparente Angebote.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full hover:-translate-y-1 ${
              tier.recommended
                ? "bg-blue-600/20 border-blue-500/50 shadow-[0_20px_50px_rgba(37,99,235,0.15)] lg:scale-105 z-10 backdrop-blur-md"
                : "bg-white/[0.03] border-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            }`}
          >
            <div className="mb-8">
              {tier.recommended && <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-4 block">Empfohlen</span>}
              <h3 className="text-xl font-bold mb-2 tracking-tight">{tier.name}</h3>
              <div className="text-3xl font-bold">{tier.price}</div>
            </div>
            <p className="text-brand-muted text-sm mb-8">{tier.desc}</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                  <Check className="w-4 h-4 text-brand-blue" /> Feature Details
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
