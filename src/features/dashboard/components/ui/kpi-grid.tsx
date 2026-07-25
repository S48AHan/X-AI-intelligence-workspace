"use client";

import { motion } from "framer-motion";
import type { Kpi, Trend } from "../../model/dashboard-types";
import { cn } from "@/shared/lib/cn";

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function TrendPill({ trend, delta }: { trend: Trend; delta: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium", trend === "up" ? "bg-green/[0.12] text-green" : "bg-red/[0.12] text-red")}>
      {trend === "up" ? "▲" : "▼"} {delta}
    </span>
  );
}

export function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <motion.div variants={{ show: { transition: { staggerChildren: 0.07 } } }} initial="hidden" animate="show" className="grid grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <motion.div key={kpi.label} variants={tileVariants} whileHover={{ y: -3, borderColor: "#2b303a" }} className="flex flex-col gap-3 rounded-md border border-bsubtle bg-surface2 px-5 py-[18px]">
          <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-t3">{kpi.label}</div>
          <div className="text-[32px] font-semibold leading-[38px] tracking-[-0.01em]">{kpi.value}</div>
          <div className="flex items-center gap-2">
            <TrendPill trend={kpi.trend} delta={kpi.delta} />
            <span className="text-xs text-t3">{kpi.vs}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
