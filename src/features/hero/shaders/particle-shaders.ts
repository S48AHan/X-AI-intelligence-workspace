export const particleVertexShader = /* glsl */ `
  uniform float uMorph, uTime, uDpr;
  uniform vec2 uViewport, uPointer;
  attribute vec2 aScatter;
  attribute float aPhase, aSize, aRawAlpha, aGlyph, aAngle;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha, vGlyph, vAngle;

  void main() {
    float drift = 1.0 - uMorph;
    vec2 p = aScatter * uViewport;
    p.x += cos(uTime + aPhase) * 8.0 * drift;
    p.y += sin(uTime * 0.9 + aPhase) * 8.0 * drift;
    vec2 pointerDelta = p - uPointer;
    float pointerDistance = length(pointerDelta);
    if (pointerDistance < 150.0) {
      p += normalize(pointerDelta) * (1.0 - pointerDistance / 150.0) * 40.0 * (0.4 + 0.6 * drift);
    }
    vColor = aColor;
    vAlpha = aRawAlpha * (1.0 - smoothstep(0.0, 0.62, uMorph));
    vGlyph = aGlyph;
    vAngle = aAngle * drift;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
    gl_PointSize = (aSize + 4.0) * uDpr;
  }
`;

export const particleFragmentShader = /* glsl */ `
  precision mediump float;
  varying vec3 vColor;
  varying float vAlpha, vGlyph, vAngle;
  float lineMask(float distanceToLine, float width) {
    return 1.0 - smoothstep(width, width + 0.08, distanceToLine);
  }
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float cs = cos(vAngle);
    float sn = sin(vAngle);
    vec2 p = mat2(cs, -sn, sn, cs) * uv;
    float shape = 0.0;
    if (vGlyph < 0.5) shape = 1.0 - smoothstep(0.16, 0.27, length(p));
    else if (vGlyph < 1.5) shape = 1.0 - smoothstep(0.035, 0.095, abs(max(abs(p.x), abs(p.y)) - 0.32));
    else if (vGlyph < 2.5) shape = lineMask(abs(p.y), 0.045) * (1.0 - smoothstep(0.30, 0.42, abs(p.x)));
    else if (vGlyph < 3.5) shape = max(lineMask(abs(p.y), 0.04) * (1.0 - smoothstep(0.27, 0.40, abs(p.x))), lineMask(abs(p.x), 0.04) * (1.0 - smoothstep(0.27, 0.40, abs(p.y))));
    else if (vGlyph < 4.5) shape = lineMask(abs(p.y - p.x), 0.045) * (1.0 - smoothstep(0.28, 0.43, max(abs(p.x), abs(p.y))));
    else if (vGlyph < 5.5) shape = 1.0 - smoothstep(0.045, 0.10, abs(length(p * vec2(1.35, 1.0)) - 0.27));
    else shape = max(lineMask(abs(p.x), 0.045) * (1.0 - smoothstep(0.28, 0.40, abs(p.y))), lineMask(abs(p.y - 0.30), 0.04) * (1.0 - smoothstep(0.02, 0.16, abs(p.x))));
    float alpha = shape * vAlpha;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;
