# SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add complete SEO infrastructure (meta tags, structured data, sitemap, ICP landing pages) to cre8yoursuccess.com to support cold call credibility and local organic discovery in NE Wisconsin.

**Architecture:** Static HTML site — no build step, no bundler. All changes are direct edits to `.html` files. New ICP pages follow the exact same structure as `voice-agents.html`: a bare HTML shell that loads `components.jsx` and `subpages.css` via CDN Babel, then mounts a React page component. SEO tags live in `<head>` as plain HTML — not in React, so they're present in the raw HTML that Google crawls.

**Tech Stack:** HTML, inline JSON-LD, `robots.txt`, `sitemap.xml`, CDN React 18 + Babel. No npm, no build tools.

---

## File Map

| Action | File | What changes |
|--------|------|-------------|
| Create | `robots.txt` | Allow-all + sitemap pointer |
| Create | `sitemap.xml` | All 10 pages with lastmod |
| Modify | `index.html` | Meta description, canonical, OG, Twitter, JSON-LD LocalBusiness |
| Modify | `voice-agents.html` | Meta description, canonical, OG, Twitter, JSON-LD Service |
| Modify | `lead-generation.html` | Meta description, canonical, OG, Twitter, JSON-LD Service |
| Modify | `healthcare.html` | Meta description, canonical, OG, Twitter, JSON-LD Service |
| Modify | `workflow-automation.html` | Meta description, canonical, OG, Twitter, JSON-LD Service |
| Create | `medspa-voice-agents.html` | ICP page — medspas, voice agents, NE Wisconsin |
| Create | `hvac-voice-agents.html` | ICP page — HVAC, voice agents, NE Wisconsin |
| Create | `realtor-lead-generation.html` | ICP page — realtors, lead gen, Wisconsin |
| Create | `recruiter-lead-generation.html` | ICP page — recruiters, lead gen, Wisconsin |
| Create | `insurance-automation.html` | ICP page — insurance/investment, automation, Wisconsin |

---

## Task 1: Crawl Infrastructure (robots.txt + sitemap.xml)

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create `robots.txt`**

```
User-agent: *
Allow: /
Sitemap: https://cre8yoursuccess.com/sitemap.xml
```

- [ ] **Step 2: Create `sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cre8yoursuccess.com/</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/voice-agents.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/lead-generation.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/healthcare.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/workflow-automation.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/medspa-voice-agents.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/hvac-voice-agents.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/realtor-lead-generation.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/recruiter-lead-generation.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cre8yoursuccess.com/insurance-automation.html</loc>
    <lastmod>2026-05-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Verify files are well-formed**

```bash
grep -c "loc" sitemap.xml
# Expected: 10
cat robots.txt
# Expected: 3 lines, Sitemap URL present
```

- [ ] **Step 4: Commit**

```bash
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml"
```

---

## Task 2: Homepage SEO (index.html)

**Files:**
- Modify: `index.html:4-9` (inside `<head>`, after the viewport meta tag)

- [ ] **Step 1: Verify current state**

```bash
grep -c "og:title\|description\|canonical" index.html
# Expected: 0 — confirms no SEO tags exist yet
```

- [ ] **Step 2: Add SEO block to `index.html`**

Replace the existing `<head>` block (lines 3–9) with:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cre8 Your Success — AI Automation Agency | NE Wisconsin</title>
  <meta name="description" content="Cre8 Your Success builds custom AI voice agents, lead generation systems, and workflow automation for businesses in NE Wisconsin. Win the lead before your competitor responds." />
  <link rel="canonical" href="https://cre8yoursuccess.com/" />

  <!-- Open Graph -->
  <meta property="og:title" content="Cre8 Your Success — AI Automation Agency | NE Wisconsin" />
  <meta property="og:description" content="Custom AI voice agents, lead generation, and workflow automation for local service businesses. Built in NE Wisconsin. Deployed everywhere." />
  <meta property="og:url" content="https://cre8yoursuccess.com/" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Cre8 Your Success" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cre8 Your Success — AI Automation Agency | NE Wisconsin" />
  <meta name="twitter:description" content="Custom AI voice agents, lead generation, and workflow automation for local service businesses. Built in NE Wisconsin." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cre8 Your Success",
    "description": "AI automation agency building custom voice agents, lead generation systems, and workflow automation for businesses in NE Wisconsin.",
    "url": "https://cre8yoursuccess.com",
    "logo": "https://cre8yoursuccess.com/assets/logo-horizontal.png",
    "areaServed": [
      {"@type": "City", "name": "Green Bay", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Appleton", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Oshkosh", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Sheboygan", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Fond du Lac", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Manitowoc", "containedInPlace": {"@type": "State", "name": "Wisconsin"}},
      {"@type": "City", "name": "Two Rivers", "containedInPlace": {"@type": "State", "name": "Wisconsin"}}
    ],
    "serviceType": ["AI Voice Agents", "Lead Generation Automation", "Workflow Automation"],
    "priceRange": "$$"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
```

- [ ] **Step 3: Verify tags are present**

```bash
grep -c "og:title\|og:description\|canonical\|application/ld" index.html
# Expected: 4 or more
```

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add SEO meta tags and LocalBusiness JSON-LD to homepage"
```

---

## Task 3: Service Pages SEO (voice-agents, lead-generation, healthcare, workflow-automation)

**Files:**
- Modify: `voice-agents.html:4-9`
- Modify: `lead-generation.html:4-9`
- Modify: `healthcare.html:4-9`
- Modify: `workflow-automation.html:4-9`

Each page follows the same pattern: replace the existing bare `<head>` opener with the SEO block. The only differences are the title, description, canonical URL, and JSON-LD service name/keywords.

- [ ] **Step 1: Update `voice-agents.html`**

Replace lines 3–10 (`<head>` through the second `<link>` for subpages.css):

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Voice Agents for Medspas & HVAC | NE Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="AI voice agents that answer calls 24/7, qualify leads, and book appointments — built for medspas, HVAC, and service businesses in Green Bay, Appleton, and NE Wisconsin." />
  <link rel="canonical" href="https://cre8yoursuccess.com/voice-agents.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Voice Agents for Local Service Businesses | Cre8 Your Success" />
  <meta property="og:description" content="Never miss a call. AI voice agents that answer, qualify, and book — 24/7. Built for medspas, HVAC, and service businesses in NE Wisconsin." />
  <meta property="og:url" content="https://cre8yoursuccess.com/voice-agents.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Voice Agents for Local Service Businesses | Cre8 Your Success" />
  <meta name="twitter:description" content="Never miss a call. AI voice agents that answer, qualify, and book — 24/7. NE Wisconsin." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Voice Agents",
    "description": "Custom AI voice agents that answer every call, qualify leads, and book appointments 24/7 for local service businesses in NE Wisconsin.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "AI Voice Agent",
    "keywords": "AI voice agent, AI receptionist, medspa phone answering, HVAC answering service, AI phone agent Wisconsin"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />
```

