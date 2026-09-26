import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Button } from "@/components/landing/button";
import { SiteFooter } from "@/components/landing/site-footer";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { PlayGlyph } from "@/components/brand/livelab-symbol";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { COMPANY } from "@/lib/company";
import { WHATSAPP_SALES_URL } from "@/lib/contact";
import { siteUrlString } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | LiveLab`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
      siteName: "LiveLab",
      locale: "pt_BR",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: post.author, "@id": `${siteUrlString}/#empresa` },
    publisher: { "@type": "Organization", name: COMPANY.brand, "@id": `${siteUrlString}/#empresa` },
    mainEntityOfPage: `${siteUrlString}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-1 flex-col bg-preto">
        <Container className="flex items-center justify-between pt-6 md:pt-9">
          <Link href="/" aria-label="LiveLab — início" className="text-gelo">
            <LivelabLogo className="h-7 w-auto md:h-9" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gelo/70 transition-colors hover:text-gelo"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Blog
          </Link>
        </Container>

        <article className="pb-20 pt-16 md:pb-28 md:pt-24">
          <Container className="max-w-[52rem]">
            <p className="text-sm text-gelo/55">
              {formatDate(post.date)} · {post.readingMinutes} min de leitura · {post.author}
            </p>
            <h1 className="display mt-5 text-[clamp(2.25rem,4.8vw,4rem)] text-gelo">{post.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-gelo/70 md:text-xl">{post.description}</p>

            <div
              className="prose-post mt-12 border-t border-gelo/15 pt-10"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-16 flex flex-col gap-5 rounded-[1.25rem] bg-gelo p-7 text-preto [--focus:var(--preto)] md:p-9">
              <p className="display text-[clamp(1.5rem,2.4vw,2rem)]">
                Quer colocar sua marca em <span className="serif-accent">live</span>
                <span className="text-laranja">?</span>
              </p>
              <p className="max-w-[40rem] text-base leading-relaxed text-preto/70 md:text-lg">
                Cabine equipada, apresentador(a) profissional e playbook de vendas.
                Diagnóstico gratuito da sua operação, com retorno em até 24h.
              </p>
              <Button href={WHATSAPP_SALES_URL} target="_blank" rel="noopener noreferrer" size="lg" className="w-full sm:w-fit">
                Quero vender em live
                <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </Container>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
