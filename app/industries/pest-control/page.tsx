import type { Metadata } from "next";
import PestHero from "@/components/sections/industries/pest-control/PestHero";
import PestProblem from "@/components/sections/industries/pest-control/PestProblem";
import PestCrew from "@/components/sections/industries/pest-control/PestCrew";
import PestMath from "@/components/sections/industries/pest-control/PestMath";
import PestFinalCta from "@/components/sections/industries/pest-control/PestFinalCta";

export const metadata: Metadata = {
  title: "AI Answering & Lead Follow-Up for Pest Control Companies",
  description:
    "Pest emergencies feel urgent to the customer. Our AI answers fast, books treatments, and keeps recurring plans on schedule — 24/7.",
};

export default function PestControlIndustryPage() {
  return (
    <>
      <PestHero />
      <PestProblem />
      <PestCrew />
      <PestMath />
      <PestFinalCta />
    </>
  );
}
