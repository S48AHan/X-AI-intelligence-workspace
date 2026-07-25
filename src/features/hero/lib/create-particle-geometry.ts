import * as THREE from "three";

const PARTICLE_COUNT = 198;

export function createParticleGeometry() {
  const scatter = new Float32Array(PARTICLE_COUNT * 2);
  const phase = new Float32Array(PARTICLE_COUNT);
  const size = new Float32Array(PARTICLE_COUNT);
  const glyph = new Float32Array(PARTICLE_COUNT);
  const angle = new Float32Array(PARTICLE_COUNT);
  const alpha = new Float32Array(PARTICLE_COUNT);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const cyan = new THREE.Color("#45b8ce");
  const gray = new THREE.Color("#7f8894");

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    scatter[index * 2] = (Math.random() - 0.5) * 0.99;
    scatter[index * 2 + 1] = (Math.random() - 0.5) * 0.92;
    phase[index] = Math.random() * Math.PI * 2;
    size[index] = 7 + Math.random() * 8;
    alpha[index] = 0.28 + Math.random() * 0.5;
    glyph[index] = Math.floor(Math.random() * 7);
    angle[index] = (Math.random() - 0.5) * 1.3;
    const color = Math.random() < 0.28 ? cyan : gray;
    color.toArray(colors, index * 3);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aScatter", new THREE.BufferAttribute(scatter, 2));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phase, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
  geometry.setAttribute("aGlyph", new THREE.BufferAttribute(glyph, 1));
  geometry.setAttribute("aAngle", new THREE.BufferAttribute(angle, 1));
  geometry.setAttribute("aRawAlpha", new THREE.BufferAttribute(alpha, 1));
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  return geometry;
}
