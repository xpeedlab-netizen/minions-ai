import { Clock, CircleAlert, CalendarCheck2, MessageSquare } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: Clock,
    iconColor: "text-ink",
    title: "24/7 Answering",
    body: "Rex never sleeps, never takes a holiday, and never has a 'bad day' on the phone.",
  },
  {
    icon: CircleAlert,
    iconColor: "text-coral-text",
    title: "Emergency Flagging",
    body: "Instant detection of high-revenue emergency calls for immediate dispatch.",
  },
  {
    icon: CalendarCheck2,
    iconColor: "text-[#3A6EA5]",
    title: "Booking Estimates",
    body: "Syncs with ServiceTitan or Housecall Pro to book non-emergencies instantly.",
  },
  {
    icon: MessageSquare,
    iconColor: "text-coral-text",
    title: "Instant Text-Backs",
    body: "If a call is missed, Zip sends an immediate text to stop the lead from calling your rival.",
  },
];

export default function PlumbingCrew() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance">
            Meet your new plumbing crew
          </h2>
          <p className="mt-4 text-ink/60">
            Automation that feels like extra hands in the shop, not just lines of code.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <span
                  className={`flex size-11 items-center justify-center rounded-full bg-cream border border-border ${f.iconColor}`}
                >
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
