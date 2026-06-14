import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-border bg-surface ${className}`}>{children}</div>
  );
}

export function CardHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
      <div>
        <h3 className="font-display text-sm font-semibold text-text">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-text-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function SourceTag({ source, url, asOf }: { source: string; url?: string; asOf?: string }) {
  const content = (
    <span className="font-mono text-[10px] uppercase tracking-wide text-text-dim">
      Source: {source}
      {asOf ? ` \u00b7 ${asOf}` : ""}
    </span>
  );

  if (!url) return content;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-text-muted">
      {content}
    </a>
  );
}

export function ConfidenceBadge({ confidence }: { confidence: "reported" | "estimated" }) {
  if (confidence === "reported") {
    return (
      <span
        className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide"
        style={{ color: "var(--color-positive)", border: "1px solid var(--color-positive)" }}
      >
        Reported
      </span>
    );
  }
  return (
    <span
      className="rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide"
      style={{ color: "var(--color-highlight)", border: "1px solid var(--color-highlight)" }}
    >
      Estimated
    </span>
  );
}
