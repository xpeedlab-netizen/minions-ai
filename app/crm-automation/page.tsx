import type { Metadata } from "next";
import GiaHero from "@/components/sections/gia/GiaHero";
import GiaStats from "@/components/sections/gia/GiaStats";
import GiaBentoGrid from "@/components/sections/gia/GiaBentoGrid";
import GiaWhyManagedCrm from "@/components/sections/gia/GiaWhyManagedCrm";
import GiaFinalCta from "@/components/sections/gia/GiaFinalCta";

export const metadata: Metadata = {
  title: "Managed CRM Setup & Automation for Contractors",
  description:
    "Gia sets up and runs your CRM so leads never fall through the cracks — automatic follow-ups, appointment reminders, review requests and pipelines that run themselves.",
};

export default function CrmAutomationPage() {
  return (
    <>
      <GiaHero />
      <GiaStats />
      <GiaBentoGrid />
      <GiaWhyManagedCrm />
      <GiaFinalCta />
    </>
  );
}
