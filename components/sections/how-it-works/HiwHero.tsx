import Button from "@/components/ui/Button";

export default function HiwHero() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-wide text-teal">The 3–6 Week Build</p>
        <h1 className="mt-4 font-heading font-bold text-4xl sm:text-5xl text-ink text-balance">
          From missed calls to booked jobs — in three to six weeks.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl mx-auto">
          Our four-step process gets your AI crew answering calls and booking jobs in three to
          four weeks for Core Crew, or five to six for the full crew — with almost no work from
          you.
        </p>
        <Button href="/contact" size="lg" showArrow className="mt-8">
          Book your discovery call
        </Button>
      </div>
    </section>
  );
}
