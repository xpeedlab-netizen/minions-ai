import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Everything in one tab—no more messy apps.",
  "Reliable delivery for SMS and Email.",
  "Built-in mobile app for your crew.",
];

export default function GiaWhyGoHighLevel() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Why GoHighLevel?
          </h2>
          <p className="mt-4 text-cream/60 leading-relaxed">
            It&apos;s the all-in-one trust system for home services. It handles your website,
            calls, texts, and reputation. The problem is, most owners never have time to set it
            up.
          </p>
          <p className="mt-4 font-heading font-bold text-white leading-relaxed">
            Gia makes GoHighLevel do the heavy lifting so you can focus on the job site, not the
            dashboard.
          </p>
          <ul className="mt-6 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-cream/80">
                <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/gia-ghl-screenshot.jpg"
            alt="Gia CRM dashboard on a laptop"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
