import * as THREE from "three";
import { GRAPH_EDGES, GRAPH_NODE_DEFINITIONS } from "../model/graph-data";
import type { GraphNodeModel } from "../model/graph-types";

export function createGraphNodes(): GraphNodeModel[] {
  const nodes = GRAPH_NODE_DEFINITIONS.map(([label, group]) => ({
    label, group, degree: 0,
    position: new THREE.Vector3((Math.random() * 2 - 1) * 40, (Math.random() * 2 - 1) * 40, (Math.random() * 2 - 1) * 40),
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
