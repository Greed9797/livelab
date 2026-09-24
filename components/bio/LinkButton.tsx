import Link from "next/link";
import type { LinkItem } from "@/lib/bio/links";

export default function LinkButton({ href, number, label, offer, accent }: LinkItem) {
  return (
    <Link href={href} className={accent ? "bio-door bio-door-accent" : "bio-door"}>
      <span className="bio-door-num">{number}</span>
      <span className="bio-door-copy">
        <span className="bio-door-label">{label}</span>
        <span className="bio-door-offer">{offer}</span>
      </span>
      <span className="bio-door-go" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="bio-door-icon">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
