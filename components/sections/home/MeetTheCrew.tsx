import type { ReactNode } from "react";
import {
  Clock,
  CalendarCheck,
  PhoneForwarded,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Activity,
  MessageSquare,
  Sparkles,
  Zap,
  Timer,
  Star,
  BellRing,
  Inbox,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Section, { SectionHeading, Eyebrow, SectionLead } from "@/components/ui/Section";
import RexHeroVisual from "./RexHeroVisual";
import ZipHeroVisual from "./ZipHeroVisual";
import PipHeroVisual from "./PipHeroVisual";
import GiaHeroVisual from "./GiaHeroVisual";
import OttoHeroVisual from "./OttoHeroVisual";

/**
 * The crew showcase — five full-bleed split panels, kept deliberately as the product
 * showcase. What changed is the rhythm *inside* them.
 *
 * Previously each panel was hand-written JSX with a different sub-tile pattern:
 * 4 ability tiles / 2 stat tiles / 3 chips / 3 list items / 3 chips. Five different
 * shapes for the same kind of information made the section read as five unrelated
 * pages. Now every panel is driven from one `crew` array through one renderer, so all
 * five share a 2×2 ability grid, one h3 scale, and the shared Button component.
 *
 * Copy is unchanged — every headline, body, ability label, and revenue note is the
 * exact string the old markup carried.
 *
 * Colors are static class strings per member rather than interpolated, because
 * Tailwind only sees classes that appear literally in the source.
 */

type Ability = { icon: ReactNode; label: string };

type CrewMember = {
  id: string;
  name: string;
  role: string;
  headline: string;
  body: string;
  abilities: Ability[];
  revenueNote: string;
  href: string;
  ctaLabel: string;
  visual: ReactNode;
  /** true = dark panel, flips text colors. */
  dark?: boolean;
  /** true = visual on the left at lg. */
  flip?: boolean;
  panelClass: string;
  badgeClass: string;
  tileClass: string;
  calloutClass: string;
  calloutLabelClass: string;
  ctaClass: string;
};

const crew: CrewMember[] = [
  {
    id: "rex",
    name: "Rex",
    role: "24/7 AI Voice Dispatcher",
    headline: "Never miss a $5,000 call while your hands are full on the job.",
    body: "When you're up a ladder or sleeping at 2 AM, Rex answers on ring one. He speaks with natural voice pacing, quotes your exact service pricing, and schedules jobs straight into your Google Calendar.",
    abilities: [
      { icon: <Clock className="size-4 shrink-0" />, label: "Ring-1 24/7 Pickup" },
      { icon: <CalendarCheck className="size-4 shrink-0" />, label: "Direct Calendar Sync" },
      { icon: <PhoneForwarded className="size-4 shrink-0" />, label: "Warm Emergency Transfers" },
      { icon: <Sparkles className="size-4 shrink-0" />, label: "Custom Pricing Quotes" },
    ],
    revenueNote:
      "Captures high-margin emergency calls and weekend jobs on the first ring—before callers hang up to contact your biggest competitor.",
    href: "/ai-voice-agent",
    ctaLabel: "See Rex in action",
    visual: <RexHeroVisual />,
    dark: true,
    panelClass: "bg-ink",
    badgeClass: "bg-teal/20 text-teal",
    tileClass: "bg-white/10 border-white/5 text-white [&_svg]:text-teal",
    calloutClass: "bg-teal/20 border-teal/40",
    calloutLabelClass: "text-teal",
    ctaClass: "bg-teal text-white hover:bg-teal-dark",
  },
  {
    id: "zip",
    name: "Zip",
    role: "5-Second Speed-to-Lead",
    headline: "Leads go cold in 5 minutes. Zip texts them in under 5 seconds.",
    body: "Whenever you miss a call or receive a web form lead, Zip sends an automated SMS text-back instantly. You're the first contractor they hear from—and first usually wins 80%+ of booked jobs.",
    abilities: [
      { icon: <Zap className="size-4 shrink-0" />, label: "100× Better Lead Reach" },
      { icon: <Timer className="size-4 shrink-0" />, label: "Under 5-Second Response" },
      { icon: <MessageSquare className="size-4 shrink-0" />, label: "Automated SMS Text-Back" },
      { icon: <Inbox className="size-4 shrink-0" />, label: "Web Form Lead Capture" },
    ],
    revenueNote:
      "Converts cold web leads and missed calls into active SMS conversations while competitors are still taking hours to check their email inbox.",
    href: "/speed-to-lead",
    ctaLabel: "Deploy Zip",
    visual: <ZipHeroVisual />,
    flip: true,
    panelClass: "bg-white",
    badgeClass: "bg-crew-zip/10 text-crew-zip",
    tileClass: "bg-cream border-border text-ink [&_svg]:text-crew-zip",
    calloutClass: "bg-crew-zip/10 border-crew-zip/30",
    calloutLabelClass: "text-crew-zip",
    ctaClass: "bg-crew-zip text-white hover:opacity-90",
  },
  {
    id: "pip",
    name: "Pip",
    role: "24/7 Customer Support AI",
    headline: "Stop answering the same 5 routine questions all day long.",
    body: "Pip answers customer inquiries via web chat and email around the clock. Trained strictly on your verified business knowledge—no guessing, no hallucinations, no wrong information.",
    abilities: [
      { icon: <ShieldCheck className="size-4 shrink-0" />, label: "Zero-Hallucination Policy" },
      { icon: <CheckCircle2 className="size-4 shrink-0" />, label: "24/7 Live Chat & Email" },
      { icon: <MessageSquare className="size-4 shrink-0" />, label: "Service Area Verification" },
      { icon: <Sparkles className="size-4 shrink-0" />, label: "Trained on Your Data" },
    ],
    revenueNote:
      "Frees up 10+ hours of billable labor per week by instantly answering service area, licensing, and pricing questions for interested prospects.",
    href: "/customer-support-ai",
    ctaLabel: "Meet Pip",
    visual: <PipHeroVisual />,
    panelClass: "bg-white",
    badgeClass: "bg-crew-pip/10 text-crew-pip",
    tileClass: "bg-cream border-border text-ink [&_svg]:text-crew-pip",
    calloutClass: "bg-crew-pip/10 border-crew-pip/30",
    calloutLabelClass: "text-crew-pip",
    ctaClass: "bg-crew-pip text-white hover:opacity-90",
  },
  {
    id: "gia",
    name: "Gia",
    role: "Automated CRM & Follow-ups",
    headline: "Never let an unclosed quote or missed review fall through the cracks.",
    body: "Gia runs your customer follow-up engine on autopilot. From automated quote reminders to appointment alerts and 5-star Google review requests, Gia keeps your business growing.",
    abilities: [
      { icon: <CheckCircle2 className="size-4 shrink-0" />, label: "SMS & Email Quote Follow-ups" },
      { icon: <BellRing className="size-4 shrink-0" />, label: "Appointment Reminders" },
      { icon: <Star className="size-4 shrink-0" />, label: "5-Star Review Collection" },
      { icon: <Activity className="size-4 shrink-0" />, label: "Near 0% No-Shows" },
    ],
    revenueNote:
      "Resurrects thousands in dormant estimates by following up with undecided prospects automatically without you lifting a finger.",
    href: "/crm-automation",
    ctaLabel: "Explore Gia",
    visual: <GiaHeroVisual />,
    flip: true,
    panelClass: "bg-cream-dark",
    badgeClass: "bg-white text-crew-gia",
    tileClass: "bg-white/80 border-crew-gia/20 text-ink [&_svg]:text-crew-gia",
    calloutClass: "bg-white/80 border-crew-gia/30 shadow-sm",
    calloutLabelClass: "text-crew-gia",
    ctaClass: "bg-crew-gia text-white hover:opacity-90",
  },
  {
    id: "otto",
    name: "Otto",
    role: "Back-Office Workflow AI",
    headline: "Eliminate evening kitchen-table paperwork forever.",
    body: "Stop spending your evenings typing up customer intake forms and parsing job documents. Otto handles client intake flows and data routing quietly in the background.",
    abilities: [
      { icon: <FileText className="size-4 shrink-0" />, label: "Automated Client Intake" },
      { icon: <FileText className="size-4 shrink-0" />, label: "Document Data Extraction" },
      { icon: <Activity className="size-4 shrink-0" />, label: "Workflow Status Tracking" },
      { icon: <Inbox className="size-4 shrink-0" />, label: "Background Data Routing" },
    ],
    revenueNote:
      "Eliminates 15+ hours of weekly back-office data entry—allowing you to go home to your family on time every night.",
    href: "/back-office-automation",
    ctaLabel: "Learn about Otto",
    visual: <OttoHeroVisual />,
    panelClass: "bg-white",
    badgeClass: "bg-crew-otto/10 text-crew-otto",
    tileClass: "bg-cream border-border text-ink [&_svg]:text-crew-otto",
    calloutClass: "bg-crew-otto/10 border-crew-otto/30",
    calloutLabelClass: "text-crew-otto",
    ctaClass: "bg-crew-otto text-white hover:opacity-90",
  },
];

export default function MeetTheCrew() {
  return (
    <Section id="crew" tone="cream" width="full" density="feature">
      <div className="max-w-3xl text-center mx-auto">
        <Eyebrow className="mb-5">Your Digital Front-Office Staff</Eyebrow>
        <SectionHeading className="text-ink">
          Meet the 5 Specialized Crew Members Who Protect Your Revenue
        </SectionHeading>
        <SectionLead className="mx-auto text-center">
          Each AI persona is built to take over a specific bottleneck in your service business—so you can stay focused on billable trade work while your front office runs on autopilot 24/7.
        </SectionLead>
      </div>

      <div className="mt-16 space-y-12 sm:space-y-16">
        {crew.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.08}>
            <article
              className={`rounded-3xl overflow-hidden border border-border ${m.panelClass}`}
            >
              <div className="grid lg:grid-cols-2">
                <div
                  className={`p-8 sm:p-12 flex flex-col justify-center ${m.flip ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${m.badgeClass}`}
                    >
                      {m.name}
                    </span>
                    <span
                      className={`text-sm font-medium ${m.dark ? "text-white/60" : "text-ink/60"}`}
                    >
                      {m.role}
                    </span>
                  </div>

                  {/* h3 sits one clear step below the section h2 — previously these five
                      were text-3xl sm:text-4xl, identical to every section heading. */}
                  <h3
                    className={`font-heading font-bold text-xl sm:text-2xl mb-4 text-balance leading-[1.15] tracking-[-0.01em] ${m.dark ? "text-white" : "text-ink"}`}
                  >
                    {m.headline}
                  </h3>

                  <p
                    className={`mb-6 max-w-md text-base leading-[1.65] sm:text-[1.0625rem] ${m.dark ? "text-cream/70" : "text-ink/65"}`}
                  >
                    {m.body}
                  </p>

                  {/* One ability pattern for all five members. */}
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {m.abilities.map((a) => (
                      <li
                        key={a.label}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-2 ${m.tileClass}`}
                      >
                        {a.icon}
                        {a.label}
                      </li>
                    ))}
                  </ul>

                  <div className={`rounded-xl p-4 mb-8 border ${m.calloutClass}`}>
                    <p
                      className={`text-xs font-mono font-bold uppercase tracking-wide mb-1 ${m.calloutLabelClass}`}
                    >
                      How {m.name} Saves Your Revenue:
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-medium ${m.dark ? "text-cream/90" : "text-ink/80"}`}
                    >
                      {m.revenueNote}
                    </p>
                  </div>

                  <div>
                    <Button href={m.href} showArrow className={m.ctaClass}>
                      {m.ctaLabel}
                    </Button>
                  </div>
                </div>

                <div className={m.flip ? "lg:order-1" : ""}>{m.visual}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
