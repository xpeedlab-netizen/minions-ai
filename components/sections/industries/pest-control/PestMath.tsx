import Image from "next/image";

export default function PestMath() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance text-center">
          The Math of Missing Calls
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="border-l-4 border-coral pl-6">
            <p className="font-heading font-extrabold text-6xl text-coral">100x</p>
            <p className="mt-3 text-white/70 leading-relaxed max-w-sm">
              The difference in contact rates when you respond in 5 minutes vs 30 minutes.
            </p>
            <p className="mt-3 font-mono text-xs italic text-white/40">
              — Verified MIT / InsideSales Study
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-teal-dark p-6 sm:p-8">
            <p className="text-white/90 leading-relaxed text-lg">
              &quot;Before Minions.AI, we were losing roughly 40% of our weekend wasp calls to the
              &quot;next guy&quot; on Google. Now, we book them while we sleep.&quot;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/images/pest-control-photo.jpg"
                  alt="Dave Miller"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">Dave Miller</p>
                <p className="text-xs text-white/50">Owner, Shield Pest Defense</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
