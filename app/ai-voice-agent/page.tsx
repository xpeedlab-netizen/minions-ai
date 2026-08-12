import type { Metadata } from "next";
import RexHero from "@/components/sections/rex/RexHero";
import RexAudioDemo from "@/components/sections/rex/RexAudioDemo";
import RexFeatures from "@/components/sections/rex/RexFeatures";
import RexVsOthers from "@/components/sections/rex/RexVsOthers";
import RexTrainingProcess from "@/components/sections/rex/RexTrainingProcess";
import RexCompliance from "@/components/sections/rex/RexCompliance";
import FaqSection from "@/components/sections/faq/FaqSection";
import RexFinalCta from "@/components/sections/rex/RexFinalCta";

export const metadata: Metadata = {
  title: "Rex 24/7 AI Voice Dispatcher & Receptionist — Minions.AI",
  description:
    "Rex answers your phone on ring one 24/7/365, quotes exact service pricing, and books appointments straight into your Google Calendar. Live in 7 days.",
};

export default function AiVoiceAgentPage() {
  return (
    <>
      <RexHero />
      <RexAudioDemo />
      <RexFeatures />
      <RexVsOthers />
      <RexTrainingProcess />
      <RexCompliance />
      <FaqSection
        title="Rex AI Voice Answering FAQ"
        subtitle="Common questions trade contractors ask before deploying Rex on their business phone line."
      />
      <RexFinalCta />
    </>
  );
}
