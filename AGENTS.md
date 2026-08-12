# AGENTS.md - instruções para agentes de IA neste repositório

> Contexto operacional para qualquer agente (Claude Code, Codex, Copilot, etc.) que edite este
> repositório. Para contexto de *conteúdo* (fatos biográficos, tom de voz, mapa de páginas), a
> fonte é [docs/ai/](docs/ai/) - leia [docs/ai/overview.md](docs/ai/overview.md) antes de tocar em
> qualquer texto visível ao usuário.

## O que é este projeto

Site pessoal estático de Rafael (Fael) Goulart (Software Engineer, estrategista de tecnologia,
former CTO e DPO) publicado em `fael.tech`. É também o laboratório de aplicação da identidade
visual da marca fael.tech - o próprio site é a prova viva do sistema de marca, não existe uma
página separada de "componentes".

- **Sem framework, sem bundler, sem build step.** HTML/CSS/JS puros servidos como estão.
- **Bilíngue por duplicação de arquivo:** pt-BR na raiz, inglês espelhado em `en/`, sem i18n
  runtime. Cada página existe como dois arquivos HTML independentes.
- **Hospedado na Vercel.** As tags `<script defer src="/_vercel/insights/script.js">` e
  `/_vercel/speed-insights/script.js` em cada página são endpoints injetados automaticamente pela
  Vercel (habilitados pelas dependências `@vercel/analytics` e `@vercel/speed-insights` em
  `package.json`) - não apontam para arquivos deste repo e não devem ser "corrigidos" para isso.
  Apesar do nome do repositório (`faelplg.github.io`), o deploy real não é GitHub Pages.
- **Bun** é o runtime/gerenciador de pacotes (`bun.lock`), mas não há script de build/dev definido
  em `package.json` - o site não precisa de um passo de compilação para ser servido.

## Estrutura

```
index.html / manual.html / sobre.html / contato.html   → páginas pt-BR (raiz)
en/{index,manual,sobre,contato}.html                    → páginas en (espelho 1:1 das pt-BR)
assets/site.css                                          → CSS do site inteiro; só consome var(--ft-*)
                                                             de brand/tokens.css, nunca redeclara cor/fonte
assets/main.js                                            → topbar global, scroll-spy do manual, menus mobile
assets/img/                                               → imagens do site (ex.: retrato)
brand/                                                    → fonte única de verdade da marca (ver seção abaixo)
docs/ai/overview.md                                       → propósito, tom de voz, diretrizes de conteúdo
docs/ai/facts.md                                          → fatos canônicos de carreira/bio (única fonte de números/datas)
docs/ai/content-map.md                                    → mapa de páginas pt/en com propósito e afirmações-chave de cada uma
llms.txt                                                  → índice machine-readable na raiz (convenção llms.txt)
```

## Regras de conteúdo (obrigatórias)

1. **`docs/ai/facts.md` é a fonte única de verdade** para datas, cargos, métricas e formação. Se
   um fato de carreira muda, edite `facts.md` primeiro e só depois replique nas páginas públicas
   (principalmente `sobre.html` / `en/sobre.html`). Nunca invente cargo, empresa, data ou número
   que não esteja lá ou nas páginas já publicadas.
2. **Paridade pt/en obrigatória.** Qualquer mudança de conteúdo em uma página pt-BR deve ser
   replicada na página `en/` correspondente (e vice-versa) na mesma sessão de edição. As duas
   nunca devem divergir em fatos, apenas em idioma.
3. **Tom de voz:** direto, sem hype, sem superlativos vazios ("revolucionário", "world-class").
   Ver [docs/ai/overview.md](docs/ai/overview.md#tom-de-voz-e-diretrizes-de-conteúdo) para a lista
   completa de diretrizes (posicionamento como engenheiro antes de executivo, as três linhas da
   nova fase profissional, etc.).
4. **Sentence case, nunca title case** em títulos e headlines - convenção da marca, vale para
   pt e en.
5. Ao mudar a estrutura de páginas (nova seção, página nova, título), atualize
   `docs/ai/content-map.md`, `llms.txt` e o bloco "Estrutura" do `README.md` junto.
6. Nunca use travessão/em dash "—" no conteúdo; use hífen simples "-" (convenção já aplicada em
   todo o repositório).

## `brand/` - não modificar sem confirmação

`brand/` é a fonte única de verdade da identidade visual (símbolo SVG, `tokens.css`, manual
original imprimível) e **não é editada a partir do resto do site**. Se uma tarefa parecer exigir
mudar uma cor, token ou asset de marca, pare e confirme com o usuário antes de tocar em qualquer
arquivo dentro de `brand/` - trate como uma dependência externa vendorizada, não como código do
site. `assets/site.css` só deve consumir os tokens `var(--ft-*)` já expostos por
`brand/tokens.css`; nunca redeclare valores de cor/tipografia localmente. Detalhes de uso e regras
da marca (liquid glass, área de proteção, cores) estão em [brand/README.md](brand/README.md) e no
manual completo.

## Fluxo de trabalho ao editar uma página HTML

Cada página HTML é standalone (sem includes/templates), então elementos compartilhados - topbar,
`<link rel="alternate" hreflang>`, tags do Vercel, `<link rel="stylesheet">` - existem duplicados
em cada arquivo. Ao mudar um desses elementos (ex.: um link da nav, o texto da topbar), replique a
mudança nas 8 páginas (4 pt + 4 en), não só na que motivou a edição. Ao criar uma página nova,
copie a estrutura de `<head>` e do `<header class="site-topbar">` de uma página existente do mesmo
idioma para não perder um `hreflang` ou a inclusão dos scripts.

## Testar localmente

Não há dev server configurado no `package.json`. Para pré-visualizar, sirva a raiz do repo como
arquivos estáticos, por exemplo:

```
bunx serve .
# ou
npx serve .
```

Não há suíte de testes automatizados neste projeto. Validação é visual/manual: abra a página no
navegador, confira layout, links internos, `hreflang` pt<->en, e leitura em light/dark (tokens de
`brand/tokens.css` respondem a tema do sistema).

## O que evitar

- Não adicionar framework, bundler ou dependência de build - a natureza estática/zero-build é
  intencional.
- Não criar uma página de "componentes" ou storybook separada - o próprio site é a demonstração
  viva do sistema de marca.
- Não editar `brand/` sem confirmação prévia do usuário (ver seção acima).
- Não publicar fato biográfico/de carreira que não esteja em `docs/ai/facts.md` ou já publicado.
- Não deixar pt-BR e en divergirem em conteúdo ou estrutura.
