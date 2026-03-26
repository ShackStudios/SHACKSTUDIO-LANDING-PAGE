# Shack Studios — Landing Page

> Revenue Systems Partner  
> "We turn content into rankings, and rankings into revenue."

Static landing page for Shack Studios. No frameworks, no build step. Deploys directly to Vercel.

## Project Structure

```
/
├── index.html               ← deployment entry point
├── assets/
│   ├── css/styles.css        ← base styles
│   ├── img/                  ← logos and images
│   └── js/tailwind-config.js ← Tailwind theme config
├── docs/                     ← brand kit, PRD, reference files
├── .gitignore
└── README.md
```

## Development

Open `index.html` in any browser. No build step required.  
Tailwind CSS runs via CDN for rapid development.

## Deployment

Push to Vercel. It will auto-detect the static structure and serve `index.html`.  
No `vercel.json` needed.

---

## Brand Implementation Status

### Current Logo Assets (`assets/img/`)

| File | Description | Usage |
|---|---|---|
| `SHACKSTUDIOS-LOGO-2025.png` | Horizontal lockup (icon + wordmark) | **Header** — used as primary logo |
| `SHACKSTUDIOS-LOGO-FIRVERCON-2025.png` | Icon only (house-shaped S mark) | **Footer** + **Favicon** |
| `SHACKSTUDIOS-LOGO-WORDS-2025.png` | Wordmark only (text, no icon) | Available but not currently placed |

### Still Needed (Final Brand Assets & Real Content)

| Asset | Why | Where |
|---|---|---|
| **SVG logo files** | PNGs work but SVGs are sharper at all sizes; brand kit requires SVG | Header, footer, favicon |
| **White-on-transparent logo PNG/SVG** | Footer currently relies on CSS `invert`; native white version is cleaner | Footer |
| **Proper favicon set** (`.ico`, `apple-touch-icon`, etc.) | Currently using `.png`; a proper set improves cross-browser support | `<head>` |
| **OG image** (`1200×630px`) | `og-image.png` is missing; required for social sharing link previews | `<head>`, Social sharing |
| **Real case study data** | Client results have been neutralised to `[ ]` templates pending real metrics | Results section |
| **Real privacy/terms URLs** | Footer links are disabled placeholders pending legal pages | Footer |

### Brand Colour System (from Brand Kit v1.0)

| Token | Hex | Usage |
|---|---|---|
| Primary Black | `#000000` | Headlines, borders, buttons, backgrounds |
| Primary White | `#FFFFFF` | Button text, inverse sections |
| Light Grey | `#F5F5F5` | Surface/background |
| Mid Grey | `#A0A0A0` | Secondary text, labels |

No additional colours should be introduced without brand approval.
