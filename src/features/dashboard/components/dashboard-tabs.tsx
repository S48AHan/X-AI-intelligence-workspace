"use client";

import { motion } from "framer-motion";
import { DASHBOARD_TABS, type DashboardTab } from "../model/dashboard-types";

export function DashboardTabs({ activeTab, onSelect }: { activeTab?: DashboardTab; onSelect: (tab: DashboardTab) => void }) {
  return (
    <div className="flex gap-6 border-b border-bsubtle" role="tablist" aria-label="Workspace views">
      {DASHBOARD_TABS.map((tab) => (
        <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => onSelect(tab)} className={`relative pb-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan/60 ${activeTab === tab ? "font-semibold text-t1" : "font-medium text-t3 hover:text-t2"}`}>
          {tab}
          {activeTab === tab && <motion.span layoutId="tab-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-cyan" transition={{ type: "spring", stiffness: 500, damping: 36 }} />}
        </button>
      ))}
    </div>
  );
}
