"use client";

import { Canvas } from "@react-three/fiber";
import type { HeroScrollSource } from "../model";
import { ParticleField } from "./particle-field";

export default function HeroCanvas({ scrollSource }: { scrollSource: HeroScrollSource }) {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 1 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ position: "absolute", inset: 0 }}>
      <ParticleField scrollSource={scrollSource} />
    </Canvas>
  );
}
