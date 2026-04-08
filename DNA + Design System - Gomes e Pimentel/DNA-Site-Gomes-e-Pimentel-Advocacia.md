# SITE DNA — GOMES & PIMENTEL ADVOGADOS

**Nicho:** Advocacia multidisciplinar com foco em Direito Previdenciário, Trabalhista, Família & Sucessões, Cível e Consumidor. Escritório com 2 unidades físicas (Campo Grande e KM 32 – Nova Iguaçu, RJ), fundado em 2021, com posicionamento humanizado e foco no público da periferia carioca.

**Posicionamento:** Escritório jurídico acessível e estratégico — a interface comunica simultaneamente seriedade técnica (Cinzel + paleta dark/gold) e calor humano (copywriting empático, linguagem direta, "sem juridiquês"). A sensação de impacto é de um escritório que pertence à elite jurídica mas escolheu ficar na comunidade: luxo funcional orientado ao povo.

**Data de criação:** 2026-03-01

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS / Classe Tailwind          | Hex / Valor                                    | Função Específica no Layout                                                    |
|-----------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------|
| `--accent-gold` / `.gold-text`          | `#C5A059`                                      | Cor primária de destaque: CTAs, ícones, sublinhados, bordas ativas, links      |
| `.gold-gradient`                        | `linear-gradient(135deg, #C5A059 0%, #E2C285 50%, #C5A059 100%)` | Fill de botões primários e divisores ornamentais (`w-16 h-1`)   |
| `--primary-dark` / `.bg-dark-gray`      | `#1A1A1A`                                      | Background da seção CTA final e `<body>` base; quase preto                     |
| `bg-white`                              | `#FFFFFF`                                      | Background das seções Hero (overlay), Sobre, Serviços; base de cards           |
| `bg-gray-50`                            | `#F9FAFB`                                      | Background alternado: seções Processo, Unidades, FAQ                           |
| `text-gray-600` / `text-gray-500`       | `#4B5563` / `#6B7280`                          | Parágrafos e descrições em seções claras                                       |
| `text-gray-400`                         | `#9CA3AF`                                      | Metadados, labels secundários, textos de suporte                               |
| `text-wine` / `.text-wine`              | `#6B001A`                                      | Label acima do H2 da seção Persuasão; cor exclusiva de chamada emocional       |
| `--notification-red`                    | `#ff3b30`                                      | Badge de notificação do botão WhatsApp flutuante                               |
| `border-[#C5A059]`                      | `#C5A059`                                      | Border-top `4px` dos cards de unidade sede; borda de ativação de cards         |
| `text-yellow-400` (Tailwind)            | `#FACC15`                                      | Estrelas de avaliação nos cards de review do Google                            |
| Overlay hero fundo                      | `rgba(26,26,26,0.94)` → `rgba(26,26,26,0.97)` | Gradiente de escurecimento sobre a imagem de fundo do hero                     |
| Seleção de texto                        | `bg-[#C5A059] text-white`                      | `::selection` via classe Tailwind no `<body>`                                  |

### Tipografia