- [ ] **Step 2: Update `lead-generation.html`**

Replace `<head>` through the subpages.css `<link>`:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Lead Generation for Realtors, Recruiters & Insurance | Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="Automated lead generation systems for realtors, recruiters, and insurance professionals in Wisconsin. Follow up faster, close more, without adding headcount." />
  <link rel="canonical" href="https://cre8yoursuccess.com/lead-generation.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Lead Generation for Realtors, Recruiters & Insurance | Cre8 Your Success" />
  <meta property="og:description" content="Stop letting leads go cold. Automated follow-up and lead gen systems for Wisconsin professionals. More conversations, less manual work." />
  <meta property="og:url" content="https://cre8yoursuccess.com/lead-generation.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Lead Generation for Realtors, Recruiters & Insurance | Cre8 Your Success" />
  <meta name="twitter:description" content="Automated follow-up and lead generation for Wisconsin professionals. More conversations, less manual work." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Lead Generation",
    "description": "Automated lead generation and follow-up systems for realtors, recruiters, insurance agents, and investment professionals in Wisconsin.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Lead Generation Automation",
    "keywords": "AI lead generation Wisconsin, realtor lead gen, recruiter automation, insurance agent AI, automated follow-up Wisconsin"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />
```

- [ ] **Step 3: Update `healthcare.html`**

Replace `<head>` through the subpages.css `<link>`:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Automation for Healthcare & Wellness | NE Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="AI automation for healthcare and wellness businesses in NE Wisconsin. Reduce admin overhead, respond to patients faster, and never miss a booking." />
  <link rel="canonical" href="https://cre8yoursuccess.com/healthcare.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Automation for Healthcare & Wellness Businesses | Cre8 Your Success" />
  <meta property="og:description" content="Cut admin overhead and respond to patients faster with AI automation. Built for healthcare and wellness practices in NE Wisconsin." />
  <meta property="og:url" content="https://cre8yoursuccess.com/healthcare.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Automation for Healthcare & Wellness | Cre8 Your Success" />
  <meta name="twitter:description" content="Cut admin overhead and respond to patients faster with AI. NE Wisconsin healthcare automation." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare AI Automation",
    "description": "AI automation for healthcare and wellness businesses in NE Wisconsin — reducing admin overhead, automating patient follow-up, and never missing a booking.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Healthcare AI Automation",
    "keywords": "healthcare AI automation Wisconsin, medspa AI, patient follow-up automation, medical office AI, wellness practice automation"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />
```

- [ ] **Step 4: Update `workflow-automation.html`**

Replace `<head>` through the subpages.css `<link>`:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Workflow Automation for Wisconsin Businesses | Cre8 Your Success</title>
  <meta name="description" content="Custom workflow automation built for Wisconsin businesses. Eliminate manual tasks, connect your tools, and reclaim hours every week." />
  <link rel="canonical" href="https://cre8yoursuccess.com/workflow-automation.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="Workflow Automation for Wisconsin Businesses | Cre8 Your Success" />
  <meta property="og:description" content="Stop doing manually what a machine can do for you. Custom workflow automation that connects your tools and eliminates repetitive tasks." />
  <meta property="og:url" content="https://cre8yoursuccess.com/workflow-automation.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Workflow Automation for Wisconsin Businesses | Cre8 Your Success" />
  <meta name="twitter:description" content="Custom workflow automation. Connect your tools, eliminate manual tasks, reclaim hours every week. NE Wisconsin." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Workflow Automation",
    "description": "Custom workflow automation for Wisconsin businesses — connecting tools, eliminating manual tasks, and reclaiming team hours every week.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Business Workflow Automation",
    "keywords": "workflow automation Wisconsin, business process automation, no-code automation Green Bay, AI workflow Appleton"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />
```

- [ ] **Step 5: Verify all 4 service pages have SEO tags**

```bash
for f in voice-agents.html lead-generation.html healthcare.html workflow-automation.html; do
  count=$(grep -c "og:title\|canonical\|application/ld" "$f")
  echo "$f: $count matches (expected 3+)"
