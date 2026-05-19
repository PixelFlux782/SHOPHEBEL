import type { Metadata } from "next";
import Link from "next/link";

import { DashboardPreview } from "@/components/DashboardPreview";
import { SiteFooter } from "@/components/site-footer";
import {
  AnalysisSystemHero,
  FrameworkSection,
  ProcessSection,
  ResultSection,
  SimulatedAnalysisVisual,
} from "@/components/ShophebelIASections";
import { WEBSITE_ANALYSE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Analyse-System | Wie Shophebel Websites analysiert",
  description:
    "Wie Shophebel Vertrauen, Nutzerführung, Sichtbarkeit, KI-Sichtbarkeit und Conversion prüft und daraus priorisierte Website-Maßnahmen ableitet.",
};

export default function AnalysisSystemPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <AnalysisSystemHero />
      <FrameworkSection />
      <DashboardPreview />
      <SimulatedAnalysisVisual />
      <ProcessSection />
      <ResultSection />
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Starte mit deiner Website und sieh, welche Hebel zuerst zählen.
        </h2>
        <Link
          href={WEBSITE_ANALYSE_URL}
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-600/90"
        >
          Website analysieren
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
