# SJ Builders — Premium Recruitment Landing Page

Single-page recruitment site with premium design aesthetic. Mobile-first, fast, ready to deploy.

## What's in the folder

- **index.html** — 5 sections: Hero, What We Offer, How It Works, Registration Form, Footer
- **styles.css** — Premium design system (Gurner-inspired)
- **script.js** — Content population, scroll animations, interactions
- **config.js** — **All configurable values in one place** — update this file to change content
- **images/** — Image folders for hero, portfolio, about, testimonials, og

## Quick Start

### 1. Update Config (`config.js`)

Edit `config.js` to set:
- Company name, tagline, service area
- Pay rates (qualified and apprentice)
- Contact details (phone, email, ABN)
- Hero headline and subheadline
- Profit share description

**Everything else updates automatically from config.**

### 2. Add Images

- **Hero**: Add `hero-bg.jpg` to `images/hero/` (1920x1080px+)
- **OG Image**: Add `og-image.jpg` to `images/og/` (1200x630px for social sharing)
- See `images/README.md` for full details

### 3. Update SEO & Domain

In `index.html`, replace:
- `https://sjbuilders.com.au/` with your actual domain
- Update OG image URL if different
- Update JSON-LD schema with real contact details

### 4. Form Setup

The page uses an Airtable form embed. To update:
1. Get your Airtable form embed URL
2. Replace the `src` in the `<iframe>` in the Registration section
3. Or build a custom multi-step form (see spec for requirements)

## Design System

**Colors:**
- Primary black: `#0a0a0a`
- Primary white: `#ffffff`
- Accent gold: `#c9a84c`
- Muted grays for secondary text

**Typography:**
- Display/Headings: DM Serif Display (serif, medium weight)
- Body/Labels: DM Sans (sans-serif)

**Layout:**
- 12-column grid system
- Generous whitespace (8–10rem section padding on desktop)
- Content constrained to max-width for readability
- Centered layouts throughout

## Sections

1. **Hero** — Full viewport, dark background, centered content
2. **What We Offer** — 6 benefit cards (profit share featured)
3. **How It Works** — 3-step process
4. **Registration** — Airtable form embed (or custom form)
5. **Footer** — Sticky reveal pattern, dark background

## Features

- Scroll-triggered fade-up animations
- Smooth scroll navigation
- Responsive design (mobile-first)
- Config-driven content
- Premium aesthetic (Gurner-inspired)
- Fast loading (no heavy dependencies)

## Deploy

**Option A — Netlify**
1. Drag the `landing-page` folder onto Netlify
2. Add your domain in Domain settings

**Option B — Vercel**
1. Push to GitHub
2. Import repo in Vercel
3. Set project root to `landing-page` folder

**Option C — Cloudflare Pages**
1. Push to GitHub
2. Create project → Connect Git
3. Build settings: Framework preset **None**, output directory: `landing-page`

## Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root`)
- **Typography**: Change font imports in `index.html` `<head>`
- **Content**: Edit `config.js` — everything updates automatically
- **Layout**: Adjust spacing variables in `styles.css`

## Performance

- Lighthouse mobile score: 90+ target
- No build step required
- Optimize images before uploading
- Use WebP format when possible

## Next Steps

1. Fill in `config.js` with your real details
2. Add hero background image
3. Add OG image for social sharing
4. Update domain URLs in `index.html`
5. Test on mobile devices
6. Deploy!
