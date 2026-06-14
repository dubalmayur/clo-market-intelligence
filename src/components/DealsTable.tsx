"use client";

import { useState } from "react";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { deals, type DealRecord } from "@/data/deals";

const ALL = "All";

export function DealsTable() {
  const [filter, setFilter] = useState<string>(ALL);

  const regions = [ALL, "US", "Europe"];
  const filtered = filter === ALL ? deals : deals.filter((d) => d.region === filter);

  const columns: Column<DealRecord>[] = [
    {
      header: "Deal Name",
      accessor: (d) =>
        d.sourceUrl ? (
          <a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-text hover:text-highlight hover:underline">
            {d.name}
          </a>
        ) : (
          <span className="text-text">{d.name}</span>
        ),
      className: "max-w-xs whitespace-normal",
    },
    { header: "Region", accessor: (d) => d.region },
    { header: "Issue Date", accessor: (d) => d.issueDate, mono: true },
    { header: "Manager", accessor: (d) => d.manager },
    { header: "Arranger", accessor: (d) => d.arranger ?? "\u2014" },
    { header: "Trustee", accessor: (d) => d.trustee ?? "\u2014" },
    { header: "Administrator", accessor: (d) => d.administrator ?? "\u2014" },
    { header: "Jurisdiction", accessor: (d) => d.jurisdiction },
    {
      header: "Deal Size",
      accessor: (d) => `${d.currency === "USD" ? "$" : "\u20ac"}${d.dealSize}m`,
      mono: true,
      align: "right",
    },
    { header: "Asset Type", accessor: (d) => d.assetType, className: "max-w-[160px] whitespace-normal" },
    { header: "Reinvestment End", accessor: (d) => d.reinvestmentPeriodEnd ?? "\u2014", mono: true },
    { header: "Maturity", accessor: (d) => d.maturityDate ?? "\u2014", mono: true },
    { header: "Ratings", accessor: (d) => d.ratings ?? "\u2014", className: "max-w-[200px] whitespace-normal text-xs" },
    {
      header: "Status",
      accessor: (d) =>
        d.isIllustrative ? (
          <span className="rounded-[3px] border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-text-dim" style={{ borderColor: "var(--color-text-dim)" }}>
            Illustrative
          </span>
        ) : (
          <span className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide" style={{ color: "var(--color-positive)", border: "1px solid var(--color-positive)" }}>
            Real
          </span>
        ),
      align: "center",
    },
  ];

  return (
    <div>
      <div className="mb-3 flex gap-2">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setFilter(r)}
            className={`rounded-md border px-3 py-1 text-xs font-medium transition-colors ${
              filter === r ? "border-highlight text-text" : "border-border text-text-muted hover:text-text"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <DataTable columns={columns} rows={filtered} keyFn={(d) => d.id} />
    </div>
  );
}
