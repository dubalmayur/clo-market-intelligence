import Link from "next/link";
import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { RegionIssuanceChart } from "@/components/charts/RegionIssuanceChart";
import { usIssuance, latest, yoyGrowth } from "@/data/issuance";
import { forecast2026US } from "@/data/forecasts";
import { topUsManagers, usCloRankingSource, type Manager } from "@/data/managers";
import { deals, type DealRecord } from "@/data/deals";

export default function USMarketPage() {
  const usLatest = latest(usIssuance);
  const usGrowth = yoyGrowth(usIssuance);
  const usBase = forecast2026US.cases.find((c) => c.case === "base")!;
  const usDeals = deals.filter((d) => d.region === "US");

  const managerColumns: Column<Manager>[] = [
    { header: "Rank", accessor: (m) => m.usCloRank, mono: true, align: "center" },
    { header: "Manager", accessor: (m) => <span className="text-text">{m.name}</span> },
    { header: "HQ", accessor: (m) => m.hq },
    { header: "Parent / Affiliation", accessor: (m) => m.parent ?? "\u2014" },
  ];

  const dealColumns: Column<DealRecord>[] = [
    { header: "Deal", accessor: (d) => <span className="text-text">{d.name}</span> },
    { header: "Issue Date", accessor: (d) => d.issueDate, mono: true },
    { header: "Manager", accessor: (d) => d.manager },
    { header: "Size", accessor: (d) => `$${d.dealSize}m`, mono: true, align: "right" },
    { header: "Asset Type", accessor: (d) => d.assetType },
    { header: "Status", accessor: (d) => (d.isIllustrative ? <span className="text-text-dim">Illustrative</span> : <span style={{ color: "var(--color-positive)" }}>Real</span>) },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-8 w-11 items-center justify-center rounded font-mono text-xs font-semibold"
          style={{ color: "var(--color-us)", border: "1px solid var(--color-us)" }}
        >
          US
        </span>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Markets</div>
          <h1 className="font-display text-2xl font-semibold text-text lg:text-3xl">US CLO Market</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label={`New-Issue Volume, ${usLatest.year}`}
          value={`$${usLatest.volume.toFixed(1)}bn`}
          delta={`${usGrowth >= 0 ? "+" : ""}${usGrowth.toFixed(1)}% YoY`}
          deltaPositive={usGrowth >= 0}
          accent="us"
          source={usLatest.source}
          sourceUrl={usLatest.sourceUrl}
          asOf={usLatest.asOf}
        />
        <StatCard
          label="2026 Forecast (Base Case)"
          value={`$${usBase.value}bn`}
          accent="us"
          source={forecast2026US.source}
          sourceUrl={forecast2026US.sourceUrl}
          asOf={forecast2026US.asOf}
        />
        <StatCard label="Outstanding BSL CLO Market" value="\u2248$993bn" accent="us" source="CLO Research / Clopremium" asOf="Dec 2025" />
      </div>

      <Card>
        <CardHeader title="US New-Issue Volume, 2016\u20132025" subtitle="Lighter bars indicate an estimated figure" />
        <CardBody>
          <RegionIssuanceChart data={usIssuance} color="var(--color-us)" unit="$" />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Top 10 US CLO Managers by Collateral AUM" subtitle="Ranking as of March 31, 2026" />
        <CardBody className="space-y-3 p-0">
          <DataTable columns={managerColumns} rows={topUsManagers} keyFn={(m) => m.id} />
          <div className="px-4 pb-4">
            <SourceTag source={usCloRankingSource.publisher} url={usCloRankingSource.url} asOf={usCloRankingSource.asOf} />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Notable US Deals" subtitle="Real, named deals plus illustrative schema examples" />
        <CardBody className="p-0">
          <DataTable columns={dealColumns} rows={usDeals} keyFn={(d) => d.id} />
        </CardBody>
        <div className="border-t border-border px-4 py-3 text-xs text-text-muted">
          For the full deal-record schema and data-licensing notes, see{" "}
          <Link href="/deals" className="underline hover:text-text">
            Deal Records
          </Link>
          .
        </div>
      </Card>
    </div>
  );
}
