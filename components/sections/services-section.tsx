const services = [
  "Website-Check",
  "Shop-Check",
  "SEO-Grundlagenanalyse",
  "Conversion-Check",
  "Produktseiten-Optimierung",
  "Relaunch- und Shop-Aufbau",
  "Laufende Betreuung",
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Leistungen</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Von der Analyse zur konkreten Optimierung</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <article key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/30 hover:bg-white/10">
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
