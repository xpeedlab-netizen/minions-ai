const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteContentPath = path.join(__dirname, '../lib/data/site-content.ts');

console.log("=== TEST 7: SINGLE SOURCE OF TRUTH SENTINEL PROOF ===");

// 1. Read original content
const originalContent = fs.readFileSync(siteContentPath, 'utf8');

try {
  // 2. Inject sentinel value (99-day guarantee)
  const sentinelContent = originalContent.replace(/days: 30/g, 'days: 99').replace(/30-day guarantee/g, '99-day guarantee');
  fs.writeFileSync(siteContentPath, sentinelContent, 'utf8');
  console.log("Injected sentinel value: '99-day guarantee' into lib/data/site-content.ts");

  // 3. Rebuild
  execSync('npm run build', { stdio: 'pipe' });
  console.log("Rebuilt project with sentinel value.");

  // 4. Scan build output for sentinel value
  const serverBuildDir = path.join(__dirname, '../.next/server');
  const occurrences = [];

  function scanForSentinel(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanForSentinel(fullPath);
      } else if (entry.isFile() && /\.(html|js|json)$/i.test(entry.name)) {
        const text = fs.readFileSync(fullPath, 'utf8');
        if (text.includes('99-day') || text.includes('99 Days')) {
          occurrences.push(path.relative(path.join(__dirname, '..'), fullPath));
        }
      }
    }
  }

  scanForSentinel(serverBuildDir);
  console.log(`Sentinel value ('99-day') found in ${occurrences.length} built server output files:`);
  occurrences.forEach((file) => console.log(`  - ${file}`));

  if (occurrences.length === 0) {
    throw new Error("FAIL: Sentinel value did not propagate to build output!");
  }

} finally {
  // 5. Always revert to original 30-day guarantee
  fs.writeFileSync(siteContentPath, originalContent, 'utf8');
  execSync('npm run build', { stdio: 'pipe' });
  console.log("Reverted lib/data/site-content.ts back to 30-day guarantee and rebuilt successfully.");
}

console.log("TEST 7 PASSED: Single source of truth verified!");
