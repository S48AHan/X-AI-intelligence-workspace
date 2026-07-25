import { AUTOMATION_KPIS, AUTOMATION_RULES } from "../../model/dashboard-data";
import { DashboardCard } from "../ui/dashboard-card";
import { KpiGrid } from "../ui/kpi-grid";
import { AutomationRuleRow } from "./automation-rule-row";

export function AutomationsPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <KpiGrid kpis={AUTOMATION_KPIS} />
      <DashboardCard title="Automation rules" meta="click a row to toggle">
        <div>{AUTOMATION_RULES.map((rule) => <AutomationRuleRow key={rule.name} rule={rule} />)}</div>
      </DashboardCard>
    </div>
  );
}
