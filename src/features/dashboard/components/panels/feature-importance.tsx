"use client";

import { motion } from "framer-motion";
import { MODEL_FEATURES } from "../../model/dashboard-data";

export function FeatureImportance() {
  return (
    <div className="flex flex-col gap-3.5">
      {MODEL_FEATURES.map((feature) => (
        <div key={feature.name} className="flex items-center gap-3 text-[13px] text-t2">
          <span className="w-[110px]">{feature.name}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-elevated">
            <motion.i initial={{ width: 0 }} whileInView={{ width: `${feature.weight * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }} className="block h-full rounded-[3px] bg-gradient-to-r from-cyan to-violet" />
          </span>
          <span className="w-9 text-right font-mono text-xs text-t3">{feature.weight.toFixed(2).slice(1)}</span>
        </div>
      ))}
    </div>
  );
}
