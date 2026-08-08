import type { Metadata } from "next";
import LegalLayout from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "AI & Call Recording Notice",
  description: "How Minions.AI uses AI on calls and chats, and how we handle call recording.",
};

export default function AiNoticePage() {
  return (
    <LegalLayout title="AI & Call Recording Notice" updated="August 2026">
      <div>
        <p>
          Some calls and chats on this site, and for our clients, are handled by an automated AI
          assistant and may be recorded and transcribed in order to provide and improve the
          service. If you&apos;d prefer to speak with a person, just say so, or call the number
          listed on our{" "}
          <a href="/contact" className="text-teal underline">
            contact page
          </a>
          . To request deletion of a recording, contact{" "}
          <a href="mailto:hello@getminions.ai" className="text-teal underline">
            hello@getminions.ai
          </a>
          .
        </p>
      </div>

      <div>
        <h2>What every call opens with</h2>
        <p>
          Every AI-handled call we build opens with a short, friendly notice, along the lines of:
        </p>
        <p className="rounded-xl border border-border bg-cream p-4 font-mono text-sm text-ink/70">
          &ldquo;Hi, thanks for calling [Business]. Just so you know, this call may be recorded,
          and you&apos;re speaking with an automated assistant. How can I help you today?&rdquo;
        </p>
      </div>

      <div>
        <h2>Why we disclose on every call</h2>
        <p>
          Two-party consent states — including California, Connecticut, Delaware, Florida,
          Illinois, Maryland, Massachusetts, Montana, Nevada, New Hampshire, Oregon, Pennsylvania
          and Washington — require both parties to consent to a call being recorded. Rather than
          track which state a caller is in, we disclose recording at the start of every call,
          everywhere.
        </p>
      </div>

      <div>
        <h2>Inbound vs. outbound</h2>
        <p>
          Inbound answering — where a customer calls you — is low-risk. Outbound calling or
          texting is where most of the legal exposure lives. If a client wants outbound campaigns,
          we set up proper consent and Do-Not-Call handling with them first.
        </p>
      </div>

      <div>
        <h2>How we use recordings</h2>
        <p>
          Recordings and transcripts are used to provide the service (booking, summaries, and
          follow-up) and to improve the accuracy of the AI agent. They are stored securely and are
          not sold or used for unrelated marketing.
        </p>
      </div>
    </LegalLayout>
  );
}
