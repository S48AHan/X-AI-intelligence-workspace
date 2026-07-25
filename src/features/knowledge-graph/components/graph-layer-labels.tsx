import { Html } from "@react-three/drei";
import { GRAPH_LAYERS } from "../model/graph-data";

export function GraphLayerLabels() {
  return (
    <>
      {GRAPH_LAYERS.map((layer) => (
        <Html
          key={layer.label}
          position={[layer.x, layer.y, 0]}
          center
          distanceFactor={150}
          zIndexRange={[5, 0]}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <span
            className="whitespace-nowrap rounded-full border bg-[rgba(10,13,17,0.82)] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm"
            style={{ borderColor: `${layer.color}55`, color: layer.color }}
          >
            {layer.label}
          </span>
        </Html>
      ))}
    </>
  );
}
