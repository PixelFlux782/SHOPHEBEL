import Link from "next/link";

import { ShophebelDashboardPreview } from "@/components/ShophebelDashboardPreview";
import { HeroSection } from "@/components/sections/hero-section";
import { ToolCard } from "@/components/tools/tool-card";
import { shophebelTools } from "@/lib/tools";

const platformPillars = [
  {
    title: "Geile UX statt Datenfriedhof",
    text: "Shophebel zeigt nicht nur Fehler, sondern macht sichtbar, warum Besucher abspringen, nicht vertrauen oder nicht kaufen.",
    points: ["Hero-Klarheit", "CTA-Führung", "Mobile Erlebnis"],
  },
  {
    title: "Visuelle Website-Analyse",
    text: "Wenn Screenshots verfügbar sind, wird die Analyse mit sichtbaren Bereichen, Hotspots und konkreten Layout-Hinweisen verbunden.",
    points: ["Screenshot-Check", "Above-the-fold", "Trust-Zonen"],
  },
  {
    title: "Maßnahmen statt Datenflut",
    text: "Jeder Check führt zu priorisierten Aufgaben: Was bringt wahrscheinlich zuerst Wirkung, was kann warten, was braucht Umsetzung?",
    points: ["Quick Wins", "Prioritäten", "To-dos"],
  },
  {
    title: "AI Visibility / AEO / GEO",
    text: "Shophebel prüft, ob Inhalte für KI-Antworten, semantische Suche, strukturierte Daten und lokale Sichtbarkeit vorbereitet sind.",
    points: ["Entitäten", "Schema.org", "FAQ-Potenzial"],
  },
];

const targetGroups = [
  {
    title: "Kleine Onlineshops",
    text: "Produktseiten, Trust, Ladezeit, Checkout-Hürden und Kaufargumente werden zusammen betrachtet.",
  },
  {
    title: "Lokale Betriebe",
    text: "Kontakt, Standortsignale, Google-Business-Grundlagen und Anfragewege werden sichtbar gemacht.",
  },
  {
    title: "Dienstleister",
    text: "Angebotsklarheit, Expertenwirkung, Lead-Formulare und Vertrauen stehen im Fokus.",
  },
];

const analysisModules = [
  {
    title: "Website-Audit",
    text: "SEO, Technik, Trust, UX, Design, Conversion und AI Visibility in einer verständlichen Diagnose.",
    badge: "Kostenlos",
  },
  {
    title: "Visual-Check",
    text: "Screenshot- und Layout-Signale helfen, reale Nutzerprobleme sichtbar zu machen.",
    badge: "Premium",
  },
  {
    title: "Report-Logik",
    text: "Aus Findings werden Quick Wins, kritische Punkte, Entwickler-To-dos und klare nächste Schritte.",
    badge: "Premium",
  },
  {
    title: "Service-Modus",
    text: "Wer keine Zeit für Umsetzung hat, kann Report, Auswertung und Umsetzung zusammen anfragen.",
    badge: "Service",
  },
];

const offers = [
  {
    name: "Free Audit",
    price: "0 EUR",
    text: "Kostenloser Website-Check mit Score, erster Diagnose, Quick Wins und kritischen Punkten.",
    cta: "Website prüfen",
    href: "/analyse",
  },
  {
    name: "Premium Report",
    price: "49 EUR",
    text: "Einfacher Report mit priorisierten Maßnahmen, Screenshot-Hinweisen, Textideen und technischen To-dos.",
    cta: "Report ansehen",
    href: "/shophebel/report",
  },
  {
    name: "Umsetzung & Service",
    price: "auf Anfrage",
    text: "Persönliche Auswertung und konkrete Umsetzung für Shops, Websites und lokale Anbieter.",
    cta: "Umsetzung anfragen",
    href: "/shophebel/optimierung",
  },
];