done
```

- [ ] **Step 6: Commit**

```bash
git add voice-agents.html lead-generation.html healthcare.html workflow-automation.html
git commit -m "feat: add SEO meta tags and Service JSON-LD to all service pages"
```

---

## Task 4: ICP Page — Medspa Voice Agents

**Files:**
- Create: `medspa-voice-agents.html`

- [ ] **Step 1: Create `medspa-voice-agents.html`**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Voice Agents for Medspas | Green Bay, Appleton, NE Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="Never miss a medspa booking again. AI voice agents that answer calls 24/7, book appointments, and qualify new patients — serving Green Bay, Appleton, and NE Wisconsin." />
  <link rel="canonical" href="https://cre8yoursuccess.com/medspa-voice-agents.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Voice Agents for Medspas | NE Wisconsin | Cre8 Your Success" />
  <meta property="og:description" content="Never miss a medspa booking again. AI voice agents that answer calls 24/7 and book appointments for medspa clients in Green Bay, Appleton, and NE Wisconsin." />
  <meta property="og:url" content="https://cre8yoursuccess.com/medspa-voice-agents.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Voice Agents for Medspas | NE Wisconsin" />
  <meta name="twitter:description" content="Never miss a medspa booking again. AI that answers, qualifies, and books 24/7." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Voice Agents for Medspas",
    "description": "Custom AI voice agents that answer every call, book appointments, and qualify new medspa patients 24/7. Serving medspas in Green Bay, Appleton, Oshkosh, Sheboygan, and NE Wisconsin.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "AI Voice Agent for Medspa",
    "keywords": "medspa AI voice agent, medspa AI receptionist, medspa phone answering Wisconsin, AI booking medspa Green Bay, medspa answering service Appleton"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="components.jsx"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function MedSpaVoiceAgentsPage() {
      return (
        <>
          <Nav />

          <section className="sp-hero">
            <div className="sp-hero-bg"></div>
            <div className="sp-hero-grid"></div>
            <div className="sp-hero-inner" style={{gridTemplateColumns:'1fr', textAlign:'center', maxWidth:880}}>
              <div>
                <div className="sp-crumb" style={{justifyContent:'center'}}>
                  <a href="index.html">Home</a>
                  <span className="sep">/</span>
                  <a href="voice-agents.html">Voice Agents</a>
                  <span className="sep">/</span>
                  <span className="here">Medspas</span>
                </div>
                <h1 className="sp-title">
                  Never miss a<br/>
                  <span className="accent-o">medspa booking</span> again.
                </h1>
                <p className="sp-sub" style={{marginLeft:'auto', marginRight:'auto'}}>An AI voice agent answers every call at your medspa — first ring, every time. It books appointments, captures new patient info, and handles your after-hours calls without you lifting a finger. Serving medspas in Green Bay, Appleton, Oshkosh, and across NE Wisconsin.</p>
                <div className="sp-cta" style={{justifyContent:'center'}}>
                  <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                    Book a Free Demo
                    <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="voice-agents.html" className="btn-ghost">
                    See All Voice Agent Features
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="spec-strip">
            <div className="spec-strip-inner">
              <div className="spec"><div className="v">1<span className="unit">st</span></div><div className="l">Ring · Pickup</div></div>
              <div className="spec"><div className="v">24<span className="unit">/7</span></div><div className="l">Always On</div></div>
              <div className="spec"><div className="v">0</div><div className="l">Missed Bookings</div></div>
              <div className="spec"><div className="v">&lt;30<span className="unit">s</span></div><div className="l">To Booked</div></div>
            </div>
          </div>

          <section className="section section-darker">
            <div className="container">
              <div className="eyebrow">The problem</div>
              <h2 className="section-title">Every unanswered call<br/>is a booking you lost.</h2>
              <p className="section-sub">Medspa clients are impatient. They call during their lunch break or after hours — and if they hit voicemail, they're already booking with the next place.</p>
              <div className="pain-grid">
                <div className="pain-card">
                  <div className="label">Missed calls</div>
                  <h4>Voicemail = lost appointment</h4>
                  <p>Most medspa clients won't leave a voicemail — they'll scroll to the next option on Google and book there instead.</p>
                  <div className="stat">62%<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of callers don't leave voicemails</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">After-hours inquiries</div>
                  <h4>Clients call when you're closed</h4>
                  <p>Evening and weekend calls are your highest-intent prospects. They saw your Instagram, they're ready to book — and your front desk is offline.</p>
                  <div className="stat">40%+<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of bookings happen after hours</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Front desk overload</div>
                  <h4>Your staff can't do it all</h4>
                  <p>Checking people in, managing treatments, answering phones — something always gets dropped. Your AI agent handles the phones so your team can focus on the client in the chair.</p>
                  <div className="stat">$50K+<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> per full-time receptionist, per year</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark" id="how">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">Your medspa AI agent.<br/>Live in days, not months.</h2>
              <div className="process-row">
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg></div>
                  <span className="pn">STEP 01</span>
                  <h4>Free call audit</h4>
                  <p>We review how your phones are handled today — missed calls, after-hours gaps, booking friction — and show you exactly where revenue is leaking.</p>
                </div>
                <div className="process-step blue">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg></div>
                  <span className="pn">STEP 02</span>
                  <h4>Train your agent</h4>
                  <p>We script it for your services — Botox, fillers, laser, facials — your pricing, your intake questions, and your tone. Sounds like your best front desk rep.</p>
                </div>
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h6l1-2 2 4 2-6 1 4h2"/></svg></div>
                  <span className="pn">STEP 03</span>
                  <h4>Go live & tune</h4>
                  <p>We connect your phone line and booking system, go live, and keep tuning based on real call recordings — at no extra cost.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-darker">
            <div className="container" style={{textAlign:'center', maxWidth:780, margin:'0 auto'}}>
              <div className="eyebrow" style={{justifyContent:'center'}}>Ready to get started?</div>
              <h2 className="section-title">Book a free 30-minute demo.<br/>We'll show you exactly how it works.</h2>
              <p className="section-sub" style={{marginLeft:'auto', marginRight:'auto'}}>We work with medspas in Green Bay, Appleton, Oshkosh, Sheboygan, and across NE Wisconsin. No obligation — just a clear picture of what's possible.</p>
              <div style={{marginTop:32, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
                <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                  Book a Free Demo
                  <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </section>

          <CtaBand />
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<MedSpaVoiceAgentsPage />);
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify file was created and has SEO tags**

```bash
grep -c "og:title\|canonical\|application/ld\|sp-hero" medspa-voice-agents.html
# Expected: 4 or more
```

- [ ] **Step 3: Commit**

```bash
git add medspa-voice-agents.html
git commit -m "feat: add medspa voice agents ICP landing page"
```

---

## Task 5: ICP Page — HVAC Voice Agents

**Files:**
- Create: `hvac-voice-agents.html`

- [ ] **Step 1: Create `hvac-voice-agents.html`**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Voice Agents for HVAC Companies | Green Bay, Appleton, NE Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="HVAC AI phone agent that answers every call, dispatches techs, and books service appointments — even after hours. Serving Green Bay, Appleton, and NE Wisconsin." />
  <link rel="canonical" href="https://cre8yoursuccess.com/hvac-voice-agents.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Voice Agents for HVAC Companies | NE Wisconsin | Cre8 Your Success" />
  <meta property="og:description" content="Stop losing emergency calls to voicemail. HVAC AI agent that answers, dispatches, and books service appointments 24/7 in NE Wisconsin." />
  <meta property="og:url" content="https://cre8yoursuccess.com/hvac-voice-agents.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Voice Agents for HVAC | NE Wisconsin" />
  <meta name="twitter:description" content="Stop losing emergency calls. HVAC AI agent that answers and dispatches 24/7." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Voice Agents for HVAC Companies",
    "description": "Custom AI voice agents for HVAC companies in NE Wisconsin. Answers emergency calls, dispatches techs, and books service appointments 24/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "AI Voice Agent for HVAC",
    "keywords": "HVAC AI voice agent, HVAC answering service Wisconsin, AI phone dispatcher HVAC, HVAC after hours answering Green Bay, HVAC scheduling AI Appleton"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="components.jsx"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function HvacVoiceAgentsPage() {
      return (
        <>
          <Nav />

          <section className="sp-hero">
            <div className="sp-hero-bg"></div>
            <div className="sp-hero-grid"></div>
            <div className="sp-hero-inner" style={{gridTemplateColumns:'1fr', textAlign:'center', maxWidth:880}}>
              <div>
                <div className="sp-crumb" style={{justifyContent:'center'}}>
                  <a href="index.html">Home</a>
                  <span className="sep">/</span>
                  <a href="voice-agents.html">Voice Agents</a>
                  <span className="sep">/</span>
                  <span className="here">HVAC</span>
                </div>
                <h1 className="sp-title">
                  Your HVAC business<br/>
                  can't afford to <span className="accent-o">miss a call.</span>
                </h1>
                <p className="sp-sub" style={{marginLeft:'auto', marginRight:'auto'}}>An AI voice agent answers every call — emergency or routine — dispatches your techs, and books service appointments around the clock. No voicemail. No missed jobs. Serving HVAC companies in Green Bay, Appleton, Oshkosh, and across NE Wisconsin.</p>
                <div className="sp-cta" style={{justifyContent:'center'}}>
                  <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                    Book a Free Demo
                    <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="voice-agents.html" className="btn-ghost">
                    See All Voice Agent Features
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="spec-strip">
            <div className="spec-strip-inner">
              <div className="spec"><div className="v">1<span className="unit">st</span></div><div className="l">Ring · Pickup</div></div>
              <div className="spec"><div className="v">24<span className="unit">/7</span></div><div className="l">Emergency Ready</div></div>
              <div className="spec"><div className="v">0</div><div className="l">Missed Jobs</div></div>
              <div className="spec"><div className="v">&lt;60<span className="unit">s</span></div><div className="l">Tech Dispatched</div></div>
            </div>
          </div>

          <section className="section section-darker">
            <div className="container">
              <div className="eyebrow">The problem</div>
              <h2 className="section-title">Missed calls in HVAC<br/>are missed revenue.</h2>
              <p className="section-sub">HVAC customers call when they have a problem — a broken furnace at midnight, an AC that quit on a 90-degree day. If you don't answer, the next company does.</p>
              <div className="pain-grid">
                <div className="pain-card">
                  <div className="label">After-hours emergencies</div>
                  <h4>Breakdowns don't keep business hours</h4>
                  <p>The most urgent — and highest-margin — jobs come in after hours and on weekends. Every unanswered emergency ring is a job you hand to a competitor.</p>
                  <div className="stat">60%+<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of HVAC emergencies occur outside 9-5</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Busy season overflow</div>
                  <h4>Peak season = peak call volume</h4>
                  <p>July and January hit at the same time as your team's busiest fieldwork. Phones go unanswered while your techs are on jobs — and leads walk.</p>
                  <div className="stat">3x<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> call volume spikes in peak season</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Dispatch friction</div>
                  <h4>Slow dispatch = unhappy customers</h4>
                  <p>Customers expect speed. A slow callback loop kills the job before it starts. Your AI agent collects the info, confirms coverage, and sets an ETA — in real time.</p>
                  <div className="stat">5-min rule<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> = 8x higher booking rate</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark" id="how">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">Your HVAC AI agent.<br/>Built for real field operations.</h2>
              <div className="process-row">
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg></div>
                  <span className="pn">STEP 01</span>
                  <h4>Free call audit</h4>
                  <p>We map your current call volume, after-hours miss rate, and dispatch workflow — and show you exactly what revenue you're leaving on the table.</p>
                </div>
                <div className="process-step blue">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg></div>
                  <span className="pn">STEP 02</span>
                  <h4>Train your agent</h4>
                  <p>We script it for your service area, your equipment types, your dispatch logic, and your emergency escalation protocol. Sounds like your dispatcher.</p>
                </div>
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h6l1-2 2 4 2-6 1 4h2"/></svg></div>
                  <span className="pn">STEP 03</span>
                  <h4>Go live & tune</h4>
                  <p>We connect your phone line and scheduling system, go live, and tune weekly based on real call recordings — at no extra cost.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-darker">
            <div className="container" style={{textAlign:'center', maxWidth:780, margin:'0 auto'}}>
              <div className="eyebrow" style={{justifyContent:'center'}}>Ready to get started?</div>
              <h2 className="section-title">Book a free 30-minute demo.<br/>See it handle a real HVAC call.</h2>
              <p className="section-sub" style={{marginLeft:'auto', marginRight:'auto'}}>We work with HVAC companies in Green Bay, Appleton, Oshkosh, Sheboygan, and across NE Wisconsin. No obligation.</p>
              <div style={{marginTop:32, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
                <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                  Book a Free Demo
                  <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </section>

          <CtaBand />
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<HvacVoiceAgentsPage />);
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify**

```bash
grep -c "og:title\|canonical\|application/ld\|sp-hero" hvac-voice-agents.html
# Expected: 4 or more
```

- [ ] **Step 3: Commit**

```bash
git add hvac-voice-agents.html
git commit -m "feat: add HVAC voice agents ICP landing page"
```

---

## Task 6: ICP Page — Realtor Lead Generation

**Files:**
- Create: `realtor-lead-generation.html`

- [ ] **Step 1: Create `realtor-lead-generation.html`**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Lead Generation for Realtors | Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="AI lead generation for Wisconsin realtors — automated follow-up, instant responses, and more booked showings without manual work. Serving Green Bay, Appleton, and NE Wisconsin." />
  <link rel="canonical" href="https://cre8yoursuccess.com/realtor-lead-generation.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Lead Generation for Realtors | Wisconsin | Cre8 Your Success" />
  <meta property="og:description" content="Follow up with every lead before the competition does. AI-powered lead gen and automated follow-up for Wisconsin realtors." />
  <meta property="og:url" content="https://cre8yoursuccess.com/realtor-lead-generation.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Lead Generation for Realtors | Wisconsin" />
  <meta name="twitter:description" content="Follow up with every lead before the competition does. AI-powered automation for Wisconsin realtors." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Lead Generation for Realtors",
    "description": "Automated lead generation and follow-up systems for Wisconsin realtors — instant responses, nurture sequences, and more booked showings without manual effort.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Real Estate Lead Generation Automation",
    "keywords": "realtor lead generation Wisconsin, real estate AI follow-up, automated showing scheduler, AI lead gen realtor Green Bay, real estate CRM automation Appleton"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="components.jsx"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function RealtorLeadGenPage() {
      return (
        <>
          <Nav />

          <section className="sp-hero">
            <div className="sp-hero-bg"></div>
            <div className="sp-hero-grid"></div>
            <div className="sp-hero-inner" style={{gridTemplateColumns:'1fr', textAlign:'center', maxWidth:880}}>
              <div>
                <div className="sp-crumb" style={{justifyContent:'center'}}>
                  <a href="index.html">Home</a>
                  <span className="sep">/</span>
                  <a href="lead-generation.html">Lead Generation</a>
                  <span className="sep">/</span>
                  <span className="here">Realtors</span>
                </div>
                <h1 className="sp-title">
                  Follow up with every lead<br/>
                  <span className="accent-o">before the competition</span> does.
                </h1>
                <p className="sp-sub" style={{marginLeft:'auto', marginRight:'auto'}}>AI-powered lead generation and automated follow-up for Wisconsin realtors. Every inquiry gets an instant response, every lead gets nurtured, and you get more booked showings — without working more hours. Serving realtors in Green Bay, Appleton, Oshkosh, and across Wisconsin.</p>
                <div className="sp-cta" style={{justifyContent:'center'}}>
                  <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                    Book a Free Demo
                    <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="lead-generation.html" className="btn-ghost">
                    See All Lead Gen Features
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="spec-strip">
            <div className="spec-strip-inner">
              <div className="spec"><div className="v">&lt;5<span className="unit">min</span></div><div className="l">First Response</div></div>
              <div className="spec"><div className="v">24<span className="unit">/7</span></div><div className="l">Lead Nurture</div></div>
              <div className="spec"><div className="v">6<span className="unit">x</span></div><div className="l">Reply Speed</div></div>
              <div className="spec"><div className="v">0</div><div className="l">Leads Dropped</div></div>
            </div>
          </div>

          <section className="section section-darker">
            <div className="container">
              <div className="eyebrow">The problem</div>
              <h2 className="section-title">Real estate leads go cold<br/>in minutes, not days.</h2>
              <p className="section-sub">The first agent to respond wins the lead. In real estate, speed-to-lead is the difference between a closed deal and a competitor's commission check.</p>
              <div className="pain-grid">
                <div className="pain-card">
                  <div className="label">Speed to lead</div>
                  <h4>5 minutes is already too late</h4>
                  <p>Lead conversion drops 80% after 5 minutes. When you're showing a home or on another call, your AI system responds instantly — so you never lose first-mover advantage.</p>
                  <div className="stat">8x<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> higher conversion within 5 minutes</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Manual follow-up</div>
                  <h4>You can't nurture 50 leads by hand</h4>
                  <p>Most leads don't buy for 3–6 months. Manually staying in touch with every prospect is a full-time job. Automated nurture sequences keep you top of mind without the work.</p>
                  <div className="stat">73%<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of leads buy within 12 months — from whoever stayed in touch</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Zillow & portal leads</div>
                  <h4>Paid leads need instant follow-up</h4>
                  <p>You're paying for every Zillow lead. If your follow-up is slow or inconsistent, you're burning money. AI follow-up makes every lead count.</p>
                  <div className="stat">$40–200<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> per lead — wasted without fast follow-up</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark" id="how">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">Your lead pipeline.<br/>Running on autopilot.</h2>
              <div className="process-row">
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg></div>
                  <span className="pn">STEP 01</span>
                  <h4>Lead audit</h4>
                  <p>We review your current lead sources, follow-up process, and conversion rate — and show you exactly where deals are falling through the cracks.</p>
                </div>
                <div className="process-step blue">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg></div>
                  <span className="pn">STEP 02</span>
                  <h4>Build your sequences</h4>
                  <p>We design instant-response templates, nurture sequences, and re-engagement campaigns tailored to buyer and seller leads in your market.</p>
                </div>
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h6l1-2 2 4 2-6 1 4h2"/></svg></div>
                  <span className="pn">STEP 03</span>
                  <h4>Connect & go live</h4>
                  <p>We integrate with your CRM and lead sources, flip the switch, and keep optimizing based on conversion data.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-darker">
            <div className="container" style={{textAlign:'center', maxWidth:780, margin:'0 auto'}}>
              <div className="eyebrow" style={{justifyContent:'center'}}>Ready to get started?</div>
              <h2 className="section-title">Book a free 30-minute demo.<br/>We'll map your lead pipeline live.</h2>
              <p className="section-sub" style={{marginLeft:'auto', marginRight:'auto'}}>We work with realtors in Green Bay, Appleton, Oshkosh, Sheboygan, and across Wisconsin. No obligation.</p>
              <div style={{marginTop:32, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
                <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                  Book a Free Demo
                  <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </section>

          <CtaBand />
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<RealtorLeadGenPage />);
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify**

```bash
grep -c "og:title\|canonical\|application/ld\|sp-hero" realtor-lead-generation.html
# Expected: 4 or more
```

- [ ] **Step 3: Commit**

```bash
git add realtor-lead-generation.html
git commit -m "feat: add realtor lead generation ICP landing page"
```

---

## Task 7: ICP Page — Recruiter Lead Generation

**Files:**
- Create: `recruiter-lead-generation.html`

- [ ] **Step 1: Create `recruiter-lead-generation.html`**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Lead Generation for Recruiters | Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="AI-powered lead generation and candidate outreach automation for Wisconsin recruiters. Fill more roles, manage more leads, without more overhead." />
  <link rel="canonical" href="https://cre8yoursuccess.com/recruiter-lead-generation.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Lead Generation for Recruiters | Wisconsin | Cre8 Your Success" />
  <meta property="og:description" content="Fill more roles with less manual work. AI automation for Wisconsin recruiters — candidate outreach, follow-up sequences, and pipeline management on autopilot." />
  <meta property="og:url" content="https://cre8yoursuccess.com/recruiter-lead-generation.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Lead Generation for Recruiters | Wisconsin" />
  <meta name="twitter:description" content="Fill more roles with less manual work. AI recruiting automation for Wisconsin." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Lead Generation for Recruiters",
    "description": "AI-powered candidate outreach, lead generation, and pipeline automation for recruiters and staffing firms in Wisconsin.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Recruiting Automation",
    "keywords": "recruiter automation Wisconsin, AI recruiting lead gen, staffing agency AI, candidate outreach automation Green Bay, recruiter CRM automation Wisconsin"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="components.jsx"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function RecruiterLeadGenPage() {
      return (
        <>
          <Nav />

          <section className="sp-hero">
            <div className="sp-hero-bg"></div>
            <div className="sp-hero-grid"></div>
            <div className="sp-hero-inner" style={{gridTemplateColumns:'1fr', textAlign:'center', maxWidth:880}}>
              <div>
                <div className="sp-crumb" style={{justifyContent:'center'}}>
                  <a href="index.html">Home</a>
                  <span className="sep">/</span>
                  <a href="lead-generation.html">Lead Generation</a>
                  <span className="sep">/</span>
                  <span className="here">Recruiters</span>
                </div>
                <h1 className="sp-title">
                  Fill more roles.<br/>
                  <span className="accent-o">Less manual work.</span>
                </h1>
                <p className="sp-sub" style={{marginLeft:'auto', marginRight:'auto'}}>AI-powered candidate outreach, follow-up automation, and pipeline management for Wisconsin recruiters and staffing firms. Stop doing manually what a system can do for you — and start placing more roles. Serving recruiters in Green Bay, Appleton, and across Wisconsin.</p>
                <div className="sp-cta" style={{justifyContent:'center'}}>
                  <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                    Book a Free Demo
                    <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="lead-generation.html" className="btn-ghost">
                    See All Lead Gen Features
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="spec-strip">
            <div className="spec-strip-inner">
              <div className="spec"><div className="v">&lt;5<span className="unit">min</span></div><div className="l">First Outreach</div></div>
              <div className="spec"><div className="v">24<span className="unit">/7</span></div><div className="l">Pipeline Running</div></div>
              <div className="spec"><div className="v">3<span className="unit">x</span></div><div className="l">More Placements</div></div>
              <div className="spec"><div className="v">0</div><div className="l">Candidates Dropped</div></div>
            </div>
          </div>

          <section className="section section-darker">
            <div className="container">
              <div className="eyebrow">The problem</div>
              <h2 className="section-title">Top candidates are off<br/>the market in 10 days.</h2>
              <p className="section-sub">Recruiting is a speed game. The firm that reaches out first, follows up consistently, and stays organized wins the placement. Manual processes can't keep up.</p>
              <div className="pain-grid">
                <div className="pain-card">
                  <div className="label">Speed to candidate</div>
                  <h4>First contact wins</h4>
                  <p>Top candidates receive multiple outreach messages per week. The first recruiter to follow up consistently — and personally — gets the reply. AI handles the volume so you can focus on the relationship.</p>
                  <div className="stat">10 days<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> avg. time top candidates stay available</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Pipeline management</div>
                  <h4>Manual tracking kills deals</h4>
                  <p>Spreadsheets and sticky notes don't scale. Candidates fall through the cracks, follow-ups get missed, and clients lose confidence. Automated pipelines keep everything moving.</p>
                  <div className="stat">60%<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of placements lost to slow follow-up</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Client development</div>
                  <h4>New clients need consistent outreach</h4>
                  <p>Building a client base requires touching dozens of hiring managers over months. Automated outreach sequences keep you top of mind without consuming your whole week.</p>
                  <div className="stat">7 touches<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> before a prospect engages on average</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark" id="how">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">Your recruiting pipeline.<br/>Automated end to end.</h2>
              <div className="process-row">
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg></div>
                  <span className="pn">STEP 01</span>
                  <h4>Pipeline audit</h4>
                  <p>We map your current candidate sourcing, outreach, and follow-up process — and identify exactly where placements are being lost.</p>
                </div>
                <div className="process-step blue">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg></div>
                  <span className="pn">STEP 02</span>
                  <h4>Build your sequences</h4>
                  <p>We design outreach sequences for candidates and clients — personalized at scale, timed for maximum response rates, and tailored to your niche.</p>
                </div>
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h6l1-2 2 4 2-6 1 4h2"/></svg></div>
                  <span className="pn">STEP 03</span>
                  <h4>Connect & go live</h4>
                  <p>We integrate with your ATS or CRM, go live, and optimize sequences based on open and reply rates.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-darker">
            <div className="container" style={{textAlign:'center', maxWidth:780, margin:'0 auto'}}>
              <div className="eyebrow" style={{justifyContent:'center'}}>Ready to get started?</div>
              <h2 className="section-title">Book a free 30-minute demo.<br/>We'll show you the system live.</h2>
              <p className="section-sub" style={{marginLeft:'auto', marginRight:'auto'}}>We work with recruiters and staffing firms in Green Bay, Appleton, Oshkosh, and across Wisconsin. No obligation.</p>
              <div style={{marginTop:32, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
                <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                  Book a Free Demo
                  <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </section>

          <CtaBand />
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<RecruiterLeadGenPage />);
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify**

```bash
grep -c "og:title\|canonical\|application/ld\|sp-hero" recruiter-lead-generation.html
# Expected: 4 or more
```

- [ ] **Step 3: Commit**

```bash
git add recruiter-lead-generation.html
git commit -m "feat: add recruiter lead generation ICP landing page"
```

---

## Task 8: ICP Page — Insurance & Investment Automation

**Files:**
- Create: `insurance-automation.html`

- [ ] **Step 1: Create `insurance-automation.html`**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Automation for Insurance & Investment Professionals | Wisconsin | Cre8 Your Success</title>
  <meta name="description" content="AI automation for Wisconsin insurance agents and investment advisors. Automated lead follow-up, appointment scheduling, and client nurture — so you spend more time advising." />
  <link rel="canonical" href="https://cre8yoursuccess.com/insurance-automation.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="AI Automation for Insurance & Investment Professionals | Wisconsin | Cre8 Your Success" />
  <meta property="og:description" content="Spend more time advising. Less time on admin. AI automation for Wisconsin insurance and investment professionals — lead follow-up, scheduling, and client nurture on autopilot." />
  <meta property="og:url" content="https://cre8yoursuccess.com/insurance-automation.html" />
  <meta property="og:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AI Automation for Insurance & Investment | Wisconsin" />
  <meta name="twitter:description" content="More time advising. Less time on admin. AI automation for Wisconsin financial professionals." />
  <meta name="twitter:image" content="https://cre8yoursuccess.com/assets/logo-horizontal.png" />

  <!-- JSON-LD: Service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation for Insurance and Investment Professionals",
    "description": "Automated lead follow-up, appointment scheduling, and client nurture systems for insurance agents and investment advisors in Wisconsin.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cre8 Your Success",
      "url": "https://cre8yoursuccess.com"
    },
    "areaServed": [
      {"@type": "City", "name": "Green Bay"},
      {"@type": "City", "name": "Appleton"},
      {"@type": "City", "name": "Oshkosh"},
      {"@type": "City", "name": "Sheboygan"},
      {"@type": "City", "name": "Fond du Lac"},
      {"@type": "City", "name": "Manitowoc"},
      {"@type": "City", "name": "Two Rivers"}
    ],
    "serviceType": "Insurance and Financial Advisor Automation",
    "keywords": "insurance agent AI automation Wisconsin, investment advisor lead gen, financial advisor automation Green Bay, insurance lead follow-up Appleton, AI client nurture Wisconsin"
  }
  </script>

  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="subpages.css" />

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="components.jsx"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    function InsuranceAutomationPage() {
      return (
        <>
          <Nav />

          <section className="sp-hero">
            <div className="sp-hero-bg"></div>
            <div className="sp-hero-grid"></div>
            <div className="sp-hero-inner" style={{gridTemplateColumns:'1fr', textAlign:'center', maxWidth:880}}>
              <div>
                <div className="sp-crumb" style={{justifyContent:'center'}}>
                  <a href="index.html">Home</a>
                  <span className="sep">/</span>
                  <a href="lead-generation.html">Lead Generation</a>
                  <span className="sep">/</span>
                  <span className="here">Insurance & Investment</span>
                </div>
                <h1 className="sp-title">
                  More time advising.<br/>
                  <span className="accent-o">Less time on admin.</span>
                </h1>
                <p className="sp-sub" style={{marginLeft:'auto', marginRight:'auto'}}>AI automation for Wisconsin insurance agents and investment advisors. Automated lead follow-up, appointment scheduling, and long-term client nurture — so your pipeline stays warm while you focus on the work only you can do. Serving professionals in Green Bay, Appleton, Oshkosh, and across Wisconsin.</p>
                <div className="sp-cta" style={{justifyContent:'center'}}>
                  <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                    Book a Free Demo
                    <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a href="lead-generation.html" className="btn-ghost">
                    See All Lead Gen Features
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="spec-strip">
            <div className="spec-strip-inner">
              <div className="spec"><div className="v">&lt;5<span className="unit">min</span></div><div className="l">Lead Response</div></div>
              <div className="spec"><div className="v">24<span className="unit">/7</span></div><div className="l">Nurture Active</div></div>
              <div className="spec"><div className="v">0</div><div className="l">Referrals Dropped</div></div>
              <div className="spec"><div className="v">6<span className="unit">x</span></div><div className="l">Reply Speed</div></div>
            </div>
          </div>

          <section className="section section-darker">
            <div className="container">
              <div className="eyebrow">The problem</div>
              <h2 className="section-title">The best advisors lose<br/>deals to slower follow-up.</h2>
              <p className="section-sub">Referrals and warm leads are your lifeblood — but they go cold fast. Between client meetings, compliance work, and market monitoring, staying on top of every lead manually isn't realistic.</p>
              <div className="pain-grid">
                <div className="pain-card">
                  <div className="label">Quote follow-up</div>
                  <h4>Sent a quote. Never heard back.</h4>
                  <p>Most prospects need 3–5 follow-up touches before they respond. Manually tracking and sending each one takes hours you don't have. Automated sequences do it for you.</p>
                  <div className="stat">80%<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of sales require 5+ follow-up touches</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Referral leakage</div>
                  <h4>Referrals go cold without fast follow-up</h4>
                  <p>Someone gives you a warm referral — but you're in a meeting, then a call, then client work. By the time you reach out, the moment has passed. AI responds instantly on your behalf.</p>
                  <div className="stat">48hrs<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> is how long a referral stays warm on average</span></div>
                </div>
                <div className="pain-card">
                  <div className="label">Client retention</div>
                  <h4>Clients churn from neglect, not price</h4>
                  <p>Most clients who leave didn't leave for a better rate — they left because they felt forgotten. Automated check-ins and touchpoints keep you top of mind between reviews.</p>
                  <div className="stat">68%<span style={{fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:500}}> of clients leave due to perceived indifference</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark" id="how">
            <div className="container">
              <div className="eyebrow">How it works</div>
              <h2 className="section-title">Your client pipeline.<br/>Warm and working 24/7.</h2>
              <div className="process-row">
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 5v5l3 2"/></svg></div>
                  <span className="pn">STEP 01</span>
                  <h4>Pipeline audit</h4>
                  <p>We review your lead sources, follow-up cadence, and client touchpoint strategy — and identify exactly where revenue is leaking.</p>
                </div>
                <div className="process-step blue">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 8h6M7 12h4"/></svg></div>
                  <span className="pn">STEP 02</span>
                  <h4>Build your sequences</h4>
                  <p>We design quote follow-up flows, referral response sequences, and long-term nurture campaigns that feel personal — and are fully compliant with your industry's communication rules.</p>
                </div>
                <div className="process-step">
                  <div className="pi"><svg viewBox="0 0 20 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h6l1-2 2 4 2-6 1 4h2"/></svg></div>
                  <span className="pn">STEP 03</span>
                  <h4>Connect & go live</h4>
                  <p>We integrate with your CRM, go live, and track conversion rates so you can see exactly what's working.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-darker">
            <div className="container" style={{textAlign:'center', maxWidth:780, margin:'0 auto'}}>
              <div className="eyebrow" style={{justifyContent:'center'}}>Ready to get started?</div>
              <h2 className="section-title">Book a free 30-minute demo.<br/>We'll map your pipeline live.</h2>
              <p className="section-sub" style={{marginLeft:'auto', marginRight:'auto'}}>We work with insurance agents and investment advisors in Green Bay, Appleton, Oshkosh, Sheboygan, and across Wisconsin. No obligation.</p>
              <div style={{marginTop:32, display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
                <a href="https://calendly.com/michael-cre8yoursuccess/30min" target="_blank" rel="noopener" className="btn-primary">
                  Book a Free Demo
                  <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </section>

          <CtaBand />
          <Footer />
        </>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<InsuranceAutomationPage />);
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify**

```bash
grep -c "og:title\|canonical\|application/ld\|sp-hero" insurance-automation.html
# Expected: 4 or more
```

- [ ] **Step 3: Commit**

```bash
git add insurance-automation.html
git commit -m "feat: add insurance and investment automation ICP landing page"
```

---

## Task 9: Deploy & Post-Deploy Verification

**Files:** None — push to main triggers GitHub Actions → Netlify deploy

- [ ] **Step 1: Final local check — all files present**

```bash
ls robots.txt sitemap.xml medspa-voice-agents.html hvac-voice-agents.html realtor-lead-generation.html recruiter-lead-generation.html insurance-automation.html
# Expected: all 7 files listed, no "No such file" errors
```

- [ ] **Step 2: Confirm all existing pages have SEO tags**

```bash
for f in index.html voice-agents.html lead-generation.html healthcare.html workflow-automation.html; do
  count=$(grep -c "og:title\|canonical\|application/ld" "$f")
  echo "$f: $count (expected 3+)"
