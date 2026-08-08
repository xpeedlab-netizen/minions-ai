import type { Metadata } from "next";
import LegalLayout from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Minions.AI collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <div>
        <p>
          Minions.AI helps businesses automate calls and messages. This policy explains what
          information we collect through our website and demos, how we use it, and what rights
          you have. We collect only what we need to respond to you and run our service. If you
          use our voice or chat demo, we may process the phone number you provide and a recording
          or transcript of the interaction in order to operate and improve the demo. We do not
          sell your information. We use service providers including our AI voice platform, CRM,
          website host and analytics tools to deliver the service.
        </p>
      </div>

      <div>
        <h2>Who we are</h2>
        <p>
          Minions.AI is an independent automation services company. You can reach us at{" "}
          <a href="mailto:hello@getminions.ai" className="text-teal underline">
            hello@getminions.ai
          </a>{" "}
          with any privacy question or request.
        </p>
      </div>

      <div>
        <h2>What we collect</h2>
        <p>
          Contact form submissions (name, phone or email, and your message); demo phone numbers
          you provide to test our voice agent; call recordings and transcripts from demo and
          client calls; and standard analytics data collected via cookies (GA4 and Microsoft
          Clarity), such as pages visited and general device information.
        </p>
      </div>

      <div>
        <h2>Why we collect it</h2>
        <p>
          To respond to your inquiries, operate the live demo, improve our AI agents, and
          understand how visitors use our site so we can make it more useful.
        </p>
      </div>

      <div>
        <h2>Legal basis (UK/EU visitors)</h2>
        <p>
          Where GDPR or UK GDPR applies, we process your data based on our legitimate interest in
          responding to inquiries and operating our service, or on your consent where you submit a
          form or use the demo.
        </p>
      </div>

      <div>
        <h2>Who we share it with</h2>
        <p>
          We use service providers to deliver the service, including our AI voice platform, CRM
          (GoHighLevel), website hosting, analytics tools, and booking software. These providers
          only receive the data needed to perform their function and are not permitted to use it
          for their own marketing.
        </p>
      </div>

      <div>
        <h2>International transfers</h2>
        <p>
          Your data may be processed in the United States and in Bangladesh, where our team is
          based. We take reasonable steps to protect data wherever it is processed.
        </p>
      </div>

      <div>
        <h2>Retention</h2>
        <p>
          We keep contact and demo data only as long as needed to respond to you, deliver the
          service, or meet legal requirements, and delete it when no longer needed.
        </p>
      </div>

      <div>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, or delete your
          information, or to opt out of certain uses. California residents have rights under
          CCPA/CPRA. To exercise any of these rights, email{" "}
          <a href="mailto:hello@getminions.ai" className="text-teal underline">
            hello@getminions.ai
          </a>
          .
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          We use cookies for analytics (GA4, Microsoft Clarity). You can decline non-essential
          cookies through your browser settings or our cookie banner where shown.
        </p>
      </div>

      <div>
        <h2>Children</h2>
        <p>Our site and services are not directed to anyone under 18.</p>
      </div>

      <div>
        <h2>Complaints</h2>
        <p>
          If you have a concern about how we handle your data, contact us first at{" "}
          <a href="mailto:hello@getminions.ai" className="text-teal underline">
            hello@getminions.ai
          </a>
          . UK/EU residents may also lodge a complaint with their local data protection authority.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We&apos;ll post the updated version here
          with a new &ldquo;last updated&rdquo; date.
        </p>
      </div>
    </LegalLayout>
  );
}
