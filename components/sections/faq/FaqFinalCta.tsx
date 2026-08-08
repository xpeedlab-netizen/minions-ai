import { Bot } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FaqFinalCta() {
  return (
    <section className="bg-[#efe6da] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border-2 border-coral text-coral">
          <Bot className="size-6" />
        </div>
        <h2 className="mt-6 font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg text-ink/70 leading-relaxed">
          No problem. We&apos;re humans, and we like talking to other humans. Let&apos;s find 15
          minutes to see if the crew is right for your shop.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a 15-minute call
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Email Support
          </Button>
        </div>
      </div>
    </section>
  );
}
