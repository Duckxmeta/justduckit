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
          size: (burst ? 7 : 5) + Math.random() * (burst ? 7 : 4),
          rot: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * (burst ? 0.18 : 0.06),
        });
      }
      if (feathers.length > 180) feathers.splice(0, feathers.length - 180);
    };

    const drawFeather = (f: Feather) => {
      const t = 1 - f.life / f.max;
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.rot);
      ctx.globalAlpha = Math.max(0, t) * 0.85;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.ellipse(0, 0, f.size * 0.35, f.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -f.size * 0.85);
      ctx.lineTo(0, f.size * 0.85);
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
      if (now - last < 18) return;
      last = now;
      spawn(e.clientX, e.clientY, 1);
    };

    const onClick = (e: MouseEvent) => {
      spawn(e.clientX, e.clientY, 10, true);
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
