# CLO Market Intelligence

A static market-intelligence platform covering the US and European Collateralized Loan
Obligation (CLO) markets: issuance analytics, 2026 forecasts, and directories of managers,
arrangers, trustees, administrators and corporate service providers.

**Live site:** https://dubalmayur.github.io/clo-market-intelligence/

## Data approach

This is a **Phase 1** build: a fully static Next.js site (no backend, no database) deployed to
GitHub Pages. Every figure on the site is compiled from **real, publicly available sources**
(Bloomberg, S&P Global Market Intelligence / LCD, Deutsche Bank Research, PitchBook | LCD, the
NAIC Capital Markets Bureau, KBRA, and CLO Research / Creditflux), with explicit source name,
URL, and "as of" date attached to each data point.

Where a precise full-year figure was not available from a public (non-paywalled) source, the
data point is marked `confidence: "estimated"` with a note explaining the basis for the
estimate (e.g. derived from a reported year-over-year change, or extrapolated from partial-year
data).

A comprehensive, deal-by-deal CLO database spanning ten years across both markets — the core
product of PitchBook | LCD, Creditflux and Trepp — is **not** reproduced here, as it sits behind
paid subscriptions. The Deal Records page implements the full schema with two real, named deals
from public press coverage plus clearly-labelled illustrative examples.

See **`/methodology`** on the live site for the full source list and confidence-rating
explanation.

## Project structure

```
src/
  app/                 Next.js App Router pages (one folder per route)
  components/
    layout/            Sidebar, header, search, ticker strip
    ui/                 Card, StatCard, DataTable, SourceTag, etc.
    charts/             Recharts-based issuance and forecast charts
  data/                Typed data modules — the single source of truth.
                       Every figure has source / sourceUrl / asOf fields.
  lib/                 Client-side search index
public/data/           CSV/JSON exports of the data in src/data/ (Data Downloads page)
```

## Updating data

1. Edit the relevant file in `src/data/` (e.g. `issuance.ts`, `forecasts.ts`, `managers.ts`).
2. Add/update the citation in `src/data/sources.ts`.
3. If the figure is also exported for download, update the matching file in `public/data/`.
4. `npm run build` to verify, then push to `main` — GitHub Actions redeploys automatically.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000, no base path
npm run build    # static export to ./out, with /clo-market-intelligence base path
```

## Phase 2 (not implemented here)

The original specification also envisioned a database-backed ETL pipeline, a REST API, AI-driven
analysis, and authenticated access tiers. The `/api-access` page documents the planned REST
endpoints (with example responses drawn from this platform's real data) as a starting point for
that work; none of it is live in this static build.
