---
name: LiveLab
description: A apresentação da marca em movimento — palco preto, o círculo do REC como forma, o laranja como luz.
colors:
  laranja: "#FE5105"
  preto: "#070707"
  gelo: "#EFEFEF"
  grafite: "#595959"
  gelo-muted: "rgba(239, 239, 239, 0.7)"
  preto-muted: "rgba(7, 7, 7, 0.7)"
  rule-on-preto: "rgba(239, 239, 239, 0.15)"
  rule-on-gelo: "rgba(7, 7, 7, 0.15)"
  bio-faint: "#8C8C8C"
typography:
  display:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
  accent:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontWeight: 400
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  question:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  button:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  pill: "9999px"
  photo: "16px"
  photo-lg: "24px"
  none: "0px"
spacing:
  gutter: "24px"
  gutter-md: "40px"
  stack-xs: "12px"
  stack: "32px"
  stack-lg: "48px"
  section: "80px"
  section-md: "112px"
components:
  button-primary:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.preto}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-primary-hover:
    backgroundColor: "{colors.gelo}"
    textColor: "{colors.preto}"
  button-primary-md:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.preto}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  button-outline:
    textColor: "{colors.gelo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-outline-hover:
    backgroundColor: "{colors.gelo}"
    textColor: "{colors.preto}"
  button-ink:
    backgroundColor: "{colors.preto}"
    textColor: "{colors.gelo}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-ink-hover:
    backgroundColor: "{colors.gelo}"
    textColor: "{colors.preto}"
  button-outline-ink:
    textColor: "{colors.preto}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-outline-ink-hover:
    backgroundColor: "{colors.preto}"
    textColor: "{colors.gelo}"
  icon-disc:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.preto}"
    rounded: "{rounded.pill}"
    size: "48px"
  icon-button:
    textColor: "{colors.preto}"
    rounded: "{rounded.pill}"
    size: "48px"
  icon-button-hover:
    backgroundColor: "{colors.preto}"
    textColor: "{colors.gelo}"
  faq-indicator:
    textColor: "{colors.gelo}"
    rounded: "{rounded.pill}"
    size: "40px"
  faq-indicator-open:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.preto}"
  step-number:
    textColor: "{colors.laranja}"
    typography: "{typography.numeral}"
  rec-dot:
    backgroundColor: "{colors.laranja}"
    rounded: "{rounded.pill}"
    size: "10px"
  rec-label:
    textColor: "{colors.gelo-muted}"
    typography: "{typography.label}"
---

# Design System: LiveLab

## Overview

**Creative North Star: "O Deck em Movimento"**

A home é a apresentação da marca (Figma "Apresentação — Livelab", `gBhM8WiA5rq1wCRSJHWfe1`) posta para andar: um palco preto onde o círculo do REC organiza a composição e o laranja entra como luz, em campo cheio, em disco, em pílula e no ponto final. Densidade baixa, títulos enormes em grotesca bold apertada, uma palavra por título em serif itálica, e prova real (a cabine gravando, posts da marca, lives de clientes, logos) no lugar de ilustração.

O sistema recusa dois mundos, ambos confirmados: o editorial creme com serif da versão anterior e o dark-SaaS genérico com brilho neon, glow e vidro fosco. Profundidade vem de campos de cor que trocam de borda a borda e de círculos sobrepostos, não de sombra.

Escopo: home (`app/page.tsx`, `components/landing/*`, `components/ui/hero-3.tsx`, `components/ui/animated-testimonials.tsx`), marca (`components/brand/*`), imagem OG (`app/opengraph-image.tsx`), tokens globais (`app/globals.css`) e a paleta do `/bio` (`app/bio/bio.css`). `/bio/cliente`, `/bio/franqueado`, `/bio/apresentador` e `/bio/admin` ficam fora: mantêm o estilo legado e não se redesenham a partir deste arquivo.

**Key Characteristics:**
- Preto dominante; campos cheios de Laranja e Branco Gelo alternando por faixa inteira.
- O círculo como forma-mãe: ponto do REC, símbolo com play vazado, disco laranja, órbita de discos.
- Geist Bold apertado + uma palavra em Instrument Serif itálica + ponto final laranja.
- Pílulas laranja com texto preto e o play da marca como ícone de CTA.
- Um movimento autoral (a abertura do REC), marquees contínuos, e tudo parado sob `prefers-reduced-motion`.

## Colors

Paleta oficial de quatro cores (Pantone na origem): Preto domina, Laranja é a única cor quente e age como luz; nenhum outro matiz entra.

