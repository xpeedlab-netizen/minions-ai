import { TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HvacGrowthBanner() {
  return (
    <section className="bg-teal-dark py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
            <TrendingUp className="size-5" />
          </span>
          <div>
            <h2 className="font-heading font-bold text-white text-xl">
              Efficiency is the new growth.
            </h2>
            <p className="text-sm text-white/60">
              Scale your HVAC business without adding overhead.
            </p>
          </div>
        </div>
        <Button href="/contact" size="lg">
          Get My ROI Audit
        </Button>
      </div>
    </section>
  );
}
