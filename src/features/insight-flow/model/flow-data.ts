import type { FlowStage } from "./flow-types";

export const FLOW_STAGES: FlowStage[] = [
  { number: "01 / INGEST", title: "Ingest data", description: "Every source, every format — APIs, warehouses, event streams, and documents — collapses into one live substrate. Nothing to normalize by hand.", hint: { value: "1,284", label: "sources connected" }, visual: "ingest" },
  { number: "02 / ANALYZE", title: "Analyze with AI", description: "Models reason over the structure, detect the patterns humans miss, and surface what actually matters — continuously, in real time.", hint: { value: "live", label: "reasoning" }, visual: "analyze" },
  { number: "03 / GENERATE", title: "Generate insight", description: "Decisions, alerts, and automations arrive where your team already works — with the full reasoning trail attached to every call.", hint: { value: "automations", label: "shipped" }, visual: "generate" },
];
