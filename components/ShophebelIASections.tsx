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
    title: "Besucher verstehen in den ersten Sekunden nicht, warum sie bleiben sollen.",
    consequence: "Die Seite verliert Aufmerksamkeit, bevor Vertrauen entstehen kann.",
    icon: Eye,
  },
  {
    title: "Die Seite sieht gut aus, führt aber nicht klar zur Anfrage.",
    consequence: "Interessierte Nutzer wissen nicht, welcher Schritt als Nächstes sinnvoll ist.",
    icon: Target,
  },
  {
    title: "Vertrauen entsteht zu spät oder gar nicht.",
    consequence: "Belege, Sicherheit und Kontaktklarheit kommen zu spät im Entscheidungsprozess.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Nutzer verlieren Orientierung.",
    consequence: "Auf kleinen Screens werden Angebot, CTA und nächste Schritte zu schwer erfassbar.",
    icon: Smartphone,
  },
  {
    title: "Google und KI-Systeme erkennen den Wert der Seite nicht eindeutig.",
    consequence: "Themen, Expertise und Nutzen werden schlechter eingeordnet.",
    icon: Search,
  },
];

export const offers = [
  {
    title: "Kostenloser Website-Scan",
    description: "Erste Einschätzung, wo Vertrauen, Nutzerführung und Sichtbarkeit gerade bremsen.",
    href: WEBSITE_ANALYSE_URL,
    cta: "Website analysieren",
  },
  {
    title: "Premium Website-Analyse",
    description: "Zeigt, wo Vertrauen, Nutzerführung und Sichtbarkeit bremsen - und welche Schritte zuerst sinnvoll sind.",
    href: "/shophebel/report",
    cta: "Analyse starten",
  },
  {
    title: "Conversion Optimierung",
    description: "Für Seiten mit Traffic, aber zu wenig Anfragen, Käufen oder Vertrauen.",
    href: CONVERSION_OPTIMIERUNG_URL,
    cta: "Optimierung anfragen",
  },
  {
    title: "Website- & Shop-Umsetzung",
    description: "Hochwertige Umsetzung auf Basis der Analyse: klarer Aufbau, bessere Führung, stärkere Wirkung.",
    href: "/shophebel/optimierung",
    cta: "Umsetzung anfragen",
  },
];

