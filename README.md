# fael.tech - site pessoal e laboratório da marca

Site pessoal estático de Rafael (Fael) Goulart, engenheiro de software especializado em UX e IA,
cofundador de duas empresas e ex-CTO, e laboratório de aplicação da identidade
visual da marca **fael.tech**. O próprio site, construído com os tokens e regras da marca, é a
prova viva do sistema (não há uma página separada de "componentes"). Bilíngue: pt-BR na raiz,
inglês em `en/`.

## Estrutura

```
index.html              → pt-BR · Início (landing pessoal)
longward.html             → pt-BR · Longward (tese da empresa)
sobre.html                → pt-BR · Trajetória / carreira
contato.html              → pt-BR · Contato
estudos/
  index.html                → pt-BR · índice dos Estudos
  historia-da-fael-tech.html, aikm.html, radiant.html → estudos
en/
  index.html                → en · Home
  longward.html               → en · Longward
  career.html                 → en · Career
  contact.html                → en · Contact
  studies/
    index.html                → en · Studies index
    fael-tech-story.html, aikm.html, radiant.html → studies
assets/
  site.css, hero.css          → cópias exatas do fael-tech-design-system (componentes e heróis)
  canvas.js, hero.js, cards.js → cópias exatas do fael-tech-design-system (palcos animados dos heróis e dos architecture cards)
  main.css                    → estilos próprios do site (consome tokens semânticos de brand/tokens.css)
  main.js                      → menu da barra do hero e ano do rodapé
  img/
    avatar/avatar-busto.webp    → avatar em busto do hero da home; cópia exata do WebP gerado no fael-tech-design-system
    og/fael-tech.png            → imagem de compartilhamento (Open Graph) de todas as páginas
brand/          → fonte única de verdade da marca - NÃO modificar a partir deste projeto
  manual-identidade-visual.html   → manual original imprimível
  tokens.css                → tokens primitivos e semânticos, claro/escuro, espaço, tipografia (--ft-*)
  assets/*.svg               → símbolo, ícone, favicon
  README.md                  → guia rápido do kit de marca
docs/
  ai/                        → documentação estruturada para agentes de IA/LLMs
    overview.md                → propósito do site, estrutura, tom de voz
    facts.md                    → fatos canônicos de carreira/bio (fonte única de números e datas)
    content-map.md              → mapa de páginas pt/en com propósito de cada uma
tools/
  og-image.html              → fonte da imagem de compartilhamento (comando para gerar no comentário do topo)
llms.txt                  → índice machine-readable na raiz (convenção llms.txt)
vercel.json               → redirecionamentos de endereços antigos (manual, horizonte, en/sobre, en/contato)
AGENTS.md                 → instruções para agentes de IA que trabalharem neste repositório
```

## Documentação

Para trabalhar no kit de marca em si (símbolo, cores, tokens), veja
[brand/README.md](brand/README.md). Para agentes de IA/LLMs que precisem de
fatos estruturados sobre o conteúdo do site, veja [llms.txt](llms.txt) e [docs/ai/](docs/ai/).
