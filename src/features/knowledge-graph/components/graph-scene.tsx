"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KnowledgeGraph } from "./knowledge-graph";
import { usePrefersReducedMotion } from "@/shared/hooks/use-prefers-reduced-motion";

export default function GraphScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <Canvas camera={{ position: [0, 0, 190], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <KnowledgeGraph />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={!prefersReducedMotion} autoRotateSpeed={0.6} rotateSpeed={0.5} />
    </Canvas>
  );
}
