"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { HeroScrollSource } from "../model";
import { createParticleGeometry } from "../lib/create-particle-geometry";
import { particleFragmentShader, particleVertexShader } from "../shaders/particle-shaders";
import { clamp } from "@/shared/lib/number";
import { usePrefersReducedMotion } from "@/shared/hooks/use-prefers-reduced-motion";

export function ParticleField({ scrollSource }: { scrollSource: HeroScrollSource }) {
  const { gl, size } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(1e5, 1e5));
  const prefersReducedMotion = usePrefersReducedMotion();
  const progress = useRef(prefersReducedMotion ? 1 : 0);
  const geometry = useMemo(() => createParticleGeometry(), []);
  const uniforms = useMemo(() => ({
    uMorph: { value: 0 }, uTime: { value: 0 }, uDpr: { value: gl.getPixelRatio() },
    uViewport: { value: new THREE.Vector2(size.width, size.height) },
    uPointer: { value: new THREE.Vector2(1e5, 1e5) },
  }), [gl, size.height, size.width]);

  useEffect(() => {
    if (prefersReducedMotion) progress.current = 1;
  }, [prefersReducedMotion]);

  useEffect(() => {
    const canvas = gl.domElement;
    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.current.set(event.clientX - bounds.left - bounds.width / 2, -(event.clientY - bounds.top - bounds.height / 2));
    };
    const handlePointerLeave = () => pointer.current.set(1e5, 1e5);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    return () => { window.removeEventListener("pointermove", handlePointerMove); window.removeEventListener("pointerleave", handlePointerLeave); geometry.dispose(); };
  }, [geometry, gl]);

  useFrame((_, delta) => {
    const material = materialRef.current;
    if (!material) return;
    if (!prefersReducedMotion) progress.current += (clamp(scrollSource.current, 0, 1) - progress.current) * Math.min(1, delta * 3.5);
    material.uniforms.uMorph.value = progress.current;
    material.uniforms.uTime.value += delta;
    material.uniforms.uViewport.value.set(size.width, size.height);
    material.uniforms.uPointer.value.copy(pointer.current);
  });

  return (
    <points geometry={geometry} frustumCulled={false}>
      <shaderMaterial ref={materialRef} uniforms={uniforms} transparent depthWrite={false} blending={THREE.NormalBlending} vertexShader={particleVertexShader} fragmentShader={particleFragmentShader} />
    </points>
  );
}
