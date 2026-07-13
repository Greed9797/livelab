"use client";

import { useEffect } from "react";

const VIDEO_ID = "218ce9d6-dff8-47ab-af4b-f8add39a6a10";
const IFRAME_ID = `panda-${VIDEO_ID}`;
const API_SRC = "https://player.pandavideo.com.br/api.v2.js";
const SRC = `https://player-vz-75e71015-90c.tv.pandavideo.com.br/embed/?v=${VIDEO_ID}&autoplay=true&muted=true&controls=false&smartautoplay=true`;

type PandaEvent = { message: string; currentTime?: number; duration?: number };
type PandaInstance = {
  play(): void;
  setCurrentTime(n: number): void;
  destroy?(): void;
  onEvent(cb: (e: PandaEvent) => void): void;
};

declare global {
  interface Window {
    PandaPlayer?: new (
      id: string,
      opts: Record<string, unknown>
    ) => PandaInstance;
  }
}

export function HeroVideo() {
  useEffect(() => {
    let player: PandaInstance | null = null;
    let restarting = false;

    function restart() {
      if (restarting || !player) return;
      restarting = true;
      player.setCurrentTime(0);
      player.play();
      // release guard shortly after seek so next end can retrigger
      window.setTimeout(() => {
        restarting = false;
      }, 800);
    }

    function init() {
      if (!window.PandaPlayer) return;
      player = new window.PandaPlayer(IFRAME_ID, {
        onReady() {
          player?.onEvent((e: PandaEvent) => {
            if (e.message === "panda_ended") {
              restart();
            } else if (
              e.message === "panda_timeupdate" &&
              typeof e.currentTime === "number" &&
              typeof e.duration === "number" &&
              e.duration > 0 &&
              e.currentTime >= e.duration - 0.4
            ) {
              restart();
            }
          });
        },
      });
    }

    if (window.PandaPlayer) {
      init();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${API_SRC}"]`
      );
      if (existing) {
        existing.addEventListener("load", init, { once: true });
      } else {
        const script = document.createElement("script");
        script.src = API_SRC;
        script.async = true;
        script.addEventListener("load", init, { once: true });
        document.head.appendChild(script);
      }
    }

    return () => {
      player?.destroy?.();
    };
  }, []);

  return (
    <iframe
      id={IFRAME_ID}
      title="Livelab background"
      src={SRC}
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
      className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 scale-110 border-0 blur-[6px]"
    />
  );
}
