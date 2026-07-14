import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "./container";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const COLUMNS = [
  {
    title: "Explorar",
    links: [
      { label: "Recursos", href: "#recursos" },
      { label: "Clientes", href: "#clientes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Falar com vendas", href: WHATSAPP_URL, external: true },
      { label: "Acessar a plataforma", href: "https://app.grupolivelab.com.br", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de serviço", href: "/termos-de-servico.html" },
      { label: "Política de privacidade", href: "/politicas.html" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Livelab"
              width={600}
              height={250}
              className="h-7 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[color:var(--muted-strong)]">
              A sala de controle para live commerce. Dados em tempo real,
              decisões enquanto a live acontece.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-[color:var(--muted-strong)] transition-colors hover:border-brand hover:text-brand"
            >
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="eyebrow">{col.title}</span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-[color:var(--muted-strong)] transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[color:var(--border)] pt-6">
          <p className="font-mono text-xs text-[color:var(--muted)]">
            © 2026 Grupo Livelab · Brasil
          </p>
        </div>
      </Container>
    </footer>
  );
}
