import Link from "next/link";
import type { Metadata } from "next";

import { WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preise | Shophebel",
  description: "Preise für Website-Scan, Premium Report und Umsetzung mit Shophebel.",
};

const packages = [
  {
    name: "Free Audit",
    price: "0 EUR",
    description: "Kostenloser Website-Check mit Score, kurzer Diagnose, Quick Wins und kritischen Punkten.",
    cta: "Website prüfen",
    href: WEBSITE_ANALYSE_URL,
    highlight: false,
  },
  {
    name: "Premium Report",
    price: "49 EUR",
    description: "Einfacher Report mit priorisierten Maßnahmen, visuellen Hinweisen, Textideen und Entwickler-To-dos.",
    cta: "Report anfragen",
    href: "/shophebel/report",
    highlight: true,
  },
  {
    name: "Service & Umsetzung",
    price: "auf Anfrage",
    description: "Persönliche Auswertung und Umsetzung für Shops, Websites, Dienstleister und lokale Anbieter.",
    cta: "Service anfragen",
    href: "/shophebel/optimierung",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="flex flex-col gap-8">
      <section className="sh-section-dark px-6 py-12 lg:px-10">
        <p className="sh-eyebrow sh-eyebrow-dark">Preise</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-5xl">
          Klarer Einstieg. Einfacher Report. Service, wenn du Umsetzung brauchst.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          Shophebel ist nicht als schweres Enterprise-Tool gedacht, sondern als praktischer Weg von Diagnose zu Verbesserung.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className={`flex min-h-[320px] flex-col justify-between rounded-[1.75rem] border p-6 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.35)] ${
              item.highlight
                ? "border-cyan-300/45 bg-slate-950 text-white"
                : "border-slate-200 bg-white/90 text-slate-950"
            }`}
          >
            <div>
              <p className={`text-sm font-bold uppercase tracking-[0.18em] ${item.highlight ? "text-cyan-200" : "text-cyan-700"}`}>
                {item.name}
              </p>
              <p className="mt-4 text-4xl font-bold">{item.price}</p>
              <p className={`mt-4 text-sm leading-7 ${item.highlight ? "text-slate-300" : "text-slate-600"}`}>
                {item.description}
              </p>
            </div>
            <Link
              href={item.href}
              className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-bold ${
                item.highlight
                  ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                  : "bg-slate-950 text-white hover:bg-slate-800"
              }`}
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
