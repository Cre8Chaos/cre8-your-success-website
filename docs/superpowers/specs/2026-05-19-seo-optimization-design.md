# SEO Optimization Design — cre8yoursuccess.com
**Date:** 2026-05-19  
**Approach:** Technical Foundation + ICP Landing Pages  
**Priority:** Brand search first (cold call credibility), discovery second

---

## Context

Static site on Netlify (CDN React + Babel, no build step). Currently has zero SEO infrastructure — only bare `<title>` tags on each page. Owner is actively cold calling in NE Wisconsin targeting medspas, HVAC companies, realtors, recruiters, and insurance/investment professionals. Goal: when a cold call prospect Googles the brand or the service, they find a credible, relevant result fast.

---

## Section 1 — Technical SEO Foundation

Applied to all 5 existing pages: `index.html`, `healthcare.html`, `lead-generation.html`, `voice-agents.html`, `workflow-automation.html`.

### Meta Tags (per page)
- `<meta name="description">` — unique 150–160 char description, action-oriented, keyword-rich
- `<link rel="canonical" href="https://cre8yoursuccess.com/[page].html">` — prevents duplicate indexing

### Social Sharing (per page)
Open Graph and Twitter Card tags so LinkedIn/social previews look professional:
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://cre8yoursuccess.com/[page].html" />
<meta property="og:image" content="https://cre8yoursuccess.com/assets/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://cre8yoursuccess.com/assets/og-image.png" />
```

### Crawl Infrastructure
- `robots.txt` — allow-all, point to sitemap
- `sitemap.xml` — all pages with `<lastmod>` dates, submitted to Google Search Console

### Structured Data (JSON-LD)
- **Homepage (`index.html`):** `LocalBusiness` schema — business name, service area (NE Wisconsin), URL, description. Powers Google knowledge panel on brand searches.
- **Service pages:** `Service` schema per page with relevant industry keywords and geo.
- **ICP pages:** `Service` schema with ICP-specific keywords + NE Wisconsin geo.

---

## Section 2 — ICP Landing Pages

Five new static HTML pages following the same pattern as existing service pages. No build step required.

| File | Title Tag | Primary Keywords |
|------|-----------|-----------------|
| `medspa-voice-agents.html` | AI Voice Agents for Medspas \| NE Wisconsin | "medspa AI phone answering Wisconsin", "AI receptionist medspa" |
| `hvac-voice-agents.html` | AI Voice Agents for HVAC \| NE Wisconsin | "AI phone agent HVAC Wisconsin", "HVAC answering service AI" |
| `realtor-lead-generation.html` | AI Lead Generation for Realtors \| Wisconsin | "AI lead gen realtor Wisconsin", "automated follow-up real estate" |
| `recruiter-lead-generation.html` | AI Lead Generation for Recruiters \| Wisconsin | "AI recruiting automation Wisconsin", "recruiter lead generation AI" |
| `insurance-automation.html` | AI Automation for Insurance & Investment \| Wisconsin | "AI automation insurance agent Wisconsin", "investment advisor lead gen AI" |

### Per-Page Structure
Each ICP page contains:
1. **Hero** — industry-specific headline + 2–3 pain point bullets (e.g. "Missed calls = missed bookings")
2. **How it works** — 3-step process reusing existing content patterns from `home-components.jsx`
3. **CTA** — book a consult (Calendly link), same as rest of site
4. **JSON-LD** — `Service` schema with ICP keywords + NE Wisconsin service area
5. Added to `sitemap.xml`

### NE Wisconsin Cities to Name Explicitly
Include in JSON-LD `areaServed` and in page copy where natural: Green Bay, Appleton, Oshkosh, Sheboygan, Fond du Lac, Manitowoc, Two Rivers. This improves local pack ranking for city-level searches.

### Cold Call Use
These pages double as cold call follow-up URLs. Example: "I'll send you our medspa page" → `cre8yoursuccess.com/medspa-voice-agents.html`. Prospect lands on content written specifically for their world.

---

## Section 3 — Off-Site (Manual Steps — Already Started)

| Step | Status |
|------|--------|
| Google Business Profile created | ✅ Done |
| Category: Business Management Consultant | ✅ Done |
| Service area: NE Wisconsin | ✅ Done |
| Google Search Console verification | Pending — do after sitemap.xml is live |
| Submit sitemap.xml to Search Console | Pending — do after deploy |

### Google Search Console Steps (post-deploy)
1. Go to search.google.com/search-console
2. Add property → URL prefix → `https://cre8yoursuccess.com`
3. Verify via HTML tag method (add `<meta name="google-site-verification">` to `index.html`)
4. Submit sitemap: Sitemaps → add `https://cre8yoursuccess.com/sitemap.xml`

---

## Page-by-Page Meta Descriptions

### index.html
> Cre8 Your Success builds custom AI voice agents, lead generation systems, and workflow automation for businesses in NE Wisconsin. Win the lead before your competitor responds.

### voice-agents.html
> AI voice agents that answer calls 24/7, qualify leads, and book appointments — built for medspas, HVAC, and service businesses in NE Wisconsin.

### lead-generation.html
> Automated lead generation systems for realtors, recruiters, and insurance professionals in Wisconsin. Follow up faster, close more, without adding headcount.

### healthcare.html
> AI automation for healthcare and wellness businesses in NE Wisconsin. Reduce admin overhead, respond to patients faster, and never miss a booking.

### workflow-automation.html
> Custom workflow automation built for Wisconsin businesses. Eliminate manual tasks, connect your tools, and reclaim hours every week.

---

## Files to Create/Modify

**Modify (add SEO tags):**
- `index.html`
- `healthcare.html`
- `lead-generation.html`
- `voice-agents.html`
- `workflow-automation.html`

**Create new:**
- `robots.txt`
- `sitemap.xml`
- `medspa-voice-agents.html`
- `hvac-voice-agents.html`
- `realtor-lead-generation.html`
- `recruiter-lead-generation.html`
- `insurance-automation.html`
- `assets/og-image.png` (1200×630px social share image — can use existing logo/brand assets)

---

## Success Criteria

- All 5 existing pages have complete meta, OG, canonical, and JSON-LD tags
- `robots.txt` and `sitemap.xml` are live and accessible
- 5 ICP pages are live, indexed, and contain industry-specific content
- Google Search Console shows sitemap submitted and pages indexing
- Brand search for "Cre8 Your Success" returns knowledge panel (GBP) + rich result
