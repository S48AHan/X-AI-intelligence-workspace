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
      {node.degree >= 3 && !isHovered && (
        <Html position={[0, radius + 4, 0]} center distanceFactor={140} zIndexRange={[10, 0]} style={{ pointerEvents: "none", userSelect: "none" }}>
          <span className="whitespace-nowrap font-mono text-[11px] font-medium" style={{ color: "#AAB0BC", opacity: isDimmed ? 0.25 : 1 }}>{node.label}</span>
        </Html>
      )}
      {isHovered && (
        <Html
          position={[0, radius + 8, 0]}
          center
          distanceFactor={125}
          zIndexRange={[30, 20]}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <div className="relative w-[210px] rounded-[10px] border border-cyan/30 bg-[rgba(10,13,17,0.95)] px-3.5 py-3 text-left shadow-[0_14px_38px_rgba(0,0,0,0.6),0_0_22px_rgba(34,211,238,0.1)] backdrop-blur-md">
            <span className="mb-1.5 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan">
              Intelligence node
            </span>
            <strong className="block text-[13px] font-semibold leading-4 text-t1">
              {node.label}
            </strong>
            <span className="mt-1.5 block text-[11px] leading-[17px] text-t2">
              {node.description}
            </span>
            <span className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-cyan/30 bg-[rgba(10,13,17,0.95)]" />
          </div>
        </Html>
      )}
    </>
  );
}
