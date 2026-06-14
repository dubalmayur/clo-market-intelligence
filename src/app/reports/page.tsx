import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { FileText, FileSpreadsheet, FileBarChart } from "lucide-react";

const reportTypes = [
  {
    icon: FileBarChart,
    title: "Monthly Issuance Snapshot",
    cadence: "Monthly",
    format: "PDF",
    description: "One-page summary of US and European new-issue volume, month-over-month and year-over-year, with confidence flags carried through from the underlying dataset.",
  },
  {
    icon: FileText,
    title: "Quarterly Market Review",
    cadence: "Quarterly",
    format: "PDF",
    description: "Narrative review of issuance trends, manager activity and forecast revisions, written from the sources catalogued in Methodology & Sources.",
  },
  {
    icon: FileSpreadsheet,
    title: "Annual Issuance Workbook",
    cadence: "Annual",
    format: "Excel / CSV",
    description: "Full 10-year US and European issuance series with confidence ratings, sources and notes \u2014 the same data that powers Issuance Analytics.",
  },
  {
    icon: FileSpreadsheet,
    title: "Participant Directory Export",
    cadence: "On demand",
    format: "CSV / JSON",
    description: "Managers, arrangers, trustees, administrators and service providers with HQ, region and affiliation data.",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Resources</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Reports</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Planned report exports built from the same sourced dataset as the rest of this platform. In this static
          build, the underlying data is available immediately via{" "}
          <a href="/downloads" className="underline hover:text-text">
            Data Downloads
          </a>
          ; scheduled report generation and distribution is part of the Phase 2 architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {reportTypes.map((r) => (
          <Card key={r.title}>
            <CardHeader
              title={r.title}
              subtitle={`${r.cadence} \u00b7 ${r.format}`}
              action={<r.icon size={18} className="text-text-dim" strokeWidth={1.75} />}
            />
            <CardBody className="text-sm text-text-muted">{r.description}</CardBody>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-bg-sunken p-4 text-xs text-text-muted">
        To implement scheduled report generation, the Phase 2 architecture would render these templates against
        the live database on a cron schedule and distribute via email or the API described in{" "}
        <a href="/api-access" className="underline hover:text-text">
          API Access
        </a>
        .
      </div>
    </div>
  );
}
