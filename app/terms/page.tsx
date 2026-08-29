import type { Metadata } from "next";
import LegalLayout from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Minions.AI services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="August 2026">
      <div>
        <h2>Who may use our services</h2>
        <p>
          Our services are intended for businesses and individuals authorized to act on behalf of
          a business. By using our site or engaging our services, you confirm you have that
          authority.
        </p>
      </div>

      <div>
        <h2>Description of services</h2>
        <p>
          Minions.AI provides done-for-you AI automation services — including AI voice answering,
          missed-call text-back, customer support automation, CRM automation, and back-office
          automation. We are not a telecom carrier; we build on top of third-party voice, CRM, and
          telephony platforms.
        </p>
      </div>

      <div>
        <h2>Client responsibilities</h2>
        <p>
          You agree to use our services lawfully, to provide accurate information about your
          business for us to build your AI agent, and to obtain any consent required for outbound
          calling or messaging campaigns you ask us to run.
        </p>
        <p>
          You are responsible for ensuring that any outbound calling or messaging campaigns you
          ask us to run comply with the Telephone Consumer Protection Act, applicable state laws,
          and Do-Not-Call requirements, including obtaining any consent required from the people
          contacted.
        </p>
      </div>

      <div>
        <h2>Fees, billing and cancellation</h2>
        <p>
          Builds are quoted as a fixed one-time fee for an agreed scope, shown on our pricing
          page. The fee is payable across three milestones — 40% on signature, 40% when we hand
          you the working system for testing, and 20% at go-live — and does not change without
          your written approval. Either party may pause a project in writing, in which case work
          already delivered is invoiced at the last completed milestone and nothing beyond it.
        </p>
        <p>
          Third-party running costs are billed to you directly by the providers concerned and are
          not part of the build fee: voice platform usage charged per minute of call time, phone
          number rental and carrier charges, SMS and email sending credits, your automation
          platform subscription, and your CRM subscription if you do not already hold one.
        </p>
        <p>
          Ongoing care after go-live is optional, is charged monthly, and may be cancelled on 30
          days&apos; notice. Accounts, workflows and phone numbers are created in your name and
          remain yours if we part ways.
        </p>
      </div>

      <div>
        <h2>Acceptable use</h2>
        <p>
          You may not use our services for unlawful, deceptive, or harmful purposes, or in a way
          that violates the rights of others.
        </p>
      </div>

      <div>
        <h2>Third-party platforms</h2>
        <p>
          Our services depend on third-party platforms (including voice, CRM, and telephony
          providers). We are not responsible for outages or changes made by those providers, but
          we&apos;ll work to minimize disruption to your service.
        </p>
      </div>

      <div>
        <h2>No guarantee of results</h2>
        <p>
          We work hard to improve your call handling and lead response, but we do not guarantee
          specific revenue, booking or conversion results, as these depend on factors outside our
          control.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Minions.AI is not liable for indirect,
          incidental, or consequential damages arising from your use of our services.
        </p>
      </div>

      <div>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify Minions.AI against claims arising from your misuse of the service
          or your violation of these terms, including in connection with outbound calling or
          messaging you direct us to perform.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p>
          Minions.AI retains ownership of our platform, brand, and character designs. You retain
          ownership of your own business data and content.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws applicable to Minions.AI&apos; place of business.</p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>We may update these terms from time to time and will post the current version here.</p>
      </div>
    </LegalLayout>
  );
}
