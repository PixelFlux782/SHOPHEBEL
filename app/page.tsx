import { DashboardPreview } from "../components/DashboardPreview";
import { FinalCTA } from "../components/FinalCTA";
import { Hero } from "../components/Hero";
import { SiteFooter } from "../components/site-footer";
import {
  MethodologyTeaser,
  OfferOverview,
  ProblemSection,
  WhatShophebelDoes,
} from "../components/ShophebelIASections";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Hero />
      <ProblemSection />
      <WhatShophebelDoes />
      <DashboardPreview />
      <OfferOverview />
      <MethodologyTeaser />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
