import type { Metadata } from "next";
import { Anton, Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import PipChatWidget from "@/components/pip-widget/PipChatWidget";
import { PipSessionProvider } from "@/components/pip-widget/usePipSession";

/*
 * Two-tier heading system.
 *
 * Anton is a single-weight condensed display face — enormous impact at hero and
 * section-headline sizes, but it degrades badly below ~24px, and the site carries
 * ~190 h3/h4s (crew names, industry card titles, step labels) that must stay
 * readable. So Anton is scoped to display type only (`font-display`, applied by
 * the h1s and by SectionHeading's h2 branch) and Archivo carries every other
 * heading. Applying one condensed face globally was the obvious-looking move and
 * would have wrecked the small headings.
 */
const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const defaultDescription =
  "Never miss another call. Minions.AI builds an AI crew for pest control operators and real estate agencies that answers your phone 24/7, texts back missed leads in seconds, and books straight to your calendar. Hear it live.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getminions.ai"),
  title: {
    default: "Minions.AI — Never Miss Another Call",
    template: "%s | Minions.AI",
  },
  description: defaultDescription,
  openGraph: {
    title: "Minions.AI — Never Miss Another Call",
    description: defaultDescription,
    url: "https://www.getminions.ai",
    siteName: "Minions.AI",
    images: [
      {
        url: "/images/roofing-hero-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Minions.AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minions.AI — Never Miss Another Call",
    description: defaultDescription,
    images: ["/images/roofing-hero-photo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.getminions.ai/#organization",
        "name": "Minions.AI",
        "legalName": "Minions.AI",
        "url": "https://www.getminions.ai",
        "logo": "https://www.getminions.ai/images/minions_ai_logo_primary_transparent.png",
        "description":
          "The 24/7 AI front office and speed-to-lead crew for pest control operators, real estate agencies, and home service businesses. Answers calls in under 1.8s, qualifies the lead, and books straight into FieldRoutes, PestPac, GorillaDesk, Follow Up Boss, ServiceTitan, Jobber, or Housecall Pro.",
        "foundingDate": "2026",
        "founders": [
          {
            "@type": "Person",
            "name": "Rakib",
            "jobTitle": "Co-Founder & Operations Architecture",
            "sameAs": "https://www.linkedin.com/in/rakibs"
          },
          {
            "@type": "Person",
            "name": "Parvej",
            "jobTitle": "Co-Founder & AI Voice Engineering",
            "sameAs": "https://www.linkedin.com/in/parvej"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-346-626-4720",
          "email": "hello@getminions.ai",
          "contactType": "customer support and sales",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/company/getminions-ai",
          "https://x.com/getminions_ai",
          "https://github.com/xpeedlab-netizen/minions-ai",
          "https://www.youtube.com/@getminions-ai",
          "https://www.getminions.ai/llms.txt"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.getminions.ai/#software",
        "name": "getminions.ai",
        "operatingSystem": "Cloud / Voice SIP",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Setup in ~7 days with a 30-day risk-free money-back guarantee."
        },
        "featureList": [
          "Under 1.8-second live voice answering",
          "24/7/365 emergency dispatching",
          "Native CRM & Google Calendar two-way scheduling",
          "Instant 4-second missed call SMS recovery",
          "Noise-filtering trained on real job sites and power tools"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* One provider above every widget: inline mounts inside `children` and
            the floating mount below share a single message list. */}
        <PipSessionProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <MobileStickyBar />
          <PipChatWidget variant="floating" />
        </PipSessionProvider>
      </body>
    </html>
  );
}
