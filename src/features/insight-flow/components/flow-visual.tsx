import type { FlowVisual as FlowVisualName } from "../model/flow-types";
import { AnalyzeVisual } from "./visuals/analyze-visual";
import { GenerateVisual } from "./visuals/generate-visual";
import { IngestVisual } from "./visuals/ingest-visual";

export function FlowVisual({ visual }: { visual: FlowVisualName }) {
  if (visual === "ingest") return <IngestVisual />;
  if (visual === "analyze") return <AnalyzeVisual />;
  return <GenerateVisual />;
}
