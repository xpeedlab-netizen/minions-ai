const fs = require('fs');
const path = require('path');

const BANNED_PATTERNS = [
  /Trusted by \d+/i,
  /trade veterans/i,
  /solve our own problem/i,
  /best AI engineers/i,
  /Lead Connect Research/i,
  /HBR Service Excellence/i,
  /Availability is the #1 factor/i,
  /100% HIPAA Compliant/i,
  /HIPAA/i,
  /GDPR & TCPA Ready/i,
  /TCPA/i,
  /98\.4%/i,
  /Confidence Score/i,
  /100% Call Capture/i,
  /30\+ Languages/i,
  /ServiceTitan/i,
  /Housecall Pro/i,
  /Jobber/i,
  /GoHighLevel/i,
  /Rex is handling 4 calls/i,
  /Custom Voice Cloning/i,
  /14-day/i,
  /3466264720/i,
  /\(346\) 626-4720/i,
  /346-626-4720/i,
  /First responder wins 78%/i
];

function scanDirectory(dir, matches = []) {
  if (!fs.existsSync(dir)) return matches;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.agents') continue;
      scanDirectory(fullPath, matches);
    } else if (entry.isFile()) {
      // Scan source and built files (.js, .jsx, .ts, .tsx, .json, .html)
      if (/\.(jsx?|tsx?|html|json)$/i.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        BANNED_PATTERNS.forEach((pattern) => {
          if (pattern.test(content)) {
            matches.push({ file: fullPath, pattern: pattern.toString() });
          }
        });
      }
    }
  }
  return matches;
}

console.log("=== BANNED STRING SWEEP TEST ===");
const srcMatches = scanDirectory(path.join(__dirname, '../app'));
const compMatches = scanDirectory(path.join(__dirname, '../components'));
const libMatches = scanDirectory(path.join(__dirname, '../lib'));
const buildMatches = scanDirectory(path.join(__dirname, '../.next'));

const totalMatches = [...srcMatches, ...compMatches, ...libMatches, ...buildMatches];

console.log(`Scanned app, components, lib, and .next build output.`);
console.log(`Total Banned String Matches Found: ${totalMatches.length}`);

if (totalMatches.length > 0) {
  console.error("FAIL: Found banned strings in files:");
  console.error(totalMatches);
  process.exit(1);
} else {
  console.log("SUCCESS: Zero banned string matches found across source and production build output!");
  process.exit(0);
}
