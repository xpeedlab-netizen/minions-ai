import type { Metadata } from "next";
import ElectricalHero from "@/components/sections/industries/electrical/ElectricalHero";
import ElectricalStats from "@/components/sections/industries/electrical/ElectricalStats";
import ElectricalProblem from "@/components/sections/industries/electrical/ElectricalProblem";
import ElectricalCrewBento from "@/components/sections/industries/electrical/ElectricalCrewBento";
import ElectricalRoiCalculator from "@/components/sections/industries/electrical/ElectricalRoiCalculator";
import ElectricalFinalCta from "@/components/sections/industries/electrical/ElectricalFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Emergency Dispatch & Lead Automation for Electricians | Minions AI",
  description:
    "When the lights go out or breakers arc, customers call the first electrician who answers. Our AI crew answers 24/7, guides main breaker safety, texts back missed leads in < 5 seconds, and books jobs directly into ServiceTitan or Housecall Pro.",
};

export default function ElectricalIndustryPage() {
  return (
    <>
      <ElectricalHero />
      <ElectricalStats />
      <ElectricalProblem />
      <ElectricalCrewBento />
      <ElectricalRoiCalculator />
      <ElectricalFinalCta />
    </>
  );
}
