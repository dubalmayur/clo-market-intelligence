// CLO manager directory.
//
// Company names, headquarters and parent/affiliate relationships reflect
// public corporate information and are reasonably stable. The "usCloRank"
// field reflects the published top-10 US CLO manager ranking by collateral
// AUM (see source below) -- a genuinely real, sourced league-table position.
// Precise AUM dollar figures sit behind the CLO Research / Creditflux
// subscription and are not reproduced here; see /methodology.

export interface Manager {
  id: string;
  name: string;
  country: string;
  hq: string;
  region: "US" | "Europe" | "Global";
  parent?: string;
  description: string;
  usCloRank?: number;
  website: string;
}

export const usCloRankingSource = {
  label: "US CLO Manager Rankings: Collateral AUM as of March 31, 2026",
  publisher: "CLO Research / Clopremium",
  url: "https://clopremium.co.uk/us-clo-manager-rankings-collateral-aum-as-of-march-31-2026/",
  asOf: "2026-03-31",
};

export const managers: Manager[] = [
  {
    id: "blackstone",
    name: "Blackstone Credit & Insurance",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description:
      "Credit arm of Blackstone, one of the largest CLO managers globally across both broadly syndicated and private-credit strategies.",
    usCloRank: 1,
    website: "https://www.blackstone.com",
  },
  {
    id: "golub-capital",
    name: "Golub Capital",
    country: "United States",
    hq: "New York, NY",
    region: "US",
    description:
      "Middle-market and private-credit specialist, and one of the largest issuers of middle-market CLOs in the US.",
    usCloRank: 2,
    website: "https://www.golubcapital.com",
  },
  {
    id: "carlyle",
    name: "The Carlyle Group",
    country: "United States",
    hq: "Washington, D.C.",
    region: "Global",
    description:
      "Global alternative asset manager with a long-established CLO platform active across both US broadly syndicated loan and European CLO markets.",
    usCloRank: 3,
    website: "https://www.carlyle.com",
  },
  {
    id: "ares",
    name: "Ares Management",
    country: "United States",
    hq: "Los Angeles, CA",
    region: "Global",
    description:
      "Global alternative investment manager with a large credit platform spanning US and European CLOs and direct lending.",
    usCloRank: 4,
    website: "https://www.aresmgmt.com",
  },
  {
    id: "cifc",
    name: "CIFC Asset Management",
    country: "United States",
    hq: "New York, NY",
    region: "US",
    description:
      "Specialist credit manager focused on broadly syndicated loan CLOs, consistently ranked among the most active US CLO issuers.",
    usCloRank: 5,
    website: "https://www.cifc.com",
  },
  {
    id: "redding-ridge",
    name: "Redding Ridge Asset Management",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    parent: "Apollo Global Management",
    description:
      "CLO management platform affiliated with Apollo, issuing both US and European CLOs.",
    usCloRank: 6,
    website: "https://www.apollo.com",
  },
  {
    id: "ubs-am",
    name: "UBS Asset Management",
    country: "Switzerland",
    hq: "Zurich",
    region: "Global",
    description:
      "Global asset manager with a CLO platform covering US broadly syndicated loan strategies.",
    usCloRank: 7,
    website: "https://www.ubs.com/global/en/assetmanagement.html",
  },
  {
    id: "blackrock",
    name: "BlackRock",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description:
      "World's largest asset manager; significantly expanded its CLO and private-credit footprint following its acquisition of HPS Investment Partners.",
    usCloRank: 8,
    website: "https://www.blackrock.com",
  },
  {
    id: "elmwood",
    name: "Elmwood Asset Management",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    parent: "Onex Corporation",
    description:
      "CLO manager affiliated with Onex Credit, active in both US and European CLO markets.",
    usCloRank: 9,
    website: "https://www.onex.com",
  },
  {
    id: "neuberger-berman",
    name: "Neuberger Berman",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description:
      "Employee-owned global asset manager with an established CLO platform across US and European markets.",
    usCloRank: 10,
    website: "https://www.nb.com",
  },
  {
    id: "kkr",
    name: "KKR Credit",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description:
      "Credit platform of KKR, active in CLO management across broadly syndicated and private-credit strategies.",
    website: "https://www.kkr.com",
  },
  {
    id: "blue-owl",
    name: "Blue Owl Capital",
    country: "United States",
    hq: "New York, NY",
    region: "US",
    description:
      "Alternative asset manager with a fast-growing direct lending and CLO platform focused on middle-market and private-credit collateral.",
    website: "https://www.blueowl.com",
  },
  {
    id: "pgim",
    name: "PGIM Fixed Income",
    country: "United States",
    hq: "Newark, NJ",
    region: "Global",
    parent: "Prudential Financial",
    description:
      "Fixed income arm of Prudential Financial, with a long-running CLO management business spanning US and European deals.",
    website: "https://www.pgimfixedincome.com",
  },
  {
    id: "octagon",
    name: "Octagon Credit Investors",
    country: "United States",
    hq: "New York, NY",
    region: "US",
    description: "Specialist leveraged loan and CLO manager focused on the US broadly syndicated loan market.",
    website: "https://www.octagoncredit.com",
  },
  {
    id: "benefit-street",
    name: "Benefit Street Partners",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    parent: "Franklin Templeton",
    description:
      "Alternative credit manager owned by Franklin Templeton, combined with Alcentra's CLO platform to cover both US and European markets.",
    website: "https://www.benefitstreetpartners.com",
  },
  {
    id: "barings",
    name: "Barings",
    country: "United States",
    hq: "Charlotte, NC",
    region: "Global",
    parent: "MassMutual",
    description:
      "Global asset manager owned by MassMutual, with an established CLO platform across both US and European leveraged loan markets.",
    website: "https://www.barings.com",
  },
  {
    id: "goldentree",
    name: "GoldenTree Asset Management",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Independent credit-focused asset manager active as a frequent issuer in both US and European CLO markets.",
    website: "https://www.goldentree.com",
  },
  {
    id: "pinebridge",
    name: "PineBridge Investments",
    country: "United States",
    hq: "New York, NY",
    region: "Global",
    description: "Global asset manager with a long-standing leveraged finance and CLO management business.",
    website: "https://www.pinebridge.com",
  },
  {
    id: "cvc-credit",
    name: "CVC Credit",
    country: "United Kingdom",
    hq: "London",
    region: "Global",
    parent: "CVC Capital Partners",
    description:
      "Credit arm of CVC Capital Partners, one of the most active managers in the European CLO market with a growing US presence.",
    website: "https://www.cvc.com",
  },
];

export function managersByRegion(region: Manager["region"]) {
  return managers.filter((m) => m.region === region || m.region === "Global");
}

export const topUsManagers = managers
  .filter((m) => m.usCloRank)
  .sort((a, b) => (a.usCloRank ?? 99) - (b.usCloRank ?? 99));
