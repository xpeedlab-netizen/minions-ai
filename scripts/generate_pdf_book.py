#!/usr/bin/env python3
"""
Generate a publication-grade, beautifully formatted PDF of 'The Book of Growth by Minions AI'
using headless Google Chrome with print-to-pdf.
"""

import os
import subprocess
import sys

def main():
    workspace_dir = "/media/parvej/68CAB4DDCAB4A9281/Web Projects New/minions-ai"
    html_output_path = os.path.join(workspace_dir, "docs", "book_of_growth.html")
    pdf_output_path = os.path.join(workspace_dir, "docs", "BOOK_OF_GROWTH.pdf")

    html_content = """<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<title>The Book of Growth | Minions AI</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  @page {
    size: A4;
    margin: 18mm 16mm 18mm 16mm;
  }

  @page :first {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Plus Jakarta Sans', 'Hind Siliguri', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #12242a;
    background: #ffffff;
    line-height: 1.6;
    font-size: 10.5pt;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* COVER PAGE */
  .cover-page {
    page-break-after: always;
    background: linear-gradient(145deg, #101f24 0%, #172e36 60%, #0d181c 100%);
    color: #ffffff;
    padding: 55px 45px;
    height: 100vh;
    min-height: 297mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .cover-badge {
    display: inline-block;
    background: rgba(13, 148, 136, 0.25);
    border: 1px solid rgba(45, 212, 191, 0.4);
    color: #2dd4bf;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .cover-title {
    font-size: 34pt;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;
    color: #ffffff;
    margin-bottom: 12px;
  }

  .cover-title span {
    color: #2dd4bf;
  }

  .cover-subtitle {
    font-size: 13pt;
    font-weight: 500;
    color: #cbd5e1;
    max-width: 600px;
    line-height: 1.45;
    margin-bottom: 30px;
  }

  .cover-divider {
    width: 60px;
    height: 4px;
    background: #ff5a5f;
    border-radius: 2px;
    margin-bottom: 30px;
  }

  .cover-quote-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 4px solid #2dd4bf;
    padding: 20px 24px;
    border-radius: 8px;
    margin-top: 15px;
    backdrop-filter: blur(10px);
  }

  .cover-quote-text {
    font-family: 'Hind Siliguri', sans-serif;
    font-size: 11.5pt;
    line-height: 1.7;
    color: #f1f5f9;
    font-style: italic;
  }

  .cover-quote-author {
    margin-top: 10px;
    font-size: 9.5pt;
    color: #94a3b8;
    font-weight: 600;
    font-family: 'Hind Siliguri', sans-serif;
  }

  .cover-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 20px;
  }

  .cover-author-tag {
    font-size: 11pt;
    font-weight: 700;
    color: #ffffff;
  }

  .cover-author-sub {
    font-size: 8.5pt;
    color: #94a3b8;
    margin-top: 2px;
  }

  .cover-edition {
    font-size: 8pt;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* INTERIOR TYPOGRAPHY */
  .page-break {
    page-break-before: always;
  }

  .avoid-break {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  h1, h2, h3, h4 {
    color: #12242a;
    font-weight: 700;
  }

  h1.section-title {
    font-size: 19pt;
    font-weight: 800;
    border-bottom: 2px solid #0d9488;
    padding-bottom: 8px;
    margin-top: 24px;
    margin-bottom: 14px;
    letter-spacing: -0.5px;
  }

  h2.week-title {
    font-size: 14pt;
    background: #172e36;
    color: #ffffff;
    padding: 10px 16px;
    border-radius: 6px;
    margin-top: 25px;
    margin-bottom: 16px;
    letter-spacing: -0.2px;
  }

  h3.day-title {
    font-size: 11.5pt;
    font-weight: 700;
    color: #0f766e;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .meta-tag {
    font-size: 8.5pt;
    color: #64748b;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 8px;
    color: #334155;
    text-align: justify;
  }

  ul, ol {
    margin-left: 20px;
    margin-bottom: 10px;
    color: #334155;
  }

  li {
    margin-bottom: 4px;
  }

  strong {
    color: #0f172a;
  }

  .bangla {
    font-family: 'Hind Siliguri', sans-serif;
  }

  /* CALLOUTS & BOXES */
  .callout-quote {
    background: #f8fafc;
    border-left: 4px solid #0d9488;
    padding: 10px 14px;
    border-radius: 0 6px 6px 0;
    margin: 10px 0;
    font-family: 'Hind Siliguri', 'Plus Jakarta Sans', sans-serif;
    color: #1e293b;
    font-size: 9.5pt;
  }

  .callout-quote.bangla-quote {
    font-size: 10pt;
    line-height: 1.6;
    background: #f0fdfa;
    border-left-color: #0d9488;
  }

  .action-box {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-left: 4px solid #16a34a;
    padding: 9px 13px;
    border-radius: 0 6px 6px 0;
    margin: 10px 0 16px 0;
    font-size: 9pt;
    color: #166534;
  }

  .action-box strong {
    color: #14532d;
  }

  .day-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 14px 16px;
    margin-bottom: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .library-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 14px;
    margin-bottom: 12px;
    background: #ffffff;
    page-break-inside: avoid;
    break-inside: avoid;
  }

  .library-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 6px;
    margin-bottom: 6px;
  }

  .library-title {
    font-size: 11pt;
    font-weight: 700;
    color: #0f172a;
  }

  .library-author {
    font-size: 8.5pt;
    color: #64748b;
    font-weight: 600;
  }

  .library-role {
    display: inline-block;
    background: #e0f2fe;
    color: #0369a1;
    font-size: 7.5pt;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  /* DIAGRAM TREE */
  .library-tree {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px;
    margin: 14px 0 18px 0;
  }

  .tree-node {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 10px 14px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  }

  .tree-node.tree-root {
    border-top: 3px solid #0284c7;
  }

  .tree-node.tree-hub {
    border-top: 3px solid #0d9488;
    background: #f0fdfa;
  }

  .tree-node.tree-base {
    border-top: 3px solid #6366f1;
    background: #f5f3ff;
  }

  .tree-badge {
    display: inline-block;
    font-size: 7pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #0f766e;
    margin-bottom: 2px;
  }

  .tree-title {
    font-size: 9.5pt;
    font-weight: 800;
    color: #0f172a;
  }

  .tree-sub {
    font-size: 8pt;
    color: #64748b;
  }

  .tree-arrow {
    text-align: center;
    font-size: 11pt;
    color: #94a3b8;
    margin: 4px 0;
    line-height: 1;
  }

  .tree-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .tree-col {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-top: 3px solid #ff5a5f;
    border-radius: 6px;
    padding: 8px 10px;
    text-align: center;
  }

  .tree-col-header {
    font-size: 7pt;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .tree-book {
    font-size: 7.5pt;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.35;
    margin-bottom: 4px;
    background: #f8fafc;
    padding: 4px 6px;
    border-radius: 4px;
    border: 1px solid #f1f5f9;
  }

  .tree-book span {
    display: block;
    font-size: 6.5pt;
    color: #64748b;
    font-weight: 500;
  }

  /* TOC */
  .toc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 14px;
  }

  .toc-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 3px solid #0d9488;
    border-radius: 6px;
    padding: 10px 14px;
  }

  .toc-title {
    font-size: 9.5pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
  }

  .toc-desc {
    font-size: 8pt;
    color: #64748b;
    line-height: 1.4;
  }

  /* TABLES */
  table.matrix-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 14px;
    font-size: 8.5pt;
    page-break-inside: avoid;
  }

  table.matrix-table th {
    background: #172e36;
    color: #ffffff;
    text-align: left;
    padding: 8px 10px;
    font-weight: 600;
  }

  table.matrix-table td {
    border: 1px solid #e2e8f0;
    padding: 8px 10px;
    vertical-align: top;
    color: #334155;
  }

  table.matrix-table tr:nth-child(even) {
    background: #f8fafc;
  }

  table.spin-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    font-size: 8.5pt;
  }

  table.spin-table th {
    background: #0f766e;
    color: white;
    padding: 6px 10px;
    text-align: left;
  }

  table.spin-table td {
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
  }

  .footer-stamp {
    text-align: center;
    font-size: 8pt;
    color: #94a3b8;
    margin-top: 25px;
    border-top: 1px solid #e2e8f0;
    padding-top: 10px;
  }
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover-page">
  <div>
    <div class="cover-badge">Engineering Curriculum</div>
    <div class="cover-title">THE BOOK OF <span>GROWTH</span></div>
    <div class="cover-subtitle">The 30-Day Engineering Manual for High-Velocity Customer Acquisition, Activation, Retention & Scaled Monetization</div>
    <div class="cover-divider"></div>
    <div class="cover-quote-box">
      <div class="cover-quote-text">
        "গ্রোথ হ্যাকিং কোনো শর্টকাট, ভেল্কিবাজি বা স্প্যামিং না। এটা হলো গভীর সহানুভূতি (Empathy), ডেটা-চালিত বৈজ্ঞানিক পরীক্ষণ (Scientific Experimentation), এবং সিস্টেম ইঞ্জিনিয়ারিং। উপার্জনের দায়বদ্ধতা কিন্তু দুনিয়া এবং আখেরাতে—তাই ব্যবসা হতে হবে নৈতিক এবং মূল্যবোধসম্পন্ন।"
      </div>
      <div class="cover-quote-author">— মাহমুদুল হাসান সোহাগ (প্রতিষ্ঠাতা, রকমারি.কম ও অন্যরকম গ্রুপ)</div>
    </div>
  </div>

  <div class="cover-footer">
    <div>
      <div class="cover-author-tag">Minions AI Architecture Series</div>
      <div class="cover-author-sub">Grounded in the Uddokta Masterclass by Mahmudul Hasan Sohag & Global Growth Science</div>
    </div>
    <div class="cover-edition">Special Edition | 2026</div>
  </div>
</div>

<!-- PROLOGUE & CORE PHILOSOPHY -->
<div class="page-break"></div>
<h1 class="section-title">PROLOGUE: THE PHILOSOPHY OF SHOHAG VAI</h1>
<p>
  Mahmudul Hasan Sohag’s 12-part <em>Uddokta Masterclass</em> (উদ্যোক্তা মাস্টারক্লাস: গ্রোথ হ্যাকিং) redefines how entrepreneurs, founders, and growth engineers approach company scale. Grounded in over two decades of building enduring institutions in Bangladesh—including <strong>Rokomari.com</strong> (the nation's premier online book platform), <strong>Udvash Academic Care</strong> (উদ্ভাস), and <strong>OnnoRokom Software</strong>—his syllabus strips away the vanity of traditional corporate advertising and replaces it with relentless customer-centric engineering.
</p>

<div class="callout-quote bangla-quote">
  <strong>The 7 Non-Negotiable Pillars Taught by Shohag Vai:</strong>
  <ol style="margin-top:6px; margin-bottom:2px;">
    <li><strong>The "Doer Attitude" (ডুয়ার এটিচিউড):</strong> "একটা জিনিস জানা এক জিনিস, ইমপ্লিমেন্ট করা ভিন্ন স্কিল। ইমপ্লিমেন্টেশন ডিসিপ্লিনের ওপর নির্ভর করে। ডুয়ার এটিচিউড হলো—যতটুকু শিখছি, সাথে সাথে করে ফেলি।"</li>
    <li><strong>Efficiency over Deception (ইফিশিয়েন্সি বনাম ভেল্কিবাজি):</strong> Hacking does not mean sneaky loopholes or fraud. It means maximizing throughput, minimizing waste, and engineering compounding growth using empirical data.</li>
    <li><strong>Value Wars Over Price Wars (ভ্যালু যুদ্ধ বনাম প্রাইস যুদ্ধ):</strong> Competing on price attracts the highest-churn customers and leads to corporate bankruptcy. Win by delivering differentiated, irreplaceable value.</li>
    <li><strong>Plugging the Leaky Bucket First (ছিদ্রযুক্ত বালতি মেরামত):</strong> Spending marketing budget on customer acquisition when your existing customers are quietly churning is financial suicide. Retention and customer happiness always come before acquisition.</li>
    <li><strong>The Physician’s Stance (ডাক্তারের মতো পরামর্শমূলক বিক্রয়):</strong> Never pitch features like an irresponsible peddler pushing unneeded pills. Diagnose the customer’s operational agony first, calculate the cost of inaction, and only then prescribe the cure.</li>
    <li><strong>Internal Harmony Precedes External Excellence (ঘরের মানুষকে আগে সন্তুষ্ট করুন):</strong> Quoting Rabindranath Tagore (<em>"ঘর হতে শুধু দুই পা ফেলিয়া..."</em>), frontline employees cannot deliver a 10-star experience if their own internal Net Promoter Score is broken.</li>
    <li><strong>Ethical Commerce & Moral Accountability (নৈতিক উপার্জনের দায়বদ্ধতা):</strong> Every revenue stream must be accounted for before your conscience and in the hereafter. Never manipulate, never deceive, and never sell a product to someone who does not need it.</li>
  </ol>
</div>

<!-- TABLE OF CONTENTS -->
<div class="page-break"></div>
<h1 class="section-title">TABLE OF CONTENTS &amp; CURRICULUM ROADMAP</h1>
<p>
  A structured 30-day operational masterclass dividing the growth engine into 4 disciplined weekly sprints and a final scaling capstone:
</p>

<div class="toc-grid">
  <div class="toc-card">
    <div class="toc-title">WEEK 1: Days 01–07</div>
    <div class="toc-desc">
      <strong>Mindset, Validation, Pre-Selling &amp; MVP</strong><br>
      The 4 growth myths, Sean Ellis 40% PMF test, CricPol pre-selling model, Car rental &amp; School MVPs, High-tempo testing (&ge;3/wk), and ICE scoring.
    </div>
  </div>

  <div class="toc-card">
    <div class="toc-title">WEEK 2: Days 08–14</div>
    <div class="toc-desc">
      <strong>Activation, Friction Removal &amp; Habits</strong><br>
      The "Aha! Moment", Rokomari's "Look Inside" case study, Houston Airport carousel psychology, 6 levers of activation, and the Endowed Progress Effect.
    </div>
  </div>

  <div class="toc-card">
    <div class="toc-title">WEEK 3: Days 15–21</div>
    <div class="toc-desc">
      <strong>Retention, Churn Forensics &amp; NPS</strong><br>
      The Leaky Bucket dilemma, 4 pillars of retention, 0–10 NPS formula, Rabindranath Tagore poem &amp; Internal Employee NPS, and master churn questions.
    </div>
  </div>

  <div class="toc-card">
    <div class="toc-title">WEEK 4: Days 22–28</div>
    <div class="toc-desc">
      <strong>SPIN Selling, Pricing &amp; Virality</strong><br>
      The Physician vs. Peddler mindset, SPIN sales diagnostic matrix, overcoming the 4 objections, Decoy Effect, 5 levels of referral, and shareable moments.
    </div>
  </div>

  <div class="toc-card" style="grid-column: span 2; border-left-color: #6366f1;">
    <div class="toc-title">DAYS 29–30: CAPSTONE &amp; THE OPERATING MACHINE</div>
    <div class="toc-desc">
      <strong>The Complete AARRR Growth Machine &amp; The High-Velocity Manifesto</strong><br>
      Synthesizing Acquisition, Activation, Retention, Revenue, and Referral into a self-reinforcing enterprise flywheel grounded in ethical commercial responsibility.
    </div>
  </div>
</div>

<!-- PAGE 1: THE ESSENTIAL GROWTH LIBRARY -->
<div class="page-break"></div>
<h1 class="section-title">PAGE 1: THE ESSENTIAL GROWTH LIBRARY</h1>
<p>
  Before executing a single growth sprint, every team member must be grounded in the foundational literature that underpins modern digital growth, behavioral psychology, and enterprise sales. These 8 canonical masterworks and 1 operational playbook form the theoretical bedrock of the next 30 days:
</p>

<div class="library-tree">
  <div class="tree-node tree-root">
    <div class="tree-badge">Agile Startup Foundation</div>
    <div class="tree-title">THE LEAN STARTUP &bull; Eric Ries</div>
    <div class="tree-sub">Hypothesis Testing &bull; MVP Validation &bull; Build-Measure-Learn Feedback Loop</div>
  </div>
  <div class="tree-arrow">&darr;</div>
  <div class="tree-node tree-hub">
    <div class="tree-badge">The Core Series Textbook</div>
    <div class="tree-title">HACKING GROWTH &bull; Sean Ellis &amp; Morgan Brown</div>
    <div class="tree-sub">High-Tempo Testing (&ge;3/wk) &bull; AARRR Pirate Funnel &bull; ICE Prioritization &bull; 40% PMF Test</div>
  </div>
  <div class="tree-arrow">&darr;</div>
  <div class="tree-grid">
    <div class="tree-col">
      <div class="tree-col-header">1. Acquisition &amp; Virality</div>
      <div class="tree-book">Contagious<span>(Jonah Berger)</span></div>
      <div class="tree-book">Influence<span>(Robert Cialdini)</span></div>
    </div>
    <div class="tree-col">
      <div class="tree-col-header">2. Activation &amp; Habits</div>
      <div class="tree-book">Hooked<span>(Nir Eyal)</span></div>
      <div class="tree-book">Influence<span>(Robert Cialdini)</span></div>
    </div>
    <div class="tree-col">
      <div class="tree-col-header">3. Retention &amp; NPS</div>
      <div class="tree-book">Ultimate Question 2.0<span>(Fred Reichheld)</span></div>
      <div class="tree-book">Internal NPS<span>(Tagore Metaphor)</span></div>
    </div>
    <div class="tree-col">
      <div class="tree-col-header">4. Revenue &amp; Pricing</div>
      <div class="tree-book">SPIN Selling<span>(Neil Rackham)</span></div>
      <div class="tree-book">Predictably Irrational<span>(Dan Ariely)</span></div>
    </div>
  </div>
  <div class="tree-arrow">&darr;</div>
  <div class="tree-node tree-base">
    <div class="tree-badge">Operational Field Handbook</div>
    <div class="tree-title">HOW I CREATED GROWTH HACKING PLANS &bull; Happy Aladdin</div>
    <div class="tree-sub">70+ Frameworks &bull; 300+ Real Case Studies &bull; Weekly Growth Sprint Swipe File</div>
  </div>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">1. Hacking Growth</div>
    <div class="library-author">Sean Ellis & Morgan Brown</div>
  </div>
  <div class="library-role">Primary Syllabus Textbook (Episodes 1–12)</div>
  <p>The definitive operating manual for modern digital growth. Sean Ellis coined the term "Growth Hacking." Teaches the <strong>40% PMF Test</strong>, <strong>High-Tempo Testing</strong> (&ge; 3 tests/week), <strong>ICE Prioritization</strong>, and the <strong>AARRR Pirate Funnel</strong>.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">2. The Lean Startup</div>
    <div class="library-author">Eric Ries</div>
  </div>
  <div class="library-role">Validated Learning & MVP Foundation (Episodes 1 & 3)</div>
  <p>Eliminates the greatest waste in entrepreneurship: building products nobody wants. Introduces the <strong>Build-Measure-Learn</strong> feedback loop and the <strong>Minimum Viable Product (MVP)</strong>, grounding Shohag vai's pre-selling framework.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">3. SPIN Selling</div>
    <div class="library-author">Neil Rackham</div>
  </div>
  <div class="library-role">High-Ticket Consultative Closing (Episode 9)</div>
  <p>Based on 35,000+ sales calls over 12 years. Proves feature pitching turns buyers away. Outlines the 4-stage diagnostic sequence: <strong>Situation</strong>, <strong>Problem</strong>, <strong>Implication</strong> (cost of inaction), and <strong>Need-Payoff</strong> (client calculates ROI).</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">4. Predictably Irrational</div>
    <div class="library-author">Dan Ariely</div>
  </div>
  <div class="library-role">Behavioral Economics & Pricing Strategy (Episode 10)</div>
  <p>Proves human buyers are systematically irrational. Details the <strong>Decoy Effect (Asymmetric Dominance)</strong>, price anchoring, and downselling architectures that protect profit margins while saving lost leads.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">5. The Ultimate Question 2.0</div>
    <div class="library-author">Fred Reichheld (Bain & Company)</div>
  </div>
  <div class="library-role">Retention Analytics & Net Promoter Score (Episode 6)</div>
  <p>Establishes the gold-standard 0–10 <strong>Net Promoter Score (NPS)</strong>. Introduced alongside Shohag vai's <strong>Internal Employee NPS</strong>: frontline customer experience cannot sustainably exceed internal team happiness.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">6. Influence: The Psychology of Persuasion</div>
    <div class="library-author">Dr. Robert B. Cialdini</div>
  </div>
  <div class="library-role">Activation & Conversion Levers (Episodes 8, 10 & 11)</div>
  <p>The 7 universal psychological levers: Reciprocity, Commitment & Consistency, Social Proof, Authority, Liking, Scarcity, and Unity. Powers the <strong>Endowed Progress Effect</strong> and trust architectures.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">7. Contagious: Why Things Catch On</div>
    <div class="library-author">Jonah Berger</div>
  </div>
  <div class="library-role">Viral Loops & Referral Architecture (Episodes 11 & 12)</div>
  <p>The scientific <strong>STEPPS</strong> framework: Social Currency, Triggers, Emotion, Public, Practical Value, Stories. Outlines how to achieve a viral coefficient <strong>K &gt; 1.0</strong> by capturing high-emotion shareable moments.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">8. Hooked: How to Build Habit-Forming Products</div>
    <div class="library-author">Nir Eyal</div>
  </div>
  <div class="library-role">Frictionless Activation & Habit Loops (Episodes 7 & 8)</div>
  <p>The 4-stage habit loop: <strong>Trigger</strong> &rarr; <strong>Action</strong> &rarr; <strong>Variable Reward</strong> &rarr; <strong>Investment</strong>. Guides Time-to-Value (TTV) compression and habituation without ongoing ad spend.</p>
</div>

<div class="library-card">
  <div class="library-header">
    <div class="library-title">9. How I Created Growth Hacking Plans</div>
    <div class="library-author">Happy Aladdin</div>
  </div>
  <div class="library-role">Operational Field Handbook (Episodes 1, 5 & 8)</div>
  <p>Shohag vai's live reference playbook containing 70+ growth frameworks and 300+ battle-tested tactical experiments used during high-cadence sprint planning.</p>
</div>

<!-- WEEK 1 -->
<div class="page-break"></div>
<h2 class="week-title">WEEK 1: MINDSET, VALIDATION, PRE-SELLING &amp; MVP ENGINEERING</h2>

<div class="day-card">
  <h3 class="day-title"><span>Day 1: Growth Hacking vs. Traditional Vanity Marketing</span> <span style="font-size:8pt; color:#64748b;">[Ep 01: 01:31–18:24]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Sean Ellis)</div>
  <p>Growth Hacking is not a magic trick or sneaky shortcut (ভেল্কিবাজি বা চোরাবুদ্ধি নয়); it is the fusion of engineering, data analysis, and user empathy to maximize operational efficiency. Traditional corporations spend huge budgets renting 5-star hotel ballrooms and placing full-page newspaper ads. Did Facebook, Uber, or WhatsApp ever hold a lavish launching ceremony? Nobody knows when or where they launched because their growth was engineered directly into the software.</p>
  <div class="callout-quote bangla-quote">
    <strong>Shohag Vai's 4 Growth Hacking Myths:</strong>
    <ul>
      <li><strong>Myth 1 — Product Cloning:</strong> Buying a $2,000 clone script of Facebook or Uber will never make you successful. Features are trivial; operations, data loops, and execution culture are everything.</li>
      <li><strong>Myth 2 — The First-Mover Fallacy:</strong> Pioneers spend millions educating a reluctant market (MySpace, Yahoo, Lyft). Smart second-movers study their friction and capture the market. <em>"তালা-চাবি বেচতে গেলে মানুষকে বোঝাতে হয় না তালা কী। কিন্তু এমন অচেনা জিনিস আনলে মানুষকে বোঝাতেই কোম্পানি দেউলিয়া হয়ে যাবে!"</em></li>
      <li><strong>Myth 3 — The Biriyani Metaphor:</strong> Business has no single magic secret. Biriyani requires prime meat, exact spice ratios, correct cooking sequence, salt balance, and someone remembering to light the stove! Growth is compounding hundreds of small tweaks.</li>
      <li><strong>Myth 4 — Growth Hacking without PMF:</strong> Scaling marketing before Product-Market Fit is like <strong>"মৃত প্রার্থীর পক্ষে নির্বাচনী প্রচার চালানো"</strong> (campaigning for a deceased candidate).</li>
    </ul>
    <strong>The Comb Salesman Fraud:</strong> Selling a comb to a bald person (যার মাথায় চুল নাই তার কাছে চিরুনি বেচা) is deceptive traditional marketing. Growth Hacking solves real, acute human problems ethically.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Audit your acquisition channels. Classify all current marketing efforts into "Vanity" (likes, traffic) vs. "Growth Engines" (activated leads, verified conversions). Kill one vanity activity today.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 2: The Sean Ellis 40% PMF Test</span> <span style="font-size:8pt; color:#64748b;">[Ep 01: 20:00–23:25]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Sean Ellis)</div>
  <p>Before spending capital on growth, you must mathematically verify Product-Market Fit. Never ask friends, relatives, or investors—they will flatter you to be polite.</p>
  <div class="callout-quote">
    <strong>The Sean Ellis PMF Survey Question:</strong><br>
    <em>"How would you feel if you could no longer use [Product/Service] tomorrow?"</em><br>
    A) Very disappointed &nbsp;&nbsp;|&nbsp;&nbsp; B) Somewhat disappointed &nbsp;&nbsp;|&nbsp;&nbsp; C) Not disappointed &nbsp;&nbsp;|&nbsp;&nbsp; D) N/A – No longer use it<br><br>
    <strong>The Benchmark:</strong> If <strong>&ge; 40%</strong> answer <strong>"Very disappointed"</strong>, you have PMF. If &lt; 40%, stop all ad spend immediately. You are still in the customer discovery phase.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Deploy the 1-question survey to your last 30–50 customers. Tabulate the percentage of "Very disappointed" responses. If below 40%, interview those respondents to discover what is missing.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 3: Pre-Selling Before Building (The CricPol Case Study)</span> <span style="font-size:8pt; color:#64748b;">[Ep 01: 35:17–37:40 &amp; Ep 02]</span></h3>
  <div class="meta-tag">Foundational Text: <em>The Lean Startup</em> (Eric Ries)</div>
  <p>The standard trap of technical founders: they spend 6 to 12 months writing backend code in secret, only to launch to total silence. Shohag vai's golden rule: <em>"Validate demand by selling before building."</em></p>
  <div class="callout-quote bangla-quote">
    <strong>The CricPol (ক্রিকপোল) Story:</strong> During Bangladesh's cricket craze, Shohag vai wanted to build a live SMS cricket score service. Instead of spending months building complex telecom integrations, he created a paper mockup on cardboard and pitched corporate sponsors. He secured a 35 Lakh BDT sponsorship commitment upfront from Qubee before writing a single line of backend software!<br><br>
    <strong>Cash vs. Polite Words:</strong> <em>"টাকা যতক্ষণ পকেট থেকে বের করতে না পারবা, ততক্ষণ ওটা স্রেফ মুখের কথা! বাংলাদেশে মানুষ মুখের ওপর না করতে পারে না, তাই বলে 'আইডিয়া দারুণ ভাই, আগাও!' পরে কেউ পাশে থাকে না। মুখের কথায় চিড়া ভিজে না, ক্যাশ টাকা চাই!"</em>
  </div>
  <p><strong>The 4-Step Validation Email Sequence:</strong></p>
  <ol>
    <li><em>Email 1:</em> Pinpoint sharpest agony (<em>"What is the most painful problem you want to solve most?"</em>).</li>
    <li><em>Email 2:</em> Discover common mistakes (<em>"What is the most popular mistake people make trying to solve this?"</em>).</li>
    <li><em>Email 3:</em> Propose tailored solution (<em>"What if we resolved this friction entirely?"</em>).</li>
    <li><em>Email 4:</em> Pre-sell with early-bird commitment (<em>"I will build this if 50 people pre-order at a 50% discount. If we don't reach 50, 100% of money is refunded!"</em>).</li>
  </ol>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Create a 1-page offer sheet for your next feature or service. Present it to 5 target clients. If none offer a deposit or pre-order, pivot or kill the idea.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 4: Minimum Viable Product (MVP) &amp; Constraint Isolation</span> <span style="font-size:8pt; color:#64748b;">[Ep 03: 01:18–19:29]</span></h3>
  <div class="meta-tag">Foundational Text: <em>The Lean Startup</em> (Eric Ries)</div>
  <p>An MVP is NOT a broken product; it is the simplest artifact that allows maximum validated learning with minimal capital. Always isolate the single riskiest bottleneck:</p>
  <div class="callout-quote bangla-quote">
    <strong>The Car Rental Case Study:</strong> To launch a rent-a-car business, the amateur thinks: <em>"I need 50 lakh taka to buy 3 microbuses, rent a garage, and hire drivers."</em> Shohag vai asks: What is your true bottleneck? It is NOT owning cars; it is acquiring paying passengers! Borrow or broker one car from another agency and fulfill trips at cost. First prove you can consistently acquire customers.<br><br>
    <strong>The School / Coaching Center Case Study (Udvash Context):</strong> Don't lease a multi-story building to start a school. Isolate the bottleneck: if teacher quality is the bottleneck &rarr; start a Teacher Training Academy first. If student acquisition is the bottleneck &rarr; start an Education Marketing Agency first.<br><br>
    <strong>QC vs. QA (The Hoodie Manufacturing Lesson):</strong> End-of-line Quality Checking cannot stop losses. You must install Quality Assurance checkpoints at every step: fabric inspection, cutting, sewing, and printing.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Strip your current offering down to its single core constraint. Design a test to validate that single assumption within 48 hours.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 5: High-Tempo Testing &amp; The 3-Experiment Cadence</span> <span style="font-size:8pt; color:#64748b;">[Ep 02: 36:20–39:35]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Sean Ellis)</div>
  <p>Growth velocity is a mathematical outcome of testing frequency. <em>"তুমি যখন গ্রোথ হ্যাকিং বুঝতে চাইবা, মাথার মধ্যে দুইটা শব্দ ঢুকাবা—ডাটা এবং টেস্ট! ডাটা ছাড়া গ্রোথ হ্যাকিং হবে না।"</em> Fast-growing startups maintain a disciplined cadence of running at least 3 experiments every single week.</p>
  <div class="callout-quote">
    <strong>The Scientific Experiment Hypothesis:</strong><br>
    <code>"By implementing [Change X], we expect [Metric Y] to improve by [Z%] because [Psychological Reason]."</code>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Set up a shared Growth Experiment Sheet with 5 columns: Hypothesis, Test Variant, Target Metric, Owner, and Result. Launch your first test today.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 6: The ICE Prioritization Framework</span> <span style="font-size:8pt; color:#64748b;">[Ep 03: 21:22–25:10]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> &amp; <em>Happy Aladdin's Playbook</em></div>
  <p>Teams constantly generate 50 different growth ideas. Use the objective ICE scoring model (1 to 10 scale):</p>
  <div class="callout-quote">
    <strong>ICE Score = (Impact + Confidence + Ease) / 3</strong>
    <ul>
      <li><strong>Impact (1–10):</strong> How profoundly does this move the core North Star Metric?</li>
      <li><strong>Confidence (1–10):</strong> How certain are we based on empirical data or benchmarks?</li>
      <li><strong>Ease (1–10):</strong> How quickly can we ship without custom engineering? (10 = 2 hours; 1 = 2 months).</li>
    </ul>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Score your backlog of 10 marketing ideas using the ICE rubric. Reorder the list; select the top 2 for immediate execution.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 7: Weekly Sprint Review &amp; Retrospective</span> <span style="font-size:8pt; color:#64748b;">[Ep 03]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> &amp; <em>The Lean Startup</em></div>
  <p>Institutional learning is the only sustainable competitive advantage. Hold a 45-minute retrospective every week: (1) Review test outcomes, (2) Document learnings in the growth repository, (3) Re-score backlog with ICE, and (4) Commit to the next sprint's 3 experiments.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Complete your first Week 1 Retrospective. Archive winning variants, eliminate what failed, and lock in Week 2 sprint tasks.
  </div>
</div>

<!-- WEEK 2 -->
<div class="page-break"></div>
<h2 class="week-title">WEEK 2: USER ACTIVATION, FRICTION ELIMINATION &amp; HABIT DESIGN</h2>

<div class="day-card">
  <h3 class="day-title"><span>Day 8: Defining Activation &amp; The "Aha! Moment"</span> <span style="font-size:8pt; color:#64748b;">[Ep 07: 03:20–29:54]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Ellis) &amp; <em>Hooked</em> (Eyal)</div>
  <p>Traffic without Activation is useless. Activation is the magical threshold where a new visitor experiences the core emotional benefit of your product for the first time: the <strong>"Aha! Moment"</strong> (বা "ওয়াও মোমেন্ট").</p>
  <div class="callout-quote bangla-quote">
    <strong>Global Activation Benchmarks:</strong>
    <ul>
      <li><em>Facebook:</em> Connecting with 7 friends within 10 days.</li>
      <li><em>Twitter (X):</em> Following 30 active accounts.</li>
      <li><em>Dropbox:</em> Uploading 1 file to the desktop folder and seeing the green checkmark.</li>
    </ul>
    <strong>The Rokomari "একটু পড়ে দেখুন" (Look Inside) Case Study:</strong> In Bangladesh, readers were deeply skeptical about ordering books online without flipping through the pages in Nilkhet or Banglabazar. Rokomari scanned the table of contents and first 10–15 pages of every book so readers could browse online free. This single activation feature exploded reader trust and surged orders nationwide.<br><br>
    <strong>The Udvash Free Masterclass:</strong> Students never understood teaching pedagogy from flyers; sitting in one free masterclass delivered the immediate "Aha!" revelation.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Map your product journey. What is the exact equivalent of Rokomari's "একটু পড়ে দেখুন" for your service? How can you deliver that realization in under 60 seconds?
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 9: The 6 Levers of Activation &amp; The Houston Airport Carousel</span> <span style="font-size:8pt; color:#64748b;">[Ep 05: 45:00 &amp; Ep 08]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Influence</em> (Cialdini) &amp; <em>Hooked</em> (Eyal)</div>
  <p>Shohag vai breaks activation engineering down into 6 actionable levers: (1) Reduce Friction, (2) Guide the User, (3) Personalize Journey, (4) Trust Boosters, (5) Progress Signals, and (6) Trigger Emotion.</p>
  <div class="callout-quote bangla-quote">
    <strong>The Houston Airport Baggage Carousel Analogy:</strong> Passengers complained bitterly about long waits at the baggage carousel. Speeding up the mechanical belt failed. Engineers moved the arrival gate further away, forcing a 6-minute walk through the terminal. Luggage still took 8 minutes, but passengers now walked 6 minutes and waited only 2 minutes! Complaints dropped to zero! <em>Lesson: Perceived friction and idle waiting time ruin customer experience. Keep the user moving and engaged.</em><br><br>
    <strong>The Celebrity Marketing Fallacy:</strong> Paying 10 Lakh BDT to a celebrity is a trap. You then have to spend 50 Lakh BDT on media distribution, and if the product lacks an organic "Aha!" moment, the business still fails.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Audit your onboarding flow on mobile. Count form fields and clicks. Eliminate at least 2 non-critical fields today.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 10: Eliminating Signup Drag &amp; Guest Checkout</span> <span style="font-size:8pt; color:#64748b;">[Ep 08: 02:24–19:20]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Influence</em> &amp; <em>Hooked</em></div>
  <p>Forcing a user to create an account, verify a 6-digit PIN, and remember passwords before seeing value drops conversion by 10%–15% per added field. When Rokomari observed that rural or elderly customers struggled with passwords, they introduced simple phone OTP login and phone-order hotlines.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Review your signup flow. Eliminate password confirmation and non-critical fields. Allow social login, guest checkout, or single-field phone/email registration.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 11: The Endowed Progress Effect &amp; Micro-Commitments</span> <span style="font-size:8pt; color:#64748b;">[Ep 08: 48:17–50:09]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Influence</em> (Cialdini)</div>
  <p>People are twice as motivated to finish a journey if they feel they have already started. In classic car-wash loyalty experiments, cards requiring 8 stamps with 0 stamped showed 19% completion. Cards requiring 10 stamps with 2 <em>pre-stamped</em> yielded <strong>34% completion</strong> (nearly double!). Never show a progress bar at 0%; show it pre-filled to 20% or 25% for starting.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Redesign your onboarding progress bar or form stepper. Give new users immediate credit for starting, displaying an initial progress state of 20%–25%.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 12: Trust Architecture: Overcoming "No Trust"</span> <span style="font-size:8pt; color:#64748b;">[Ep 08: 35:17 &amp; Ep 09]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Influence</em> (Cialdini)</div>
  <p>In online commerce, customer distrust is the default state (<em>"আদৌ কি সার্ভিস ঠিকমতো পাবো? টাকা মার যাবে না তো?"</em>). Construct impenetrable trust using: (1) Specific verifiable numbers ("Over 120,000 orders across 64 districts"), (2) Customer proof with full names and photos, (3) Risk reversal (Money-back guarantee, Cash-on-Delivery), and (4) Clear phone support.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Inspect your landing page above the fold. Ensure at least three distinct trust markers (verifiable metrics, integration badges, testimonials, or phone support) are clearly visible without scrolling.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 13: Time-to-Value (TTV) Compression</span> <span style="font-size:8pt; color:#64748b;">[Ep 07 &amp; Ep 08]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Ellis)</div>
  <p>Time-to-Value (TTV) is the clock ticking between a user's first click and their first taste of actual utility. If TTV is measured in days, 80% of users abandon. Pre-load sample data so software dashboards look alive on Day 1. Confirm lead capture with an automated audio preview within 60 seconds.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Measure your onboarding Time-to-Value in minutes. Brainstorm one mechanism to cut that time in half (e.g., automated instant preview vs. waiting for a manual onboarding call).
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 14: Mid-Point Sprint Review: Auditing Activation</span> <span style="font-size:8pt; color:#64748b;">[Ep 08]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> &amp; <em>Aladdin's Playbook</em></div>
  <p>Take stock of your activation funnel before moving into retention and monetization. Measure: Visitor-to-Lead conversion rate, Lead-to-Activated user rate (&ge; 40%), and pinpoint drop-offs between steps.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Calculate your activation rate for the past 14 days. Identify the single biggest step where users drop off, and design an experiment for next week to plug that drop.
  </div>
</div>

<!-- WEEK 3 -->
<div class="page-break"></div>
<h2 class="week-title">WEEK 3: RETENTION ENGINEERING, CHURN FORENSICS &amp; NET PROMOTER SCORE</h2>

<div class="day-card">
  <h3 class="day-title"><span>Day 15: The Leaky Bucket: Why Retention Trumps Acquisition</span> <span style="font-size:8pt; color:#64748b;">[Ep 05: 22:25–27:19]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> (Ellis)</div>
  <p>Pouring expensive advertising budget into a product with low retention is financial suicide. Retaining an existing customer costs 5 to 7 times less than acquiring a new one.</p>
  <div class="callout-quote bangla-quote">
    <strong>The Metaphor of the Leaky Bucket (ছিদ্রযুক্ত বালতির গল্প):</strong> Imagine you have a water bucket full of holes. Instead of fixing the holes, you run to the pond, pump more water, and pour it into the top as fast as possible. You will exhaust all your energy, burn all your capital, and eventually collapse. Retention curves must flatten out into a horizontal plateau. If your retention curve continuously slides toward zero, you do not have a viable business.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Plot your monthly retention cohorts. What percentage of users who joined 3 months ago are still actively using your service? If that line trends to zero, freeze all paid ads.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 16: The 4 Pillars of Retention Engineering</span> <span style="font-size:8pt; color:#64748b;">[Ep 05: 28:15–49:09]</span></h3>
  <div class="meta-tag">Foundational Text: Mahmudul Hasan Sohag &amp; <em>Happy Aladdin's Playbook</em></div>
  <p>Retention is engineered by answering four diagnostic questions:</p>
  <ol>
    <li><strong>Pillar 1 — Happiness Escalation:</strong> How can we dramatically increase customer delight and relief?</li>
    <li><strong>Pillar 2 — Subtle Dissatisfaction Removal:</strong> Where are customers tolerating minor delays or confusion without complaining?</li>
    <li><strong>Pillar 3 — Unaddressed Adjacent Friction:</strong> What happens immediately before or after our service that still causes headaches?</li>
    <li><strong>Pillar 4 — Making the Customer Heroic:</strong> How can our product make our client earn more money or look heroic to their boss?</li>
  </ol>
  <p><em>Fostering an Idea Culture [07:05–11:40]: "Stupid ideas are also important ideas!" Never punish employees for unconventional suggestions.</em></p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Select 2 long-term clients and conduct a 15-minute feedback interview using these 4 exact questions. Document their verbatim responses.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 17: Mastering Net Promoter Score (NPS)</span> <span style="font-size:8pt; color:#64748b;">[Ep 06: 01:15–11:10]</span></h3>
  <div class="meta-tag">Foundational Text: <em>The Ultimate Question 2.0</em> (Fred Reichheld)</div>
  <p>Complex 20-question surveys are ignored. Use the gold-standard question on a 0–10 scale: <em>"How likely are you to recommend us to a friend or colleague?"</em></p>
  <div class="callout-quote">
    <strong>NPS = % Promoters (9–10) &minus; % Detractors (0–6)</strong><br>
    <em>(Passives scoring 7–8 count toward total respondents but yield 0 net points).</em><br>
    &bull; NPS &gt; +50: Excellent organic loyalty.<br>
    &bull; NPS &gt; +70: World-class devotion (Apple, Tesla, Rokomari).<br><br>
    <strong>The Detractor Question:</strong> <em>"চান্দু, জাস্ট আমাকে একটা বিষয় বলুন—কী এমন করতে পারতাম যা করলে আপনি আমাকে ৯ বা ১০ দিতেন?"</em>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Deploy an automated NPS survey triggered 14 days after a customer joins or makes a purchase.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 18: Internal Employee NPS &amp; The Rabindranath Tagore Lesson</span> <span style="font-size:8pt; color:#64748b;">[Ep 06: 11:14–14:15]</span></h3>
  <div class="meta-tag">Foundational Text: <em>The Ultimate Question 2.0</em></div>
  <p>Frontline customer support and engineering teams cannot deliver a 10-star experience if their own internal morale is depressed.</p>
  <div class="callout-quote bangla-quote">
    <strong>The Poem Metaphor (রবীন্দ্রনাথ ঠাকুরের কবিতার শিক্ষা):</strong> Shohag vai quotes Rabindranath Tagore [13:42–13:58]:<br>
    <em>"দেখা হয় নাই চক্ষু মেলিয়া / ঘর হতে শুধু দুই পা ফেলিয়া / একটি ধানের শিষের উপরে / একটি শিশির বিন্দু।"</em><br>
    Entrepreneurs travel around the globe looking for distant growth secrets and external marketing hacks—while completely ignoring the human beings working two steps away inside their own office!
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Run an anonymous 1-question Internal NPS survey for your team. Review comments without defensiveness and fix the top internal grievance.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 19: Churn Forensics: The Master Churn Question</span> <span style="font-size:8pt; color:#64748b;">[Ep 06: 14:30–22:05]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> &amp; Sohag Masterclass</div>
  <p>When customers leave, asking <em>"Why are you leaving?"</em> gets you polite, useless answers ("Budget cuts"). Use Shohag vai's diagnostic pair:</p>
  <div class="callout-quote bangla-quote">
    <strong>Shohag Vai's Master Churn Questions:</strong>
    <ol>
      <li><em>"Think back carefully: What was the exact first moment or interaction that made you contemplate leaving us?"</em> (Uncovers the real root trigger).</li>
      <li><em>"Why didn't you leave even sooner? What kept you holding on?"</em> (Uncovers your strongest surviving value proposition).</li>
    </ol>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Reach out personally to your last 3 churned customers using this diagnostic framing. Find the exact initial moment their trust eroded.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 20: Red Flag Metrics &amp; Under-Promise, Over-Deliver</span> <span style="font-size:8pt; color:#64748b;">[Ep 06: 22:12–35:38]</span></h3>
  <div class="meta-tag">Foundational Text: <em>The Ultimate Question 2.0</em></div>
  <p>Churn leaves red flags weeks in advance: login frequency drops from daily to weekly, feature usage declines &gt; 30%, or reporting emails go unopened. Counter this with the Under-Promise, Over-Deliver rule: If onboarding takes 24 hours, promise 48 hours and deliver in 18 hours. Expectations are exceeded, creating emotional devotion.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Set up an automated CRM alert that pings your team whenever an active account hasn't logged in or utilized core features for 7 consecutive days.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 21: Week 3 Sprint Review: Plugging the Leaks</span> <span style="font-size:8pt; color:#64748b;">[Ep 06]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em></div>
  <p>Consolidate your retention dashboard: active NPS distribution, churn root causes, and red-flag intervention protocols.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Review churn forensics with engineering and customer success. Ship one product or workflow fix that eliminates the top churn trigger identified this week.
  </div>
</div>

<!-- WEEK 4 -->
<div class="page-break"></div>
<h2 class="week-title">WEEK 4: CONSULTATIVE SELLING (SPIN), BEHAVIORAL PRICING &amp; VIRALITY</h2>

<div class="day-card">
  <h3 class="day-title"><span>Day 22: Consultative Selling: The Physician Mindset</span> <span style="font-size:8pt; color:#64748b;">[Ep 09: 00:00–25:00]</span></h3>
  <div class="meta-tag">Foundational Text: <em>SPIN Selling</em> (Neil Rackham)</div>
  <p>Amateur salespeople talk 80% of the time, opening 40-slide decks to boast about features. Elite closers speak only 25% of the time and listen 75% of the time.</p>
  <div class="callout-quote bangla-quote">
    <strong>The Irresponsible Doctor Analogy:</strong> Imagine you walk into a clinic with a stomach ache. The doctor immediately stands up, pulls a blue tablet from his pocket, and says: <em>"Look at this wonderful tablet! Made with German nanotechnology, 500mg potency, won an award in Switzerland! Take 3 a day!"</em> You would run away in terror. He didn't ask where it hurts or check your pulse. Yet 95% of salespeople do this exact crazy thing! Elite closers diagnose before they prescribe.
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Record your next sales demonstration or outreach call. Measure your talk-time ratio. If you spoke for more than 35% of the conversation, rewrite your sales dialogue.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 23: The SPIN Selling Matrix in Action</span> <span style="font-size:8pt; color:#64748b;">[Ep 09: 25:00–48:00]</span></h3>
  <div class="meta-tag">Foundational Text: <em>SPIN Selling</em> (Neil Rackham)</div>
  <p>The four-stage consultative questioning sequence:</p>
  <table class="spin-table">
    <tr>
      <th>Stage</th>
      <th>Diagnostic Purpose</th>
      <th>Scripted Example</th>
    </tr>
    <tr>
      <td><strong>1. Situation (পরিস্থিতি)</strong></td>
      <td>Gather current operational facts</td>
      <td><em>"What tools or staff are you currently using to handle after-hours inbound customer calls?"</em></td>
    </tr>
    <tr>
      <td><strong>2. Problem (সমস্যা)</strong></td>
      <td>Uncover latent dissatisfaction</td>
      <td><em>"How often do weekend calls or midnight inquiries slip to voicemail?"</em></td>
    </tr>
    <tr>
      <td><strong>3. Implication (প্রভাব/ক্ষতি)</strong></td>
      <td>Escalate the financial cost of inaction</td>
      <td><em>"If 5 high-intent seller leads go to voicemail each month and call a competitor, what does that cost your brokerage in annual lost GCI?"</em></td>
    </tr>
    <tr>
      <td><strong>4. Need-Payoff (সমাধানের লাভ)</strong></td>
      <td>Guide client to calculate their own ROI</td>
      <td><em>"If an AI voice agent answered every after-hours lead in sub-800ms and booked showings, what would that do for your profit?"</em></td>
    </tr>
  </table>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Script 2 Situation, 2 Problem, 2 Implication, and 2 Need-Payoff questions tailored to your target industry. Practice delivering them cleanly.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 24: Dismantling the 4 Objections &amp; Ethical Commerce</span> <span style="font-size:8pt; color:#64748b;">[Ep 09: 48:00–56:06]</span></h3>
  <div class="meta-tag">Foundational Text: <em>SPIN Selling</em> &amp; <em>Influence</em></div>
  <p>Every commercial hesitation boils down to four barriers:</p>
  <ul>
    <li><strong>"No Need" (প্রয়োজন নেই):</strong> Failed on Implication questions. Deepen the cost-of-inaction analysis until the latent agony is visible.</li>
    <li><strong>"No Money / Too Expensive" (টাকা নেই বা বেশি দাম):</strong> Reframe cost as ROI. A $2,500 setup recovering one $15,000 deal pays for itself 6x over on day one. Break large sums into daily coffee units ($5/day).</li>
    <li><strong>"No Hurry" (তাড়া নেই):</strong> Highlight compounding daily cost of delay (leaking 3 deals/week to competitors).</li>
    <li><strong>"No Trust" (বিশ্বাস নেই):</strong> Provide verifiable case studies, live voice demos, and zero-risk pilot covenants.</li>
  </ul>
  <div class="callout-quote bangla-quote">
    <strong>Akhirah Accountability (নৈতিক উপার্জনের দায়বদ্ধতা):</strong> <em>"হাশরের ময়দানে আয়ের উৎস ও ব্যয়ের হিসাব দিতে হবে। Remember that every dollar you earn must be accounted for before your conscience and in the hereafter. Never manipulate, never deceive, and never sell a product to someone who genuinely does not need it."</em>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Write down your standard objection-handling response for each of the 4 universal barriers. Roleplay them with your sales team.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 25: Behavioral Pricing Architecture &amp; The Decoy Effect</span> <span style="font-size:8pt; color:#64748b;">[Ep 10: 00:00–35:00]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Predictably Irrational</em> (Dan Ariely)</div>
  <p>Compete on value, never on price. Winning on price attracts bargain hunters who churn the moment someone undercuts you by 1 dollar.</p>
  <div class="callout-quote bangla-quote">
    <strong>The Decoy Effect (ডিকয় ইফেক্ট — Asymmetric Dominance):</strong>
    <ul>
      <li><em>Movie Popcorn Example:</em> Small popcorn is 30 Tk, Large popcorn is 90 Tk. If you introduce a Medium popcorn at 80 Tk (the Decoy), customers think: <em>"For only 10 Tk more, I get the giant Large!"</em> Almost everyone buys the 90 Tk popcorn!</li>
      <li><em>Dan Ariely's The Economist Experiment:</em> Web $59, Print $125, Print+Web $125. Removing the decoy Print-only option crashed revenue by 43%.</li>
      <li><em>Downselling [23:14–25:45]:</em> When a prospect refuses a $2,500 enterprise setup, don't let them walk away with nothing. Downsell them to a $497 starter kit to convert an otherwise lost lead into a paying customer.</li>
      <li><em>Positioning Honesty [00:51]:</em> Never fake company history (<em>"বাপের বয়স যোগ করে দেওয়া—যে আমাদের ১০ বছরের অভিজ্ঞতা! [হাসি]"</em>).</li>
    </ul>
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Redesign your pricing page. Create a 3-tier structure (Starter, Growth, Scale) with a high-value anchor that makes the target tier the obvious choice.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 26: The Virality Equation &amp; Viral Coefficient (K)</span> <span style="font-size:8pt; color:#64748b;">[Ep 11: 00:00–22:00]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Hacking Growth</em> &amp; <em>Contagious</em></div>
  <p>Virality is not luck or social media dancing; it is pure mathematics: <strong>K = i &times; c</strong> (where <em>i</em> = invites sent per user, <em>c</em> = conversion rate per invite). If <strong>K &gt; 1.0</strong>, you experience exponential organic virality without ad spend. If <strong>0 &lt; K &lt; 1.0</strong>, viral amplification lowers your blended CAC.</p>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Calculate your current referral viral coefficient (K). Track how many invitations active clients send and what percentage convert.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 27: The 5 Levels of Referral Architecture</span> <span style="font-size:8pt; color:#64748b;">[Ep 11: 22:00–40:02]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Contagious</em> (Berger) &amp; <em>Hacking Growth</em></div>
  <p>The 5-tier referral maturity ladder:</p>
  <ul>
    <li><strong>Level 1 — The Direct Beg (সরাসরি চাওয়া):</strong> Sales rep asks: <em>"Do you know anyone who needs this?"</em> (Nearly zero conversion).</li>
    <li><strong>Level 2 — Visible Social Proof (সামাজিক প্রমাণ):</strong> Badges and signatures ("Powered by Minions AI", "Sent from my iPhone").</li>
    <li><strong>Level 3 — One-Sided Rewards (একপাক্ষিক সুবিধা):</strong> <em>"Refer a colleague, get $50."</em> (Feels transactional, like selling out friends).</li>
    <li><strong>Level 4 — Two-Sided Win-Win Rewards (উভয়মুখী জয়):</strong> The Dropbox Playbook. <em>"Give 500MB free storage to your friend, and you get 500MB too."</em> Both sides win!</li>
    <li><strong>Level 5 — Identity &amp; Status Advocacy (আইডেন্টিটি ও মর্যাদা):</strong> Brand devotion where recommending the product elevates social standing. (Udvash never paid 1 taka in referral commissions, but generated millions of organic enrollments because recommending Udvash stood for academic prestige and student pride).</li>
  </ul>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Replace any one-sided referral offer with a Level 4 two-sided win-win incentive.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 28: Designing Shareable Moments &amp; Social Currency</span> <span style="font-size:8pt; color:#64748b;">[Ep 12: 01:27–24:19]</span></h3>
  <div class="meta-tag">Foundational Text: <em>Contagious: Why Things Catch On</em> (Jonah Berger)</div>
  <p>Solict reviews and referrals only during peak emotional highs:</p>
  <div class="callout-quote bangla-quote">
    <strong>Timing the Ask [03:51–05:54]:</strong> Never ask for a referral when a Zoom call drops! The perfect time to ask an Udvash parent for a referral is the day their child comes home smiling with an outstanding exam result! (<em>"যেদিন বাচ্চা পরীক্ষায় খারাপ করবে বা মার খেয়ে আসবে, সেদিন রেফারেল চাইলে কি হবে? উল্টো মার খেতে হবে! [হাসি]"</em>).<br><br>
    <strong>Creative Low-Cost Rewards:</strong>
    <ul>
      <li><em>1-Taka Delivery Charge at Rokomari [07:53]:</em> People are numb to "Free." But "১ টাকার ডেলিভারি চার্জ" sounded astonishing and went viral nationwide!</li>
      <li><em>Custom Metal Bookmarkers [10:24]:</em> Rokomari gifted 5–6 Tk engraved metallic bookmarkers to readers. Readers held them with immense pride, posting photos: <em>"আমি বই পড়ি, আমি হেজিভেজি লোক না!"</em></li>
    </ul>
    <strong>The 5 Social Currency Triggers [01:27]:</strong> People share when it signals: <em>"I am Smart", "I am Helpful", "I am Successful", "I am Caring",</em> or <em>Exclusivity</em>.<br><br>
    <strong>The 95% vs. 5% Rule [21:05]:</strong> 95 out of 100 people will never refer anyone. Only 5% are natural advocates. Identify and shower love on that 5%. (OnnoRokom Pathshala scaled to millions with zero ad spend through pure organic sharing).
  </div>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Identify the single highest emotional "peak moment" in your customer journey. Insert an automated referral prompt or review request at that exact instant.
  </div>
</div>

<!-- DAYS 29-30 -->
<div class="page-break"></div>
<h2 class="week-title">DAYS 29–30: CAPSTONE &amp; THE HIGH-VELOCITY OPERATING SYSTEM</h2>

<div class="day-card">
  <h3 class="day-title"><span>Day 29: Synthesizing the AARRR Growth Machine</span></h3>
  <div class="meta-tag">Foundational Text: All 9 Canonical Works &amp; Aladdin Playbook</div>
  <p>Growth is a cohesive system where every stage reinforces the next:</p>
  <ol>
    <li><strong>Acquisition:</strong> Validate real demand before spending, build high-ROI lead magnets, and secure pre-commitments (CricPol model).</li>
    <li><strong>Activation:</strong> Compress Time-to-Value, eliminate signup friction, and deliver the "Aha! moment" immediately (Rokomari "Look Inside").</li>
    <li><strong>Retention:</strong> Plug the leaky bucket, monitor 0–10 NPS, elevate Internal Employee NPS, and conduct forensic churn post-mortems.</li>
    <li><strong>Revenue:</strong> Consultative SPIN Selling, physician-grade diagnoses, dismantle the 4 objections, and deploy behavioral decoy pricing.</li>
    <li><strong>Referral:</strong> Engineer Level 4 two-sided referral loops (K &gt; 1) and capture shareable moments.</li>
  </ol>
  <div class="action-box">
    <strong>[ ] Daily Action Item:</strong> Build a unified AARRR executive scorecard that displays your conversion rates across all 5 stages on a single dashboard screen.
  </div>
</div>

<div class="day-card">
  <h3 class="day-title"><span>Day 30: The High-Velocity Growth Manifesto</span></h3>
  <div class="meta-tag">Final Synthesis &amp; Operating Principles</div>
  <div class="callout-quote bangla-quote">
    <strong>The Growth Operating Manifesto:</strong>
    <ul>
      <li>Growth is not magic; it is <strong>engineering</strong>.</li>
      <li>Always validate and pre-sell before writing code.</li>
      <li>Never pour capital into a leaky bucket—retention comes first.</li>
      <li>Take care of your internal team so they take care of your customers.</li>
      <li>Diagnose like a doctor; never pitch like a reckless peddler.</li>
      <li>Compete on value, never on price.</li>
      <li>Run at least 3 rigorous growth experiments every week.</li>
      <li>Build with ethical responsibility, knowing you are accountable for every interaction.</li>
      <li>The business that learns and iterates fastest wins the market.</li>
    </ul>
  </div>
  <div class="action-box">
    <strong>[ ] Execution Covenant:</strong> Sign and commit to running 3 high-tempo growth experiments every week for the next 12 months.
  </div>
</div>

<!-- MATRIX TABLE -->
<div class="page-break"></div>
<h1 class="section-title">MASTER CURRICULUM PROGRESSION MATRIX</h1>
<table class="matrix-table">
  <thead>
    <tr>
      <th>Week</th>
      <th>Focus Phase</th>
      <th>Core Literature</th>
      <th>Key Case Study / Analogy</th>
      <th>Primary Metric</th>
      <th>Weekly Deliverable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Foundations, PMF &amp; MVP</td>
      <td><em>Hacking Growth</em>, <em>The Lean Startup</em></td>
      <td>CricPol SMS Mockup, Car Rental MVP, Biriyani Analogy</td>
      <td>PMF % (&ge; 40%)</td>
      <td>Validated Offer &amp; ICE Sprint Backlog</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Activation &amp; Friction Removal</td>
      <td><em>Hooked</em>, <em>Influence</em></td>
      <td>Rokomari "Look Inside", Houston Airport Carousel</td>
      <td>Activation Rate (&ge; 40%)</td>
      <td>Sub-60s TTV &amp; Endowed Onboarding Funnel</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Retention &amp; Churn Forensics</td>
      <td><em>The Ultimate Question 2.0</em>, <em>Hacking Growth</em></td>
      <td>The Leaky Bucket, Tagore Poem &amp; Internal NPS</td>
      <td>NPS (&ge; +50) &amp; Cohort Curve</td>
      <td>Churn Forensic Script &amp; Red Flag System</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>SPIN Sales, Pricing &amp; Virality</td>
      <td><em>SPIN Selling</em>, <em>Predictably Irrational</em>, <em>Contagious</em></td>
      <td>Doctor vs Salesman, Decoy Popcorn, 1-Tk Delivery &amp; Metal Bookmarker</td>
      <td>Close Rate &amp; Viral K-Factor</td>
      <td>SPIN Sales Playbook &amp; Two-Sided Referral Loop</td>
    </tr>
    <tr>
      <td><strong>Final</strong></td>
      <td>Scaled Execution Machine</td>
      <td>All 9 Canonical Texts &amp; Aladdin Playbook</td>
      <td>Rokomari, Udvash &amp; OnnoRokom Enterprise Flywheel</td>
      <td>Blended LTV / CAC Ratio</td>
      <td>Automated High-Tempo Growth Engine</td>
    </tr>
  </tbody>
</table>

<div class="footer-stamp">
  The Book of Growth by Minions AI &bull; Built for founders, operators, and growth engineers committed to building resilient, ethical, and compounding commercial enterprises.
</div>

</body>
</html>
"""

    with open(html_output_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"HTML written to {html_output_path}")

    # Build PDF with Google Chrome
    cmd = [
        "google-chrome",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_output_path}",
        html_output_path
    ]

    print(f"Executing: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        pdf_size = os.path.getsize(pdf_output_path)
        print(f"SUCCESS: PDF generated successfully at {pdf_output_path} ({pdf_size} bytes)")
    else:
        print(f"ERROR: Chrome print failed with returncode {result.returncode}")
        print(result.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
