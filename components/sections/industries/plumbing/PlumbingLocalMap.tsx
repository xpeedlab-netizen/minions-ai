import Image from "next/image";

export default function PlumbingLocalMap() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-teal-dark text-balance">
            Rex knows your local map
          </h2>
          <p className="mt-4 text-ink/65">
            Rex is trained on your specific service zip codes. He knows the difference between a
            high-priority local job and an out-of-bounds lead.
          </p>
        </div>

        <div className="relative mt-12 aspect-video sm:aspect-[16/8] overflow-hidden rounded-3xl border border-border shadow-sm">
          <Image
            src="/images/plumbing-service-area.jpg"
            alt="Minions.AI plumbing service area coverage map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/20" />

          <div className="absolute left-4 top-4 sm:left-6 sm:top-6 max-w-[220px] rounded-xl bg-white p-4 shadow-lg">
            <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-teal">
              <span className="size-1.5 rounded-full bg-teal" />
              Active Service Zone
            </span>
            <p className="mt-2 text-sm text-ink/80 leading-relaxed">
              &quot;Yes, we service your area for drain cleaning appointments.&quot;
            </p>
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-xl bg-white px-4 py-3 shadow-lg text-right">
            <p className="font-mono text-[10px] uppercase tracking-wide text-ink/65">Coverage</p>
            <p className="mt-0.5 font-heading font-bold text-teal">Service Area Matched</p>
          </div>
        </div>
      </div>
    </section>
  );
}
