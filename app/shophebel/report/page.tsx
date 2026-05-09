import Link from "next/link";

import { ShophebelFAQ } from "@/components/ShophebelFAQ";
import { CtaSection } from "@/components/sections/cta-section";

const checks = [
  "UX und erster Eindruck",
  "visuelle Website-Signale",
  "Trust und Kontaktklarheit",
  "Conversion und CTA",
  "Technik und Ladezeit",
  "AI-Sichtbarkeit / AEO",
] as const;

const sampleResults = [
  {
    title: "Priorisierte Schwachstellen",
    text: "Sie sehen, welche Punkte zuerst angegangen werden sollten und warum diese fuer Sichtbarkeit, Vertrauen oder Kaufbereitschaft relevant sind.",
  },
  {
    title: "Konkrete Handlungsempfehlungen",
    text: "Der Report bleibt nicht bei allgemeinen Hinweisen stehen, sondern beschreibt nachvollziehbare naechste Schritte.",
  },
  {
    title: "Schneller Ueberblick fuer Entscheidungen",
    text: "Scores und kurze Zusammenfassungen helfen Ihnen, die wichtigsten Baustellen ohne lange Voranalyse zu erkennen.",
  },
] as const;

const deliverables = [
  "strukturierte Auswertung mit Scores",
  "konkrete Befunde statt allgemeiner Checkliste",
  "Prioritaetenliste fuer die naechsten Schritte",
  "Versand per E-Mail als Report",
] as const;

const targetGroups = [
  "Shop-Betreiber, die wissen wollen, wo Besucher abspringen.",
  "Teams, die vor einer Optimierung eine neutrale Einschaetzung brauchen.",
  "Websites mit Traffic, aber zu wenig Vertrauen, Anfragen oder Kaeufen.",
] as const;

export default function PremiumReportPage() {
  return (
    <main className="shophebel-page flex flex-col bg-zinc-950 text-zinc-100">
      <section className="sh-section-dark relative overflow-hidden border-b border-white/5 bg-zinc-950 px-6 py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="sh-eyebrow sh-eyebrow-dark">Premium Analyse Report</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Der {"49 \u20ac"} Report, der aus Website-Signalen konkrete Massnahmen macht.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Du bekommst keine Datenflut, sondern eine einfache Auswertung zu UX, visueller Wirkung, Technik,
              Vertrauen, Conversion und AI-Sichtbarkeit.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#kontakt" className="sh-button-primary">
                Premium Report anfragen
              </Link>
              <Link href="#umfang" className="sh-button-secondary sh-button-ghost">
                Umfang ansehen
              </Link>
            </div>
          </div>

          <div className="sh-glass-card p-4 sm:p-5">
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/70 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Shophebel Report</p>
                  <h2 className="mt-2 text-xl font-bold text-white">Analyse-Auswertung</h2>
                </div>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  PDF Preview
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[150px_1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Gesamt</p>
                  <p className="mt-3 text-5xl font-bold text-white">68</p>
                  <p className="mt-1 text-xs text-cyan-200">von 100</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[68%] rounded-full bg-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-3">
          {[
                    ["UX", "Der erste Eindruck erklaert Angebot und naechsten Schritt nicht schnell genug."],
                    ["Trust", "Vertrauenssignale erscheinen zu spaet."],
                    ["AI Visibility", "FAQ- und Schema-Potenzial wird noch nicht genutzt."],
                  ].map(([label, text]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-3">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm font-semibold text-cyan-100">Prioritaetenliste</p>
                <ol className="mt-3 space-y-2 text-xs leading-5 text-slate-300">
                  <li>1. Hero und CTA klarer priorisieren</li>
                  <li>2. Trust-Elemente vor dem ersten Scroll sichtbar machen</li>
                  <li>3. FAQ- und Schema-Potenzial fuer AI-Sichtbarkeit nutzen</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="umfang" className="relative border-t border-white/5 bg-zinc-950 px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Was geprueft wird</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white">
          Die wichtigsten Hebel fuer Sichtbarkeit, Vertrauen und Kaufbereitschaft
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {checks.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:bg-white/[0.05] hover:border-blue-500/20">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 text-xs">
                ✓
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-black px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Was bekomme ich?</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white">
          Ein Report, der Entscheidungen leichter macht
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {deliverables.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
              <span className="text-blue-500 font-bold">✓</span>
              <p className="mt-4 text-sm font-semibold leading-6 text-zinc-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-zinc-950 px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Beispielhafte Ergebnisse</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white">
          Was Sie aus dem Report mitnehmen
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {sampleResults.map((result) => (
            <article key={result.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm shadow-2xl shadow-blue-900/5">
              <h3 className="text-xl font-semibold text-white">{result.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{result.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-black px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Fuer wen lohnt es sich?</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white">
          Fuer Shops, die Klarheit vor Umsetzung brauchen
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {targetGroups.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <p className="text-sm leading-7 text-zinc-300">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <ShophebelFAQ />
        <aside className="sh-section-dark p-6 lg:self-start">
          <p className="sh-eyebrow">Premium Report</p>
          <p className="mt-3 text-5xl font-bold text-white">{"49 \u20ac"}</p>
          <p className="mt-2 text-sm font-semibold text-cyan-200">Einmalige Analyseanfrage</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Ideal, wenn Sie eine fundierte Einschaetzung brauchen, bevor Zeit oder Budget in Optimierungen fliesst.
          </p>
          <Link href="#kontakt" className="sh-button-primary mt-6 w-full">
            Premium Report anfragen
          </Link>
          <p className="mt-3 text-center text-xs leading-5 text-slate-400">
            Noch keine automatische Zahlung. Wir melden uns nach deiner Anfrage mit dem naechsten Schritt.
          </p>
        </aside>
      </section>

      <CtaSection
        title="Premium Report anfragen"
        description="Senden Sie uns Ihre Website-URL und waehlen Sie im Formular den Premium Report aus. Wir melden uns mit dem naechsten Schritt."
        primaryCta="premiumReport"
      />
    </main>
  );
}
