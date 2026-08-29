import type { Metadata } from "next";
import HiwHero from "@/components/sections/how-it-works/HiwHero";
import HiwProcessGrid from "@/components/sections/how-it-works/HiwProcessGrid";
import HiwReassurance from "@/components/sections/how-it-works/HiwReassurance";
import SecurityTrustSection from "@/components/sections/home/SecurityTrustSection";
import HiwFinalCta from "@/components/sections/how-it-works/HiwFinalCta";

export const metadata: Metadata = {
  title: "How It Works — Live in 3–6 Weeks",
  description:
    "Our four-step process gets your AI crew answering calls and booking jobs in three to six weeks, with bank-level encryption and full CRM integration.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiwHero />
      <HiwProcessGrid />
      <HiwReassurance />
      <SecurityTrustSection />
      <HiwFinalCta />
    </>
  );
}
