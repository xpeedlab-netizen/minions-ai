import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutHowWeWork from "@/components/sections/about/AboutHowWeWork";
import AboutOffshore from "@/components/sections/about/AboutOffshore";
import AboutCrewStrip from "@/components/sections/about/AboutCrewStrip";
import AboutFinalCta from "@/components/sections/about/AboutFinalCta";

export const metadata: Metadata = {
  title: "About Minions.AI — The Team Behind Your AI Crew",
  description:
    "We're a small, hands-on team building AI that answers phones and books jobs for small businesses — the same people who'll build and run your crew.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutHowWeWork />
      <AboutOffshore />
      <AboutCrewStrip />
      <AboutFinalCta />
    </>
  );
}
