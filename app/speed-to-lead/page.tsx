import type { Metadata } from "next";
import ZipHero from "@/components/sections/zip/ZipHero";
import ZipSmsSimulator from "@/components/sections/zip/ZipSmsSimulator";
import ZipWhySpeedWins from "@/components/sections/zip/ZipWhySpeedWins";
import ZipBentoGrid from "@/components/sections/zip/ZipBentoGrid";
import ZipHonestPitch from "@/components/sections/zip/ZipHonestPitch";
import ZipFinalCta from "@/components/sections/zip/ZipFinalCta";

export const metadata: Metadata = {
  title: "Zip Speed-to-Lead & Missed-Call SMS Recovery — Minions.AI",
  description:
    "The instant you miss a call or receive a web lead, Zip fires off a friendly SMS text-back in under 5 seconds. Logged automatically in your dedicated CRM lead pipeline.",
};

export default function SpeedToLeadPage() {
  return (
    <>
      <ZipHero />
      <ZipSmsSimulator />
      <ZipWhySpeedWins />
      <ZipBentoGrid />
      <ZipHonestPitch />
      <ZipFinalCta />
    </>
  );
}
