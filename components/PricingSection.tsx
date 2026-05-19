import Link from "next/link";

import { FULL_ANALYSE_URL, PREMIUM_ANALYSE_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const pricingPackages = [
  {
    name: "Analyse-Teaser",
    price: "0 \u20ac",
    microcopy: "Für den ersten Blick",
    description: "Ein kompakter Teaser mit Score, Ersteinschätzung und den wichtigsten Hinweisen.",
    features: ["Gesamt-Score", "Ersteinschätzung", "1-2 Hinweise", "Teaser auf Detailanalyse"],
    cta: "Kostenlos starten",
    href: WEBSITE_ANALYSE_URL,
    highlighted: false,
  },
  {
    name: "Vollanalyse",
    price: "5 \u20ac",
    microcopy: "Bester Einstieg",
    description: "Die vollständige automatisierte Shophebel-Analyse mit Detailbewertungen und ersten Empfehlungen.",
    features: [
      "vollständige Analyse",
      "UX-/Trust-/SEO-/Conversion-Breakdown",
      "visuelle Hinweise",
      "erste Handlungsempfehlungen",
    ],
    cta: "Für 5 \u20ac freischalten",
    href: FULL_ANALYSE_URL,
    highlighted: true,
  },
  {
    name: "Premium Analyse",
    price: "49 \u20ac",
    microcopy: "Für strategische Prioritäten",
    description: "Der Premium Report für Unternehmen, die nicht raten, sondern priorisieren wollen.",
    features: [
      "strategische Priorisierung",
      "Visual Audit Notes",
      "Conversion-Hypothesen",
      "7-Tage-Plan und PDF Export",
    ],
    cta: "Premium Analyse starten",
    href: PREMIUM_ANALYSE_URL,
    highlighted: false,
  },
] as const;

export function PricingSection() {
  return (
    <section id="pricing" className="sh-section-dark px-5 py-12 sm:px-7 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="sh-eyebrow sh-eyebrow-dark">Preise</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Klare Pakete für Analyse und Umsetzung
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          Starten Sie kostenlos, schalten Sie die vollständige Analyse für 5 EUR frei oder nutzen Sie den strategischen Premium Report für 49 EUR.
        </p>
      </div>

      <div className="relative mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {pricingPackages.map((item) => (
          <article
            key={item.name}
            className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.35rem] border p-6 ${
              item.highlighted
                ? "border-cyan-300/70 bg-[linear-gradient(180deg,rgba(8,47,73,0.92),rgba(15,23,42,0.96))] shadow-[0_0_0_1px_rgba(103,232,249,0.18),0_34px_110px_-48px_rgba(34,211,238,0.9)] ring-2 ring-cyan-300/30 lg:-mt-5 lg:pb-10"
                : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.045))] shadow-[0_24px_90px_-62px_rgba(0,0,0,0.85)]"
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
            {item.highlighted ? (
              <span className="mb-5 inline-flex w-fit rounded-full border border-cyan-200/40 bg-cyan-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
                Bester Einstieg
              </span>
            ) : null}

            <h3 className="relative text-2xl font-semibold tracking-tight text-white">{item.name}</h3>
            <p className="relative mt-4 text-5xl font-bold tracking-tight text-white">{item.price}</p>
            <p className="relative mt-2 text-sm font-semibold text-cyan-200">{item.microcopy}</p>
            <p className="relative mt-4 text-sm leading-7 text-slate-300">{item.description}</p>

            <ul className="relative mt-6 flex-1 space-y-3 text-sm text-slate-200">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold ${
                      item.highlighted ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-cyan-200"
                    }`}
                  >
                    {"\u2713"}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={item.href}
              className={`relative mt-8 w-full ${
                item.highlighted
                  ? "sh-button-primary"
                  : "sh-button-secondary sh-button-ghost"
              }`}
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