### Primary
- **Laranja Luz** (Laranja, Pantone Orange 021 C): campo cheio da faixa da franquia; pílula do CTA principal; disco atrás do círculo do REC; símbolo; disco de ícone; indicador do FAQ aberto; ponto do REC e marcadores; seleção de texto; anel de foco sobre preto. Como cor de texto, só o ponto final dos títulos, os números de passo 01–03, o `!` do /bio e o hover de links (rodapé, link da franquia no CTA final).

### Neutral
- **Preto Palco** (Preto, Pantone Black 6 C): fundo dominante (hero, logos, como funciona, FAQ, CTA final, rodapé, /bio); texto e botão sobre Laranja e Gelo.
- **Branco Gelo** (Gelo): texto sobre Preto (17,5:1); campos cheios de Recursos e Clientes.
- **Grafite** (Grafite, Pantone Cool Gray 11 C): estrutural. No build aparece como trilho do scrollbar e como preenchimento do círculo do REC enquanto o vídeo carrega. Divergência com a direção: as réguas não usam Grafite, e sim Gelo ou Preto translúcidos (abaixo). Nunca texto sobre Preto (2,9:1).
- **Gelo Secundário** (gelo-muted, Gelo a 70%): texto de apoio sobre Preto (subtítulo do hero, respostas do FAQ, links terciários). Degraus usados no build: 75% (links do rodapé), 65–60% (descrição dos passos, parágrafo do CTA, legendas, prova), 55% (copyright), 50% (rótulos do rodapé). Todos passam AA.
- **Preto Secundário** (preto-muted, Preto a 70%): texto de apoio sobre Gelo; 80% sobre Laranja.
- **Régua sobre Preto** (rule-on-preto, Gelo a 15%): réguas dos passos e do FAQ. Divisórias de seção e rodapé descem a 10%; o /bio usa 14%; o contorno do indicador do FAQ usa 25%.
- **Régua sobre Gelo** (rule-on-gelo, Preto a 15%): réguas da lista de recursos.
- **Cinza Legenda do /bio** (bio-faint): números das portas e rodapé do `/bio`. Cinza escopado ao /bio; não vai para a home.

### Named Rules
**Regra do Texto Preto no Laranja.** Sobre Laranja todo texto e ícone é Preto (6,1:1). Gelo sobre Laranja dá 2,9:1 e reprova.

**Regra dos Campos Cheios.** A cor troca por faixa inteira, de borda a borda: Preto (hero, logos) → Gelo (recursos) → Preto (como funciona) → Gelo (clientes) → Preto (FAQ) → Laranja (franquia) → Preto (CTA final, rodapé). Laranja só aparece como campo, círculo, pílula, pontuação ou número de passo; nunca como card flutuando no preto.

**Regra do Foco que Inverte.** Em campo Gelo ou Laranja a seção redefine `--focus` para Preto; o anel Laranja só vale sobre Preto.

## Typography

**Display Font:** Geist (com "Helvetica Neue", Helvetica, Arial)
**Body Font:** Geist
**Accent Font:** Instrument Serif, só itálico 400 (com "Times New Roman")

**Character:** Grotesca pesada e apertada fazendo a voz da marca, com uma palavra em serif itálica fazendo o papel do "l" inclinado do wordmark. Ambas são substitutas provisórias: Geist ocupa o lugar da Neue Haas Grotesk (kit Adobe Fonts) e Instrument Serif itálica o da Behind The Nineties Sans (arquivos licenciados pendentes).

### Hierarchy
- **Display** (700, clamp(2.75rem, 5.4vw, 5rem), 0.94, -0.04em, `text-wrap: balance`): h1 do hero. A faixa da franquia usa a mesma voz maior (clamp(2.75rem, 7vw, 6rem)), única exceção.
- **Headline** (700, clamp(2.25rem, 4.4vw, 3.75rem), 0.94): h2 de seção (recursos, como funciona, clientes, FAQ, órbita do CTA).
- **Numeral** (700, 3rem, 1, algarismos tabulares): números de passo 01–03 em Laranja. O nome do cliente na pilha usa a mesma voz, subindo a 4.5rem no desktop.
- **Title** (700, 1.5rem → 2rem, 1.25, -0.03em): título de item em recursos; 1.5rem fixo nos passos.
- **Question** (600, 1.125rem → 1.25rem, 1.4, -0.02em): pergunta do FAQ.
- **Body large** (400, 1.125rem → 1.25rem, 1.625): subtítulo do hero e das faixas, largura máxima 34–42rem.
- **Body** (400, 1rem → 1.125rem, 1.625): descrição de recurso (máx. 36rem), de passo (máx. 30ch) e resposta do FAQ (máx. 60ch).
- **Caption** (400, 0.875rem): linha de prova, legenda dos logos, nota sob o CTA final, links do rodapé.
- **Button** (600, 0.875rem no md / 1rem no lg, -0.01em).
- **Label** (600, 0.75rem, 0.14em, caixa-alta): rótulo do REC e títulos de coluna do rodapé.
- **Accent** (Instrument Serif itálica 400, -0.02em): uma palavra por título.

