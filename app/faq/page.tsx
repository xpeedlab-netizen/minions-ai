import type { Metadata } from "next";
import FaqHero from "@/components/sections/faq/FaqHero";
import FaqSidebar from "@/components/sections/faq/FaqSidebar";
import FaqContent from "@/components/sections/faq/FaqContent";
import FaqFinalCta from "@/components/sections/faq/FaqFinalCta";

export const metadata: Metadata = {
  title: "FAQ — AI Phone Answering Questions, Answered Straight",
  description:
    "Straight answers on how the AI sounds, what it costs, whether customers can tell, setup time, contracts, and the legal side of recording calls.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />

      <section className="bg-cream-dark pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[220px_1fr] gap-12">
          <FaqSidebar />
          <FaqContent />
        </div>
      </section>

      <FaqFinalCta />
    </>
  );
}
