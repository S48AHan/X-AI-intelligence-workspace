"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import type { DashboardSection } from "../model/dashboard-types";
import { cn } from "@/shared/lib/cn";
import { BoltIcon, DatasetsIcon, GridIcon, LogoMark, ModelsIcon, SettingsIcon, SparkIcon } from "@/shared/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
const NAV_ITEMS: Array<{ label: Exclude<DashboardSection, "Settings">; Icon: Icon }> = [
  { label: "Overview", Icon: GridIcon }, { label: "Datasets", Icon: DatasetsIcon },
  { label: "Models", Icon: ModelsIcon }, { label: "Insights", Icon: SparkIcon },
  { label: "Automations", Icon: BoltIcon },
];

function NavItem({ label, Icon, active, onClick }: { label: DashboardSection; Icon: Icon; active: boolean; onClick: () => void }) {
  return <motion.button type="button" whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }} onClick={onClick} aria-current={active ? "page" : undefined} className={cn("flex w-full items-center gap-3 rounded-[8px] px-2.5 py-2.5 text-left text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan/60", active ? "bg-surface2 text-t1" : "text-t2 hover:text-t1")}><Icon className={active ? "text-cyan" : "opacity-80"} width={18} height={18} />{label}</motion.button>;
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
      {NAV_ITEMS.map(({ label, Icon }) => <NavItem key={label} label={label} Icon={Icon} active={activeSection === label} onClick={() => onSelect(label)} />)}
      <SectionLabel>Account</SectionLabel>
      <NavItem label="Settings" Icon={SettingsIcon} active={activeSection === "Settings"} onClick={() => onSelect("Settings")} />
      <div className="mt-auto flex items-center gap-2.5 border-t border-bsubtle p-2.5"><div className="h-[30px] w-[30px] rounded-full bg-gradient-to-br from-[#334] to-[#556]" /><div><div className="text-[13px] font-medium">Sam Rivera</div><div className="text-[11px] text-t3">Data Lead</div></div></div>
    </aside>
  );
}
