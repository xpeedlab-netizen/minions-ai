import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog/storage";
import { ArrowLeft, Clock, Calendar, Tag, Phone, ShieldCheck, Sparkles, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";
import ArticleContent from "@/components/blog/ArticleContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const ogImage = post.og_image || post.featured_image;

  return {
    title: post.title,
    description: post.metaDescription || post.hook || post.title,
    alternates: {
      canonical: `https://www.getminions.ai/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.getminions.ai/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription || post.hook,
      "datePublished": post.publishedAt,
      "inLanguage": "en-US",
      "articleSection": post.pillar || "Field Operations",
      "keywords": post.tags ? post.tags.join(", ") : "AI Dispatch, Trade Contractors, Speed to Lead",
      "author": {
        "@type": "Organization",
        "name": post.author.name,
        "url": "https://www.getminions.ai"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Minions.AI",
        "url": "https://www.getminions.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.getminions.ai/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.getminions.ai/blog/${post.slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.getminions.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog & Field Guides",
          "item": "https://www.getminions.ai/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.getminions.ai/blog/${post.slug}`
        }
      ]
    },
    ...(post.core_argument
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": post.title,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${post.core_argument} ${post.hook ? `Field context: ${post.hook}` : ""}`
                }
              }
            ]
          }
        ]
      : [])
  ];

  return (
    <article className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      {structuredData.map((schema, sIdx) => (
        <script
          key={sIdx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Main Wide Container */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-teal transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to All Playbooks
          </Link>
        </div>

        {/* Editorial Header Section (Wide & Expansive) */}
        <header className="max-w-3xl mx-auto text-left mb-10">
          {/* Category & Read Time Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 text-teal px-3.5 py-1 text-xs font-mono font-bold tracking-wide uppercase border border-teal/20">
              <Tag className="size-3.5" />
              {post.audience} Playbook
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink/60 bg-white px-3 py-1 rounded-full border border-border/80 shadow-xs">
              <Clock className="size-3.5 text-teal" />
              {post.readingTimeMinutes} min read
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink/50">
              <Calendar className="size-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
          </div>

          {/* Grand H1 Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.12] mb-6">
            {post.title}
          </h1>

          {/* Field Reality Hook Callout */}
          {post.hook && (
            <div className="my-6 rounded-2xl border-l-4 border-coral bg-white p-6 shadow-xs border border-border/60">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral mb-2">
                <Sparkles className="size-4" />
                The Field Reality
              </div>
              <p className="font-heading font-semibold text-lg sm:text-xl text-ink leading-snug">
                &ldquo;{post.hook}&rdquo;
              </p>
            </div>
          )}

          {/* Core Argument Box */}
          {post.core_argument && (
            <div className="my-4 rounded-xl border border-teal/20 bg-teal/5 p-4 flex items-start gap-3">
              <ShieldCheck className="size-5 text-teal shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wide text-teal block mb-1">
                  Core Argument
                </span>
                <p className="text-sm sm:text-base font-medium text-ink/90">
                  {post.core_argument}
                </p>
              </div>
            </div>
          )}
        </header>

        {/* Article Body Section (Ergonomic 780px Measure) */}
        <div className="max-w-3xl mx-auto">
          <div className="pt-2">
            <ArticleContent content={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-14 pt-6 border-t border-border/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white px-3 py-1 text-xs font-mono font-medium text-teal border border-border/80 shadow-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Footer */}
          <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="size-12 rounded-full bg-teal flex items-center justify-center text-white font-heading font-extrabold text-lg shadow-sm">
                M
              </div>
              <div>
                <p className="font-heading font-bold text-base text-ink">{post.author.name}</p>
                <p className="text-xs text-ink/60 font-mono">{post.author.role}</p>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-xs font-semibold text-teal hover:text-teal-dark font-heading inline-flex items-center gap-1"
            >
              Browse more playbooks ➔
            </Link>
          </div>

          {/* Live Demo Conversion Card */}
          <div className="mt-14 rounded-3xl bg-ink text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-ink/20">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 size-40 bg-coral/20 rounded-full blur-3xl pointer-events-none" />

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3 relative z-10">
              Want to see this in action for your own business?
            </h3>
            <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
              Call our live test line right now. Hear how our voice agent handles a real emergency service inquiry in under 1.8 seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href={`tel:${SITE_PHONE_NUMBER.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-coral hover:bg-coral-text text-white px-6 py-3.5 font-heading font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="size-4" />
                Dial Live AI Demo: {SITE_PHONE_NUMBER}
              </a>
              <Button href="/pricing" variant="secondary">
                View Simple Pricing
              </Button>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
