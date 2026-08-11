import { FOUNDER_STORY } from "@/lib/data/site-content";

export default function FoundersTrust() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-heading italic text-xl sm:text-2xl text-ink/60">
          &ldquo;{FOUNDER_STORY.pullQuote}&rdquo;
        </p>
        <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          {FOUNDER_STORY.heading}
        </h2>
        <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-3xl mx-auto">
          {FOUNDER_STORY.body}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-4">
            <div className="relative size-14 overflow-hidden rounded-full border-2 border-cream bg-teal/10 flex items-center justify-center font-heading font-bold text-teal text-lg">
              R
            </div>
            <div className="relative size-14 overflow-hidden rounded-full border-2 border-cream bg-coral/10 flex items-center justify-center font-heading font-bold text-coral text-lg">
              P
            </div>
          </div>
          <p className="font-heading font-bold text-ink text-left">
            {FOUNDER_STORY.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
