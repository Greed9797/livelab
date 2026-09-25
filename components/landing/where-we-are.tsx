import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "./container";
import { COMPANY, MAPS_EMBED_URL, MAPS_URL } from "@/lib/company";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhereWeAre() {
  const { address } = COMPANY;
  const items = [
    {
      icon: MapPin,
      label: "Endereço",
      value: (
        <>
          {address.street}
          <br />
          {address.district}, {address.city}/{address.state}
          <br />
          CEP {address.postalCode}
        </>
      ),
      href: MAPS_URL,
      cta: "Ver no Google Maps",
    },
    { icon: Mail, label: "E-mail", value: COMPANY.email, href: `mailto:${COMPANY.email}`, cta: "Enviar e-mail" },
    { icon: MessageCircle, label: "WhatsApp", value: COMPANY.phoneDisplay, href: WHATSAPP_URL, cta: "Chamar no WhatsApp" },
  ];

  return (
    <section id="onde-estamos" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)]">
            A LiveLab nasceu em <span className="serif-accent">Blumenau</span>
            <span className="text-laranja">.</span>
          </h2>
          <ul className="mt-10 border-t border-preto/15">
            {items.map(({ icon: Icon, label, value, href, cta }) => (
              <li key={label} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-b border-preto/15 py-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-laranja text-preto">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-preto/60">{label}</p>
                  <p className="mt-1 text-lg leading-snug">{value}</p>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 hover:text-laranja"
                  >
                    {cta}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-preto/65">
            {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
          </p>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-preto lg:min-h-full">
          <iframe
            title={`Mapa: ${address.street}, ${address.city}/${address.state}`}
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 [filter:grayscale(0.75)]"
          />
        </div>
      </Container>
    </section>
  );
}
