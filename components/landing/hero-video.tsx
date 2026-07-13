"use client";

import { useEffect, useRef } from "react";

const SRC =
  "https://player-vz-75e71015-90c.tv.pandavideo.com.br/embed/?v=218ce9d6-dff8-47ab-af4b-f8add39a6a10&autoplay=true&muted=true&loop=true&controls=false&smartautoplay=true";

export function HeroVideo() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function restart() {
      const win = ref.current?.contentWindow;
      if (!win) return;
      // Panda player postMessage API
      win.postMessage({ message: "panda_seek", value: 0 }, "*");
      win.postMessage({ message: "panda_play" }, "*");
    }

    function onMessage(event: MessageEvent) {
      const data = event.data;
      const msg = typeof data === "string" ? data : data?.message ?? data?.event;
      if (typeof msg === "string" && /ended|finish/i.test(msg)) {
        restart();
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      title="Livelab background"
      src={SRC}
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
      className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 scale-110 border-0 blur-[6px]"
    />
  );
}
