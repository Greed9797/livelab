import { cn } from "@/lib/utils";

type LivelabLogoProps = {
  className?: string;
  title?: string;
  accentColor?: string;
};

export function LivelabLogo({
  className,
  title = "Livelab",
  accentColor = "#E8673C",
}: LivelabLogoProps) {
  return (
    <svg
      viewBox="0 0 220 72"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <text
        x="0"
        y="56"
        fontFamily="var(--font-geist-sans), -apple-system, system-ui, sans-serif"
        fontSize="64"
        fontWeight="800"
        letterSpacing="-3"
        fill="currentColor"
      >
        l<tspan dx="-2">i</tspan>velab
      </text>
      {/* Orange play triangle replacing the dot of the "i" */}
      <path
        d="M25 14 L42 22 L25 30 Z"
        fill={accentColor}
      />
    </svg>
  );
}
