import { Container } from "./container";
import { LivelabLogo } from "@/components/brand/livelab-logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.5 3.5A2 2 0 1 1 4.5 7.5 2 2 0 0 1 4.5 3.5ZM3 9h3v11H3V9Zm5 0h2.9v1.5h.04c.4-.76 1.4-1.57 2.88-1.57 3.08 0 3.65 2.03 3.65 4.66V20h-3v-5.2c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.98 1.34-1.98 2.74V20H8V9Z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8Zm-11.6 7.8V9l5.2 3-5.2 3Z"/>
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Sala de controle", href: "#produto" },
      { label: "Recursos", href: "#recursos" },
      { label: "Integrações", href: "#integracoes" },
      { label: "Preços", href: "#precos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Clientes", href: "#clientes" },
      { label: "Carreira", href: "#carreira" },
      { label: "Contato", href: "mailto:contato@livelab.com.br" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de serviço", href: "/termos-de-servico.html" },
      { label: "Política de privacidade", href: "/politicas.html" },
      { label: "LGPD", href: "#lgpd" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-6">
            <LivelabLogo className="h-7" />
            <p className="max-w-xs text-sm leading-relaxed text-[color:var(--muted-strong)]">
              A sala de controle para live commerce brasileiro. Dados em
              tempo real, decisões enquanto a live acontece.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted-strong)] transition-colors hover:border-foreground hover:text-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted-strong)] transition-colors hover:border-foreground hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted-strong)] transition-colors hover:border-foreground hover:text-foreground"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="eyebrow">{col.title}</span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--border)] pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs text-[color:var(--muted)]">
            © 2026 Livelab · CNPJ em breve · São Paulo, Brasil
          </p>
          <p className="font-mono text-xs text-[color:var(--muted)]">
            feito com{" "}
            <span className="text-brand">●</span> entre lives reais
          </p>
        </div>
      </Container>
    </footer>
  );
}
