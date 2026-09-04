import Button from "@/components/ui/Button";

export default function AboutFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
          Ready to meet the crew?
        </h2>
        <p className="mt-4 text-lg text-ink/70 leading-relaxed">
          Skip the sales reps. Talk directly to the people who will be building your automation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href="/contact" size="lg" showArrow>
            Book a call with the build team
          </Button>
          <Button href="/pricing" variant="text">
            See our Pricing
          </Button>
        </div>
        <p className="mt-6 font-mono text-xs text-ink/65">
          15-minute intro. No pressure. Just solutions.
        </p>
      </div>
    </section>
  );
}
