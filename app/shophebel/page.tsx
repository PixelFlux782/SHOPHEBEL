import Link from "next/link";

import { FunnelSteps } from "@/components/FunnelSteps";
import { PricingSection } from "@/components/PricingSection";
import { ShophebelFAQ } from "@/components/ShophebelFAQ";
import { CtaSection } from "@/components/sections/cta-section";

export default function ShophebelPage() {
  return (
    <main className="shophebel-page flex flex-col">
      <section className="sh-section-dark px-6 py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="sh-badge border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              SEO / UX / Conversion / Vertrauen
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mach sichtbar, warum dein Shop nicht besser verkauft.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Shophebel analysiert SEO, Technik, Vertrauen und Conversion - und zeigt dir konkrete Hebel fuer mehr
              Wirkung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/analyse" className="sh-button-primary">
                Kostenlosen Schnellcheck starten
              </Link>
              <Link href="/shophebel/report" className="sh-button-secondary sh-button-ghost">
                Premium Report ansehen
              </Link>
            </div>
          </div>

          <div className="sh-glass-card p-4 sm:p-5">
            <div className="rounded-[1rem] border border-white/10 bg-slate-950/65 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Analyse Dashboard</p>
                  <p className="mt-1 text-sm text-slate-300">shop-beispiel.de</p>
                </div>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  Live Preview
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[160px_1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-cyan-300 bg-slate-950 shadow-[0_0_60px_-20px_rgba(34,211,238,0.9)]">
                    <div>
                      <p className="text-4xl font-bold text-white">68</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Score</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-slate-300">Gute Basis, aber klare Conversion-Bremsen.</p>
                </div>

                <div className="grid gap-3">
                  {[
                    ["SEO Struktur", "Meta-Daten uneinheitlich", "72"],
                    ["Vertrauen", "Trust-Signale zu spaet sichtbar", "61"],
                    ["Conversion", "CTA-Fuehrung nicht klar genug", "58"],
                  ].map(([label, finding, score]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{label}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-300">{finding}</p>
                        </div>
                        <span className="rounded-full bg-cyan-300 px-2.5 py-1 text-xs font-bold text-slate-950">
                          {score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm font-semibold text-cyan-100">Naechster Hebel</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Produktseiten klarer strukturieren und sichtbare Vertrauenselemente vor dem ersten Scroll setzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FunnelSteps />
      <PricingSection />
      <ShophebelFAQ />
      <CtaSection
        title="Bereit fuer eine klare Einschaetzung Ihrer Website?"
        description="Senden Sie uns Ihre URL und den passenden Anfrage-Typ. Wir speichern die Anfrage und melden uns mit dem naechsten sinnvollen Schritt."
      />
    </main>
  );
}
