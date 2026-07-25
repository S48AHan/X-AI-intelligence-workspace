import type {
  AutomationRule,
  InsightRow,
  Kpi,
  ModelFeature,
  Recommendation,
  SourceRow,
} from "./dashboard-types";

export const OVERVIEW_KPIS: Kpi[] = [
  { label: "Active pipelines", value: "1,284", delta: "12.4%", trend: "up", vs: "vs last week" },
  { label: "Signals / min", value: "48.2K", delta: "8.1%", trend: "up", vs: "vs last week" },
  { label: "Insights surfaced", value: "327", delta: "22.0%", trend: "up", vs: "vs last week" },
  { label: "Model latency", value: "94ms", delta: "3.2%", trend: "down", vs: "vs last week" },
];

export const RECENT_INSIGHTS: InsightRow[] = [
  { insight: "Churn risk spike in EU tier", source: "Stripe · CRM", confidence: "96%", status: { label: "Resolved", color: "#34D399" } },
  { insight: "Anomalous API latency, us-east", source: "Datadog", confidence: "91%", status: { label: "Review", color: "#FBBF24" } },
  { insight: "Demand shift — SKU-4471", source: "Warehouse", confidence: "88%", status: { label: "Active", color: "#22D3EE" } },
  { insight: "Sentiment drop, support queue", source: "Zendesk", confidence: "84%", status: { label: "Resolved", color: "#34D399" } },
];

export const RECOMMENDATIONS: Recommendation[] = [
  { title: "Route EU tier to retention flow", sub: "Projected +$142K ARR saved", accent: "#22D3EE" },
  { title: "Auto-scale us-east ingest", sub: "Cuts latency to ~60ms", accent: "#A78BFA" },
  { title: "Rebalance SKU-4471 forecast", sub: "Confidence 88% · 1-click apply", accent: "#34D399" },
];

export const ANALYSIS_KPIS: Kpi[] = [
  { label: "Model accuracy", value: "94.6%", delta: "1.2%", trend: "up", vs: "30-day" },
  { label: "Prediction drift", value: "0.8%", delta: "0.3%", trend: "down", vs: "within bound" },
  { label: "Signals scored", value: "2.1M", delta: "15%", trend: "up", vs: "vs last week" },
  { label: "Avg confidence", value: "0.91", delta: "2.0%", trend: "up", vs: "vs last week" },
];

export const MODEL_FEATURES: ModelFeature[] = [
  { name: "usage_trend", weight: 0.92 },
  { name: "tenure", weight: 0.78 },
  { name: "support_load", weight: 0.64 },
  { name: "nps_delta", weight: 0.51 },
  { name: "region", weight: 0.37 },
];

export const AUTOMATION_KPIS: Kpi[] = [
  { label: "Active automations", value: "18", delta: "3", trend: "up", vs: "this month" },
  { label: "Runs / day", value: "6,410", delta: "9.4%", trend: "up", vs: "vs last week" },
  { label: "Success rate", value: "99.2%", delta: "0.4%", trend: "up", vs: "30-day" },
  { label: "Time saved", value: "312h", delta: "22%", trend: "up", vs: "this month" },
];

export const AUTOMATION_RULES: AutomationRule[] = [
  { name: "Churn → retention flow", trigger: "on risk_score > 0.80", runs: "1,204 runs", on: true },
  { name: "Auto-scale ingest", trigger: "on latency > 120ms", runs: "88 runs", on: true },
  { name: "Forecast rebalance", trigger: "daily · 06:00 UTC", runs: "paused", on: false },
  { name: "Anomaly alert → Slack", trigger: "on anomaly detected", runs: "37 runs", on: true },
];

export const SOURCE_KPIS: Kpi[] = [
  { label: "Connected sources", value: "1,284", delta: "24", trend: "up", vs: "this week" },
  { label: "Records / min", value: "48.2K", delta: "8.1%", trend: "up", vs: "vs last week" },
  { label: "Healthy", value: "98.6%", delta: "0.5%", trend: "up", vs: "uptime" },
  { label: "Schema drift", value: "3", delta: "2", trend: "down", vs: "flagged" },
];

export const CONNECTED_SOURCES: SourceRow[] = [
  { source: "Stripe", type: "Payments", records: "4.2M", health: { label: "Healthy", color: "#34D399" } },
  { source: "Snowflake", type: "Warehouse", records: "1.2B", health: { label: "Healthy", color: "#34D399" } },
  { source: "Datadog", type: "Observability", records: "88M", health: { label: "Healthy", color: "#34D399" } },
  { source: "Kafka · events", type: "Stream", records: "12M/s", health: { label: "Healthy", color: "#34D399" } },
  { source: "Zendesk", type: "Support", records: "640K", health: { label: "Degraded", color: "#FBBF24" } },
];
