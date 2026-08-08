import type { Metadata } from "next";
import HiwHero from "@/components/sections/how-it-works/HiwHero";
import HiwProcessGrid from "@/components/sections/how-it-works/HiwProcessGrid";
import HiwReassurance from "@/components/sections/how-it-works/HiwReassurance";
import HiwFinalCta from "@/components/sections/how-it-works/HiwFinalCta";

export const metadata: Metadata = {
  title: "How It Works — Live in About a Week",
  description:
    "Our four-step process gets your AI crew answering calls and booking jobs in about a week, with almost no work from you.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiwHero />
      <HiwProcessGrid />
      <HiwReassurance />
      <HiwFinalCta />
    </>
  );
}
