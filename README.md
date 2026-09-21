# SmartIn

Marketing site and portfolio for SmartIn, a studio building websites, apps and brand identity.

Built with Next.js (App Router), React, Tailwind CSS 4 + CSS Modules, and Resend for the contact form.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — dev server
- `npm run build` / `npm start` — production build and server
- `npm run lint` — ESLint
- `npm test` — Vitest (contact API, contact form, portfolio content)

## Structure

- `src/app` — routes (`/`, `/portfolio`, `/faq`) and `api/contact`
- `src/sections` — landing page sections
- `src/components` — shared UI
- `src/constants/content.ts` — all copy, portfolio items and FAQ

## Contact form

`POST /api/contact` validates input, escapes it before building the email, uses a honeypot field and a best-effort in-memory rate limit (per server instance). Configure recipients via `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`; sending to arbitrary addresses requires a verified domain in Resend.
