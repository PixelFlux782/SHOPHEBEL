import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { FULL_ANALYSE_URL, PREMIUM_ANALYSE_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preise | Shophebel",
  description: "Preise für Analyse-Teaser, Vollanalyse für 5 EUR und Premium Analyse für 49 EUR mit Shophebel.",
};

const packages = [
  {
    name: "Analyse-Teaser",
    price: "0 EUR",
    fit: "Für den ersten Blick auf deine Website.",
    description: "Gesamt-Score, Ersteinschätzung, 1-2 Hinweise und ein Teaser auf die Detailanalyse.",
    result: "Nicht enthalten: komplette Detailanalyse, Prioritäten, Visual Audit oder konkrete Maßnahmen.",
    cta: "Kostenlos starten",
    href: WEBSITE_ANALYSE_URL,
    highlight: false,
  },
  {
    name: "Vollanalyse",
    price: "5 EUR",
    badge: "Bester Einstieg",
    fit: "Für alle, die wirklich sehen wollen, wo ihre Website bremst.",
    description: "Vollständige automatisierte Analyse mit Detailbewertungen, UX-/Trust-/SEO-/Conversion-Breakdown und visuellen Hinweisen.",
    result: "Ergebnis: konkrete Schwachstellen und erste Handlungsempfehlungen mit Prioritäten light.",
    cta: "Für 5 EUR freischalten",
    href: FULL_ANALYSE_URL,
    highlight: true,
  },
  {
    name: "Premium Analyse",
    price: "49 EUR",
    fit: "Für Unternehmen, die konkrete Prioritäten und nächste Schritte wollen.",
    description: "Strategischer Premium Report mit Priorisierung, Visual Audit Notes, Conversion-Hypothesen, 7-Tage-Plan und PDF Export.",
    result: "Ergebnis: Roadmap und Umsetzungsempfehlung statt nur automatisierter Detailanalyse.",
    cta: "Premium Analyse starten",
    href: PREMIUM_ANALYSE_URL,
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-20 pt-40">
        <section className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Preise</p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Drei Analyse-Stufen. Ein klarer nächster Schritt.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            5 EUR bedeutet vollständige automatisierte Analyse. 49 EUR bedeutet strategischer Premium-Report mit Priorisierung, Roadmap und konkreten nächsten Schritten.
          </p>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`flex min-h-[360px] flex-col justify-between rounded-3xl border p-6 backdrop-blur-xl ${
                item.highlight
                  ? "border-blue-300/35 bg-blue-500/[0.08] shadow-[0_24px_90px_-60px_rgba(37,99,235,0.8)]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              <div>
                {"badge" in item ? (
                  <span className="mb-4 inline-flex rounded-full border border-cyan-200/40 bg-cyan-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
                    {item.badge}
                  </span>
                ) : null}
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">{item.name}</p>
                <p className="mt-4 text-4xl font-bold text-white">{item.price}</p>
                <p className="mt-5 text-sm font-semibold leading-7 text-white">{item.fit}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-zinc-300">{item.result}</p>
              </div>
              <Link
                href={item.href}
                className={`mt-7 inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-bold transition-colors ${
                  item.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-600/90"
                    : "border border-white/10 bg-white/[0.06] text-white hover:border-blue-300/40 hover:bg-white/[0.1]"
                }`}
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