| Elemento                      | Família                   | Peso        | Tamanho Exato                             | Observações                                                                           |
|-------------------------------|---------------------------|-------------|-------------------------------------------|---------------------------------------------------------------------------------------|
| H1 Hero                       | `Cinzel`, serif            | 900 (black) | `text-4xl` (2.25rem) / `text-6xl` (3.75rem) md | `leading-tight tracking-tighter`; palavra "Jurídica" em `.gold-text`            |
| H2 Seções claras              | `Cinzel`, serif            | 700 (bold)  | `text-4xl` (2.25rem) / `text-5xl` (3rem) md | `leading-tight`; palavra-chave isolada em linha própria com `.gold-text`          |
| H2 CTA Final                  | `Cinzel`, serif            | 700         | `text-4xl` (2.25rem) / `text-5xl` (3rem) md | `leading-[1.15]`; "conversa" em `.gold-text italic`                               |
| H3 Cards Serviços             | `Cinzel`, serif            | 700         | `text-2xl` (1.5rem)                       | `brand-font`; sem tamanho de corpo diferente                                          |
| H3 Cards Unidades             | `Cinzel`, serif            | 700         | `text-2xl` (1.5rem)                       | `brand-font`; com label colorida abaixo                                               |
| H4 Processo / FAQ             | `Outfit`, sans-serif       | 700         | `text-xs` (`text-sm` FAQ) (0.75rem / 0.875rem) | `uppercase tracking-widest`; FAQ também `md:text-base`                         |
| Body / Parágrafos hero        | `Outfit`, sans-serif       | 400         | `text-xl` (1.25rem) / `text-2xl` (1.5rem) md | `leading-relaxed`; cor `text-gray-400`                                           |
| Body / Parágrafos seções      | `Outfit`, sans-serif       | 400         | `text-lg` (1.125rem)                      | `leading-relaxed text-gray-600`                                                       |
| Body cards serviço            | `Outfit`, sans-serif       | 400         | `text-sm` (0.875rem)                      | `text-gray-500 leading-relaxed`                                                       |
| Sub-listas cards              | `Outfit`, sans-serif       | 700 (bold)  | `text-[10px]`                             | `uppercase tracking-widest text-gray-400`; marcador `•`                              |
| Label eyebrow (eyebrow tag)   | `Outfit`, sans-serif       | 700         | `text-xs` (0.75rem)                       | `uppercase tracking-[0.4em]`; em gold ou `.text-wine`; bloco acima do H2            |
| Nav links desktop             | `Outfit`, sans-serif       | 600         | `text-xs` (0.75rem)                       | `uppercase tracking-widest`; hover underline animado                                  |
| Nav links mobile drawer       | `Outfit`, sans-serif       | 700         | `14px`                                    | `uppercase letter-spacing: 0.15em`; `opacity: 0.7` default → `1` no hover           |
| Logo "Gomes & Pimentel"       | `Cinzel`, serif            | 700         | `text-lg` (1.125rem)                      | `.brand-font`; `leading-none`; subtítulo gold `text-[10px] tracking-[0.2em]`        |
| Rating hero card              | `Cinzel`, serif            | 700         | `text-2xl` (1.5rem)                       | "5.0" em `.brand-font`; label abaixo `text-[9px] uppercase tracking-tighter`        |
| Review card autor             | `Outfit`, sans-serif       | 700         | `text-[10px]`                             | `uppercase tracking-wider`; data em `text-[8px]`                                     |

### Estilo Geral

Design editorial de prestígio humanizado com matriz light/gold: ao contrário do padrão dark-gold da advocacia premium, o site usa fundos brancos e cinza-claros (`#FFFFFF`, `#F9FAFB`) como base majoritária, reservando o negro `#1A1A1A` apenas para a seção de conversão final — criando uma jornada visual de abertura para fechamento. A tipografia `Cinzel` (serifa romana de alta monumentalidade) nos títulos evoca pedra entalhada e tradição jurídica, enquanto `Outfit` (grotesca geométrica contemporânea) no corpo garante legibilidade e acessibilidade no texto corrido. O ouro `#C5A059` com gradiente tricolor em diagonal (`135deg`) funciona como único elemento de calor e status, aplicado com disciplina em botões, bordas e divisores. As molduras de imagem com `border-radius` assimétrico (`100px 0px 100px 0px` e `0px 60px 0px 60px`) são o elemento mais diferenciador — contrariando o minimalismo retangular e injetando personalidade arquitetônica sem recorrer a formas orgânicas genéricas.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Header / Navegação

**Estrutura:** Flexbox `justify-between items-center`. Altura dinâmica via `py-4`. `max-width: 1300px` via `.content-container`. Logo à esquerda (img + div com nome/subtítulo separado por `border-l border-gray-200`). Nav desktop `hidden md:flex gap-8 ml-auto`. Hamburger `md:hidden` com ícone Lucide `menu`.

**Fundo:** Estado inicial: `bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm`. Após scroll (`scrollThreshold: 100px`): adiciona `.header-scrolled` → `background-color: rgba(255,255,255,0.98); box-shadow: 0 10px 30px rgba(0,0,0,0.05)`. Transição: `0.4s cubic-bezier(0.4,0,0.2,1)` no transform, `0.3s ease` no background.

**Elementos Restritos:** Logo: `<img> h-10 w-auto` + coluna `hidden sm:block` com nome `text-lg font-bold brand-font` + subtítulo `text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em]`. Nav links com `group` e `<span>` de underline: `absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all group-hover:w-full`.

