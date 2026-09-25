import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Só o itálico: é o único papel da serif até a Behind The Nineties licenciada entrar.
// Carregar o arquivo itálico evita o oblíquo sintético (romano tombado pelo navegador).
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Live commerce pra sua marca vender ao vivo | LiveLab",
  description:
    "Cabine equipada, apresentadores e playbook de vendas pra sua marca vender em live sem montar estúdio. A 1ª franquia de live commerce do Brasil.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sua marca vende em live sem montar estúdio | LiveLab",
    description:
      "Cabine, apresentadores e playbook pra sua marca vender em live. Fale com a LiveLab no WhatsApp.",
    locale: "pt_BR",
    type: "website",
    url: "/",
    siteName: "LiveLab",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LiveLab: sua marca vende em live sem montar estúdio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua marca vende em live sem montar estúdio | LiveLab",
    description:
      "Cabine, apresentadores e playbook pra sua marca vender em live. Fale com a LiveLab no WhatsApp.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
