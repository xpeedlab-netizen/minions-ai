import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/storage";
import { ArrowRight, BookOpen, Clock, Tag, Sparkles, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

export const metadata: Metadata = {
  title: "Blog & Field Guide | Minions.AI",
  description: "Operational insights, AI voice dispatch benchmarks, and multi-agent systems playbooks for trade contractors and AI automation engineers.",
  openGraph: {
    title: "Blog & Field Guide | Minions.AI",
    description: "Operational playbooks for HVAC, plumbing, and pest control contractors, plus multi-agent system blueprints.",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="bg-[#faf9f6] min-h-screen py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-teal mb-4">
            <Sparkles className="size-3.5" />
            Field Guides & Operational Insights
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight mb-6">
            The Minions<span className="text-teal">.AI</span> Dispatch
          </h1>
          <p className="text-lg sm:text-xl text-ink/75 leading-relaxed">
            Real-world breakdown of missed call economics, zero-friction AI voice dispatching, and deterministic multi-agent systems that never drop the ball.
          </p>
        </div>

        {/* Featured Post Card (High-Impact Split Layout) */}
        {featuredPost && (
          <div className="mb-16">
            <div className="group relative rounded-3xl border border-border/80 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Featured Thumbnail */}
                {featuredPost.featured_image ? (
                  <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/80 bg-ink shadow-md">
                    <img
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      className="w-full aspect-[16/9] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                  </div>
                ) : (
                  <div className="lg:col-span-6 aspect-[16/9] rounded-2xl bg-ink/5 border border-border flex items-center justify-center text-ink/40 font-mono text-sm">
                    No Thumbnail
                  </div>
                )}

                {/* Featured Content Info */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal text-white px-3 py-1 text-xs font-mono font-bold tracking-wide uppercase">
                        Featured Article
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-ink/60 bg-[#faf9f6] px-2.5 py-1 rounded-full border border-border/80">
                        <Clock className="size-3 text-teal" />
                        {featuredPost.readingTimeMinutes} min read
                      </span>
                      <span className="text-xs font-mono text-ink/50">
                        {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="block">
                      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink group-hover:text-teal transition-colors mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    {featuredPost.hook && (
                      <div className="border-l-4 border-coral bg-[#faf9f6] p-4 rounded-r-xl mb-6 shadow-xs">
                        <p className="text-ink/90 italic text-sm sm:text-base leading-relaxed">
                          &ldquo;{featuredPost.hook}&rdquo;
                        </p>
                      </div>
                    )}

                    <p className="text-ink/75 leading-relaxed mb-6 line-clamp-2 text-sm sm:text-base">
                      {featuredPost.core_argument || featuredPost.metaDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-teal/10 flex items-center justify-center text-teal font-heading font-bold text-sm">
                        M
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{featuredPost.author.name}</p>
                        <p className="text-xs text-ink/60 font-mono">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark font-heading group/link"
                    >
                      Read Full Article
                      <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/80">
            <h3 className="font-heading text-xl font-bold text-ink flex items-center gap-2">
              <BookOpen className="size-5 text-teal" />
              Latest Playbooks & Analysis
            </h3>
            <span className="text-xs font-mono text-ink/50">{posts.length} articles published</span>
          </div>

          {remainingPosts.length === 0 && !featuredPost && (
            <div className="text-center py-16 bg-white rounded-2xl border border-border p-8">
              <BookOpen className="size-12 text-ink/30 mx-auto mb-4" />
              <h4 className="font-heading text-lg font-bold text-ink mb-2">No articles published yet</h4>
              <p className="text-ink/60 text-sm">New articles generated by the Minions.AI pipeline will appear here automatically.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-teal/40 transition-all duration-300"
              >
                <div>
                  {/* Card Thumbnail Stage */}
                  {post.featured_image ? (
                    <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/9] bg-ink">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </Link>
                  ) : (
                    <div className="aspect-[16/9] bg-ink/5 border-b border-border flex items-center justify-center text-ink/30 font-mono text-xs">
                      Editorial Thumbnail
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 text-teal px-2.5 py-0.5 text-xs font-mono font-medium border border-teal/20">
                        <Tag className="size-3 text-teal" />
                        {post.audience}
                      </span>
                      <span className="text-xs font-mono text-ink/50 flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.readingTimeMinutes} min
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block">
                      <h4 className="font-heading text-lg font-bold text-ink group-hover:text-teal transition-colors mb-2.5 line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </Link>

                    <p className="text-sm text-ink/70 leading-relaxed line-clamp-2 mb-4">
                      {post.hook || post.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-ink/50">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal group-hover:translate-x-0.5 transition-transform"
                  >
                    Read Playbook ➔
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-ink/20">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 size-40 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 size-40 bg-coral/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-4">
              Never Miss a $3,000 Emergency Job Again
            </h3>
            <p className="text-cream/80 text-base mb-8 leading-relaxed">
              Test Minions.AI live on your phone right now. No software download, no signup, no credit card. Just dial and hear how it handles an urgent caller.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${SITE_PHONE_NUMBER.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-coral hover:bg-coral-text text-white px-6 py-3.5 font-heading font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="size-4" />
                Call Live Demo: {SITE_PHONE_NUMBER}
              </a>
              <Button href="/how-it-works" variant="secondary">
                See How It Works
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