const honestStats = [
  { value: "6", label: "Analysebereiche" },
  { value: "40+", label: "Prüfpunkte" },
  { value: "3", label: "klare nächste Schritte" },
  { value: "0", label: "Logins nötig" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

function SectionIntro({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-slate-400">{text}</p>
    </div>
  );
}

function AudienceSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionIntro
          eyebrow="Für Shops & Betriebe"
          title="Keine Tool-Schlacht. Nur klare Antworten."
          text="Viele kleine Unternehmen brauchen keine weitere SEO-Tabelle. Sie brauchen eine klare Antwort: Was hält meine Website gerade davon ab, Vertrauen, Anfragen oder Umsatz zu erzeugen?"
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {targetGroups.map((item) => (
            <article key={item.title} className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:bg-white/[0.04] hover:border-white/20">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg">
                  <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformPillarsSection() {
  return (
    <section id="plattform" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionIntro
          eyebrow="Plattform statt Tool"
          title="Denkt wie ein Berater, nicht wie ein Skript."
          text="Shophebel verbindet Daten, visuelle Signale und persönliche Priorisierung. Das Ziel ist nicht mehr Output, sondern bessere Entscheidungen für die nächste Verbesserung."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {platformPillars.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f172a]/40 p-8 backdrop-blur-md transition-all hover:bg-[#0f172a]/60 hover:border-cyan-500/30">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[80px] transition-all group-hover:bg-cyan-500/20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-400">{item.text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.points.map((point) => (
                    <span key={point} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalysisModulesSection() {
  return (
    <section id="module" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Module"
          title="Audit, Visual Check & Reports."
          text="Die Module greifen ineinander und führen zu konkreten Maßnahmen für UX, Vertrauen, Sichtbarkeit und Abschlüsse."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {analysisModules.map((module) => (
            <article key={module.title} className="group flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-white/20">
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {module.badge}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{module.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{module.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyShophebelSection() {
  return (
    <section id="warum-shophebel" className="px-5 py-24 sm:px-8 lg:px-10 bg-[#030712]">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#030712] p-10 sm:p-16 shadow-2xl shadow-cyan-900/20 backdrop-blur-3xl">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        
        <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Warum Shophebel?"
              title="Ehrlich genug für ein junges Produkt."
              text="Wir behaupten nicht, riesige Keyword-Datenbanken zu haben. Die Plattform prüft nachvollziehbare Website-Signale und übersetzt sie in klare, umsetzbare Schritte."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {honestStats.map((stat) => (
              <article key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10">
                <p className="text-5xl font-extrabold tracking-tight text-white">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-400">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferLogicSection() {
  return (
    <section id="angebote" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Pricing"
          title="Erst Klarheit. Dann Report. Dann Umsetzung."
          text="Einfach starten: Kostenlos prüfen, bei Bedarf einen Premium-Report anfragen und auf Wunsch persönliche Umsetzung dazunehmen."
          align="center"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const isFeatured = index === 1;
            return (
              <article key={offer.name} className={`relative flex flex-col justify-between rounded-[2.5rem] border p-10 transition-all ${isFeatured ? 'border-cyan-500/50 bg-gradient-to-b from-[#081324] to-[#030712] shadow-[0_0_50px_rgba(34,211,238,0.15)] lg:-translate-y-4' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'}`}>
                {isFeatured && (
                  <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isFeatured ? 'text-cyan-400' : 'text-slate-500'}`}>{offer.name}</p>
                  <p className="mt-6 text-4xl font-extrabold text-white">{offer.price}</p>
                  <p className="mt-6 text-base leading-relaxed text-slate-400">{offer.text}</p>
                </div>
                <Link href={offer.href} className={`mt-10 flex h-14 items-center justify-center rounded-full text-sm font-semibold transition-all ${isFeatured ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'}`}>
                  {offer.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FreeToolsSection() {
  const featuredTools = shophebelTools.slice(0, 4);

  return (
    <section id="free-tools" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712]">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Einstieg"
            title="Kostenlose Tools."
            text="URL eingeben, Signal verstehen, nächsten Schritt erkennen. Ohne Login."
          />
          <Link href="/tools" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10">
            Alle Tools ansehen
            <ArrowIcon />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} dark={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712] overflow-hidden">
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Preview"
            title="Sofort als Arbeitsgrundlage."
            text="Statt Datenflut zeigt Shophebel Score, Diagnose, Quick Wins, kritische Punkte und visuelle Hinweise für Inhalte, UX und Technik."
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/shophebel/report" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-100 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Premium-Report ansehen
            </Link>
          </div>
        </div>
        <ShophebelDashboardPreview />
      </div>
    </section>
  );
}

function FinalConversionSection() {
  return (
    <section id="kontakt" className="relative px-5 py-24 sm:px-8 lg:px-10 bg-[#030712] pb-32">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[3rem] border border-cyan-500/20 bg-[linear-gradient(135deg,#08172c_0%,#030712_100%)] p-10 sm:p-20 shadow-[0_0_80px_-20px_rgba(34,211,238,0.2)]">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 mb-8">
            Nächster Schritt
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
            Lass dir zeigen, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">was zu tun ist.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl">
            Starte kostenlos. Wenn du mehr Tiefe brauchst, hol dir den Premium-Report. Wenn du Entlastung suchst, übernehmen wir die Umsetzung.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/analyse" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 transition-all hover:bg-cyan-300 hover:scale-[1.02]">
              Kostenlose Analyse starten
            </Link>
            <Link href="/shophebel/report" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/20">
              Report ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#030712]">
      <HeroSection />
      <AudienceSection />
      <PlatformPillarsSection />
      <AnalysisModulesSection />
      <WhyShophebelSection />
      <OfferLogicSection />
      <FreeToolsSection />
      <DashboardPreviewSection />
      <FinalConversionSection />
    </main>
  );
}