**Animação:** Hide-on-scroll-down: `header-hidden → transform: translateY(-100%)` quando scroll desce após 100px. Show-on-scroll-up: remove a classe. Listener com `{ passive: true }`.

**Micro-interações:** Nav links: `hover:text-[#C5A059] transition-all` + underline `w-0 → w-full` via `group-hover:w-full`. Hamburger: `hover:bg-gray-100 rounded-sm transition-colors`. Drawer mobile: `right: -100% → right: 0` com `transition: 0.4s cubic-bezier(0.4,0,0.2,1)`.

**Diferenciador Visual:** O underline dos nav links não é um simples `border-bottom` — é um `<span>` absoluto com `width: 0 → 100%` animado via `group-hover`, criando um efeito de "linha que cresce da esquerda". O subtítulo "Advocacia Estratégica" em gold abaixo do nome posiciona o escritório sem precisar de tagline separada.

---

### SEÇÃO 2 — Hero

**Estrutura:** `grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto`. `pt-40 pb-24 md:pt-52 md:pb-40`. Coluna esquerda: `space-y-8 lg:max-w-[540px] text-center lg:text-left`. Coluna direita: composição de imagens com `relative w-full max-w-[460px] h-[500px]`.

**Fundo:** `.hero-pattern` = `background-image: linear-gradient(rgba(26,26,26,0.94), rgba(26,26,26,0.97)), url(unsplash-books)`. `background-size: cover; background-position: center`. Overlay quase opaco que deixa apenas textura sutil da foto.

**Elementos Restritos:** Eyebrow pill: `inline-flex gap-2 border border-[#C5A059]/40 bg-[#C5A059]/10 px-4 py-1.5 rounded-full` com `div w-2 h-2 rounded-full bg-[#C5A059] animate-pulse`. CTA primário: `.gold-gradient text-white py-4 px-10 rounded-sm`. CTA secundário: `border border-white/20 text-white py-4 px-10 rounded-sm`. Imagem principal: `absolute top-0 right-0 w-[85%] h-full hero-curved-main` (`border-radius: 100px 0px 100px 0px`). Imagem secundária (inset): `absolute bottom-10 left-0 w-3/5 h-[55%] hero-curved-inset border-[6px] border-[#1A1A1A]` (`border-radius: 0px 60px 0px 60px`). Rating card: `absolute -bottom-4 right-6 bg-white p-6 shadow-2xl hidden md:block rounded-sm`.

**Animação:** Composição de imagens: `.animate-float` → `@keyframes float { 0%,100%: translateY(0); 50%: translateY(-15px) }` — `5s ease-in-out infinite`. Imagens com `.vivid-img` filtro `saturate(1.3) contrast(1.1)`.

**Micro-interações:** CTA primário: `hover:brightness-110 hover:-translate-y-1 transition-all`. CTA secundário: `hover:border-[#C5A059] hover:text-[#C5A059] transition-all`. Ícone balança no CTA secundário: `group-hover:rotate-12 transition-transform`. Imagens: `.vivid-img:hover { filter: saturate(1.5) contrast(1.15); transform: scale(1.02) }` — `transition: 0.6s cubic-bezier(0.4,0,0.2,1)`. Imagem inset: `group-hover:scale-110 transition-transform duration-700`.

**Diferenciador Visual:** A composição de imagens duplas com molduras assimétricas (`100px 0 100px 0` e `0 60px 0 60px`) + borda de `6px` solid `#1A1A1A` na imagem menor cria profundidade editorial e personalidade visual única. O card de rating `5.0` com estrelas Lucide flutuando no canto inferior-direito da composição funciona como prova social integrada ao visual, não como seção separada.

---

### SEÇÃO 3 — Persuasão / Dor e Solução

**Estrutura:** `grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto`. `py-24 bg-white`. Coluna esquerda: lista de dores. Coluna direita: card de solução com `border-l-8 border-[#C5A059]`.

**Fundo:** `bg-white`. Card direito: `bg-gray-50 p-10 md:p-14 rounded-sm border-l-8 border-[#C5A059] shadow-xl`. Ícone decorativo: `absolute top-0 right-0 p-4 opacity-10` — `heart-handshake` Lucide `w-20 h-20 text-[#C5A059]`.

