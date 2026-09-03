import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/storage";

const BASE_URL = "https://www.getminions.ai";

// Stable build/release baseline dates to prevent search engines from ignoring dynamic lastmod
const SITE_RELEASE_DATE = new Date("2026-09-01T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core conversion & flagship pages
    {
      url: BASE_URL,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/live-demo`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // AEO & E-E-A-T trust anchors
    {
      url: `${BASE_URL}/faq`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Generative Data Assets (GEO / Research Citations)
    {
      url: `${BASE_URL}/reports/speed-to-lead-2026`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/speed-to-lead`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Core Solutions
    {
      url: `${BASE_URL}/ai-voice-agent`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/crm-automation`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/back-office-automation`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/customer-support-ai`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Co-Primary Flagship Verticals (Equal Weight: Real Estate & Pest Control)
    {
      url: `${BASE_URL}/industries/real-estate`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries/pest-control`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Supported Secondary Verticals
    {
      url: `${BASE_URL}/industries/hvac`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/plumbing`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/roofing`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/electrical`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Blog Hub
    {
      url: `${BASE_URL}/blog`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "daily",
      priority: 0.8,
    },

    // Compliance & Legal
    {
      url: `${BASE_URL}/privacy`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/ai-notice`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...blogEntries];
}
