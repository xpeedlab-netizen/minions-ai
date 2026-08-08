import Button from "@/components/ui/Button";
import HeroAnimation from "@/components/sections/home/HeroAnimation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white">
            AI for blue-collar businesses
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Never miss another call. Never lose another job.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            Your phone rings while you&apos;re on a roof, under a sink, or asleep. Don&apos;t let
            your next $5,000 job go to a competitor. Meet the AI crew that answers, schedules, and
            closes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear the AI answer a call
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See pricing
            </Button>
          </div>
        </div>

        <div className="relative">
          <HeroAnimation />
          <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-0 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-lg">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-ink/50">Current status</p>
              <p className="text-sm font-heading font-bold text-ink">Rex is handling 4 calls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
