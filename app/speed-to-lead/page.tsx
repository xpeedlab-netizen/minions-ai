import type { Metadata } from "next";
import ZipHero from "@/components/sections/zip/ZipHero";
import ZipWhySpeedWins from "@/components/sections/zip/ZipWhySpeedWins";
import ZipBentoGrid from "@/components/sections/zip/ZipBentoGrid";
import ZipHonestPitch from "@/components/sections/zip/ZipHonestPitch";
import ZipFinalCta from "@/components/sections/zip/ZipFinalCta";

export const metadata: Metadata = {
  title: "Missed-Call Text-Back & Speed-to-Lead Automation",
  description:
    "The second you miss a call, your customer gets a friendly text. Zip responds to every missed call and web lead in seconds, so you're first — and first usually wins.",
};

export default function SpeedToLeadPage() {
  return (
    <>
      <ZipHero />
      <ZipWhySpeedWins />
      <ZipBentoGrid />
      <ZipHonestPitch />
      <ZipFinalCta />
    </>
  );
}
