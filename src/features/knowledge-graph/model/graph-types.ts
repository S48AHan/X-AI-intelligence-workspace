import type { Vector3 } from "three";

export interface GraphNodeModel {
  position: Vector3;
  velocity: Vector3;
  degree: number;
  group: number;
  label: string;
}
