# Landing Page — Lucas Rodrigues Pereira

> Landing page pessoal de portfólio, construída com [Astro](https://astro.build) + Tailwind CSS.
> Tema escuro, geração estática, zero JavaScript de framework.

[![Astro](https://img.shields.io/badge/Astro-4.16-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-accent.svg?style=flat-square)](#licença)

---

## 🎯 Motivação

Este projeto nasceu como um **laboratório de configuração do 9Router** — a peça central foi
validar se é possível produzir um resultado profissional **usando apenas ferramentas
gratuitas e modelos de IA gratuitos**.

A pergunta central do experimento:

> *Com roteamento de modelos gratuitos, contexto bem estruturado e prompts de
> contextualização bem escritos, é possível entregar uma landing page de qualidade
> profissional sem nenhum custo de assinatura?*

**A resposta deste repositório é sim.** E o que torna isso possível não é o modelo — é a
**engenharia de contexto** em volta dele.

### O que realmente produz o resultado

| Princípio | Na prática, neste repo |
|---|---|
| **Contexto antes do prompt** | Ler o código existente antes de editar. Nenhuma linha foi escrita sem ler o arquivo vizinho e o `tailwind.config.mjs`. |
| **Tarefas pequenas e verificáveis** | O trabalho foi quebrado em etapas: imagem → conteúdo → SEO → validação. Cada etapa termina com `astro check` + `build`. |
| **Prompts de contextualização** | O prompt descrevia **o porquê** (design system, tom de voz, a11y, SEO), não só o **o quê**. O modelo escolheu a implementação. |
| **Validação como loop** | `astro check` (0 erros) e `build` rodando a cada etapa. Placeholder remanescente vira falha de build, não REVIEW. |
| **O modelo é executor, não autor** | Decisões de arquitetura (estrutura de componentes, paleta, tokens) permaneceram humanas. A IA executou. |
| **Zero dependências desnecessárias** | Sem libs de UI, sem framer-motion, sem icon-pack. Tailwind + SVG inline + ~30 linhas de JS para o menu mobile. |

### Ferramentas gratuitas utilizadas

- **Astro** — MIT, build estático, output 0 KB de JS (o único JS é o menu mobile)
- **Tailwind CSS** — MIT
- **Modelos de IA gratuitos** — via 9Router, com roteamento entre providers
- **Hospedagem** — Cloudflare Pages / GitHub Pages (plano gratuito)
- **Imagens** — otimizadas localmente com `sharp` via `astro:assets` (sem CDN externo)

### Conclusão

O custo não é o obstáculo — a **organização do contexto** é. Um modelo gratuito com
contexto fragmentado produz lixo; o mesmo modelo com o repositório lido, a tarefa
quebrada e a validação automatizada produz código pronto para produção. Custo zero é
factível **com disciplina de engenharia**.

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
