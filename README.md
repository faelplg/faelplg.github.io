# fael.tech — site pessoal e laboratório da marca

Site pessoal estático de Rafael (Fael) Goulart — CTO/CIO, DPO e estrategista em transformação com
IA — e laboratório de aplicação da identidade visual da marca **fael.tech**. O próprio site,
construído com os tokens e regras da marca, é a prova viva do sistema (não há uma página separada
de "componentes"). Bilíngue: pt-BR na raiz, inglês em `en/`.

**Forward through technology.**

## Estrutura

```
index.html              → pt-BR · Início (landing pessoal)
manual.html               → pt-BR · Manual da identidade visual
sobre.html                → pt-BR · Trajetória / carreira
contato.html              → pt-BR · Contato
en/
  index.html                → en · Home
  manual.html                 → en · Brand manual
  sobre.html                  → en · Career
  contato.html                → en · Contact
assets/
  site.css                    → CSS do site inteiro (consome tokens de brand/tokens.css)
  main.js                      → topbar global, scroll-spy do manual, menus mobile
  img/
    fael-portrait.jpg           → retrato de perfil
brand/          → fonte única de verdade da marca — NÃO modificar a partir deste projeto
  manual-identidade-visual.html   → manual original imprimível
  tokens.css                → tokens de cor/tipografia/liquid glass (--ft-*)
  assets/*.svg               → símbolo, ícone, favicon
  README.md                  → guia rápido do kit de marca
docs/
  ai/                        → documentação estruturada para agentes de IA/LLMs
    overview.md                → propósito do site, estrutura, tom de voz
    facts.md                    → fatos canônicos de carreira/bio (fonte única de números e datas)
    content-map.md              → mapa de páginas pt/en com propósito de cada uma
llms.txt                  → índice machine-readable na raiz (convenção llms.txt)
AGENTS.md                 → instruções para agentes de IA que trabalharem neste repositório
```

## Documentação

Para trabalhar no kit de marca em si (símbolo, cores, tokens), veja
[brand/README.md](brand/README.md). Para agentes de IA/LLMs que precisem de
fatos estruturados sobre o conteúdo do site, veja [llms.txt](llms.txt) e [docs/ai/](docs/ai/).
