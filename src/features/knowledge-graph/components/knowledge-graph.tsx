"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";
import { createEdgeGeometry, createGraphNodes, createNeighborMap, updateEdgeGeometry } from "../lib/create-graph";
import { stepGraphPhysics } from "../lib/graph-physics";
import { usePrefersReducedMotion } from "@/shared/hooks/use-prefers-reduced-motion";
import { GraphNode } from "./graph-node";

export function KnowledgeGraph() {
  const nodes = useMemo(() => createGraphNodes(), []);
  const neighbors = useMemo(() => createNeighborMap(), []);
  const baseGeometry = useMemo(() => createEdgeGeometry(), []);
  const highlightedGeometry = useMemo(() => createEdgeGeometry(), []);
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);
  const simulationAlpha = useRef(1);
  const graphScale = useRef(1);
  const [hoveredNode, setHoveredNode] = useState(-1);
  const prefersReducedMotion = usePrefersReducedMotion();
  const wasSettled = useRef(false);

  useEffect(() => () => {
    baseGeometry.dispose();
    highlightedGeometry.dispose();
  }, [baseGeometry, highlightedGeometry]);

  useFrame(() => {
    if (prefersReducedMotion && !wasSettled.current) {
      for (let iteration = 0; iteration < 320; iteration += 1) stepGraphPhysics(nodes, 1);
      wasSettled.current = true;
    } else if (!prefersReducedMotion && simulationAlpha.current > 0.02) {
      stepGraphPhysics(nodes, simulationAlpha.current);
      simulationAlpha.current *= 0.99;
    }

    nodes.forEach((node, index) => nodeRefs.current[index]?.position.copy(node.position));
    const maximumRadius = Math.max(1, ...nodes.map((node) => node.position.length()));
    graphScale.current += (46 / maximumRadius - graphScale.current) * 0.08;
    groupRef.current?.scale.setScalar(graphScale.current);
    updateEdgeGeometry(baseGeometry, nodes);
    updateEdgeGeometry(highlightedGeometry, nodes, hoveredNode >= 0 ? hoveredNode : null);
  });

  const highlightedNeighbors = hoveredNode >= 0 ? neighbors[hoveredNode] ?? [] : [];
  return (
    <group ref={groupRef}>
      <lineSegments geometry={baseGeometry}><lineBasicMaterial color="#22d3ee" transparent opacity={0.14} /></lineSegments>
      <lineSegments geometry={highlightedGeometry}><lineBasicMaterial color="#8fe9ff" transparent opacity={0.85} /></lineSegments>
      {nodes.map((node, index) => {
        const isDimmed = hoveredNode >= 0 && index !== hoveredNode && !highlightedNeighbors.includes(index);
        return (
          <group key={node.label} ref={(element) => { nodeRefs.current[index] = element; }}>
            <GraphNode node={node} index={index} isHovered={index === hoveredNode} isDimmed={isDimmed} onHover={(selected) => { setHoveredNode(selected); simulationAlpha.current = Math.max(simulationAlpha.current, 0.12); }} onLeave={() => setHoveredNode(-1)} />
          </group>
        );
      })}
    </group>
  );
}
