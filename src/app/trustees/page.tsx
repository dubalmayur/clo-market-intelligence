import { Card, CardBody } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { trustees, type Trustee } from "@/data/trustees";

function RegionTag({ region }: { region: Trustee["region"] }) {
  const color = region === "US" ? "var(--color-us)" : region === "Europe" ? "var(--color-europe)" : "var(--color-text-muted)";
  return (
    <span className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide" style={{ color, border: `1px solid ${color}` }}>
      {region}
    </span>
  );
}

export default function TrusteesPage() {
  const columns: Column<Trustee>[] = [
    {
      header: "Trustee",
      accessor: (t) => (
        <a href={t.website} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
          {t.name}
        </a>
      ),
    },
    { header: "Region", accessor: (t) => <RegionTag region={t.region} /> },
    { header: "HQ", accessor: (t) => `${t.hq}, ${t.country}` },
    { header: "Profile", accessor: (t) => <span className="text-xs">{t.description}</span>, className: "max-w-md whitespace-normal" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Participants</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">CLO Trustees</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Institutions providing trustee, paying agent and collateral administration services for CLO issuer
          vehicles across the US and European markets.
        </p>
      </div>

      <Card>
        <CardBody className="p-0">
          <DataTable columns={columns} rows={trustees} keyFn={(t) => t.id} />
        </CardBody>
      </Card>
    </div>
  );
}
