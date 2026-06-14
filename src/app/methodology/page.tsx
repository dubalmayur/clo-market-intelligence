import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { sources } from "@/data/sources";

export default function MethodologyPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Resources</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">Methodology &amp; Sources</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          How the figures on this platform were compiled, what &ldquo;reported&rdquo; vs &ldquo;estimated&rdquo;
          means, and the full list of sources cited across the site.
        </p>
      </div>

      <Card>
        <CardHeader title="Data Philosophy" />
        <CardBody className="space-y-3 text-sm text-text-muted">
          <p>
            This platform is built on publicly available data: press releases and research notes from Bloomberg,
            S&amp;P Global Market Intelligence (LCD), Deutsche Bank Research, PitchBook | LCD, the NAIC Capital
            Markets Bureau, KBRA, and CLO Research / Creditflux, alongside public corporate disclosures for
            participant directories.
          </p>
          <p>
            The platform&rsquo;s original specification envisioned a deal-by-deal database spanning ten years
            across both markets, plus volume-share league tables for arrangers and managers. That granular,
            transaction-level data is the core commercial product of PitchBook | LCD, Creditflux and Trepp, and
            sits behind paid subscriptions \u2014 it is not reproduced here. Instead, this platform focuses on
            headline market statistics (annual issuance volumes, forecasts, AUM rankings) that are reported
            publicly, with a small number of real, named deals drawn from press coverage.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Confidence Ratings" />
        <CardBody className="space-y-3 text-sm text-text-muted">
          <p>
            Each annual issuance figure carries a <span className="text-text">Reported</span> or{" "}
            <span className="text-text">Estimated</span> confidence rating:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="text-text">Reported</span> \u2014 the figure is stated directly in the cited
              source for that specific calendar year.
            </li>
            <li>
              <span className="text-text">Estimated</span> \u2014 a precise full-year figure from a public
              primary source was not located. The figure is derived from partial-year data, year-over-year
              growth rates stated elsewhere, or general market commentary. The basis for each estimate is noted
              in the underlying dataset and surfaced on the Issuance Analytics page.
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="All Sources" subtitle={`${sources.length} sources cited across this platform`} />
        <CardBody className="space-y-3">
          {sources.map((s) => (
            <div key={s.id} className="border-b border-border pb-3 last:border-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-text hover:text-highlight hover:underline">
                  {s.name}
                </a>
                <span className="font-mono text-[10px] text-text-dim">{s.publicationDate}</span>
              </div>
              <div className="mt-0.5 text-xs text-text-muted">
                {s.publisher} \u00b7 Used for: {s.usedFor}
              </div>
            </div>
          ))}
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Updating This Data" />
        <CardBody className="space-y-2 text-sm text-text-muted">
          <p>
            All figures live in <code className="rounded bg-bg-sunken px-1 py-0.5 font-mono text-xs">src/data/</code>{" "}
            as typed TypeScript modules, each with explicit source/URL/date fields. To refresh:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Update the relevant data file with new figures and citations.</li>
            <li>Add or update the corresponding entry in <code className="rounded bg-bg-sunken px-1 py-0.5 font-mono text-xs">sources.ts</code>.</li>
            <li>Re-run <code className="rounded bg-bg-sunken px-1 py-0.5 font-mono text-xs">npm run build</code> and redeploy.</li>
          </ul>
          <p>
            For continuous updates, the Phase 2 architecture (ETL pipeline, database, scheduled ingestion) outlined
            for this project would automate this process against licensed data feeds.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
