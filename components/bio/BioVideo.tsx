"use client";

import { useLayoutEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function BioVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (prefersReducedMotion()) {
      el.pause();
      return;
    }
    void el.play().catch(() => {});
  }, [reduced]);

  return (
    <div className="bio-media">
      {reduced ? (
        <img src="/bio/hero-poster.jpg" alt="" className="bio-video" />
      ) : (
        <video
          ref={ref}
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
            event.currentTarget.muted = true;
            if (prefersReducedMotion()) event.currentTarget.pause();
          }}
        />
      )}
      <div className="bio-vignette" />
      <div className="bio-veil-top" />
      <div className="bio-veil-base" />
      <div className="bio-veil-side" />
    </div>
  );
}
