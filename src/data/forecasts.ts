// 2026 issuance forecasts, compiled from sell-side research published in
// late 2025 / early 2026. "Base", "bull" and "bear" cases are this platform's
// synthesis of the range of bank estimates cited below, not a single bank's
// house view. Figures are gross new-issue volume unless noted.

export interface ForecastCase {
  case: "bear" | "base" | "bull";
  value: number;
  label: string;
}

export interface ForecastBlock {
  region: "US" | "Europe";
  unit: string;
  year: number;
  cases: ForecastCase[];
  bankEstimates: { bank: string; value: string; note?: string }[];
  source: string;
  sourceUrl: string;
  asOf: string;
}

export const forecast2026US: ForecastBlock = {
  region: "US",
  unit: "$bn",
  year: 2026,
  cases: [
    { case: "bear", value: 160, label: "Slowdown in M&A activity, wider spreads dampen new BSL/PC supply" },
    { case: "base", value: 195, label: "Broadly in line with 2025's record pace; steady BSL + private-credit issuance" },
    { case: "bull", value: 215, label: "M&A-driven loan supply rebound and AI-capex financing boost new-issue volume" },
  ],
  bankEstimates: [
    { bank: "Deutsche Bank", value: "$190bn", note: "$145bn BSL + $45bn MM/PC" },
    { bank: "Morgan Stanley", value: "$200bn", note: "Plus $250bn combined reset/refi activity" },
    { bank: "BofA Securities / Barclays", value: "$145\u2013160bn BSL + $35\u201345bn MM/PC" },
  ],
  source: "PitchBook | LCD, \"2026 US CLO Outlook\"",
  sourceUrl: "https://pitchbook.com/news/articles/2026-us-clo-outlook-volume-to-remain-strong-spreads-to-widen-modestly",
  asOf: "2025-12-17",
};

export const forecast2026Europe: ForecastBlock = {
  region: "Europe",
  unit: "\u20acbn",
  year: 2026,
  cases: [
    { case: "bear", value: 50, label: "Tighter loan spreads pressure equity arbitrage, supply moderates" },
    { case: "base", value: 58, label: "Broadening investor base sustains near-record issuance momentum" },
    { case: "bull", value: 65, label: "Rate cuts spur loan supply; reset pipeline converts into fresh new-issue capacity" },
  ],
  bankEstimates: [
    { bank: "Deutsche Bank", value: "\u20ac65bn gross / \u20ac45bn net" },
    { bank: "BNP Paribas", value: "\u2248\u20ac60bn" },
    { bank: "BofA Securities / Barclays", value: "\u2248\u20ac55bn" },
  ],
  source: "PitchBook | LCD, \"2026 European CLO Outlook\"",
  sourceUrl: "https://pitchbook.com/news/articles/2026-european-clo-outlook-broadening-investor-base-builds-issuance-momentum",
  asOf: "2025-12-17",
};