**Elementos Restritos:** Eyebrow esquerdo: `text-wine font-bold uppercase tracking-[0.3em] text-xs`. Lista de dores: `flex gap-3 items-center` com ícone `shield-alert` em `text-wine w-5 h-5`. CTA no card: `w-full gold-gradient text-white py-5 rounded-sm font-bold uppercase tracking-widest text-xs`. Nota OAB: `text-center text-[10px] text-gray-400 mt-4 uppercase font-bold`.

**Animação:** Sem animação de entrada explícita nesta seção — dependência de scroll natural do navegador.

**Micro-interações:** CTA: `hover:brightness-110 transition-all`. Nenhuma interação nos itens de lista.

**Diferenciador Visual:** A `border-left: 8px solid #C5A059` no card de solução é um elemento tipicamente editorial de revistas jurídicas — cria assimetria proposital que direciona o olho da esquerda para a direita. A cor `#6B001A` (vinho) nos ícones de dor é única na paleta — não é o red genérico de "perigo" nem o gold do escritório, mas uma cor que evoca dramatismo e urgência sem agressividade.

---

### SEÇÃO 4 — Sobre / Nosso Escritório

**Estrutura:** `grid lg:grid-cols-2 gap-20 items-center`. `py-32 bg-white`. Coluna esquerda (imagens): `grid grid-cols-2 gap-6 order-2 lg:order-1`. Coluna direita (texto): `order-1 lg:order-2 space-y-8 lg:pl-10`. Cabeçalho centralizado com `mb-20`.

**Fundo:** `bg-white`. Divisor ornamental: `w-16 h-1 gold-gradient mx-auto mt-6` — barra dourada de `64×4px`.

**Elementos Restritos:** Imagem 1: `hero-curved-main` (`border-radius: 100px 0 100px 0`) — `h-[500px] md:h-[600px] object-cover`. Imagem 2 (coluna 2 com `pt-20` para offset vertical): `hero-curved-inset` (`border-radius: 0 60px 0 60px`). Stats grid: `grid grid-cols-2 gap-8 pt-4` com número `text-4xl font-bold italic brand-font` + label `text-[10px] text-gray-400 uppercase tracking-widest mt-2`. CTA dark: `bg-[#1A1A1A] py-4 px-10 rounded-sm hover:bg-[#C5A059]`.

**Animação:** `.vivid-img` nas imagens com `saturate(1.3) contrast(1.1)`. Imagens com `group shadow-2xl overflow-hidden`.

**Micro-interações:** Imagem `.vivid-img:hover { filter: saturate(1.5) contrast(1.15); transform: scale(1.02) }` — `0.6s cubic-bezier(0.4,0,0.2,1)`. Stats: `group-hover:gold-text transition-colors` no número. CTA: `hover:bg-[#C5A059] transition-all`.

**Diferenciador Visual:** O offset vertical da segunda coluna de imagem (`pt-20`) cria uma composição em "degrau" que dá ritmo sem precisar de elementos decorativos adicionais. Os stats "2 Unidades" e "Abertura" sem números padronizados (não é "200+ clientes" genérico) ancoram o escritório em fatos verificáveis e específicos.

---

### SEÇÃO 5 — Processo (4 Passos)

**Estrutura:** `grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative`. `py-24 bg-gray-50`. Linha de conexão: `hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-0`. Cards: `text-center group bg-white p-8 md:p-4 rounded-sm shadow-sm md:shadow-none relative z-10`.

**Fundo:** `bg-gray-50`. Cards: `bg-white` com `z-10` para sobrepor a linha horizontal.

**Elementos Restritos:** Ícone container: `w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] border-2 border-[#C5A059]/20 shadow-md`. Título: `font-bold text-[#1A1A1A] mb-3 uppercase text-xs tracking-widest`. Texto: `text-gray-400 text-[11px] leading-relaxed px-4`.

**Animação:** Nenhuma de entrada. Hover no ícone é a animação principal.

**Micro-interações:** Container do ícone: `group-hover:gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300` — fill dourado no círculo, texto branco, borda some.

**Diferenciador Visual:** A linha horizontal `bg-gray-200` absoluta no `top-1/2` conecta visualmente os 4 passos como um timeline — mas é `hidden md:block`, existindo apenas no desktop. Os cards ficam `z-10` sobre ela, criando a ilusão de etapas conectadas sem usar SVG ou CSS complexo.

---

### SEÇÃO 6 — Serviços / Áreas do Direito

