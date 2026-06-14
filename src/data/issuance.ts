// Historical CLO new-issue volume data.
//
// Every data point carries an explicit source, URL and "as of" date so the
// platform can satisfy the source-attribution requirement. Where a precise
// full-year figure is not available from a public (non-paywalled) source,
// the point is marked confidence: "estimated" and carries a note explaining
// the basis for the estimate. See /methodology for the full discussion.

export type Confidence = "reported" | "estimated";

export interface IssuanceDataPoint {
  year: number;
  /** Volume in billions of the region's local currency (USD for US, EUR for Europe) */
  volume: number;
  confidence: Confidence;
  source: string;
  sourceUrl: string;
  asOf: string;
  note?: string;
}

export const usIssuance: IssuanceDataPoint[] = [
  {
    year: 2016,
    volume: 75,
    confidence: "estimated",
    source: "DoubleLine Opportunistic Credit Fund N-CSR (SEC EDGAR)",
    sourceUrl:
      "https://www.sec.gov/Archives/edgar/data/0001525201/000119312516780708/d240230dncsr.htm",
    asOf: "2016-09-30",
    note: "Full-year figure not available from a public primary source. Estimated from reported $65.7bn issued across 143 deals in the 12 months to Sept 2016, extrapolated for Q4.",
  },
  {
    year: 2017,
    volume: 118,
    confidence: "reported",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/surpassing-expectations-2017-us-clo-issuance-nears-record-levels",
    asOf: "2018-01-01",
  },
  {
    year: 2018,
    volume: 128.2,
    confidence: "reported",
    source: "NAIC Capital Markets Bureau, citing S&P Global",
    sourceUrl:
      "https://content.naic.org/sites/default/files/capital-markets-special-reports-CLO-YE%202021.pdf",
    asOf: "2021-12-01",
  },
  {
    year: 2019,
    volume: 118.4,
    confidence: "estimated",
    source: "LSEG / Yield Book, \"An Introduction to CLOs\"",
    sourceUrl:
      "https://www.lseg.com/content/dam/data-analytics/en_us/documents/publications/an-introduction-to-clos.pdf",
    asOf: "2021-05-01",
    note: "Derived from the reported 24% year-over-year decline to 2020's $90bn ($90bn / 0.76 \u2248 $118.4bn).",
  },
  {
    year: 2020,
    volume: 93.5,
    confidence: "reported",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/slower-december-issuance-winds-down-record-setting-2021-clo-market-68281786",
    asOf: "2022-01-04",
  },
  {
    year: 2021,
    volume: 186.7,
    confidence: "reported",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/slower-december-issuance-winds-down-record-setting-2021-clo-market-68281786",
    asOf: "2022-01-04",
    note: "Record at the time, exceeding the prior record of $128.8bn set in 2018.",
  },
  {
    year: 2022,
    volume: 129,
    confidence: "reported",
    source: "NAIC Capital Markets Bureau, citing S&P Global",
    sourceUrl:
      "https://content.naic.org/sites/default/files/capital-markets-special-reports-clo-ye2023-final.pdf",
    asOf: "2024-01-01",
    note: "Comprised of approximately $117bn BSL CLOs and $12bn MM CLOs.",
  },
  {
    year: 2023,
    volume: 115.8,
    confidence: "reported",
    source: "NAIC Capital Markets Bureau, citing S&P Global",
    sourceUrl:
      "https://content.naic.org/sites/default/files/capital-markets-special-reports-clo-ye2023-final.pdf",
    asOf: "2024-01-01",
    note: "Comprised of approximately $89bn BSL CLOs and $27bn MM CLOs.",
  },
  {
    year: 2024,
    volume: 201.2,
    confidence: "reported",
    source: "Bloomberg News",
    sourceUrl:
      "https://www.bloomberg.com/news/articles/2025-12-17/us-clo-sales-reach-fresh-record-in-2025-as-demand-stays-strong",
    asOf: "2025-12-17",
    note: "Record at the time; surpassed again in 2025.",
  },
  {
    year: 2025,
    volume: 201.5,
    confidence: "reported",
    source: "Bloomberg News",
    sourceUrl:
      "https://www.bloomberg.com/news/articles/2025-12-17/us-clo-sales-reach-fresh-record-in-2025-as-demand-stays-strong",
    asOf: "2025-12-17",
    note: "Fresh all-time annual record for US CLO new-issue volume.",
  },
];

