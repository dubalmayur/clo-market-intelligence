// Master source attribution list, satisfying the platform's requirement that
// every data point carry a source name, URL, publication date and
// "last updated" timestamp. Surfaced in full on /methodology.

export interface SourceEntry {
  id: string;
  name: string;
  publisher: string;
  url: string;
  publicationDate: string;
  usedFor: string;
}

export const sources: SourceEntry[] = [
  {
    id: "bloomberg-2025-record",
    name: "US CLO Sales Reach Fresh Record in 2025 as Demand Stays Strong",
    publisher: "Bloomberg News",
    url: "https://www.bloomberg.com/news/articles/2025-12-17/us-clo-sales-reach-fresh-record-in-2025-as-demand-stays-strong",
    publicationDate: "2025-12-17",
    usedFor: "US CLO issuance, 2024 and 2025",
  },
  {
    id: "spglobal-2017-us",
    name: "Surpassing Expectations, 2017 US CLO Issuance Nears Record Levels",
    publisher: "S&P Global Market Intelligence (LCD)",
    url: "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/surpassing-expectations-2017-us-clo-issuance-nears-record-levels",
    publicationDate: "2018-01-01",
    usedFor: "US CLO issuance, 2017",
  },
  {
    id: "naic-ye2021",
    name: "U.S. Insurers' CLO Exposure at Year-End 2021",
    publisher: "NAIC Capital Markets Bureau",
    url: "https://content.naic.org/sites/default/files/capital-markets-special-reports-CLO-YE%202021.pdf",
    publicationDate: "2021-12-01",
    usedFor: "US CLO issuance, 2018 record figure",
  },
  {
    id: "naic-ye2023",
    name: "U.S. Insurers' CLO Exposure at Year-End 2023",
    publisher: "NAIC Capital Markets Bureau",
    url: "https://content.naic.org/sites/default/files/capital-markets-special-reports-clo-ye2023-final.pdf",
    publicationDate: "2024-01-01",
    usedFor: "US CLO issuance, 2022 and 2023",
  },
  {
    id: "lseg-yieldbook-intro",
    name: "An Introduction to CLOs",
    publisher: "LSEG / Yield Book",
    url: "https://www.lseg.com/content/dam/data-analytics/en_us/documents/publications/an-introduction-to-clos.pdf",
    publicationDate: "2021-05-01",
    usedFor: "US CLO issuance, 2019 (derived) and 2020",
  },
  {
    id: "spglobal-2021-record",
    name: "Slower December Issuance Winds Down Record-Setting 2021 CLO Market",
    publisher: "S&P Global Market Intelligence (LCD)",
    url: "https://spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/slower-december-issuance-winds-down-record-setting-2021-clo-market-68281786",
    publicationDate: "2022-01-04",
    usedFor: "US CLO issuance 2020/2021; European CLO issuance 2021",
  },
  {
    id: "spglobal-2017-eu",
    name: "European CLO Issuance Continues on Record Pace",
    publisher: "S&P Global Market Intelligence (LCD)",
    url: "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/leveraged-loan-news/european-clo-issuance-continues-record-pace",
    publicationDate: "2018-01-01",
    usedFor: "European CLO issuance, 2017 and 2016 estimate",
  },
  {
    id: "kbra-eu-2021",
    name: "The European Securitisation Market in Q4 2021: Strong Finish to the Year",
    publisher: "KBRA UK",
    url: "https://www.businesswire.com/news/home/20220119005754/en/KBRA-UK-Releases-Research-The-European-Securitisation-Market-in-Q4-2021-Strong-Finish-to-the-Year",
    publicationDate: "2022-01-19",
    usedFor: "European CLO issuance, 2019 estimate context",
  },
  {
    id: "spglobal-2021-eu-records",
    name: "Global CLO Roundup: Europe Sets All-Time Issuance Marks as Deal Wave Sweeps US",
    publisher: "S&P Global Market Intelligence",
    url: "https://www.spglobal.com/market-intelligence/en/news-insights/articles/2021/11/global-clo-roundup-europe-sets-all-time-issuance-marks-deal-wave-sweeps-us-67867344",
    publicationDate: "2021-11-29",
    usedFor: "European CLO issuance, 2020 estimate",
  },
  {
    id: "pitchbook-eu-monthly-record",
    name: "Quick Take: European CLO Market Sets Monthly Issuance Record",
    publisher: "PitchBook | LCD",
    url: "https://pitchbook.com/news/articles/quick-take-european-clo-market-sets-monthly-issuance-record",
    publicationDate: "2025-03-07",
    usedFor: "European CLO issuance, 2022 and 2023",
  },
  {
    id: "db-2026-outlook",
    name: "Update on CLOs \u2013 Outlook for 2026",
    publisher: "Deutsche Bank Research",
    url: "https://flow.db.com/Topics/trust-and-securities-services/update-on-clos-outlook-for-2026",
    publicationDate: "2026-01-28",
    usedFor: "European CLO issuance, 2024 and 2025; secondary-market context",
  },
  {
    id: "pitchbook-2026-us-outlook",
    name: "2026 US CLO Outlook: Volume to Remain Strong, Spreads to Widen Modestly",
    publisher: "PitchBook | LCD",
    url: "https://pitchbook.com/news/articles/2026-us-clo-outlook-volume-to-remain-strong-spreads-to-widen-modestly",
    publicationDate: "2025-12-17",
    usedFor: "2026 US issuance forecast",
  },
  {
    id: "pitchbook-2026-eu-outlook",
    name: "2026 European CLO Outlook: Broadening Investor Base Builds Issuance Momentum",
    publisher: "PitchBook | LCD",
    url: "https://pitchbook.com/news/articles/2026-european-clo-outlook-broadening-investor-base-builds-issuance-momentum",
    publicationDate: "2025-12-17",
    usedFor: "2026 European issuance forecast",
  },
  {
    id: "clopremium-us-ranking",
    name: "US CLO Manager Rankings: Collateral AUM as of March 31, 2026",
    publisher: "CLO Research / Clopremium",
    url: "https://clopremium.co.uk/us-clo-manager-rankings-collateral-aum-as-of-march-31-2026/",
    publicationDate: "2026-03-31",
    usedFor: "Top-10 US CLO manager ranking by collateral AUM",
  },
  {
    id: "clopremium-global-aum",
    name: "Top 30 Largest Global CLO Managers by Collateral AUM as of 30 September 2025",
    publisher: "CLO Research / Clopremium",
    url: "https://clopremium.co.uk/top-28-largest-global-clo-managers-by-collateral-aum-as-of-30-september-2025/",
    publicationDate: "2025-11-06",
    usedFor: "Global CLO market AUM context (~$1.5tn)",
  },
  {
    id: "aci-arini-clo",
    name: "European CLO Issuance on Track to Set New Record in 2025",
    publisher: "Alternative Credit Investor",
    url: "https://alternativecreditinvestor.com/2025/10/02/european-clo-issuance-on-track-to-set-new-record-in-2025/",
    publicationDate: "2025-10-02",
    usedFor: "Arini European CLO VII deal record",
  },
  {
    id: "spglobal-goldentree",
    name: "Global CLO Roundup: US CLO New-Issue Volume Exceeds $40bn",
    publisher: "S&P Global Market Intelligence",
    url: "https://www.spglobal.com/marketintelligence/en/news-insights/latest-news-headlines/global-clo-roundup-us-clo-new-issue-volume-exceeds-40b-63534253",
    publicationDate: "2021-04-06",
    usedFor: "GoldenTree Loan Management US CLO 7 reset deal record",
  },
  {
    id: "csc-intertrust-rebrand",
    name: "Intertrust Group Rebrands to CSC Following Acquisition",
    publisher: "CSC",
    url: "https://www.cscglobal.com/service/press/csc-rebrands-intertrust-group/",
    publicationDate: "2024-07-18",
    usedFor: "Administrator directory: CSC / Intertrust",
  },
  {
    id: "wikipedia-sanne",
    name: "Sanne Group",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sanne_Group",
    publicationDate: "2022-08-01",
    usedFor: "Administrator directory: Apex Group / Sanne",
  },
];
