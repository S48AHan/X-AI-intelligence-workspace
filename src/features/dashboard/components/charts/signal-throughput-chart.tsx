import { createSeededRandom } from "@/shared/lib/random";
import { createSmoothPath } from "./chart-path";

export function SignalThroughputChart() {
  const random = createSeededRandom(11);
  const width = 640;
  const height = 200;
  const ingested: number[][] = [];
  const reasoned: number[][] = [];

  for (let index = 0; index < 24; index += 1) {
    const x = (index / 23) * width;
    ingested.push([x, 120 - Math.sin(index / 2.5) * 30 - random() * 30]);
    reasoned.push([x, 160 - Math.sin(index / 2.5 + 1) * 22 - random() * 18]);
  }

  const area = `${createSmoothPath(ingested)} L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg width="100%" height="200" viewBox="0 0 640 200" preserveAspectRatio="none" aria-label="Signal throughput chart">
      <defs><linearGradient id="signal-area-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22D3EE" stopOpacity="0.28" /><stop offset="1" stopColor="#22D3EE" stopOpacity="0" /></linearGradient></defs>
      {[1, 2, 3].map((line) => <line key={line} x1="0" y1={line * 50} x2={width} y2={line * 50} stroke="#20242C" />)}
      <path d={area} fill="url(#signal-area-gradient)" />
      <path d={createSmoothPath(reasoned)} stroke="#A78BFA" strokeWidth="2" fill="none" opacity="0.85" />
      <path d={createSmoothPath(ingested)} stroke="#22D3EE" strokeWidth="2.2" fill="none" />
    </svg>
  );
}
