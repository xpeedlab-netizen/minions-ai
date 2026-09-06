import {
  PhoneCall,
  MessageSquare,
  CalendarCheck,
  Sparkles,
  MessagesSquare,
  Star,
  FileText,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/* The four agents that support Alex on a listing. Compact rows rather than full
   Bento cards — see the matching note in PestCrewBento: an ad visitor is deciding
   "does this answer my phone?" first, but the five-agent suite is the documented
   product model (.claude/features/industries/rules.md) and must stay visible so this
   page agrees with the homepage crew band and /how-it-works. */
const supporting = [
  {
    icon: MessageSquare,
    name: "Zip",
    role: "Speed to Lead",
    body: "Texts missed callers in under 5 seconds with a link to book a private tour.",
  },
  {
    icon: MessagesSquare,
    name: "Pip",
    role: "Web Chat & Email",
    body: "Answers listing, neighbourhood and process questions from your verified data only.",
  },
  {
    icon: Star,
    name: "Gia",
    role: "Reminders & Reviews",
    body: "Sends 24h and 1h showing reminders, then requests a review once the deal closes.",
  },
  {
    icon: FileText,
    name: "Otto",
    role: "Back Office",
    body: "Handles client intake forms and disclosure paperwork so nothing stalls a file.",
  },
];

export default function RealEstateCrewBento() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Real Estate AI Front-Office Crew</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Autonomous real estate ISA & showing dispatch.
          </h2>
        </div>

        {/* Alex leads at full width; the four supporting agents sit in a compact row. */}
        <Reveal>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl transition-all duration-300 hover:border-teal/40 hover:shadow-2xl hover:shadow-teal/20">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40">
                <PhoneCall className="size-5" />
              </span>
              <span className="font-mono text-xs font-bold text-teal-300 bg-teal/20 border border-teal/40 px-3 py-1 rounded-full uppercase tracking-wide">
                Alex, Inside Sales
              </span>
            </div>

            <div className="grid items-center gap-8 sm:grid-cols-2">
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-2xl text-white">
                  24/7 Voice & Calendar Sync
                </h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Answers on ring one, qualifies buyers with LPMAMA, and books directly to Google Calendar.
                </p>
              </div>

              {/* Visual UI Mockup */}
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal-300">
                    <CalendarCheck className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white">44 Elm St Showing</p>
                    <p className="font-mono text-[10px] text-teal-300">Friday @ 10:00 AM</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-white/10" />
                  <div className="h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supporting.map((agent, i) => (
            <Reveal key={agent.name} delay={0.05 + i * 0.05}>
              <div className="h-full min-w-0 rounded-2xl border border-border/60 bg-white p-5 shadow-xs">
                <span className="flex size-9 items-center justify-center rounded-xl bg-coral/10 text-coral-text">
                  <agent.icon className="size-4" />
                </span>
                <p className="mt-3.5 font-heading font-bold text-base text-ink">
                  {agent.name}
                  <span className="ml-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                    {agent.role}
                  </span>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                  {agent.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
