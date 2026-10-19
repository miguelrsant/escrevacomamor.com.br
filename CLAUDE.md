# CLAUDE.md

Site **Escreva com Amor** (escrevacomamor.com.br): a pessoa monta uma carta, um álbum ou uma retrospectiva para quem ama, vê pronta, paga e recebe um link e um QR code. Next.js (App Router) + TypeScript.

## Leia antes de mudar qualquer coisa

Toda a especificação está em [`docs/`](docs/README.md):

- [`docs/produto.md`](docs/produto.md): o que o produto prevê (ocasiões, formatos, fluxo, preços, idiomas, funcionalidades)
- [`docs/decisoes.md`](docs/decisoes.md): decisões fechadas do Miguel, com data, e o que foi retirado
- [`docs/roadmap.md`](docs/roadmap.md): o que falta e as **perguntas em aberto**
- [`docs/arquitetura.md`](docs/arquitetura.md): rotas, pastas, como o protótipo roda dentro do Next e como componentizar
- [`docs/design-system/`](docs/design-system/README.md): cores, tokens, tipografia expressiva, marca, carta, componentes, movimento, fotos
- [`docs/prototipos/`](docs/prototipos/README.md): página do design system e links dos protótipos

## Regras do projeto

- **Pergunte ao Miguel antes de tirar conclusões novas de design.** Só o que está em `docs/decisoes.md` é fechado. Ele escreve em português; responda em português.
- **Nunca invente** depoimentos, número de clientes, avaliações, "preço de" riscado ou respostas para as perguntas em aberto do roadmap (validade dos pacotes, editar depois de enviar, formas de pagamento, origem da música, reembolso).
- Cores: só fundos branco com textura e vinho. **Sem preto, sem rosa claro, sem ouro metálico** (ouro sempre com grão, `--ouro-tex`).
- Animações leves para celular fraco: `transform`/`opacity`, pseudo-3D com CSS, sem WebGL, shaders ou partículas pesadas.
- Abertura da carta: dois braços em primeira pessoa, dorso da mão para quem olha (nunca a palma), nunca 3 braços. Detalhes em `docs/design-system/carta.md`.
- Prévia do editor sempre dentro de um celular. Fluxo: montar → ver pronta → pagar. Preços em aba separada.
- Três idiomas (PT, EN, ES): todo texto novo precisa das três versões (dicionário em `public/js/home.js`).
- Stickers e imagens: nada de personagens licenciados; fotos só com licença livre e créditos em `public/fotos/<pasta>/creditos.txt`.
- O pagamento ainda é **simulado**. Não ligar gateway sem decisão do Miguel.

## Código

- `src/legacy/` guarda o protótipo aprovado (home, editor, preços, carta) que ainda não virou componente React. Ao mudar o visual, mude lá e confira no celular (390 px) e no PC (1366 px). Ao componentizar, siga `docs/arquitetura.md`.
- A carta (`src/legacy/carta.html`) roda em iframe e recebe configuração por `postMessage` (`ea-cfg`, `ea-open`); tipo `CartaCfg` em `src/lib/legado.ts`.
- Mudou um token, decisão ou funcionalidade? Atualize o arquivo correspondente em `docs/` no mesmo PR.

## Comandos

```bash
npm install
npm run dev         # http://localhost:3000
npm run build       # precisa passar antes de abrir PR
npm run typecheck
```

Trabalhe em branch e abra PR; não faça push direto na `main`.
