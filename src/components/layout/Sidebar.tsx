"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Users,
  Landmark,
  ShieldCheck,
  Building2,
  Layers,
  FileSearch,
  FileText,
  Download,
  Code2,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { navSections } from "@/data/nav";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Users,
  Landmark,
  ShieldCheck,
  Building2,
  Layers,
  FileSearch,
  FileText,
  Download,
  Code2,
  BookOpen,
};

function RegionBadge({ region }: { region: "US" | "EU" }) {
  const color = region === "US" ? "var(--color-us)" : "var(--color-europe)";
  return (
    <span
      className="flex h-5 w-7 shrink-0 items-center justify-center rounded-[3px] font-mono text-[10px] font-semibold tracking-wide"
      style={{ color, border: `1px solid ${color}` }}
    >
      {region}
    </span>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 border-r border-border bg-bg-sunken">
      <div className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-5">
        <div
          className="flex h-8 w-8 items-center justify-center rounded font-display text-sm font-bold"
          style={{ background: "var(--color-surface-2)", color: "var(--color-highlight)" }}
        >
          CL
        </div>
        <div className="leading-tight">
          <div className="font-display text-sm font-semibold text-text">CLO Market Intel</div>
          <div className="font-mono text-[10px] text-text-dim">US &amp; EUROPE</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navSections.map((section) => (
          <div key={section.title} className="mb-5">
            <div className="px-2 pb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-text-dim">
              {section.title}
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                        active
                          ? "bg-surface text-text"
                          : "text-text-muted hover:bg-surface hover:text-text"
                      }`}
                    >
                      {item.icon === "USFlag" ? (
                        <RegionBadge region="US" />
                      ) : item.icon === "EUFlag" ? (
                        <RegionBadge region="EU" />
                      ) : Icon ? (
                        <Icon
                          size={16}
                          strokeWidth={1.75}
                          className={active ? "text-highlight" : "text-text-dim group-hover:text-text-muted"}
                        />
                      ) : null}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-5 py-3 font-mono text-[10px] text-text-dim">
        Data sourced &amp; cited.
        <br />
        See Methodology &amp; Sources.
      </div>
    </aside>
  );
}
