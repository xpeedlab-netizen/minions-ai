import Button from "@/components/ui/Button";
import { GUARANTEE } from "@/lib/data/site-content";
import { BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";

export default function RexFinalCta() {
  const primaryHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;

  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#E8E1DA] p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Stop losing jobs to your competitors&apos; voicemail.
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Put Rex on the front lines and start booking jobs while you sleep.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} size="lg" showArrow>
              {DEMO_VIDEO_URL ? "Hear Rex Now" : "Book a 15-Minute Call"}
            </Button>
            <Button href={BOOKING_CALENDAR_URL} variant="secondary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
          <p className="mt-5 font-mono text-xs text-ink/60">
            {GUARANTEE.short}
          </p>
        </div>
      </div>
    </section>
  );
}
