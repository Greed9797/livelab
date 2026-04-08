# Livelab Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — landing page completa da Livelab em HTML puro single file, sem build step.

**Architecture:** Arquivo HTML único com `<style>` contendo @keyframes e CSS custom, Tailwind CDN via script tag com config inline, e `<script>` vanilla JS no final do body para scroll/observer behaviors. Cada seção é um `<section>` independente empilhado verticalmente.

**Tech Stack:** HTML5, CSS3 (@keyframes, custom properties, backdrop-filter), Tailwind CSS CDN, Google Fonts Inter, JavaScript ES6 (Intersection Observer, scroll listener)

---

## Mapa de Arquivos

| Arquivo | Responsabilidade |
|---------|-----------------|
| `/Users/vitormiguelgoedertdaluz/Livelab/index.html` | Arquivo único — todo HTML, CSS e JS |

Estrutura interna do `index.html`:
```
<head>
  fonts + tailwind cdn + tailwind config
  <style> → CSS variables, @keyframes, component classes
</head>
<body>
  <nav>      → Task 2: Navbar
  <section>  → Task 3: Hero
  <section>  → Task 4: Scroll 3D
  <section>  → Task 5: Bento Grid
  <section>  → Task 6: CTA Animado
  <script>   → Task 7: JS behaviors
</body>
```

---

## Task 1: Scaffold Base — HTML, Fonts, Tailwind, CSS Variables e @keyframes

**Files:**
- Create: `/Users/vitormiguelgoedertdaluz/Livelab/index.html`

- [ ] **Step 1: Criar o arquivo com scaffold completo**

Criar `/Users/vitormiguelgoedertdaluz/Livelab/index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Livelab — Plataforma de Live Commerce</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#F97316',
            secondary: '#0F172A',
            tertiary: '#EF4444',
            neutral: '#64748B',
            dark: '#030303',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        }
      }
    }
  </script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-family: 'Inter', sans-serif; }
    body { background: #030303; color: #fff; overflow-x: hidden; }

    /* ── CSS Custom Properties ── */
    :root {
      --primary: #F97316;
      --secondary: #0F172A;
      --tertiary: #EF4444;
      --dark: #030303;
      --neutral: #64748B;
    }

    /* ── @keyframes ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes bob {
      0%, 100% { transform: translateY(0px) rotate(var(--shape-rotate, 0deg)); }
      50%       { transform: translateY(15px) rotate(var(--shape-rotate, 0deg)); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes drawLine {
      from { width: 0%; left: 50%; }
      to   { width: 100%; left: 0%; }
    }
    @keyframes letterFadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleUp {
      from { opacity: 0; transform: scale(0.85); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    /* ── Utility: animate-on-scroll ── */
    [data-animate] {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    [data-animate].visible {
      opacity: 1;
      transform: translateY(0);
    }
    [data-animate-delay="1"] { transition-delay: 0.1s; }
    [data-animate-delay="2"] { transition-delay: 0.2s; }
    [data-animate-delay="3"] { transition-delay: 0.3s; }
    [data-animate-delay="4"] { transition-delay: 0.4s; }

    /* ── Gradient text utility ── */
    .gradient-text-orange {
      background: linear-gradient(to right, #fb923c, rgba(255,255,255,0.9), #f87171);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .gradient-text-hero {
      background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.8));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  </style>
</head>
<body>

  <!-- SECTION 1: Navbar -->
  <!-- SECTION 2: Hero -->
  <!-- SECTION 3: Scroll 3D -->
  <!-- SECTION 4: Bento Grid -->
  <!-- SECTION 5: CTA Animado -->

  <script>
    // JS behaviors — Task 7
  </script>
</body>
</html>
```

- [ ] **Step 2: Verificar no browser**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: página preta em branco sem erros no console.

---

## Task 2: Navbar — Header Fixo com Scroll Behavior

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `<!-- SECTION 1: Navbar -->` pelo HTML abaixo; adicionar CSS ao `<style>`

- [ ] **Step 1: Adicionar CSS da navbar ao `<style>`**

Dentro da tag `<style>`, após os keyframes existentes, adicionar:

```css
/* ── Navbar ── */
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  padding: 1rem 0;
  transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
}
#navbar.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.06);
}
#mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
#mobile-menu.open {
  max-height: 300px;
}
.nav-link {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.25rem 0;
}
.nav-link:hover { color: #F97316; }
.btn-outline {
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
  white-space: nowrap;
}
.btn-outline:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); }
.btn-primary {
  background: #F97316;
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;
}
.btn-primary:hover { background: #ea6c0a; transform: scale(1.03); }

/* ── Logo SVG inline ── */
.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.logo-play {
  position: absolute;
  top: 0.12em;
  left: 0.435em;
  width: 0.32em;
  height: 0.32em;
}
```

- [ ] **Step 2: Inserir HTML da Navbar**

Substituir `<!-- SECTION 1: Navbar -->` por:

