import Link from "next/link";

const aiNeeds = [
  {
    title: "klare Entitäten",
    text: "Marke, Angebot, Personen, Standorte und Leistungen müssen eindeutig benennbar sein.",
  },
  {
    title: "strukturierte Daten",
    text: "Schema.org hilft Maschinen, Inhalte und Zusammenhänge besser einzuordnen.",
  },
  {
    title: "FAQ-Inhalte",
    text: "Gute Fragen und präzise Antworten machen Inhalte leichter zitier- und zusammenfassbar.",
  },
  {
    title: "Expertenseiten",
    text: "Autorität entsteht durch nachvollziehbare Expertise, klare Profile und belastbare Inhalte.",
  },
  {
    title: "saubere Produktinformationen",
    text: "Produkte brauchen eindeutige Namen, Eigenschaften, Nutzen, Preise und Verfügbarkeitssignale.",
  },
  {
    title: "vertrauenswürdige Quellen",
    text: "Rechtliches, Kontakt, Bewertungen und externe Signale stärken die Einordnung.",
  },
];

const checkItems = [
  "Semantische Struktur",
  "Schema.org",
  "FAQ-Potenzial",
  "Marken-/Unternehmenssignale",
  "Content-Lücken",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

export default function KiSichtbarkeitPage() {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_6%,rgba(139,92,246,0.22),transparent_28%),linear-gradient(135deg,#06111f_0%,#0f172a_50%,#111827_100%)] px-5 py-14 text-white shadow-[0_34px_120px_-70px_rgba(8,17,31,0.95)] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
              KI-Suche & AI Visibility
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
              Wird deine Marke in KI-Antworten sichtbar?
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              KI-Systeme brauchen klare, strukturierte und vertrauenswürdige Inhalte. Shophebel prüft, wie gut deine Website auf semantische Suche und AI-gestützte Antworten vorbereitet ist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tools/ki-sichtbarkeit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 hover:bg-cyan-200">
                KI-Sichtbarkeit prüfen
                <ArrowIcon />
              </Link>
              <Link href="/tools" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/14 bg-white/8 px-5 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-white/14">
                Tools ansehen
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Keine Garantie auf Erwähnungen in einzelnen KI-Systemen. Der Check bewertet die technische und inhaltliche Vorbereitung.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 shadow-[0_28px_100px_-60px_rgba(34,211,238,0.75)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">AI Readiness Preview</p>
            <div className="mt-5 grid gap-3">
              {checkItems.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                    <span className="text-sm font-bold text-cyan-100">{[68, 42, 74, 56, 61][index]}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300"
                      style={{ width: `${[68, 42, 74, 56, 61][index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sh-section px-5 py-10 sm:px-8 lg:px-10">
        <p className="sh-eyebrow">Warum klassische SEO nicht mehr reicht</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Sichtbarkeit entsteht nicht mehr nur auf Suchergebnisseiten.
          </h2>
          <p className="text-base leading-8 text-slate-600">
            Menschen suchen zunehmend in Antwortsystemen, Assistenten und KI-gestützten Suchoberflächen. Dafür reicht es nicht, nur Keywords auf Seiten zu platzieren. Inhalte müssen eindeutig, strukturiert, vertrauenswürdig und maschinenlesbar sein, damit Systeme sie besser verstehen und einordnen können.
          </p>
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-slate-200 bg-white px-5 py-10 shadow-[0_24px_90px_-64px_rgba(15,23,42,0.45)] sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="sh-eyebrow">Was KI-Systeme brauchen</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            Inhalte, die eindeutig verstanden werden können.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiNeeds.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white hover:shadow-[0_24px_80px_-64px_rgba(8,145,178,0.7)]">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-100 text-sm font-bold text-cyan-800">
                AI
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sh-section-dark px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="sh-eyebrow sh-eyebrow-dark">Shophebel KI-Sichtbarkeits-Check</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-white sm:text-4xl">
              Prüfe die Grundlagen, bevor der Markt lauter wird.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Der Check bewertet, ob deine Website die wichtigsten Signale für AI Visibility liefert: semantische Struktur, Schema.org, FAQ-Potenzial, Marken- und Unternehmenssignale sowie Content-Lücken.
            </p>
            <Link href="/tools/ki-sichtbarkeit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-bold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200">
              KI-Sichtbarkeit prüfen
              <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {checkItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-base font-bold text-white">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Wird als Signal geprüft und mit konkretem Optimierungspotenzial eingeordnet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
