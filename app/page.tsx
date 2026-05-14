import { Hero } from "../components/Hero";
import { DashboardPreview } from "../components/DashboardPreview";
import { Features } from "../components/Features";
import { Pricing } from "../components/Pricing";
import { Audience } from "../components/Audience";
import { FinalCTA } from "../components/FinalCTA";
import { CtaSection } from "../components/sections/cta-section";
import { SiteFooter } from "../components/site-footer";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Hero />
      <DashboardPreview />
      <Features />
      <Audience />
      <Pricing />
      <FinalCTA />
      <CtaSection
        title="Projekt oder Optimierung anfragen"
        description="Senden Sie uns Ihre Website-URL und wählen Sie aus, ob es um Analyse, Conversion Optimierung, Premium Report oder Umsetzung geht."
        primaryCta="optimization"
      />
      <SiteFooter />
    </div>
  );
}