```html
<nav id="navbar">
  <div style="max-width:1200px; margin:0 auto; padding:0 1.5rem; display:flex; align-items:center; justify-content:space-between;">
    
    <!-- Logo -->
    <a href="#" class="logo-text" aria-label="Livelab">
      l<span style="visibility:hidden;">i</span>velab
      <svg class="logo-play" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 6L1 11V1Z" fill="#F97316"/>
      </svg>
    </a>

    <!-- Desktop Nav -->
    <div style="display:flex; align-items:center; gap:2rem;" class="hidden-mobile">
      <a href="#produto" class="nav-link">Produto</a>
      <a href="#solucoes" class="nav-link">Soluções</a>
      <a href="#precos" class="nav-link">Preços</a>
      <a href="#blog" class="nav-link">Blog</a>
    </div>

    <!-- Desktop CTAs -->
    <div style="display:flex; align-items:center; gap:0.75rem;" class="hidden-mobile">
      <a href="#" class="btn-outline">Entrar</a>
      <a href="#" class="btn-primary">Começar grátis</a>
    </div>

    <!-- Mobile Hamburger -->
    <button id="hamburger" aria-label="Menu" class="show-mobile" style="background:none;border:none;cursor:pointer;padding:0.5rem;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round">
        <line id="ham-top" x1="3" y1="6" x2="21" y2="6"/>
        <line id="ham-mid" x1="3" y1="12" x2="21" y2="12"/>
        <line id="ham-bot" x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" style="max-width:1200px; margin:0 auto; padding:0 1.5rem;">
    <div style="display:flex; flex-direction:column; gap:1rem; padding:1.25rem 0; border-top:1px solid rgba(255,255,255,0.08); margin-top:0.75rem;">
      <a href="#produto" class="nav-link">Produto</a>
      <a href="#solucoes" class="nav-link">Soluções</a>
      <a href="#precos" class="nav-link">Preços</a>
      <a href="#blog" class="nav-link">Blog</a>
      <div style="display:flex; gap:0.75rem; margin-top:0.5rem;">
        <a href="#" class="btn-outline">Entrar</a>
        <a href="#" class="btn-primary">Começar grátis</a>
      </div>
    </div>
  </div>
</nav>
```

- [ ] **Step 3: Adicionar CSS de responsividade mobile/desktop para navbar**

No `<style>`:

```css
.hidden-mobile { display: flex; }
.show-mobile   { display: none; }
@media (max-width: 768px) {
  .hidden-mobile { display: none !important; }
  .show-mobile   { display: block !important; }
}
```

- [ ] **Step 4: Verificar visualmente**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: navbar com logo, links e botões no desktop. No mobile (<768px) aparece hamburguer.

---

## Task 3: Hero — Formas Geométricas Animadas

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `<!-- SECTION 2: Hero -->`; adicionar CSS

- [ ] **Step 1: Adicionar CSS das formas e hero ao `<style>`**

```css
/* ── Hero ── */
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #030303;
  padding-top: 80px;
}
.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(239,68,68,0.04) 0%, transparent 50%);
  pointer-events: none;
}
.geo-shape {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(2px);
  animation: bob 12s ease-in-out infinite;
}
.hero-overlay-top {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to bottom, #030303, transparent);
  pointer-events: none;
  z-index: 5;
}
.hero-overlay-bottom {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to top, #030303, transparent);
  pointer-events: none;
  z-index: 5;
}
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 0 1.5rem;
  margin: 0 auto;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 2rem;
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
}
.hero-badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #F97316;
  animation: pulse-dot 2s ease-in-out infinite;
}
.hero-h1-line1 {
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.7s;
  opacity: 0;
}
.hero-h1-line2 {
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.9s;
  opacity: 0;
  display: block;
  margin-top: 0.1em;
}
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255,255,255,0.4);
  line-height: 1.6;
  font-weight: 400;
  margin-top: 1.5rem;
  animation: fadeUp 1s ease forwards;
  animation-delay: 1.1s;
  opacity: 0;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  animation: fadeUp 1s ease forwards;
  animation-delay: 1.3s;
  opacity: 0;
}
.btn-hero-primary {
  background: #F97316;
  color: #fff;
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.btn-hero-primary:hover { background: #ea6c0a; transform: scale(1.04); }
.btn-hero-outline {
  border: 1.5px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.85);
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.btn-hero-outline:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
```

- [ ] **Step 2: Inserir HTML do Hero**

Substituir `<!-- SECTION 2: Hero -->` por:

