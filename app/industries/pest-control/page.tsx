import type { Metadata } from "next";
import PestHero from "@/components/sections/industries/pest-control/PestHero";
import PestStats from "@/components/sections/industries/pest-control/PestStats";
import PestProblem from "@/components/sections/industries/pest-control/PestProblem";
import PestCrewBento from "@/components/sections/industries/pest-control/PestCrewBento";
import PestRoiCalculator from "@/components/sections/industries/pest-control/PestRoiCalculator";
import PestFinalCta from "@/components/sections/industries/pest-control/PestFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Answering & Recurring Lead Automation for Pest Control | Minions AI",
  description:
    "Turn 2 AM pest panics into $2,500+ recurring subscriptions. Our AI crew answers on the 1st ring 24/7, converts one-off callers into quarterly plans, and syncs directly with FieldRoutes, PestPac, and GorillaDesk.",
};

export default function PestControlIndustryPage() {
  return (
    <>
      <PestHero />
      <PestStats />
      <PestProblem />
      <PestCrewBento />
      <PestRoiCalculator />
      <PestFinalCta />
    </>
  );
}
