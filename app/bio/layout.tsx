import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./bio.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-playfair",
  display: "swap",
});

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
  return (
    <div
      className={`${inter.variable} ${playfair.variable} bio-root`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
