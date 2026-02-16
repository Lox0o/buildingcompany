# Image Folders

Organize your images here. Each folder has its own README with specific instructions.

---

## Where to add background pictures

**Hero (main background):**
- **Folder:** `images/hero/`
- **Filename:** `hero-bg.jpg` (or `hero-bg.png` / `hero-bg.webp`)
- **What it does:** Full-screen background behind the headline and CTA at the top of the page.
- **In code:** Set in `styles.css` — search for `.hero-bg` and the `background-image: url("images/hero/hero-bg.jpg")` line. Change the path if you use a different filename.

**Social / link preview image:**
- **Folder:** `images/og/`
- **Filename:** `og-image.jpg`
- **What it does:** Image shown when the page is shared (e.g. SMS, WhatsApp, social).
- **In code:** Update the `og:image` and `twitter:image` meta tags in `index.html` if your URL or filename is different.

**No other background images** are used on the current page. Section backgrounds are solid colours (white and black).

---

## Folder Structure

```
images/
├── hero/              # Hero background image (hero-bg.jpg)
├── icons/             # Monochromatic SVG icons for benefit cards (already included)
├── portfolio/         # Project photos (if you add a portfolio section later)
├── about/             # Photo of Ed on site (if used)
├── testimonials/      # Worker photos (when you have testimonials)
└── og/                # Social sharing image (og-image.jpg)
```

## Quick Reference

- **hero/** — **Main background:** add `hero-bg.jpg` here for the top-of-page hero.
- **og/** — Add `og-image.jpg` for link previews when sharing.
- **icons/** — Benefit card icons (SVGs already in place; replace with your own if needed).
- **portfolio/**, **about/**, **testimonials/** — For future use if you add those sections.

## Image Requirements Summary

- **Hero**: 1920x1080px+, 16:9 ratio
- **Portfolio**: 1200px+ wide, 3-6 photos per project
- **About Ed**: 600x800px portrait
- **Testimonials**: 400x400px square or portrait
- **OG Image**: 1200x630px for social sharing

## File Formats

- Use JPEG for photos (`.jpg`)
- Use WebP if possible (better compression, `.webp`)
- Keep file sizes reasonable (under 500KB per image when possible)
- Optimize images before uploading (use tools like TinyPNG or Squoosh)

## Next Steps

1. Add your images to the appropriate folders
2. Update `data.js` with portfolio image paths (e.g., `images/portfolio/project-1/01.jpg`)
3. The hero and about images are already referenced in the code
4. Update `index.html` og:image URL when you add the OG image
