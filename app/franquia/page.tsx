import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MapPin, Store, Users, Wallet } from "lucide-react";
import { Container } from "@/components/landing/container";
import { Button } from "@/components/landing/button";
import { HeroVideo } from "@/components/landing/hero-video";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Faq } from "@/components/landing/faq";
import { Founders, FOUNDERS } from "@/components/landing/founders";
import { ProofNumbers } from "@/components/landing/proof-numbers";
import { Cases } from "@/components/landing/cases";
import { SiteFooter } from "@/components/landing/site-footer";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { LivelabSymbol, PlayGlyph } from "@/components/brand/livelab-symbol";
import { COMPANY } from "@/lib/company";
import {
  WHATSAPP_FRANCHISE_INVEST_URL,
  WHATSAPP_FRANCHISE_URL,
} from "@/lib/contact";
import { siteUrlString } from "@/lib/site-config";

const TITLE = "Franquia de live commerce: abra uma LiveLab na sua cidade";
const DESCRIPTION =
  "A 1ª franquia de live commerce do Brasil. Você opera cabines equipadas, atende marcas locais e fatura receita fixa mais comissão sobre as vendas. Fale com a equipe no WhatsApp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/franquia" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/franquia",
    type: "website",
    siteName: "LiveLab",
    locale: "pt_BR",
  },
};

// Sem número de investimento, payback ou faturamento: a Lei 13.966/2019 exige que qualquer
// valor publicado bata com a COF, e ela é entregue na conversa. O modelo, o perfil e as etapas bastam.
const MODEL = [
  {
    icon: Store,
    title: "A cabine",
    description:
      "Você opera cabines de live commerce equipadas: luz, câmera, cenário e transmissão prontas.",
  },
  {
    icon: Users,
    title: "As marcas",
    description:
      "Atende marcas e e-commerces da sua região que querem vender em live e não têm estrutura.",
  },
  {
    icon: Wallet,
    title: "A receita",
    description:
      "Fatura com receita fixa por marca atendida mais comissão sobre as vendas geradas nas lives.",
  },
];

const DELIVERABLES = [
  "Projeto e equipamento da cabine",
  "Formação de apresentadores(as)",
  "Playbook de vendas validado",
  "Estratégias de marketing para captar marcas",
  "Operação dentro do TikTok Shop, com a LiveLab como TikTok Shop Partner",
  "Acompanhamento da central em Blumenau",
];

const PROFILE = [
  {
    icon: MapPin,
    title: "Uma cidade sem LiveLab",
    description: "Cada unidade atende as marcas da própria região. Você é o pioneiro na sua praça.",
  },
  {
    icon: Store,
    title: "Um espaço para a cabine",
    description: "Sala comercial ou espaço próprio. Se ainda não tem, a equipe orienta o que procurar.",
  },
  {
    icon: Users,
    title: "Vontade de operar",
    description: "Dá para começar sozinho ou com sócio. O que não dá é ficar longe da operação no início.",
  },
];

const STEPS = [
  {
    title: "Chame no WhatsApp",
    description: "Conte em qual cidade quer abrir e o que você faz hoje.",
  },
  {
    title: "Conheça o modelo",
    description:
      "Conversa com a equipe de expansão: como a unidade opera, o que está incluso e o investimento.",
  },
  {
    title: "Receba a COF",
    description:
      "A Circular de Oferta de Franquia, com todos os números, chega antes de qualquer assinatura.",
  },
  {
    title: "Abra a sua LiveLab",
    description: "Cabine montada, equipe formada e as primeiras marcas da sua cidade no ar.",
  },
];

