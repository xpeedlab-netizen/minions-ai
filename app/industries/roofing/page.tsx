import type { Metadata } from "next";
import RoofingHero from "@/components/sections/industries/roofing/RoofingHero";
import RoofingProblem from "@/components/sections/industries/roofing/RoofingProblem";
import RoofingCrew from "@/components/sections/industries/roofing/RoofingCrew";
import RoofingResponseGap from "@/components/sections/industries/roofing/RoofingResponseGap";
import RoofingTestimonial from "@/components/sections/industries/roofing/RoofingTestimonial";
import RoofingFinalCta from "@/components/sections/industries/roofing/RoofingFinalCta";

export const metadata: Metadata = {
  title: "AI Answering & Lead Follow-Up for Roofing Companies",
  description:
    "When the storm surge hits, speed is profit. Rex and the crew handle high-volume insurance intakes and estimate scheduling while your actual crew is on the roof.",
};

export default function RoofingIndustryPage() {
  return (
    <>
      <RoofingHero />
      <RoofingProblem />
      <RoofingCrew />
      <RoofingResponseGap />
      <RoofingTestimonial />
      <RoofingFinalCta />
    </>
  );
}
