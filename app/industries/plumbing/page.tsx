import type { Metadata } from "next";
import PlumbingHero from "@/components/sections/industries/plumbing/PlumbingHero";
import PlumbingEmergencyMode from "@/components/sections/industries/plumbing/PlumbingEmergencyMode";
import PlumbingCrew from "@/components/sections/industries/plumbing/PlumbingCrew";
import PlumbingResponseGap from "@/components/sections/industries/plumbing/PlumbingResponseGap";
import PlumbingLocalMap from "@/components/sections/industries/plumbing/PlumbingLocalMap";
import PlumbingFinalCta from "@/components/sections/industries/plumbing/PlumbingFinalCta";

export const metadata: Metadata = {
  title: "AI Answering & Lead Follow-Up for Plumbing Companies",
  description:
    "Burst pipes don't wait for business hours. Our AI answers every call 24/7, flags true emergencies, and books service calls — so a bad night never means a lost job.",
};

export default function PlumbingIndustryPage() {
  return (
    <>
      <PlumbingHero />
      <PlumbingEmergencyMode />
      <PlumbingCrew />
      <PlumbingResponseGap />
      <PlumbingLocalMap />
      <PlumbingFinalCta />
    </>
  );
}
