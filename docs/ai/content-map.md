# docs/ai/content-map.md - Mapa de páginas (pt/en)

> Mapa de propósito e principais afirmações de cada página do site, para agentes que precisem
> localizar rapidamente onde uma informação está publicada. As páginas em inglês usam nomes de
> arquivo em inglês. Endereços antigos (`manual.html`, `en/manual.html`, `horizonte.html`,
> `en/horizonte.html`, `en/sobre.html`, `en/contato.html`) redirecionam pelo `vercel.json`.

## Início - `index.html` / `en/index.html`

- **Propósito:** responder em poucos segundos quem é Fael e o que ele está construindo.
- **Conteúdo:** hero com avatar em busto e a autodescrição (ver `facts.md`); "Por que a fael.tech
  existe" (onde estuda, constrói e publica, e a assinatura do trabalho independente); "No que estou
  trabalhando" com architecture cards animados para Longward, AIKM (com trecho real do terminal) e
  Radiant (com trecho real do contrato de tarefa); "Vamos conversar" com consultorias e parcerias.
- **Não contém:** linha do tempo de carreira (está em Trajetória). A história da marca está no
  estudo "A história da fael.tech".

## Estudos - `estudos/` / `en/studies/`

- **Propósito:** projetos, métodos e teses de Fael, com o que ele aprendeu construindo cada um.
  Os caminhos em inglês ficam em inglês (`en/studies/`), sem misturar idiomas.
- **Índice:** `estudos/index.html` / `en/studies/index.html`, only the studies, as the design
  system's node cards, newest first: the most recent (Demerzel) is the highlighted card on the
  full row, and the others share the rows below.
  Every card has the date (and update), type, title, summary, topics from the study's sections,
  state and a link to read it.
- **Página de estudo:** linha de metadados (tipo, estado, publicado em, atualizado em) e, no fim,
  a lista "Atualizações" com o histórico datado. Ver `AGENTS.md` para o procedimento de atualização.
- **A história da fael.tech** (ensaio): `estudos/historia-da-fael-tech.html` /
  `en/studies/fael-tech-story.html`. Por que a fael.tech existe, como Fael trabalha, o que a marca
  representa e o site como primeira aplicação do design system.
- **AIKM** (project, open source soon): `estudos/aikm.html` / `en/studies/aikm.html`. A manager
  for each project's agent environment: the problem and the hypothesis, the catalog, the
  `aikm.yaml` manifest and `aikm sync` (with a manifest example), external sources pinned to a
  commit, and the guarantees (fails closed, private pieces never reach public repositories).
- **Radiant** (método, em andamento): `estudos/radiant.html` / `en/studies/radiant.html`. A
  pergunta central, o ciclo em seis etapas, o contrato de tarefa, os papéis com delegação, as
  capacidades (`deep`, `standard`, `light`), execution units and routing rules (dispatched by
  Demerzel), a Manutenção que só propõe e a constituição. Repository note: public, MIT license.
- **Demerzel** (project, in progress): `estudos/demerzel.html` / `en/studies/demerzel.html`. How
  each unit of a Radiant contract becomes a Claude Code or Codex session in herdr: the question,
  what it does (with an example unit block), the core and the Radiant integration, the dispatch
  order in herdr, what it refuses, and how it relates to Radiant. Repository note: public, MIT license.
- **Regra:** estudos descrevem o funcionamento, não o histórico interno de desenvolvimento
  (datas de commits, registros de verificação, reusos observados).

## Boletins - `boletins/` / `en/bulletins/`

- **Propósito:** a monthly series, not a study, on what mattered in AI and technology. Opens
  with the Phases hero.
- **Índice:** `boletins/index.html` / `en/bulletins/index.html`, the issues as a `.site-timeline`,
  newest first.
- **Edição:** each issue (`YYYY-MM.html`) has an issue marker (number,
  month, publication date), an opening summary, the sections Agentes de IA / AI agents, Segundo
  cérebro / Second brain, UX/UI and IA e ativismo cívico / AI and civic activism, and per item the
  monthly rank, what happened, why it matters, an optional relation to Fael's projects and the
  sources. October 2026 (issue 1): agents blocked by stores and banks, agents escaping their
  controls, Claude Duet, skills instead of subagents, Ramp Glass, Canva Craft, model-generated
  interfaces, cities stopping cameras and data centers, who pays for open data, and r/opensource
  banning AI projects. Procedure for a new month in `AGENTS.md`.

## Longward - `longward.html` / `en/longward.html`

- **Propósito:** apresentar a tese da Longward, a empresa que Fael está fundando.
- **Conteúdo:** linha de metadados (empresa, em formação); a motivação a partir de *Fundação*, de
  Isaac Asimov; a tese da continuidade coletiva; o papel da IA (sem apagar a origem); as quatro
  perguntas que uma ideia precisa responder para virar produto; e como os produtos serão
  construídos (processos agênticos semi-autônomos com o Radiant e outras metodologias; podem
  começar gratuitos e ganhar planos pagos, premium ou para empresas; sem depender de prender a
  atenção ou os dados das pessoas).
- **Não contém, por decisão:** nomes, ideias ou experimentos de produto da Longward.

## Trajetória - `sobre.html` / `en/career.html`

- **Propósito:** carreira profissional detalhada (equivalente a um currículo em formato web), em tom sóbrio.
- **Conteúdo:** perfil em dois parágrafos, linha do tempo completa com entregas e responsabilidades
  por cargo, formação, pós-graduação em andamento, certificação do MIT e idiomas.
- **Fatos citados aqui devem bater literalmente com** [facts.md](./facts.md).

## Contato - `contato.html` / `en/contact.html`

- **Propósito:** canais de contato.
- **Conteúdo:** consultorias e parcerias pela fael.tech (engenharia e liderança técnica, IA no
  desenvolvimento de software, projetos de produto ou pesquisa), e-mail (r@fael.tech), LinkedIn,
  GitHub e localização (Florianópolis, SC).
