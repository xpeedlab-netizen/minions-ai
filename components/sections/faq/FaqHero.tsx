import { BookOpen } from "lucide-react";

export default function FaqHero() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink/60">
          <BookOpen className="size-3.5 text-teal" />
          Knowledge Base
        </span>
        <h1 className="mt-5 font-heading font-extrabold text-4xl sm:text-5xl text-ink text-balance">
          Your questions, answered straight.
        </h1>
        <p className="mt-4 text-lg text-ink/70 leading-relaxed">
          Everything you need to know about how the crew works, what it costs, and how we keep
          your business compliant.
        </p>
      </div>
    </section>
  );
}
