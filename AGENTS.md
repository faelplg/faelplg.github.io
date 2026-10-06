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
estudos/*.html                                          → seção Estudos pt-BR (índice + um arquivo por estudo)
en/studies/*.html                                       → seção Studies em inglês (caminhos sempre em inglês)
en/{index,manual,sobre,contato}.html                    → páginas en (espelho 1:1 das pt-BR)
assets/site.css, hero.css, canvas.js, hero.js, cards.js → cópias exatas do fael-tech-design-system (não editar aqui)
assets/main.css                                          → estilos próprios do site (moldura, menu, manual, Horizonte);
                                                             só consome var(--ft-*) semânticos de brand/tokens.css
assets/main.js                                            → menu da barra do hero, scroll-spy do manual, menu lateral mobile
assets/img/                                               → imagens do site (ex.: avatar/avatar-busto.png do hero da home)
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
   completa de diretrizes (engenharia e portfólio antes de cargos, primeira pessoa sem tom de
   diálogo com IA, números sem causalidade inventada, Longward só pela tese, etc.).
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

Cada página HTML é standalone (sem includes/templates), então elementos compartilhados - a barra
de navegação (`.ds-hero__bar`, dentro do hero de cada página), `<link rel="alternate" hreflang>`,
tags do Vercel, `<link rel="stylesheet">` - existem duplicados em cada arquivo. Ao mudar um desses
elementos (ex.: um link da nav), replique a mudança em todas as páginas pt e en, não só na que
motivou a edição. Isso inclui as páginas de `estudos/` e `en/studies/`, que ficam em subpastas
(caminhos com `../` e `../../`). Ao criar uma página nova, copie a estrutura de `<head>` e do
`<header class="ds-hero ...">` de uma página existente do mesmo idioma para não perder um `hreflang`
ou a inclusão dos scripts.

## Estudos: datas e atualizações

Todo estudo tem os mesmos metadados: tipo, estado, data de publicação e, quando houver, data de
atualização. Ao mudar o conteúdo de um estudo, na mesma edição e nos dois idiomas:

1. acrescente "Atualizado em" / "Updated" na `.study-meta` da página (ou troque a data existente);
2. acrescente a entrada no topo da lista `.study-changes`, com a data e uma frase sobre o que mudou;
3. no card do índice (`estudos/index.html` e `en/studies/index.html`), acrescente
   `· atualizado em <data>` / `· updated <date>` ao lado da data e mantenha a ordem do mais
   recente para o mais antigo.

Correções de digitação não contam como atualização. Datas usam `<time datetime="AAAA-MM-DD">`.

## Design system

O visual segue o [fael-tech-design-system](https://github.com/faelplg/design-systems/tree/main/fael-tech-design-system).
`brand/tokens.css`, `brand/assets/*.svg`, `assets/site.css`, `assets/hero.css`, `assets/canvas.js`,
`assets/hero.js` e `assets/cards.js` são cópias exatas de lá: para mudar algum deles, mude no design system e copie de
novo. O que só existe no site vai em `assets/main.css`. Cada página abre com um hero do design system:
Busto na home, Agulhas na Trajetória e Retícula no Manual, nos Estudos e no Contato. O tema segue o sistema
operacional (`light-dark()` nos tokens semânticos); componentes nunca usam hex, `rgba()` ou
primitivos (`--ft-teal-*`, `--ft-ink`...), só os semânticos (`--ft-fg`, `--ft-bg-raised`,
`--ft-accent`...), e espaçamento sai de `--ft-space-*`.

### Composição das páginas

O site deve ter vida sem ficar carregado. Regras para qualquer página nova ou alterada:

- **Momentos visuais com intenção.** O hero é o momento forte da página. Palcos animados (como os
  architecture cards de `cards.js`) entram onde ilustram o assunto, nunca como decoração solta.
- **Movimento responsável.** Animação pausa fora da tela, respeita `prefers-reduced-motion` e não
  fica em loop chamando atenção.
- **Funciona sem JavaScript.** Todo texto e link fica legível e utilizável sem JS.
- **Orçamento de peso.** Cada página fica em torno de 150 KB transferidos, sem contar imagens
  otimizadas, e sem dependência externa além das fontes.
- **Nada fictício.** Sem números, mockups ou painéis inventados; artefatos mostrados (terminal,
  trechos de documento) vêm de execuções e arquivos reais.
- **Sem grade de cards como padrão.** Nada de "rótulo numerado + 3 cards". Seções variam entre
  prosa, listas editoriais com rótulo à esquerda, artefatos com legenda e cards só quando cada
  item é uma unidade própria.

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
