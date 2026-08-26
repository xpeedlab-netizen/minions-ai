import { PhoneMissed, Scale, Car, AlertCircle, ArrowDownRight, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const leaks = [
  {
    icon: PhoneMissed,
    iconColor: "text-coral-text bg-coral/10 border-coral/20",
    title: "The 90-Second Zillow Dropoff",
    loss: "$180k+ / Year Lost",
  },
  {
    icon: Scale,
    iconColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    title: "Post-NAR Exclusivity Trap",
    loss: "$5,000+ MLS Penalties",
  },
  {
    icon: Car,
    iconColor: "text-teal bg-teal/10 border-teal/20",
    title: "Weekend Showing Burnout",
    loss: "$120k+ / Year Lost",
  },
];

export default function RealEstateProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/20 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider shadow-sm">
            <AlertCircle className="size-3.5" />
            <span>The 3 Costliest Revenue Leaks</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Missed calls cost small agencies hundreds of thousands.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Visual: Lead Decay Chart */}
          <div className="relative w-full aspect-[4/3] rounded-[32px] border border-border bg-white p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6 z-10">
              <h3 className="font-heading text-base font-bold text-ink">Lead Conversion Probability</h3>
              <span className="bg-coral/10 text-coral-text px-2.5 py-1 rounded-md text-[10px] font-bold font-mono border border-coral/20">78% Rule</span>
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 relative mt-4 border-l border-b border-border/60">
              
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                <div className="w-full border-t border-dashed border-border/60 h-0" />
                <div className="w-full border-t border-dashed border-border/60 h-0" />
                <div className="w-full border-t border-dashed border-border/60 h-0" />
              </div>

              {/* The Line (SVG) - Stretches perfectly to container */}
              <svg className="absolute inset-0 h-full w-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="30%" stopColor="#FF6B6B" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <path 
                  d="M 0 10 C 15 10, 20 60, 30 60 C 60 60, 80 90, 100 90 L 100 100 L 0 100 Z" 
                  fill="url(#areaGrad)" 
                />
                {/* Stroke */}
                <path 
                  d="M 0 10 C 15 10, 20 60, 30 60 C 60 60, 80 90, 100 90" 
                  fill="none" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
              </svg>
              
              {/* HTML Dots & Labels (Absolute positioned so they NEVER distort) */}
              
              {/* Point 1: 0s (Ring 1) */}
              <div className="absolute top-[10%] left-[0%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative size-4 rounded-full bg-teal shadow-[0_0_15px_rgba(15,118,110,0.5)] border-2 border-white z-20" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white border border-border/80 px-2.5 py-1.5 rounded-lg shadow-sm z-30 flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-teal animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-ink">Ring 1: Alex Answers</span>
                </div>
              </div>
              
              {/* Point 2: 90s Dropoff */}
              <div className="absolute top-[60%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative size-4 rounded-full bg-coral-text shadow-[0_0_15px_rgba(255,107,107,0.5)] border-2 border-white z-20" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white border border-coral/20 px-2.5 py-1.5 rounded-lg shadow-sm z-30 flex items-center gap-1.5">
                  <ArrowDownRight className="size-3 text-coral-text" />
                  <span className="font-mono text-[11px] font-bold text-coral-text">90 Sec: Dropoff</span>
                </div>
              </div>

              {/* Point 3: 5m */}
              <div className="absolute top-[90%] left-[100%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative size-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] border-2 border-white z-20" />
              </div>
              
              {/* X-Axis Labels */}
              <div className="absolute -bottom-6 left-0 font-mono text-[10px] text-ink/40 font-medium">0s</div>
              <div className="absolute -bottom-6 left-[30%] -translate-x-1/2 font-mono text-[10px] text-ink/40 font-medium">90s</div>
              <div className="absolute -bottom-6 right-0 font-mono text-[10px] text-ink/40 font-medium">5m</div>
            </div>
          </div>

          {/* List: Condensed Leaks */}
          <div className="space-y-4">
            {leaks.map((leak, i) => (
              <Reveal key={leak.title} delay={i * 0.1}>
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-border/60 shadow-xs hover:shadow-md hover:border-teal/30 transition-all group">
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${leak.iconColor} group-hover:scale-110 transition-transform`}>
                    <leak.icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-ink">{leak.title}</h3>
                    <p className="font-mono text-xs font-semibold text-coral-text mt-1">{leak.loss}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
