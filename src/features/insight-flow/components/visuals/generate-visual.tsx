import styles from "../../insight-flow.module.css";
const CYAN = "#22D3EE";
const SPOKES: Array<[number, number, string]> = [[240,48,CYAN],[330,80,"#A78BFA"],[356,144,CYAN],[330,208,"#34D399"],[240,240,CYAN],[150,208,"#8A93A0"],[124,144,CYAN],[150,80,"#8A93A0"]];

export function GenerateVisual() {
  return <svg viewBox="0 0 480 288" fill="none" aria-label="Generated insights dispatched to connected destinations">
    {SPOKES.map(([x, y], index) => <line key={index} className={styles.draw} pathLength={1} x1="240" y1="144" x2={x} y2={y} stroke={CYAN} strokeWidth="1.4" opacity="0.55" />)}
    {SPOKES.map(([x, y, color], index) => <circle key={index} cx={x} cy={y} r="5" fill={color} />)}
    <circle className={styles.pulse} cx="240" cy="144" r="20" stroke={CYAN} strokeWidth="1.5" fill="none" /><circle className={`${styles.pulse} ${styles.delayTwo}`} cx="240" cy="144" r="20" stroke={CYAN} strokeWidth="1.5" fill="none" /><circle className={`${styles.pulse} ${styles.delayThree}`} cx="240" cy="144" r="20" stroke={CYAN} strokeWidth="1.5" fill="none" /><circle cx="240" cy="144" r="10" fill={CYAN} />
    <text x="196" y="278" fill={CYAN} fontSize="10" fontFamily="var(--font-mono)">DISPATCHED</text>
  </svg>;
}
