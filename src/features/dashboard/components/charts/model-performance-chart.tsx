export function ModelPerformanceChart() {
  return (
    <svg width="100%" height="200" viewBox="0 0 640 200" preserveAspectRatio="none" aria-label="Model precision and recall over 30 days">
      {[50, 100, 150].map((y) => <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#20242C" />)}
      <defs><linearGradient id="performance-area-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22D3EE" stopOpacity="0.26" /><stop offset="1" stopColor="#22D3EE" stopOpacity="0" /></linearGradient></defs>
      <path d="M0 120 C 90 96, 150 70, 240 74 S 420 52, 520 44 S 610 40, 640 36 L 640 200 L 0 200 Z" fill="url(#performance-area-gradient)" />
      <path d="M0 150 C 100 140, 180 128, 260 120 S 440 104, 540 96 S 620 92, 640 90" stroke="#A78BFA" strokeWidth="2" fill="none" opacity="0.85" />
      <path d="M0 120 C 90 96, 150 70, 240 74 S 420 52, 520 44 S 610 40, 640 36" stroke="#22D3EE" strokeWidth="2.2" fill="none" />
    </svg>
  );
}
