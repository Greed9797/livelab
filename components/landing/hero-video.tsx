export function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 scale-110 object-cover blur-[6px]"
    >
      <source src="/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
