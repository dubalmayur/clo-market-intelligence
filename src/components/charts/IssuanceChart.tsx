"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { usIssuance, europeIssuance } from "@/data/issuance";

interface ChartRow {
  year: number;
  us: number;
  usConfidence: "reported" | "estimated";
  europe: number;
  europeConfidence: "reported" | "estimated";
}

function buildData(): ChartRow[] {
  return usIssuance.map((u, i) => ({
    year: u.year,
    us: u.volume,
    usConfidence: u.confidence,
    europe: europeIssuance[i].volume,
    europeConfidence: europeIssuance[i].confidence,
  }));
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2 text-xs shadow-lg">
      <div className="mb-1 font-mono text-text-dim">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center justify-between gap-3">
          <span style={{ color: p.color }}>{p.dataKey === "us" ? "US ($bn)" : "Europe (\u20acbn)"}</span>
          <span className="tabular text-text">
            {p.value.toFixed(1)}
            {p.dataKey === "us" ? (p.payload.usConfidence === "estimated" ? " (est.)" : "") : p.payload.europeConfidence === "estimated" ? " (est.)" : ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export function IssuanceChart() {
  const data = buildData();

  return (
    <ResponsiveContainer width="100%" height={320}>
      <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="year" tick={{ fill: "var(--color-text-dim)", fontSize: 11 }} axisLine={{ stroke: "var(--color-border)" }} tickLine={false} />
        <YAxis
          yAxisId="us"
          tick={{ fill: "var(--color-text-dim)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={48}
          tickFormatter={(v) => `$${v}`}
        />
        <YAxis
          yAxisId="eu"
          orientation="right"
          tick={{ fill: "var(--color-text-dim)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={48}
          tickFormatter={(v) => `\u20ac${v}`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-surface-2)" }} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: "var(--color-text-muted)" }}
          formatter={(value) => (value === "us" ? "US ($bn)" : "Europe (\u20acbn)")}
        />
        <Bar yAxisId="us" dataKey="us" radius={[2, 2, 0, 0]} maxBarSize={22}>
          {data.map((d, i) => (
            <Cell key={`us-${i}`} fill="var(--color-us)" fillOpacity={d.usConfidence === "estimated" ? 0.35 : 0.9} />
          ))}
        </Bar>
        <Bar yAxisId="eu" dataKey="europe" radius={[2, 2, 0, 0]} maxBarSize={22}>
          {data.map((d, i) => (
            <Cell key={`eu-${i}`} fill="var(--color-europe)" fillOpacity={d.europeConfidence === "estimated" ? 0.35 : 0.9} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
}
