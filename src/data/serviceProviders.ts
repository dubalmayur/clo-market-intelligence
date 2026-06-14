export interface ServiceProvider {
  id: string;
  name: string;
  country: string;
  hq: string;
  services: string[];
  description: string;
  website: string;
}

export const serviceProviders: ServiceProvider[] = [
  {
    id: "maples-group-csp",
    name: "Maples Group",
    country: "Cayman Islands",
    hq: "George Town",
    services: ["Entity Management", "SPV Services", "Regulatory Services"],
    description: "Provides registered office, directorship and SPV services for CLO issuer vehicles.",
    website: "https://maples.com",
  },
  {
    id: "csc-csp",
    name: "CSC",
    country: "United States",
    hq: "Wilmington, DE",
    services: ["Entity Management", "SPV Services", "Fund Administration", "Regulatory Services"],
    description: "Full-service corporate and SPV administration provider for structured finance issuers.",
    website: "https://www.cscglobal.com",
  },
  {
    id: "tmf-group-csp",
    name: "TMF Group",
    country: "Netherlands",
    hq: "Amsterdam",
    services: ["Entity Management", "SPV Services", "Fund Administration"],
    description: "Administers issuer SPVs and provides corporate secretarial services for CLO platforms.",
    website: "https://www.tmf-group.com",
  },
  {
    id: "apex-group-csp",
    name: "Apex Group",
    country: "Bermuda",
    hq: "Hamilton",
    services: ["Fund Administration", "Entity Management", "Regulatory Services"],
    description: "Provides administration and depositary services across the alternative credit ecosystem, including CLOs.",
    website: "https://www.apexgroup.com",
  },
  {
    id: "ocorian-csp",
    name: "Ocorian",
    country: "United Kingdom",
    hq: "London",
    services: ["Entity Management", "SPV Services", "Capital Markets Services"],
    description: "Corporate and capital markets services provider for CLO issuer entities.",
    website: "https://www.ocorian.com",
  },
  {
    id: "vistra-csp",
    name: "Vistra",
    country: "United Kingdom",
    hq: "London",
    services: ["Entity Management", "SPV Services", "Fund Administration"],
    description: "Global corporate services provider supporting structured finance and CLO issuer entities.",
    website: "https://www.vistra.com",
  },
  {
    id: "iq-eq",
    name: "IQ-EQ",
    country: "Luxembourg",
    hq: "Luxembourg City",
    services: ["Fund Administration", "Entity Management", "Regulatory Services"],
    description: "Investor services group providing administration and compliance support to CLO managers and issuers.",
    website: "https://iqeq.com",
  },
];
