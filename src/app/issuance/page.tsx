import { Card, CardHeader, CardBody, ConfidenceBadge } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { IssuanceChart } from "@/components/charts/IssuanceChart";
import { usIssuance, europeIssuance, type IssuanceDataPoint } from "@/data/issuance";

interface CombinedRow {
  year: number;
  us: IssuanceDataPoint;
  europe: IssuanceDataPoint;
  usYoy?: number;
  euYoy?: number;
}

function buildRows(): CombinedRow[] {
  return usIssuance.map((u, i) => {
    const e = europeIssuance[i];
    const prevUs = i > 0 ? usIssuance[i - 1] : undefined;
    const prevEu = i > 0 ? europeIssuance[i - 1] : undefined;
    return {
      year: u.year,
      us: u,
      europe: e,
      usYoy: prevUs ? ((u.volume - prevUs.volume) / prevUs.volume) * 100 : undefined,
      euYoy: prevEu ? ((e.volume - prevEu.volume) / prevEu.volume) * 100 : undefined,
    };
  });
}

function YoyCell({ value }: { value?: number }) {
  if (value === undefined) return <span className="text-text-dim">\u2014</span>;
  const positive = value >= 0;
  return (
    <span style={{ color: positive ? "var(--color-positive)" : "var(--color-negative)" }}>
      {positive ? "+" : ""}
      {value.toFixed(1)}%
    </span>
  );
}

export default function IssuancePage() {
  const rows = buildRows();

  const columns: Column<CombinedRow>[] = [
    { header: "Year", accessor: (r) => r.year, mono: true },
    { header: "US Volume ($bn)", accessor: (r) => r.us.volume.toFixed(1), mono: true, align: "right" },
    { header: "US YoY", accessor: (r) => <YoyCell value={r.usYoy} />, mono: true, align: "right" },
    { header: "US Confidence", accessor: (r) => <ConfidenceBadge confidence={r.us.confidence} />, align: "center" },
    { header: "Europe Volume (\u20acbn)", accessor: (r) => r.europe.volume.toFixed(1), mono: true, align: "right" },
    { header: "EU YoY", accessor: (r) => <YoyCell value={r.euYoy} />, mono: true, align: "right" },
    { header: "EU Confidence", accessor: (r) => <ConfidenceBadge confidence={r.europe.confidence} />, align: "center" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Overview</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Issuance Analytics</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          New-issue CLO volume for the US and European markets, 2016\u20132025. Each figure carries an individual
          source and confidence rating \u2014 hover a row or visit{" "}
          <a href="/methodology" className="underline hover:text-text">
            Methodology &amp; Sources
          </a>{" "}
          for full citations.
        </p>
      </div>

      <Card>
        <CardHeader title="New-Issue Volume Trend" subtitle="US ($bn, left axis) vs Europe (\u20acbn, right axis)" />
        <CardBody>
          <IssuanceChart />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Annual Detail" subtitle="Year-over-year growth and data confidence" />
        <CardBody className="p-0">
          <DataTable columns={columns} rows={rows} keyFn={(r) => String(r.year)} />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Sources Cited on This Page" />
        <CardBody className="space-y-2 text-xs text-text-muted">
          {[...new Map(
              [...usIssuance, ...europeIssuance].map((d) => [d.sourceUrl, d])
            ).values()].map((d) => (
            <div key={d.sourceUrl} className="flex flex-col gap-0.5 border-b border-border pb-2 last:border-0 sm:flex-row sm:items-center sm:justify-between">
              <span>{d.source}</span>
              <a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-text-dim hover:text-text-muted">
                {d.sourceUrl}
              </a>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
