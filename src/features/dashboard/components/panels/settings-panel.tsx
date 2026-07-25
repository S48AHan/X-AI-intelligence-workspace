import { DashboardCard } from "../ui/dashboard-card";
import { StatusIndicator } from "../ui/status-indicator";

const SETTINGS = [["Environment", "Production"], ["Default region", "US East"], ["Data retention", "90 days"], ["Alert channel", "#data-ops"]];

export function SettingsPanel() {
  return (
    <div className="flex flex-col gap-[22px]">
      <DashboardCard title="Workspace settings" meta="Acme Intelligence">
        <div className="divide-y divide-bsubtle">{SETTINGS.map(([label, value]) => <div key={label} className="flex items-center justify-between py-4 first:pt-1 last:pb-1"><span className="text-sm text-t2">{label}</span><span className="rounded-md border border-bsubtle bg-surface2 px-3 py-1.5 font-mono text-xs text-t1">{value}</span></div>)}</div>
      </DashboardCard>
      <DashboardCard title="Team access" meta="6 members"><div className="flex items-center justify-between"><div><div className="text-sm font-medium text-t1">Production workspace</div><div className="mt-1 text-xs text-t3">Members can explore data, models, and published insights.</div></div><StatusIndicator color="#34D399" label="Active" /></div></DashboardCard>
    </div>
  );
}