done
```

- [ ] **Step 3: Push to main**

```bash
git push origin main
```

- [ ] **Step 4: Confirm GitHub Actions passed**

Go to `https://github.com/Cre8Chaos/cre8-your-success-website/actions` and verify the deploy job shows green. Wait for the health-check job to complete.

- [ ] **Step 5: Verify robots.txt is live**

```bash
curl -s https://cre8yoursuccess.com/robots.txt
# Expected output:
# User-agent: *
# Allow: /
# Sitemap: https://cre8yoursuccess.com/sitemap.xml
```

- [ ] **Step 6: Verify sitemap.xml is live**

```bash
curl -s https://cre8yoursuccess.com/sitemap.xml | grep -c "<loc>"
# Expected: 10
```

- [ ] **Step 7: Spot-check an ICP page**

```bash
curl -s https://cre8yoursuccess.com/medspa-voice-agents.html | grep -c "og:title\|canonical"
# Expected: 2 or more
```

---

## Task 10: Google Search Console Setup

This is a manual step — no code changes.

- [ ] **Step 1: Go to Google Search Console**

Navigate to `https://search.google.com/search-console`

- [ ] **Step 2: Add property**

Click "Add property" → choose "URL prefix" → enter `https://cre8yoursuccess.com`

- [ ] **Step 3: Verify ownership via HTML tag**

