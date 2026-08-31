import Hero from "@/components/sections/home/Hero";
import TheRealCost from "@/components/sections/home/TheRealCost";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import PricingPreview from "@/components/sections/home/PricingPreview";
import FinalCta from "@/components/sections/FinalCta";
import MobileStickyCta from "@/components/ui/MobileStickyCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Revalidated daily because the pricing cards print the current month (lib/current-month.ts).
 * Without this the label would freeze at whatever month the last deploy happened in, which
 * is worse than no label at all. Nothing else on the page is time-dependent.
 */
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Hero />
      <TheRealCost />
      <MeetTheCrew />
      <HowItWorks />
      <PricingPreview />
      <FinalCta
        heading="Get home on time. Let the crew answer."
        subtext="Your AI crew is live in 3–6 weeks for a fixed one-time fee, with 30 days of tuning included after go-live."
        primaryLabel="Book Your 15-Minute Setup Call"
        primaryHref={BOOKING_CALENDAR_URL}
        hideSecondary
        image="/images/illustrations/outcome-home-on-time.webp"
        imageAlt="A service business owner home in the evening, kneeling to greet his young daughter with his phone put away"
      />
      <MobileStickyCta />
    </>
  );
}

