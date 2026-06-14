"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/nav";
import { GlobalSearch } from "./GlobalSearch";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md border border-border p-2 text-text-muted hover:text-text lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={18} />
        </button>

        <GlobalSearch />

        <div className="ml-auto hidden items-center gap-2 font-mono text-[11px] text-text-dim sm:flex">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-positive)" }} />
          Data current as of Jun 2026
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-border bg-bg-sunken p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-display text-sm font-semibold text-text">CLO Market Intel</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="text-text-muted hover:text-text"
              >
                <X size={18} />
              </button>
            </div>
            {navSections.map((section) => (
              <div key={section.title} className="mb-4">
                <div className="px-1 pb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-text-dim">
                  {section.title}
                </div>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-2 py-1.5 text-sm ${
                          isActive(item.href) ? "bg-surface text-text" : "text-text-muted hover:bg-surface hover:text-text"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
