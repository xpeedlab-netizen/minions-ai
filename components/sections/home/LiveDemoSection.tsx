import Section, { SectionHeading } from "@/components/ui/Section";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { DEMO_VIDEO_ID } from "@/lib/data/placeholders";

/**
 * Demo video band.
 *
 * Position: directly after TheRealCost. The visitor has just watched their own money
 * leak on the calculator, so proof-it-works lands at peak curiosity. Previously this
 * sat after MeetTheCrew, well past that moment — and rendered nothing at all, because
 * it used a <video> tag that cannot play a YouTube URL.
 *
 * Dual-state preserved: with DEMO_VIDEO_ID unset, nothing renders — no empty box,
 * no orphaned heading, no layout gap.
 */
export default function LiveDemoSection() {
  if (!DEMO_VIDEO_ID || DEMO_VIDEO_ID.trim() === "") {
    return null;
  }

  return (
    <Section tone="white" width="default" id="demo" innerClassName="text-center">
      <SectionHeading className="text-ink">
        See how the crew handles a live call
      </SectionHeading>
      <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto">
        Watch a 60-second walkthrough of our AI dispatcher qualifying a lead and writing the booking directly to Google Calendar.
      </p>

      <div className="mt-10">
        <YouTubeEmbed
          videoId={DEMO_VIDEO_ID}
          title="Minions.AI handling a customer call — recorded demonstration"
        />
      </div>
    </Section>
  );
}
