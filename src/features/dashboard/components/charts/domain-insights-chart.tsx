import { createSeededRandom } from "@/shared/lib/random";

const LABELS = ["Sales", "Ops", "Risk", "Prod", "Fin", "Supt", "Mkt", "Eng"];

export function DomainInsightsChart() {
  const random = createSeededRandom(19);
  const width = 320;
  const barWidth = 24;
  const gap = (width - LABELS.length * barWidth) / (LABELS.length - 1);

  return (
    <svg width="100%" height="200" viewBox="0 0 320 200" aria-label="Insights grouped by domain">
      {[1, 2, 3].map((line) => <line key={line} x1="0" y1={line * 44} x2={width} y2={line * 44} stroke="#20242C" />)}
      {LABELS.map((label, index) => {
        const barHeight = 40 + random() * 120;
        const x = index * (barWidth + gap);
        return (
          <g key={label}>
            <rect x={x} y={170 - barHeight} width={barWidth} height={barHeight} rx="4" fill={index % 3 === 0 ? "#22D3EE" : "#2B3A44"} />
            <text x={x + barWidth / 2} y="190" fill="#6C7380" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
