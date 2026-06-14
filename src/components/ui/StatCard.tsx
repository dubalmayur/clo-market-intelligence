import type { ReactNode } from "react";
import { Card, SourceTag } from "./Card";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  accent?: "us" | "europe" | "neutral";
  source?: string;
  sourceUrl?: string;
  asOf?: string;
  icon?: ReactNode;
}

export function StatCard({ label, value, delta, deltaPositive, accent = "neutral", source, sourceUrl, asOf, icon }: StatCardProps) {
  const accentColor =
    accent === "us" ? "var(--color-us)" : accent === "europe" ? "var(--color-europe)" : "var(--color-accent)";

  return (
    <Card className="flex flex-col gap-2 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-muted">{label}</span>
        {icon && <span style={{ color: accentColor }}>{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="tabular font-display text-2xl font-semibold text-text">{value}</span>
        {delta && (
          <span
            className="tabular text-xs font-medium"
            style={{ color: deltaPositive ? "var(--color-positive)" : "var(--color-negative)" }}
          >
            {delta}
          </span>
        )}
      </div>
      <div className="mt-1 h-1 w-full rounded-full" style={{ background: "var(--color-border)" }}>
        <div className="h-1 rounded-full" style={{ width: "100%", background: accentColor }} />
      </div>
      {source && (
        <div className="mt-1">
          <SourceTag source={source} url={sourceUrl} asOf={asOf} />
        </div>
      )}
    </Card>
  );
}
