import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { DealsTable } from "@/components/DealsTable";
import { deals, deals10YearNote } from "@/data/deals";

export default function DealsPage() {
  const realDeals = deals.filter((d) => !d.isIllustrative);

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Resources</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Deal Records</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Deal-level CLO schema covering issuer, manager, arranger, trustee, administrator, jurisdiction, size,
          asset type, reinvestment period, maturity and ratings.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-bg-sunken p-4 text-sm text-text-muted">{deals10YearNote}</div>

      <Card>
        <CardHeader title="Deal Records" subtitle={`${deals.length} records \u00b7 ${realDeals.length} real, ${deals.length - realDeals.length} illustrative`} />
        <CardBody className="overflow-x-auto p-0">
          <DealsTable />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Real Deal Sources" />
        <CardBody className="space-y-2">
          {realDeals.map((d) => (
            <div key={d.id} className="flex flex-col gap-0.5 border-b border-border pb-2 last:border-0 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-text">{d.name}</span>
              {d.source && d.sourceUrl && <SourceTag source={d.source} url={d.sourceUrl} />}
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
