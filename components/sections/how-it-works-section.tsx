const steps = [
  "Website oder Branche eingeben",
  "Schwächen erkennen",
  "Potenzial bewerten",
  "Maßnahmen ableiten",
  "Optimierung anfragen",
];

export function HowItWorksSection() {
  return (
    <section id="ablauf" className="rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">So funktioniert es</p>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-cyan-500/30 hover:bg-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">0{index + 1}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-300">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
