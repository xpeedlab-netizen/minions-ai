import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { INTEGRATION_COPY } from "@/lib/data/site-content";

const checklist = [
  "Everything organized in one clean pipeline.",
  "Automated SMS and email reminders for appointments.",
  "Google Review requests sent right after jobs are done.",
];

export default function GiaWhyManagedCrm() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance">
            Why a Managed CRM?
          </h2>
          <p className="mt-4 text-cream/70 leading-relaxed">
            A CRM handles your pipeline, inquiries, text follow-ups, and customer reviews. The problem is, most trade owners don&apos;t have time to configure workflows or wrestle with software dashboards.
          </p>
          <p className="mt-4 font-heading font-bold text-white leading-relaxed">
            {INTEGRATION_COPY.crm}
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
            alt="Gia CRM dashboard illustration"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
