import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Googlebot",
          "bingbot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.getminions.ai/sitemap.xml",
  };
}
