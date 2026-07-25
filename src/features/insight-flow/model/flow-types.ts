export type FlowVisual = "ingest" | "analyze" | "generate";

export interface FlowStage {
  number: string;
  title: string;
  description: string;
  hint: { value: string; label: string };
  visual: FlowVisual;
}
