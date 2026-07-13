"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GLASS =
  "border border-white/10 bg-[rgba(22,15,11,0.55)] backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)]";

const NAV_LINKS = [
  { label: "Produto", href: "#produto" },
  { label: "Recursos", href: "#recursos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Preços", href: "#precos" },
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

          <div className="relative hidden items-center gap-4 md:flex">
            <a
              href="#entrar"
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              Entrar
            </a>
            <Button
              href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              <MessageCircle className="h-4 w-4" />
              Quero franquear
            </Button>
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
            <a
              href="#entrar"
              className="text-sm font-medium text-white/65"
            >
              Entrar
            </a>
            <Button href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" size="md" className="w-full">
              Quero franquear
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
