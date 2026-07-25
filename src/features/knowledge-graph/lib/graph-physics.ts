import { GRAPH_EDGES } from "../model/graph-data";
import type { GraphNodeModel } from "../model/graph-types";

export function stepGraphPhysics(nodes: GraphNodeModel[], alpha: number) {
  for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
    const first = nodes[firstIndex];
    for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
      const second = nodes[secondIndex];
      const delta = first.position.clone().sub(second.position);
      const distanceSquared = delta.lengthSq() + 0.01;
      const force = 1200 / distanceSquared;
      delta.normalize().multiplyScalar(force);
      first.velocity.add(delta);
      second.velocity.sub(delta);
    }
  }
  GRAPH_EDGES.forEach(([sourceIndex, targetIndex]) => {
    if (sourceIndex === targetIndex) return;
    const source = nodes[sourceIndex];
    const target = nodes[targetIndex];
    const delta = target.position.clone().sub(source.position);
    const distance = delta.length() + 0.01;
    delta.normalize().multiplyScalar((distance - 32) * 0.02);
    source.velocity.add(delta);
    target.velocity.sub(delta);
  });
  nodes.forEach((node) => {
    node.velocity.addScaledVector(node.position, -0.02).multiplyScalar(0.82);
    node.position.addScaledVector(node.velocity, alpha);
  });
}
