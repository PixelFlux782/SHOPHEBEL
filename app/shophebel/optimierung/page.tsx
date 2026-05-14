import Link from "next/link";

import { ShophebelFAQ } from "@/components/ShophebelFAQ";
import { CtaSection } from "@/components/sections/cta-section";

const targetGroups = [
  "Shops, die bereits Besucher haben, aber zu wenig Anfragen oder Käufe erzielen.",
  "Websites, bei denen Inhalte, Vertrauen oder Struktur nicht klar genug wirken.",
  "Unternehmen, die konkrete Verbesserungen umsetzen lassen möchten statt nur eine Analyse zu lesen.",
] as const;

const improvements = [
  {
    title: "bessere Produkttexte",
    text: "Nutzen, Einwände und Kaufargumente werden klarer herausgearbeitet.",
  },
  {
    title: "bessere Startseite",
    text: "Besucher verstehen schneller, was Sie anbieten und warum es relevant ist.",
  },
  {
    title: "SEO-Struktur",
    text: "Seitenstruktur, Titles und Inhalte werden sauberer auf Suchintentionen ausgerichtet.",
  },
  {
    title: "Trust-Elemente",
    text: "Vertrauen wird früher sichtbar: Belege, Sicherheit, Kontakt und klare Signale.",
  },
  {
    title: "Ladezeit / technische Basis",
    text: "Technische Bremsen werden geordnet und dort verbessert, wo es sinnvoll ist.",
  },
  {
    title: "Conversion-Optimierung",
    text: "CTAs, Seitenführung und Entscheidungswege werden klarer priorisiert.",
  },
] as const;

const outcomes = [
  "klarere Botschaften auf wichtigen Seiten",
  "bessere Orientierung für Besucher",
  "sichtbarere Vertrauenselemente",
  "nachvollziehbare Prioritäten für weitere Schritte",
] as const;

const process = [
  {
    step: "01",
    title: "Analyse",
    text: "Wir prüfen Website oder Shop und erfassen die wichtigsten Reibungspunkte.",
  },
  {
    step: "02",
    title: "Priorisierung",
    text: "Die Maßnahmen werden nach Wirkung, Aufwand und technischer Machbarkeit sortiert.",
  },
  {
    step: "03",
    title: "Umsetzung",
    text: "Wir verbessern Inhalte, Struktur, Vertrauen und technische Grundlagen im vereinbarten Umfang.",
  },
  {
    step: "04",
    title: "Kontrolle",
    text: "Nach der Umsetzung prüfen wir die wichtigsten Punkte erneut und halten die Ergebnisse fest.",
  },
] as const;

export default function OptimizationPage() {
  return (
    <main className="shophebel-page flex flex-col">
      <section className="sh-section-dark px-6 py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <p className="sh-eyebrow sh-eyebrow-dark">Umsetzungspaket</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Wir analysieren nicht nur - wir verbessern deinen Shop konkret.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Nicht nur analysieren, sondern sinnvoll verbessern: Wir setzen priorisierte Maßnahmen um, damit Ihre
              Website klarer, vertrauenswürdiger und besser nutzbar wird.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#kontakt"
                className="sh-button-primary"
              >
                {"Optimierungsgespr\u00e4ch anfragen"}
              </Link>
              <Link
                href="#ablauf"
                className="sh-button-secondary sh-button-ghost"
              >
                Ablauf ansehen
              </Link>
            </div>
          </div>

          <aside className="sh-glass-card p-6">
            <p className="sh-eyebrow sh-eyebrow-dark">Startpreis</p>
            <p className="mt-3 text-5xl font-bold">{"ab 999 \u20ac"}</p>
            <p className="mt-2 text-sm font-semibold text-cyan-200">Projektumfang nach Analyse und Priorisierung</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Der genaue Umfang richtet sich nach Ausgangslage, Prioritäten und gewünschter Umsetzungstiefe.
            </p>
            <Link
              href="#kontakt"
              className="sh-button-primary mt-6 w-full"
            >
              {"Optimierungsgespr\u00e4ch anfragen"}
            </Link>
          </aside>
        </div>
      </section>

      <section className="sh-section px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Typische Baustellen</p>
        <h2 className="sh-heading mt-3 max-w-3xl text-3xl">
          Typische Baustellen, die wir beheben
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {improvements.map((item) => (
            <div key={item.title} className="sh-card p-5">
              <span className="sh-check">
                {"\u2713"}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sh-section-dark px-6 py-12 lg:px-10">
        <p className="sh-eyebrow sh-eyebrow-dark">Nach der Optimierung</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white">
          Was sich nach der Optimierung verändert
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {outcomes.map((item) => (
            <article key={item} className="sh-glass-card p-5">
              <span className="text-2xl font-bold text-cyan-200">{"\u2192"}</span>
              <p className="mt-4 text-sm font-semibold leading-6 text-white">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ablauf" className="sh-section px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Ablauf</p>
        <h2 className="sh-heading mt-3 max-w-3xl text-3xl">
          Ablauf in 4 Phasen
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="sh-card p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                {item.step}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sh-section px-6 py-12 lg:px-10">
        <p className="sh-eyebrow">Geeignet für</p>
        <h2 className="sh-heading mt-3 max-w-3xl text-3xl">
          Für welche Shops geeignet
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {targetGroups.map((item) => (
            <article key={item} className="sh-card p-6">
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sh-section px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
          <div>
            <p className="sh-eyebrow">Preis</p>
            <h2 className="sh-heading mt-3 text-3xl">{"Umsetzungspaket ab 999 \u20ac"}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
              Vor Projektstart klären wir, welche Maßnahmen sinnvoll sind und welcher Umfang realistisch ist. So
              bleibt die Umsetzung nachvollziehbar und passend zur Ausgangslage.
            </p>
          </div>
          <Link
            href="#kontakt"
            className="sh-button-primary w-full"
          >
            {"Optimierungsgespr\u00e4ch anfragen"}
          </Link>
        </div>
      </section>

      <section className="sh-section-dark px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="sh-eyebrow sh-eyebrow-dark">Vertrauen</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Keine Garantieversprechen. Saubere Umsetzung mit klaren Prioritäten.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-300">
            Wir versprechen keine pauschalen Umsatzsprünge. Stattdessen arbeiten wir strukturiert an den Punkten, die
            Wirkung, Vertrauen und Nutzerführung nachvollziehbar verbessern können.
          </p>
        </div>
      </section>

      <ShophebelFAQ />

      <CtaSection
        title={"Optimierungsgespr\u00e4ch anfragen"}
        description="Senden Sie uns Ihre Website-URL und wählen Sie im Formular das Umsetzungspaket aus. Wir melden uns mit einer realistischen Einschätzung zum nächsten Schritt."
        primaryCta="optimization"
      />
    </main>
  );
}
