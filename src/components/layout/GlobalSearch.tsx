"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { buildSearchIndex, searchIndex } from "@/lib/search";

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchIndex(index, query), [index, query]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5">
        <Search size={15} className="text-text-dim" strokeWidth={1.75} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          placeholder="Search managers, arrangers, trustees, deals\u2026"
          className="w-full bg-transparent text-sm text-text placeholder:text-text-dim focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="text-text-dim hover:text-text-muted"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-80 overflow-y-auto rounded-md border border-border bg-surface shadow-lg">
          {results.length === 0 ? (
            <div className="px-3 py-3 text-sm text-text-dim">No matches for &ldquo;{query}&rdquo;</div>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((r, i) => (
                <li key={`${r.href}-${r.label}-${i}`}>
                  <Link
                    href={r.href}
                    className="flex items-center justify-between px-3 py-2 text-sm text-text hover:bg-surface-2"
                    onClick={() => setOpen(false)}
                  >
                    <span>{r.label}</span>
                    <span className="ml-3 shrink-0 font-mono text-[10px] text-text-dim">{r.sublabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
