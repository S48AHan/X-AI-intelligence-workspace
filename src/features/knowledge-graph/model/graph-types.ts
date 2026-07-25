import type { Vector3 } from "three";

export interface GraphNodeModel {
  anchor: Vector3;
  position: Vector3;
  velocity: Vector3;
  degree: number;
  group: number;
  label: string;
  description: string;
}
