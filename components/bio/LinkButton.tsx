import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/bio/links";

export default function LinkButton({ href, parts }: LinkItem) {
  const isExternal = /^https?:\/\//.test(href) || href === "#";
  const Tag = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? { target: href !== "#" ? "_blank" : undefined, rel: href !== "#" ? "noopener noreferrer" : undefined }
    : {};

  return (
    <Tag
      href={href}
      {...externalProps}
      className="relative block h-[120px] w-[300px] overflow-hidden rounded-[12px] bg-[#CC4400] transition-opacity hover:opacity-90 md:h-[110px] md:w-[420px]"
    >
      {/* White line at top center */}
      <div className="absolute left-1/2 top-0 h-[3px] w-[97px] -translate-x-1/2 bg-white" />

      {/* Content */}
      <div className="flex h-full items-center justify-center gap-[14px] px-[20px]">
        <p className="text-center text-[18px] font-normal leading-[1.3] text-white md:text-[19px]">
          {parts.map((p, i) =>
            p.bold ? (
              <strong key={i} className="font-bold">{p.text}</strong>
            ) : (
              <span key={i}>{p.text}</span>
            )
          )}
        </p>
        <ArrowUpRight className="h-[20px] w-[20px] flex-shrink-0 text-white" strokeWidth={2.5} />
      </div>
    </Tag>
  );
}
