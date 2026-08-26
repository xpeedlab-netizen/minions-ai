import Link from "next/link";
import {
  Building2,
  Bug,
  Flame,
  Wrench,
  Zap,
  Home,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CalendarCheck2,
  PhoneCall,
} from "lucide-react";
import Section, { SectionHeading, Eyebrow, SectionLead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface IndustryItem {
  id: string;
  name: string;
  badge?: string;
  featured?: boolean;
  tagline: string;
  description: string;
  highlightStat: string;
  statLabel: string;
  href: string;
  icon: typeof Building2;
  capabilities: string[];
}

const industriesList: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate Agencies",
    badge: "🔥 NEW & FEATURED",
    featured: true,
    tagline: "24/7 Showing Booking & LPMAMA Qualification for Boutique Agencies (1–10 Agents)",
    description:
      "Alex answers on ring one, qualifies buyer price range & mortgage pre-approval, enforces strict Fair Housing compliance, and books showings directly to Google Calendar and your CRM.",
    highlightStat: "$15,000+",
    statLabel: "Average Commission Saved per Call",
    href: "/industries/real-estate",
    icon: Building2,
    capabilities: [
      "2-Step Calendar Showing Booking",
      "LPMAMA Buyer Qualification",
      "Post-NAR Exclusivity Gating",
      "100-Point Algorithmic Lead Scoring",
    ],
  },
  {
    id: "pest-control",
    name: "Pest Control Operators",
    badge: "Recurring Subscriptions",
    tagline: "Turn midnight pest panics into $2,500+ recurring quarterly plans",
    description:
      "Rex triages infestation panics 24/7, quotes treatment pricing, pitches quarterly prevention plans, and books route slots in FieldRoutes or PestPac.",
    highlightStat: "$2,275",
    statLabel: "Average Subscriber LTV Saved",
    href: "/industries/pest-control",
    icon: Bug,
    capabilities: ["24/7 Voice Dispatch", "FieldRoutes & PestPac Sync", "Quarterly Upsell Automation"],
  },
  {
    id: "hvac",
    name: "HVAC Contractors",
    badge: "Heatwave Surge",
    tagline: "Capture every 2 AM AC failure during peak summer heatwaves",
    description:
      "Triages heating/cooling emergencies, quotes diagnostic dispatch fees, and schedules technicians directly in ServiceTitan or Housecall Pro.",
    highlightStat: "$1,200+",
    statLabel: "Emergency Ticket Average",
    href: "/industries/hvac",
    icon: Flame,
    capabilities: ["Emergency Dispatch", "ServiceTitan Sync", "Diagnostic Fee Intake"],
  },
  {
    id: "plumbing",
    name: "Plumbing & Drain",
    badge: "Burst Pipe Triage",
    tagline: "Lock in high-margin emergency leak calls before competitors pick up",
    description:
      "Gathers shut-off valve safety info, dispatches urgent drain or leak crews, and sends instant confirmation texts to homeowners.",
    highlightStat: "< 3 Sec",
    statLabel: "Average Voice Pickup",
    href: "/industries/plumbing",
    icon: Wrench,
    capabilities: ["Shut-Off Safety Triage", "Route Optimization", "Instant SMS Text-Back"],
  },
  {
    id: "electrical",
    name: "Electrical Contractors",
    badge: "Safety Triaged",
    tagline: "Qualify panel upgrades, EV chargers, and emergency outages 24/7",
    description:
      "Collects breaker box specifications, schedules licensed electricians, and protects your billable field hours from routine phone interruptions.",
    highlightStat: "100%",
    statLabel: "Grounded Knowledge",
    href: "/industries/electrical",
    icon: Zap,
    capabilities: ["EV Charger & Panel Intake", "Safety Verification", "Zero Hallucinations"],
  },
  {
    id: "roofing",
    name: "Roofing & Exteriors",
    badge: "Storm Surge",
    tagline: "Automate storm-damage inspection bookings and satellite quotes",
    description:
      "Captures high-volume storm leads off yard signs and web forms, collecting roof age and insurance details for immediate estimator dispatch.",
    highlightStat: "$8,500+",
    statLabel: "Average Job Ticket",
    href: "/industries/roofing",
    icon: Home,
    capabilities: ["Storm Lead Intake", "Insurance Claim Flagging", "Estimator Dispatch"],
  },
];

