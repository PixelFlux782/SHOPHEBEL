const services = [
  {
    title: "Shop Analyse",
    description: "Wir prüfen deinen Shop auf Struktur, Angebotskommunikation und die größten Conversion-Hebel.",
  },
  {
    title: "Conversion Optimierung",
    description: "Wir identifizieren Reibungspunkte im Funnel und machen Kaufentscheidungen für Besucher leichter.",
  },
  {
    title: "SEO Verbesserung",
    description: "Meta-Daten, Seitenstruktur und Suchintention werden auf Sichtbarkeit und Relevanz bewertet.",
  },
  {
    title: "UX Analyse",
    description: "Navigation, Orientierung und Vertrauenselemente werden aus Nutzersicht auf Klarheit getestet.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-8">
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-10 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
          Leistungen
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          Analyse, Optimierung und Klarheit für deinen Shop
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Shophebel fokussiert die Bereiche, die am stärksten auf Umsatz, Vertrauen und Sichtbarkeit einzahlen.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[1.75rem] border border-[var(--border)] bg-white/85 p-6 shadow-[0_24px_80px_-56px_rgba(29,27,24,0.3)]"
          >
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {service.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
