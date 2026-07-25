import * as THREE from "three";
import {
  GRAPH_EDGES,
  GRAPH_NODE_DEFINITIONS,
  GRAPH_NODE_DESCRIPTIONS,
} from "../model/graph-data";
import type { GraphNodeModel } from "../model/graph-types";

const LAYER_LAYOUT: Record<
  number,
  { x: number; ySpacing: number; zRadius: number }
> = {
  0: { x: -52, ySpacing: 14, zRadius: 10 },
  1: { x: -16, ySpacing: 10.5, zRadius: 18 },
  3: { x: 18, ySpacing: 16, zRadius: 6 },
  2: { x: 52, ySpacing: 13, zRadius: 13 },
};

function createSemanticAnchors() {
  const groupCounts = new Map<number, number>();
  const groupIndexes = new Map<number, number>();

  GRAPH_NODE_DEFINITIONS.forEach(([, group]) => {
    groupCounts.set(group, (groupCounts.get(group) ?? 0) + 1);
  });

  return GRAPH_NODE_DEFINITIONS.map(([, group]) => {
    const index = groupIndexes.get(group) ?? 0;
    const count = groupCounts.get(group) ?? 1;
    const layout = LAYER_LAYOUT[group];
    const centeredIndex = index - (count - 1) / 2;
    groupIndexes.set(group, index + 1);
    return new THREE.Vector3(
      layout.x,
      centeredIndex * layout.ySpacing,
      Math.sin(index * 2.35) * layout.zRadius,
    );
  });
}

export function createGraphNodes(): GraphNodeModel[] {
  const anchors = createSemanticAnchors();
  const nodes = GRAPH_NODE_DEFINITIONS.map(([label, group], index) => ({
    label,
    group,
    description: GRAPH_NODE_DESCRIPTIONS[label],
    degree: 0,
    anchor: anchors[index],
    position: anchors[index].clone(),
    velocity: new THREE.Vector3(),
  }));
  GRAPH_EDGES.forEach(([source, target]) => {
    if (source !== target) { nodes[source].degree += 1; nodes[target].degree += 1; }
  });
  return nodes;
}

export function createNeighborMap() {
  const neighbors: Record<number, number[]> = {};
  GRAPH_EDGES.forEach(([source, target]) => {
    if (source === target) return;
    (neighbors[source] ||= []).push(target);
    (neighbors[target] ||= []).push(source);
  });
  return neighbors;
}

export function createEdgeGeometry() {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(GRAPH_EDGES.length * 6), 3));
  return geometry;
}

export function updateEdgeGeometry(
  geometry: THREE.BufferGeometry,
  nodes: GraphNodeModel[],
  selectedNode: number | null = null,
) {
  const positions = geometry.getAttribute("position") as THREE.BufferAttribute;
  let segmentIndex = 0;
  GRAPH_EDGES.forEach(([source, target]) => {
    if (selectedNode !== null && source !== selectedNode && target !== selectedNode) return;
    positions.setXYZ(segmentIndex++, nodes[source].position.x, nodes[source].position.y, nodes[source].position.z);
    positions.setXYZ(segmentIndex++, nodes[target].position.x, nodes[target].position.y, nodes[target].position.z);
  });
  geometry.setDrawRange(0, segmentIndex);
  positions.needsUpdate = true;
}
