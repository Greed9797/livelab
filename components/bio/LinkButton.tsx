import Link from "next/link";
import type { LinkItem } from "@/lib/bio/links";

export default function LinkButton({ href, number, offer, accent }: LinkItem) {
  const className = accent ? "bio-door bio-door-accent" : "bio-door";
  const external = /^https?:\/\//.test(href);

  const content = (
    <>
      <span className="bio-door-num">{number}</span>
      <span className="bio-door-offer">{offer}</span>
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
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
