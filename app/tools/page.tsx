import Link from "next/link";

import { ToolCard } from "@/components/tools/tool-card";
import { shophebelTools } from "@/lib/tools";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

export default function ToolsPage() {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_14%_10%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(135deg,#06111f_0%,#0f172a_54%,#082f3d_100%)] px-5 py-12 text-white shadow-[0_34px_120px_-70px_rgba(8,17,31,0.95)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
        <div className="relative max-w-4xl">
          <p className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
            Shophebel Tools
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-normal sm:text-5xl">
            Kostenlose Website-Tools für Sichtbarkeit, Vertrauen und Umsatz.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Starte mit schnellen Prüfungen, Generatoren und Checklisten. Einige Tools sind schon nutzbar, weitere Module werden als Plattform-Funktionen vorbereitet.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/tools/website-check" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-bold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200">
              Website-Check starten
              <ArrowIcon />
            </Link>
            <Link href="/shophebel/report" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/14 bg-white/8 px-5 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-white/14">
              Premium Analyse starten
            </Link>
          </div>
        </div>
      </section>

      <section className="sh-section px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sh-eyebrow">Tool-Bibliothek</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">Wähle deinen nächsten Check.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Jede Karte führt zu einem Tool oder einer Coming-Soon-Seite mit Frühzugang.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {shophebelTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}
