import Button from "@/components/ui/Button";

export default function RoofingFinalCta() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
          Don&apos;t let the next storm surge leave you in the dark.
        </h2>
        <p className="mt-4 text-cream/60 leading-relaxed">
          Get a custom ROI audit for your service area. We&apos;ll show you exactly how many leads
          you&apos;re missing based on storm frequency and your current response times.
        </p>
        <Button href="/contact" size="lg" showArrow className="mt-8">
          Get a Storm-Ready ROI Audit
        </Button>
        <p className="mt-4 font-mono text-xs text-cream/40">
          No credit card required • Takes 2 minutes
        </p>
      </div>
    </section>
  );
}
