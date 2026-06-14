"use client";

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import type { IssuanceDataPoint } from "@/data/issuance";

function CustomTooltip({ active, payload, label, unit }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2 text-xs shadow-lg">
      <div className="mb-1 font-mono text-text-dim">{label}</div>
      <div className="tabular text-text">
        {unit}
        {p.value.toFixed(1)}
        {p.payload.confidence === "estimated" ? " (est.)" : ""}
      </div>
    </div>
  );
}

export function RegionIssuanceChart({ data, color, unit }: { data: IssuanceDataPoint[]; color: string; unit: string }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
        <XAxis dataKey="year" tick={{ fill: "var(--color-text-dim)", fontSize: 11 }} axisLine={{ stroke: "var(--color-border)" }} tickLine={false} />
        <YAxis tick={{ fill: "var(--color-text-dim)", fontSize: 11 }} axisLine={false} tickLine={false} width={44} tickFormatter={(v) => `${unit}${v}`} />
        <Tooltip content={<CustomTooltip unit={unit} />} cursor={{ fill: "var(--color-surface-2)" }} />
        <Bar dataKey="volume" radius={[3, 3, 0, 0]} maxBarSize={32}>
          {data.map((d, i) => (
            <Cell key={i} fill={color} fillOpacity={d.confidence === "estimated" ? 0.35 : 0.9} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
