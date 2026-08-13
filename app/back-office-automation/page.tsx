import type { Metadata } from "next";
import OttoHero from "@/components/sections/otto/OttoHero";
import OttoStats from "@/components/sections/otto/OttoStats";
import OttoBentoGrid from "@/components/sections/otto/OttoBentoGrid";
import OttoWhyBackOffice from "@/components/sections/otto/OttoWhyBackOffice";
import OttoFinalCta from "@/components/sections/otto/OttoFinalCta";

export const metadata: Metadata = {
  title: "Back-Office & Document Automation AI for Contractors & Law Firms | Minions AI",
  description:
    "Otto automates client intake, document chasing, tax form OCR extraction, and folder filing — so your team spends zero hours pushing administrative paperwork.",
};

export default function BackOfficeAutomationPage() {
  return (
    <>
      <OttoHero />
      <OttoStats />
      <OttoBentoGrid />
      <OttoWhyBackOffice />
      <OttoFinalCta />
    </>
  );
}