export default function IndustriesSection() {
  const featured = industriesList.find((i) => i.featured)!;
  const others = industriesList.filter((i) => !i.featured);

  return (
    <Section id="industries" tone="white" width="full" density="feature">
      {/* Header */}
      <div className="max-w-3xl text-center mx-auto mb-14">
        <Eyebrow className="mb-4">Industry-Specific AI Dispatch</Eyebrow>
        <SectionHeading className="text-ink">
          Engineered for the High-Stakes Demands of Your Exact Industry
        </SectionHeading>
        <SectionLead className="mx-auto text-center">
          We don&apos;t build generic chatbots. Minions AI deploys specialized, compliance-tested AI receptionists trained on your exact industry workflows, terminology, and CRM tools.
        </SectionLead>
      </div>

      <div className="space-y-8">
        {/* 🌟 FEATURED HERO INDUSTRY: REAL ESTATE */}
        <Reveal>
          <div className="relative rounded-[32px] border-2 border-teal/40 bg-gradient-to-br from-ink via-ink to-ink/95 p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 size-96 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-coral/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/20 border border-coral/40 px-3 py-1 font-mono text-xs font-bold text-coral-text uppercase">
                    <Sparkles className="size-3.5" />
                    {featured.badge}
                  </span>
                  <span className="font-mono text-xs text-teal font-medium uppercase tracking-wider">
                    Flagship Vertical
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
                    {featured.name}
                  </h3>
                  <p className="mt-2 font-mono text-sm sm:text-base text-teal-300 font-semibold">
                    {featured.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                  {featured.description}
                </p>

                {/* Capability Badges */}
                <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                  {featured.capabilities.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-mono text-white/90"
                    >
                      <ShieldCheck className="size-3.5 text-teal shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href={featured.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal hover:bg-teal-dark px-6 py-3.5 font-heading font-bold text-sm text-white shadow-lg transition-all w-full sm:w-auto"
                  >
                    <span>Explore Real Estate Voice AI</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/live-demo"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-heading font-semibold text-sm text-white transition-colors w-full sm:w-auto"
                  >
                    <PhoneCall className="size-4 text-teal" />
                    <span>Hear Live Tour Demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Impact Highlight Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md space-y-6 text-center">
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40 mx-auto">
                    <Building2 className="size-7" />
                  </div>

                  <div>
                    <p className="font-mono text-4xl sm:text-5xl font-extrabold text-teal-300 tracking-tight">
                      {featured.highlightStat}
                    </p>
                    <p className="mt-2 font-heading font-bold text-sm sm:text-base text-white">
                      {featured.statLabel}
                    </p>
                    <p className="mt-1 font-mono text-xs text-white/50">
                      Based on median $500k home price &amp; 3% buy/sell commission side
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 font-mono text-xs text-white/80">
                    <CalendarCheck2 className="size-4 text-teal" />
                    <span>Follow Up Boss &bull; KVCore &bull; EspoCRM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 🛠️ OTHER 5 HOME TRADE & SERVICE INDUSTRIES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {others.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.id} delay={idx * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-cream p-7 shadow-xs hover:shadow-md hover:border-teal/50 transition-all flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-white border border-border text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                        <Icon className="size-5" />
                      </span>
                      {ind.badge && (
                        <span className="font-mono text-[10px] font-bold text-ink/60 bg-white border border-border px-2.5 py-1 rounded-full uppercase">
                          {ind.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-xl text-ink">
                        {ind.name}
                      </h4>
                      <p className="mt-1 font-mono text-xs font-semibold text-teal line-clamp-1">
                        {ind.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-base font-extrabold text-ink block">
                        {ind.highlightStat}
                      </span>
                      <span className="font-mono text-[10px] text-ink/50 block">
                        {ind.statLabel}
                      </span>
                    </div>

                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1 font-heading font-bold text-xs text-teal group-hover:text-teal-dark transition-colors"
                    >
                      <span>View Industry</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
