# Image Folders

Organize your images here. Each folder has its own README with specific instructions.

## Folder Structure

```
images/
├── hero/              # Hero background image
├── portfolio/         # Project photos
│   ├── project-1/     # Bathroom renovation — Randwick
│   ├── project-2/     # Kitchen and living — Maroubra
│   ├── project-3/     # Timber deck — Coogee
│   ├── project-4/     # Structural framing — Bondi
│   ├── project-5/     # Office fit-out — Alexandria
│   └── project-6/     # Ensuite — Bronte
├── about/             # Photo of Ed on site
├── testimonials/      # Worker photos (when you have testimonials)
└── og/                # Social sharing image (Open Graph)
```

## Quick Reference

- **hero/** - Background image for the top section (`hero-bg.jpg`)
- **portfolio/** - 3-6 photos per project in numbered folders
- **about/** - Ed's photo (`ed-on-site.jpg`)
- **testimonials/** - Worker photos (name them by first name)
- **og/** - Social sharing image (`og-image.jpg`)

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
