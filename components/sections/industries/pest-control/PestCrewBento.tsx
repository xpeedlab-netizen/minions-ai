import {
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  MessagesSquare,
  Star,
  FileText,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const tags = [
  "24/7 Voice Dispatch",
  "FieldRoutes Sync",
  "Quarterly Upsells",
  "Species Photo Links",
  "5-Star Reviews",
];

/* The four agents that support Rex on a pest job. These were once full Bento cards
   alongside him; they are compact rows now because an ad visitor is deciding "does
   this answer my phone?" — Rex answers that, and these answer "what else?". They
   stay listed because the five-agent suite is the documented product model
   (.claude/features/industries/rules.md) and dropping them made the page contradict
   the homepage crew band and /how-it-works. */
const supporting = [
  {
    icon: MessageSquare,
    name: "Zip",
    role: "Speed to Lead",
    body: "Texts missed callers in under 5 seconds with a photo upload link to identify the species.",
  },
  {
    icon: MessagesSquare,
    name: "Pip",
    role: "Web Chat & Email",
    body: "Answers service-area, pricing and warranty questions from your verified data only.",
  },
  {
    icon: Star,
    name: "Gia",
    role: "Reminders & Reviews",
    body: "Sends 24h and 1h appointment reminders, then requests a Google review once the job closes.",
  },
  {
    icon: FileText,
    name: "Otto",
    role: "Back Office",
    body: "Handles intake forms and WDO inspection logs so paperwork never sits in a truck.",
  },
];

export default function PestCrewBento() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Pest Control AI Front-Office Crew</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Meet your 24/7 specialized pest control front-office crew.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            From midnight emergency dispatching to automated FieldRoutes bookings and quarterly renewal reminders.
          </p>
        </div>

        {/* Rex leads at full width; the four supporting agents sit in a compact row. */}
        <Reveal>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40">
                <PhoneCall className="size-5" />
              </span>
              <span className="font-mono text-xs font-bold text-teal-300 bg-teal/20 border border-teal/40 px-3 py-1 rounded-full uppercase">
                Rex, Voice Chief Dispatcher
              </span>
            </div>

            <h3 className="mt-6 font-heading font-bold text-2xl text-white">
              24/7 Voice Dispatching with Subscription Upsells
            </h3>
            <p className="mt-2.5 text-sm text-white/75 leading-relaxed max-w-xl">
              Answers every call on ring one, quotes treatment fees, pitches $59/mo quarterly protection plans, and books route slots directly in FieldRoutes, PestPac, or GorillaDesk.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                >
                  <CheckCircle2 className="size-3 text-teal" />
                  {t}
                </span>
              ))}
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
