import type { Metadata } from "next";
import RexHero from "@/components/sections/rex/RexHero";
import RexFeatures from "@/components/sections/rex/RexFeatures";
import RexTrainingProcess from "@/components/sections/rex/RexTrainingProcess";
import RexCompliance from "@/components/sections/rex/RexCompliance";
import ObjectionsSection from "@/components/sections/service/ObjectionsSection";
import RexFinalCta from "@/components/sections/rex/RexFinalCta";

export const metadata: Metadata = {
  title: "AI Voice Agent — A 24/7 AI Receptionist That Books Jobs",
  description:
    "Rex answers your phone 24/7 in your business's name, sounds natural enough that most callers never ask, and books jobs straight into your calendar.",
};

const objections = [
  {
    q: "Will callers know it's a robot?",
    a: 'Rex is remarkably natural. While he won\'t lie about being an AI if asked directly, most callers find him so helpful and conversational that the question never comes up. He handles "umms," "ahhs," and interruptions just like a person.',
  },
  {
    q: "What if the request is unusual?",
    a: "Rex only answers from information you've approved. If he doesn't know, he says so and either takes a message or transfers to you — your call.",
  },
  {
    q: "Can he transfer calls to me?",
    a: '"No heat" in January or "burst pipe" at midnight can ring your phone directly, with Rex telling you what\'s happening before you say hello. You set the rules.',
  },
];

export default function AiVoiceAgentPage() {
  return (
    <>
      <RexHero />
      <RexFeatures />
      <RexTrainingProcess />
      <RexCompliance />
      <ObjectionsSection items={objections} heading="Frequently Asked Questions" />
      <RexFinalCta />
    </>
  );
}
