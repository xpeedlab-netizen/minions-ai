-- ==============================================================================
-- MINIONS.AI BLOG DATABASE SCHEMA (SUPABASE / POSTGRESQL)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS blogs (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  hook TEXT,
  core_argument TEXT,
  content TEXT NOT NULL,
  audience TEXT NOT NULL DEFAULT 'ICP',
  pillar TEXT NOT NULL DEFAULT 'Contractor Realities',
  author JSONB NOT NULL DEFAULT '{"name": "Minions.AI Team", "role": "Operations & AI Dispatch"}'::jsonb,
  tags TEXT[] DEFAULT ARRAY['Contractors', 'AI Dispatch'],
  meta_description TEXT,
  reading_time_minutes INT DEFAULT 3,
  asset_id TEXT,
  doc_url TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all published blog posts
CREATE POLICY "Allow public read access to blogs"
  ON blogs
  FOR SELECT
  USING (true);

-- Allow full write access for service role (used by Next.js API and n8n)
CREATE POLICY "Allow service role full access to blogs"
  ON blogs
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create Index for fast sorting and filtering
CREATE INDEX IF NOT EXISTS idx_blogs_published_at ON blogs (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_audience ON blogs (audience);
