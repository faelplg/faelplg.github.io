# docs/ai/content-map.md - Mapa de páginas (pt/en)

> Mapa de propósito e principais afirmações de cada página do site, para agentes que precisem
> localizar rapidamente onde uma informação está publicada.

## Início - `index.html` / `en/index.html`

- **Propósito:** responder em poucos segundos quem é Fael e o que ele está construindo.
- **Conteúdo:** hero com avatar em busto e a autodescrição (ver `facts.md`); "Por que a fael.tech
  existe" (onde estuda, constrói e publica, e a assinatura do trabalho independente); "No que estou
  trabalhando" com architecture cards animados para Longward, AIKM (com trecho real do terminal) e
  Radiant (com trecho real do contrato de tarefa); "Vamos conversar" com consultorias e parcerias.
- **Não contém:** linha do tempo de carreira (está em Trajetória) nem detalhes da identidade
  visual (está no Manual da marca).

## Estudos - `estudos/` / `en/studies/`

- **Propósito:** projetos, métodos e teses de Fael, com o que ele aprendeu construindo cada um.
  Os caminhos em inglês ficam em inglês (`en/studies/`), sem misturar idiomas.
- **Índice:** `estudos/index.html` / `en/studies/index.html`, com um node card clicável por estudo,
  do mais recente para o mais antigo. Todo card tem o mesmo formato: data (e atualização), tipo,
  título, resumo e estado.
- **Página de estudo:** linha de metadados (tipo, estado, publicado em, atualizado em) e, no fim,
  a lista "Atualizações" com o histórico datado. Ver `AGENTS.md` para o procedimento de atualização.
- **A história da fael.tech** (ensaio): `estudos/historia-da-fael-tech.html` /
  `en/studies/fael-tech-story.html`. Por que a fael.tech existe, como Fael trabalha, o que a marca
  representa e o site como primeira aplicação do design system.
- **AIKM** (projeto, open source em breve): `estudos/aikm.html` / `en/studies/aikm.html`. Problema,
  conhecimento local, distribuição controlada, registros de aprendizado e privacidade.
- **Radiant** (método, em andamento): `estudos/radiant.html` / `en/studies/radiant.html`. A
  pergunta central, o ciclo em seis etapas, o contrato de tarefa e a constituição.
- **Regra:** estudos descrevem o funcionamento, não o histórico interno de desenvolvimento
  (datas de commits, registros de verificação, reusos observados).

## Manual da marca - `manual.html` / `en/manual.html`

- **Propósito:** especificação da identidade visual fael.tech (não é sobre a pessoa, é sobre a
  marca fael.tech como produto de design).
- **Conteúdo:** conceito (ponteiro, F+T, nave, trajetória, órbita), essência da marca
  (Direction/Motion/Impact), símbolo, lockups, ícone/favicon, cores, liquid glass, tipografia,
  usos incorretos, tabela de download de todos os assets oficiais.
- **Fonte de verdade dos assets:** `brand/` - os SVGs e `tokens.css` não são modificados a partir
  do site; o texto do conceito (seção 01) é mantido em paridade manual com
  `brand/manual-identidade-visual.html`, que é o documento original imprimível da marca.

## Horizonte - `horizonte.html` / `en/horizonte.html`

- **Propósito:** apresentar uma proposta de evolução conceitual para a identidade fael.tech,
  inspirada pela escala temporal, pela preservação do conhecimento e pelos futuros possíveis da
  saga *Foundation*, de Isaac Asimov.
- **Conteúdo:** princípios de horizonte longo, conhecimento como infraestrutura e preparação para
  futuros possíveis; continuidade entre Direction/Motion/Impact e a nova linguagem; paleta oficial,
  geometria orbital, demonstração de aplicação digital, voz e manifesto.
- **Relação com a marca atual:** é uma exploração aplicada e explicitamente apresentada como
  proposta conceitual. O manual e os assets em `brand/` continuam sendo a fonte oficial da marca.
- **Imagem:** `assets/img/foundation-horizon.jpg` é uma arte original criada para a página a partir
  do moodboard de referência. A luz quente existe apenas na imagem e não cria um novo token de cor.

## Trajetória - `sobre.html` / `en/sobre.html`

- **Propósito:** carreira profissional detalhada (equivalente a um currículo em formato web), em tom sóbrio.
- **Conteúdo:** perfil em dois parágrafos, linha do tempo completa com entregas e responsabilidades
  por cargo, formação, pós-graduação em andamento, certificação do MIT e idiomas.
- **Fatos citados aqui devem bater literalmente com** [facts.md](./facts.md).

## Contato - `contato.html` / `en/contato.html`

- **Propósito:** canais de contato.
- **Conteúdo:** consultorias e parcerias pela fael.tech (engenharia e liderança técnica, IA no
  desenvolvimento de software, projetos de produto ou pesquisa), e-mail (r@fael.tech), LinkedIn,
  GitHub e localização (Florianópolis, SC).
