import { OVERVIEW_KPIS } from "../../model/dashboard-data";
import { DomainInsightsChart } from "../charts/domain-insights-chart";
import { SignalThroughputChart } from "../charts/signal-throughput-chart";
import { ChartLegend } from "../ui/chart-legend";
import { DashboardCard } from "../ui/dashboard-card";
import { KpiGrid } from "../ui/kpi-grid";
import { RecentInsightsTable } from "./recent-insights-table";
import { RecommendationsList } from "./recommendations-list";

export function OverviewPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <KpiGrid kpis={OVERVIEW_KPIS} />
      <div className="grid grid-cols-[1.6fr_1fr] gap-4">
        <DashboardCard title="Signal throughput" legend={<ChartLegend items={[{ color: "#22D3EE", label: "Ingested" }, { color: "#A78BFA", label: "Reasoned" }]} />}><SignalThroughputChart /></DashboardCard>
        <DashboardCard title="Insights by domain" meta="7d"><DomainInsightsChart /></DashboardCard>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr] gap-4">
        <DashboardCard title="Recent insights" meta="live"><RecentInsightsTable /></DashboardCard>
        <DashboardCard title="AI recommendations"><RecommendationsList /></DashboardCard>
      </div>
    </div>
  );
}
