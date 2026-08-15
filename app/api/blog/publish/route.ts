import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { savePost, getAllPosts } from "@/lib/blog/storage";
import { BlogPublishPayload } from "@/lib/blog/types";

const DEFAULT_SECRET = "minions-publish-secret-2026";

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
    const expectedKey = process.env.BLOG_API_SECRET || DEFAULT_SECRET;

    if (!apiKey || apiKey !== expectedKey) {
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
    } catch (e) {
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
