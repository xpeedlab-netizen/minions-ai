import { PhoneMissed, Scale, Car, AlertCircle, ArrowDownRight } from "lucide-react";

const leaks = [
  {
    icon: PhoneMissed,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The 90-Second Zillow Dropoff",
    loss: "$180k+ / Year Lost",
  },
  {
    icon: Scale,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "Post-NAR Exclusivity Trap",
    loss: "$5,000+ MLS Penalties",
  },
  {
    icon: Car,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "Weekend Showing Burnout",
    loss: "$120k+ / Year Lost",
  },
];

export default function RealEstateProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The 3 Costliest Revenue Leaks</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Missed calls cost small agencies hundreds of thousands.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Visual: Lead Decay Chart */}
          <div className="relative w-full aspect-square max-h-[400px] rounded-[32px] border border-border/80 bg-white p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-mono text-sm font-bold text-ink/70 uppercase tracking-wide">Lead Conversion Probability</h3>
              <span className="bg-coral/10 text-coral-text px-2 py-1 rounded-md text-[10px] font-bold font-mono">78% Rule</span>
            </div>
            
            <div className="flex-1 relative border-l-2 border-b-2 border-border/50">
              {/* Chart Line (SVG) */}
              <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path 
                  d="M 0,10 C 20,10 30,80 100,95" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  className="text-coral-text drop-shadow-[0_4px_8px_rgba(255,107,107,0.4)]"
                />
                <circle cx="0" cy="10" r="3" className="fill-coral-text" />
                <circle cx="25" cy="45" r="3" className="fill-coral-text" />
                <circle cx="100" cy="95" r="3" className="fill-coral-text" />
              </svg>
              
              {/* Annotations */}
              <div className="absolute top-[5%] left-[2%] flex items-center gap-1.5 text-success font-mono text-[10px] font-bold bg-success/10 px-2 py-1 rounded-full border border-success/20">
                <span>Ring 1: Alex Answers</span>
              </div>
              
              <div className="absolute top-[40%] left-[28%] flex items-center gap-1.5 text-coral-text font-mono text-[10px] font-bold">
                <ArrowDownRight className="size-3" />
                <span>90 Sec: Zillow Dropoff</span>
              </div>
              
              <div className="absolute bottom-[-20px] left-0 font-mono text-[10px] text-ink/40">0s</div>
              <div className="absolute bottom-[-20px] left-[25%] font-mono text-[10px] text-ink/40">90s</div>
              <div className="absolute bottom-[-20px] right-0 font-mono text-[10px] text-ink/40">5m</div>
            </div>
          </div>

          {/* List: Condensed Leaks */}
          <div className="space-y-4">
            {leaks.map((leak, i) => (
              <div key={leak.title} className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-border/80 shadow-sm hover:shadow-md hover:border-teal/40 transition-all group">
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl border ${leak.iconColor} group-hover:scale-110 transition-transform`}>
                  <leak.icon className="size-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-ink">{leak.title}</h3>
                  <p className="font-mono text-xs font-semibold text-coral-text mt-1">{leak.loss}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
