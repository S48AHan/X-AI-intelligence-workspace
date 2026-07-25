"use client";

import { motion } from "framer-motion";
import { RECOMMENDATIONS } from "../../model/dashboard-data";
import { BoltIcon, CheckIcon, SparkIcon } from "@/shared/ui/icons";
import { IconChip } from "../ui/icon-chip";

const icons = [SparkIcon, BoltIcon, CheckIcon];

export function RecommendationsList() {
  return (
    <div className="flex flex-col gap-3.5">
      {RECOMMENDATIONS.map((recommendation, index) => {
        const Icon = icons[index];
        return (
          <motion.div key={recommendation.title} whileHover={{ x: 3 }} className="flex cursor-pointer gap-3">
            <IconChip><Icon width={16} height={16} style={{ color: recommendation.accent }} /></IconChip>
            <div><div className="text-[13px] font-medium leading-[18px] text-t1">{recommendation.title}</div><div className="mt-0.5 text-xs text-t3">{recommendation.sub}</div></div>
          </motion.div>
        );
      })}
    </div>
  );
}
