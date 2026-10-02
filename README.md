# Alchemy of Scents — Next.js Website

A clean, single-page brand website built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Fonts: Cormorant Garamond (headings) + Inter (body), loaded via
  `next/font/google` — no manual font files needed

## Structure
```
src/
  app/
    layout.tsx      fonts + SEO metadata
    page.tsx         assembles all sections, in order
    globals.css       Tailwind + fade-in-reveal styles
  components/
    Header.tsx        sticky nav + mobile hamburger
    Hero.tsx           Section 1 — Home
    About.tsx          Section 2 — About
    ProductCard.tsx     reusable card used by Products
    Products.tsx         Section 3 — Products grid
    Catalogue.tsx         Section 4 — Catalogue preview
    Services.tsx           Section 5 — Wholesale / Private Label / etc.
    Contact.tsx              Section 6 — Contact + enquiry form
    Footer.tsx
    FadeIn.tsx          scroll-reveal wrapper (fade + slight upward move)
    InstagramIcon.tsx     small inline icon, no external icon library
public/
  images/    drop your real photos here
  catalogue/ drop your real PDF catalogue here
```

## 1. Install & run locally
You'll need Node.js 18+ installed.
```
npm install
npm run dev
```
Then open http://localhost:3000.

## 2. Replace placeholder content
- **Images** — currently using picsum.photos placeholder images so the
  layout looks finished from day one. See `public/images/README.txt` for
  exactly which files to edit.
- **Catalogue PDF** — see `public/catalogue/README.txt`. Once the PDF is
  in place, the "View" and "Download" buttons work with no code changes.
- **Contact details** — open `src/components/Contact.tsx` and replace
  `[ADD EMAIL HERE]` and `[ADD NUMBER HERE]` with your real details.
- **Enquiry form** — the form is front-end only right now. There's a
  clearly marked `TODO` in `Contact.tsx`'s `handleSubmit` function showing
  where to plug in a service like Formspree, EmailJS, or your own API
  route, so submissions actually reach you.

## 3. Colors, fonts & spacing
All brand colors live in `tailwind.config.ts` (`cream`, `charcoal`,
`taupe`, `burgundy`) — change the hex values there and they update
everywhere. Fonts are set in `src/app/layout.tsx`.

## 4. Deploy for free
This project is built for **Vercel** (made by the creators of Next.js,
free tier is generous):
1. Push this project to a GitHub repository.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Leave settings as default and click Deploy.
4. You'll get a live `*.vercel.app` link in about a minute; a custom
   domain can be attached later for free (you just pay for the domain
   itself if you want one).

Netlify works as an alternative if you prefer it — same drag-and-drop
style flow, also free for a site like this.

## Notes
- No cart, checkout, login, filtering, or payment gateway — this is a
  brand/catalogue site by design, matching the original brief.
- All scroll animations are the subtle fade-up kind (`FadeIn.tsx`), no
  heavy motion anywhere.
