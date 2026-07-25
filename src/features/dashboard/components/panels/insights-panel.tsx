import { INSIGHT_KPIS } from "../../model/dashboard-data";
import { DashboardCard } from "../ui/dashboard-card";
import { KpiGrid } from "../ui/kpi-grid";
import { RecentInsightsTable } from "./recent-insights-table";
import { RecommendationsList } from "./recommendations-list";

export function InsightsPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <KpiGrid kpis={INSIGHT_KPIS} />
      <div className="grid grid-cols-[1.45fr_1fr] gap-4">
        <DashboardCard title="Intelligence feed" meta="ranked by confidence">
          <RecentInsightsTable />
        </DashboardCard>
        <DashboardCard title="Recommended actions" meta="AI generated">
          <RecommendationsList />
        </DashboardCard>
      </div>
    </div>
  );
}
