export default function LiveDemoHero() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink/60">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          Live demo system online
        </span>
        <h1 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl text-ink text-balance">
          Talk to the crew right now. See why your customers won&apos;t hang up.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          This is the real thing, not a video. Have a conversation. Ask about hours and pricing.
          Book a pretend appointment. This is exactly what your customers would get.
        </p>
      </div>
    </section>
  );
}
