import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { ProductPreview } from "@/components/landing/product-preview";
import { Stats } from "@/components/landing/stats";
import { Testimonial } from "@/components/landing/testimonial";
import { CtaBand } from "@/components/landing/cta-band";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <LogoCloud />
        <Features />
        <ProductPreview />
        <Stats />
        <Testimonial />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
