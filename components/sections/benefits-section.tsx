const points = [
  "Technische Erreichbarkeit und Ladewirkung",
  "Meta-Daten, H1, Onpage-SEO-Grundlagen",
  "Vertrauen, Rechtliches, klare Kontaktwege",
  "Produktdarstellung und kaufnahe Kommunikation",
  "Shop-Signale wie Warenkorb, Checkout, Produktlogik",
  "Priorisierte Empfehlungen für die nächsten Hebel",
];

export function BenefitsSection() {
  return (
    <section id="analysepunkte" className="rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Beispielhafte Analysepunkte</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Website- und Shop-Potenziale sichtbar machen</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {points.map((point) => (
          <article key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-400">
            {point}
          </article>
        ))}
      </div>
    </section>
  );
}
