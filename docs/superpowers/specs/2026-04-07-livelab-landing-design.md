# Livelab Landing Page — Design Spec
**Data:** 2026-04-07  
**Status:** Aprovado pelo usuário  
**Output:** `/Users/vitormiguelgoedertdaluz/Livelab/index.html` (single file)

---

## 1. Objetivo

Criar uma landing page completa para a **Livelab** — plataforma de live commerce e transmissões ao vivo — em HTML puro single file, sem build step, abrindo diretamente no browser.

---

## 2. Stack Técnica

| Recurso | Solução |
|---------|---------|
| CSS Framework | Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) com config inline |
| Tipografia | Inter via Google Fonts CDN |
| Animações | CSS `@keyframes` puro (fadeUp, bob, slideIn, drawLine, staggerLetters) |
| Interatividade | JavaScript vanilla — scroll listener, Intersection Observer, menu mobile |
| Dependências | Zero npm, zero build |

---

## 3. Identidade Visual

```
Primary:    #F97316  (laranja)
Secondary:  #0F172A  (azul escuro)
Tertiary:   #EF4444  (vermelho)
Neutral:    #64748B
Background: #030303  (preto quase total)
Font:       Inter (400, 600, 700, 800, 900)
```

**Logo SVG inline:** texto "livelab" bold branco + triângulo SVG laranja `#F97316` posicionado como ponto do "i" via `position: absolute`.

---

## 4. Estrutura das Seções

### 4.1 HEADER — Navbar Fixa

- `position: fixed`, `z-index: 50`, `top: 0`, largura total
- Estado inicial: fundo transparente
- Ao scroll > 10px: transição suave para `background: rgba(15,23,42,0.95)` + `backdrop-filter: blur(12px)`
- **Esquerda:** Logo SVG inline
- **Centro:** links `Produto | Soluções | Preços | Blog` — `color: rgba(255,255,255,0.7)`, hover `#F97316`
- **Direita:** botão "Entrar" (outline branco) + botão "Começar grátis" (`background: #F97316`)
- **Mobile:** ícone hamburguer → menu dropdown animado com `max-height` transition
- Implementação: scroll listener JS + classe CSS `.scrolled` toggled

### 4.2 HERO — Formas Geométricas Animadas

- Fundo: `#030303`
- Gradiente radial sutil no fundo: `radial-gradient(ellipse at center, rgba(249,115,22,0.05), transparent 70%)`
- **5 formas elípticas** posicionadas absolutamente:
  - `div` com `border-radius: 50%`, dimensões variadas (600×140px, 500×120px, etc.)
  - `background: linear-gradient(to right, rgba(cor/0.15), transparent)`
  - `border: 1px solid rgba(255,255,255,0.12)`
  - `backdrop-filter: blur(2px)`
  - Animação `@keyframes bob` — `translateY(0) → translateY(15px) → translateY(0)`, duração 12s, `ease-in-out`, `infinite`
  - Delays escalonados: 0s, 2s, 4s, 6s, 8s
  - Gradientes: indigo, rose, violet, amber, cyan
- **Badge:** `border-radius: 9999px`, bg `rgba(255,255,255,0.03)`, border `rgba(255,255,255,0.08)` — ícone circle laranja + "Plataforma de Live Commerce" — animação `fadeUp` delay 0.5s
- **H1 linha 1:** "Transmita. Venda." — branco, `font-size: clamp(3rem, 8vw, 6rem)`, bold — animação `fadeUp` delay 0.7s
- **H1 linha 2:** "Conquiste ao vivo." — `background: linear-gradient(to right, #fb923c, rgba(255,255,255,0.9), #f87171)`, `background-clip: text`, `color: transparent` — animação `fadeUp` delay 0.9s
- **Subtítulo:** `color: rgba(255,255,255,0.4)` — animação `fadeUp` delay 1.1s
- **CTAs:** "Começar agora" (laranja filled) + "Ver demonstração" (outline branco) — animação `fadeUp` delay 1.3s
- Overlay top/bottom: `linear-gradient(to bottom, #030303, transparent)` + `linear-gradient(to top, #030303, transparent)`

### 4.3 SEÇÃO CENTRAL — Container Scroll 3D

- Fundo: `#0F172A`
- **Título acima do card:**
  - Linha 1: "A plataforma que sua" — branco
  - Linha 2: "live merece" — gradiente laranja→rose via `background-clip: text`
- **Container com perspectiva 3D:** `perspective: 1000px` no wrapper
- Card animado pelo scroll:
  - Scroll range: `offsetTop - windowHeight` até `offsetTop + height`
  - `rotateX`: de 20° → 0° (scroll de 0% → 100% do range)
  - `scale`: de 1.05 → 1
  - `translateY`: de 0px → -60px
  - Atualizado via `requestAnimationFrame` no scroll listener
- **Card interior (mock dashboard Livelab):**
  - Fundo: `#1E293B`
  - Border: `1px solid rgba(249,115,22,0.3)`, `border-radius: 30px`
  - Sombra profunda: `box-shadow: 0 50px 100px rgba(0,0,0,0.5)`
  - Header do dashboard: logo Livelab mini + status "🔴 AO VIVO"
  - Métricas row: 3 cards — "12.4K Viewers", "R$ 48.2K Vendas", "8.3% Conversão"
  - Gráfico de barras SVG: 7 barras em `#F97316`, alturas variadas, label "Últimas 7 lives"
  - Lista de produtos ao vivo: 3 items com thumbnail colorido, nome, preço, botão comprar