export const europeIssuance: IssuanceDataPoint[] = [
  {
    year: 2016,
    volume: 12,
    confidence: "estimated",
    source: "Market commentary (LCD, AFME)",
    sourceUrl:
      "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/european-clo-issuance-continues-record-pace",
    asOf: "2018-01-01",
    note: "Pre-2017 European CLO market was comparatively nascent; a precise full-year figure from a public primary source was not located.",
  },
  {
    year: 2017,
    volume: 20.91,
    confidence: "reported",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/european-clo-issuance-continues-record-pace",
    asOf: "2018-01-01",
  },
  {
    year: 2018,
    volume: 24,
    confidence: "estimated",
    source: "Market commentary (LCD, AFME)",
    sourceUrl:
      "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/european-clo-issuance-continues-record-pace",
    asOf: "2019-01-01",
    note: "Estimated from market trend between 2017 (\u20ac20.9bn) and 2019; precise full-year LCD figure not publicly available.",
  },
  {
    year: 2019,
    volume: 25,
    confidence: "estimated",
    source: "Market commentary (LCD, AFME)",
    sourceUrl:
      "https://www.businesswire.com/news/home/20220119005754/en/KBRA-UK-Releases-Research-The-European-Securitisation-Market-in-Q4-2021-Strong-Finish-to-the-Year",
    asOf: "2020-01-01",
    note: "Estimated; precise full-year LCD figure not publicly available.",
  },
  {
    year: 2020,
    volume: 21,
    confidence: "estimated",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://www.spglobal.com/market-intelligence/en/news-insights/articles/2021/11/global-clo-roundup-europe-sets-all-time-issuance-marks-deal-wave-sweeps-us-67867344",
    asOf: "2021-11-29",
    note: "Estimated full-year figure based on \u20ac20.45bn issued year-to-date through Nov 29, 2020.",
  },
  {
    year: 2021,
    volume: 38.62,
    confidence: "reported",
    source: "S&P Global Market Intelligence (LCD)",
    sourceUrl:
      "https://spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/slower-december-issuance-winds-down-record-setting-2021-clo-market-68281786",
    asOf: "2022-01-04",
    note: "Market record at the time.",
  },
  {
    year: 2022,
    volume: 26.2,
    confidence: "reported",
    source: "PitchBook | LCD",
    sourceUrl: "https://pitchbook.com/news/articles/quick-take-european-clo-market-sets-monthly-issuance-record",
    asOf: "2025-03-07",
  },
  {
    year: 2023,
    volume: 26.2,
    confidence: "reported",
    source: "PitchBook | LCD",
    sourceUrl: "https://pitchbook.com/news/articles/quick-take-european-clo-market-sets-monthly-issuance-record",
    asOf: "2025-03-07",
  },
  {
    year: 2024,
    volume: 49,
    confidence: "reported",
    source: "Deutsche Bank Research",
    sourceUrl: "https://flow.db.com/Topics/trust-and-securities-services/update-on-clos-outlook-for-2026",
    asOf: "2026-01-28",
  },
  {
    year: 2025,
    volume: 60,
    confidence: "reported",
    source: "Deutsche Bank Research",
    sourceUrl: "https://flow.db.com/Topics/trust-and-securities-services/update-on-clos-outlook-for-2026",
    asOf: "2026-01-28",
    note: "All-time record for European CLO new-issue volume.",
  },
];

export function totalVolume(data: IssuanceDataPoint[]) {
  return data.reduce((sum, d) => sum + d.volume, 0);
}

export function latest(data: IssuanceDataPoint[]) {
  return data[data.length - 1];
}

export function yoyGrowth(data: IssuanceDataPoint[]) {
  const a = data[data.length - 2].volume;
  const b = data[data.length - 1].volume;
  return ((b - a) / a) * 100;
}
