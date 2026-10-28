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
  lean: number;
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
          size: (burst ? 14 : 10) + Math.random() * (burst ? 8 : 6),
          rot: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * (burst ? 0.14 : 0.05),
          lean: (Math.random() - 0.5) * 0.35,
        });
      }
      if (feathers.length > 140) feathers.splice(0, feathers.length - 140);
    };

    const drawFeather = (f: Feather) => {
      const t = 1 - f.life / f.max;
      const len = f.size;
      const wide = len * 0.28;
      const lean = f.lean;

      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.rot);
      ctx.globalAlpha = Math.max(0, t) * 0.9;

      // Soft vane body, pointed tip, rounded base
      ctx.beginPath();
      ctx.moveTo(0, -len * 0.5);
      ctx.bezierCurveTo(wide, -len * 0.2, wide * 0.85, len * 0.15, lean * wide, len * 0.42);
      ctx.bezierCurveTo(-wide * 0.55, len * 0.28, -wide, -len * 0.05, 0, -len * 0.5);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.fill();

      // Inner vane shading so it reads as a feather, not a grain
      ctx.beginPath();
      ctx.moveTo(0, -len * 0.38);
      ctx.bezierCurveTo(wide * 0.45, -len * 0.08, wide * 0.4, len * 0.08, lean * wide * 0.4, len * 0.28);
      ctx.bezierCurveTo(-wide * 0.25, len * 0.16, -wide * 0.45, -len * 0.02, 0, -len * 0.38);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fill();

      // Central shaft
      ctx.strokeStyle = "rgba(40,40,40,0.35)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -len * 0.46);
      ctx.quadraticCurveTo(lean * 4, 0, lean * wide * 0.4, len * 0.46);
      ctx.stroke();

      // A few barb marks
      ctx.strokeStyle = "rgba(0,0,0,0.12)";
      ctx.lineWidth = 0.5;
      for (let i = -2; i <= 2; i++) {
        const y = i * (len * 0.12);
        ctx.beginPath();
        ctx.moveTo(-wide * 0.15, y);
        ctx.lineTo(wide * 0.35, y + 1.2);
        ctx.stroke();
      }

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
      if (now - last < 22) return;
      last = now;
      spawn(e.clientX, e.clientY, 1);
    };

    const onClick = (e: MouseEvent) => {
      spawn(e.clientX, e.clientY, 8, true);
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