const QUESTIONS = [
  {
    q: "Quanto custa abrir uma LiveLab?",
    a: "O investimento e as condições estão na Circular de Oferta de Franquia (COF), que a equipe apresenta na conversa e entrega antes de qualquer assinatura. Chame no WhatsApp e peça a COF.",
  },
  {
    q: "Preciso entender de live ou de TikTok?",
    a: "Não. A LiveLab forma os apresentadores e entrega o playbook de vendas. Você cuida da operação e do relacionamento com as marcas da sua cidade.",
  },
  {
    q: "Quem apresenta as lives na minha unidade?",
    a: "Apresentadores(as) formados pela LiveLab. A seleção e a formação fazem parte do modelo.",
  },
  {
    q: "Preciso ter um ponto comercial?",
    a: "Precisa de um espaço para a cabine. Pode ser sala comercial ou espaço próprio; a equipe orienta o que procurar.",
  },
  {
    q: "Como a unidade fatura?",
    a: "Receita fixa por marca atendida mais comissão sobre as vendas geradas nas lives. Os detalhes estão na COF.",
  },
  {
    q: "Minha cidade já tem LiveLab?",
    a: "Mande sua cidade no WhatsApp e a equipe confirma a disponibilidade da praça.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrlString}/franquia`,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrlString}/#empresa` },
    about: {
      "@type": "Organization",
      "@id": `${siteUrlString}/#empresa`,
      name: COMPANY.brand,
      founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

function Ctas() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      <Button href={WHATSAPP_FRANCHISE_URL} target="_blank" rel="noopener noreferrer" size="lg">
        Quero abrir uma LiveLab
        <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Button>
      <Button
        href={WHATSAPP_FRANCHISE_INVEST_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="lg"
      >
        Quero entender o investimento
        <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Button>
    </div>
  );
}

export default function FranquiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="top" className="flex flex-1 flex-col">
        {/* Hero: mesmo palco da home, com o disco laranja atrás do círculo do REC. */}
        <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-preto">
          <Container className="relative z-20 flex items-center justify-between pt-6 md:pt-9">
            <Link href="/" aria-label="LiveLab — início" className="text-gelo">
              <LivelabLogo className="h-7 w-auto md:h-9" />
            </Link>
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gelo/70">
              <span className="rec-dot" aria-hidden />
              Franquia
            </p>
          </Container>

          <Container className="relative z-10 grid flex-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:py-16">
            <div className="flex flex-col items-start gap-8 md:gap-10">
              <h1 className="display text-[clamp(2.75rem,5.4vw,5rem)] text-gelo">
                Abra a 1ª franquia de live commerce do Brasil na sua{" "}
                <span className="serif-accent">cidade</span>
                <span className="text-laranja">.</span>
              </h1>

              <p className="max-w-[34rem] text-lg leading-relaxed text-gelo/70 md:text-xl">
                Você opera cabines equipadas, atende as marcas da sua região e
                fatura com receita fixa mais comissão sobre as vendas. A LiveLab
                entra com o modelo, a formação e o playbook.
              </p>

              <Ctas />

              <div className="flex flex-col gap-3 text-sm text-gelo/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <p className="inline-flex items-center gap-2 font-semibold text-gelo">
                  <BadgeCheck className="h-4 w-4 text-laranja" aria-hidden />
                  TikTok Shop Partner
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-laranja" aria-hidden />
                  Central em Blumenau, unidades em todo o Brasil
                </p>
              </div>
            </div>

            <div
              aria-hidden
              className="relative order-first mx-auto mb-[calc(min(80vw,24rem)*0.13)] aspect-square w-[min(80vw,24rem)] md:mb-[calc(min(60vw,28rem)*0.13)] md:w-[min(60vw,28rem)] lg:order-none lg:mb-0 lg:w-full lg:max-w-[34rem] lg:justify-self-end"
            >
              <div className="disc-slide absolute inset-0 rounded-full bg-laranja [--disc-x:-15%] [--disc-y:13%] lg:max-xl:[--disc-x:0%]" />
              <div className="rec-open absolute inset-0 overflow-hidden rounded-full bg-grafite">
                <HeroVideo />
              </div>
              <LivelabSymbol className="absolute -right-[3%] top-[6%] w-[24%] text-laranja" />
            </div>
          </Container>
        </section>

        {/* A rede que o franqueado entra: os mesmos números ao vivo da home. */}
        <ProofNumbers />

        {/* O modelo, em três partes. */}
        <section id="modelo" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
          <Container>
            <h2 className="display max-w-[18ch] text-[clamp(2.25rem,4.4vw,3.75rem)]">
              Um negócio de três <span className="serif-accent">partes</span>
              <span className="text-laranja">.</span>
            </h2>
            <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
              {MODEL.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col gap-5 rounded-[1.25rem] border border-preto/15 bg-white/60 p-6 md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-laranja text-preto">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="text-2xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="text-base leading-relaxed text-preto/70 md:text-lg">{description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
              <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)]">
                O que o franqueado <span className="serif-accent">recebe</span>
                <span className="text-laranja">.</span>
              </h3>
              <ul className="border-t border-preto/15">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-preto/15 py-5 text-lg md:text-xl">
                    <span className="h-2 w-2 flex-none rounded-full bg-laranja" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Perfil: pré-qualifica antes do clique. */}
        <section id="perfil" className="border-t border-preto/15 bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
          <Container>
            <h2 className="display max-w-[18ch] text-[clamp(2.25rem,4.4vw,3.75rem)]">
              Pra quem é a <span className="serif-accent">LiveLab</span>
              <span className="text-laranja">.</span>
            </h2>
            <ul className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
              {PROFILE.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col gap-4 border-t border-preto/15 pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-laranja text-preto">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="text-2xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="max-w-[30ch] text-base leading-relaxed text-preto/70 md:text-lg">{description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <HowItWorks
          id="etapas"
          title={
            <>
              Quatro passos até a sua <span className="serif-accent">unidade</span>
              <span className="text-laranja">.</span>
            </>
          }
          steps={STEPS}
          cta={{ text: "Quero abrir uma LiveLab", href: WHATSAPP_FRANCHISE_URL }}
        />

        {/* A demanda que a cabine atende: os cases das marcas. */}
        <section id="demanda" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
          <Container>
            <h2 className="display max-w-[20ch] text-[clamp(2.25rem,4.4vw,3.75rem)]">
              O que as marcas da sua cidade vão <span className="serif-accent">ver</span>
              <span className="text-laranja">.</span>
            </h2>
            <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-preto/70">
              Resultados de marcas que já operam com a LiveLab. É a prova que a sua
              unidade leva para a primeira reunião.
            </p>
            <div className="mt-10 md:mt-14">
              <Cases />
            </div>
          </Container>
        </section>

        <Founders />

        <Faq
          id="perguntas-franquia"
          title={
            <>
              O que futuros franqueados <span className="serif-accent">perguntam</span>
              <span className="text-laranja">.</span>
            </>
          }
          questions={QUESTIONS}
        />

        {/* CTA final: a órbita de discos da capa da marca. */}
        <section id="contato" className="relative isolate overflow-hidden bg-preto pb-20 md:pb-28">
          <div className="relative flex h-[130vw] items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)] md:h-[min(56vw,780px)]">
            <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[200vw] -translate-x-1/2 -translate-y-1/2 md:w-[min(100vw,1440px)]">
              <Image src="/brand/orbita-discos.jpg" alt="" fill sizes="(max-width: 768px) 200vw, 1440px" className="object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(7,7,7,0.82)_0%,rgba(7,7,7,0.55)_32%,rgba(7,7,7,0)_60%)]" />
            </div>
            <h2 className="display relative max-w-[13ch] px-6 text-center text-[clamp(2.25rem,4.2vw,3.75rem)] text-gelo">
              A cabine está pronta. Falta o seu <span className="serif-accent">nome</span>
              <span className="text-laranja">.</span>
            </h2>
          </div>
          <Container className="relative flex flex-col items-center gap-9 text-center">
            <p className="max-w-2xl text-lg leading-relaxed text-gelo/65 md:text-xl">
              Conte no WhatsApp em qual cidade quer abrir. A equipe de expansão
              responde com os próximos passos e a COF.
            </p>
            <Ctas />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
