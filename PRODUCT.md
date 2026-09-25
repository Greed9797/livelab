# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Marcas e e-commerces** que querem vender em live e não têm estrutura para fazer isso de forma profissional. Chegam pela bio do Instagram, por anúncio ou por indicação, quase sempre no celular.
- **Potenciais franqueados**, que avaliam abrir uma unidade LiveLab.
- **Apresentadores(as)** que querem trabalhar vendendo ao vivo.

O contato acontece pelo WhatsApp. O site não tem checkout nem cadastro público na home.

## Product Purpose

A LiveLab é a primeira franquia de live commerce do Brasil. Nasceu em Blumenau, de uma dor real do mercado. O franqueado opera cabines de live commerce equipadas, atende marcas locais e fatura com receita fixa mais comissão sobre as vendas geradas. O modelo é compacto para abrir e escalável.

O site precisa fazer cada um dos três públicos achar a sua porta e abrir a conversa no WhatsApp.

## Positioning

Estrutura completa de live (cabine equipada, apresentador(a) profissional e playbook de vendas) para a marca vender ao vivo sem montar estúdio, entregue por uma rede de franquias. A home prioriza a **marca** como lead principal ("Quero vender em live"); a franquia é a porta secundária (faixa laranja #franquia). Decisão do cliente em 2026-09-25.

## Brand Commitments

Fonte: arquivo do Figma "Apresentação — Livelab" (gBhM8WiA5rq1wCRSJHWfe1).

- **Nome e wordmark:** "Livelab." O "Live" é grotesca pesada com o pingo do "i" em forma de play; o "l" de "lab" tem eixo inclinado; o ponto final laranja tem o mesmo diâmetro do círculo base. Versões aprovadas: branco sobre laranja, preto sobre branco gelo, branco sobre preto, empilhada.
- **Símbolo:** o círculo do REC com o play vazado (recorte, não triângulo sólido). Significa: gravando, transmitindo, ao vivo.
- **Paleta:** Preto #070707 (Black 6 C), Grafite #595959 (Cool Gray 11 C), Laranja #FE5105 (Orange 021 C), Branco Gelo #EFEFEF.
- **Personalidade:** bem mais moderna que tradicional, dinâmica e humana (mais humana que tecnológica), ousada com um pé no conservador, entre séria e descontraída, entre jovem e experiente.
- **Tipografia da marca:** Neue Haas Grotesk (via kit da Adobe Fonts) e Behind The Nineties Sans (arquivos licenciados pelo Leonardo). Até esses arquivos entrarem, o site usa Geist (UI e títulos) e Instrument Serif itálica (uma palavra de destaque). Não trocar por outra fonte aberta.
- **Elementos gráficos:** discos laranja (órbita de discos de vidro em 3D), círculos laranja grandes recortando fotos de produto, o ponto final.

## Evidence on Hand

- Vídeo real da cabine: `public/hero-loop.mp4` (poster em `public/bio/hero-poster.jpg`).
- Logos de clientes: `public/brands/` (Posthaus, Vernissage, Pokoloka, Bauny, Haag, Loja Mirante).
- Posts reais do Instagram da marca: `public/showcase/post-*.jpg`.
- Capturas de lives de clientes: `public/showcase/live-*.jpg` (Posthaus, Rovitex, Alto Calçados, Pure Up).
- Key visual da marca (órbita de discos): `public/brand/orbita-discos.jpg`, tirado do Figma.

Fatos confirmados pelo cliente em 2026-09-25 (podem ir para a copy):
- A marca recebe apresentador(a) LiveLab.
- Quem chama direto no WhatsApp também recebe diagnóstico gratuito com retorno em até 24h.
- "A 1ª franquia de live commerce do Brasil" pode ser usada.

Números e provas enviados pelo cliente em 2026-09-25 (no site):
- Operação acumulada até set/2026: 1.303 lives, 3.829 horas em live, R$ 1.231.504,78 de GMV, 30+ marcas.
- Rovitex: R$ 73,3 mil de GMV em 15–30 jun 2026, +485% vs. 30 mai–14 jun (Seller Center).
- Alto Calçados: R$ 126,79 mil em live na conta própria, R$ 371,37 mil de receita total da loja, 20 ago–4 set 2026 (Seller Center).
- Popô Baby: set/2026 parcial, R$ 79,8 mil de GMV (+311,82%), lives com 58,3% (~R$ 46,5 mil); top 6 da categoria roupas de bebê no TikTok Shop (Kalodata, 4–10 set 2026).
- Selo TikTok Shop Partner (declarado pelo cliente).
- Imprensa: Empreenda News, 30 jun 2026 (a matéria cita o Grupo W3 e a Joyn RH, não a marca LiveLab).
- Empresa: LIVELAB FRANCHISING LTDA, CNPJ 66.390.001/0001-06, R. Buenos Aires 145, Ponta Aguda, Blumenau/SC. Google Meu Negócio CID 5579591897828166736.

Números antigos sem fonte, removidos da home em 2026-09-25: R$ 2,4B de GMV, 12M de espectadores, 99,98% de uptime, "lives que faturam mais de R$ 50M/ano", "em 30 minutos", "três anos operando". Não voltar sem fonte primária. Também não usar "10x mais", "US$ 1 mi → 46 mi" nem estatísticas de mercado dos posts sem a fonte original.

Ainda sem resposta (não publicar até confirmar): preço ou modelo de cobrança, fidelidade, se precisa de TikTok Shop, segmentos atendidos, prazo até a primeira live, cidade de origem e sede (Blumenau × Erechim/RS, no CNPJ), investimento, território e suporte da franquia (Lei 13.966/2019: número publicado tem que bater com a COF).

## Capabilities and Constraints

- Contato pelo WhatsApp: número único em `WHATSAPP_PHONE` (`lib/contact.ts`). Todos os botões, da home e da bio, vão para esse número (decisão de 2026-09-25: não separar por público). As mensagens da home começam com "Oi! Vi o site…" para separar a origem. As mensagens da bio e o número não mudam sem pedido.
- A página `/bio` (link da bio do Instagram) tem estado aprovado: título em três linhas "Luz, / Câmera / Vendas!", três portas numeradas 01–03, rodapé "Grupo LiveLab". Não reverter.
- `/bio/cliente`, `/bio/franqueado`, `/bio/apresentador` e `/bio/admin` ficam fora de redesign.
- Push na `main` publica pela Vercel. O domínio certo é o `www`.

## Product Principles

1. Toda página termina numa conversa de WhatsApp. O caminho até ela é curto e óbvio.
2. Mostrar a live acontecendo (a cabine, o apresentador, o produto) vale mais que descrever.
3. A marca aparece inteira: wordmark oficial, símbolo, paleta exata. Nunca uma aproximação.
4. Nenhum número ou cliente é inventado.

## Accessibility & Inclusion

- WCAG AA de contraste. Branco sobre o laranja #FE5105 fica em 2,9:1: texto sobre laranja é sempre preto.
- Respeitar `prefers-reduced-motion` (marquees e autoplay param).
