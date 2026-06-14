"use client";

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import type { ForecastBlock } from "@/data/forecasts";

const CASE_COLORS: Record<string, string> = {
  bear: "var(--color-negative)",
  base: "var(--color-accent)",
  bull: "var(--color-positive)",
};

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2 text-xs shadow-lg">
      <div className="mb-1 capitalize text-text-dim">{p.payload.case} case</div>
      <div className="tabular text-text">{p.payload.unit}{p.value}</div>
      <div className="mt-1 max-w-[220px] text-text-muted">{p.payload.label}</div>
    </div>
  );
}

export function ForecastChart({ block }: { block: ForecastBlock }) {
  const data = block.cases.map((c) => ({ ...c, unit: block.unit.replace("bn", "") }));

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 24, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
        <XAxis type="number" tick={{ fill: "var(--color-text-dim)", fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis
          dataKey="case"
          type="category"
          tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={50}
          tickFormatter={(v) => v.charAt(0).toUpperCase() + v.slice(1)}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-surface-2)" }} />
        <Bar dataKey="value" radius={[0, 3, 3, 0]} maxBarSize={28}>
          {data.map((d) => (
            <Cell key={d.case} fill={CASE_COLORS[d.case]} fillOpacity={0.85} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
