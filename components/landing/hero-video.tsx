"use client";

import { useEffect, useRef } from "react";

// Com prefers-reduced-motion o vídeo fica parado no poster (mesmo padrão do BioVideo).
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const el = ref.current;
      if (!el) return;
      if (motion.matches) el.pause();
      else void el.play().catch(() => {});
    };
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/bio/hero-poster.jpg"
      aria-hidden
      className="h-full w-full object-cover object-[58%_50%] [filter:saturate(0.92)_contrast(1.04)]"
    >
      <source src="/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
