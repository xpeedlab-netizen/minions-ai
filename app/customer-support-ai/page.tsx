import type { Metadata } from "next";
import PipHero from "@/components/sections/pip/PipHero";
import PipFeatures from "@/components/sections/pip/PipFeatures";
import PipNoGuessPolicy from "@/components/sections/pip/PipNoGuessPolicy";
import ObjectionsSection from "@/components/sections/service/ObjectionsSection";
import PipFinalCta from "@/components/sections/pip/PipFinalCta";
import FaqSection from "@/components/sections/faq/FaqSection";

export const metadata: Metadata = {
  title: "AI Customer Support — Chat & Email Answered 24/7",
  description:
    "Pip answers your customers' routine questions by chat and email around the clock, using only your approved information — and escalates anything tricky straight to you.",
};

const pipFaq = [
  {
    q: "Will Pip make things up (hallucinate)?",
    a: "No. Pip only answers from information you've approved. If it isn't sure of an answer, it says so and escalates to you instead of guessing — that's the No-Guess Policy.",
  },
  {
    q: "What if the customer is angry or upset?",
    a: "Pip recognizes frustration in a conversation and hands it straight to a human rather than trying to talk someone down. You get pinged immediately, with the full conversation history attached.",
  },
  {
    q: "How long does it take to train Pip?",
    a: "About a week. You send over your pricing sheets, service area maps, and FAQs, and we handle the setup — no technical work on your end.",
  },
];

export default function CustomerSupportAiPage() {
  return (
    <>
      <PipHero />
      <PipFeatures />
      <PipNoGuessPolicy />
      <ObjectionsSection items={pipFaq} heading="Tough Questions for a Support Assistant" />
      <FaqSection />
      <PipFinalCta />
    </>
  );
}
