import Link from "next/link";
import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { RegionIssuanceChart } from "@/components/charts/RegionIssuanceChart";
import { europeIssuance, latest, yoyGrowth } from "@/data/issuance";
import { forecast2026Europe } from "@/data/forecasts";
import { managersByRegion, type Manager } from "@/data/managers";
import { deals, type DealRecord } from "@/data/deals";

export default function EuropeMarketPage() {
  const euLatest = latest(europeIssuance);
  const euGrowth = yoyGrowth(europeIssuance);
  const euBase = forecast2026Europe.cases.find((c) => c.case === "base")!;
  const euManagers = managersByRegion("Europe");
  const euDeals = deals.filter((d) => d.region === "Europe");

  const managerColumns: Column<Manager>[] = [
    { header: "Manager", accessor: (m) => <span className="text-text">{m.name}</span> },
    { header: "HQ", accessor: (m) => m.hq },
    { header: "Country", accessor: (m) => m.country },
    { header: "Parent / Affiliation", accessor: (m) => m.parent ?? "\u2014" },
  ];

  const dealColumns: Column<DealRecord>[] = [
    { header: "Deal", accessor: (d) => <span className="text-text">{d.name}</span> },
    { header: "Issue Date", accessor: (d) => d.issueDate, mono: true },
    { header: "Manager", accessor: (d) => d.manager },
    { header: "Size", accessor: (d) => `\u20ac${d.dealSize}m`, mono: true, align: "right" },
    { header: "Jurisdiction", accessor: (d) => d.jurisdiction },
    { header: "Status", accessor: (d) => (d.isIllustrative ? <span className="text-text-dim">Illustrative</span> : <span style={{ color: "var(--color-positive)" }}>Real</span>) },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-8 w-11 items-center justify-center rounded font-mono text-xs font-semibold"
          style={{ color: "var(--color-europe)", border: "1px solid var(--color-europe)" }}
        >
          EU
        </span>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Markets</div>
          <h1 className="font-display text-2xl font-semibold text-text lg:text-3xl">European CLO Market</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label={`New-Issue Volume, ${euLatest.year}`}
          value={`\u20ac${euLatest.volume.toFixed(1)}bn`}
          delta={`${euGrowth >= 0 ? "+" : ""}${euGrowth.toFixed(1)}% YoY`}
          deltaPositive={euGrowth >= 0}
          accent="europe"
          source={euLatest.source}
          sourceUrl={euLatest.sourceUrl}
          asOf={euLatest.asOf}
        />
        <StatCard
          label="2026 Forecast (Base Case)"
          value={`\u20ac${euBase.value}bn`}
          accent="europe"
          source={forecast2026Europe.source}
          sourceUrl={forecast2026Europe.sourceUrl}
          asOf={forecast2026Europe.asOf}
        />
        <StatCard label="Refi / Reset Activity, 2025" value="\u20ac66.4bn" accent="europe" source="Deutsche Bank Research" asOf="2026-01-28" />
      </div>

      <Card>
        <CardHeader title="European New-Issue Volume, 2016\u20132025" subtitle="Lighter bars indicate an estimated figure" />
        <CardBody>
          <RegionIssuanceChart data={europeIssuance} color="var(--color-europe)" unit="\u20ac" />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Active European CLO Managers" subtitle="Managers with a European or global CLO platform" />
        <CardBody className="p-0">
          <DataTable columns={managerColumns} rows={euManagers} keyFn={(m) => m.id} />
        </CardBody>
        <div className="border-t border-border px-4 py-3 text-xs text-text-muted">
          A sourced, Europe-specific AUM league table (analogous to the US ranking) sits behind the CLO Research /
          Creditflux subscription; see{" "}
          <Link href="/methodology" className="underline hover:text-text">
            Methodology &amp; Sources
          </Link>
          .
        </div>
      </Card>

      <Card>
        <CardHeader title="Notable European Deals" subtitle="Real, named deals plus illustrative schema examples" />
        <CardBody className="p-0">
          <DataTable columns={dealColumns} rows={euDeals} keyFn={(d) => d.id} />
        </CardBody>
      </Card>
    </div>
  );
}