```html
<section id="hero">
  <div class="hero-bg-gradient"></div>
  <div class="hero-overlay-top"></div>
  <div class="hero-overlay-bottom"></div>

  <!-- Formas geométricas -->
  <!-- Shape 1: indigo, large, top-left -->
  <div class="geo-shape" style="
    width:600px; height:140px;
    left:-8%; top:20%;
    background: linear-gradient(to right, rgba(99,102,241,0.15), transparent);
    transform: rotate(12deg);
    --shape-rotate: 12deg;
    animation-delay: 0s;
  "></div>
  <!-- Shape 2: rose, medium, bottom-right -->
  <div class="geo-shape" style="
    width:500px; height:120px;
    right:-4%; top:70%;
    background: linear-gradient(to right, rgba(244,63,94,0.15), transparent);
    transform: rotate(-15deg);
    --shape-rotate: -15deg;
    animation-delay: 2s;
  "></div>
  <!-- Shape 3: violet, small, bottom-left -->
  <div class="geo-shape" style="
    width:300px; height:80px;
    left:8%; bottom:12%;
    background: linear-gradient(to right, rgba(139,92,246,0.15), transparent);
    transform: rotate(-8deg);
    --shape-rotate: -8deg;
    animation-delay: 4s;
  "></div>
  <!-- Shape 4: amber, smaller, top-right -->
  <div class="geo-shape" style="
    width:220px; height:60px;
    right:18%; top:12%;
    background: linear-gradient(to right, rgba(245,158,11,0.15), transparent);
    transform: rotate(20deg);
    --shape-rotate: 20deg;
    animation-delay: 6s;
  "></div>
  <!-- Shape 5: cyan, tiny, top-center -->
  <div class="geo-shape" style="
    width:150px; height:40px;
    left:25%; top:8%;
    background: linear-gradient(to right, rgba(6,182,212,0.15), transparent);
    transform: rotate(-25deg);
    --shape-rotate: -25deg;
    animation-delay: 8s;
  "></div>

  <!-- Conteúdo central -->
  <div class="hero-content">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      <span style="font-size:0.85rem; color:rgba(255,255,255,0.6); letter-spacing:0.03em;">Plataforma de Live Commerce</span>
    </div>

    <h1>
      <span class="hero-h1-line1 gradient-text-hero">Transmita. Venda.</span>
      <span class="hero-h1-line2 gradient-text-orange">Conquiste ao vivo.</span>
    </h1>

    <p class="hero-subtitle">
      A plataforma completa para criar experiências de live shopping que convertem.
    </p>

    <div class="hero-ctas">
      <a href="#" class="btn-hero-primary">
        Começar agora
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="#" class="btn-hero-outline">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="currentColor"/></svg>
        Ver demonstração
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verificar visualmente**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: hero full-height com 5 formas elípticas flutuando, badge laranja, H1 com gradiente, subtítulo e 2 botões.

---

## Task 4: Seção Scroll 3D — Container com Dashboard Mock

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `<!-- SECTION 3: Scroll 3D -->`; adicionar CSS

- [ ] **Step 1: Adicionar CSS da seção scroll 3D**

```css
/* ── Scroll 3D Section ── */
#scroll-section {
  background: var(--secondary);
  padding: 6rem 1.5rem 10rem;
  overflow: hidden;
}
.scroll-title {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}
.scroll-title h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.scroll-3d-wrapper {
  perspective: 1000px;
  max-width: 1000px;
  margin: 0 auto;
}
#scroll-card {
  border-radius: 30px;
  border: 1px solid rgba(249,115,22,0.3);
  background: #1E293B;
  box-shadow: 0 50px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(249,115,22,0.1);
  overflow: hidden;
  transform-origin: center top;
  transform: rotateX(20deg) scale(1.05);
  will-change: transform;
}
/* Dashboard interior */
.dash-header {
  background: #0F172A;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.dash-live-badge {
  display: flex; align-items: center; gap: 0.4rem;
  background: rgba(239,68,68,0.15);
  border: 1px solid rgba(239,68,68,0.3);
  border-radius: 9999px;
  padding: 0.2rem 0.75rem;
  font-size: 0.75rem; font-weight: 700; color: #EF4444;
}
.dash-live-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #EF4444;
  animation: pulse-dot 1s ease-in-out infinite;
}
.dash-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.dash-metric {
  background: #1E293B;
  padding: 1.25rem 1.5rem;
  text-align: center;
}
.dash-metric-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;
}
.dash-metric-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  margin-top: 0.2rem;
  font-weight: 500;
}
.dash-metric-change {
  font-size: 0.7rem;
  color: #22c55e;
  margin-top: 0.2rem;
}
.dash-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(255,255,255,0.05);
}
.dash-panel {
  background: #1E293B;
  padding: 1.25rem 1.5rem;
}
.dash-panel-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.dash-bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  height: 80px;
}
.dash-bar {
  flex: 1;
  background: linear-gradient(to top, #F97316, rgba(249,115,22,0.4));
  border-radius: 4px 4px 0 0;
  transition: opacity 0.2s;
}
.dash-bar:hover { opacity: 0.8; }
.dash-product {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.dash-product:last-child { border-bottom: none; }
.dash-product-thumb {
  width: 36px; height: 36px;
  border-radius: 8px;
  flex-shrink: 0;
}
.dash-product-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
}
.dash-product-price {
  font-size: 0.75rem;
  color: #F97316;
  font-weight: 700;
}
.dash-product-btn {
  margin-left: auto;
  background: rgba(249,115,22,0.15);
  border: 1px solid rgba(249,115,22,0.3);
  color: #F97316;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  white-space: nowrap;
}
@media (max-width: 640px) {
  .dash-body { grid-template-columns: 1fr; }
  .dash-metrics { grid-template-columns: repeat(3, 1fr); }
  .dash-metric-value { font-size: 1.2rem; }
}
```

- [ ] **Step 2: Inserir HTML da Seção Scroll 3D**

Substituir `<!-- SECTION 3: Scroll 3D -->` por:

```html
<section id="scroll-section">
  <div class="scroll-title" data-animate>
    <h2>
      <span style="color:#fff;">A plataforma que sua</span><br>
      <span class="gradient-text-orange">live merece</span>
    </h2>
    <p style="color:rgba(255,255,255,0.4); margin-top:1rem; font-size:1rem; line-height:1.6;">
      Gerencie sua transmissão, produtos e audiência em um só lugar.
    </p>
  </div>

  <div class="scroll-3d-wrapper">
    <div id="scroll-card">
      <!-- Dashboard Header -->
      <div class="dash-header">
        <span class="logo-text" style="font-size:1.1rem;">l<span style="visibility:hidden;">i</span>velab
          <svg style="position:absolute;top:0.12em;left:0.435em;width:0.32em;height:0.32em;" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="#F97316"/></svg>
        </span>
        <div class="dash-live-badge">
          <span class="dash-live-dot"></span>
          AO VIVO
        </div>
        <div style="color:rgba(255,255,255,0.4); font-size:0.8rem;">Tênis Nike Air Max — Live #47</div>
      </div>

      <!-- Métricas -->
      <div class="dash-metrics">
        <div class="dash-metric">
          <div class="dash-metric-value">12.4K</div>
          <div class="dash-metric-label">Viewers</div>
          <div class="dash-metric-change">↑ 23%</div>
        </div>
        <div class="dash-metric">
          <div class="dash-metric-value" style="color:#F97316;">R$48.2K</div>
          <div class="dash-metric-label">Vendas</div>
          <div class="dash-metric-change">↑ 41%</div>
        </div>
        <div class="dash-metric">
          <div class="dash-metric-value" style="color:#22c55e;">8.3%</div>
          <div class="dash-metric-label">Conversão</div>
          <div class="dash-metric-change">↑ 2.1pp</div>
        </div>
      </div>

      <!-- Body: Gráfico + Produtos -->
      <div class="dash-body">
        <!-- Gráfico -->
        <div class="dash-panel">
          <div class="dash-panel-title">Últimas 7 Lives</div>
          <div class="dash-bar-chart">
            <div class="dash-bar" style="height:35%;" title="Live 1"></div>
            <div class="dash-bar" style="height:52%;" title="Live 2"></div>
            <div class="dash-bar" style="height:44%;" title="Live 3"></div>
            <div class="dash-bar" style="height:70%;" title="Live 4"></div>
            <div class="dash-bar" style="height:60%;" title="Live 5"></div>
            <div class="dash-bar" style="height:88%;" title="Live 6"></div>
            <div class="dash-bar" style="height:100%; background:linear-gradient(to top, #F97316, #fb923c);" title="Hoje"></div>
          </div>
          <div style="display:flex; justify-content:space-between; margin-top:0.5rem;">
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Seg</span>
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Ter</span>
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Qua</span>
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Qui</span>
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Sex</span>
            <span style="font-size:0.65rem; color:rgba(255,255,255,0.25);">Sáb</span>
            <span style="font-size:0.65rem; color:#F97316; font-weight:700;">Hoje</span>
          </div>
        </div>

        <!-- Produtos ao vivo -->
        <div class="dash-panel">
          <div class="dash-panel-title">Produtos ao vivo</div>
          <div class="dash-product">
            <div class="dash-product-thumb" style="background:linear-gradient(135deg,#F97316,#ea580c);"></div>
            <div>
              <div class="dash-product-name">Nike Air Max 270</div>
              <div class="dash-product-price">R$ 899</div>
            </div>
            <span class="dash-product-btn">Comprar</span>
          </div>
          <div class="dash-product">
            <div class="dash-product-thumb" style="background:linear-gradient(135deg,#6366f1,#4f46e5);"></div>
            <div>
              <div class="dash-product-name">Adidas Ultraboost</div>
              <div class="dash-product-price">R$ 749</div>
            </div>
            <span class="dash-product-btn">Comprar</span>
          </div>
          <div class="dash-product">
            <div class="dash-product-thumb" style="background:linear-gradient(135deg,#22c55e,#16a34a);"></div>
            <div>
              <div class="dash-product-name">New Balance 574</div>
              <div class="dash-product-price">R$ 599</div>
            </div>
            <span class="dash-product-btn">Comprar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verificar visualmente**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: seção fundo escuro azulado com título gradiente e card dashboard com métricas, gráfico e produtos.

---

## Task 5: Seção Bento — Grid de Features

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `<!-- SECTION 4: Bento Grid -->`; adicionar CSS

- [ ] **Step 1: Adicionar CSS do Bento Grid**

```css
/* ── Bento Features ── */
#features {
  background: #030303;
  padding: 6rem 1.5rem;
}
.features-header {
  text-align: center;
  max-width: 500px;
  margin: 0 auto 3.5rem;
}
.features-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .bento-grid { grid-template-columns: 1fr; }
}
.bento-card {
  background: #0F172A;
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 16px;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
}
.bento-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}
.bento-card-sub {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
/* Map */
.map-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(15,23,42,0.9);
  border: 1px solid rgba(249,115,22,0.35);
  border-radius: 9999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 2;
}
/* Notificações */
.notif-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  margin-bottom: 0.5rem;
  animation: slideInLeft 0.4s ease forwards;
  opacity: 0;
}
.notif-icon {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem;
  flex-shrink: 0;
}
.notif-text { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.85); }
.notif-time { font-size: 0.7rem; color: rgba(255,255,255,0.3); margin-top: 0.1rem; }
/* Chart */
.area-chart-wrapper { position: relative; height: 120px; margin-top: 0.5rem; }
/* Mini feature cards */
.mini-card {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(249,115,22,0.15);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.mini-card:last-child { border-bottom: none; }
.mini-card-arrow {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s, border-color 0.2s;
  cursor: pointer;
}
.mini-card:hover .mini-card-arrow {
  transform: rotate(-45deg);
  border-color: #F97316;
}
.mini-card-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: rgba(249,115,22,0.1);
  border: 1px solid rgba(249,115,22,0.2);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.75rem;
}
```

- [ ] **Step 2: Inserir HTML do Bento Grid**

Substituir `<!-- SECTION 4: Bento Grid -->` por:

```html
<section id="features">
  <div class="features-header" data-animate>
    <h2 style="color:#fff;">Tudo que você precisa<br><span class="gradient-text-orange">para vender ao vivo</span></h2>
    <p style="color:rgba(255,255,255,0.4); margin-top:0.75rem; font-size:0.95rem; line-height:1.6;">Uma plataforma. Todas as ferramentas. Resultados reais.</p>
  </div>

  <div class="bento-grid">

    <!-- Card 1: Mapa -->
    <div class="bento-card" data-animate data-animate-delay="1">
      <div class="bento-card-title">Alcance global, vendas locais</div>
      <div class="bento-card-sub">Sua live chega onde sua audiência está.</div>
      <div style="position:relative; margin-top:0.5rem;">
        <div class="map-badge">🌎 Última venda: São Paulo</div>
        <!-- Mapa SVG de pontos simplificado -->
        <svg viewBox="0 0 320 160" style="width:100%; height:auto; opacity:0.7;">
          <!-- Grid de pontos representando continentes -->
          <g fill="rgba(249,115,22,0.7)">
            <!-- América do Norte -->
            <circle cx="60" cy="45" r="1.2"/><circle cx="70" cy="40" r="1.2"/><circle cx="80" cy="42" r="1.2"/><circle cx="90" cy="45" r="1.2"/><circle cx="75" cy="55" r="1.2"/><circle cx="65" cy="60" r="1.2"/><circle cx="85" cy="58" r="1.2"/><circle cx="95" cy="50" r="1.2"/><circle cx="55" cy="52" r="1.2"/><circle cx="100" cy="60" r="1.2"/>
            <!-- América do Sul -->
            <circle cx="90" cy="80" r="1.2"/><circle cx="100" cy="85" r="1.2"/><circle cx="95" cy="95" r="1.2"/><circle cx="105" cy="90" r="1.2"/><circle cx="88" cy="100" r="1.2"/><circle cx="98" cy="108" r="1.2"/><circle cx="108" cy="100" r="1.2"/>
            <!-- Europa -->
            <circle cx="155" cy="38" r="1.2"/><circle cx="165" cy="35" r="1.2"/><circle cx="175" cy="38" r="1.2"/><circle cx="160" cy="45" r="1.2"/><circle cx="170" cy="45" r="1.2"/><circle cx="180" cy="42" r="1.2"/><circle cx="150" cy="42" r="1.2"/>
            <!-- África -->
            <circle cx="165" cy="60" r="1.2"/><circle cx="175" cy="65" r="1.2"/><circle cx="170" cy="75" r="1.2"/><circle cx="160" cy="70" r="1.2"/><circle cx="180" cy="72" r="1.2"/><circle cx="168" cy="85" r="1.2"/><circle cx="178" cy="82" r="1.2"/>
            <!-- Ásia -->
            <circle cx="210" cy="38" r="1.2"/><circle cx="225" cy="35" r="1.2"/><circle cx="240" cy="40" r="1.2"/><circle cx="255" cy="42" r="1.2"/><circle cx="215" cy="50" r="1.2"/><circle cx="230" cy="48" r="1.2"/><circle cx="245" cy="52" r="1.2"/><circle cx="260" cy="48" r="1.2"/><circle cx="220" cy="60" r="1.2"/><circle cx="235" cy="62" r="1.2"/><circle cx="250" cy="58" r="1.2"/>
            <!-- Oceania -->
            <circle cx="255" cy="90" r="1.2"/><circle cx="268" cy="88" r="1.2"/><circle cx="262" cy="100" r="1.2"/><circle cx="275" cy="95" r="1.2"/>
            <!-- Pontos extras de conexão animados -->
            <circle cx="90" cy="45" r="3" fill="rgba(249,115,22,0.3)"><animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite"/></circle>
            <circle cx="165" cy="40" r="3" fill="rgba(249,115,22,0.3)"><animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="235" cy="48" r="3" fill="rgba(249,115,22,0.3)"><animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite"/></circle>
          </g>
        </svg>
      </div>
    </div>

    <!-- Card 2: Notificações -->
    <div class="bento-card" data-animate data-animate-delay="2">
      <div class="bento-card-title">Acompanhe tudo em tempo real</div>
      <div class="bento-card-sub">Cada evento da sua live na palma da mão.</div>
      <div id="notif-list">
        <div class="notif-item" style="animation-delay:0.1s;">
          <div class="notif-icon" style="background:rgba(34,197,94,0.15);">🛒</div>
          <div>
            <div class="notif-text">Nova venda — R$ 899</div>
            <div class="notif-time">agora mesmo</div>
          </div>
        </div>
        <div class="notif-item" style="animation-delay:0.4s;">
          <div class="notif-icon" style="background:rgba(99,102,241,0.15);">👁️</div>
          <div>
            <div class="notif-text">+847 viewers entraram</div>
            <div class="notif-time">1 min atrás</div>
          </div>
        </div>
        <div class="notif-item" style="animation-delay:0.7s;">
          <div class="notif-icon" style="background:rgba(239,68,68,0.15);">📦</div>
          <div>
            <div class="notif-text">Produto esgotado — Air Max</div>
            <div class="notif-time">3 min atrás</div>
          </div>
        </div>
        <div class="notif-item" style="animation-delay:1s;">
          <div class="notif-icon" style="background:rgba(249,115,22,0.15);">💬</div>
          <div>
            <div class="notif-text">"Amei esse produto! Perfeito!"</div>
            <div class="notif-time">5 min atrás</div>
          </div>
        </div>
        <div class="notif-item" style="animation-delay:1.3s;">
          <div class="notif-icon" style="background:rgba(245,158,11,0.15);">🎫</div>
          <div>
            <div class="notif-text">Cupom LIVE20 usado — 15% off</div>
            <div class="notif-time">8 min atrás</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3: Analytics Chart -->
    <div class="bento-card" data-animate data-animate-delay="2">
      <div class="bento-card-title">Analytics que convertem</div>
      <div class="bento-card-sub">Viewers e vendas em tempo real por live.</div>
      <!-- Area Chart SVG -->
      <svg viewBox="0 0 400 130" style="width:100%; height:auto; margin-top:0.5rem;" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-viewers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F97316" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#F97316" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="grad-sales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Viewers area -->
        <path d="M0,100 L60,80 L120,55 L180,65 L240,35 L300,45 L360,20 L400,25 L400,130 L0,130 Z" fill="url(#grad-viewers)"/>
        <path d="M0,100 L60,80 L120,55 L180,65 L240,35 L300,45 L360,20 L400,25" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Sales area -->
        <path d="M0,115 L60,100 L120,85 L180,90 L240,70 L300,75 L360,55 L400,60 L400,130 L0,130 Z" fill="url(#grad-sales)"/>
        <path d="M0,115 L60,100 L120,85 L180,90 L240,70 L300,75 L360,55 L400,60" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="none"/>
        <!-- X axis labels -->
        <text x="0" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Jan</text>
        <text x="55" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Fev</text>
        <text x="115" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Mar</text>
        <text x="175" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Abr</text>
        <text x="235" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Mai</text>
        <text x="295" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Jun</text>
        <text x="355" y="128" font-size="9" fill="rgba(255,255,255,0.25)" font-family="Inter">Jul</text>
      </svg>
      <!-- Legenda -->
      <div style="display:flex; gap:1rem; margin-top:0.75rem;">
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <div style="width:10px;height:10px;border-radius:50%;background:#F97316;"></div>
          <span style="font-size:0.75rem; color:rgba(255,255,255,0.5);">Viewers</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <div style="width:10px;height:10px;border-radius:50%;background:#f43f5e;"></div>
          <span style="font-size:0.75rem; color:rgba(255,255,255,0.5);">Vendas</span>
        </div>
      </div>
    </div>

    <!-- Card 4: Mini Features -->
    <div class="bento-card" style="padding:0;" data-animate data-animate-delay="3">
      <!-- Mini Card A: Integração -->
      <div class="mini-card">
        <div>
          <div class="mini-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>
          <div class="bento-card-title" style="font-size:1rem;">Integração fácil</div>
          <div style="color:rgba(255,255,255,0.4); font-size:0.82rem; margin-top:0.25rem;">Conecte em minutos com suas ferramentas favoritas.</div>
        </div>
        <div class="mini-card-arrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </div>
      </div>
      <!-- Mini Card B: Suporte -->
      <div class="mini-card">
        <div>
          <div class="mini-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
          </div>
          <div class="bento-card-title" style="font-size:1rem;">Suporte 24/7</div>
          <div style="color:rgba(255,255,255,0.4); font-size:0.82rem; margin-top:0.25rem;">Time sempre disponível para te ajudar a vender mais.</div>
        </div>
        <div class="mini-card-arrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 3: Verificar visualmente**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: grid 2×2 com cards — mapa de pontos laranja, notificações, area chart, e mini feature cards com hover na seta.

---

## Task 6: Seção CTA Animado — Letras em Stagger + Underline

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `<!-- SECTION 5: CTA Animado -->`; adicionar CSS

- [ ] **Step 1: Adicionar CSS do CTA**

```css
/* ── CTA Section ── */
#cta-section {
  background: #030303;
  padding: 8rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.cta-animated-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  position: relative;
  z-index: 1;
}
.cta-letter {
  opacity: 0;
  transform: translateY(20px);
  display: inline-block;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.cta-letter.space { width: 0.3em; }
.cta-letter.visible {
  opacity: 1;
  transform: translateY(0);
}
.cta-underline-wrapper {
  position: relative;
  display: inline-block;
}
.cta-underline {
  position: absolute;
  bottom: -6px;
  left: 0;
  height: 4px;
  width: 0%;
  background: linear-gradient(to right, #F97316, #f87171, #fb923c);
  border-radius: 2px;
  transition: width 0.8s ease;
}
.cta-underline.visible { width: 100%; }
.cta-subtitle {
  color: rgba(255,255,255,0.45);
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  line-height: 1.6;
  max-width: 480px;
  margin: 2rem auto 0;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s;
  position: relative; z-index: 1;
}
.cta-subtitle.visible { opacity: 1; transform: translateY(0); }
.btn-cta-main {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #F97316;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 2.5rem;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
  position: relative; z-index: 1;
  opacity: 0;
  transform: translateY(16px) scale(0.97);
  transition: opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s, background 0.2s, box-shadow 0.2s;
}
.btn-cta-main.visible { opacity: 1; transform: translateY(0) scale(1); }
.btn-cta-main:hover { background: #ea6c0a; transform: scale(1.05); box-shadow: 0 8px 30px rgba(249,115,22,0.4); }
.cta-footnote {
  color: rgba(255,255,255,0.25);
  font-size: 0.8rem;
  margin-top: 1.25rem;
  position: relative; z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease 1s;
}
.cta-footnote.visible { opacity: 1; }
```

- [ ] **Step 2: Inserir HTML da Seção CTA**

Substituir `<!-- SECTION 5: CTA Animado -->` por:

```html
<section id="cta-section">
  <div class="cta-glow"></div>
  
  <div id="cta-content" style="position:relative; z-index:1;">
    <!-- Título com letras animadas -->
    <div class="cta-animated-title" id="cta-title">
      <!-- Gerado pelo JS: Task 7 splitará o texto em spans -->
      <span style="color:#fff; white-space:pre-wrap; font-size:inherit; font-weight:inherit; letter-spacing:inherit;">Comece a vender ao vivo hoje.</span>
    </div>

    <!-- Underline -->
    <div style="display:flex; justify-content:center; margin-top:-0.5rem;">
      <div style="position:relative; display:inline-block; width:fit-content; max-width:90%;">
        <div id="cta-underline" class="cta-underline"></div>
      </div>
    </div>

    <!-- Subtítulo -->
    <p class="cta-subtitle" id="cta-subtitle">
      Crie sua conta grátis e faça sua primeira live em menos de 5 minutos.
    </p>

    <!-- Botão -->
    <div style="display:flex; flex-direction:column; align-items:center;">
      <a href="#" class="btn-cta-main" id="cta-btn">
        Criar conta grátis
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <p class="cta-footnote" id="cta-footnote">Sem cartão de crédito. Cancele quando quiser.</p>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verificar visualmente**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: seção preta com glow laranja sutil ao centro e o texto CTA.

---

## Task 7: JavaScript — Scroll, Intersection Observer, Menu Mobile, CTA Animado

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — substituir `// JS behaviors — Task 7`

- [ ] **Step 1: Inserir todo o JavaScript**

Substituir `// JS behaviors — Task 7` por:

```javascript
// ── 1. Navbar scroll behavior ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}, { passive: true });

// ── 2. Mobile menu toggle ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) mobileMenu.classList.remove('open');
});

// ── 3. Scroll 3D card ──
const scrollCard = document.getElementById('scroll-card');
const scrollSection = document.getElementById('scroll-section');

function updateScrollCard() {
  if (!scrollCard || !scrollSection) return;
  const rect = scrollSection.getBoundingClientRect();
  const windowH = window.innerHeight;
  const start = windowH;
  const end = -scrollSection.offsetHeight;
  const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
  const rotateX = 20 - progress * 20;
  const scale = 1.05 - progress * 0.05;
  const translateY = progress * -40;
  scrollCard.style.transform = `rotateX(${rotateX}deg) scale(${scale}) translateY(${translateY}px)`;
}
window.addEventListener('scroll', updateScrollCard, { passive: true });
updateScrollCard();

// ── 4. Intersection Observer — [data-animate] ──
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

// ── 5. CTA Section — Letras stagger + underline + fade elements ──
const ctaTitleEl = document.getElementById('cta-title');
const ctaUnderline = document.getElementById('cta-underline');
const ctaSubtitle = document.getElementById('cta-subtitle');
const ctaBtn = document.getElementById('cta-btn');
const ctaFootnote = document.getElementById('cta-footnote');

// Split text into letter spans
const ctaText = 'Comece a vender ao vivo hoje.';
ctaTitleEl.innerHTML = '';
const letters = ctaText.split('');
let letterIndex = 0;

letters.forEach((char) => {
  const span = document.createElement('span');
  if (char === ' ') {
    span.className = 'cta-letter space';
    span.innerHTML = '&nbsp;';
  } else {
    span.className = 'cta-letter';
    span.textContent = char;
    span.style.transitionDelay = `${letterIndex * 0.04}s`;
    letterIndex++;
  }
  ctaTitleEl.appendChild(span);
});

// Underline delay = after all letters
const underlineDelay = letterIndex * 0.04 + 0.2;
ctaUnderline.style.transitionDelay = `${underlineDelay}s`;

let ctaAnimated = false;
const ctaObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !ctaAnimated) {
    ctaAnimated = true;
    // Animate letters
    document.querySelectorAll('.cta-letter').forEach(span => span.classList.add('visible'));
    // Animate underline
    setTimeout(() => ctaUnderline.classList.add('visible'), underlineDelay * 1000);
    // Animate subtitle, button, footnote
    ctaSubtitle.classList.add('visible');
    ctaBtn.classList.add('visible');
    ctaFootnote.classList.add('visible');
    ctaObserver.disconnect();
  }
}, { threshold: 0.3 });

const ctaSection = document.getElementById('cta-section');
if (ctaSection) ctaObserver.observe(ctaSection);

// ── 6. Notificações loop animation (Bento Card 2) ──
const notifObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    const items = document.querySelectorAll('.notif-item');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.animation = `slideInLeft 0.4s ease forwards`;
      }, i * 350);
    });
    notifObserver.disconnect();
  }
}, { threshold: 0.3 });

const notifList = document.getElementById('notif-list');
if (notifList) notifObserver.observe(notifList);
```

- [ ] **Step 2: Verificar funcionamento completo**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Checklist visual:
- [ ] Navbar fica transparente no topo e opaca/blur ao scrollar
- [ ] Menu hamburguer abre/fecha no mobile
- [ ] Card 3D na seção central rotaciona ao scrollar
- [ ] Elementos com `data-animate` surgem ao entrar no viewport
- [ ] Letras do CTA animam em stagger quando a seção aparece
- [ ] Underline laranja surge após as letras
- [ ] Subtítulo, botão e footnote fadeam em sequência
- [ ] Notificações slidam da esquerda ao entrar no viewport

---

## Task 8: Polimento Final — Abrir e validar

**Files:**
- Modify: `/Users/vitormiguelgoedertdaluz/Livelab/index.html` — ajustes finais de polish

- [ ] **Step 1: Adicionar footer simples ao final do body**

Antes do `<script>`, adicionar:

```html
<!-- Footer -->
<footer style="background:#030303; border-top:1px solid rgba(255,255,255,0.05); padding:2rem 1.5rem; text-align:center;">
  <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin-bottom:0.75rem;">
    <a href="#" class="logo-text" style="font-size:1.1rem; text-decoration:none;">
      l<span style="visibility:hidden;">i</span>velab
      <svg style="position:absolute;top:0.12em;left:0.435em;width:0.32em;height:0.32em;" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="#F97316"/></svg>
    </a>
  </div>
  <p style="color:rgba(255,255,255,0.2); font-size:0.8rem;">© 2026 Livelab. Todos os direitos reservados.</p>
</footer>
```

- [ ] **Step 2: Verificação final completa**

```bash
open /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Percurso de validação:
1. Desktop: scroll do topo ao rodapé verificando todas as animações
2. Redimensionar janela para <768px: navbar mobile, grid single-column
3. Checar console do browser: zero erros JS

- [ ] **Step 3: Confirmar arquivo salvo**

```bash
ls -lh /Users/vitormiguelgoedertdaluz/Livelab/index.html
```

Esperado: arquivo `index.html` com tamanho entre 20–60KB.
