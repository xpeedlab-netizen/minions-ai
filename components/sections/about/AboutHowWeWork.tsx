import { ClipboardCheck, CalendarDays, Zap, Wrench, RefreshCw } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: ClipboardCheck,
    cornerIcon: Wrench,
    iconBg: "bg-teal",
    title: "Done-For-You",
    body: "We don't sell you software and wish you luck. We build the agents, connect the tools, and monitor the performance. You just answer the bookings.",
  },
  {
    icon: CalendarDays,
    cornerIcon: CalendarDays,
    iconBg: "bg-teal",
    title: "Month-to-Month",
    body: "No golden handcuffs. If we don't bring you value, you don't stay. We earn our keep every single month through booked jobs.",
  },
  {
    icon: Zap,
    cornerIcon: RefreshCw,
    iconBg: "bg-teal",
    title: "Fast Replies",
    body: "Our support desk is as fast as our AI. When you have a question or need a tweak, we respond in minutes, not days.",
  },
];

export default function AboutHowWeWork() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
            How we work
          </h2>
          <p className="mt-4 text-ink/60">
            We&apos;ve stripped away the agency fluff to give you what actually moves the needle.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="relative h-full rounded-2xl border border-border bg-white p-6">
                <span
                  className={`flex size-10 items-center justify-center rounded-xl text-white ${c.iconBg}`}
                >
                  <c.icon className="size-5" />
                </span>
                <c.cornerIcon className="absolute top-6 right-6 size-4 text-ink/20" />
                <h3 className="mt-4 font-heading font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
