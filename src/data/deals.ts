// Deal-level CLO records.
//
// Comprehensive deal-by-deal databases (the "issuances" table envisioned in
// the platform spec) are the core commercial product of PitchBook | LCD,
// Creditflux and Trepp, and are not available through free/public channels.
//
// This file contains:
//  1. A small number of REAL, named deals drawn from public press coverage
//     (isIllustrative: false), each with a source citation.
//  2. A set of clearly-labelled ILLUSTRATIVE example records
//     (isIllustrative: true) that demonstrate the full schema described in
//     the platform spec (manager, arranger, trustee, administrator,
//     jurisdiction, ratings, documentation links, etc.) so the table, filters
//     and detail view are fully functional pending a real data feed.

export interface DealRecord {
  id: string;
  name: string;
  region: "US" | "Europe";
  issueDate: string;
  manager: string;
  arranger?: string;
  trustee?: string;
  administrator?: string;
  jurisdiction: string;
  currency: string;
  dealSize: number;
  assetType: string;
  reinvestmentPeriodEnd?: string;
  maturityDate?: string;
  ratings?: string;
  isIllustrative: boolean;
  source?: string;
  sourceUrl?: string;
}

export const deals: DealRecord[] = [
  {
    id: "arini-eur-clo-vii",
    name: "Arini European CLO VII",
    region: "Europe",
    issueDate: "2025-11",
    manager: "Arini Capital Management",
    jurisdiction: "Ireland",
    currency: "EUR",
    dealSize: 615.7,
    assetType: "Broadly Syndicated Loans",
    isIllustrative: false,
    source: "Alternative Credit Investor",
    sourceUrl: "https://alternativecreditinvestor.com/2025/10/02/european-clo-issuance-on-track-to-set-new-record-in-2025/",
  },
  {
    id: "goldentree-us-clo-7-reset",
    name: "GoldenTree Loan Management US CLO 7 (2021 Reset)",
    region: "US",
    issueDate: "2021-12",
    manager: "GoldenTree Asset Management",
    jurisdiction: "Cayman Islands",
    currency: "USD",
    dealSize: 478.25,
    assetType: "Broadly Syndicated Loans",
    ratings: "AAA tranche reset at S+107bps (from S+190bps at original 2020 pricing)",
    isIllustrative: false,
    source: "S&P Global Market Intelligence",
    sourceUrl: "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/global-clo-roundup-us-clo-new-issue-volume-exceeds-40b-63534253",
  },
  {
    id: "sample-us-1",
    name: "[Sample] North Harbor CLO 2025-1",
    region: "US",
    issueDate: "2025-03",
    manager: "Ares Management",
    arranger: "J.P. Morgan",
    trustee: "U.S. Bank Trust Company",
    administrator: "Alter Domus",
    jurisdiction: "Cayman Islands",
    currency: "USD",
    dealSize: 500,
    assetType: "Broadly Syndicated Loans",
    reinvestmentPeriodEnd: "2030-04",
    maturityDate: "2038-04",
    ratings: "AAA / AA / A / BBB / BB",
    isIllustrative: true,
  },
  {
    id: "sample-us-2",
    name: "[Sample] Cobalt Ridge CLO 2024-2",
    region: "US",
    issueDate: "2024-09",
    manager: "Carlyle",
    arranger: "Barclays",
    trustee: "Wilmington Trust",
    administrator: "CSC",
    jurisdiction: "Cayman Islands",
    currency: "USD",
    dealSize: 425,
    assetType: "Broadly Syndicated Loans",
    reinvestmentPeriodEnd: "2029-10",
    maturityDate: "2037-10",
    ratings: "AAA / AA / A / BBB / BB / B",
    isIllustrative: true,
  },
  {
    id: "sample-us-3",
    name: "[Sample] Trailwood Direct Lending CLO 2025-1",
    region: "US",
    issueDate: "2025-06",
    manager: "Golub Capital",
    arranger: "Morgan Stanley",
    trustee: "BNY",
    administrator: "Vistra",
    jurisdiction: "Delaware",
    currency: "USD",
    dealSize: 600,
    assetType: "Middle Market / Private Credit Loans",
    reinvestmentPeriodEnd: "2030-07",
    maturityDate: "2036-07",
    ratings: "AAA / AA / A",
    isIllustrative: true,
  },
  {
    id: "sample-eu-1",
    name: "[Sample] Thames Gate CLO VIII",
    region: "Europe",
    issueDate: "2025-04",
    manager: "CVC Credit",
    arranger: "Deutsche Bank",
    trustee: "Deutsche Bank Trust Company",
    administrator: "Maples Group",
    jurisdiction: "Ireland",
    currency: "EUR",
    dealSize: 410,
    assetType: "Broadly Syndicated Loans",
    reinvestmentPeriodEnd: "2029-05",
    maturityDate: "2038-05",
    ratings: "AAA / AA / A / BBB / BB / B",
    isIllustrative: true,
  },
  {
    id: "sample-eu-2",
    name: "[Sample] Nordic Crown CLO IV",
    region: "Europe",
    issueDate: "2024-11",
    manager: "Barings",
    arranger: "BNP Paribas",
    trustee: "Citibank, N.A.",
    administrator: "TMF Group",
    jurisdiction: "Ireland",
    currency: "EUR",
    dealSize: 380,
    assetType: "Broadly Syndicated Loans",
    reinvestmentPeriodEnd: "2028-12",
    maturityDate: "2037-12",
    ratings: "AAA / AA / A / BBB / BB",
    isIllustrative: true,
  },
  {
    id: "sample-eu-3",
    name: "[Sample] Alpine Reset CLO II (2025 Reset)",
    region: "Europe",
    issueDate: "2025-09",
    manager: "PGIM Fixed Income",
    arranger: "Natixis",
    trustee: "Deutsche Bank Trust Company",
    administrator: "Ocorian",
    jurisdiction: "Ireland",
    currency: "EUR",
    dealSize: 450,
    assetType: "Broadly Syndicated Loans",
    reinvestmentPeriodEnd: "2030-10",
    maturityDate: "2038-10",
    ratings: "AAA / AA / A / BBB",
    isIllustrative: true,
  },
];

export const deals10YearNote =
  "A complete 10-year, deal-by-deal history (2016\u20132025) across both markets requires a PitchBook | LCD, Creditflux or Trepp data licence. This table demonstrates the full schema with two real, publicly-reported deals and a small set of clearly-labelled illustrative examples; connect a licensed data feed to populate it in full.";
