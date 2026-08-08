import Image from "next/image";

export default function FoundersTrust() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-heading italic text-xl sm:text-2xl text-ink/60">
          &ldquo;We aren&apos;t a silicon valley software factory.&rdquo;
        </p>
        <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          Built by trade veterans.
        </h2>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto">
          Minions.AI was started by Rakib and Parvej after realizing that local businesses were
          spending thousands on lead-gen only to lose half of it because they were actually doing
          the work they were hired for. We built this to solve our own problem.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-4">
            <div className="relative size-14 overflow-hidden rounded-full border-2 border-cream">
              <Image src="/images/founder-rakib.jpg" alt="Rakib, Minions.AI co-founder" fill className="object-cover" />
            </div>
            <div className="relative size-14 overflow-hidden rounded-full border-2 border-cream">
              <Image src="/images/founder-parvej.jpg" alt="Parvej, Minions.AI co-founder" fill className="object-cover" />
            </div>
          </div>
          <p className="font-heading font-bold text-ink text-left">
            Rakib &amp; Parvej
            <span className="block font-body font-normal text-sm text-ink/50">Co-founders, Minions.AI</span>
          </p>
        </div>
      </div>
    </section>
  );
}