### 4.4 SEÇÃO FEATURES — Bento Grid

- Fundo: `#030303`
- Título: "Tudo que você precisa" + subtitle "para vender ao vivo"
- **Grid 2×2**, cada card: `background: #0F172A`, `border: 1px solid rgba(249,115,22,0.2)`, `border-radius: 16px`
- Todos os cards animados pelo Intersection Observer com `fadeUp` ao entrar no viewport

**Card 1 — Mapa (top-left):**
- Título: "Alcance global, vendas locais"
- Mapa SVG de pontos: grade de círculos `r=0.8`, cor `rgba(249,115,22,0.7)`, dispostos em forma do mapa-múndi simplificado (coordenadas hardcoded de continentes)
- Badge flutuante: "🌎 Última venda: São Paulo" — fundo `#0F172A`, border laranja

**Card 2 — Notificações (top-right):**
- Título: "Acompanhe tudo em tempo real"
- Lista de 5 notificações fake animadas com `@keyframes slideIn` em loop (delay escalonado):
  - 🛒 Nova venda — R$ 299 — 2s atrás
  - 👁️ +847 viewers — agora
  - 📦 Produto esgotado — Tênis Air Max
  - 💬 Comentário: "Amei esse produto!"
  - 🎫 Cupom LIVE20 usado — 15% off

**Card 3 — Gráfico (bottom-left):**
- Título: "Analytics que convertem"
- Area chart SVG: 2 séries (viewers laranja, vendas rose), polilinha com `fill` em gradiente, eixo X com meses, labels de valor
- Legenda: bolinhas coloridas

**Card 4 — Mini Features (bottom-right):**
- 2 cards empilhados verticalmente:
  - "Integração fácil" — ícone plug SVG + "Conecte em minutos" + seta `→` com hover `rotate(-45deg)`
  - "Suporte 24/7" — ícone headset SVG + "Time sempre disponível" + seta com hover

### 4.5 SEÇÃO FINAL — CTA Animado

- Fundo: `#030303`
- Glow radial central: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.12), transparent)`
- **Texto animado letra por letra:** "Comece a vender ao vivo hoje."
  - Cada `<span>` de letra recebe `animation: letterFadeUp 0.6s ease forwards`
  - `animation-delay`: `i * 0.04s` (stagger)
  - `@keyframes letterFadeUp`: `opacity: 0, translateY(20px)` → `opacity: 1, translateY(0)` com spring-like `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  - Disparado pelo Intersection Observer ao entrar no viewport
- **Underline animado:** `<span>` absolutamente posicionado abaixo do texto, `width: 0% → 100%` com `transition: width 0.8s ease`, delay = `letras * 0.04s + 0.3s`
  - Gradiente: `linear-gradient(to right, #F97316, #f87171, #fb923c)`
  - Altura: 4px, `border-radius: 2px`
- **Subtítulo:** "Crie sua conta grátis e faça sua primeira live em menos de 5 minutos." — `fadeIn` após underline
- **Botão CTA:** "Criar conta grátis" — `background: #F97316`, padding generoso, `border-radius: 12px`, `font-size: 1.125rem`, hover `transform: scale(1.04)` + brightness
- **Rodapé texto:** "Sem cartão de crédito. Cancele quando quiser." — `color: rgba(255,255,255,0.3)`, `font-size: 0.875rem`

---

## 5. JavaScript — Comportamentos

```
scroll listener:
  - navbar: toggle class .scrolled (bg + blur)
  - card 3D: calcular progresso → rotateX, scale, translateY

Intersection Observer (threshold: 0.2):
  - disparar fadeUp nos elementos com [data-animate]
  - iniciar animação de letras na seção CTA
  - iniciar loop de notificações no Card 2
  - iniciar underline no CTA

Menu mobile:
  - toggle max-height do dropdown
  - fechar ao clicar fora
```

---

## 6. Animações CSS (@keyframes)

```css
fadeUp:        opacity 0, translateY 30px → opacity 1, translateY 0
bob:           translateY 0 → 15px → 0 (12s infinite)
slideIn:       opacity 0, translateX(-20px) → opacity 1, translateX 0
drawLine:      width 0% → 100%
letterFadeUp:  opacity 0, translateY 20px → opacity 1, translateY 0
scaleUp:       scale(0.9), opacity 0 → scale(1), opacity 1
```

---

## 7. Responsividade

- **Mobile first:** layout single-column, formas geométricas reduzidas em 40%
- **md (768px):** grid 2 colunas nas features, formas em tamanho completo
- **lg (1024px):** navbar full, hero layout centrado, card scroll fullwidth
- Implementado via Tailwind config inline + media queries CSS onde necessário

---

## 8. Output

Arquivo único: `/Users/vitormiguelgoedertdaluz/Livelab/index.html`

Estrutura interna do arquivo:
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Google Fonts Inter -->
  <!-- Tailwind CDN com config -->
  <style>
    /* @keyframes, variáveis CSS, classes customizadas */
  </style>
</head>
<body>
  <!-- SECTION 1: Navbar -->
  <!-- SECTION 2: Hero -->
  <!-- SECTION 3: Scroll 3D -->
  <!-- SECTION 4: Bento Features -->
  <!-- SECTION 5: CTA Animado -->
  <script>
    /* scroll listener, intersection observer, menu mobile */
  </script>
</body>
</html>
```
