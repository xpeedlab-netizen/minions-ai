import Image from "next/image";

export default function RoofingTestimonial() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-[220px_1fr] gap-8 items-center">
        <div className="relative mx-auto">
          <div className="relative aspect-[4/5] w-48 sm:w-full rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/roofing-testimonial-photo.jpg"
              alt="Storm Dispatch"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-white px-3 py-2 shadow-md text-center">
            <p className="font-heading font-extrabold text-sm text-teal">Storm Ready</p>
            <p className="font-mono text-[9px] uppercase tracking-wide text-ink/65">Active Dispatch</p>
          </div>
        </div>

        <div>
          <p className="mt-3 text-lg text-ink/80 leading-relaxed font-heading">
            When a major hail storm hits, it can crush an unprepared office staff. We build AI that can handle hundreds of calls during a surge and book inspections before you even open on Monday morning. It pays for itself in one weekend.
          </p>
        </div>
      </div>
    </section>
  );
}
