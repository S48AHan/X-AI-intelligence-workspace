"use client";

import { motion } from "framer-motion";
import {
  DASHBOARD_TIME_RANGES,
  type DashboardTimeRange,
} from "../model/dashboard-types";

export function DashboardTimeRangeFilter({
  activeRange,
  onSelect,
}: {
  activeRange: DashboardTimeRange;
  onSelect: (range: DashboardTimeRange) => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-bsubtle">
      <span className="pb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-t3">
        Time range
      </span>
      <div className="flex gap-6" role="tablist" aria-label="Dashboard time range">
        {DASHBOARD_TIME_RANGES.map((range) => (
          <button key={range} type="button" role="tab" aria-selected={activeRange === range} onClick={() => onSelect(range)} className={`relative pb-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan/60 ${activeRange === range ? "font-semibold text-t1" : "font-medium text-t3 hover:text-t2"}`}>
            {range}
            {activeRange === range && <motion.span layoutId="range-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-cyan" transition={{ type: "spring", stiffness: 500, damping: 36 }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
