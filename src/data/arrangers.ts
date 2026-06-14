// Arranger / bookrunner directory.
//
// Bank names, headquarters and general CLO market presence reflect public
// information. Deal-count and volume-share league tables require
// subscription data (PitchBook/LCD, Creditflux) and are not fabricated here
// -- see /methodology for how to wire in real league-table data once you
// have access.

export interface Arranger {
  id: string;
  name: string;
  country: string;
  hq: string;
  region: "US" | "Europe" | "Global";
  description: string;
  website: string;
}

export const arrangers: Arranger[] = [
  {
    id: "jpmorgan",
    name: "J.P. Morgan",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Consistently one of the most active CLO arrangers in both the US and European markets.",
    website: "https://www.jpmorgan.com",
  },
  {
    id: "morgan-stanley",
    name: "Morgan Stanley",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Major US CLO bookrunner with an active European CLO syndicate desk.",
    website: "https://www.morganstanley.com",
  },
  {
    id: "bofa",
    name: "Bank of America",
    country: "United States",
    hq: "Charlotte, NC",
    region: "Global",
    description: "BofA Securities is a leading arranger of US CLOs and publishes widely-cited CLO research.",
    website: "https://www.bankofamerica.com",
  },
  {
    id: "goldman-sachs",
    name: "Goldman Sachs",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Active CLO arranger and structurer across both US and European primary markets.",
    website: "https://www.goldmansachs.com",
  },
  {
    id: "citigroup",
    name: "Citigroup",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Global bank with a long-standing CLO structuring and placement business.",
    website: "https://www.citigroup.com",
  },
  {
    id: "barclays",
    name: "Barclays",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    description: "Leading European CLO arranger with a significant US CLO presence and research franchise.",
    website: "https://www.barclays.com",
  },
  {
    id: "deutsche-bank",
    name: "Deutsche Bank",
    country: "Germany",
    hq: "Frankfurt",
    region: "Global",
    description: "One of the most prominent arrangers and researchers of European CLOs, also active in the US.",
    website: "https://www.db.com",
  },
  {
    id: "bnp-paribas",
    name: "BNP Paribas",
    country: "France",
    hq: "Paris",
    region: "Europe",
    description: "Major arranger of European CLOs and a frequent forecaster of European issuance volumes.",
    website: "https://www.bnpparibas.com",
  },
  {
    id: "credit-agricole",
    name: "Cr\u00e9dit Agricole CIB",
    country: "France",
    hq: "Montrouge",
    region: "Europe",
    description: "French corporate and investment bank active in European CLO arranging and placement.",
    website: "https://www.ca-cib.com",
  },
  {
    id: "natixis",
    name: "Natixis",
    country: "France",
    hq: "Paris",
    region: "Europe",
    description: "French investment bank with an active European structured credit and CLO arranging desk.",
    website: "https://www.natixis.com",
  },
  {
    id: "hsbc",
    name: "HSBC",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    description: "Global bank with a European CLO arranging franchise and growing US presence.",
    website: "https://www.hsbc.com",
  },
  {
    id: "rbc",
    name: "RBC Capital Markets",
    country: "Canada",
    hq: "Toronto",
    region: "Global",
    description: "Capital markets arm of Royal Bank of Canada, active as a US CLO arranger.",
    website: "https://www.rbccm.com",
  },
];
