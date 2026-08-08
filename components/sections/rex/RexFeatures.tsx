import {
  Clock,
  AudioLines,
  CheckCircle2,
  CalendarCheck,
  PhoneForwarded,
  Languages,
  MessageSquareText,
  ShieldOff,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: Clock,
    title: "24/7 Answering",
    body: "Rex never sleeps. Weekend emergencies and midnight leaks get handled instantly.",
  },
  {
    icon: AudioLines,
    title: "Natural Sound",
    body: "Powered by advanced neural voices that breathe, pause, and respond like a human.",
  },
  {
    icon: CheckCircle2,
    title: "Lead Qualification",
    body: "Rex asks the right questions to make sure it's a job worth your technician's time.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Booking",
    body: "Direct integration with ServiceTitan, Housecall Pro, or Google Calendar.",
  },
  {
    icon: PhoneForwarded,
    title: "Warm Transfers",
    body: "Can instantly patch through high-priority emergency calls to your cell.",
  },
  {
    icon: Languages,
    title: "30+ Languages",
    body: "Seamlessly switches languages to support every caller in your community.",
  },
  {
    icon: MessageSquareText,
    title: "Instant Summaries",
    body: "Receive a text and email summary the second Rex hangs up the phone.",
  },
  {
    icon: ShieldOff,
    title: "Spam Filtering",
    body: "Blocks telemarketers and robocalls so you only hear about real business.",
  },
];

export default function RexFeatures() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            What Rex does for your shop
          </h2>
          <p className="mt-4 text-ink/60">
            He&apos;s more than just a voicemail replacement. He&apos;s a fully trained member of
            your dispatch team.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-cream p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-border text-teal">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
