import type { Metadata, Viewport } from "next";
import "./bio.css";

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "LiveLab — Luz, Câmera e Vendas!",
  description:
    "Estrutura completa de Lives para sua empresa. Seja um franqueado ou apresentador LiveLab.",
  openGraph: {
    title: "LiveLab — Luz, Câmera e Vendas!",
    description: "Estrutura completa de Lives para sua empresa.",
    type: "website",
  },
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return <div className="bio-root">{children}</div>;
}
