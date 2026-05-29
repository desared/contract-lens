# ContractLess

Upload a contract and get a clear, jargon-free breakdown in seconds. ContractLess
explains leases, NDAs, employment contracts, divorce papers, and more in plain
language — no lawyer needed.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with shadcn-style primitives in `components/ui/`
- **next-intl** for English + German localization
- **framer-motion** for animation
- **lucide-react** icons

## Getting started

Requires Node 20+ and `pnpm`.

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000` and redirects to the default locale
(`/en`). German is available at `/de`.

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | ESLint |

## Project structure

```
app/
  [locale]/         Locale-scoped routes (en, de)
    layout.tsx      Root layout, fonts, NextIntlClientProvider
    page.tsx        Landing page composition
  globals.css       Tailwind base + theme tokens

components/
  contract-upload.tsx, features.tsx, footer.tsx,
  how-it-works.tsx, pricing.tsx
  ui/               shadcn primitives + composed blocks
    header-1.tsx, hero-1.tsx, language-switcher.tsx, ...

i18n/
  routing.ts        Supported locales + default
  request.ts        next-intl request config (loads messages/{locale}.json)
  navigation.ts     Locale-aware <Link>, useRouter, usePathname

messages/
  en.json, de.json  Translation dictionaries (including the mock contract data)

middleware.ts       next-intl locale middleware
```

## Localization

All user-facing strings live in `messages/en.json` and `messages/de.json`.
Components consume them via `useTranslations("Namespace")` (server or client).

Adding a new locale:

1. Add the code to `routing.locales` in `i18n/routing.ts`.
2. Create `messages/<locale>.json` matching the shape of `en.json`.
3. The language switcher in the header picks it up automatically.

The header switcher uses `useRouter().replace(pathname, { locale })` from
`@/i18n/navigation`, so switching keeps you on the same path.

## Notes

- The contract analyzer in `components/contract-upload.tsx` is a mocked demo —
  it sleeps for 3s, then returns one of three canned analyses (rent / divorce /
  default) chosen by filename keyword. Both English and German keyword
  detection are supported (`rent`/`miet`, `divorce`/`scheidung`).
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` to keep builds
  unblocked while iterating on UI; tighten this before shipping.
