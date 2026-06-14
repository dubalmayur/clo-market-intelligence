import { latest, usIssuance, europeIssuance } from "@/data/issuance";
import { forecast2026US, forecast2026Europe } from "@/data/forecasts";

interface Tick {
  label: string;
  value: string;
  note: string;
}

function buildTicks(): Tick[] {
  const usLatest = latest(usIssuance);
  const euLatest = latest(europeIssuance);
  const usBase = forecast2026US.cases.find((c) => c.case === "base");
  const euBase = forecast2026Europe.cases.find((c) => c.case === "base");

  return [
    { label: `US CLO Issuance ${usLatest.year}`, value: `$${usLatest.volume.toFixed(1)}bn`, note: "Record \u00b7 Bloomberg" },
    { label: `EU CLO Issuance ${euLatest.year}`, value: `\u20ac${euLatest.volume.toFixed(1)}bn`, note: "Record \u00b7 Deutsche Bank" },
    { label: "Global CLO AUM", value: "\u2248$1.5tn", note: "Sept 2025 \u00b7 CLO Research" },
    { label: "US BSL CLO Market", value: "\u2248$993bn", note: "Dec 2025 \u00b7 CLO Research" },
    { label: "2026 US Forecast (Base)", value: `$${usBase?.value}bn`, note: "PitchBook | LCD" },
    { label: "2026 EU Forecast (Base)", value: `\u20ac${euBase?.value}bn`, note: "PitchBook | LCD" },
  ];
}

function TickItem({ tick }: { tick: Tick }) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap px-5 py-2 text-xs">
      <span className="text-text-dim">{tick.label}</span>
      <span className="tabular font-semibold text-text">{tick.value}</span>
      <span className="font-mono text-[10px] text-text-dim">{tick.note}</span>
    </div>
  );
}

export function TickerStrip() {
  const ticks = buildTicks();
  const doubled = [...ticks, ...ticks];

  return (
    <div className="overflow-hidden border-b border-border bg-bg-sunken">
      <div className="ticker-track flex w-max items-center divide-x divide-border">
        {doubled.map((tick, i) => (
          <TickItem key={i} tick={tick} />
        ))}
      </div>
      <style>{`
        .ticker-track {
          animation: ticker-scroll 60s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
