const scoreCards = [
  { label: "SEO", value: 81, color: "from-emerald-400 to-cyan-400" },
  { label: "Technik", value: 64, color: "from-sky-400 to-blue-500" },
  { label: "Trust", value: 58, color: "from-cyan-400 to-violet-400" },
  { label: "Conversion", value: 69, color: "from-violet-400 to-fuchsia-400" },
  { label: "KI-Sichtbarkeit", value: 42, color: "from-lime-400 to-emerald-400" },
];

const levers = [
  { label: "Produktseiten optimieren", value: 88 },
  { label: "Trust-Elemente ergänzen", value: 74 },
  { label: "Ladezeit mobil verbessern", value: 63 },
  { label: "Strukturierte Daten einbauen", value: 52 },
];

const audits = [
  { label: "Meta Title vorhanden", status: "ok" },
  { label: "H1 fehlt", status: "critical" },
  { label: "Bilder ohne Alt-Text", status: "warning" },
  { label: "Kein FAQ-Schema", status: "warning" },
  { label: "Kontakt gut sichtbar", status: "ok" },
];

const auditStyles = {
  ok: "bg-emerald-400 shadow-emerald-400/50",
  warning: "bg-amber-400 shadow-amber-400/50",
  critical: "bg-rose-500 shadow-rose-500/50",
} as const;

function TrendChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Sichtbarkeitspotenzial</p>
          <p className="mt-1 text-sm font-medium text-slate-300">Prognose nach Quick Wins</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
          +38%
        </span>
      </div>
      <svg aria-hidden="true" viewBox="0 0 420 150" className="mt-4 h-36 w-full overflow-visible">
        <defs>
          <linearGradient id="shophebel-chart-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="55%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="shophebel-chart-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[24, 62, 100, 138].map((y) => (
          <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        <path
          d="M0 126 C58 116 70 94 112 98 C160 103 172 61 220 66 C272 72 286 33 332 38 C368 42 386 20 420 18 L420 150 L0 150 Z"
          fill="url(#shophebel-chart-area)"
        />
        <path
          d="M0 126 C58 116 70 94 112 98 C160 103 172 61 220 66 C272 72 286 33 332 38 C368 42 386 20 420 18"
          fill="none"
          stroke="url(#shophebel-chart-line)"
          strokeLinecap="round"
          strokeWidth="4"
          className="[stroke-dasharray:650] [stroke-dashoffset:650] animate-[shophebel-draw_1.7s_ease-out_forwards]"
        />
        {[112, 220, 332, 420].map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy={[98, 66, 38, 18][index]}
            r="5"
            fill="#030712"
            stroke="#22d3ee"
            strokeWidth="3"
            className="drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          />
        ))}
      </svg>
    </div>
  );
}

export function ShophebelDashboardPreview() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080d1a] p-5 text-white shadow-2xl shadow-cyan-900/20 backdrop-blur-2xl sm:p-6 lg:p-8">
      <style>{`
        @keyframes shophebel-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes shophebel-soft-pulse {
          0%, 100% { opacity: .8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />

      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Shophebel Cockpit</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Website-Audit Vorschau</h3>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            Live Preview
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Gesamt-Score</p>
            <div className="relative mx-auto mt-6 grid h-48 w-48 place-items-center rounded-full bg-[conic-gradient(#22d3ee_0deg_259deg,rgba(255,255,255,0.05)_259deg_360deg)] shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-2 rounded-full border border-white/5" />
              <div className="grid h-36 w-36 place-items-center rounded-full bg-[#080d1a]">
                <div>
                  <p className="text-5xl font-extrabold text-white">72</p>
                  <p className="text-sm font-medium text-slate-500">/100</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium text-cyan-300">Starkes Fundament, klare Hebel offen</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {scoreCards.map((score) => (
              <div key={score.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-300">{score.label}</p>
                  <p className="text-2xl font-bold text-white">{score.value}</p>
                </div>
                <div className="mt-5 h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${score.color}`} style={{ width: `${score.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <TrendChart />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Wichtigste Hebel</p>
            <div className="mt-6 space-y-5">
              {levers.map((lever, index) => (
                <div key={lever.label}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-slate-200">{index + 1}. {lever.label}</span>
                    <span className="font-semibold text-slate-400">{lever.value}%</span>
                  </div>
                  <div className="mt-2.5 h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      style={{ width: `${lever.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Audit-Liste</p>
            <span className="text-xs font-medium text-slate-500">Ampelstatus</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {audits.map((audit) => (
              <div key={audit.label} className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                <span className={`h-2.5 w-2.5 rounded-full shadow-[0_0_12px] ${auditStyles[audit.status as keyof typeof auditStyles]}`} />
                <span className="text-sm font-medium leading-tight text-slate-200">{audit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
