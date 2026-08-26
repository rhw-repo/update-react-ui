# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a React + TypeScript "lookbook" style marketing site — a demo built from a company-branded template originally made for a financial sector client. It is a static Vite SPA that showcases layout/component variants (multiple homepage styles, content page templates, animated stat counters, wave dividers, shaped highlight boxes). There is no backend in this repo: all page content is authored as typed data in `frontend/src/data/*.ts` files, which is intended to later be swapped for a CMS-driven API.

The actual app lives entirely under `frontend/`; the repo root only holds a pnpm workspace wrapper (no root `package.json` scripts — always `cd frontend` first, or use `pnpm --dir frontend`).

## Commands

Run all commands from `frontend/`:

```
pnpm install       # install deps
pnpm dev           # start Vite dev server
pnpm build         # tsc -b (project references) then vite build -> build/client
pnpm lint          # eslint .
pnpm preview       # preview the production build
```

There is no test suite configured in this repo (no test runner in `package.json`, no `*.test.*`/`*.spec.*` files).

Package manager is pnpm (see `frontend/pnpm-lock.yaml`, `frontend/pnpm-workspace.yaml`). The workspace config pins `minimumReleaseAge: 4320` and overrides for `semver`/`chokidar`/`vite` — don't casually bump those without checking `pnpm-workspace.yaml`.

## Architecture

**Routing**: `frontend/src/App.tsx` defines all routes via `react-router-dom` v7 (`Routes`/`Route`, not the data router). A shared `Layout` (Navbar + `<Outlet/>` + Footer) wraps everything inside an `ErrorBoundary`. Unmatched paths redirect to `/404`. `main.tsx` wraps the app in `BrowserRouter` + a `ScrollToTop` component that resets scroll position on navigation.

**Content = data, not markup**: Page/section content (headings, body text, image sets, list items) is defined as typed literal objects in `frontend/src/data/*.ts` (e.g. `cardContent.ts`, `homeLinks.ts`, `statCardsContent.ts`, `footerContent.ts`), typed against `frontend/src/types/types.ts` (`CardData`, `CardID`, `ImageItem`, etc.). Components are generic renderers that take this data as props — when adding a new page/card, add data to the relevant `data/*.ts` file and a `CardID` variant rather than hardcoding text in a component. This split is the seam where the CMS/backend will eventually plug in.

**Component layout convention**: every component lives in its own folder under `frontend/src/components/<kebab-name>/` with a co-located `<PascalCase>.tsx` and, where styled, a `<PascalCase>.module.css` (CSS Modules — `styles.xxx`, not global class names except in `styles/global.css`). Reusable link/section primitives live under `components/ui-elements/`. Pages that just assemble components live in `frontend/src/pages/`.

**Homepage variants**: `Home.tsx` is reused for `/`, `/home-one`, `/home-two`, `/home-three` and switches which link-list template (`RelativeLinkTemplate` vs `ExcerptLinkTemplate`) and hero (video vs image) renders based on `useLocation().pathname`. Follow this pattern (branch on pathname inside one page component) rather than duplicating page components when adding another homepage variant.

**Images**: assets are self-hosted and pre-optimized as WebP + AVIF pairs (`frontend/src/assets/images/`), consumed via `<picture>`/`<source>` with an explicit AVIF `<img>` fallback (see `RelativeLinkTemplate.tsx`) — keep using both formats for new images rather than a single format. Fonts are self-hosted variable fonts (`Cabin`, `Source Sans 3`) declared via `@font-face` in `frontend/src/styles/global.css`; the video hero uses a self-hosted mp4.

**Sanitization**: `frontend/dompurifyConfig.ts` configures a shared, deliberately locked-down DOMPurify instance (`ALLOWED_TAGS: []`, `ALLOWED_ATTR: []`, forbids `script`/`svg`/`math`/style/inline-event attrs) — reuse this shared config for any HTML sanitization rather than instantiating DOMPurify with different options.

**Theming**: global CSS custom properties (`--primary`, `--accent`, `--surface`, elevation shadows, interactive state-layer opacities) are defined once in `frontend/src/styles/global.css` under `:root`. Component CSS Modules should reference these tokens instead of hardcoding colors/shadows.

**Icons**: FontAwesome via `@fortawesome/react-fontawesome` with the free solid/regular/brands SVG icon packages — import individual icons (e.g. `faChevronDown`) rather than the full icon set.

**TypeScript project structure**: `tsconfig.json` is a references-only root pointing at `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config); `pnpm build` runs `tsc -b` across both before `vite build`.
