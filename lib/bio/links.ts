import { WHATSAPP_PHONE } from "@/lib/contact";

export interface LinkItem {
  id: string;
  number: string;
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
    offer: "Quero vender em live",
    href: whatsapp("Quero vender com a LiveLab."),
    accent: true,
  },
  {
    id: "franquia",
    number: "02",
    offer: "Quero abrir uma LiveLab",
    href: whatsapp("Quero abrir uma LiveLab."),
  },
  {
    id: "apresentador",
    number: "03",
    offer: "Quero apresentar produtos",
    href: whatsapp("Quero ser apresentador(a) LiveLab."),
  },
];