const offerFitGuides = [
  {
    need: "Ich möchte erstmal wissen, wo meine Website steht.",
    recommendation: "Kostenloser Website-Scan oder Premium Analyse",
  },
  {
    need: "Ich weiß, dass meine Website besser verkaufen müsste.",
    recommendation: "Conversion Optimierung",
  },
  {
    need: "Ich brauche eine neue Website oder einen besseren Shop.",
    recommendation: "Website- & Shop-Umsetzung",
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

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {problemCards.map((item) => (
          <article key={item.title} className={cardBase}>
            <item.icon className="h-6 w-6 text-blue-300" strokeWidth={1.6} />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{item.consequence}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhatShophebelDoes() {
  const steps = [
    { title: "Website analysieren", icon: MousePointer2 },
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
            Shophebel zeigt, warum Besucher nicht anfragen, wo Vertrauen verloren geht und welche Optimierung zuerst sinnvoll ist.
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

export function OfferOverview({
  showAllLink = true,
  showFitGuide = false,
}: {
  showAllLink?: boolean;
  showFitGuide?: boolean;
}) {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Angebote</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Der passende nächste Schritt für deine Website.
          </h2>
        </div>
        {showAllLink ? (
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
            Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
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

      {showFitGuide ? (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl md:p-8">
          <h3 className="text-2xl font-bold tracking-tight text-white">Welches Angebot passt zu mir?</h3>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {offerFitGuides.map((item) => (
              <article key={item.need} className="rounded-2xl border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-sm font-semibold leading-6 text-white">{item.need}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-200">{item.recommendation}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
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
              Die Shophebel-Methodik
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Shophebel ersetzt keine Erfahrung. Es macht sie sichtbar, strukturierbar und priorisierbar.
            </p>
          </div>
          <Link
            href="/analyse-system"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-600/90"
          >
            So funktioniert Shophebel <ArrowRight className="h-4 w-4" />
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
    description: "Ob Besucher früh genug Sicherheit, Belege und klare Kontaktwege finden.",
    why: "Ohne Vertrauen wird selbst ein gutes Angebot vertagt.",
    checks: ["Beweise und Referenzen", "Kontaktklarheit", "Sicherheits- und Seriositätssignale"],
    benefit: "Mehr Sicherheit vor Anfrage oder Kauf.",
  },
  {
    title: "Conversion",
    icon: Target,
    description: "Ob Angebot, CTA und Entscheidungsweg verständlich führen.",
    why: "Wenn der nächste Schritt unklar ist, bleiben gute Besucher passiv.",
    checks: ["CTA-Hierarchie", "Angebotsklarheit", "Reibung im Funnel"],
    benefit: "Weniger Absprünge und klarere nächste Schritte.",
  },
  {
    title: "Sichtbarkeit",
    icon: Search,
    description: "Analysiert, ob Suchmaschinen und KI-Systeme Wert, Themen und Expertise erkennen.",
    why: "Nur klar erkennbare Relevanz kann sauber gefunden und empfohlen werden.",
    checks: ["SEO-Grundlagen", "Strukturierte Inhalte", "KI-Sichtbarkeit"],
    benefit: "Bessere Einordnung in Suche und KI-Antworten.",
  },
  {
    title: "Wirkung",
    icon: Sparkles,
    description: "Ob Sprache, Gestaltung und Priorisierung die richtige Botschaft tragen.",
    why: "Gute Gestaltung verkauft nicht, wenn der Nutzen nicht spürbar wird.",
    checks: ["Hero-Klarheit", "Nutzenargumente", "visuelle Gewichtung"],
    benefit: "Besucher verstehen schneller, warum das Angebot relevant ist.",
  },
  {
    title: "Wachstum",
    icon: TrendingUp,
    description: "Welche Maßnahmen zuerst sinnvoll sind und welchen Hebel sie haben.",
    why: "Optimierung braucht Reihenfolge, sonst wird sie teuer und beliebig.",
    checks: ["Priorisierung", "Aufwand und Wirkung", "Maßnahmenplan"],
    benefit: "Ein klarer Fahrplan statt verstreuter Einzelmeinungen.",
  },
];

const analysisFrameworkPillars = [
  {
    title: "Vertrauen",
    icon: ShieldCheck,
    description: "Positionierung, Glaubwürdigkeit, Klarheit und Kontaktpunkte.",
    why: "Nutzer entscheiden sehr schnell, ob sie einer Seite vertrauen.",
    checks: ["klare Aussagen", "Belege", "Kontaktwege"],
    benefit: "Mehr Sicherheit und weniger Absprünge.",
  },
  {
    title: "Conversion",
    icon: Target,
    description: "Angebot, CTA-Hierarchie, Nutzerführung und Reibung bis zur Anfrage.",
    why: "Wenn der nächste Schritt unklar ist, bleiben gute Besucher passiv.",
    checks: ["CTAs", "Formulare", "Entscheidungswege"],
    benefit: "Mehr Anfragen, Verkäufe oder qualifizierte nächste Schritte.",
  },
  {
    title: "Sichtbarkeit",
    icon: Search,
    description: "SEO-Grundlagen, Seitenstruktur, Themenklarheit und KI-Verständnis.",
    why: "Google und KI-Systeme müssen klar erkennen, wofür die Seite relevant ist.",
    checks: ["Seitentitel", "Struktur", "Suchintention"],
    benefit: "Bessere Einordnung in Suche und KI-Antworten.",
  },
  {
    title: "Wirkung",
    icon: Sparkles,
    description: "Sprache, Gestaltung, Reihenfolge und Gewichtung der Inhalte.",
    why: "Eine Seite wirkt nur, wenn Nutzen und Angebot sofort verständlich werden.",
    checks: ["Hero", "Nutzenargumente", "visuelle Gewichtung"],
    benefit: "Besucher verstehen schneller, warum sie bleiben sollten.",
  },
  {
    title: "Wachstum",
    icon: TrendingUp,
    description: "Welche Maßnahmen zuerst sinnvoll sind und welchen Hebel sie haben.",
    why: "Optimierung braucht Reihenfolge, sonst wird sie teuer und beliebig.",
    checks: ["Prioritäten", "Aufwand", "Wirkung"],
    benefit: "Ein klarer Fahrplan statt einer langen Fehlerliste.",
  },
];

export function FrameworkSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Framework</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Fünf Säulen für eine Website, die verstanden wird und besser führt.
        </h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-5">
        {analysisFrameworkPillars.map((pillar) => (
          <article key={pillar.title} className={`${cardBase} flex flex-col`}>
            <pillar.icon className="h-6 w-6 text-cyan-300" strokeWidth={1.6} />
            <h3 className="mt-5 text-xl font-bold text-white">{pillar.title}</h3>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-200/70">Was wird geprüft?</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{pillar.description}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-200/70">Warum ist das wichtig?</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{pillar.why}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              {pillar.checks.map((check) => (
                <li key={check} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-200/70">Was bringt es?</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-white">{pillar.benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const xrayMarkers = [
  {
    label: "Trust Gap",
    text: "Besucher verstehen nicht sofort, warum sie bleiben oder anfragen sollten.",
    position: "left-[8%] top-[22%]",
    line: "left-[18%] top-[30%] h-px w-[24%]",
  },
  {
    label: "CTA-Hierarchie unklar",
    text: "Der wichtigste nächste Schritt konkurriert mit zu vielen Nebenwegen.",
    position: "right-[7%] top-[18%]",
    line: "right-[22%] top-[31%] h-px w-[22%]",
  },
  {
    label: "Mobile Friction",
    text: "Auf kleinen Screens wird Orientierung langsamer und der Weg zur Anfrage schwerer.",
    position: "left-[6%] bottom-[18%]",
    line: "left-[20%] bottom-[31%] h-px w-[23%]",
  },
  {
    label: "Angebotsklarheit fehlt",
    text: "Nutzen, Leistung und Zielgruppe sind nicht schnell genug greifbar.",
    position: "right-[6%] bottom-[24%]",
    line: "right-[23%] bottom-[36%] h-px w-[21%]",
  },
  {
    label: "AI Visibility schwach",
    text: "Themen und Expertise sind für Suche und KI nicht eindeutig genug strukturiert.",
    position: "left-1/2 top-[49%] -translate-x-1/2",
    line: "left-1/2 top-[47%] h-12 w-px",
  },
];

export function WebsiteXraySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Website-Xray</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Der Website-Xray: Was Besucher oft spüren, aber Unternehmer selten sehen.
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#030712] p-4 shadow-[0_28px_120px_-70px_rgba(37,99,235,0.85)] backdrop-blur-xl md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
          <div className="relative min-h-[640px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 md:min-h-[580px] md:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
            <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300/70" />
                <span className="ml-3 h-5 flex-1 rounded-full border border-white/10 bg-black/30" />
              </div>
              <div className="space-y-5 p-5">
                <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-3">
                    <span className="block h-3 w-24 rounded-full bg-blue-300/35" />
                    <span className="block h-8 w-full rounded-lg bg-white/16" />
                    <span className="block h-8 w-4/5 rounded-lg bg-white/10" />
                    <span className="block h-3 w-11/12 rounded-full bg-white/12" />
                    <span className="block h-3 w-2/3 rounded-full bg-white/10" />
                    <div className="flex gap-3 pt-2">
                      <span className="h-10 w-36 rounded-xl bg-blue-500/80 shadow-[0_0_35px_rgba(37,99,235,0.35)]" />
                      <span className="h-10 w-28 rounded-xl border border-white/12 bg-white/[0.04]" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <span className="block h-28 rounded-xl bg-white/[0.06]" />
                    <span className="mt-4 block h-3 w-3/4 rounded-full bg-white/12" />
                    <span className="mt-3 block h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  <span className="h-24 rounded-xl border border-white/10 bg-white/[0.035]" />
                  <span className="h-24 rounded-xl border border-blue-300/20 bg-blue-500/[0.08]" />
                  <span className="h-24 rounded-xl border border-white/10 bg-white/[0.035]" />
                </div>
                <div className="grid gap-3 md:grid-cols-[0.65fr_1fr]">
                  <span className="h-40 rounded-xl border border-white/10 bg-white/[0.035]" />
                  <span className="h-40 rounded-xl border border-white/10 bg-white/[0.025]" />
                </div>
              </div>
            </div>

            {xrayMarkers.map((marker, index) => (
              <div key={marker.label}>
                <span className={`absolute ${marker.line} hidden bg-blue-300/40 md:block`} />
                <article className={`absolute ${marker.position} w-[min(13rem,42vw)] rounded-2xl border border-blue-300/20 bg-[#07111f]/75 p-3 shadow-[0_18px_60px_-35px_rgba(37,99,235,0.9)] backdrop-blur-xl md:w-56 md:p-4`}>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/15 font-mono text-[10px] text-blue-100">
                      {index + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white">{marker.label}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-zinc-300">{marker.text}</p>
                </article>
              </div>
            ))}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200/80">Analyse statt Bauchgefühl</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">Shophebel sucht nicht nur Fehler. Es zeigt, wo Umsatzbremsen zuerst entstehen.</h3>
            <div className="mt-8 space-y-3">
              {["Vertrauen verlieren", "Nutzerführung brechen", "Angebot unklar lassen", "mobile Reibung erzeugen", "für Google und KI unscharf bleiben"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
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
            Die Ansicht arbeitet mit generischen Signalen. Sie zeigt, wie Shophebel Muster erkennt, priorisiert und verständlich macht.
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
  const steps = ["Website erfassen", "Trust, UX, SEO und KI-Sichtbarkeit prüfen", "Prioritäten ableiten", "Maßnahmenplan erstellen"];

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

export function PriorityMatrixSection() {
  const quadrants = [
    {
      title: "Sofort-Hebel",
      meta: "Hohe Wirkung, geringer Aufwand",
      description: "Kleine Änderungen, die schnell Klarheit, Vertrauen oder CTA-Stärke verbessern.",
      highlight: true,
    },
    {
      title: "Strategische Projekte",
      meta: "Hohe Wirkung, höherer Aufwand",
      description: "Größere Arbeiten an Struktur, Angebot, Seitenaufbau oder technischer Basis.",
      highlight: false,
    },
    {
      title: "Später optimieren",
      meta: "Geringere Wirkung, geringer Aufwand",
      description: "Saubere Feinarbeit, aber nicht der erste Hebel für bessere Ergebnisse.",
      highlight: false,
    },
    {
      title: "Nicht zuerst",
      meta: "Geringere Wirkung, hoher Aufwand",
      description: "Aufgaben, die Energie binden, bevor die wichtigsten Bremsen gelöst sind.",
      highlight: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Prioritäten</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Nicht alles ist gleich wichtig.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-300">
          Shophebel priorisiert Maßnahmen danach, was zuerst Klarheit, Vertrauen und Conversion verbessert.
        </p>
      </div>

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:p-8">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_24%_24%,rgba(37,99,235,0.18),transparent_34%)]" />
        <div className="relative grid gap-4 lg:grid-cols-2">
          {quadrants.map((quadrant, index) => (
            <article
              key={quadrant.title}
              className={`min-h-48 rounded-2xl border p-6 ${
                quadrant.highlight
                  ? "border-blue-300/30 bg-blue-500/[0.09] shadow-[0_20px_80px_-55px_rgba(37,99,235,0.9)]"
                  : "border-white/10 bg-zinc-950/45"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200/80">{quadrant.meta}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{quadrant.title}</h3>
                </div>
                <span className="font-mono text-sm text-zinc-500">0{index + 1}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-300">{quadrant.description}</p>
            </article>
          ))}
        </div>
        <div className="relative mt-5 grid gap-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 md:grid-cols-2">
          <span>Aufwand niedrig</span>
          <span className="md:text-right">Aufwand hoch</span>
          <span>Wirkung hoch</span>
          <span className="md:text-right">Wirkung niedrig</span>
        </div>
      </div>
    </section>
  );
}

export function ResultSection() {
  const results = [
    "Wo Vertrauen verloren geht",
    "Welche Seiten Nutzer nicht führen",
    "Welche Inhalte Google und KI nicht klar verstehen",
    "Welche CTAs zu schwach sind",
    "Welche Maßnahmen zuerst sinnvoll sind",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Ergebnis</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Was am Ende sichtbar wird.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Das Ziel ist nicht mehr Information - sondern die richtige Reihenfolge.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {results.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
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
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          Nicht als Bauchgefühl, sondern als strukturierte Bewertung mit klaren Prioritäten.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href={WEBSITE_ANALYSE_URL}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-600/90"
          >
            Website analysieren
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white hover:border-blue-300/40 hover:bg-white/[0.08]"
          >
            Leistungen ansehen
          </Link>
        </div>
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
      included: "Eine erste Einschätzung zu Vertrauen, Nutzerführung, Sichtbarkeit und Conversion.",
      audience: "Für Unternehmen, die schnell verstehen wollen, wo ihre Website steht.",
      result: "Ein klarer Einstieg mit den auffälligsten Bremsen und dem nächsten sinnvollen Schritt.",
      href: WEBSITE_ANALYSE_URL,
      cta: "Website analysieren",
    },
    {
      title: "Premium Website-Analyse",
      included: "Vertiefte Prüfung, visuelle Hinweise, priorisierte Empfehlungen und Maßnahmenplan.",
      audience: "Für Unternehmen, die nicht aus Bauchgefühl optimieren wollen.",
      result: "Klarheit darüber, wo Vertrauen, Nutzerführung und Sichtbarkeit bremsen - und welche Schritte zuerst sinnvoll sind.",
      href: "/shophebel/report",
      cta: "Analyse starten",
    },
    {
      title: "Conversion Optimierung",
      included: "Analyse von Angebot, CTA, Vertrauen, Mobile Flow und Entscheidungswegen.",
      audience: "Für Seiten mit Besuchern, aber zu wenig Anfragen, Verkäufen oder Abschlüssen.",
      result: "Weniger Reibung und klarere Wege zur Anfrage oder zum Kauf.",
      href: CONVERSION_OPTIMIERUNG_URL,
      cta: "Optimierung anfragen",
    },
    {
      title: "Website- und Shop-Umsetzung",
      included: "Struktur, Texte, UX-Verbesserungen, technische Umsetzung und klare Prioritäten.",
      audience: "Für Unternehmen, die Analyse und Umsetzung nicht trennen möchten.",
      result: "Eine Website, die verständlicher führt und stärker auf Anfrage oder Kauf ausgerichtet ist.",
      href: "/shophebel/optimierung",
      cta: "Umsetzung anfragen",
    },
    {
      title: "Laufende Betreuung",
      included: "Regelmäßige Prüfung, neue Prioritäten, Begleitung bei Content, UX und Sichtbarkeit.",
      audience: "Für Teams, die ihre Website kontinuierlich verbessern möchten.",
      result: "Kontinuierliche Verbesserung statt Einmalprojekt.",
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
              <p><span className="block font-bold text-white">Was ist es?</span>{service.included}</p>
              <p><span className="block font-bold text-white">Für wen?</span>{service.audience}</p>
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
              Die Analyse ist der Einstieg, damit Optimierung nicht aus Bauchgefühl entsteht. Der Report sortiert die Hebel. Die Umsetzung bringt sie auf die Seite.
            </p>
          </div>
          <Lightbulb className="hidden h-16 w-16 text-blue-200/40 md:block" strokeWidth={1.2} />
        </div>
      </div>
    </section>
  );
}
