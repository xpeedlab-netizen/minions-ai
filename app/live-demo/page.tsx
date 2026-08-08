import type { Metadata } from "next";
import LiveDemoHero from "@/components/sections/live-demo/LiveDemoHero";
import LiveDemoOptionA from "@/components/sections/live-demo/LiveDemoOptionA";
import LiveDemoOptionB from "@/components/sections/live-demo/LiveDemoOptionB";
import LiveDemoOptionC from "@/components/sections/live-demo/LiveDemoOptionC";
import LiveDemoPrompts from "@/components/sections/live-demo/LiveDemoPrompts";
import LiveDemoFinalCta from "@/components/sections/live-demo/LiveDemoFinalCta";

export const metadata: Metadata = {
  title: "Hear the AI Live — Talk to Our AI Receptionist Now",
  description:
    "Have a real conversation with our AI receptionist right now. Talk in your browser or have it call your phone. Free, 60 seconds, no signup.",
};

export default function LiveDemoPage() {
  return (
    <>
      <LiveDemoHero />

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <LiveDemoOptionA />
          <div className="flex flex-col gap-6">
            <LiveDemoOptionB />
            <LiveDemoOptionC />
          </div>
        </div>
      </section>

      <LiveDemoPrompts />
      <LiveDemoFinalCta />
    </>
  );
}
