import Image from "next/image";
import { Quote } from "lucide-react";

const stats = [
  { label: "Lead Capture Rate", value: "98%" },
  { label: "Response Time", value: "<30s" },
  { label: "Active Monitoring", value: "24/7/365" },
  { label: "Setup Time", value: "15 min" },
];

export default function HvacTestimonial() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Quote className="size-10 text-ink/15" fill="currentColor" />
          <p className="mt-4 font-heading font-bold text-2xl sm:text-3xl text-teal-dark leading-snug text-balance">
            &quot;Last July, Rex handled 45 calls while my office manager was out with COVID. We
            didn&apos;t miss a single install estimate. It paid for itself in one weekend.&quot;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="relative size-11 overflow-hidden rounded-full border border-border">
              <Image
                src="/images/hvac-photo-2.jpg"
                alt="Mike Henderson"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div>
              <p className="font-heading font-bold text-ink text-sm">Mike Henderson</p>
              <p className="text-xs text-ink/50">Owner, Arctic Air Pros</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-white p-5">
              <p className="font-heading font-extrabold text-2xl text-teal">{s.value}</p>
              <p className="mt-1 text-xs text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
