import { HONEST_TRUTH } from "@/lib/data/site-content";

export default function HonestProof() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          {HONEST_TRUTH.heading}
        </h2>
        <p className="mt-6 text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto">
          {HONEST_TRUTH.body}
        </p>
      </div>
    </section>
  );
}
