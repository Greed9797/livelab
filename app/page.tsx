import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { ProductPreview } from "@/components/landing/product-preview";
import { MarqueeShowcase } from "@/components/landing/marquee-showcase";
import { Stats } from "@/components/landing/stats";
import { Testimonial } from "@/components/landing/testimonial";
import { CtaBand } from "@/components/landing/cta-band";
import { SiteFooter } from "@/components/landing/site-footer";
import { siteUrlString } from "@/lib/site-config";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Livelab",
    url: siteUrlString,
    logo: `${siteUrlString}/logo.png`,
    description:
      "Sala de controle para live commerce com audiência, engajamento e vendas em tempo real.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Livelab",
    url: siteUrlString,
    inLanguage: "pt-BR",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <LogoCloud />
        <Features />
        <ProductPreview />
        <MarqueeShowcase />
        <Stats />
        <Testimonial />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
