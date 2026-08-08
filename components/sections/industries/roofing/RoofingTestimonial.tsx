import Image from "next/image";
import { Star } from "lucide-react";

export default function RoofingTestimonial() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-[220px_1fr] gap-8 items-center">
        <div className="relative mx-auto">
          <div className="relative aspect-[4/5] w-48 sm:w-full rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/roofing-testimonial-photo.jpg"
              alt="Marcus Thorne, CEO of Peak Integrity Roofing"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-white px-3 py-2 shadow-md text-center">
            <p className="font-heading font-extrabold text-lg text-teal">94%</p>
            <p className="font-mono text-[9px] uppercase tracking-wide text-ink/50">Booking Rate</p>
          </div>
        </div>

        <div>
          <div className="flex gap-0.5 text-coral">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4" fill="currentColor" />
            ))}
          </div>
          <blockquote className="mt-3 text-lg text-ink/80 leading-relaxed">
            &ldquo;The last hail storm would have crushed our office staff. Minions.AI handled 400
            calls in 48 hours and booked 62 inspections before we even opened on Monday morning.
            It paid for itself in one weekend.&rdquo;
          </blockquote>
          <p className="mt-4 font-heading font-bold text-ink">Marcus Thorne</p>
          <p className="text-sm text-ink/50">CEO, Peak Integrity Roofing</p>
        </div>
      </div>
    </section>
  );
}
