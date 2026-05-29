# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (lockfile is `pnpm-lock.yaml`).

```bash
pnpm dev        # Next.js dev server (Turbopack) at http://localhost:3000
pnpm build      # Production build
pnpm start      # Run the production build
pnpm lint       # ESLint
```

There is no test runner configured in this repo.

The dev server redirects `/` to `/en`. German is at `/de`. When changing
locale-aware code, verify both routes — a copy change that only updates
`en.json` will silently fall back / show the key path in German.

## Architecture

### Locale-scoped App Router

All pages live under `app/[locale]/`. The locale segment is required because
`next-intl` is wired through `next.config.mjs` (`createNextIntlPlugin`) and
[`middleware.ts`](middleware.ts) rewrites the URL to include it.

The four-file i18n setup is load-bearing — touch carefully:

- [`i18n/routing.ts`](i18n/routing.ts) — `locales` and `defaultLocale`. Adding a
  locale starts here.
- [`i18n/request.ts`](i18n/request.ts) — `getRequestConfig` that loads
  `messages/{locale}.json`. Referenced by the plugin in `next.config.mjs`.
- [`i18n/navigation.ts`](i18n/navigation.ts) — re-exports locale-aware `Link`,
  `useRouter`, `usePathname` from `next-intl/navigation`. **Use these instead of
  `next/link` and `next/navigation`** so locale prefixes are preserved.
- [`middleware.ts`](middleware.ts) — pure passthrough to `createMiddleware(routing)`.

`app/[locale]/layout.tsx` validates the locale param with `hasLocale` and calls
`setRequestLocale(locale)` so static rendering works; the page also calls
`setRequestLocale`. If you add a new server-rendered route, replicate this
pattern or translations will fail at build time.

Note: Next.js 16 emits a deprecation warning about the `middleware` file
convention (renaming to `proxy.ts` is the new pattern). It still works.

### Translations and the mock analyzer

User-visible strings live in [`messages/en.json`](messages/en.json) and
[`messages/de.json`](messages/de.json) — keep both in sync; mismatched keys
cause runtime errors in the non-English locale.

The mock contract analyzer in [`components/contract-upload.tsx`](components/contract-upload.tsx)
is not a real backend. It pulls **structured** content from translations via
`t.raw("mock.<template>.clauses")` (returning a typed `ContractClause[]`), and
picks a template (`rent` / `divorce` / `default`) by filename keyword. Keyword
detection is bilingual: `rent`/`miet`, `divorce`/`scheidung`. If you rename a
template or change its clause shape, update **both** locale files and the
`MockTemplate` type together — TypeScript won't catch JSON drift.

### Component layout

- [`components/ui/`](components/ui/) holds both shadcn-style primitives
  (`button.tsx`) and composed page sections (`header-1.tsx`, `hero-1.tsx`,
  `language-switcher.tsx`, `infinite-slider.tsx`, etc.). Per shadcn convention
  the `ui/` folder is reserved for primitives the CLI can update in place, but
  the historical placement of these blocks in `ui/` means the shadcn CLI could
  in principle overwrite them — prefer adding new composed blocks to
  `components/` (or a new `components/blocks/`) and leave `ui/` for primitives.
- Section components rendered by the landing page:
  `header-1` → `hero-1` (Hero + Stats) → `features` → `how-it-works` →
  `contract-upload` → `pricing` → `footer`. Composition is in
  [`app/[locale]/page.tsx`](app/[locale]/page.tsx).
- **Orphan files**: `components/header.tsx`, `components/hero.tsx`,
  `components/blocks/hero.tsx`, `components/blocks/hero-section-9.tsx`, and
  `components/ui/hero.tsx` are earlier hero/header iterations no longer
  imported anywhere. Don't extend them — edit the active versions in
  `components/ui/header-1.tsx` and `components/ui/hero-1.tsx`.

### Styling

Tailwind **v4** with no `tailwind.config.*` — theme tokens are declared inline
in [`app/globals.css`](app/globals.css) under `:root`, `.dark`, and `@theme inline`.
Some v4-specific utilities are used throughout (`bg-linear-to-b`, `mask-image`
arbitrary values, `text-shadow-*`). When adding utilities from a v3-era
snippet, translate them to v4 equivalents.

The design language is sharp-cornered (`--radius: 2px`) with hairline borders.
Components avoid `rounded-lg`/`rounded-xl`/`rounded-full` deliberately — keep
that consistent when adding UI.

### Build configuration

[`next.config.mjs`](next.config.mjs) sets `typescript.ignoreBuildErrors: true`
and `images.unoptimized: true`. The former is a deliberate escape hatch while
iterating on UI — type errors won't fail the build, so still run `tsc --noEmit`
(or check IDE diagnostics) when changes touch types.
