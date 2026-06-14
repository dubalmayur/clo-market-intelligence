import { Card, CardBody } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { serviceProviders, type ServiceProvider } from "@/data/serviceProviders";

export default function ServiceProvidersPage() {
  const columns: Column<ServiceProvider>[] = [
    {
      header: "Provider",
      accessor: (s) => (
        <a href={s.website} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
          {s.name}
        </a>
      ),
    },
    { header: "HQ", accessor: (s) => `${s.hq}, ${s.country}` },
    {
      header: "Services",
      accessor: (s) => (
        <div className="flex flex-wrap gap-1">
          {s.services.map((svc) => (
            <span key={svc} className="rounded-[3px] border border-border px-1.5 py-0.5 font-mono text-[10px] text-text-dim">
              {svc}
            </span>
          ))}
        </div>
      ),
      className: "max-w-xs whitespace-normal",
    },
    { header: "Profile", accessor: (s) => <span className="text-xs">{s.description}</span>, className: "max-w-sm whitespace-normal" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Participants</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Corporate Service Providers</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Entity management, SPV, fund administration and regulatory services firms supporting CLO issuer
          structures.
        </p>
      </div>

      <Card>
        <CardBody className="p-0">
          <DataTable columns={columns} rows={serviceProviders} keyFn={(s) => s.id} />
        </CardBody>
      </Card>
    </div>
  );
}
