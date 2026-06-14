import { managers } from "@/data/managers";
import { arrangers } from "@/data/arrangers";
import { trustees } from "@/data/trustees";
import { administrators } from "@/data/administrators";
import { serviceProviders } from "@/data/serviceProviders";
import { deals } from "@/data/deals";

export interface SearchResult {
  label: string;
  sublabel: string;
  type: string;
  href: string;
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const m of managers) {
    results.push({ label: m.name, sublabel: `Manager \u00b7 ${m.country}`, type: "Manager", href: "/managers" });
  }
  for (const a of arrangers) {
    results.push({ label: a.name, sublabel: `Arranger \u00b7 ${a.country}`, type: "Arranger", href: "/arrangers" });
  }
  for (const t of trustees) {
    results.push({ label: t.name, sublabel: `Trustee \u00b7 ${t.country}`, type: "Trustee", href: "/trustees" });
  }
  for (const a of administrators) {
    results.push({
      label: a.name,
      sublabel: `Administrator \u00b7 ${a.country}${a.legacyBrand ? ` (formerly ${a.legacyBrand})` : ""}`,
      type: "Administrator",
      href: "/administrators",
    });
  }
  for (const s of serviceProviders) {
    results.push({ label: s.name, sublabel: `Service Provider \u00b7 ${s.country}`, type: "Service Provider", href: "/service-providers" });
  }
  for (const d of deals) {
    results.push({
      label: d.name,
      sublabel: `Deal \u00b7 ${d.region} \u00b7 ${d.issueDate}`,
      type: "Deal",
      href: "/deals",
    });
  }

  return results;
}

export function searchIndex(index: SearchResult[], query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return index
    .filter((item) => item.label.toLowerCase().includes(q) || item.sublabel.toLowerCase().includes(q))
    .slice(0, limit);
}
