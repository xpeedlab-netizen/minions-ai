import type { Metadata } from "next";
import HvacHero from "@/components/sections/industries/hvac/HvacHero";
import HvacStats from "@/components/sections/industries/hvac/HvacStats";
import HvacProblem from "@/components/sections/industries/hvac/HvacProblem";
import HvacCrewBento from "@/components/sections/industries/hvac/HvacCrewBento";
import HvacRoiCalculator from "@/components/sections/industries/hvac/HvacRoiCalculator";
import HvacFinalCta from "@/components/sections/industries/hvac/HvacFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Voice Dispatch & Lead Automation for HVAC Contractors | Minions AI",
  description:
    "Catch every emergency AC & heating call 24/7. Our AI crew answers on the 1st ring, texts back missed leads in under 5 seconds, and books service calls straight to ServiceTitan.",
};

export default function HvacIndustryPage() {
  return (
    <>
      <HvacHero />
      <HvacStats />
      <HvacProblem />
      <HvacCrewBento />
      <HvacRoiCalculator />
      <HvacFinalCta />
    </>
  );
}
