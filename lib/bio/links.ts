export interface LinkItem {
  id: string;
  number: string;
  label: string;
  offer: string;
  href: string;
  accent?: boolean;
}

export const links: LinkItem[] = [
  {
    id: "empresa",
    number: "01",
    label: "Empresa",
    offer: "Estrutura completa de lives para a sua empresa",
    href: "/bio/cliente",
    accent: true,
  },
  {
    id: "franquia",
    number: "02",
    label: "Franquia",
    offer: "Seja franqueado LiveLab na sua cidade",
    href: "/bio/franqueado",
  },
  {
    id: "apresentador",
    number: "03",
    label: "Apresentador",
    offer: "Quero me tornar apresentador(a)",
    href: "/bio/apresentador",
  },
];
