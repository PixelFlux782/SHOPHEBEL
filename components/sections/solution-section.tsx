const blocks = [
  "Website-Analyse",
  "Shop-Analyse",
  "Lead-/Potenzial-Finder",
  "Konkrete Handlungsempfehlungen",
];

export function SolutionSection() {
  return (
    <section id="loesung" className="rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Lösung</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Shophebel findet digitale Schwächen bei Websites und Onlineshops - und zeigt konkrete Hebel für mehr Sichtbarkeit, Vertrauen und Umsatz.
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
        Shophebel verbindet Analyse und Umsetzung: Website- und Shop-Checks, Potenzial-Finder für neue Leads und klare Prioritäten für die nächsten Schritte.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {blocks.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/30 hover:bg-white/10">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
