import { CheckCircle2 } from "lucide-react";

const items = ["Fixed price, no lock-in", "Live in 3–6 weeks", "Real humans, fast replies"];

export default function ContactTrustStrip() {
  return (
    <section className="bg-[#F4EDE5] py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2 text-sm text-ink/70">
            <CheckCircle2 className="size-4 text-success" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
