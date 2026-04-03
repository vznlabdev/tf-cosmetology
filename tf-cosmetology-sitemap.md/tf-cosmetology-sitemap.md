# TF Cosmetology — Sitemap and Routing Plan

## Primary Pages

| Page | Route | Template Reference | Priority |
|------|-------|--------------------|----------|
| Homepage | / | design/homepage.html | Build first |
| About Us | /about | design/about.html | Phase 2 |
| Products | /products | design/products.html | Phase 2 |
| How It Works / Services | /services | design/services.html | Phase 2 |
| Get Started | /get-started | design/get-started.html | Phase 2 |
| Supplements and Nutraceuticals | /supplements | design/supplements.html | Phase 2 |
| Production | /production | design/production.html | Phase 3 |
| Branding | /branding | design/services.html (adapted) | Phase 3 |
| News and Insights | /insights | design/news.html | Phase 3 |
| Heritage / Brand Story | /heritage | design/heritage.html | Phase 3 |

## Secondary Pages (build later)

| Page | Route | Notes |
|------|-------|-------|
| Privacy Policy | /privacy | Simple text page |
| Terms of Service | /terms | Simple text page |
| Thank You | /thank-you | Post form submission confirmation |
| 404 | /not-found | Custom branded 404 |

## Navigation Structure

### Main Nav (header)
Products | Manufacturing | About | Supplements | Journal | Contact

### Footer Nav
**Column 1 — Solutions:** Formulation | Compliance | Manufacturing | Supplements
**Column 2 — Company:** About | Heritage | Production | News
**Column 3 — Legal:** Privacy Policy | Terms of Service | Regulatory Compliance

## Bilingual Routing (Phase 4)

| Language | Prefix | Example |
|----------|--------|---------|
| English (default) | / | /products |
| Thai | /th/ | /th/products |

Use next-intl for i18n routing. English is default, Thai is secondary.
Content JSON files: messages/en.json and messages/th.json

## Internal Linking Map

### Homepage links to:
- /get-started (primary CTA "Get a Free Quote")
- /products (product category cards)
- /services (How It Works section)
- /supplements (persona card for supplement brands)
- /about (footer)

### Products links to:
- /get-started (Request Sample buttons)
- Email gate popup (View Catalog buttons capture email then deliver PDF)
- /services (floating R&D button)

### Services links to:
- /get-started (form section and CTA)
- /production (capability reference)

### Supplements links to:
- /get-started (Start Formulation CTA)
- /products (Explore Catalog links)
- /about (credentials link)

### About links to:
- /get-started (bottom CTA)
- /heritage (deeper brand story)

### Get Started links to:
- /thank-you (post form submission)

### News links to:
- Individual article pages at /insights/[slug] (future, not in v1)
- /get-started (newsletter captures email)

## SEO Metadata Per Page

| Page | Title | Description |
|------|-------|-------------|
| Homepage | TF Cosmetology — GMP Certified OEM Manufacturer for Beauty, Supplements and Functional Foods | Contract manufacturer in Bangkok, Thailand. Skincare, supplements, functional foods. GMP and ISO certified with R&D partners in Korea, Italy, France and Japan. |
| About | About TF Cosmetology — 30 Plus Years of Manufacturing Excellence | Meet the team and global R&D network behind 500 plus successful brand launches. GMP certified facility in Bangkok. |
| Products | Product Range — Skincare, Supplements, Body Care, Soap, Makeup | Explore our full product catalog. Proven formulas ready to customize. Low MOQ available. Download our catalog. |
| Services | OEM and ODM Manufacturing Services — From Concept to Delivery | Bespoke formulation, scalable production and full regulatory compliance. Start your project with TF Cosmetology. |
| Get Started | Get Started — Launch Your Brand with TF Cosmetology | Tell us about your project. Free consultation. We respond within 24 hours with a custom manufacturing plan. |
| Supplements | Supplements and Nutraceuticals Manufacturing — Capsules, Gummies, Powders | GMP certified supplement manufacturing. Colostrum, gummies, functional coffee, wellness blends. Global ingredient sourcing. |
| Production | Our Facility — GMP Certified Manufacturing in Bangkok | Tour our production capabilities. Quality standards, facility specs and manufacturing process for cosmetics and supplements. |
| Branding | Branding Services — Logo, Packaging and Regulatory Labeling | Full brand development from identity design to FDA compliant packaging. We build brands not just products. |
| News | Insights — Beauty and Supplement Industry Trends and Guides | Industry trends, ingredient spotlights and brand building guides from TF Cosmetology. |
| Heritage | Our Story — TF Cosmetology Since 1990 | The history and evolution of TF Cosmetology from Bangkok startup to globally connected OEM manufacturer. |

## Conversion Tracking Points

| Event | Location | Action |
|-------|----------|--------|
| Quote form submit | Homepage sticky CTA | Primary conversion |
| Get Started form submit | /get-started | Primary conversion |
| Catalog download | Products page email gate | Lead capture |
| Newsletter signup | News page bottom bar | Lead capture |
| Request Sample click | Products page cards | Micro conversion |
| Phone/LINE click | Get Started sidebar | Contact event |
| Quiz completion | Products page quiz | Engagement |

## Sitemap.xml Generation

Next.js generates this automatically via app/sitemap.ts. Include all primary pages, exclude /thank-you and /not-found. Set homepage and products as highest priority.

## Robots.txt

Allow all crawlers on all primary pages. Disallow /thank-you and /api routes.
