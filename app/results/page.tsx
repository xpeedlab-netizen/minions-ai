import type { Metadata } from "next";
import ResultsHero from "@/components/sections/results/ResultsHero";
import ResultsCallProof from "@/components/sections/results/ResultsCallProof";
import ResultsRoiCalculator from "@/components/sections/results/ResultsRoiCalculator";
import ResultsFoundingOffer from "@/components/sections/results/ResultsFoundingOffer";
import ResultsPromise from "@/components/sections/results/ResultsPromise";
import ResultsFinalCta from "@/components/sections/results/ResultsFinalCta";

export const metadata: Metadata = {
  title: "Results & Proof — See the Crew in Action",
  description:
    "No padded reviews or fake testimonials. Watch our AI handle real customer calls, book appointments on the fly, and recover revenue that usually slips through the cracks.",
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
