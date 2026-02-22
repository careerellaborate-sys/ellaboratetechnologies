# Ellaborate Technologies — Production Deployment Guide

## Project Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blog**: Static Markdown (gray-matter + remark)
- **Forms**: Formspree (no database required)
- **Deployment**: Vercel

---

## 1. Local Development Setup

```bash
# Clone and install
git clone <repo>
cd ellaborate-technologies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000
```

---

## 2. Required Configurations Before Launch

### 2.1 Formspree Contact Form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — note the Form ID (e.g., `xyzwabcd`)
3. In `/app/contact/page.tsx`, replace:
   ```
   https://formspree.io/f/FORMSPREE_ID
   ```
   with:
   ```
   https://formspree.io/f/xyzwabcd
   ```

### 2.2 Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `https://ellaboratetechnologies.com`
3. Choose HTML file verification method
4. Download the verification file (e.g., `google1a2b3c4d5e.html`)
5. Place it in `/public/` directory
6. Replace the placeholder file `public/googleXXXXXXXXXXXXXXXX.html`
7. Also update the `verification.google` value in `/app/layout.tsx`

### 2.3 Domain & Canonical URLs

Replace all instances of `https://ellaboratetechnologies.com` with your actual domain in:
- `/app/layout.tsx` (metadataBase)
- `/app/sitemap.ts`
- All `alternates.canonical` in each page

### 2.4 OG Images

Add OpenGraph images to `/public/og/`:
- `default.png` — 1200×630px — general brand image

Use tools like [og-image.vercel.app](https://og-image.vercel.app) or Figma to create branded OG images.

---

## 3. Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic CI/CD on push.

---

## 4. Post-Deployment SEO Checklist

- [ ] Submit `https://yourdomain.com/sitemap.xml` in Google Search Console
- [ ] Verify GSC HTML file is accessible at `https://yourdomain.com/googleXXX.html`
- [ ] Test OG images with [opengraph.xyz](https://opengraph.xyz)
- [ ] Run Lighthouse audit — target 90+ Performance, 100 SEO, 100 Accessibility
- [ ] Set up Google Analytics 4 or Plausible Analytics
- [ ] Configure DNS properly — ensure no www/non-www duplicate

---

## 5. Adding Blog Posts

Create Markdown files in `/content/blog/`:

```
/content/blog/your-post-slug.md
```

Required frontmatter:
```markdown
---
title: "Your Post Title"
description: "SEO meta description (150-160 chars)"
date: "2024-12-01"
author: "Author Name"
tag: "AI / ML"
readTime: "6 min read"
---

Your content here...
```

Posts are automatically included in the sitemap and blog index.

---

## 6. Project Structure

```
ellaborate-technologies/
├── app/
│   ├── layout.tsx          # Root layout + global SEO metadata
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Blog post
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CaseStudiesPreview.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       └── motion.tsx      # Framer Motion wrappers
├── lib/
│   └── blog.ts             # Blog post utilities
├── content/
│   └── blog/               # Markdown blog posts
├── public/
│   ├── robots.txt
│   ├── og/                 # OG images
│   └── googleXXX.html      # GSC verification
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

---

## 7. Customization Guide

### Colors
All brand colors are defined in `tailwind.config.ts`:
```ts
"brand-navy": "#0A1A4A",
"brand-blue": "#2563EB",
"brand-sky": "#3B82F6",
"brand-bg": "#F9FAFB",
"brand-dark": "#0F172A",
```

### Company Details
Update company name, address, phone, email across:
- `components/layout/Footer.tsx`
- `components/layout/Navbar.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (JSON-LD)

### Services
Edit the services array in:
- `components/sections/ServicesSection.tsx` (home preview)
- `app/services/page.tsx` (full details)
