"use client";

import { useEffect, useRef } from "react";

export default function BioVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      el.muted = true;
      if (motion.matches) {
        el.pause();
        return;
      }
      void el.play().catch(() => {});
    };

    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  return (
    <div className="bio-media">
      <video
        ref={(node) => {
          ref.current = node;
          if (node) node.muted = true;
        }}
        src="/hero-loop.mp4"
        poster="/bio/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="bio-video"
        onPlay={(event) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            event.currentTarget.pause();
          }
        }}
      />
      <div className="bio-vignette" />
      <div className="bio-veil-top" />
      <div className="bio-veil-base" />
      <div className="bio-veil-side" />
    </div>
  );
}
