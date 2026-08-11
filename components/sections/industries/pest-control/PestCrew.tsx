import Image from "next/image";
import { Moon, CalendarClock, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const rows = [
  {
    icon: Moon,
    title: "24/7 Answering with Rex",
    body: 'Rex doesn\'t sleep. He handles the "I found a roach" calls at midnight with the same empathy and professional tone as your best office manager.',
    checklist: ["Instant qualification", "Zero hold times"],
    image: "/images/pest-control-hero-photo.jpg",
    imageAlt: "Minions.AI pest control call log dashboard",
    reverse: false,
  },
  {
    icon: CalendarClock,
    title: "Recurring Service Scheduling",
    body: "One-off sprays don't build a business—contracts do. Rex books initial inspections and signs up leads for recurring maintenance plans directly in your CRM.",
    checklist: ["Automatic follow-ups", "Subscription-first mindset"],
    image: "/images/pest-control-photo.jpg",
    imageAlt: "Pest control technician reviewing a job on a tablet",
    reverse: true,
  },
];

export default function PestCrew() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance">
          What your crew does for Pest Control
        </h2>

        <div className="mt-12 space-y-12">
          {rows.map((r) => (
            <Reveal key={r.title}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm ${r.reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                  />
                  <span className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-teal shadow-md">
                    <r.icon className="size-5" />
                  </span>
                </div>
                <div className={r.reverse ? "lg:order-1" : ""}>
                  <h3 className="font-heading font-bold text-2xl text-ink">{r.title}</h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{r.body}</p>
                  <ul className="mt-5 space-y-2">
                    {r.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check className="size-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-2xl bg-teal-dark p-6 sm:p-8">
              <h3 className="font-heading font-bold text-lg text-white">Area Verification</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Rex knows your service routes. He only books profitable leads within your
                territory, saving your techs from wasted drive time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl bg-teal p-6 sm:p-8">
              <h3 className="font-heading font-bold text-lg text-white">Zip&apos;s Insta-Text Back</h3>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                If a call is missed, Zip texts back immediately. &quot;Hey, saw we missed your
                call—was it regarding a pest emergency?&quot; The next exterminator never even gets
                dialed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
