import Image from "next/image";
import { Headset, AlertTriangle, CalendarCheck2, MessageSquareText, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: Headset,
    iconBg: "bg-teal",
    title: "Answers 24/7",
    body: "Rex handles every service call with HVAC-specific logic. No more voicemail graveyards.",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-teal",
    title: "Flags Emergencies",
    body: 'Otto identifies "No Heat" or "No Cooling" situations and escalates them to your on-call tech immediately.',
  },
  {
    icon: CalendarCheck2,
    iconBg: "bg-accent-blue",
    title: "Books Estimates",
    body: "Need a new install quote? Our crew checks your calendar and puts the estimate right on the books.",
  },
  {
    icon: MessageSquareText,
    iconBg: "bg-teal",
    title: "Insta-Text Back",
    body: "Zip texts missed mobile leads instantly. Keep them on the hook while you're finishing the current job.",
  },
];

export default function HvacCrew() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance text-center">
          Meet your new specialized HVAC crew.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <span
                  className={`flex size-10 items-center justify-center rounded-xl text-white ${f.iconBg}`}
                >
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="relative h-full min-h-55 overflow-hidden rounded-2xl bg-ink">
              <Image
                src="/images/hvac-crew-bento-photo.jpg"
                alt="Minions.AI HVAC dispatch map showing active service calls"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white text-balance">
                    &quot;Do you service my area?&quot;
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/70 leading-relaxed">
                    Our AI knows your service map better than a veteran dispatcher. Zip filters out
                    junk calls from three counties away so you only talk to profitable local leads.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black/30 px-3 py-2 font-mono text-xs text-white/80">
                  <MapPin className="size-3.5 text-teal" />
                  Current Service Area: Houston Metro &amp; Suburbs
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-teal p-6 sm:p-8 text-center">
              <p className="font-mono text-xs uppercase tracking-wide text-ink/70">
                The Response Gap
              </p>
              <p className="mt-2 font-heading font-extrabold text-6xl text-ink">100x</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/70">
                Conversion Boost
              </p>
              <p className="mt-4 text-sm text-ink/80 leading-relaxed max-w-xs mx-auto">
                Respond in 5 minutes instead of 30 and you&apos;re 100x more likely to reach that
                lead.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
