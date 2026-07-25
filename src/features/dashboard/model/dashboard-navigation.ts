import type { DashboardSection, DashboardTab } from "./dashboard-types";

export const TAB_TO_SECTION: Record<DashboardTab, DashboardSection> = {
  Overview: "Overview",
  Analysis: "Models",
  Automations: "Automations",
  Sources: "Datasets",
};

export const SECTION_TO_TAB: Partial<Record<DashboardSection, DashboardTab>> = {
  Overview: "Overview",
  Datasets: "Sources",
  Models: "Analysis",
  Insights: "Overview",
  Automations: "Automations",
};