**Estrutura:** `flex flex-wrap justify-center gap-8 max-w-7xl mx-auto`. `py-32 bg-white`. Cada card: `w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]`. 5 cards total (Previdenciário, Trabalho, Família, Cível, Consumidor).

**Fundo:** `bg-white`. Cards: `bg-gray-50 border border-gray-100 rounded-sm`. Ícone decorativo de fundo: `absolute top-0 right-0 p-4 opacity-5` com Lucide `w-16 h-16`.

**Elementos Restritos:** Ícone container: `mb-8 p-4 bg-white inline-block rounded-sm`. Ícone: `w-8 h-8 text-[#C5A059]`. H3: `text-2xl font-bold brand-font`. Sub-lista: `text-[10px] text-gray-400 mb-8 uppercase font-bold tracking-widest space-y-2`. CTA link: `inline-flex items-center gap-3 text-[#C5A059] font-bold text-xs uppercase tracking-widest`.

**Animação:** Ícone de fundo decorativo: `group-hover:scale-150 transition-transform duration-700`.

**Micro-interações:** Card: `hover:border-[#C5A059]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500`. Ícone container: `group-hover:bg-[#C5A059]/10 transition-colors`. CTA link: `group-hover:gap-5 transition-all` — o gap entre texto e seta aumenta de `gap-3` para `gap-5`, criando efeito de seta que avança.

**Diferenciador Visual:** O ícone de fundo `opacity-5` que escala para `scale-150` no hover é um detalhe imperceptível em repouso mas que adiciona vitalidade ao hover sem competir com o conteúdo principal. O CTA "Consultar Especialista →" com gap animado é mais sofisticado que um botão padrão — funciona como link editorial de revista.

---

### SEÇÃO 7 — Nossas Unidades

**Estrutura:** `grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto`. `py-32 bg-gray-50`. 2 cards de unidade: Sede (Campo Grande) e Estratégica (KM 32 – Nova Iguaçu).

**Fundo:** `bg-gray-50`. Cards: `bg-white p-10 rounded-sm shadow-xl`. Card sede: `border-t-4 border-[#C5A059]`. Card secundária: `border-t-4 border-gray-200`.

**Elementos Restritos:** Header do card: `flex justify-between items-start mb-8` com H3 + label de tipo + ícone `map-pin`. Lista de infos: `space-y-6 mb-10` com ícones Lucide `map` e `clock` em `text-[#C5A059] shrink-0 w-5 h-5`. CTAs: `bg-[#1A1A1A] hover:bg-[#C5A059]` + link Google Maps em gold. Label "Sexta-feira: Fechado" em `text-red-800 text-[10px] uppercase font-bold`.

**Animação:** Nenhuma de entrada.

**Micro-interações:** Cards: `hover:-translate-y-2 transition-all duration-500` — levitação de `8px` no hover. Ícone `map-pin` no card secundário: `group-hover:text-[#C5A059] transition-colors`. CTAs: `hover:bg-[#C5A059] transition-all`.

**Diferenciador Visual:** A distinção visual entre sede (`border-[#C5A059]`) e unidade estratégica (`border-gray-200`) com label `text-gray-400` estabelece hierarquia sem depreciar nenhuma. O aviso "Em breve no Google Maps" em itálico cinza no card KM 32 é honesto sobre o status real — autenticidade que gera confiança.

---

### SEÇÃO 8 — Reviews do Google (Marquee)

**Estrutura:** `review-marquee-container` com `display: flex; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)`. `.review-marquee-content { display: flex; gap: 2rem; animation: marquee 40s linear infinite; padding: 1rem 0 }`. `py-32 bg-white overflow-hidden`.

**Fundo:** `bg-white`. Cards: `bg-gray-50 border border-gray-100 rounded-sm w-[350px] shrink-0`.

**Elementos Restritos:** Stars: `flex gap-1 text-yellow-400 text-xs` com Lucide `star fill-current`. Texto depoimento: `text-[#333] text-xs leading-relaxed mb-6 italic text-left`. Footer do card: `flex items-center gap-3 border-t border-gray-200 pt-4`. Avatar inicial: `w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[10px]` — cor varia por card (`bg-[#C5A059]`, `bg-[#1A1A1A]`, `bg-gray-200 text-gray-600`).

