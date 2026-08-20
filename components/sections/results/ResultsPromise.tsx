import { BadgeCheck } from "lucide-react";

export default function ResultsPromise() {
  return (
    <section className="bg-cream pb-16 sm:pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <BadgeCheck className="mx-auto size-8 text-teal" />
        <h2 className="mt-4 font-heading font-bold text-2xl sm:text-3xl text-teal">
          Our promise on reporting
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          We don&apos;t believe in &ldquo;vanity metrics.&rdquo; We won&apos;t show you charts of
          &ldquo;calls handled&rdquo; that didn&apos;t lead anywhere. Our reporting focuses on
          outcomes: appointments set, revenue recovered, and hours saved for your dispatchers. If
          we don&apos;t move the needle on your bottom line, we aren&apos;t doing our job.
        </p>
      </div>
    </section>
  );
}
