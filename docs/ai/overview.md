# docs/ai/overview.md - Visão do site para agentes de IA / LLMs

> Este arquivo é a porta de entrada para agentes de IA e LLMs que precisem entender o site
> fael.tech antes de responder perguntas sobre Rafael (Fael) Goulart ou sobre a marca fael.tech.
> Ver também [facts.md](./facts.md) (fatos canônicos) e [content-map.md](./content-map.md) (mapa
> de páginas).

## O que é este site

Site pessoal de Rafael (Fael) Goulart, engenheiro de software especializado em UX e, mais
recentemente, em IA, cofundador de duas empresas e ex-CTO da Aurum Software, publicado em
`fael.tech`. A fael.tech é onde ele estuda, constrói e publica, e o nome com que assina seu
trabalho independente. É também o laboratório de aplicação da identidade visual da marca fael.tech: o
próprio site, construído com os tokens e
regras da marca, é a prova viva do sistema (não existe uma página separada de "componentes").

Estático, sem framework/bundler, bilíngue (pt-BR na raiz, inglês em `en/`).

## Estrutura

| Página | pt-BR | en |
|---|---|---|
| Início (landing pessoal) | `index.html` | `en/index.html` |
| Manual da marca | `manual.html` | `en/manual.html` |
| Horizonte (evolução conceitual) | `horizonte.html` | `en/horizonte.html` |
| Trajetória / carreira | `sobre.html` | `en/sobre.html` |
| Contato | `contato.html` | `en/contato.html` |

Cada par pt/en usa `<link rel="alternate" hreflang>` para se referenciar mutuamente.

## Tom de voz e diretrizes de conteúdo

- **Direto e sem hype.** Evitar superlativos vazios ("revolucionário", "world-class"). Preferir
  afirmações concretas e verificáveis.
- **Fatos canônicos.** Datas, cargos e métricas devem permanecer alinhados com [facts.md](./facts.md).
- **Sentence case, nunca title case** em títulos e headlines (convenção da marca).
- **Engenharia primeiro, portfólio primeiro.** A Home mostra quem Fael é e o que está construindo
  (Longward, AIKM, Radiant); a carreira fica na Trajetória. Não abrir com inventário de títulos
  (CTO, DPO, AI Engineer, músico...) nem com anúncio de busca por emprego.
- **Primeira pessoa, sem diálogo com IA.** O texto fala com o visitante. Evitar comentários sobre o
  próprio texto, contrastes do tipo "um portfólio mostra X, aqui eu mostro Y", ressalvas de
  estágio em prosa (o estágio vai em rótulos) e introduções que resumem o que vem a seguir.
- **Tom por página.** Home e estudos em tom de conversa; Trajetória sóbria, como currículo.
- **Números sem causalidade inventada.** Resultados da empresa (receita, base) aparecem como
  contexto do período, separados do que Fael fez.
- **Sem slogans.** "Forward through technology" e "Direction. Motion. Impact." não são usados no
  texto do site.
- **Longward com reserva.** Falar da tese, nunca de produtos ou experimentos.
- **Não inventar cargos, empresas, datas ou números** que não estejam em [facts.md](./facts.md)
  ou nas páginas publicadas. Se uma pergunta exigir um dado que não existe aqui, é preferível dizer
  que a informação não está disponível a especular.

## Fonte de verdade da marca

`brand/` é a fonte única de verdade dos assets visuais da marca (símbolo em SVG,
`tokens.css`, manual original imprimível). Não deve ser citada como fonte de fatos biográficos -
para isso, use [facts.md](./facts.md).

## Estado do projeto

O site mantém 10 páginas, a identidade visual em `brand/` e esta documentação como referências
vivas do projeto. Não existem mais `docs/SPEC.md` nem uma pasta `tasks/` (o
fluxo de spec-driven development usado durante a construção foi descontinuado após a conclusão) -
`docs/ai/` é hoje a documentação de referência viva. Materiais brutos de rascunho (versões antigas
de currículo, brainstorm de conceito de marca) foram removidos por estarem já incorporados às
páginas publicadas e a este diretório.