**Animação:** `@keyframes marquee { 0%: translateX(0); 100%: translateX(-50%) }` — `40s linear infinite`. Conteúdo duplicado (4 + 4 cards) para loop seamless. Fade nas bordas via `mask-image`.

**Micro-interações:** `.review-marquee-content:hover { animation-play-state: paused }` — pausa completa no hover do container. Cards: `hover:border-[#C5A059]/30 transition-all`.

**Diferenciador Visual:** O fade lateral via `mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)` é técnica CSS pura que cria ilusão de scroll infinito com começo/fim desfocados. Os avatares com iniciais em cores variadas (gold, dark, gray) criam diversidade visual sem usar fotos reais de clientes — resolve o problema de privacidade com estética.

---

### SEÇÃO 9 — FAQ

**Estrutura:** `content-container max-w-4xl mx-auto`. `py-32 bg-gray-50`. Itens: `<details>` nativo HTML com `<summary>` — sem JS para abertura/fechamento (usa CSS `group-open`).

**Fundo:** `bg-gray-50`. Items: `bg-white border border-gray-100 rounded-sm overflow-hidden`.

**Elementos Restritos:** `<summary>`: `flex justify-between items-center p-6 cursor-pointer list-none`. H4: `font-bold text-[#1A1A1A] text-sm md:text-base uppercase tracking-widest`. Chevron: `<span class="group-open:rotate-180 transition-transform">` com Lucide `chevron-down text-[#C5A059]`. Conteúdo: `p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50`.

**Animação:** `group-open:rotate-180 transition-transform` no chevron — rotação de `0 → 180deg` ao abrir via CSS puro com `<details>` + Tailwind `group`.

**Micro-interações:** Chevron: `rotate(0deg) → rotate(180deg)` sincronizado com `<details open>`. `<summary>`: cursor `pointer`, sem hover visual explícito (usa o comportamento nativo do browser).

**Diferenciador Visual:** Uso de `<details>/<summary>` HTML semântico nativo em vez de accordion JS — mais performático, mais acessível (funciona sem JS), SEO-friendly sem necessidade de `max-height` hack. O `list-none` no summary remove o triângulo nativo do browser, substituído pelo chevron customizado em gold.

---

### SEÇÃO 10 — CTA Final / Formulário de Contato

**Estrutura:** `grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto`. `py-32 bg-dark-gray text-white relative overflow-hidden`. Dois elementos decorativos de fundo: shape inclinada e glow circular.

**Fundo:** `bg-[#1A1A1A]`. Shape decorativa: `absolute top-0 right-0 w-1/3 h-full bg-[#C5A059]/5 skew-x-[-20deg] pointer-events-none`. Glow: `absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/3 rounded-full blur-3xl pointer-events-none`.

**Elementos Restritos:** Eyebrow: `gold-text font-bold uppercase tracking-[0.5em] text-[10px]`. H2: `text-4xl md:text-5xl font-bold brand-font leading-[1.15]` — "conversa" em `.gold-text italic`. Lista de benefícios: `flex items-center gap-4` com container circular `w-10 h-10 rounded-full border border-[#C5A059]/30` + ícone Lucide `w-5 h-5 text-[#C5A059]`. Formulário: `bg-[#1A1A1A]/50 p-8 rounded-sm border border-white/5` com inputs `bg-white/5 border border-white/10 text-white rounded-sm`.

**Animação:** Sem animações de entrada específicas nesta seção.

**Micro-interações:** Inputs: `focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all`. Botão submit: `gold-gradient hover:brightness-110 transition-all`. Links externos: `hover:text-[#C5A059] transition-colors`.

**Diferenciador Visual:** O shape inclinado com `skew-x-[-20deg]` é um elemento geométrico incomum em landing pages jurídicas — quebra a ortogonalidade total da seção escura sem recorrer a formas arredondadas genéricas. A combinação de `bg-[#C5A059]/5` (quase invisível) com `blur-3xl` no glow circular cria atmosfera sem peso visual.

---

### SEÇÃO 11 — Footer

**Estrutura:** `grid md:grid-cols-3 gap-12` (ou flex dependendo da implementação final). Coluna 1: brand. Coluna 2: links. Coluna 3: contato. Footer bottom: `flex justify-between items-center`. Border-top divisor: `.footer-divider-strong { border-top: 2px solid #E5E7EB }`.

**Fundo:** Fundo dark continuando da seção CTA ou neutro.

