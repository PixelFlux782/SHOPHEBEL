const audiences = [
  "Lokale Händler",
  "Feinkostläden",
  "Hofläden",
  "Manufakturen",
  "Onlineshops",
  "Dienstleister",
  "Kleine und mittlere Unternehmen",
];

export function AudienceSection() {
  return (
    <section id="zielgruppen" className="rounded-2xl border border-white/10 bg-[#0a0f1a] px-6 py-10 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Für wen ist Shophebel?</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/30 hover:bg-white/10">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
