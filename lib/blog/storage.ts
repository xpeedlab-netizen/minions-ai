import fs from "fs";
import path from "path";
import { BlogPost, BlogPublishPayload } from "./types";
import { getSupabaseClient } from "./supabase";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function ensureDirectoryExists() {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Fallback file readers
function getPostsFromFiles(): BlogPost[] {
  ensureDirectoryExists();
  try {
    const fileNames = fs.readdirSync(BLOG_CONTENT_DIR);
    const posts: BlogPost[] = [];

    for (const fileName of fileNames) {
      if (fileName.endsWith(".json")) {
        const fullPath = path.join(BLOG_CONTENT_DIR, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        try {
          const post = JSON.parse(fileContents) as BlogPost;
          posts.push(post);
        } catch (e) {
          console.error(`Error parsing blog post file ${fileName}:`, e);
        }
      }
    }

    return posts.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

function getPostBySlugFromFile(slug: string): BlogPost | null {
  ensureDirectoryExists();
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents) as BlogPost;
  } catch (e) {
    console.error(`Error reading post with slug "${slug}":`, e);
    return null;
  }
}

function savePostToFile(post: BlogPost): void {
  ensureDirectoryExists();
  const filePath = path.join(BLOG_CONTENT_DIR, `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf8");
}

function extractFeaturedImage(content?: string, explicitImg?: string): string | undefined {
  if (explicitImg && explicitImg.startsWith("http")) return explicitImg;
  if (!content) return undefined;
  const match = content.match(/!\[.*?\]\((https?:\/\/[^\s\)]+)\)/);
  if (match) return match[1];
  const urlMatch = content.match(/(https?:\/\/[^\s\)]+(?:aliyuncs\.com|supabase\.co)[^\s\)]+\.(?:png|jpg|jpeg|webp)[^\s\)]*)/i);
  return urlMatch ? urlMatch[1] : undefined;
}

// Public Dual-Mode Database/File API
export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("published_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map((row: any) => {
          const img = extractFeaturedImage(row.content, row.featured_image);
          return {
            slug: row.slug,
            title: row.title,
            subtitle: row.subtitle,
            hook: row.hook,
            core_argument: row.core_argument,
            content: row.content,
            audience: row.audience,
            pillar: row.pillar,
            author: typeof row.author === "string" ? JSON.parse(row.author) : row.author || { name: "Minions.AI Team", role: "Operations & AI Dispatch" },
            publishedAt: row.published_at,
            readingTimeMinutes: row.reading_time_minutes || calculateReadingTime(row.content || ""),
            tags: row.tags || [row.audience, "Operations"],
            metaDescription: row.meta_description || (row.hook ? row.hook.slice(0, 160) : row.title),
            featured_image: img,
            og_image: row.og_image || img,
            assetId: row.asset_id,
            docUrl: row.doc_url,
          };
        });
      }
    } catch (e) {
      console.error("Failed to fetch posts from Supabase database, falling back to local files:", e);
    }
  }

  // Fallback to local files
  return getPostsFromFiles();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) {
        return {
          slug: data.slug,
          title: data.title,
          subtitle: data.subtitle,
          hook: data.hook,
          core_argument: data.core_argument,
          content: data.content,
          audience: data.audience,
          pillar: data.pillar,
          author: typeof data.author === "string" ? JSON.parse(data.author) : data.author || { name: "Minions.AI Team", role: "Operations & AI Dispatch" },
          publishedAt: data.published_at,
          readingTimeMinutes: data.reading_time_minutes || calculateReadingTime(data.content),
          tags: data.tags || [data.audience, "Operations"],
          metaDescription: data.meta_description || (data.hook ? data.hook.slice(0, 160) : data.title),
          featured_image: data.featured_image,
          og_image: data.og_image,
          assetId: data.asset_id,
          docUrl: data.doc_url,
        };
      }
    } catch (e) {
      console.error(`Failed to fetch post "${slug}" from Supabase database, falling back to local files:`, e);
    }
  }

  return getPostBySlugFromFile(slug);
}

export async function savePost(payload: BlogPublishPayload): Promise<BlogPost> {
  const slug = payload.slug || slugify(payload.title);
  const now = new Date().toISOString();
  const readingTime = calculateReadingTime(payload.content);

  const cleanDescription = (payload.hook || payload.core_argument || payload.content.slice(0, 160))
    .replace(/\n/g, " ")
    .slice(0, 160)
    .trim();

  const post: BlogPost = {
    slug,
    title: payload.title,
    subtitle: payload.subtitle,
    hook: payload.hook,
    core_argument: payload.core_argument,
    content: payload.content,
    audience: payload.audience || "ICP",
    pillar: payload.pillar || "Contractor Realities",
    author: {
      name: "Minions.AI Team",
      role: "Operations & AI Dispatch",
      avatar: "/brand/minions-crew.png",
    },
    publishedAt: now,
    readingTimeMinutes: readingTime,
    tags: payload.tags || [payload.audience || "ICP", payload.pillar || "Operations"],
    metaDescription: cleanDescription,
    assetId: payload.asset_id,
    docUrl: payload.doc_url,
  };

  // 1. Save to local filesystem as instant backup / cache
  try {
    savePostToFile(post);
  } catch (e) {
    console.warn("Could not save to local filesystem (expected on read-only serverless):", e);
  }

  // 2. Save to Supabase / PostgreSQL database if connected
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase.from("blogs").upsert(
        {
          slug: post.slug,
          title: post.title,
          subtitle: post.subtitle,
          hook: post.hook,
          core_argument: post.core_argument,
          content: post.content,
          audience: post.audience,
          pillar: post.pillar,
          author: post.author,
          tags: post.tags,
          meta_description: post.metaDescription,
          reading_time_minutes: post.readingTimeMinutes,
          asset_id: post.assetId,
          doc_url: post.docUrl,
          published_at: post.publishedAt,
          updated_at: now,
        },
        { onConflict: "slug" }
      );

      if (error) {
        console.error("Supabase upsert error:", error);
      }
    } catch (e) {
      console.error("Database write error:", e);
    }
  }

  return post;
}
