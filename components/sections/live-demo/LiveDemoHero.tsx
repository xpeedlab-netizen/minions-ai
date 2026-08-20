export default function LiveDemoHero() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink/60">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          Assistant preview
        </span>
        <h1 className="mt-5 font-heading font-bold text-4xl sm:text-5xl text-ink text-balance">
          Experience how the crew answers customer inquiries.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Test Pip live in browser chat or book a 15-minute call to hear test recordings built specifically around your business services.
        </p>
      </div>
    </section>
  );
}
