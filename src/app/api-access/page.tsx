import { Card, CardHeader, CardBody } from "@/components/ui/Card";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/issuances",
    description: "Annual new-issue volume series for both regions, with confidence ratings and source citations.",
    example: `{
  "region": "US",
  "data": [
    { "year": 2024, "volume": 201.2, "unit": "USD_BN", "confidence": "reported",
      "source": "Bloomberg News", "asOf": "2025-12-17" },
    { "year": 2025, "volume": 201.5, "unit": "USD_BN", "confidence": "reported",
      "source": "Bloomberg News", "asOf": "2025-12-17" }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/forecasts/{year}",
    description: "Bear/base/bull issuance forecast for a given year and region, with the bank estimates behind it.",
    example: `{
  "region": "Europe",
  "year": 2026,
  "unit": "EUR_BN",
  "cases": { "bear": 50, "base": 58, "bull": 65 },
  "bankEstimates": [
    { "bank": "Deutsche Bank", "value": "\\u20ac65bn gross / \\u20ac45bn net" },
    { "bank": "BNP Paribas", "value": "\\u2248\\u20ac60bn" }
  ],
  "source": "PitchBook | LCD, \\"2026 European CLO Outlook\\""
}`,
  },
  {
    method: "GET",
    path: "/api/v1/managers",
    description: "CLO manager directory, including the sourced top-10 US AUM ranking.",
    example: `{
  "id": "blackstone",
  "name": "Blackstone Credit & Insurance",
  "country": "United States",
  "hq": "New York, NY",
  "region": "Global",
  "usCloRank": 1
}`,
  },
  {
    method: "GET",
    path: "/api/v1/arrangers",
    description: "Arranger / bookrunner directory.",
    example: `{
  "id": "jpmorgan",
  "name": "J.P. Morgan",
  "region": "Global",
  "hq": "New York, NY"
}`,
  },
  {
    method: "GET",
    path: "/api/v1/trustees",
    description: "Trustee directory.",
    example: `{ "id": "us-bank", "name": "U.S. Bank Trust Company", "region": "US" }`,
  },
  {
    method: "GET",
    path: "/api/v1/administrators",
    description: "Administrator directory, including legacy brand mappings (e.g. Intertrust \u2192 CSC).",
    example: `{ "id": "csc", "name": "CSC", "legacyBrand": "Intertrust", "region": "Global" }`,
  },
  {
    method: "GET",
    path: "/api/v1/deals",
    description: "Deal-level records. Returns real, named deals and clearly-flagged illustrative examples pending a licensed data feed.",
    example: `{
  "id": "arini-eur-clo-vii",
  "name": "Arini European CLO VII",
  "region": "Europe",
  "issueDate": "2025-11",
  "dealSize": 615.7,
  "currency": "EUR",
  "isIllustrative": false,
  "source": "Alternative Credit Investor"
}`,
  },
];

export default function ApiAccessPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">Resources</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">API Access</h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          This static build does not run a live API. The endpoints below document the REST interface envisioned
          for Phase 2, with example responses drawn from this platform&rsquo;s real, sourced data \u2014 ready to
          back with a database and the ETL pipeline described in the original specification.
        </p>
      </div>

      <div className="space-y-4">
        {endpoints.map((e) => (
          <Card key={e.path}>
            <CardHeader
              title={e.path}
              subtitle={e.description}
              action={
                <span className="rounded-[3px] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase" style={{ color: "var(--color-positive)", border: "1px solid var(--color-positive)" }}>
                  {e.method}
                </span>
              }
            />
            <CardBody>
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wide text-text-dim">Example response</div>
              <pre className="tabular overflow-x-auto rounded-md bg-bg-sunken p-3 text-xs text-text-muted">
                <code>{e.example}</code>
              </pre>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
