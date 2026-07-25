export const GRAPH_NODE_DEFINITIONS: Array<[string, number]> = [
  ["Signals",0],["Sources",0],["Streams",0],["Documents",0],["Pipeline",0],["Embeddings",1],["Vector DB",1],["Features",1],["LLM",1],["RAG",1],["Agents",1],["Fine-tune",1],["Guardrails",1],["Inference",1],["Reasoning",3],["Knowledge Graph",3],["Insights",2],["Automations",2],["Alerts",2],["Decisions",2],["Anomaly",2],["Forecast",2],
];

export const GRAPH_NODE_DESCRIPTIONS: Record<string, string> = {
  Signals: "Individual events and measurements entering the workspace.",
  Sources: "Connected systems that provide business data.",
  Streams: "Continuous real-time data flowing into X-AI.",
  Documents: "Unstructured files converted into searchable context.",
  Pipeline: "Validates and prepares incoming data for analysis.",
  Embeddings: "Numeric representations that capture semantic meaning.",
  "Vector DB": "Semantic memory used to retrieve related information.",
  Features: "Prepared signals used by models and reasoning systems.",
  LLM: "The language model that interprets context and intent.",
  RAG: "Grounds AI responses in relevant, trusted information.",
  Agents: "AI workers that plan and complete multi-step tasks.",
  "Fine-tune": "Adapts a model to specialized business knowledge.",
  Guardrails: "Policies that keep AI behavior safe and controlled.",
  Inference: "Generates predictions from current business data.",
  Reasoning: "Connects evidence into a clear explanation.",
  "Knowledge Graph": "Maps entities, context, and their relationships.",
  Insights: "Important findings presented with evidence and confidence.",
  Automations: "Repeatable actions triggered by approved intelligence.",
  Alerts: "Time-sensitive notifications when conditions change.",
  Decisions: "Recommended actions supported by available evidence.",
  Anomaly: "An unusual pattern that may require investigation.",
  Forecast: "A forward-looking estimate based on current signals.",
};

export const GRAPH_EDGES: Array<[number, number]> = [
  [0,4],[1,4],[2,4],[3,4],[4,5],[0,5],[5,6],[6,15],[3,6],[5,7],[6,7],[7,9],[9,6],[7,10],[7,11],[7,12],[7,14],[14,16],[16,17],[16,18],[16,19],[16,20],[16,21],[10,17],[12,19],[20,18],[21,19],[14,15],[15,7],[15,10],[15,9],[15,13],[13,5],[13,16],[13,14],[13,6],[17,19],[9,15],
];

export const GRAPH_COLORS = ["#22D3EE", "#A78BFA", "#34D399", "#8FE9FF"];

export const GRAPH_LAYERS = [
  { label: "Raw data", group: 0, x: -52, y: 40, color: "#22D3EE" },
  { label: "AI systems", group: 1, x: -16, y: 54, color: "#A78BFA" },
  { label: "Reasoning", group: 3, x: 18, y: 22, color: "#8FE9FF" },
  { label: "Outcomes", group: 2, x: 52, y: 46, color: "#34D399" },
] as const;
