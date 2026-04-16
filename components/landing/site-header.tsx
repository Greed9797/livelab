"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Produto", href: "#produto" },
  { label: "Recursos", href: "#recursos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Preços", href: "#precos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          aria-label="Livelab — início"
        >
          <LivelabLogo className="h-6 md:h-7" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--muted-strong)] transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#entrar"
            className="text-sm font-medium text-[color:var(--muted-strong)] transition-colors hover:text-foreground"
          >
            Entrar
          </a>
          <Button href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" size="md">
            Quero franquear
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-[color:var(--border)] md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <a
              href="#entrar"
              className="text-sm font-medium text-[color:var(--muted-strong)]"
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
