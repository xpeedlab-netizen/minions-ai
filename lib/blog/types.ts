export type BlogAudience = 'ICP' | 'PEER' | 'BRIDGE';

export interface BlogPostAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  hook?: string;
  core_argument?: string;
  content: string;
  audience: BlogAudience;
  pillar: string;
  author: BlogPostAuthor;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  metaDescription: string;
  featured_image?: string;
  og_image?: string;
  assetId?: string;
  docUrl?: string;
}

export interface BlogPublishPayload {
  title: string;
  content: string;
  slug?: string;
  subtitle?: string;
  hook?: string;
  core_argument?: string;
  audience?: BlogAudience;
  pillar?: string;
  tags?: string[];
  featured_image?: string;
  og_image?: string;
  asset_id?: string;
  doc_url?: string;
}
