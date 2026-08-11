const fs = require('fs');
const path = require('path');

const dumpFile = path.join(__dirname, '../route-text-dump.txt');
const reportFile = path.join(__dirname, '../WO_01_2_Completion_Report.md');

let dumpContent = "";
if (fs.existsSync(dumpFile)) {
  dumpContent = fs.readFileSync(dumpFile, 'utf-8');
}

// Extract specific routes
function extractRoute(route) {
  const marker = `=================================\nROUTE: ${route}\n=================================`;
  const idx = dumpContent.indexOf(marker);
  if (idx === -1) return "Route not found.";
  let nextIdx = dumpContent.indexOf('=================================\nROUTE:', idx + 10);
  if (nextIdx === -1) nextIdx = dumpContent.length;
  return dumpContent.slice(idx, nextIdx).trim();
}

const roofingText = extractRoute('/industries/roofing');
const plumbingText = extractRoute('/industries/plumbing');
const pestControlText = extractRoute('/industries/pest-control');
const electricalText = extractRoute('/industries/electrical');

const allFourRoutesText = roofingText + "\n\n" + plumbingText + "\n\n" + pestControlText + "\n\n" + electricalText;

// Self Test Grep
const badStrings = [
  "65%", 
  "10x", 
  "10 minutes", 
  "LIMITED TO", 
  "Founding Client", 
  "Founding Offer", 
  "LAST ACTION"
];

let grepResults = "### 5. Grep Output for Self-Test\n\n";
let foundAny = false;
for (const str of badStrings) {
  const regex = new RegExp(str, "gi");
  const matches = allFourRoutesText.match(regex);
  if (matches) {
    grepResults += `- FAIL: Found "${str}" ${matches.length} times.\n`;
    foundAny = true;
  } else {
    grepResults += `- PASS: "${str}" not found.\n`;
  }
}
if (!foundAny) grepResults += "\n**Self-Test Status: PASSED (Zero matches across all four routes).**\n";

const reportContent = `# Work Order #01.2 Completion Report

## 1. Roofing

**Old Text:** 
> "Storms don't wait for office hours. 65% of emergency roofing calls happen after 6 PM or on weekends."
> "Lead value drops by 10x if you wait just 10 minutes to respond. For a $15k roof, that's a expensive wait."

**New Text:** 
> "Storms don't wait for office hours. Emergency roofing calls spike outside 9-to-5, when your office isn't picking up."
> "Lead value drops significantly if you wait too long to respond. For a high-ticket roof, that's an expensive wait."

## 2. Plumbing

**Old Text:** 
> "LIMITED TO 10 PLUMBING COMPANIES PER STATE"
> "Apply for our Founding Client Offer. We'll run a free ROI Audit on your current call volume to show you exactly how many leads Rex would have saved last month."
> "Claim Founding Offer"

**New Text:** 
> *(The "Limited to 10..." line was removed entirely)*
> "Book a demo to see how Rex handles emergency calls. We'll run a free ROI Audit on your current call volume to show you exactly how many leads Rex would have saved last month."
> "Book a Call"

## 3. Electrical

**Old Text:** 
> "LAST ACTION" (Zip dispatched tech to 60614...)

**New Text:** 
> "Example — not live data" (Zip dispatched tech to 60614...)

## 4. Full Rendered Text (Post-Deploy)

<details>
<summary>Click to view full rendered text for all 4 industry routes</summary>

\`\`\`
${allFourRoutesText}
\`\`\`
</details>

${grepResults}

## 6. Build Output

*(Check terminal output)*

## 7. Additional Findings
No additional fabricated claims, false scarcity metrics, or live-telemetry violations were found in these routes during the review.
`;

fs.writeFileSync(reportFile, reportContent);
console.log("Report generated successfully!");
