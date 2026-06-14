import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardBody, SourceTag } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { IssuanceChart } from "@/components/charts/IssuanceChart";
import { usIssuance, europeIssuance, latest, yoyGrowth, totalVolume } from "@/data/issuance";
import { forecast2026US, forecast2026Europe } from "@/data/forecasts";
import { managers } from "@/data/managers";
import { arrangers } from "@/data/arrangers";

export default function DashboardPage() {
  const usLatest = latest(usIssuance);
  const euLatest = latest(europeIssuance);
  const usGrowth = yoyGrowth(usIssuance);
  const euGrowth = yoyGrowth(europeIssuance);
  const usBase = forecast2026US.cases.find((c) => c.case === "base")!;
  const euBase = forecast2026Europe.cases.find((c) => c.case === "base")!;

  return (
    <div className="space-y-8">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-dim">CLO Market Intelligence</div>
        <h1 className="mt-1 font-display text-2xl font-semibold text-text lg:text-3xl">
          US &amp; European CLO Market Overview
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Issuance volumes, manager activity and forecasts for the collateralized loan obligation market,
          compiled from publicly reported figures with full source attribution. Both markets closed{" "}
          {usLatest.year} at record annual volumes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label={`US New-Issue Volume, ${usLatest.year}`}
          value={`$${usLatest.volume.toFixed(1)}bn`}
          delta={`${usGrowth >= 0 ? "+" : ""}${usGrowth.toFixed(1)}% YoY`}
          deltaPositive={usGrowth >= 0}
          accent="us"
          source={usLatest.source}
          sourceUrl={usLatest.sourceUrl}
          asOf={usLatest.asOf}
        />
        <StatCard
          label={`European New-Issue Volume, ${euLatest.year}`}
          value={`\u20ac${euLatest.volume.toFixed(1)}bn`}
          delta={`${euGrowth >= 0 ? "+" : ""}${euGrowth.toFixed(1)}% YoY`}
          deltaPositive={euGrowth >= 0}
          accent="europe"
          source={euLatest.source}
          sourceUrl={euLatest.sourceUrl}
          asOf={euLatest.asOf}
        />
        <StatCard
          label="2026 US Forecast (Base Case)"
          value={`$${usBase.value}bn`}
          accent="us"
          source={forecast2026US.source}
          sourceUrl={forecast2026US.sourceUrl}
          asOf={forecast2026US.asOf}
        />
        <StatCard
          label="2026 European Forecast (Base Case)"
          value={`\u20ac${euBase.value}bn`}
          accent="europe"
          source={forecast2026Europe.source}
          sourceUrl={forecast2026Europe.sourceUrl}
          asOf={forecast2026Europe.asOf}
        />
      </div>

      <Card>
        <CardHeader
          title="New-Issue Volume, 2016\u20132025"
          subtitle="US ($bn, left axis) vs Europe (\u20acbn, right axis). Lighter bars indicate an estimated figure \u2014 see Methodology & Sources."
        />
        <CardBody>
          <IssuanceChart />
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader title="10-Year Cumulative Issuance" subtitle="2016\u20132025" />
          <CardBody className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">United States</span>
              <span className="tabular text-sm font-semibold text-text">${totalVolume(usIssuance).toFixed(0)}bn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">Europe</span>
              <span className="tabular text-sm font-semibold text-text">\u20ac{totalVolume(europeIssuance).toFixed(0)}bn</span>
            </div>
            <p className="pt-2 text-xs text-text-dim">
              Cumulative totals include years marked &ldquo;estimated&rdquo; in the underlying dataset; see{" "}
              <Link href="/methodology" className="underline hover:text-text-muted">
                Methodology &amp; Sources
              </Link>
              .
            </p>
          </CardBody>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader title="Directory Coverage" subtitle="Participants tracked" />
          <CardBody className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">CLO Managers</span>
              <span className="tabular text-sm font-semibold text-text">{managers.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">Arrangers</span>
              <span className="tabular text-sm font-semibold text-text">{arrangers.length}</span>
            </div>
            <Link href="/managers" className="mt-2 inline-flex items-center gap-1 text-xs text-highlight hover:underline">
              View manager directory <ArrowRight size={12} />
            </Link>
          </CardBody>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader title="Explore" subtitle="Jump to a section" />
          <CardBody className="space-y-2">
            {[
              { href: "/issuance", label: "Issuance Analytics" },
              { href: "/forecasts", label: "Market Forecasts" },
              { href: "/markets/us", label: "US CLO Market" },
              { href: "/markets/europe", label: "European CLO Market" },
              { href: "/deals", label: "Deal Records" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-text-muted hover:bg-surface-2 hover:text-text">
                {l.label}
                <ArrowRight size={14} />
              </Link>
            ))}
          </CardBody>
        </Card>
      </div>

      <div className="rounded-lg border border-border bg-bg-sunken p-4 text-xs text-text-muted">
        Figures on this page are compiled from publicly available research and press releases (Bloomberg, S&amp;P
        Global / LCD, Deutsche Bank Research, NAIC, PitchBook | LCD, CLO Research). Where a precise public figure
        was unavailable, the underlying dataset marks the point as &ldquo;estimated&rdquo; with the basis for the
        estimate noted. See{" "}
        <Link href="/methodology" className="underline hover:text-text">
          Methodology &amp; Sources
        </Link>{" "}
        for the complete citation list.
      </div>
    </div>
  );
}
