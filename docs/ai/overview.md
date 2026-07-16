# docs/ai/overview.md — Visão do site para agentes de IA / LLMs

> Este arquivo é a porta de entrada para agentes de IA e LLMs que precisem entender o site
> fael.tech antes de responder perguntas sobre Rafael (Fael) Goulart ou sobre a marca fael.tech.
> Ver também [facts.md](./facts.md) (fatos canônicos) e [content-map.md](./content-map.md) (mapa
> de páginas).

## O que é este site

Site pessoal de Rafael (Fael) Goulart — CTO/CIO, DPO e estrategista em transformação com IA —,
publicado em `fael.tech`. É também o laboratório de aplicação da identidade visual da marca
fael.tech: o próprio site, construído com os tokens e regras da marca, é a prova viva do sistema
(não existe uma página separada de "componentes").

Estático, sem framework/bundler, bilíngue (pt-BR na raiz, inglês em `en/`).

## Estrutura

| Página | pt-BR | en |
|---|---|---|
| Início (landing pessoal) | `index.html` | `en/index.html` |
| Manual da marca | `manual.html` | `en/manual.html` |
| Trajetória / carreira | `sobre.html` | `en/sobre.html` |
| Contato | `contato.html` | `en/contato.html` |

Cada par pt/en usa `<link rel="alternate" hreflang>` para se referenciar mutuamente.

## Tom de voz e diretrizes de conteúdo

- **Direto e sem hype.** Evitar superlativos vazios ("revolucionário", "world-class"). Preferir
  afirmações concretas e verificáveis.
- **Números não confirmados sempre com ressalva.** Qualquer métrica de crescimento (receita, base
  de clientes, headcount) deve manter a expressão "a confirmar" / "figures to confirm" — ver
  [facts.md](./facts.md).
- **Sentence case, nunca title case** em títulos e headlines (convenção da marca).
- **Marca:** a filosofia é "Forward through technology" — tecnologia como meio, não como fim.
  Assinatura secundária: "Direction. Motion. Impact."
- **Não inventar cargos, empresas, datas ou números** que não estejam em [facts.md](./facts.md)
  ou nas páginas publicadas. Se uma pergunta exigir um dado que não existe aqui, é preferível dizer
  que a informação não está disponível a especular.

## Fonte de verdade da marca

`brand/` é a fonte única de verdade dos assets visuais da marca (símbolo em SVG,
`tokens.css`, manual original imprimível). Não deve ser citada como fonte de fatos biográficos —
para isso, use [facts.md](./facts.md).

## Estado do projeto

O site está content-complete: as 8 páginas, a identidade visual em `brand/` e esta documentação
refletem o estado final do projeto. Não existem mais `docs/SPEC.md` nem uma pasta `tasks/` (o
fluxo de spec-driven development usado durante a construção foi descontinuado após a conclusão) —
`docs/ai/` é hoje a documentação de referência viva. Materiais brutos de rascunho (versões antigas
de currículo, brainstorm de conceito de marca) foram removidos por estarem já incorporados às
páginas publicadas e a este diretório.
