# Founders Pickle Club

Single-page marketing site for Founders Pickle Club — Aotearoa's pickleball society for builders.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **SaaSco** for analytics + CRM.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required. The SaaSco project ID is set in `lib/saasco.ts`.

## SaaSco — analytics + CRM

SaaSco handles both event tracking and contact storage for this site.

**Client-side** (`lib/SaascoAnalytics.tsx`):

- Automatic pageviews after `saasco.init()`
- Intent events: Apply CTA clicks, form started, city pill clicks, submit another

**Server-side** (`lib/submit-application.ts`):

- `saasco.identify()` — creates/updates a CRM contact with name, email, company, reason
- `saasco.track()` — records `Application Submitted` linked to that contact

View contacts and their event history in the [SaaSco CRM dashboard](https://www.saasco.com/features/crm).

Project ID: `cmqz0fxjf0000psp7r8tad5v1` (configured in `lib/saasco.ts`).

Set `enabled: false` in `lib/saasco.ts` to disable event sending in development if desired.

## Project structure

```
app/
  layout.tsx          # Fonts, metadata, SaaSco init
  page.tsx            # Composes all sections
  actions/            # Server Action + Zod validation
components/
  TopBar.tsx          # Navigation
  Hero.tsx            # Hero + retro sun
  WhoShowsUp.tsx      # Member types grid
  Courts.tsx          # City pills
  ApplyForm.tsx       # Client form (useFormState)
  Footer.tsx
lib/
  submit-application.ts  # SaaSco identify + track on submit
  saasco.ts              # SaaSco SDK config
  SaascoAnalytics.tsx    # Client init component
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```
