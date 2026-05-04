import Image from "next/image";

export default function PlayBadge({ className }: { className?: string }) {
  return (
    <Image
      src="/bio/play-badge.png"
      alt=""
      width={78}
      height={78}
      priority
      className={className}
    />
  );
}
