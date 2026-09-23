import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { savePost, getAllPosts } from "@/lib/blog/storage";
import { BlogPublishPayload } from "@/lib/blog/types";

import { timingSafeEqual } from "crypto";

/**
 * Publishing needs BLOG_API_SECRET set in the environment. There is no
 * fallback: a default secret used to live here, in git, and production
 * accepted it, so anyone who had seen the repo could publish to our blog.
 */
function secretMatches(given: string | null | undefined): boolean {
  const expected = process.env.BLOG_API_SECRET;
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json({
    success: true,
    count: posts.length,
    posts: posts.map(p => ({
      slug: p.slug,
      title: p.title,
      audience: p.audience,
      publishedAt: p.publishedAt,
      url: `/blog/${p.slug}`
    }))
  });
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-blog-api-key") || req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
    if (!secretMatches(apiKey)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Missing or invalid x-blog-api-key header." },
        { status: 401 }
      );
    }

    const body = (await req.json()) as BlogPublishPayload;

    if (!body.title || !body.content) {
      return NextResponse.json(
        { success: false, error: "Validation failed: 'title' and 'content' are required fields." },
        { status: 400 }
      );
    }

    const post = await savePost(body);

    // Revalidate paths for instant visibility
    try {
      revalidatePath("/blog");
      revalidatePath(`/blog/${post.slug}`);
    } catch {
      // Ignore in non-production builds
    }

    return NextResponse.json({
      success: true,
      message: "Blog post published successfully.",
      slug: post.slug,
      url: `/blog/${post.slug}`,
      post: {
        slug: post.slug,
        title: post.title,
        audience: post.audience,
        publishedAt: post.publishedAt,
        readingTimeMinutes: post.readingTimeMinutes,
        assetId: post.assetId
      }
    });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Error in blog publish API:", error);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
