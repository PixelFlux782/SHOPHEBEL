import Link from "next/link";
import { notFound } from "next/navigation";

import { ToolLeadForm } from "@/components/tools/tool-lead-form";
import { getToolBySlug, shophebelTools } from "@/lib/tools";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

export function generateStaticParams() {
  return shophebelTools.map((tool) => ({ slug: tool.slug }));
}

function WebsiteCheckTool() {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.24),transparent_30%),linear-gradient(135deg,#06111f_0%,#0f172a_54%,#082f3d_100%)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
              Kostenlos
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-normal sm:text-5xl">Kostenloser Website-Check</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Starte eine erste Analyse für Technik, SEO, Vertrauen und Conversion-Potenzial. Keine Zugangsdaten nötig.
            </p>
            <form action="/analyse" method="get" className="mt-8 rounded-2xl border border-white/14 bg-white/10 p-2 shadow-[0_24px_90px_-55px_rgba(34,211,238,0.85)] backdrop-blur-xl">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <input
                  name="url"
                  type="text"
                  inputMode="url"
                  placeholder="https://deine-domain.de"
                  className="min-h-14 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-base text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
                <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-bold text-slate-950 hover:bg-cyan-200">
                  Tool starten
                  <ArrowIcon />
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Analyseumfang</p>
            <div className="mt-5 grid gap-3">
              {["SEO-Basics", "Technik & Ladezeit", "Trust-Signale", "Conversion-Potenzial"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3">
                  <span className="font-semibold text-slate-200">{item}</span>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{[72, 64, 58, 49][index]}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ComingSoonTool({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-8">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_16%_10%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(245,158,11,0.13),transparent_28%),linear-gradient(135deg,#06111f_0%,#0f172a_54%,#082f3d_100%)] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-100">
              {tool.status}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-normal sm:text-5xl">{tool.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{tool.benefit}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tools" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/14 bg-white/8 px-5 text-sm font-bold text-white hover:bg-white/14">
                Alle Tools ansehen
              </Link>
              <Link href="/tools/website-check" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-bold text-slate-950 hover:bg-cyan-200">
                Website-Check starten
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <ToolLeadForm tool={tool} />
        </div>
      </section>
    </main>
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  if (slug === "website-check") {
    return <WebsiteCheckTool />;
  }

  return <ComingSoonTool slug={slug} />;
}
