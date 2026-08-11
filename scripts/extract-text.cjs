const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/',
  '/pricing',
  '/how-it-works',
  '/about',
  '/contact',
  '/ai-voice-agent',
  '/speed-to-lead',
  '/crm-automation',
  '/customer-support-ai',
  '/back-office-automation',
  '/live-demo',
  '/results',
  '/faq',
  '/privacy',
  '/terms',
  '/ai-notice',
  '/industries/hvac',
  '/industries/plumbing',
  '/industries/roofing',
  '/industries/pest-control',
  '/industries/electrical'
];

const serverAppDir = path.join(__dirname, '../.next/server/app');
let fullTextOutput = '';

ROUTES.forEach((route) => {
  const relativePath = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const filePath = path.join(serverAppDir, relativePath);

  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    // Extract text from the main body content, removing script tags, style tags, etc.
    let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    text = text.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, ' ');
    
    // Convert some specific tags to spaces or newlines to maintain separation
    text = text.replace(/<(div|p|h1|h2|h3|h4|h5|h6|li|br|tr|td|section|header|footer|nav|article|main)[^>]*>/gi, '\n');
    text = text.replace(/<[^>]+>/g, ' '); // Remove all remaining tags
    
    // Decode common HTML entities
    text = text.replace(/&nbsp;/g, ' ')
               .replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&quot;/g, '"')
               .replace(/&#39;/g, "'")
               .replace(/&bull;/g, "•")
               .replace(/&apos;/g, "'")
               .replace(/&lsquo;/g, "'")
               .replace(/&rsquo;/g, "'")
               .replace(/&ldquo;/g, '"')
               .replace(/&rdquo;/g, '"')
               .replace(/&mdash;/g, "—")
               .replace(/&ndash;/g, "–");
               
    // Squeeze whitespace
    text = text.replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n').trim();

    fullTextOutput += `\n\n=================================\nROUTE: ${route}\n=================================\n\n${text}\n`;
  } else {
    console.log(`WARNING: Route ${route} not found at ${filePath}`);
  }
});

fs.writeFileSync(path.join(__dirname, '../route-text-dump.txt'), fullTextOutput);
console.log('Saved to route-text-dump.txt');
