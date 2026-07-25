"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { DashboardSection } from "../model/dashboard-types";
import { AnalysisPanel } from "./panels/analysis-panel";
import { AutomationsPanel } from "./panels/automations-panel";
import { OverviewPanel } from "./panels/overview-panel";
import { SettingsPanel } from "./panels/settings-panel";
import { SourcesPanel } from "./panels/sources-panel";

const PANELS: Record<DashboardSection, () => React.ReactElement> = {
  Overview: OverviewPanel, Datasets: SourcesPanel, Models: AnalysisPanel,
  Insights: OverviewPanel, Automations: AutomationsPanel, Settings: SettingsPanel,
};

export function DashboardPanel({ section }: { section: DashboardSection }) {
  const Panel = PANELS[section];
  return (
    <AnimatePresence mode="wait">
      <motion.div key={section} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}>
        <Panel />
      </motion.div>
    </AnimatePresence>
  );
}
