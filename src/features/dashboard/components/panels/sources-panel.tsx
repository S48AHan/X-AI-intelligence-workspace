import { CONNECTED_SOURCES, SOURCE_KPIS } from "../../model/dashboard-data";
import { DashboardCard } from "../ui/dashboard-card";
import { KpiGrid } from "../ui/kpi-grid";
import { StatusIndicator } from "../ui/status-indicator";

export function SourcesPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <KpiGrid kpis={SOURCE_KPIS} />
      <DashboardCard title="Connected sources" meta="live">
        <table className="w-full border-collapse">
          <thead><tr>{["Source", "Type", "Records", "Health"].map((heading) => <th key={heading} className="pb-3 text-left font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-t3">{heading}</th>)}</tr></thead>
          <tbody>{CONNECTED_SOURCES.map((source) => <tr key={source.source} className="text-[13px] text-t2"><td className="border-t border-bsubtle py-3 font-medium text-t1">{source.source}</td><td className="border-t border-bsubtle py-3">{source.type}</td><td className="border-t border-bsubtle py-3">{source.records}</td><td className="border-t border-bsubtle py-3"><StatusIndicator {...source.health} /></td></tr>)}</tbody>
        </table>
      </DashboardCard>
    </div>
  );
}
