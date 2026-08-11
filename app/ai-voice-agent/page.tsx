import type { Metadata } from "next";
import RexHero from "@/components/sections/rex/RexHero";
import RexFeatures from "@/components/sections/rex/RexFeatures";
import RexTrainingProcess from "@/components/sections/rex/RexTrainingProcess";
import RexCompliance from "@/components/sections/rex/RexCompliance";
import FaqSection from "@/components/sections/faq/FaqSection";
import RexFinalCta from "@/components/sections/rex/RexFinalCta";

export const metadata: Metadata = {
  title: "AI Voice Agent — A 24/7 AI Receptionist That Books Jobs",
  description:
    "Rex answers your phone 24/7 in your business's name, sounds natural enough that most callers never ask, and books jobs straight into your calendar.",
};

export default function AiVoiceAgentPage() {
  return (
    <>
      <RexHero />
      <RexFeatures />
      <RexTrainingProcess />
      <RexCompliance />
      <FaqSection
        title="AI Answering FAQ"
        subtitle="Common questions trade owners ask before setting up phone answering."
      />
      <RexFinalCta />
    </>
  );
}
