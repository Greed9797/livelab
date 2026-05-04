export type Part = { text: string; bold?: boolean };

export interface LinkItem {
  id: string;
  href: string;
  parts: Part[];
}

export const links: LinkItem[] = [
  {
    id: "estrutura",
    href: "/bio/cliente",
    parts: [
      { text: "Estrutura completa", bold: true },
      { text: " de " },
      { text: "Lives", bold: true },
      { text: " para sua empresa" },
    ],
  },
  {
    id: "franqueado",
    href: "/bio/franqueado",
    parts: [
      { text: "Seja um " },
      { text: "franqueado", bold: true },
      { text: " Livelab na sua cidade" },
    ],
  },
  {
    id: "apresentador",
    href: "/bio/apresentador",
    parts: [
      { text: "Quero me tornar " },
      { text: "apresentador(a)!", bold: true },
    ],
  },
];
