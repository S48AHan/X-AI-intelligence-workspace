"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  type DashboardSection,
  type DashboardTimeRange,
} from "../model/dashboard-types";
import { DASHBOARD_SECTION_LABELS } from "../model/dashboard-sections";
import { DashboardHeader } from "./dashboard-header";
import { DashboardPanel } from "./dashboard-panel";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardTimeRangeFilter } from "./dashboard-time-range";

export function DashboardShell() {
  const [section, setSection] = useState<DashboardSection>("Overview");
  const [timeRange, setTimeRange] = useState<DashboardTimeRange>("7 days");
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }} className="overflow-hidden rounded-xl border border-bdefault bg-surface shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex h-11 items-center gap-2 border-b border-bsubtle bg-surface2 px-4"><span className="h-[11px] w-[11px] rounded-full bg-red" /><span className="h-[11px] w-[11px] rounded-full bg-amber" /><span className="h-[11px] w-[11px] rounded-full bg-green" /><span className="ml-4 font-mono text-xs text-t3">app.X-AI.dev/workspace/overview</span></div>
      <div className="grid grid-cols-[236px_1fr]">
        <DashboardSidebar activeSection={section} onSelect={setSection} />
        <div className="flex flex-col gap-[22px] p-6 pt-6">
          <DashboardHeader section={DASHBOARD_SECTION_LABELS[section]} range={section === "Settings" ? undefined : timeRange} />
          {section !== "Settings" && (
            <DashboardTimeRangeFilter activeRange={timeRange} onSelect={setTimeRange} />
          )}
          <DashboardPanel section={section} range={timeRange} />
        </div>
      </div>
    </motion.div>
  );
}
