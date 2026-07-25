import { RECENT_INSIGHTS } from "../../model/dashboard-data";
import { StatusIndicator } from "../ui/status-indicator";

export function RecentInsightsTable() {
  return (
    <table className="w-full border-collapse">
      <thead><tr>{["Insight", "Source", "Confidence", "Status"].map((heading) => <th key={heading} className="pb-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-t3">{heading}</th>)}</tr></thead>
      <tbody>
        {RECENT_INSIGHTS.map((row) => (
          <tr key={row.insight} className="text-[13px] text-t2">
            <td className="border-t border-bsubtle py-3 font-medium text-t1">{row.insight}</td>
            <td className="border-t border-bsubtle py-3">{row.source}</td>
            <td className="border-t border-bsubtle py-3">{row.confidence}</td>
            <td className="border-t border-bsubtle py-3"><StatusIndicator {...row.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
