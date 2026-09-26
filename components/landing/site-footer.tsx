import { MessageCircle } from "lucide-react";
import { Container } from "./container";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { COMPANY, COMPANY_ADDRESS_LINE, SOCIAL } from "@/lib/company";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_FRANCHISE_URL,
  WHATSAPP_SALES_URL,
  WHATSAPP_URL,
} from "@/lib/contact";

const COLUMNS = [
  {
    title: "Explorar",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Clientes", href: "#clientes" },
      { label: "Franquia", href: "/franquia" },
      { label: "Blog", href: "/blog" },
      { label: "Acessar a plataforma", href: "https://app.grupolivelab.com.br", external: true },
    ],
  },
  {
    title: "Fale com a gente",
    links: [
      { label: "Quero vender em live", href: WHATSAPP_SALES_URL, external: true },
      { label: "Quero abrir uma LiveLab", href: WHATSAPP_FRANCHISE_URL, external: true },
      { label: "Quero apresentar produtos", href: "/bio/apresentador" },
      { label: COMPANY.email, href: `mailto:${COMPANY.email}` },
      { label: `Instagram ${SOCIAL.instagramHandle}`, href: SOCIAL.instagram, external: true },
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
    <footer className="border-t border-gelo/10 bg-preto pb-8 pt-16 md:pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-5">
            <LivelabLogo className="h-auto w-32 text-gelo" />
            <p className="max-w-xs text-sm leading-relaxed text-gelo/65">
              Estrutura completa de live pra sua marca vender. A 1ª franquia
              de live commerce do Brasil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gelo/20 px-4 py-2.5 text-sm font-medium text-gelo/80 transition-colors hover:border-laranja hover:text-laranja"
            >
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex min-w-0 flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gelo/50">
                {col.title}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-gelo/75 transition-colors [overflow-wrap:anywhere] hover:text-laranja"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-start gap-2.5 border-t border-gelo/10 pt-6">
          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-laranja" aria-hidden />
          <p className="text-xs leading-relaxed text-gelo/55">
            © 2026 {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
            <br />
            {COMPANY_ADDRESS_LINE}
          </p>
        </div>
      </Container>
    </footer>
  );
}