**Micro-interações:** Links: `hover:text-[#C5A059] transition-colors`. Social links: padrão de hover gold.

**Diferenciador Visual:** `.footer-divider-strong` usa `2px` de espessura e `#E5E7EB` — mais pesado que o padrão de `1px border-gray-100`, criando separação visual firme entre conteúdo e bottom bar.

---

## COMPONENTES REUTILIZÁVEIS

### Botão Primário — `.gold-gradient` CTA

```css
/* Estado padrão */
.btn-primary {
  background: linear-gradient(135deg, #C5A059 0%, #E2C285 50%, #C5A059 100%);
  color: #FFFFFF;
  padding: 1rem 2.5rem;       /* py-4 px-10 */
  border-radius: 2px;          /* rounded-sm */
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;          /* text-xs */
  text-transform: uppercase;
  letter-spacing: 0.1em;       /* tracking-widest */
  box-shadow: 0 15px 30px rgba(197, 160, 89, 0.3);
  transition: filter 0.2s ease, transform 0.2s ease;
}

/* Hover */
.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-4px);   /* -translate-y-1 */
}
```

### Botão Secundário — Ghost sobre Dark

```css
.btn-secondary-dark {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.btn-secondary-dark:hover {
  border-color: #C5A059;
  color: #C5A059;
}
```

### Botão Dark → Gold (Sobre / Unidades)

```css
.btn-dark-to-gold {
  background-color: #1A1A1A;
  color: #FFFFFF;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: background-color 0.25s ease;
}

.btn-dark-to-gold:hover {
  background-color: #C5A059;
}
```

### Card de Serviço

```css
.service-card {
  background-color: #F9FAFB;
  border: 1px solid #F3F4F6;
  border-radius: 2px;           /* rounded-sm */
  padding: 3rem;                /* p-12 */
  position: relative;
  overflow: hidden;
  transition: border-color 500ms ease,
              box-shadow 500ms ease;
}

.service-card:hover {
  border-color: rgba(197, 160, 89, 0.3);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
}

/* Ícone de fundo decorativo */
.service-card .icon-bg {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  opacity: 0.05;
  transition: transform 700ms ease;
}

.service-card:hover .icon-bg {
  transform: scale(1.5);
}

/* Container do ícone principal */
.service-card .icon-box {
  background-color: #FFFFFF;
  padding: 1rem;
  display: inline-block;
  border-radius: 2px;
  margin-bottom: 2rem;
  transition: background-color 0.2s ease;
}

.service-card:hover .icon-box {
  background-color: rgba(197, 160, 89, 0.1);
}
```

### Card de Unidade

```css
.unit-card {
  background-color: #FFFFFF;
  padding: 2.5rem;
  border-radius: 2px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  transition: transform 500ms ease;
}

/* Sede */
.unit-card--primary {
  border-top: 4px solid #C5A059;
}

/* Unidade secundária */
.unit-card--secondary {
  border-top: 4px solid #E5E7EB;
}

.unit-card:hover {
  transform: translateY(-8px);  /* hover:-translate-y-2 */
}
```

### Card de Review Google

```css
.review-card {
  background-color: #F9FAFB;
  border: 1px solid #F3F4F6;
  border-radius: 2px;
  padding: 2rem;
  width: 350px;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
}

.review-card:hover {
  border-color: rgba(197, 160, 89, 0.3);
}

/* Avatar de iniciais */
.review-avatar {
  width: 2rem;             /* w-8 */
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 10px;
}
/* Variantes: bg #C5A059, bg #1A1A1A, bg #E5E7EB (text-gray-600) */
```

### Divisor Ornamental Gold

```css
.gold-divider {
  width: 4rem;           /* w-16 */
  height: 0.25rem;       /* h-1 */
  background: linear-gradient(135deg, #C5A059 0%, #E2C285 50%, #C5A059 100%);
  margin: 1.5rem auto 0; /* mx-auto mt-6 */
}
/* Versão menor: w-12, mt-4 */
```

### Eyebrow Label (eyebrow tag de seção)

```css
.eyebrow {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;     /* text-xs */
  text-transform: uppercase;
  letter-spacing: 0.4em;  /* tracking-[0.4em] */
  color: #C5A059;
  display: block;
  margin-bottom: 1rem;
}
/* Variante vinho: color #6B001A; letter-spacing: 0.3em */
```

