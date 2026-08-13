import type { Metadata } from "next";
import RoofingHero from "@/components/sections/industries/roofing/RoofingHero";
import RoofingStats from "@/components/sections/industries/roofing/RoofingStats";
import RoofingProblem from "@/components/sections/industries/roofing/RoofingProblem";
import RoofingCrewBento from "@/components/sections/industries/roofing/RoofingCrewBento";
import RoofingRoiCalculator from "@/components/sections/industries/roofing/RoofingRoiCalculator";
import RoofingFinalCta from "@/components/sections/industries/roofing/RoofingFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Storm Dispatch & Lead Automation for Roofing Contractors | Minions AI",
  description:
    "When storm surges hit, speed is profit. Our AI crew handles 100+ concurrent calls 24/7, gathers insurance carrier claim info, sends instant damage photo links, and books inspections straight to ServiceTitan or Jobber.",
};

export default function RoofingIndustryPage() {
  return (
    <>
      <RoofingHero />
      <RoofingStats />
      <RoofingProblem />
      <RoofingCrewBento />
      <RoofingRoiCalculator />
      <RoofingFinalCta />
    </>
  );
}
