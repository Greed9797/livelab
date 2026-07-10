import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Livelab — Inteligência para lives que vendem",
  description:
    "Livelab é a sala de controle para live commerce: audiência, engajamento e vendas em tempo real, enquanto a live ainda está no ar.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Livelab — Inteligência para lives que vendem",
    description:
      "A sala de controle para live commerce. Audiência, engajamento e vendas em tempo real.",
    locale: "pt_BR",
    type: "website",
    url: "/",
    siteName: "Livelab",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Livelab — inteligência para lives que vendem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Livelab — Inteligência para lives que vendem",
    description:
      "A sala de controle para live commerce. Audiência, engajamento e vendas em tempo real.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
