import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { ForecastChart } from "@/components/charts/ForecastChart";
import { forecast2026US, forecast2026Europe, type ForecastBlock } from "@/data/forecasts";

function ForecastSection({ block, accent }: { block: ForecastBlock; accent: "us" | "europe" }) {
  const accentColor = accent === "us" ? "var(--color-us)" : "var(--color-europe)";

  return (
    <Card>
      <CardHeader
        title={`${block.region} CLO New-Issue Forecast \u2014 ${block.year}`}
        subtitle="Bear / Base / Bull scenarios synthesized from sell-side research"
      />
      <CardBody className="space-y-4">
        <ForecastChart block={block} />
        <div className="space-y-2">
          {block.cases.map((c) => (
            <div key={c.case} className="flex flex-col gap-1 border-b border-border pb-2 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs uppercase tracking-wide" style={{ color: accentColor }}>
                  {c.case}
                </span>
                <span className="tabular text-sm font-semibold text-text">
                  {block.unit.startsWith("$") ? "$" : "\u20ac"}
                  {c.value}bn
                </span>
              </div>
              <p className="text-xs text-text-muted sm:max-w-md sm:text-right">{c.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-border bg-bg-sunken p-3">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-text-dim">Bank Estimates</div>
          <ul className="space-y-1 text-sm text-text-muted">
            {block.bankEstimates.map((b) => (
              <li key={b.bank} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <span>{b.bank}</span>
                <span className="tabular text-text">
                  {b.value}
                  {b.note && <span className="ml-2 text-xs text-text-dim">({b.note})</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <SourceTag source={block.source} url={block.sourceUrl} asOf={block.asOf} />
      </CardBody>
    </Card>
  );
}

export default function ForecastsPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Overview</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Market Forecasts</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          2026 new-issue volume outlooks for the US and European CLO markets. The Base/Bull/Bear cases below are
          this platform&rsquo;s synthesis of the range of estimates published by sell-side research desks in late
          2025 / early 2026, not a single bank&rsquo;s house view.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ForecastSection block={forecast2026US} accent="us" />
        <ForecastSection block={forecast2026Europe} accent="europe" />
      </div>

      <div className="rounded-lg border border-border bg-bg-sunken p-4 text-xs text-text-muted">
        Forecasts are inherently uncertain and will be revised throughout the year as research desks update their
        models. This page should be refreshed periodically against the cited sources, or wired to a forecast-
        ingestion pipeline as outlined in the platform&rsquo;s Phase 2 architecture (see{" "}
        <a href="/api-access" className="underline hover:text-text">
          API Access
        </a>
        ).
      </div>
    </div>
  );
}
