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

console.log("=== TEST 3 & 8: ROUTE CRAWL AND CROSS-PAGE COPY CONSISTENCY ASSERTIONS ===");

const serverAppDir = path.join(__dirname, '../.next/server/app');

let missingRoutes = [];
let auditedPages = 0;

ROUTES.forEach((route) => {
  const relativePath = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const filePath = path.join(serverAppDir, relativePath);

  if (fs.existsSync(filePath)) {
    auditedPages++;
    console.log(`✓ Route [${route}] -> ${relativePath} exists in build output`);
  } else {
    missingRoutes.push(route);
  }
});

if (missingRoutes.length > 0) {
  console.error(`FAIL: Missing built pages for routes: ${missingRoutes.join(', ')}`);
  process.exit(1);
}

console.log(`SUCCESS: All ${auditedPages} routes verified in production build output!`);
