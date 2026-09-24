import { WHATSAPP_PHONE } from "@/lib/contact";

export interface LinkItem {
  id: string;
  number: string;
  label: string;
  offer: string;
  href: string;
  accent?: boolean;
}

function whatsapp(text: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_PHONE}`);
  url.searchParams.set("text", text);
  return url.toString();
}

export const links: LinkItem[] = [
  {
    id: "empresa",
    number: "01",
    label: "Empresa",
    offer: "Estrutura completa de lives para a sua empresa",
    href: whatsapp("Quero vender com a LiveLab."),
    accent: true,
  },
  {
    id: "franquia",
    number: "02",
    label: "Franquia",
    offer: "Seja franqueado LiveLab na sua cidade",
    href: whatsapp("Quero abrir uma LiveLab."),
  },
  {
    id: "apresentador",
    number: "03",
    label: "Apresentador",
    offer: "Quero me tornar apresentador(a)",
    href: whatsapp("Quero ser apresentador(a) LiveLab."),
  },
];
