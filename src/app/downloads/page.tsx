import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { Download } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const downloads = [
  {
    title: "US CLO Issuance, 2016\u20132025",
    file: "us-issuance.csv",
    description: "Annual new-issue volume ($bn) with confidence rating, source, source URL and notes for every year.",
  },
  {
    title: "European CLO Issuance, 2016\u20132025",
    file: "europe-issuance.csv",
    description: "Annual new-issue volume (\u20acbn) with confidence rating, source, source URL and notes for every year.",
  },
  {
    title: "CLO Manager Directory",
    file: "managers.csv",
    description: "19 managers with HQ, region, parent/affiliation, US CLO AUM rank (where published) and website.",
  },
  {
    title: "All Sources",
    file: "sources.json",
    description: "Machine-readable list of every source cited across the platform, with publisher and publication date.",
  },
];

export default function DownloadsPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Resources</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Data Downloads</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Raw exports of the sourced data shown throughout this platform, suitable for further analysis. Each row
          carries its own source citation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {downloads.map((d) => (
          <Card key={d.file}>
            <CardHeader title={d.title} subtitle={d.file} />
            <CardBody className="flex items-center justify-between gap-3">
              <p className="text-sm text-text-muted">{d.description}</p>
              <a
                href={`${basePath}/data/${d.file}`}
                download
                className="flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text hover:border-highlight hover:text-highlight"
              >
                <Download size={14} /> Download
              </a>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-bg-sunken p-4 text-xs text-text-muted">
        These exports mirror the typed data modules in <code className="rounded bg-surface px-1 py-0.5 font-mono text-[10px]">src/data/</code>. For
        programmatic access, see{" "}
        <a href="/api-access" className="underline hover:text-text">
          API Access
        </a>
        .
      </div>
    </div>
  );
}
