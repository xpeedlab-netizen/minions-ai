import Button from "@/components/ui/Button";

export default function ZipFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-10 sm:p-16 text-center shadow-sm">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Stop losing jobs to the &ldquo;next guy.&rdquo;
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Let Zip handle the hustle while you handle the hammer. Get set up in less than 24
            hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Try it in the demo
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
