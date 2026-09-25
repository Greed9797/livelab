import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { MarqueeShowcase } from "@/components/landing/marquee-showcase";
import { Testimonial } from "@/components/landing/testimonial";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Faq } from "@/components/landing/faq";
import { CtaBand } from "@/components/landing/cta-band";
import { SiteFooter } from "@/components/landing/site-footer";
import { siteUrlString } from "@/lib/site-config";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LiveLab",
    url: siteUrlString,
    logo: `${siteUrlString}/logo.png`,
    description:
      "A 1ª franquia de live commerce do Brasil. Estrutura completa de live (cabine, apresentadores e playbook de vendas) para marcas venderem ao vivo.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LiveLab",
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
        <HowItWorks />
        <Testimonial />
        <Faq />
        <MarqueeShowcase />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
