// CLO administrator directory.
//
// The fund-administration sector has consolidated heavily since 2022.
// Several brand names listed in many CLO directories no longer exist as
// independent entities; this directory reflects their current corporate
// homes, with the legacy brand noted for continuity.

export interface Administrator {
  id: string;
  name: string;
  legacyBrand?: string;
  country: string;
  hq: string;
  region: "US" | "Europe" | "Global";
  description: string;
  website: string;
}

export const administrators: Administrator[] = [
  {
    id: "alter-domus",
    name: "Alter Domus",
    country: "Luxembourg",
    hq: "Luxembourg City",
    region: "Global",
    description: "Global fund and CLO administration provider with a large loan agency and reporting practice.",
    website: "https://www.alterdomus.com",
  },
  {
    id: "csc",
    name: "CSC",
    legacyBrand: "Intertrust",
    country: "United States",
    hq: "Wilmington, DE",
    region: "Global",
    description:
      "Global business administration and compliance provider; Intertrust Group fully migrated to the CSC brand in 2024 following CSC's 2022 acquisition.",
    website: "https://www.cscglobal.com",
  },
  {
    id: "tmf-group",
    name: "TMF Group",
    country: "Netherlands",
    hq: "Amsterdam",
    region: "Global",
    description: "Global provider of administrative services, including CLO and SPV administration.",
    website: "https://www.tmf-group.com",
  },
  {
    id: "maples-group",
    name: "Maples Group",
    country: "Cayman Islands",
    hq: "George Town",
    region: "Global",
    description: "Provides fiduciary, fund and SPV administration services widely used by CLO issuers.",
    website: "https://maples.com",
  },
  {
    id: "apex-group",
    name: "Apex Group",
    legacyBrand: "Sanne",
    country: "Bermuda",
    hq: "Hamilton",
    region: "Global",
    description:
      "Global financial services group offering fund and corporate administration; acquired Sanne Group in 2022, which now operates under the Apex brand.",
    website: "https://www.apexgroup.com",
  },
  {
    id: "vistra",
    name: "Vistra",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    description: "Global corporate and fund administration provider servicing structured finance vehicles, including CLOs.",
    website: "https://www.vistra.com",
  },
  {
    id: "ocorian",
    name: "Ocorian",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    description: "Provides corporate, fund and capital markets administration services to CLO issuers.",
    website: "https://www.ocorian.com",
  },
];
