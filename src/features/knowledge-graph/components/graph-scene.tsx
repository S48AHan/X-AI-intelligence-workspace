"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KnowledgeGraph } from "./knowledge-graph";

export default function GraphScene() {
  return (
    <Canvas camera={{ position: [0, 0, 190], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <KnowledgeGraph />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
