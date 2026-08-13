import type { Metadata } from "next";
import PlumbingHero from "@/components/sections/industries/plumbing/PlumbingHero";
import PlumbingStats from "@/components/sections/industries/plumbing/PlumbingStats";
import PlumbingProblem from "@/components/sections/industries/plumbing/PlumbingProblem";
import PlumbingCrewBento from "@/components/sections/industries/plumbing/PlumbingCrewBento";
import PlumbingRoiCalculator from "@/components/sections/industries/plumbing/PlumbingRoiCalculator";
import PlumbingFinalCta from "@/components/sections/industries/plumbing/PlumbingFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Emergency Dispatch & Lead Automation for Plumbers | Minions AI",
  description:
    "Burst pipes don't wait for business hours. Our AI crew answers every call 24/7, guides emergency water shutoff valves, texts back missed leads in < 5 seconds, and books jobs directly into ServiceTitan.",
};

export default function PlumbingIndustryPage() {
  return (
    <>
      <PlumbingHero />
      <PlumbingStats />
      <PlumbingProblem />
      <PlumbingCrewBento />
      <PlumbingRoiCalculator />
      <PlumbingFinalCta />
    </>
  );
}
