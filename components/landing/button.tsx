import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// primary: laranja com texto preto (6,1:1). Branco sobre o laranja fica em 2,9:1 e não passa.
// outline: para fundo preto. ink / outline-ink: para fundo laranja ou gelo.
type Variant = "primary" | "outline" | "ink" | "outline-ink";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] transition-[background-color,color,border-color] duration-300 ease-out";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-laranja text-preto hover:bg-gelo",
  outline: "border border-gelo/30 text-gelo hover:border-gelo hover:bg-gelo hover:text-preto",
  ink: "bg-preto text-gelo hover:bg-gelo hover:text-preto",
  "outline-ink": "border border-preto/35 text-preto hover:border-preto hover:bg-preto hover:text-gelo",
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
