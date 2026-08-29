import type { Metadata } from "next";
import PipHero from "@/components/sections/pip/PipHero";
import PipChatSimulator from "@/components/sections/pip/PipChatSimulator";
import PipBentoGrid from "@/components/sections/pip/PipBentoGrid";
import PipNoGuessPolicy from "@/components/sections/pip/PipNoGuessPolicy";
import ObjectionsSection from "@/components/sections/service/ObjectionsSection";
import PipFinalCta from "@/components/sections/pip/PipFinalCta";
import FaqSection from "@/components/sections/faq/FaqSection";

export const metadata: Metadata = {
  title: "Pip 24/7 Grounded Website Chat Assistant — Minions.AI",
  description:
    "Pip answers routine website inquiries 24/7—pricing ranges, service areas, guarantees, and licensing—grounded strictly in your verified business content with zero hallucinations.",
};

const pipFaq = [
  {
    q: "Will Pip make things up (hallucinate)?",
    a: "No. Pip only answers from information you've approved. If it isn't sure of an answer, it says so and escalates to you instead of guessing — that's our No-Guess Policy.",
  },
  {
    q: "What if a website visitor needs an emergency call?",
    a: "Pip recognizes emergency requests (like gas leaks or burst pipes) and provides your direct emergency phone line or patches the request directly to Rex, your AI Voice Dispatcher.",
  },
  {
    q: "How long does it take to train Pip for my business?",
    a: "3 to 4 weeks for Core Crew and 5 to 6 weeks for Full Crew. You send over your pricing sheets, service area zip codes, and customer FAQs, and our team handles the entire setup with 100% done-for-you onboarding.",
  },
];

export default function CustomerSupportAiPage() {
  return (
    <>
      <PipHero />
      <PipChatSimulator />
      <PipBentoGrid />
      <PipNoGuessPolicy />
      <ObjectionsSection items={pipFaq} heading="Tough Questions for a Website Support Assistant" />
      <FaqSection
        title="Pip Grounded Web Chat FAQ"
        subtitle="Common questions trade business owners ask before adding Pip to their website."
      />
      <PipFinalCta />
    </>
  );
}