No `/bio` a mesma voz é calibrada à parte: título em 54px → 80px, entrelinha 0.9, sans a -0.045em, serif itálica a -0.03em com ligaduras, `!` em Laranja.

A imagem OG embute o mesmo par a partir de arquivos locais OFL (`assets/fonts/Geist-Bold.ttf`, `assets/fonts/InstrumentSerif-Italic.ttf`), não de uma terceira fonte.

### Named Rules
**Regra da Palavra Acesa.** Todo título display ou headline leva exatamente uma palavra em serif itálica (vende, vender, live, ar, antes, cidade, marca) e fecha com o ponto final em Laranja; no campo Laranja o ponto fica Preto. Nunca duas palavras em serif, nunca serif em corpo, rótulo ou botão.

**Regra das Fontes Travadas.** Só Geist e Instrument Serif itálica até a Neue Haas Grotesk e a Behind The Nineties Sans entrarem. Nenhuma outra fonte aberta como substituta: decisão aprovada. A serif não tem romano carregado; não pedir peso ou estilo que o navegador teria de sintetizar.

**Regra do Rótulo Único.** Caixa-alta espaçada existe só no rótulo do REC e nos títulos de coluna do rodapé. Não vira eyebrow acima de título de seção.

**Regra da Sequência Real.** Numeração 01–03 só quando carrega ordem de verdade, como os passos do atendimento em Como funciona. As portas numeradas do /bio são estado aprovado e não servem de precedente para numerar lista sem ordem.

## Layout

Container central de até 1240px (`--container-max`) com gutter de 24px (40px a partir de 768px). As seções são faixas de largura total; o ritmo vertical é 80px no mobile e 112px no desktop (recursos sobe a 128px). Pilha de conteúdo em 32–40px, grades internas em 48px (64px entre título e passos no desktop, 80px entre colunas de recursos e FAQ).

- **Hero:** altura mínima de 100svh. A partir de 1024px, duas colunas (1.1fr texto / 0.9fr círculo, gap 40px). Abaixo disso o círculo vem primeiro, com largura min(80vw, 24rem) (min(60vw, 28rem) a partir de 768px) e margem inferior de 13% da própria largura para o disco deslocado não invadir o título.
- **Recursos e FAQ:** 0.85fr título / 1.15fr lista a partir de 768px; o título fica sticky a 80px do topo.
- **Como funciona:** título em até 16ch; três colunas a partir de 768px (gap 32px), empilhadas com 40px no mobile.
- **Clientes:** 0.95fr pilha de fotos / 1.05fr nome e setas.
- **Órbita do CTA:** bloco de 130vw de altura no mobile e min(56vw, 780px) no desktop, título centrado em até 13ch.
- **Botões:** empilhados em largura total abaixo de 640px, em linha a partir daí, gap de 12px.
- **/bio:** coluna única no mobile com o vídeo no topo (min(468px, 56svh)); a partir de 1024px, grade com o vídeo sticky em 800/1440 da largura e uma coluna de até 640px.

## Elevation & Depth

Plano por padrão. A profundidade vem de sobreposição de círculos (disco laranja atrás do círculo do REC, símbolo por cima) e da troca de campos de cor. Sombra existe só como elevação de fotografia sobre campo claro ou laranja; nenhuma superfície de UI tem sombra.

### Shadow Vocabulary
- **Foto elevada** (`box-shadow: 0 18px 40px -18px rgba(7,7,7,0.55)`): posts na faixa da franquia.
- **Foto elevada grande** (`box-shadow: 0 30px 70px -35px rgba(7,7,7,0.55)`): capturas de live na pilha de clientes.

### Named Rules
**Regra do Palco Sem Brilho.** Sem glow, sem vidro fosco, sem backdrop-blur, sem sombra colorida. Escurecimento é sempre Preto (a radial da órbita, as máscaras de borda dos marquees, os véus do /bio).

## Shapes

