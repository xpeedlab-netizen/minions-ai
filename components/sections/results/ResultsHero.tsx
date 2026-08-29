export default function ResultsHero() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal">
          How It Works In Practice
        </span>
        <h1 className="mt-5 font-heading font-bold text-4xl sm:text-5xl text-teal text-balance">
          We&apos;d rather show you than tell you.
        </h1>
        <p className="mt-6 text-lg text-ink/75 leading-relaxed">
          {/* Deliberately does not claim customers, reviews, or case studies — there are none
              yet. It offers the one proof that is real and verifiable on the spot. */}
          We are pre-launch, so you will not find customer logos or testimonials here. What you
          will find is a live line you can dial right now: it answers, qualifies the caller, and
          books the appointment while you listen.
        </p>
      </div>
    </section>
  );
}
