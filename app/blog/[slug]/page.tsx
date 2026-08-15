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
      title: "Article Not Found | Minions.AI",
    };
  }

  return {
    title: `${post.title} | Minions.AI`,
    description: post.metaDescription || post.hook || post.title,
    openGraph: {
      title: `${post.title} | Minions.AI`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
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
        "url": "https://getminions.ai"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Minions.AI",
        "url": "https://getminions.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://getminions.ai/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://getminions.ai/blog/${post.slug}`
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
          "item": "https://getminions.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog & Field Guides",
          "item": "https://getminions.ai/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://getminions.ai/blog/${post.slug}`
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
    <article className="bg-cream min-h-screen py-12 md:py-16">
      {structuredData.map((schema, sIdx) => (
        <script
          key={sIdx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-teal transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to All Playbooks
          </Link>
        </div>

        {/* Article Container */}
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-12 shadow-sm">
          
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-border">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal/10 text-teal px-3 py-1 text-xs font-mono font-bold tracking-wide uppercase">
              <Tag className="size-3.5" />
              {post.audience} Playbook
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink/60 bg-cream px-3 py-1 rounded-lg border border-border">
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

          {/* Title & Subtitle */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-xl text-ink/80 font-medium leading-relaxed mb-8">
              {post.subtitle}
            </p>
          )}

          {/* Hook Callout Box */}
          {post.hook && (
            <div className="my-8 rounded-2xl border-l-4 border-coral bg-cream p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral mb-2">
                <Sparkles className="size-4" />
                The Field Reality
              </div>
              <p className="font-heading font-semibold text-lg text-ink leading-relaxed">
                &ldquo;{post.hook}&rdquo;
              </p>
            </div>
          )}

          {/* Core Argument Box */}
          {post.core_argument && (
            <div className="my-6 rounded-xl border border-teal/20 bg-teal/5 p-4 flex items-start gap-3">
              <ShieldCheck className="size-5 text-teal shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wide text-teal block mb-1">
                  Core Argument
                </span>
                <p className="text-sm font-medium text-ink/90">
                  {post.core_argument}
                </p>
              </div>
            </div>
          )}

          {/* Article Body Content */}
          <div className="mt-10 border-t border-border pt-8">
            <ArticleContent content={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-cream px-3 py-1 text-xs font-mono font-medium text-teal border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Footer */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="size-11 rounded-full bg-teal flex items-center justify-center text-white font-heading font-extrabold text-base">
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
        </div>

        {/* Live Demo Conversion Banner */}
        <div className="mt-12 rounded-3xl bg-ink text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-lg">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">
            Want to see this in action for your own business?
          </h3>
          <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Call our live test line right now. Hear how our voice agent handles a real emergency service inquiry in under 1.8 seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
    </article>
  );
}
