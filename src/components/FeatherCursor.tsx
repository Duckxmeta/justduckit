"use client";

import { useEffect, useRef } from "react";

type Feather = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  rot: number;
  spin: number;
};

export default function FeatherCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const feathers: Feather[] = [];
    let last = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x: number, y: number, n: number, burst = false) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = burst ? 1.2 + Math.random() * 2.4 : 0.15 + Math.random() * 0.7;
        feathers.push({
          x,
          y,
          vx: Math.cos(a) * s + (burst ? 0 : (Math.random() - 0.5) * 0.4),
          vy: Math.sin(a) * s * 0.6 - (burst ? 0.6 : 0.15) - Math.random() * 0.4,
          life: 0,
          max: burst ? 50 + Math.random() * 40 : 70 + Math.random() * 50,
          size: (burst ? 16 : 12) + Math.random() * (burst ? 6 : 5),
          rot: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * (burst ? 0.12 : 0.04),
        });
      }
      if (feathers.length > 120) feathers.splice(0, feathers.length - 120);
    };

    const drawFeather = (f: Feather) => {
      const t = 1 - f.life / f.max;
      const s = f.size;

      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.rot);
      ctx.globalAlpha = Math.max(0, t) * 0.92;

      // Curved quill / shaft that sticks out below the vane
      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = Math.max(1.2, s * 0.06);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.55);
      ctx.quadraticCurveTo(s * 0.08, s * 0.05, -s * 0.02, s * 0.62);
      ctx.stroke();

      // Vane: pointed tip, rounded bottom, slightly asymmetric like the illustration
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.58);
      ctx.bezierCurveTo(s * 0.38, -s * 0.22, s * 0.32, s * 0.12, s * 0.06, s * 0.28);
      ctx.bezierCurveTo(-s * 0.02, s * 0.22, -s * 0.28, s * 0.08, -s * 0.32, -s * 0.08);
      ctx.bezierCurveTo(-s * 0.34, -s * 0.28, -s * 0.16, -s * 0.42, 0, -s * 0.58);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.96)";
      ctx.fill();

      // Soft highlight oval, like the illustration
      ctx.beginPath();
      ctx.ellipse(-s * 0.02, -s * 0.12, s * 0.09, s * 0.18, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fill();

      // Darker shaft running through the vane
      ctx.strokeStyle = "rgba(0,0,0,0.18)";
      ctx.lineWidth = Math.max(0.8, s * 0.04);
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.48);
      ctx.quadraticCurveTo(s * 0.04, -s * 0.05, s * 0.02, s * 0.22);
      ctx.stroke();

      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = feathers.length - 1; i >= 0; i--) {
        const f = feathers[i];
        f.life += 1;
        f.x += f.vx;
        f.y += f.vy;
        f.vy += 0.012;
        f.vx *= 0.985;
        f.rot += f.spin;
        if (f.life >= f.max) {
          feathers.splice(i, 1);
          continue;
        }
        drawFeather(f);
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 24) return;
      last = now;
      spawn(e.clientX, e.clientY, 1);
    };

    const onClick = (e: MouseEvent) => {
      spawn(e.clientX, e.clientY, 7, true);
    };

    resize();
    loop();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[80]"
    />
  );
}
