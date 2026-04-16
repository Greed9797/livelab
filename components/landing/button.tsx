import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)] rounded-full";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-brand-foreground hover:bg-brand-hover shadow-[0_12px_32px_-12px_rgba(232,103,60,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(232,103,60,0.7)]",
  secondary:
    "bg-surface text-foreground border border-[color:var(--border-strong)] hover:bg-foreground hover:text-background",
  ghost:
    "text-foreground hover:text-brand underline-offset-4 hover:underline",
  inverse:
    "bg-background text-foreground hover:bg-brand hover:text-brand-foreground",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  href = "#",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
