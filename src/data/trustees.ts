export interface Trustee {
  id: string;
  name: string;
  country: string;
  hq: string;
  region: "US" | "Europe" | "Global";
  description: string;
  website: string;
}

export const trustees: Trustee[] = [
  {
    id: "us-bank",
    name: "U.S. Bank Trust Company",
    country: "United States",
    hq: "St. Paul, MN",
    region: "US",
    description: "One of the largest CLO trustees in the US broadly syndicated and middle-market segments.",
    website: "https://www.usbank.com",
  },
  {
    id: "wilmington-trust",
    name: "Wilmington Trust",
    country: "United States",
    hq: "Wilmington, DE",
    region: "US",
    description: "Part of M&T Bank; a longstanding trustee and collateral administrator for US CLOs.",
    website: "https://www.wilmingtontrust.com",
  },
  {
    id: "citibank-trust",
    name: "Citibank, N.A.",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Provides trustee, paying agent and collateral administration services across global CLO transactions.",
    website: "https://www.citigroup.com",
  },
  {
    id: "bny",
    name: "BNY",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Bank of New York Mellon is one of the largest global providers of CLO trustee and agency services.",
    website: "https://www.bny.com",
  },
  {
    id: "db-trust",
    name: "Deutsche Bank Trust Company",
    country: "Germany",
    hq: "Frankfurt",
    region: "Europe",
    description: "Trustee and agency services provider for European CLO transactions.",
    website: "https://www.db.com",
  },
];