O círculo é a forma organizadora: o círculo do REC que recorta o vídeo da cabine, o disco laranja, o símbolo com play vazado, os discos de ícone, os botões redondos, o indicador do FAQ e os pontos (10px no REC, 6px nos marcadores, 4px no /bio). Todo botão é pílula (9999px). Fotografias são as únicas superfícies com canto médio: 16px nos posts, 24px nas capturas de live, e aparecem giradas (posts alternando −2° e 4°; a pilha de clientes entre −8° e 9°). Todo o resto é reto: faixas, réguas e as portas do /bio (raio 0).

### Named Rules
**Regra do Círculo.** Canto arredondado só em círculo, pílula ou foto. Não existe card de UI com raio intermediário.

## Components

### Buttons
Pílula firme, sem sombra, com o play da marca.
- **Shape:** pílula (9999px); 56px de altura e 28px de padding lateral nos CTAs de seção, 44px e 20px no contexto compacto.
- **Primary (sobre Preto):** Laranja com texto Preto, peso 600, `PlayGlyph` de 12px à direita. É o único botão de Como funciona e do CTA final, em largura total abaixo de 640px.
- **Hover / Focus:** 300ms ease-out em fundo, cor e borda. O primary vai para Gelo (não para um laranja mais claro); o play desliza 2px. Foco: anel de 2px com offset de 3px.
- **Outline (sobre Preto):** borda Gelo a 30%, texto Gelo; hover preenche Gelo com texto Preto. No hero é âncora interna ("Ver como funciona") e o play gira 90° para apontar para baixo, deslizando para baixo no hover.
- **Ink (sobre Laranja ou Gelo):** Preto com texto Gelo; hover Gelo com texto Preto.
- **Outline-ink (sobre Laranja ou Gelo):** borda Preto a 35%, texto Preto; hover preenche Preto com texto Gelo.
- **Link terciário:** 0.875rem, peso 500, Gelo a 70%, sem caixa nem ícone, sublinhado com offset de 4px (só no hover no hero, fixo no CTA final); hover Gelo no hero, Laranja no CTA final.
- **Destinos:** os CTAs externos abrem o WhatsApp em nova aba; a faixa da franquia recebe o par por props (`primary` e `secondary`, cada um com `text` e `href`).

### Discos e botões redondos
- **Disco de ícone:** 48px, Laranja, ícone de traço de 20px em Preto. Marca cada item da lista de recursos.
- **Botão redondo:** 48px, borda Preto a 25%, seta de 20px; hover preenche Preto com seta Gelo deslizando 2px.

### Listas com régua (no lugar de cards)
Não há cards: conteúdo repetido é um livro-razão de réguas finas. Recursos: régua no topo da lista e na base de cada item, 32px → 40px de respiro, disco + título + texto em grade auto/1fr. `/bio`: portas numeradas 01–03 com régua a 14%, altura mínima 80px → 92px, número tabular, oferta em body e um anel de 38px → 44px com seta; a primeira porta tem régua e anel em Laranja; hover desliza o anel 3–4px.

### Passos (Como funciona)
Faixa Preta (`#como-funciona`). Headline em Gelo; abaixo, lista ordenada de três passos. Cada passo abre com régua Gelo a 15% e 24px de respiro, e empilha com 16px: número 01–03 em numeral Laranja, título de 1.5rem em Gelo e descrição em body Gelo a 65%. Fecha com um único botão primary.

### FAQ
Faixa Preta (`#perguntas`) na mesma grade de recursos, com o headline sticky à esquerda. Perguntas em `<details>`/`<summary>` nativos, sem marcador do navegador, entre réguas Gelo a 15%. O summary tem 24px de respiro vertical, pergunta em question Gelo e, à direita, um indicador redondo de 40px (borda Gelo a 25%, ícone de mais de 16px). Aberto, o indicador gira 45° (o mais vira ×) e preenche Laranja com ícone Preto, em 300ms. Resposta em body Gelo a 70%, até 60ch, com 64px livres à direita.

### Navigation
A home não monta barra de navegação. O topo do hero carrega o wordmark (28px → 36px de altura) à esquerda e o rótulo do REC à direita; os caminhos são os CTAs, a âncora `#como-funciona` e o link terciário para `#franquia`. Rodapé: wordmark de 128px, frase curta, pílula do WhatsApp (borda Gelo a 20%, hover Laranja), três colunas com label e links Gelo a 75% (hover Laranja), e linha final com ponto laranja de 6px e copyright.

### Hero REC (assinatura)
O primeiro viewport: wordmark oficial no canto superior esquerdo e rótulo "Luz, câmera, vendas!" com ponto do REC pulsando no direito; à esquerda h1 + body large + primary + outline + link terciário + linha de prova com marcador laranja; à direita o vídeo real da cabine dentro do círculo do REC (fundo Grafite enquanto carrega), o disco laranja deslocado para baixo e à esquerda (−15%, 13%; entre 1024 e 1280px desloca só para baixo) e o símbolo laranja sobrepondo a borda superior direita (24% da largura). Abaixo de 1024px o círculo empilha acima do texto.

