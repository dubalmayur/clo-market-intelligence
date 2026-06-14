import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { administrators, type Administrator } from "@/data/administrators";

export default function AdministratorsPage() {
  const columns: Column<Administrator>[] = [
    {
      header: "Administrator",
      accessor: (a) => (
        <a href={a.website} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
          {a.name}
        </a>
      ),
    },
    { header: "Formerly", accessor: (a) => a.legacyBrand ?? "\u2014", className: "text-text-dim" },
    { header: "HQ", accessor: (a) => `${a.hq}, ${a.country}` },
    { header: "Profile", accessor: (a) => <span className="text-xs">{a.description}</span>, className: "max-w-md whitespace-normal" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Participants</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">CLO Administrators</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Providers of CLO and SPV administration services. The fund-administration sector has consolidated
          significantly since 2022 \u2014 this directory reflects current corporate structures, with legacy brand
          names noted for continuity.
        </p>
      </div>

      <Card>
        <CardBody className="p-0">
          <DataTable columns={columns} rows={administrators} keyFn={(a) => a.id} />
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Notable Consolidation" />
        <CardBody className="space-y-3 text-sm text-text-muted">
          <p>
            Intertrust Group fully migrated to the CSC brand in 2024, following CSC&rsquo;s acquisition of the
            group in November 2022.
          </p>
          <SourceTag
            source={'CSC, "Intertrust Group Rebrands to CSC Following Acquisition"'}
            url="https://www.cscglobal.com/service/press/csc-rebrands-intertrust-group/"
            asOf="2024-07-18"
          />
          <p className="pt-2">Sanne Group was acquired by Apex Group in August 2022 and now operates under the Apex brand.</p>
          <SourceTag source={'Wikipedia, "Sanne Group"'} url="https://en.wikipedia.org/wiki/Sanne_Group" asOf="2022" />
        </CardBody>
      </Card>
    </div>
  );
}
