import Image from "next/image";

const steps = [
  {
    n: "STEP 01",
    title: "We learn your business",
    who: "Otto",
    img: "/images/otto-mascot.jpg",
    body: 'Otto analyzes your services, your pricing, and your schedule. We don\'t just "answer"—we learn how you talk and what you offer so we can represent you perfectly.',
  },
  {
    n: "STEP 02",
    title: "We build and train your crew",
    who: "Rex",
    img: "/images/rex-mascot.jpg",
    body: "Rex leads the technical build. We integrate with your CRM (ServiceTitan, Housecall Pro, etc.) so when the AI books a job, it shows up right on your calendar.",
  },
  {
    n: "STEP 03",
    title: "You forward your calls",
    who: "Zip",
    img: "/images/zip-mascot.jpg",
    body: "Zip stands ready. You forward your business line to our dedicated AI number. From that second on, every call is answered in 2 seconds or less, 24/7/365.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance text-center">
          Simple as forwarding a phone number.
        </h2>
        <div className="mt-12 space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 rounded-2xl border border-border bg-cream p-6 sm:p-8`}
            >
              <div className="relative size-24 sm:size-32 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                <Image src={s.img} alt={s.who} fill className="object-cover" />
              </div>
              <div>
                <p className="font-mono text-xs text-teal tracking-wide">{s.n}</p>
                <h3 className="mt-1 font-heading font-bold text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-ink/70 leading-relaxed max-w-xl">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
