export const GRAPH_NODE_DEFINITIONS: Array<[string, number]> = [
  ["Signals",0],["Sources",0],["Streams",0],["Documents",0],["Pipeline",0],["Embeddings",1],["Vector DB",1],["Features",1],["LLM",1],["RAG",1],["Agents",1],["Fine-tune",1],["Guardrails",1],["Inference",1],["Reasoning",3],["Knowledge Graph",3],["Insights",2],["Automations",2],["Alerts",2],["Decisions",2],["Anomaly",2],["Forecast",2],
];

export const GRAPH_EDGES: Array<[number, number]> = [
  [0,4],[1,4],[2,4],[3,4],[4,5],[0,5],[5,6],[6,15],[3,6],[5,7],[6,7],[7,9],[9,6],[7,10],[7,11],[7,12],[7,14],[14,16],[16,17],[16,18],[16,19],[16,20],[16,21],[10,17],[12,19],[20,18],[21,19],[14,15],[15,7],[15,10],[15,9],[15,13],[13,5],[13,16],[13,14],[13,6],[17,19],[9,15],
];

export const GRAPH_COLORS = ["#22D3EE", "#A78BFA", "#34D399", "#8FE9FF"];
