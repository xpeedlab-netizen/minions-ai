import type { Metadata } from "next";
import ResultsHero from "@/components/sections/results/ResultsHero";
import ResultsCallProof from "@/components/sections/results/ResultsCallProof";
import ResultsRoiCalculator from "@/components/sections/results/ResultsRoiCalculator";
import ResultsFoundingOffer from "@/components/sections/results/ResultsFoundingOffer";
import ResultsPromise from "@/components/sections/results/ResultsPromise";
import ResultsFinalCta from "@/components/sections/results/ResultsFinalCta";

export const metadata: Metadata = {
  title: "How It Works In Practice — Hear the Crew Live",
  description:
    "No testimonials and no case studies — we are pre-launch and will not invent them. Call our live demo line and hear the AI answer, qualify the caller, and book an appointment.",
};

export default function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <ResultsCallProof />
      <ResultsRoiCalculator />
      <ResultsFoundingOffer />
      <ResultsPromise />
      <ResultsFinalCta />
    </>
  );
}