**Regra do Movimento Único.** A abertura do REC (clip-path de círculo 8% → 50%, 1,1s) e o deslize do disco (1,3s, atraso 0,15s), ambos em cubic-bezier(0.16, 1, 0.3, 1), tocam uma vez por carga. Os marquees e o pulso do REC (1,8s) são contínuos; nada mais anima na entrada. Sob `prefers-reduced-motion` tudo para: logos viram grade centralizada, posts viram rolagem lateral com snap, o vídeo do hero fica no poster, o autoplay de clientes para.

### Marquee de logos
Logos reais de clientes forçados a branco (`brightness(0) invert(1)`), opacidade 60% → 100% no hover, altura 24px → 32px, gap 56px → 80px, 38s linear, borda com máscara de 10%. Faixa Preta entre réguas Gelo a 10%, legenda em caption.

### Faixa da franquia
Campo Laranja cheio (`#franquia`), título Preto centralizado na voz display maior, body large em Preto a 80%, par ink + outline-ink. Posts reais do Instagram em 3:4 (192px → 256px de altura), cantos 16px, giro alternado, foto elevada, 40s linear.

### Pilha de clientes
Capturas de live em 9:16 empilhadas com cantos de 24px e giros; a ativa vem à frente com um salto; o nome do cliente em numeral; setas em botão redondo; autoplay de 5s.

### Órbita (CTA final)
Faixa Preta (`#contato`). O key visual `orbita-discos.jpg` (200vw no mobile, até 1440px no desktop) escurecido no centro por radial Preto (82% → 55% → 0), com máscara vertical que some em 14% e 86%; o headline em Gelo mora dentro da órbita. Abaixo, body large, um primary, a nota em caption Gelo a 60% e o link terciário sublinhado para a franquia, empilhados com 16px.

### Imagem OG
1200×630 em Preto: wordmark Gelo de 285px no topo; título de 76px em Geist Bold (entrelinha 1, -3px) com a palavra de destaque em Instrument Serif itálica e ponto final Laranja, em linhas explícitas (o Satori não quebra texto corrido entre spans); símbolo Laranja de 620px sangrando pela direita; rodapé com ponto Laranja de 12px e o domínio em Gelo a 60%.

### Wordmark e símbolo
`LivelabLogo` (SVG oficial): letras em `currentColor`, ponto final em `--logo-accent` com Laranja de fallback. `LivelabSymbol`: círculo com o play vazado por `evenodd`, então o fundo aparece no recorte. `PlayGlyph`: o pingo do "i", usado como ícone de CTA.

## Do's and Don'ts

### Do:
- **Do** usar o wordmark e o símbolo oficiais em SVG (`components/brand/*`); nunca redesenhar, aproximar com texto ou trocar por PNG.
- **Do** fechar todo título display ou headline com o ponto final em Laranja (Preto no campo Laranja) e uma única palavra em serif itálica.
- **Do** usar o `PlayGlyph` de 12px como ícone de CTA, deslizando 2px no hover; girado 90° quando o botão desce para uma âncora da própria página.
- **Do** trocar a variante de botão pelo campo: primary e outline sobre Preto; ink e outline-ink sobre Laranja ou Gelo.
- **Do** redefinir `--focus` para Preto em toda seção de campo Gelo ou Laranja.
- **Do** tratar `prefers-reduced-motion` como estado desenhado: grade de logos, rolagem lateral de posts, vídeo no poster, autoplay parado.

### Don't:
- **Don't** pôr texto Gelo ou branco sobre Laranja (2,9:1).
- **Don't** voltar ao editorial creme com serif romana nem ao dark-SaaS com brilho neon, glow laranja, vidro fosco ou backdrop-blur.
- **Don't** introduzir outra fonte aberta no lugar da Neue Haas Grotesk ou da Behind The Nineties Sans.
- **Don't** usar Grafite como cor de texto sobre Preto (2,9:1).
- **Don't** clarear o Laranja no hover; o primary vai para Gelo.
- **Don't** pôr sombra em botão, régua, disco ou qualquer superfície de UI; sombra só em fotografia.
- **Don't** criar eyebrow ou kicker em caixa-alta acima de título.
- **Don't** aplicar este sistema a `/bio/cliente`, `/bio/franqueado`, `/bio/apresentador` ou `/bio/admin`; elas mantêm o estilo legado.
