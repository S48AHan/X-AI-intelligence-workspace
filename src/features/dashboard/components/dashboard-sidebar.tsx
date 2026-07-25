"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import type { DashboardSection } from "../model/dashboard-types";
import { cn } from "@/shared/lib/cn";
import { BoltIcon, DatasetsIcon, GridIcon, LogoMark, ModelsIcon, SettingsIcon, SparkIcon } from "@/shared/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
const NAV_ITEMS: Array<{
  section: Exclude<DashboardSection, "Settings">;
  label: string;
  description: string;
  Icon: Icon;
}> = [
  { section: "Overview", label: "Command center", description: "Workspace health", Icon: GridIcon },
  { section: "Datasets", label: "Data sources", description: "Connections and schemas", Icon: DatasetsIcon },
  { section: "Models", label: "AI models", description: "Quality and performance", Icon: ModelsIcon },
  { section: "Insights", label: "Insight feed", description: "Findings and actions", Icon: SparkIcon },
  { section: "Automations", label: "Workflows", description: "Rules and execution", Icon: BoltIcon },
];

function NavItem({ label, description, Icon, active, onClick }: { label: string; description?: string; Icon: Icon; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-[10px] px-2.5 py-2.5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan/60",
        active ? "bg-surface2 text-t1" : "text-t2 hover:bg-surface2/60 hover:text-t1",
      )}
    >
      {active && <motion.span layoutId="sidebar-active-rail" className="absolute -left-1 h-7 w-0.5 rounded-full bg-cyan shadow-[0_0_10px_var(--color-cyan)]" />}
      <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg border transition-colors", active ? "border-cyan/30 bg-cyan/10 text-cyan" : "border-bsubtle bg-elevated text-t3 group-hover:text-t2")}>
        <Icon width={17} height={17} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-medium">{label}</span>
        {description && <span className="mt-0.5 block truncate text-[10px] font-normal text-t3">{description}</span>}
      </span>
    </motion.button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="px-2.5 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-t3">{children}</div>;
}

export function DashboardSidebar({ activeSection, onSelect }: { activeSection: DashboardSection; onSelect: (section: DashboardSection) => void }) {
  return (
    <aside className="flex min-h-[620px] flex-col gap-1.5 border-r border-bsubtle bg-surface p-4">
      <div className="flex items-center gap-2.5 px-2.5 pb-4 pt-2 font-semibold"><LogoMark size={18} className="text-cyan" />X-AI</div>
      <div className="mb-3 flex items-center gap-2.5 rounded-[10px] border border-bsubtle bg-surface2 p-2.5"><div className="h-[26px] w-[26px] rounded-[7px] bg-gradient-to-br from-cyan to-violet" /><div><div className="text-[13px] font-semibold">Acme Intelligence</div><div className="text-[11px] text-t3">Production · 6 members</div></div></div>
      <SectionLabel>Workspace</SectionLabel>
      {NAV_ITEMS.map(({ section, label, description, Icon }) => <NavItem key={section} label={label} description={description} Icon={Icon} active={activeSection === section} onClick={() => onSelect(section)} />)}
      <SectionLabel>Account</SectionLabel>
      <NavItem label="Settings" description="Team and workspace" Icon={SettingsIcon} active={activeSection === "Settings"} onClick={() => onSelect("Settings")} />
      <div className="mt-auto flex items-center gap-2.5 border-t border-bsubtle p-2.5"><div className="h-[30px] w-[30px] rounded-full bg-gradient-to-br from-[#334] to-[#556]" /><div><div className="text-[13px] font-medium">Saber Ahmed</div><div className="text-[11px] text-t3">Data Lead</div></div></div>
    </aside>
  );
}