Google will show you a `<meta name="google-site-verification" content="...">` tag.

Add it to `index.html` inside `<head>`, directly after the Twitter Card block:

```html
<meta name="google-site-verification" content="PASTE_YOUR_CODE_HERE" />
```

Commit and push:

```bash
git add index.html
git commit -m "feat: add Google Search Console verification tag"
git push origin main
```

Then click "Verify" in Search Console.

- [ ] **Step 4: Submit sitemap**

In Search Console: left sidebar → "Sitemaps" → enter `sitemap.xml` → click Submit.

Expected: Status shows "Success" within a few minutes.

- [ ] **Step 5: Request indexing for priority pages**

In Search Console: URL Inspection tool → enter each of these URLs → click "Request Indexing":
- `https://cre8yoursuccess.com/`
- `https://cre8yoursuccess.com/medspa-voice-agents.html`
- `https://cre8yoursuccess.com/hvac-voice-agents.html`

This speeds up initial crawl from days to hours.

---

## Success Criteria Checklist

- [ ] `robots.txt` live at `https://cre8yoursuccess.com/robots.txt`
- [ ] `sitemap.xml` live with all 10 pages
- [ ] All 5 existing pages have `og:title`, `meta description`, `canonical`, and JSON-LD
- [ ] 5 ICP pages live with industry-specific content and JSON-LD
- [ ] Google Search Console verified and sitemap submitted
- [ ] No GitHub Actions failures on deploy
