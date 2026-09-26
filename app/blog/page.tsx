import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/landing/container";
import { SiteFooter } from "@/components/landing/site-footer";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: live commerce, TikTok Shop e vendas ao vivo | LiveLab",
  description:
    "O que a LiveLab aprende operando lives de marcas brasileiras: live commerce, TikTok Shop, apresentadores e o que faz uma live vender.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <main className="flex flex-1 flex-col bg-preto">
        <Container className="flex items-center justify-between pt-6 md:pt-9">
          <Link href="/" aria-label="LiveLab — início" className="text-gelo">
            <LivelabLogo className="h-7 w-auto md:h-9" />
          </Link>
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gelo/70">
            <span className="rec-dot" aria-hidden />
            Blog
          </p>
        </Container>

        <Container className="pb-20 pt-16 md:pb-28 md:pt-24">
          <h1 className="display max-w-[16ch] text-[clamp(2.75rem,5.4vw,5rem)] text-gelo">
            O que a gente aprende no <span className="serif-accent">ar</span>
            <span className="text-laranja">.</span>
          </h1>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-gelo/70 md:text-xl">
            Live commerce, TikTok Shop e o que faz uma live vender, contado por
            quem opera as cabines.
          </p>

          <ul className="mt-14 border-t border-gelo/15 md:mt-20">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gelo/15">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-8 md:grid-cols-[minmax(0,0.3fr)_minmax(0,1fr)_auto] md:items-center md:gap-10 md:py-10"
                >
                  <p className="text-sm text-gelo/55">
                    {formatDate(post.date)} · {post.readingMinutes} min
                  </p>
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-gelo transition-colors group-hover:text-laranja md:text-[2rem] md:leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-gelo/65 md:text-lg">
                      {post.description}
                    </p>
                  </div>
                  <span className="hidden h-11 w-11 place-items-center rounded-full border border-gelo/25 text-gelo transition-[background-color,border-color,color] group-hover:border-laranja group-hover:bg-laranja group-hover:text-preto md:grid">
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
