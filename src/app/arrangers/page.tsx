import { Card, CardBody } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { arrangers, type Arranger } from "@/data/arrangers";

function RegionTag({ region }: { region: Arranger["region"] }) {
  const color = region === "US" ? "var(--color-us)" : region === "Europe" ? "var(--color-europe)" : "var(--color-text-muted)";
  return (
    <span className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide" style={{ color, border: `1px solid ${color}` }}>
      {region}
    </span>
  );
}

export default function ArrangersPage() {
  const columns: Column<Arranger>[] = [
    {
      header: "Arranger",
      accessor: (a) => (
        <a href={a.website} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
          {a.name}
        </a>
      ),
    },
    { header: "Region", accessor: (a) => <RegionTag region={a.region} /> },
    { header: "HQ", accessor: (a) => `${a.hq}, ${a.country}` },
    { header: "Profile", accessor: (a) => <span className="text-xs">{a.description}</span>, className: "max-w-md whitespace-normal" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Participants</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">CLO Arrangers</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Banks active as arrangers and bookrunners in the primary CLO market. Deal-count and volume-share league
          tables (e.g. &ldquo;arranger of N deals worth $X this year&rdquo;) require PitchBook | LCD or Creditflux
          data and are not fabricated here \u2014 see Methodology &amp; Sources.
        </p>
      </div>

      <Card>
        <CardBody className="p-0">
          <DataTable columns={columns} rows={arrangers} keyFn={(a) => a.id} />
        </CardBody>
      </Card>
    </div>
  );
}
