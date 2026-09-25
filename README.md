# Saybolt Group — Website Redesign

React + TypeScript + Vite. It has no UI framework and uses plain CSS with design tokens in `src/styles.css`.

## Run it
```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Content
All text is copied word-for-word from sayboltgroup.com (checked automatically against the live site, Sept 2026):
- `src/data/services.ts`: the 10 services (homepage text + each service's full page)
- `src/data/companies.ts`: the 5 group companies (homepage text + each company's full page)
- `src/data/site.ts`: homepage, Company Overview, CEO/GM messages, warehouse, careers, contact

## Where things are
- `src/data/site.ts`: all text, services, companies, offices and leaders. Edit content here.
- `src/pages/Home.tsx`: the homepage.
- `src/pages/Pages.tsx`: About, Services, Service detail, Companies, Warehouses, Careers, Contact and 404.
- `src/components/`: header, footer, CTA band, animated globe, and the reveal/counter helpers.
- `src/styles.css`: colours, type scale, layout and animations.

## Before going live
1. **Forms:** the Contact and Careers forms only show a success message. Connect them to a backend or a service such as Formspree, EmailJS or the WordPress REST API.
2. **Social links:** the footer uses placeholder Facebook, X and YouTube URLs in `components/Layout.tsx`.
3. **Photos & logo:** every photo (hero ships, services, companies, leadership portraits, warehouse) is hot-linked from the current sayboltgroup.com media library — see `IMG` in `src/data/site.ts`. For production, download them into `/public/images` and change the URLs there.
4. **Fonts:** Plus Jakarta Sans + Instrument Serif via Google Fonts (in `index.html`).
5. **Facts to confirm with the client:** "20,000+ TEUs", membership list, and years of experience (calculated from 1991).
6. **Routing:** `/services/:slug` URLs need an SPA fallback on the host (e.g. Netlify `_redirects`, Vercel rewrites).
