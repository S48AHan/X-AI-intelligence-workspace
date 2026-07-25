"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { AutomationRule } from "../../model/dashboard-types";
import { cn } from "@/shared/lib/cn";
import { BoltIcon } from "@/shared/ui/icons";
import { IconChip } from "../ui/icon-chip";

export function AutomationRuleRow({ rule }: { rule: AutomationRule }) {
  const [isEnabled, setIsEnabled] = useState(rule.on);
  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isEnabled}
      whileHover={{ backgroundColor: "rgba(21,24,30,0.6)" }}
      onClick={() => setIsEnabled((value) => !value)}
      className="flex w-full items-center justify-between rounded-md px-2 py-3.5 text-left"
    >
      <span className="flex items-center gap-3">
        <IconChip><BoltIcon width={16} height={16} className="text-cyan" /></IconChip>
        <span><span className="block text-sm font-medium text-t1">{rule.name}</span><span className="mt-0.5 block font-mono text-xs text-t3">{rule.trigger}</span></span>
      </span>
      <span className="flex items-center gap-4">
        <span className="font-mono text-xs text-t3">{rule.runs}</span>
        <span className={cn("flex h-[22px] w-[38px] items-center rounded-full p-[3px] transition-colors", isEnabled ? "justify-end bg-cyan" : "justify-start bg-bdefault")}>
          <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 32 }} className="block h-4 w-4 rounded-full bg-white" />
        </span>
      </span>
    </motion.button>
  );
}
