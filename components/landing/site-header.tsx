"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  WHATSAPP_FRANCHISE_URL,
  WHATSAPP_SALES_URL,
} from "@/lib/contact";

const GLASS =
  "border border-white/10 bg-[rgba(22,15,11,0.55)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]";

const NAV_LINKS = [
  { label: "Recursos", href: "#recursos" },
  { label: "Clientes", href: "#clientes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3 md:pt-5">
      <Container>
        <div
          className={cn(
            "relative flex h-14 items-center justify-between gap-4 rounded-full pl-5 pr-2.5 md:h-16 md:pl-7 md:pr-3",
            GLASS
          )}
        >
          {/* liquid sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_42%)]"
          />

          <a
            href="#top"
            className="relative flex items-center gap-2 text-white transition-opacity hover:opacity-80"
            aria-label="Livelab — início"
          >
            <Image
              src="/logo-white.png"
              alt="Livelab"
              width={600}
              height={250}
              priority
              className="h-6 w-auto md:h-7"
            />
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative hidden items-center gap-2 md:flex">
            <a
              href={WHATSAPP_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-white/20 px-5 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Quero vender
            </a>
            <a
              href={WHATSAPP_FRANCHISE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-[0_8px_24px_-8px_rgba(232,103,60,0.7)] transition-colors hover:bg-brand-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Quero franquear
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn("px-6 md:hidden", open ? "block" : "hidden")}
      >
        <Container
          className={cn(
            "mt-2 flex flex-col gap-4 rounded-3xl p-6",
            GLASS
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <Button
              href={WHATSAPP_FRANCHISE_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="w-full"
            >
              Quero franquear
            </Button>
            <a
              href={WHATSAPP_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full rounded-full border border-white/25 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Quero vender
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
