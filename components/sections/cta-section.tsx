import Link from "next/link";

import { ContactRequestForm } from "@/components/sections/contact-request-form";
import { ANALYSE_APP_URL } from "@/lib/constants";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryCta?: "quickCheck" | "premiumReport" | "optimization";
}

const entryCards = [
  {
    title: "Kostenloser Schnellcheck",
    text: "Starte mit einer schnellen Analyse und erkenne die wichtigsten Hebel fuer deine Website.",
    cta: "Website kostenlos pruefen",
    href: ANALYSE_APP_URL,
    tone: "border-cyan-300/30 bg-cyan-300/10",
  },
  {
    title: "Premium Report",
    text: "Wenn du mehr Tiefe brauchst: Screenshots, Prioritaeten und konkrete naechste Schritte.",
    cta: "Premium Report starten",
    href: ANALYSE_APP_URL,
    tone: "border-blue-300/25 bg-blue-300/10",
  },
  {
    title: "Umsetzung anfragen",
    text: "Du moechtest nicht nur wissen, was zu tun ist, sondern es sauber umgesetzt bekommen.",
    cta: "Projekt anfragen",
    href: "#kontaktformular",
    tone: "border-white/14 bg-white/8",
  },
] as const;

export function CtaSection(_props: CtaSectionProps) {
  return (
    <section id="kontakt" className="sh-section-dark px-6 py-12 lg:px-10 lg:py-14">
      <div className="grid gap-4 lg:grid-cols-3">
        {entryCards.map((card) => (
          <article
            key={card.title}
            className={`flex min-h-full flex-col rounded-[1.4rem] border p-5 shadow-[0_24px_90px_-62px_rgba(0,0,0,0.9)] backdrop-blur-xl ${card.tone}`}
          >
            <h3 className="text-xl font-bold tracking-tight text-white">{card.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{card.text}</p>
            <Link href={card.href} className="sh-button-primary mt-6 w-full">
              {card.cta}
            </Link>
          </article>
        ))}
      </div>

      <div id="kontaktformular" className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <p className="sh-eyebrow sh-eyebrow-dark">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Projekt oder Optimierung anfragen
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200">
            Du moechtest deine Website verbessern, einen Shop aufbauen oder die Analyse-Ergebnisse umsetzen lassen?
            Schreib kurz, worum es geht - ich melde mich mit dem naechsten sinnvollen Schritt.
          </p>
        </div>

        <ContactRequestForm />
      </div>
    </section>
  );
}
