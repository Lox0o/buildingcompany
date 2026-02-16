# Tradie recruitment landing page

Single-page recruitment site built from the PRD. Mobile-first, fast, ready to deploy.

## What’s in the folder

- **index.html** — All sections: Hero, Portfolio, About Ed, About business, What we offer, How it works, Form, FAQ, Footer.
- **styles.css** — Layout and styling (no build step).
- **script.js** — Portfolio grid, filter, lightbox, FAQ accordion, offer tabs.
- **data.js** — Editable content: portfolio projects, FAQ, testimonials (turn on when you have 2+).
- **images/** — Image folders: `hero/`, `portfolio/`, `about/`, `testimonials/`. See `images/README.md` for details.
- **sitemap.xml** / **robots.txt** — Update the domain to your live URL before or after deploy.

## 1. Add your Tally form

1. In Tally, open your form → **Share** → **Embed**.
2. Copy the **iframe** code.
3. Open **index.html** and find the `<iframe data-tally-embed ...>` in the **Register your interest** section.
4. Replace `https://tally.so/embed/YOUR_FORM_ID` with your real Tally embed URL (e.g. `https://tally.so/embed/abc123`).
5. Remove or hide the grey note paragraph below the iframe once the form works.

## 2. Edit placeholder content

- **index.html**  
  - Hero: headline, subhead, location, urgency text.  
  - About Ed: edit bio, quote, and **licence number** in credentials. The image path is already set to `images/about/ed-on-site.jpg` — just add your photo there.  
  - What we offer: add your real rate range and suburbs.  
  - Footer: company name, ABN, licence number, phone, email, service area, privacy line. Optionally add social links in the footer-social div.  
  - **SEO**: Replace `https://yoursite.com.au` in the canonical link, Open Graph and Twitter meta tags, and in the JSON-LD script at the bottom. Replace `og-image.jpg` with a real image URL (e.g. hero or logo).  
  - **sitemap.xml** and **robots.txt**: Replace `https://yoursite.com.au` with your live domain.

- **images/**  
  - **hero/**: Add `hero-bg.jpg` (1920x1080px or larger) for the hero background.  
  - **about/**: Add `ed-on-site.jpg` (portrait or job-site photo).  
  - **portfolio/**: Add your project photos and update URLs in `data.js` to point to `images/portfolio/`.  
  - **testimonials/**: Add worker photos when you have testimonials.

- **data.js**  
  - **portfolio**: Replace placeholder image URLs with paths to your photos in `images/portfolio/`. Add/remove projects; keep `type` (bathroom, kitchen, deck, structural, fitout) for the filter.  
  - **faq**: Replace the `[your rate range]` and `[Your suburbs/regions]` with your actual details.  
  - **testimonials**: When you have 2+ worker testimonials, set `testimonialsEnabled: true` and fill the `testimonials` array. The section will show automatically.

## 3. Preview locally

Open **index.html** in a browser (double-click or “Open with Live Server” in VS Code).  
Or run a simple server from this folder:

```bash
cd landing-page
npx serve .
```

Then open the URL it prints (e.g. http://localhost:3000).

## 4. Deploy

**Option A — Netlify (easiest)**  
1. Go to [netlify.com](https://www.netlify.com) and sign up.  
2. Drag the **landing-page** folder onto the Netlify “Drop” zone.  
3. You get a live URL. In **Domain settings** you can add your own domain (e.g. join.yourcompany.com.au).

**Option B — Vercel**  
1. Push this folder to a GitHub repo.  
2. Go to [vercel.com](https://vercel.com), import the repo.  
3. Set the project root to the folder that contains `index.html` (e.g. `landing-page`).  
4. Deploy. Add your domain in Project → Settings → Domains.

**Option C — Cloudflare Pages**  
1. Push to GitHub.  
2. In Cloudflare Pages: Create project → Connect Git → select repo.  
3. Build settings: Framework preset **None**, build output **the folder that contains index.html**.  
4. Deploy and add your domain.

## 5. After go-live

- **SMS confirmation**: In Zapier or Make, create a zap: trigger = **New record in Airtable** (your Submissions table) → action = **Send SMS** (Twilio, MessageMedia, or BurstSMS). Use the **Mobile** field and a message like: “Hi [Name], we got your details. We’ll be in touch within 48 hours.”
- **Domain**: Point your chosen domain (e.g. join.yourcompany.com.au) at the deployed site using the host’s instructions (Netlify/Vercel/Cloudflare).

## Customisation

- **Colours**: In **styles.css**, change the `:root` variables (e.g. `--color-accent`, `--color-bg`).  
- **Hero background**: Replace the `hero-bg` image URL in **index.html** or in CSS (`.hero-bg`) with a real job-site photo.  
- **Font**: The site uses DM Sans from Google Fonts. You can switch the font link and `--font-sans` in **styles.css** if you prefer another font.
