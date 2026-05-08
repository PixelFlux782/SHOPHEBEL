const problems = [
  { icon: "💬", title: "Schlechte Kommunikation", desc: "Website wirkt veraltet und kommuniziert den Nutzen nicht klar." },
  { icon: "🔐", title: "Kein Vertrauen", desc: "Shop erzeugt wenig Vertrauen bei neuen Besuchern." },
  { icon: "📦", title: "Unklare Produkte", desc: "Produkte werden schlecht dargestellt oder nicht klar geführt." },
  { icon: "🔍", title: "SEO-Schwächen", desc: "SEO-Grundlagen fehlen und Sichtbarkeit bleibt liegen." },
  { icon: "📱", title: "Mobile Probleme", desc: "Mobile Nutzer springen früh ab." },
  { icon: "🛤️", title: "Keine klare Strecke", desc: "Keine klare Anfrage- oder Kaufstrecke." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="grid gap-8 rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Diese Hebel kosten dich Umsatz</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Typische digitale Bremsen</h2>
      </div>
      <div className="grid gap-3">
        {problems.map((problem) => (
          <div key={problem.title} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-sm transition-all hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="flex items-start gap-3">
              <span className="text-xl">{problem.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{problem.title}</h3>
                <p className="mt-1 leading-6 text-slate-400">{problem.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
