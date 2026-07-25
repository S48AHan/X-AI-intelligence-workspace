import styles from "../../insight-flow.module.css";
const CYAN = "#22D3EE";

export function AnalyzeVisual() {
  return <svg viewBox="0 0 480 288" fill="none" aria-label="AI reasoning across connected signals">
    {[112, 78, 44].map((radius, index) => <circle key={radius} className={styles.draw} pathLength={1} cx="240" cy="144" r={radius} stroke={CYAN} strokeWidth={index === 2 ? 1.3 : 1.2} opacity={[0.22, 0.4, 0.7][index]} />)}
    <g className={styles.spin}><line x1="240" y1="144" x2="240" y2="32" stroke={CYAN} strokeWidth="1.4" /><circle cx="240" cy="32" r="4" fill={CYAN} /></g>
    <circle cx="352" cy="144" r="3.5" fill={CYAN} /><circle cx="240" cy="66" r="3.5" fill="#A78BFA" /><circle cx="162" cy="144" r="3.5" fill={CYAN} /><circle cx="285" cy="200" r="3" fill="#8A93A0" /><circle cx="240" cy="144" r="8" fill={CYAN} /><circle className={styles.pulse} cx="240" cy="144" r="44" stroke={CYAN} strokeWidth="1.4" fill="none" />
    <text x="196" y="264" fill={CYAN} fontSize="10" fontFamily="var(--font-mono)">REASONING</text>
  </svg>;
}
