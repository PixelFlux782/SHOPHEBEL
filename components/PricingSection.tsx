import Link from "next/link";

const pricingPackages = [
  {
    name: "Kostenloser Schnellcheck",
    price: "0 \u20ac",
    microcopy: "Fuer den ersten Ueberblick",
    description: "Ein kompakter erster Blick auf Ihre Website, damit Sie Potenziale schnell einordnen koennen.",
    features: ["Erste Website-Einschaetzung", "Basis-Score", "3 Sofort-Hinweise", "ideal zum Einstieg"],
    cta: "Kostenlosen Schnellcheck starten",
    href: "/analyse",
    highlighted: false,
  },
  {
    name: "Premium Report",
    price: "49 \u20ac",
    microcopy: "Fuer klare Prioritaeten",
    description: "Der bezahlbare Analysebericht fuer klare Prioritaeten statt vager Bauchgefuehle.",
    features: [
      "ausfuehrlicher Analysebericht",
      "SEO-, Technik-, UX- und Vertrauens-Check",
      "konkrete Prioritaetenliste",
      "Versand per E-Mail",
    ],
    cta: "Premium Report anfragen",
    href: "/shophebel/report#kontakt",
    highlighted: true,
  },
  {
    name: "Umsetzungspaket",
    price: "ab 999 \u20ac",
    microcopy: "Fuer konkrete Verbesserung",
    description: "Fuer Unternehmen, die nicht nur wissen wollen, was zu tun ist, sondern es erledigt haben moechten.",
    features: [
      "persoenliche Auswertung",
      "technische und inhaltliche Optimierung",
      "Produktseiten-/Landingpage-Verbesserung",
      "optional laufende Betreuung",
    ],
    cta: "Optimierungsgespr\u00e4ch anfragen",
    href: "/shophebel/optimierung#kontakt",
    highlighted: false,
  },
] as const;

export function PricingSection() {
  return (
    <section id="pricing" className="sh-section-dark px-5 py-12 sm:px-7 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <p className="sh-eyebrow sh-eyebrow-dark">Preise</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Klare Pakete fuer Analyse und Umsetzung
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
          Starten Sie mit einer ersten Einschaetzung, kaufen Sie einen strukturierten Report oder lassen Sie die
          wichtigsten Verbesserungen direkt umsetzen.
        </p>
      </div>

      <div className="relative mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {pricingPackages.map((item) => (
          <article
            key={item.name}
            className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.35rem] border p-6 ${
              item.highlighted
                ? "border-cyan-300/70 bg-[linear-gradient(180deg,rgba(8,47,73,0.92),rgba(15,23,42,0.96))] shadow-[0_0_0_1px_rgba(103,232,249,0.18),0_34px_110px_-48px_rgba(34,211,238,0.9)] ring-2 ring-cyan-300/30 lg:-mt-5 lg:pb-10"
                : "border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.045))] shadow-[0_24px_90px_-62px_rgba(0,0,0,0.85)]"
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
            {item.highlighted ? (
              <span className="mb-5 inline-flex w-fit rounded-full border border-cyan-200/40 bg-cyan-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100">
                Beliebtester Einstieg
              </span>
            ) : null}

            <h3 className="relative text-2xl font-semibold tracking-tight text-white">{item.name}</h3>
            <p className="relative mt-4 text-5xl font-bold tracking-tight text-white">{item.price}</p>
            <p className="relative mt-2 text-sm font-semibold text-cyan-200">{item.microcopy}</p>
            <p className="relative mt-4 text-sm leading-7 text-slate-300">{item.description}</p>

            <ul className="relative mt-6 flex-1 space-y-3 text-sm text-slate-200">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold ${
                      item.highlighted ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-cyan-200"
                    }`}
                  >
                    {"\u2713"}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={item.href}
              className={`relative mt-8 w-full ${
                item.highlighted
                  ? "sh-button-primary"
                  : "sh-button-secondary sh-button-ghost"
              }`}
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