### Pill Badge / Eyebrow Hero

```css
.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(197, 160, 89, 0.4);
  background-color: rgba(197, 160, 89, 0.1);
  padding: 0.375rem 1rem;  /* px-4 py-1.5 */
  border-radius: 9999px;   /* rounded-full */
}

.hero-pill .dot {
  width: 0.5rem;           /* w-2 */
  height: 0.5rem;
  border-radius: 50%;
  background-color: #C5A059;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Molduras de Imagem Assimétricas

```css
/* Moldura Principal (topo-esquerdo + baixo-direito arredondados) */
.hero-curved-main {
  border-radius: 100px 0px 100px 0px;
}

/* Moldura Inset (topo-direito + baixo-esquerdo arredondados) */
.hero-curved-inset {
  border-radius: 0px 60px 0px 60px;
}
/* Usadas sempre em par; inset com border 6px solid #1A1A1A quando flutuante */
```

### WhatsApp Float

```css
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: pulse-wa 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  background-color: #128C7E;
}

/* pulse-wa: 0% box-shadow 0 0 0 0 rgba(37,211,102,0.7) | 70% 0 0 0 15px transparent | 100% 0 0 0 0 transparent */

/* Badge de notificação */
.wa-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff3b30;
  color: white;
  font-size: 11px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: shake 2s infinite;
  /* shake: 0%,100% rotate(0) | 10%,30%,50%,70%,90% rotate(-10deg) | 20%,40%,60%,80% rotate(10deg) */
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Fundo escuro total como identidade do escritório jurídico** — O site usa fundos claros (`#FFFFFF`, `#F9FAFB`) como base majoritária nas seções de conteúdo, reservando o `#1A1A1A` apenas para a seção de conversão final. A progressão claro → escuro cria arco narrativo de abertura/acolhimento para comprometimento/ação — o inverso da maioria dos sites de advocacia "premium" que são dark do início ao fim.

❌ **2. Imagens de stock retangulares com border-radius uniforme de 8-12px** — As imagens utilizam molduras assimétricas exclusivas: `border-radius: 100px 0px 100px 0px` e `0px 60px 0px 60px` — sempre em par, criando composição editorial sem usar carrosséis ou grids banais. A borda de `6px solid #1A1A1A` na imagem menor reforça o enquadramento sem decoração adicional.

❌ **3. Seção de avaliações com carrossel de flechas "← →" e estrelas genéricas** — As avaliações reais do Google são exibidas em marquee horizontal infinito com fade lateral via `mask-image` CSS puro, pausável no hover. Os avatares usam iniciais dos clientes em círculos coloridos — sem fotos de stock anônimas ou depoimentos fictícios não rastreáveis.

❌ **4. FAQ implementado com accordion JavaScript de max-height e classes .active** — O FAQ usa a tag `<details>/<summary>` nativa do HTML com Tailwind `group-open:rotate-180` para o chevron — zero JavaScript, totalmente acessível via teclado, funciona sem JS ativo, e o `<summary>` renderiza com cursor pointer nativo.

❌ **5. CTA de contato com "Fale Conosco" genérico e botão sem diferenciação** — O CTA principal no hero carrega um ícone SVG inline do WhatsApp (não a lib de ícones) para garantir carregamento sem dependência, com texto "Falar no WhatsApp" em vez de "Fale Conosco". O CTA secundário usa ícone de balança `rotate-12` no hover — micro-interação que reforça a identidade jurídica do negócio.

❌ **6. Seção de processo como lista numerada ou bullets verticais** — O processo de 4 etapas é apresentado em grid horizontal `md:grid-cols-4` com uma linha de timeline real (`absolute h-[1px] bg-gray-200`) passando pelo centro, sobre a qual os cards flutuam com `z-10`. No hover de cada card, o ícone circular ganha `gold-gradient` fill — transformando o processo em elemento interativo.

❌ **7. Cards de serviço com ícone + título + texto e zero camada de profundidade** — Cada card tem um ícone decorativo de fundo (`opacity-5`, `w-16 h-16`) que escala `scale-150` no hover durante `700ms` — invisível em repouso mas animado no hover, criando profundidade sem poluição visual. A sub-lista em `text-[10px] uppercase tracking-widest` dentro de cada card adiciona densidade de informação técnica que o público mais exigente valoriza.
