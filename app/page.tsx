import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { MarqueeShowcase } from "@/components/landing/marquee-showcase";
import { Testimonial } from "@/components/landing/testimonial";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Faq } from "@/components/landing/faq";
import { WhereWeAre } from "@/components/landing/where-we-are";
import { COMPANY } from "@/lib/company";
import { CtaBand } from "@/components/landing/cta-band";
import { SiteFooter } from "@/components/landing/site-footer";
import { siteUrlString } from "@/lib/site-config";

// ponytail: sameAs/Google Business entram quando o cliente mandar os links.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrlString}/#empresa`,
    name: COMPANY.brand,
    legalName: COMPANY.legalName,
    taxID: COMPANY.cnpj,
    foundingDate: COMPANY.foundingDate,
    url: siteUrlString,
    logo: `${siteUrlString}/logo.png`,
    image: `${siteUrlString}/opengraph-image`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    description:
      "A 1ª franquia de live commerce do Brasil. Estrutura completa de live (cabine, apresentadores e playbook de vendas) para marcas venderem ao vivo.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      availableLanguage: "pt-BR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.brand,
    url: siteUrlString,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrlString}/#empresa` },
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
        <WhereWeAre />
      </main>
      <SiteFooter />
    </>
  );
}
