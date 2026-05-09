import { Hero } from "../components/Hero";
import { DashboardPreview } from "../components/DashboardPreview";
import { Features } from "../components/Features";
import { Pricing } from "../components/Pricing";
import { Audience } from "../components/Audience";
import { FinalCTA } from "../components/FinalCTA";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Hero />
      <DashboardPreview />
      <Features />
      <Audience />
      <Pricing />
      <FinalCTA />
    </div>
  );
}