import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PipFinalCta() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl border border-border bg-white text-teal shadow-sm">
          <ShieldCheck className="size-6" />
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          Ready to stop answering &quot;When are you open?&quot; at 10 PM?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" showArrow>
            Get Pip on my team
          </Button>
          <Button href="/live-demo" variant="outline" size="lg">
            Watch Pip in action
          </Button>
        </div>
      </div>
    </section>
  );
}
