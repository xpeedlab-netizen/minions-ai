import { MessageCircle, GraduationCap, Mail, UserPlus, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: MessageCircle,
    title: "24/7 Chat Widget",
    body: "A friendly assistant on your website that greets visitors, answers questions, and captures lead info while you sleep.",
    preview: true,
  },
  {
    icon: GraduationCap,
    title: "Trained on Your FAQs",
    body: "We feed Pip your pricing sheets, service areas, and common questions. It learns your business specifically.",
  },
  {
    icon: Mail,
    title: "Email Triage",
    body: "Pip reads your support inbox and drafts responses or handles routine scheduling automatically.",
  },
  {
    icon: UserPlus,
    title: "Lead Capture",
    body: 'Turns website visitors into scheduled inquiries by collecting contact details and job info immediately.',
  },
  {
    icon: Globe,
    title: "Clear Communication",
    body: "Provides clear, polite, and instant answers so every caller and web visitor gets immediate help.",
  },
];

export default function PipFeatures() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
            Hardworking Support, No Lunch Breaks
          </h2>
          <p className="mt-4 text-ink/60">
            Pip isn&apos;t just a chatbot. It&apos;s a trained member of your crew who knows your
            business inside and out.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              className={f.preview ? "lg:col-span-2" : undefined}
            >
              <div className="h-full rounded-2xl border border-border bg-cream p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-border text-teal">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.body}</p>
                {f.preview && (
                  <div className="mt-4 space-y-2 rounded-xl border border-border bg-white p-3">
                    <p className="max-w-[85%] rounded-lg rounded-tl-sm bg-cream px-3 py-2 text-xs text-ink/70">
                      Hi! What areas do you service?
                    </p>
                    <p className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-teal px-3 py-2 text-xs text-white">
                      We cover the full metro area! Would you like to check availability or see our service rates?
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
