# BersihTuntas - Sedot WC Profesional

Modern, responsive, and conversion-focused landing page for **BersihTuntas**, a septic tank cleaning and WC suction service company in Indonesia.

The site is built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React Icons**. It is designed for a professional home-service business with strong trust signals, clean spacing, mobile-first UX, SEO metadata, and clear contact CTAs.

## Highlights

- Modern premium service-business landing page
- Sticky responsive navbar with mobile hamburger menu
- Hero section with professional truck image and trust cards
- Floating contact CTA for WhatsApp and phone conversion
- Services, advantages, pricing, testimonials, service area, FAQ, and final CTA sections
- SEO metadata, Open Graph, Twitter card, and semantic HTML
- Optimized external images with `next/image`
- Reusable component structure
- Fully responsive layout for mobile, tablet, and desktop
- ESLint and production build validated

## Tech Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Images:** Unsplash and Pexels remote images via Next Image
- **Linting:** ESLint with Next.js config

## Project Structure

```txt
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── landing
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   ├── floating-contact.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── landing-page.tsx
│   │   ├── pricing.tsx
│   │   ├── service-area.tsx
│   │   ├── services.tsx
│   │   ├── testimonials.tsx
│   │   └── why-choose-us.tsx
│   └── ui
│       ├── cta-button.tsx
│       ├── reveal.tsx
│       └── section-heading.tsx
├── lib
│   └── site-data.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Main Sections

The landing page includes:

- **Header:** sticky navigation, hamburger menu on mobile, and primary contact CTA.
- **Hero:** headline, trust indicators, animated service truck image, and guarantee card.
- **Services:** 5 service cards for residential, office, restaurant, industrial, and drainage needs.
- **Why Choose Us:** dark-blue trust section with animated advantage cards.
- **Pricing:** premium pricing card starting from Rp350.000.
- **Testimonials:** interactive customer testimonial carousel.
- **Service Area:** modern Jabodetabek coverage map card.
- **FAQ:** accessible accordion component.
- **Final CTA:** high-conversion full-width contact section.
- **Footer:** company info, services, links, and contact details.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the site:

```txt
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs ESLint checks.

## Brand and Contact Configuration

Most reusable business content is stored in:

```txt
lib/site-data.ts
```

Update this file to change:

- Company name
- Tagline
- Phone number
- WhatsApp number
- Email
- Services
- Testimonials
- Service areas
- FAQ content

Current contact:

```txt
Phone: 0857-1496-3855
WhatsApp: 6285714963855
Email: halo@bersihtuntas.id
```

## SEO

SEO and social sharing metadata are configured in:

```txt
app/layout.tsx
```

Included metadata:

- Page title and title template
- Meta description
- Keywords
- Authors and creator
- Open Graph data
- Twitter card data
- Robots indexing settings

## Image Configuration

Remote image domains are configured in:

```txt
next.config.ts
```

Allowed domains:

- `images.unsplash.com`
- `images.pexels.com`

## Deployment

This project is ready to deploy on platforms that support Next.js, such as:

- Vercel
- Netlify
- Railway
- VPS or Node.js hosting

Recommended production command:

```bash
npm run build
```

Then start:

```bash
npm run start
```

## Quality Checks

The project has been validated with:

```bash
npm run lint
npm run build
```

Both checks pass successfully.

## Notes

- The floating CTA is intentionally kept visible to improve mobile conversion.
- The navbar only shows one primary contact button to avoid duplicate actions.
- External images are royalty-free sources from Unsplash/Pexels, loaded through Next Image.
- The design uses a white and deep-blue palette for a clean, trustworthy, and professional appearance.
