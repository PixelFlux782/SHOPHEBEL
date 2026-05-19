import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import {
  AnalysisSystemHero,
  FrameworkSection,
  PriorityMatrixSection,
  ResultSection,
  WebsiteXraySection,
} from "@/components/ShophebelIASections";
import { FULL_ANALYSE_URL, WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Analyse-System | Wie Shophebel Websites analysiert",
  description:
    "Wie Shophebel Vertrauen, Nutzerführung, Sichtbarkeit, KI-Sichtbarkeit und Conversion prüft und daraus priorisierte Website-Maßnahmen ableitet.",
};

export default function AnalysisSystemPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <AnalysisSystemHero />
      <WebsiteXraySection />
      <FrameworkSection />
      <PriorityMatrixSection />
      <ResultSection />
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300/80">Nächster Schritt</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Starte kostenlos und schalte Tiefe frei, wenn du sie brauchst.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
          Der Teaser zeigt erste Signale. Die Vollanalyse macht alle Probleme sichtbar. Die Premium Analyse priorisiert die nächsten Schritte.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={WEBSITE_ANALYSE_URL}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-600/90"
          >
            Kostenlos analysieren
          </Link>
          <Link
            href={FULL_ANALYSE_URL}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-bold text-white hover:border-blue-300/40 hover:bg-white/[0.08]"
          >
            Vollanalyse freischalten
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
