import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preise | Shophebel",
  description: "Preise für Website-Scan, Premium Analyse und Umsetzung mit Shophebel.",
};

const packages = [
  {
    name: "Kostenloser Website-Scan",
    price: "0 EUR",
    fit: "Für Unternehmen, die schnell eine erste Einschätzung wollen.",
    description: "Du bekommst einen ersten Blick auf Vertrauen, Nutzerführung, Sichtbarkeit und Conversion.",
    result: "Ergebnis: erste Diagnose und ein klarer Einstieg.",
    cta: "Website analysieren",
    href: WEBSITE_ANALYSE_URL,
    highlight: false,
  },
  {
    name: "Premium Website-Analyse",
    price: "49 EUR",
    fit: "Für Unternehmen, die nicht raten wollen, warum ihre Website zu wenig Anfragen oder Umsatz erzeugt.",
    description: "Du bekommst einen priorisierten Report mit konkreten Hebeln, visuellen Hinweisen und nächsten Schritten.",
    result: "Ergebnis: Klarheit, was zuerst verbessert werden sollte.",
    cta: "Premium Analyse ansehen",
    href: "/shophebel/report",
    highlight: true,
  },
  {
    name: "Service & Umsetzung",
    price: "auf Anfrage",
    fit: "Für Unternehmen, die Analyse, Strategie und Umsetzung zusammen denken möchten.",
    description: "Wir übertragen die Erkenntnisse in Struktur, Texte, Nutzerführung, Vertrauen und technische Umsetzung.",
    result: "Ergebnis: eine hochwertigere Website mit klarerem Weg zur Anfrage oder zum Kauf.",
    cta: "Kontakt aufnehmen",
    href: "/shophebel/optimierung",
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
            Klarer Einstieg. Tiefe Analyse. Umsetzung, wenn du sie brauchst.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Shophebel verbindet Preise mit einem klaren nächsten Schritt: erst verstehen, warum die Website bremst, dann gezielt verbessern.
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
