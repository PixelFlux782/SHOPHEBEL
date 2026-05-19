import type { Metadata } from "next";

import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/site-footer";
import {
  OfferOverview,
  ServiceDetailCards,
  ServicesHero,
  ServicesToolNote,
} from "@/components/ShophebelIASections";

export const metadata: Metadata = {
  title: "Leistungen | Analyse, Optimierung und Umsetzung",
  description:
    "Shophebel verbindet Analyse-Teaser, Vollanalyse für 5 EUR, Premium Analyse, Conversion Optimierung und Website- oder Shop-Umsetzung.",
};

export default function ServicesPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <ServicesHero />
      <OfferOverview showAllLink={false} showFitGuide />
      <ServiceDetailCards />
      <ServicesToolNote />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
