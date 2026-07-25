import { ANALYSIS_KPIS } from "../../model/dashboard-data";
import { ModelPerformanceChart } from "../charts/model-performance-chart";
import { ChartLegend } from "../ui/chart-legend";
import { DashboardCard } from "../ui/dashboard-card";
import { KpiGrid } from "../ui/kpi-grid";
import { FeatureImportance } from "./feature-importance";

export function AnalysisPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <KpiGrid kpis={ANALYSIS_KPIS} />
      <div className="grid grid-cols-[1.6fr_1fr] gap-4">
        <DashboardCard title="Model performance · 30d" legend={<ChartLegend items={[{ color: "#22D3EE", label: "Precision" }, { color: "#A78BFA", label: "Recall" }]} />}><ModelPerformanceChart /></DashboardCard>
        <DashboardCard title="Feature importance" meta="top 5"><FeatureImportance /></DashboardCard>
      </div>
    </div>
  );
}
