"use client";

import { Html } from "@react-three/drei";
import type { GraphNodeModel } from "../model/graph-types";

interface GraphNodeProps {
  node: GraphNodeModel;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: (index: number) => void;
  onLeave: () => void;
}

export function GraphNode({ node, index, isHovered, isDimmed, onHover, onLeave }: GraphNodeProps) {
  const radius = 1.6 + node.degree * 0.45;
  return (
    <>
      <mesh scale={isHovered ? radius * 1.25 : radius} onPointerOver={(event) => { event.stopPropagation(); onHover(index); }} onPointerOut={onLeave}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial color={["#22D3EE", "#A78BFA", "#34D399", "#8FE9FF"][node.group]} transparent opacity={isDimmed ? 0.22 : 0.95} />
      </mesh>
      {(node.degree >= 3 || isHovered) && (
        <Html position={[0, radius + 4, 0]} center distanceFactor={140} zIndexRange={[10, 0]} style={{ pointerEvents: "none", userSelect: "none" }}>
          <span className="whitespace-nowrap font-mono text-[11px] font-medium" style={{ color: isHovered ? "#F3F4F6" : "#AAB0BC", opacity: isDimmed ? 0.25 : 1 }}>{node.label}</span>
        </Html>
      )}
    </>
  );
}
