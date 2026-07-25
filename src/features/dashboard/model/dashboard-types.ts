export type Trend = "up" | "down";

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  vs: string;
}

export interface InsightRow {
  insight: string;
  source: string;
  confidence: string;
  status: Status;
}

export interface SourceRow {
  source: string;
  type: string;
  records: string;
  health: Status;
}

export interface Status {
  label: string;
  color: string;
}

export interface Recommendation {
  title: string;
  sub: string;
  accent: string;
}

export interface AutomationRule {
  name: string;
  trigger: string;
  runs: string;
  on: boolean;
}

export interface ModelFeature {
  name: string;
  weight: number;
}

export type DashboardSection =
  | "Overview"
  | "Datasets"
  | "Models"
  | "Insights"
  | "Automations"
  | "Settings";

export const DASHBOARD_TIME_RANGES = ["24 hours", "7 days", "30 days", "Quarter"] as const;
export type DashboardTimeRange = (typeof DASHBOARD_TIME_RANGES)[number];
