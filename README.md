# Landing Page — Lucas Rodrigues Pereira

> Landing page pessoal de portfólio, construída com [Astro](https://astro.build) + Tailwind CSS.
> Tema escuro, geração estática, zero JavaScript de framework.

[![Astro](https://img.shields.io/badge/Astro-4.16-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-accent.svg?style=flat-square)](#licença)

---

## 🎯 Motivação

Este projeto tem **três camadas de propósito**. A primeira é técnica, a segunda é
pedagógica, e a terceira é a que realmente importa.

---

### 1. O experimento do 9Router

O ponto de partida foi **configurar o 9Router** e validar se é possível produzir um
resultado profissional **usando apenas ferramentas gratuitas e modelos de IA gratuitos**.

> *Com roteamento de modelos gratuitos, contexto bem estruturado e prompts de
> contextualização bem escritos, é possível entregar uma landing page de qualidade
> profissional sem nenhum custo de assinatura?*

**A resposta deste repositório é sim.** E o que torna isso possível não é o modelo — é a
**engenharia de contexto** em volta dele.

| Princípio | Na prática, neste repo |
|---|---|
| **Contexto antes do prompt** | Ler o código existente antes de editar. Nenhuma linha foi escrita sem ler o arquivo vizinho e o `tailwind.config.mjs`. |
| **Tarefas pequenas e verificáveis** | O trabalho foi quebrado em etapas: imagem → conteúdo → SEO → validação. Cada etapa termina com `astro check` + `build`. |
| **Prompts de contextualização** | O prompt descrevia **o porquê** (design system, tom de voz, a11y, SEO), não só o **o quê**. O modelo escolheu a implementação. |
| **Validação como loop** | `astro check` (0 erros) e `build` rodando a cada etapa. Placeholder remanescente vira falha de build, não REVIEW. |
| **O modelo é executor, não autor** | Decisões de arquitetura (estrutura de componentes, paleta, tokens) permaneceram humanas. A IA executou. |
| **Zero dependências desnecessárias** | Sem libs de UI, sem framer-motion, sem icon-pack. Tailwind + SVG inline + ~30 linhas de JS para o menu mobile. |

**Ferramentas gratuitas utilizadas:** Astro (MIT, 0 KB de JS), Tailwind CSS (MIT), modelos
de IA via 9Router, Cloudflare Pages / GitHub Pages, e imagens otimizadas localmente com
`sharp` via `astro:assets` (sem CDN externo).

---

### 2. Oficina de estudo: LeetCode e projetos pequenos

O objetivo **principal** não era a landing page — era o **processo**. Este repositório
serve como uma **oficina permanente de estudo**:

- **Espaço para LeetCode** — a estrutura de componentes, a disciplina de types e o
  loop `check` → `build` → `commit` são exatamente o mesmo ciclo usado para resolver
  problemas de algoritmo.
- **Berçário para projetos pequenos** — tudo aqui nasce rápido, versionado e revisável.
  Um projeto mínimo, do zero ao deploy, sem ruído.
- **Cada PR é um exercício** — ler o diff, entender a decisão, refatorar.
- **Documentação como parte do trabalho** — o README não é burocracia posterior; é
  metade do aprendizado.

---

### 3. A régua: Akita e as horas de voo

Todo o projeto é regido por uma única régua, que vem de **Fábio Akita** (AkitaOnRails)
e que ele repete exaustivamente em praticamente toda conversa sobre carreira:

> **Não existe atalho.** O que separa um júnior de um pleno não é um curso, um
> bootcamp ou um certificado — são **milhares de horas de contato com código real**.

Três conceitos dele organizam a forma como a IA é usada aqui:

| Conceito | O que significa | Como se aplica neste repo |
|---|---|---|
| **Horas de voo** | Analogia do piloto: não adianta fazer "ground school", é preciso pilotar | Centenas de linhas escritas, lidas e *entendidas* — não copiadas e esquecidas |
| **Repertório e modelos mentais** | Ler código dos outros e encarar problema difícil é o que cria repertório | Ler o repositório inteiro antes de editar; enfrentar o bug de layout do `aria-expanded` invertido em vez de delegar |
| **Bunda na cadeira** | Sentar, sofrer com o código, ler documentação, errar e consertar | O `astro check` roda a cada etapa. Erro não é escondido — é o sinal |

**A consequência prática é a regra deste projeto:**

> **A IA é ferramenta, não muleta.**

Concretamente:

1. **Nunca aceitar código que você não consegue explicar.** Se não dá para defender a
   linha em uma revisão, ela não entra.
2. **Usar a IA para o tedium, escrever o substantivo.** Boilerplate, formatação,
   repetição — IA. Decisão de arquitetura, modelagem de domínio, trade-offs —
   humanos.
3. **A IA explica, não substitui.** O prompt pede **o porquê**, não o o quê. A
   implementação é o exercício; a explicação vem depois.
4. **Azar o tempo é o trabalho.** Tempo de leitura e escrita do código é o tempo de voo.
   Ler e escrever rápido demais é o oposto de aprender.
5. **Toolchain gratuito de propósito.** O stack inteiro é MIT justamente para que o
   custo nunca seja a barreira — a barreira é o tempo de cadeira.

### Conclusão

O custo não é o obstáculo — a **organização do contexto** é. Um modelo gratuito com
contexto fragmentado produz lixo; o mesmo modelo com o repositório lido, a tarefa
quebrada e a validação automatizada produz código pronto para produção.

Mas o custo *financeiro* ser zero é a parte fácil. A parte difícil — a que a IA
**não** resolve por você — é a **hora de cadeira**. Ela escreve o primeiro rascunho;
quem constrói o repertório é você, lendo, escrevendo, errando e consertando.

> *A ferramenta mais poderosa do mundo não substitui as horas de voo — ela só as
> torna mais bem aproveitadas.*

---

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | Astro 4.16 (SSG) |
| Estilo | Tailwind CSS 3.4 |
| Imagens | `astro:assets` + sharp (WebP, responsivo) |
| Tipografia | Outfit + Inter (Google Fonts) |
| Validação | `astro check` (TypeScript + TSX) |
| JS runtime | ~30 linhas vanilla (menu mobile) |

---

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321
```

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o `dist/` localmente para testar o build |
| `npm run check` | Type-check de todos os `.astro` (0 erros, 0 warnings) |

**Requisito:** Node.js 18+.

---

## 🗂 Estrutura

```
src/
├── components/
│   ├── Header.astro      # nav fixa + menu mobile acessível
│   ├── Hero.astro        # foto de perfil, CTA, badge de disponibilidade
│   ├── About.astro       # bio + timeline de experiência
│   ├── Skills.astro      # stack agrupada por categoria
│   ├── Projects.astro    # portfólio com capas
│   ├── Contact.astro     # e-mail, LinkedIn, GitHub, localização
│   └── Footer.astro      # créditos e redes sociais
├── layouts/
│   └── BaseLayout.astro  # <head>, SEO, Open Graph, JSON-LD Person
├── pages/
│   └── index.astro       # única página — monta as seções
├── styles/
│   └── global.css        # tokens, reset, scrollbar, a11y
└── assets/               # foto de perfil + capa de projeto
```

Fluxo: `index.astro` → `BaseLayout` (SEO/a11y shell) → seções. Cada componente é
autônomo e recebe apenas o que precisa.

---

## ✨ Destaques técnicos

### Performance
- **0 KB de JS de framework** — Astro envia zero JS de hydrate por padrão
- Imagens em **WebP** com `widths`/`sizes` corretos → `srcset` automático
- `loading="lazy"` em tudo abaixo da dobra; `loading="eager"` só na foto do Hero
- Fonte com `preconnect` e `display=swap`

### Acessibilidade
- Skip-link para o conteúdo principal
- `aria-expanded` / `aria-controls` no menu mobile (com estado real, não decorativo)
- `:focus-visible` com contorno visível em todo elemento focável
- `prefers-reduced-motion` respeitado — desliga todas as animações
- Hierarquia semântica: `header` → `main` → `section` com `id` → `footer`
- Um único `<h1>`; `h2`/`h3` em ordem

### SEO
- `title`, `description`, `canonical`, `lang="pt-BR"`
- Open Graph + Twitter Card
- **JSON-LD `Person`** com nome, e-mail, formação (UFC), `knowsAbout` e `sameAs` (LinkedIn + GitHub)

### Design system
Paleta definida em `tailwind.config.mjs` e espelhada em CSS custom properties:

| Token | Uso |
|---|---|
| `ink-900/800/700/600` | fundos e bordas, do mais profundo ao mais elevado |
| `accent-300/400/500/600/700` | terracota — CTAs, ícones, destaques |
| `gold-400/500` | apoio visual secundário |

Tipografia: **Outfit** (display, headings) + **Inter** (corpo).

---

## 🚀 Deploy

**Cloudflare Pages** — conectar o repositório, build `npm run build`, output `dist/`.
**GitHub Pages** — configurar `base` no `astro.config.mjs` se o site não estiver na raiz.

---

## 📄 Licença

MIT — use, fork e adapt freely. O conteúdo (textos, foto) é de autoria do titular.

---

<div align="center">
  <sub>Feito com Astro + Tailwind, e muita experimentação com IA gratuita.</sub>
</div>
