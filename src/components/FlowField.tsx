"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/landing.module.css";

interface FlowFieldProps {
  threads?: number;
  speed?: number;
  noiseScale?: number;
  opacity?: number;
  colors?: [string, string, string];
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerp3(a: [number, number, number], b: [number, number, number], k: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}

export default function FlowField({
  threads = 320,
  speed = 2,
  noiseScale = 10,
  opacity = 40,
  colors = ["#3D5AFE", "#7C8CFF", "#D9F04A"],
}: FlowFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette = colors.map(hexToRgb) as [[number, number, number], [number, number, number], [number, number, number]];
    const colorFor = (k: number) => {
      const c = k < 0.5 ? lerp3(palette[0], palette[1], k / 0.5) : lerp3(palette[1], palette[2], (k - 0.5) / 0.5);
      return `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
    };

    const angleAt = (x: number, y: number, time: number) => {
      const s = noiseScale / 1000;
      const n1 = Math.sin(x * s + time);
      const n2 = Math.cos(y * (s * 1.15) - time * 0.8);
      const n3 = Math.sin((x + y) * (s * 0.6) + time * 0.5);
      return (n1 + n2 + n3) * Math.PI;
    };

    let seeds: { x: number; y: number; phase: number }[] = [];
    const seedThreads = (w: number, h: number) => {
      seeds = [];
      for (let i = 0; i < threads; i++) {
        seeds.push({
          x: Math.random() * w,
          y: (i / threads) * h + (Math.random() - 0.5) * 18,
          phase: Math.random() * 10,
        });
      }
    };

    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedThreads(w, h);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = opacity / 100;
      ctx.lineWidth = 1;

      for (let i = 0; i < seeds.length; i++) {
        const seed = seeds[i];
        let x = seed.x;
        let y = seed.y;
        const k = i / seeds.length;
        ctx.strokeStyle = colorFor(k);
        ctx.beginPath();
        ctx.moveTo(x, y);
        for (let s = 0; s < 42; s++) {
          const a = angleAt(x, y, t + seed.phase);
          x += Math.cos(a) * 6;
          y += Math.sin(a) * 6;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      t += speed / 2500;
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    draw();
    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.flowFieldPanel} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.flowFieldCanvas} />
    </div>
  );
}
