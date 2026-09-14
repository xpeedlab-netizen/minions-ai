import type { Metadata } from "next";
import { Anton, Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import PipChatWidget from "@/components/pip-widget/PipChatWidget";
import { PipSessionProvider } from "@/components/pip-widget/usePipSession";
import {
  BUILD_FEE_LOW,
  BUILD_FEE_HIGH,
  BUILD_FEE_COUNT,
} from "@/lib/data/pricing";
import { SETUP_TIME_PROMISE } from "@/lib/data/site-content";

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

/*
 * REPOSITIONED 2026-09-13 (invariant #3). This named pest control operators first and
 * real estate second, back when both were co-primary. Real estate is now the sole
 * primary market, and this string is the site's single most-syndicated sentence — it is
 * the meta description, the OG description and the Twitter description — so it is the
 * highest-leverage line in the repository for the repositioning.
 */
const defaultDescription =
  "Never miss another lead. Minions.AI builds an AI voice agent for real estate teams that answers every call 24/7, checks representation and financing, books the showing, and writes it back to your CRM. Hear it live.";

/*
 * The social preview was /images/roofing-hero-photo.jpg — a roofer, on every link the
 * site has ever been shared as. It is now the mid-showing illustration, which is the
 * strongest real-estate image in the set and already carries the brand's collage style.
 *
 * NOT IDEAL AND KNOWN: this asset is a 1:1 square rendered into a 1200x630 card, so
 * social platforms centre-crop it. A purpose-made 1200x630 OG image is the right fix and
 * is worth doing — but a correctly-cropped real-estate image beats a perfectly-sized
 * roofing one, so this ships now rather than waiting on a new asset.
 */
const OG_IMAGE = "/images/illustrations/pain-mid-showing-v4.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getminions.ai"),
  /*
   * NO `alternates.canonical` HERE — DELIBERATE, DO NOT RE-ADD.
   *
   * A canonical in the root layout is INHERITED, not defaulted: Next.js resolves it for
   * every page that does not set its own, so a hardcoded "https://www.getminions.ai"
   * declared the HOMEPAGE as the canonical URL of /pricing, /faq, /contact, /about,
   * every /industries/* page and every service page. That tells Google those URLs are
   * duplicates of the homepage and asks it to drop them from the index — on a site whose
   * commercial value is precisely those long-tail pages.
   *
   * Self-referencing canonicals now come from each page's own `alternates.canonical`
   * (see `canonical()` in lib/seo.ts), which is relative and resolved against
   * metadataBase above. `/` sets its own in app/page.tsx.
   */
  title: {
    default: "Minions.AI | Never Miss Another Call",
    template: "%s | Minions.AI",
  },
  description: defaultDescription,
  openGraph: {
    title: "Minions.AI | Never Miss Another Call",
    description: defaultDescription,
    url: "https://www.getminions.ai",
    siteName: "Minions.AI",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Minions.AI — an AI voice agent that answers every real estate lead",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minions.AI | Never Miss Another Call",
    description: defaultDescription,
    images: [OG_IMAGE],
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
        "@type": "WebSite",
        "@id": "https://www.getminions.ai/#website",
        "url": "https://www.getminions.ai",
        "name": "Minions.AI",
        "description": defaultDescription,
        "publisher": {
          "@id": "https://www.getminions.ai/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.getminions.ai/#organization",
        "name": "Minions.AI",
        "legalName": "Minions.AI",
        "url": "https://www.getminions.ai",
        "logo": "https://www.getminions.ai/images/minions_ai_logo_primary_transparent.png",
        "description":
          "The 24/7 AI voice agent and speed-to-lead crew for real estate teams and brokerages. Answers calls in under 1.8s, checks representation and financing, books the showing, and writes straight into Follow Up Boss, kvCORE, EspoCRM or Google Calendar.",
        "foundingDate": "2026",
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
          "@type": "AggregateOffer",
          "lowPrice": String(BUILD_FEE_LOW),
          "highPrice": String(BUILD_FEE_HIGH),
          "offerCount": String(BUILD_FEE_COUNT),
          "priceCurrency": "USD",
          "description": `A fixed one-time build fee, Core Crew $${BUILD_FEE_LOW.toLocaleString("en-US")}, Full Crew $${BUILD_FEE_HIGH.toLocaleString("en-US")}, live in ${SETUP_TIME_PROMISE}, with a 30-day tuning window included after go-live.`
        },
        "featureList": [
          "Under 1.8-second live voice answering",
          "24/7 buyer and seller lead qualification",
          "Representation and pre-approval checks before a showing is booked",
          "Native CRM & Google Calendar two-way scheduling",
          "Instant 4-second missed call SMS recovery",
          "Lead routing to the assigned agent"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body pb-16 md:pb-0 overflow-x-hidden">
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
