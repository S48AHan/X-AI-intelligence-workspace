import styles from "../../insight-flow.module.css";
const CYAN = "#22D3EE";

export function IngestVisual() {
  return <svg viewBox="0 0 480 288" fill="none" aria-label="Multiple data sources merging into one unified source">
    {[64, 116, 168, 220].map((y) => <line key={y} className={styles.draw} pathLength={1} x1="70" y1={y} x2="300" y2="144" stroke={CYAN} strokeWidth="1.4" opacity="0.5" />)}
    <line className={styles.flowLine} x1="70" y1="64" x2="300" y2="144" stroke={CYAN} strokeWidth="1.6" /><line className={styles.flowLine} x1="70" y1="168" x2="300" y2="144" stroke={CYAN} strokeWidth="1.6" />
    <line className={styles.draw} pathLength={1} x1="314" y1="144" x2="430" y2="144" stroke={CYAN} strokeWidth="1.6" />
    {[64, 116, 168, 220].map((y, index) => <circle key={y} cx="70" cy={y} r="5" fill={index === 1 ? CYAN : "#8A93A0"} />)}
    <circle className={styles.draw} pathLength={1} cx="300" cy="144" r="16" stroke={CYAN} strokeWidth="1.6" /><circle cx="300" cy="144" r="5" fill={CYAN} /><circle cx="430" cy="144" r="7" fill="#0F1115" stroke={CYAN} strokeWidth="1.6" /><circle cx="430" cy="144" r="2.4" fill={CYAN} />
    <text x="52" y="252" fill="#6C7380" fontSize="10" fontFamily="var(--font-mono)">SOURCES</text><text x="270" y="252" fill={CYAN} fontSize="10" fontFamily="var(--font-mono)">UNIFIED</text>
  </svg>;
}
