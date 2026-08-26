import type { Metadata } from "next";
import RealEstateHero from "@/components/sections/industries/real-estate/RealEstateHero";
import RealEstateStats from "@/components/sections/industries/real-estate/RealEstateStats";
import RealEstateProblem from "@/components/sections/industries/real-estate/RealEstateProblem";
import RealEstateCrewBento from "@/components/sections/industries/real-estate/RealEstateCrewBento";
import RealEstateRoiCalculator from "@/components/sections/industries/real-estate/RealEstateRoiCalculator";
import RealEstateFinalCta from "@/components/sections/industries/real-estate/RealEstateFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Showing Receptionist & Lead Scoring for Real Estate | Minions AI",
  description:
    "Never lose a $15,000 commission to voicemail. Alex answers 1st ring 24/7, qualifies buyers via LPMAMA, enforces Fair Housing Act compliance, and syncs directly with Google Calendar and Follow Up Boss.",
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <RealEstateHero />
      <RealEstateStats />
      <RealEstateProblem />
      <RealEstateCrewBento />
      <RealEstateRoiCalculator />
      <RealEstateFinalCta />
    </>
  );
}
