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
    "Shophebel verbindet kostenlosen Website-Scan, Premium Analyse, Conversion Optimierung, Website- und Shop-Umsetzung sowie laufende Betreuung.",
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
