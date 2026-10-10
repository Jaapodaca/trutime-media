// Three.js hero: a gold particle "clock face" (ring + 12 tick marks + drifting dust) that
// rotates clockwise and tilts toward the mouse. Only imported on desktop with motion allowed.
import {
  AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group,
  PerspectiveCamera, Points, PointsMaterial, Scene, WebGLRenderer,
} from 'three';

export function startHeroScene(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); // cap: 3x screens cost a lot for no visible gain

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 12;

  const RING = 2600, TICKS = 12 * 60, DUST = 1400;
  const count = RING + TICKS + DUST;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const gold = new Color('#fbbf24');
  const chrome = new Color('#e5e7eb');
  const rand = (spread: number) => (Math.random() - 0.5) * spread;

  for (let i = 0; i < count; i++) {
    let x: number, y: number, z: number;
    if (i < RING) {
      const a = Math.random() * Math.PI * 2;
      const r = 3.4 + rand(0.25);
      [x, y, z] = [Math.cos(a) * r, Math.sin(a) * r, rand(0.25)];
    } else if (i < RING + TICKS) {
      const a = (Math.floor((i - RING) / 60) / 12) * Math.PI * 2;
      const r = 3.9 + Math.random() * 0.45;
      [x, y, z] = [Math.cos(a) * r + rand(0.06), Math.sin(a) * r + rand(0.06), rand(0.06)];
    } else {
      const a = Math.random() * Math.PI * 2;
      const r = 1 + Math.random() * 7;
      [x, y, z] = [Math.cos(a) * r, Math.sin(a) * r, rand(8)];
    }
    positions.set([x, y, z], i * 3);
    (i >= RING + TICKS && Math.random() < 0.5 ? chrome : gold).toArray(colors, i * 3);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('color', new BufferAttribute(colors, 3));
  const material = new PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: AdditiveBlending, // overlapping points add up → glow
    depthWrite: false,
  });
  const clock = new Points(geometry, material);
  const tilt = new Group(); // outer group tilts with the mouse, inner points spin
  tilt.add(clock);
  scene.add(tilt);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    // Keep the clock in the right part of the screen at any width: visible half-width at z=0 × 0.6
    tilt.position.x = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z * camera.aspect * 0.6;
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const mouse = { x: 0, y: 0 };
  addEventListener('pointermove', (e) => {
    mouse.x = e.clientX / innerWidth - 0.5;
    mouse.y = e.clientY / innerHeight - 0.5;
  }, { passive: true });

  const render = () => {
    clock.rotation.z -= 0.0012; // clockwise
    tilt.rotation.x += (-0.35 + mouse.y * 0.5 - tilt.rotation.x) * 0.04; // ease toward target
    tilt.rotation.y += (-0.45 + mouse.x * 0.6 - tilt.rotation.y) * 0.04;
    renderer.render(scene, camera);
  };

  // Stop rendering when the hero is scrolled out of view (saves battery/CPU).
  new IntersectionObserver(([entry]) => {
    renderer.setAnimationLoop(entry.isIntersecting ? render : null);
  }).observe(canvas);

  canvas.classList.remove('opacity-0');
}
