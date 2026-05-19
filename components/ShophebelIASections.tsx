import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  Layers3,
  Lightbulb,
  MousePointer2,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

import { CONVERSION_OPTIMIERUNG_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

const cardBase =
  "rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_70px_-50px_rgba(37,99,235,0.55)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.055]";

export const problemCards = [
  {
    title: "Besucher verstehen das Angebot nicht schnell genug",
    icon: Eye,
  },
  {
    title: "Vertrauen entsteht zu spät oder gar nicht",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Nutzer werden schlecht geführt",
    icon: Smartphone,
  },
  {
    title: "Google und KI-Systeme erkennen den Wert der Seite nicht klar",
    icon: Search,
  },
];

export const offers = [
  {
    title: "Kostenloser Website-Scan",
    description: "Schneller Einstieg mit Score, ersten Schwachstellen und klaren Quick Wins.",
    href: WEBSITE_ANALYSE_URL,
    cta: "Website analysieren",
  },
  {
    title: "Premium Analyse / Report",
    description: "Vertiefter Report mit visuellen Befunden, Prioritäten und konkretem Maßnahmenplan.",
    href: "/shophebel/report",
    cta: "Report ansehen",
  },
  {
    title: "Conversion Optimierung",
    description: "Für Seiten mit Traffic, aber zu wenig Anfragen, Käufen oder Vertrauen.",
    href: CONVERSION_OPTIMIERUNG_URL,
    cta: "Potenziale prüfen",
  },
  {
    title: "Website- & Shop-Umsetzung",
    description: "Analyse, Strategie und Umsetzung für klare Seiten, bessere Führung und stärkere Wirkung.",
    href: "/shophebel/optimierung",
    cta: "Umsetzung anfragen",
  },
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Das Problem</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Viele Websites sehen gut aus - aber verlieren Vertrauen, Anfragen und Umsatz.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problemCards.map((item) => (
          <article key={item.title} className={cardBase}>
            <item.icon className="h-6 w-6 text-blue-300" strokeWidth={1.6} />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhatShophebelDoes() {
  const steps = [
    { title: "Analyse starten", icon: MousePointer2 },
    { title: "Schwachstellen sichtbar machen", icon: BarChart3 },
    { title: "Optimierung umsetzen", icon: CheckCircle2 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Was macht Shophebel?</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Analyse und Optimierung für Websites und Onlineshops.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Shophebel ist ein Analyse- und Optimierungssystem für Websites und Onlineshops. Es zeigt, wo Nutzer abspringen, wo Vertrauen fehlt und welche Verbesserungen den größten Hebel haben.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className={cardBase}>
              <div className="flex items-center justify-between gap-4">
                <step.icon className="h-6 w-6 text-cyan-300" strokeWidth={1.6} />
                <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-base font-semibold text-white">{step.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferOverview() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Angebote</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Der passende nächste Schritt für deine Website.
          </h2>
        </div>
        <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
          Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {offers.map((offer) => (
          <article key={offer.title} className={`${cardBase} flex min-h-[18rem] flex-col`}>
            <h3 className="text-xl font-bold tracking-tight text-white">{offer.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">{offer.description}</p>
            <Link href={offer.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-200 hover:text-white">
              {offer.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MethodologyTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050912]/90 p-8 shadow-[0_28px_110px_-70px_rgba(37,99,235,0.7)] backdrop-blur-xl md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/80">Methodik</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Das Shophebel Intelligence Framework
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Wir bewerten Websites nicht nur technisch, sondern aus Sicht von Nutzervertrauen, Conversion, Sichtbarkeit und Wirkung.
            </p>
          </div>
          <Link
            href="/analyse-system"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-600/90"
          >
            Methodik ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export const frameworkPillars = [
  {
    title: "Vertrauen",
    icon: ShieldCheck,
    description: "Prüft, ob Besucher früh genug Sicherheit, Belege und klare Kontaktwege finden.",
    checks: ["Beweise und Referenzen", "Kontaktklarheit", "Sicherheits- und Seriositätssignale"],
    benefit: "Mehr Sicherheit vor Anfrage oder Kauf.",
  },
  {
    title: "Conversion",
    icon: Target,
    description: "Bewertet, ob Angebot, CTA und Entscheidungsweg verständlich führen.",
    checks: ["CTA-Hierarchie", "Angebotsklarheit", "Reibung im Funnel"],
    benefit: "Weniger Absprünge und klarere nächste Schritte.",
  },
  {
    title: "Sichtbarkeit",
    icon: Search,
    description: "Analysiert, ob Suchmaschinen und KI-Systeme Wert, Themen und Expertise erkennen.",
    checks: ["SEO-Grundlagen", "Strukturierte Inhalte", "AI Visibility"],
    benefit: "Bessere Einordnung in Suche und KI-Antworten.",
  },
  {
    title: "Wirkung",
    icon: Sparkles,
    description: "Prüft, ob Sprache, Gestaltung und Priorisierung die richtige Botschaft tragen.",
    checks: ["Hero-Klarheit", "Nutzenargumente", "visuelle Gewichtung"],
    benefit: "Besucher verstehen schneller, warum das Angebot relevant ist.",
  },
  {
    title: "Wachstum",
    icon: TrendingUp,
    description: "Leitet ab, welche Maßnahmen zuerst sinnvoll sind und welchen Hebel sie haben.",
    checks: ["Priorisierung", "Aufwand und Wirkung", "Maßnahmenplan"],
    benefit: "Ein klarer Fahrplan statt verstreuter Einzelmeinungen.",
  },
];

export function FrameworkSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Framework</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Fünf Säulen für eine Website, die verstanden wird.
        </h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-5">
        {frameworkPillars.map((pillar) => (
          <article key={pillar.title} className={`${cardBase} flex flex-col`}>
            <pillar.icon className="h-6 w-6 text-cyan-300" strokeWidth={1.6} />
            <h3 className="mt-5 text-xl font-bold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{pillar.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              {pillar.checks.map((check) => (
                <li key={check} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-white">{pillar.benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SimulatedAnalysisVisual() {
  const findings = [
    "Trust Gap erkannt",
    "CTA-Hierarchie unklar",
    "Mobile Friction",
    "AI Visibility schwach",
    "Angebotsklarheit fehlt",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Analyse-Visualisierung</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Aus unsichtbarer Reibung werden konkrete Befunde.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Die Ansicht arbeitet mit generischen Beispielen. Sie zeigt, wie Shophebel Muster erkennt, priorisiert und verständlich macht.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#050912]/90 p-5 shadow-[0_28px_110px_-75px_rgba(37,99,235,0.75)] backdrop-blur-xl">
          <div className="grid gap-3">
            {findings.map((finding, index) => (
              <div key={finding} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 font-mono text-xs text-blue-200">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-white">{finding}</span>
                </div>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-xs text-zinc-400">Signal</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = ["Website erfassen", "UX, Trust, SEO und AI Visibility prüfen", "Prioritäten ableiten", "Maßnahmenplan erstellen"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Prozess</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">So wird aus Analyse ein klarer Plan.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step} className={cardBase}>
            <span className="font-mono text-sm text-blue-300">0{index + 1}</span>
            <h3 className="mt-6 text-lg font-bold text-white">{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResultSection() {
  const results = ["Score", "Befunde", "visuelle Hinweise", "priorisierte Empfehlungen", "nächster sinnvoller Schritt"];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Ergebnis</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Was du aus der Analyse mitnimmst.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {results.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AnalysisSystemHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-40">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Shophebel Analyse-System</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Wie Shophebel Websites analysiert.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Wir machen unsichtbare Umsatzbremsen sichtbar - von Vertrauen und Nutzerführung bis SEO, KI-Sichtbarkeit und Conversion.
        </p>
      </div>
    </section>
  );
}

export function ServicesHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-40">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Leistungen</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Analyse, Optimierung und Umsetzung aus einer Hand.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Shophebel ist nicht nur ein Tool. Wir verbinden Analyse, Strategie und Umsetzung, damit aus Befunden echte Verbesserungen werden.
        </p>
      </div>
    </section>
  );
}

export function ServiceDetailCards() {
  const serviceDetails = [
    {
      title: "Kostenloser Website-Scan",
      included: "Score, erste Schwachstellen, Quick Wins und kritische Signale.",
      audience: "Für Unternehmen, die schnell verstehen wollen, wo ihre Website steht.",
      result: "Ein klarer erster Überblick mit nächstem Schritt.",
      href: WEBSITE_ANALYSE_URL,
      cta: "Website analysieren",
    },
    {
      title: "Premium Website-Analyse",
      included: "Vertiefte Prüfung, visuelle Hinweise, priorisierte Empfehlungen und Maßnahmenplan.",
      audience: "Für Websites, Shops und Dienstleister mit konkretem Optimierungsbedarf.",
      result: "Ein Report, der zeigt, was zuerst verbessert werden sollte.",
      href: "/shophebel/report",
      cta: "Premium Report ansehen",
    },
    {
      title: "Conversion Optimierung",
      included: "Analyse von Angebot, CTA, Vertrauen, Mobile Flow und Entscheidungswegen.",
      audience: "Für Seiten mit Besuchern, aber zu wenig Anfragen, Verkäufen oder Abschlüssen.",
      result: "Weniger Reibung und klarere Wege zur Anfrage oder zum Kauf.",
      href: CONVERSION_OPTIMIERUNG_URL,
      cta: "Conversion prüfen",
    },
    {
      title: "Website- und Shop-Umsetzung",
      included: "Struktur, Texte, UX-Verbesserungen, technische Umsetzung und klare Prioritäten.",
      audience: "Für Unternehmen, die Analyse und Umsetzung nicht trennen möchten.",
      result: "Eine Website, die verständlicher führt und stärker verkauft.",
      href: "/shophebel/optimierung",
      cta: "Umsetzung anfragen",
    },
    {
      title: "Laufende Betreuung",
      included: "Regelmäßige Prüfung, neue Prioritäten, Begleitung bei Content, UX und Sichtbarkeit.",
      audience: "Für Teams, die ihre Website kontinuierlich verbessern möchten.",
      result: "Ein belastbarer Optimierungsrhythmus statt sporadischer Einzelmaßnahmen.",
      href: "/#kontakt",
      cta: "Betreuung anfragen",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-5">
        {serviceDetails.map((service) => (
          <article key={service.title} className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:grid-cols-[0.75fr_1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">{service.title}</h2>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-zinc-300 md:grid-cols-3">
              <p><span className="block font-bold text-white">Enthalten</span>{service.included}</p>
              <p><span className="block font-bold text-white">Geeignet für</span>{service.audience}</p>
              <p><span className="block font-bold text-white">Ergebnis</span>{service.result}</p>
            </div>
            <Link href={service.href} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white hover:border-blue-300/40 hover:bg-white/[0.1]">
              {service.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesToolNote() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-3xl border border-blue-300/20 bg-blue-500/[0.08] p-8 backdrop-blur-xl md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <Layers3 className="h-7 w-7 text-cyan-300" strokeWidth={1.6} />
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">Analyse, Strategie und Umsetzung gehören zusammen.</h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              Der Scan zeigt die Hebel. Der Report sortiert sie. Die Umsetzung bringt sie auf die Seite.
            </p>
          </div>
          <Lightbulb className="hidden h-16 w-16 text-blue-200/40 md:block" strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}
