const funnelSteps = [
  {
    number: "01",
    symbol: "URL",
    title: "URL eingeben",
    text: "Du gibst deine Shop- oder Website-Adresse ein.",
  },
  {
    number: "02",
    symbol: "SCAN",
    title: "Analyse starten",
    text: "Shophebel prüft Technik, Struktur, Inhalte und Vertrauen.",
  },
  {
    number: "03",
    symbol: "!",
    title: "Chancen erkennen",
    text: "Du bekommst konkrete Hinweise, wo Umsatz und Sichtbarkeit verloren gehen.",
  },
  {
    number: "04",
    symbol: "OK",
    title: "Optimierung umsetzen",
    text: "Auf Wunsch setzen wir die wichtigsten Verbesserungen direkt für dich um.",
  },
] as const;

export function FunnelSteps() {
  return (
    <section className="sh-section-dark px-5 py-12 sm:px-7 lg:px-10 lg:py-14">
      <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="max-w-3xl">
        <p className="sh-eyebrow sh-eyebrow-dark">Ablauf</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Von der Analyse zur konkreten Verbesserung
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Der Prozess bleibt bewusst einfach: erst verstehen, dann priorisieren, danach gezielt verbessern.
        </p>
      </div>

      <div className="relative mt-10 lg:mt-12">
        <div className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/25 to-transparent lg:hidden" />
        <div className="grid gap-5 lg:grid-cols-4 lg:gap-4">
          {funnelSteps.map((step, index) => (
          <article key={step.number} className="relative pl-14 lg:pl-0">
            <div className="absolute left-0 top-0 z-10 lg:static lg:mx-auto lg:flex lg:justify-center">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-300 text-sm font-bold text-slate-950 shadow-[0_0_50px_-18px_rgba(34,211,238,0.9)]">
                {step.number}
                {index < funnelSteps.length - 1 ? (
                  <span className="absolute left-full top-1/2 hidden h-px w-[calc(100vw/4-4rem)] bg-gradient-to-r from-cyan-300/50 to-transparent lg:block" />
                ) : null}
              </div>
            </div>

            <div className="sh-glass-card p-5 lg:mt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[0.68rem] font-bold tracking-[0.08em] text-cyan-100">
                {step.symbol}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
            </div>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}
