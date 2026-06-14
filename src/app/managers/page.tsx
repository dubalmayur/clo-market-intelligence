import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { managers, usCloRankingSource, type Manager } from "@/data/managers";

function RegionTag({ region }: { region: Manager["region"] }) {
  const color = region === "US" ? "var(--color-us)" : region === "Europe" ? "var(--color-europe)" : "var(--color-text-muted)";
  return (
    <span className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide" style={{ color, border: `1px solid ${color}` }}>
      {region}
    </span>
  );
}

export default function ManagersPage() {
  const sorted = [...managers].sort((a, b) => {
    if (a.usCloRank && b.usCloRank) return a.usCloRank - b.usCloRank;
    if (a.usCloRank) return -1;
    if (b.usCloRank) return 1;
    return a.name.localeCompare(b.name);
  });

  const columns: Column<Manager>[] = [
    { header: "US Rank", accessor: (m) => m.usCloRank ?? "\u2014", mono: true, align: "center" },
    {
      header: "Manager",
      accessor: (m) => (
        <a href={m.website} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
          {m.name}
        </a>
      ),
    },
    { header: "Region", accessor: (m) => <RegionTag region={m.region} /> },
    { header: "HQ", accessor: (m) => `${m.hq}, ${m.country}` },
    { header: "Parent / Affiliation", accessor: (m) => m.parent ?? "\u2014" },
    { header: "Description", accessor: (m) => <span className="text-xs">{m.description}</span>, className: "max-w-sm whitespace-normal" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Participants</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">CLO Managers</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          {managers.length} active CLO managers across the US and European markets. The first ten rows reflect a
          sourced, real ranking of US managers by collateral AUM; the remainder are notable managers without a
          published US ranking position.
        </p>
      </div>

      <Card>
        <CardBody className="p-0">
          <DataTable columns={columns} rows={sorted} keyFn={(m) => m.id} />
        </CardBody>
        <div className="border-t border-border px-4 py-3">
          <SourceTag source={usCloRankingSource.label} url={usCloRankingSource.url} asOf={usCloRankingSource.asOf} />
        </div>
      </Card>

      <Card>
        <CardHeader title="On AUM Figures" />
        <CardBody className="text-sm text-text-muted">
          Precise CLO collateral AUM figures by manager are published quarterly by CLO Research / Creditflux under
          subscription. This directory reproduces the real, public top-10 US ranking order without the underlying
          dollar figures. Global CLO collateral AUM across all managers reached approximately $1.5 trillion as of
          September 30, 2025.
        </CardBody>
      </Card>
    </div>
  );
}
