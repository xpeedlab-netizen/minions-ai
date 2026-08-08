import Button from "@/components/ui/Button";
import ZipHeroAnimation from "./ZipHeroAnimation";

export default function ZipHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-coral/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-coral-text">
            Speed-to-Lead
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            The second you miss a call, your customer gets a text.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When you can&apos;t pick up, Zip fires off a friendly text right away —
            &lsquo;Sorry we missed you! What can we help with?&rsquo; — and keeps the conversation
            going until the job&apos;s on your calendar. Missed call to booked job, without you
            lifting a finger.
          </p>
          <div className="mt-8">
            <Button href="/live-demo" size="lg" showArrow>
              See Zip in action
            </Button>
          </div>
        </div>

        <div className="relative">
          <ZipHeroAnimation />
        </div>
      </div>
    </section>
  );
}
