import type { Metadata } from "next";
import HvacHero from "@/components/sections/industries/hvac/HvacHero";
import HvacProblem from "@/components/sections/industries/hvac/HvacProblem";
import HvacCrew from "@/components/sections/industries/hvac/HvacCrew";
import HvacGrowthBanner from "@/components/sections/industries/hvac/HvacGrowthBanner";
import HvacTestimonial from "@/components/sections/industries/hvac/HvacTestimonial";

export const metadata: Metadata = {
  title: "AI Answering & Lead Follow-Up for HVAC Companies",
  description:
    "HVAC leads don't wait. Our AI answers every call 24/7, texts back missed leads in seconds, and books service calls — so a heatwave never means lost jobs.",
};

export default function HvacIndustryPage() {
  return (
    <>
      <HvacHero />
      <HvacProblem />
      <HvacCrew />
      <HvacGrowthBanner />
      <HvacTestimonial />
    </>
  );
}
