import Link from "next/link";
import type { ShophebelTool, ToolStatus } from "@/lib/tools";

const statusClasses: Record<ToolStatus, string> = {
  Kostenlos: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  "Bald verfügbar": "border-amber-400/20 bg-amber-400/10 text-amber-300",
  Premium: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h10M4 19h7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 15l3 3m0 0l-3 3m3-3h-6" />
    </svg>
  );
}

export function ToolCard({ tool }: { tool: ShophebelTool; dark?: boolean }) {
  // Always use the dark premium look to ensure consistency across the site
  return (
    <article className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] shadow-[0_0_30px_rgba(0,0,0,0.2)]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg">
            <ToolIcon />
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[tool.status]}`}>
            {tool.status}
          </span>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {tool.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{tool.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{tool.benefit}</p>
      </div>
      <Link
        href={tool.href}
        className={`mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all ${
          tool.available
            ? "bg-white/10 text-white hover:bg-white/20"
            : "border border-white/10 bg-transparent text-slate-500 pointer-events-none"
        }`}
      >
        {tool.available ? "Tool starten" : "Demnächst"}
        {tool.available && <ArrowIcon />}
      </Link>
    </article>
  );
}
