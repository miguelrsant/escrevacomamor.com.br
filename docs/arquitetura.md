# Arquitetura

Next.js (App Router) + TypeScript. Sem banco nem pagamento ainda.

## Rotas

| Rota | O que é | Arquivo |
| --- | --- | --- |
| `/` | Home, editor e preços (três views da mesma página) | `app/page.tsx` |
| `/criar` | Redireciona para `/#criar` (editor) | `next.config.ts` |
| `/precos` | Redireciona para `/#precos` | `next.config.ts` |
| `/carta/<modelo>` | Carta de exemplo como quem recebe (`declaracao`, `namoro`, `pedido`, `aniversario`, `amigos`, `sair`, `homenagem`) | `app/carta/[modelo]/route.ts` |
| `/carta-src.js` | O HTML da carta como `window.CARTA_SRC`, usado pela prévia ao vivo | `app/carta-src.js/route.ts` |

Dentro da home, a navegação é por hash: `#inicio`, `#criar`, `#precos`, e os exemplos em tela cheia `#ver-carta-<modelo>`, `#ver-album`, `#ver-retro`, `#ver-minha`.

## Pastas

```
app/                     rotas do Next.js
src/components/          componentes React
src/lib/legado.ts        lê os arquivos do protótipo; montarCarta(cfg); lista de MODELOS; tipo CartaCfg
src/legacy/              protótipo aprovado, ainda não componentizado
  home.html              marcação da home, editor, preços, rodapé e sprites SVG (logo, lacre, mãos, flores, stickers)
  home.css               todo o CSS da home (tokens no :root)
  carta.html             a carta completa (página de quem recebe), com os 7 modelos
  fotos.css              variáveis --ph0..7, --pedido0..5, --sair0..7, --amigos0..5, --homenagem0..5, --aniversario0..5
public/js/home.js        comportamento da home, editor, álbum, retrospectiva, i18n PT/EN/ES, preços e entrega
public/fotos/            fotos de exemplo por ocasião, com creditos.txt
public/vendor/           qrcode.min.js (qrcodejs, MIT)
docs/                    esta documentação
```

## Como o protótipo roda dentro do Next

O protótipo aprovado pelo Miguel foi feito em HTML/CSS/JS puro. Para não perder nenhum detalhe de design na mudança para Next.js, ele entrou inteiro:

1. `app/page.tsx` lê `src/legacy/home.html` no build e o renderiza num `div` com `dangerouslySetInnerHTML`. Também injeta `<style id="ph-css">` com as fotos.
2. `src/components/ScriptsLegado.tsx` carrega em ordem, depois da hidratação: `qrcode.min.js`, `/carta-src.js` e `home.js`.
3. A prévia do editor é um `iframe` com `srcdoc` montado a partir de `window.CARTA_SRC`: o `home.js` troca `/*%%PH%%*/` pelo CSS das fotos e `"%%CFG%%"` pela configuração. Depois disso conversa com a carta por `postMessage`:
   - `{type:'ea-cfg', cfg}`: aplica ocasião, estilo, envelope, cera, símbolo, iniciais, pele, papel, flores, galeria, stickers, textos, fotos e idioma.
   - `{type:'ea-open'}`: abre o envelope.
4. `/carta/<modelo>` usa `montarCarta({occ})` no servidor, a mesma montagem.

Configuração da carta (`CartaCfg` em `src/lib/legado.ts`): `occ`, `style` (`classic`/`fun`), `env`, `wax`, `sym`, `ini`, `pele`, `paper`, `flor`, `gal`, `stk`, `txt`, `photos`, `lang`, `embed`, `open`.

## Migrar para componentes React

Faça por partes, sempre comparando com o protótipo (screenshot antes e depois, no celular e no PC):

1. Escolha uma seção da home (ex.: `section.duvidas`), recrie em `src/components/` usando as mesmas classes de `home.css`, e remova o trecho de `home.html`.
2. Verifique se o `home.js` mexe nela (procure pelos ids e classes) e mova esse comportamento para o componente.
3. Os textos traduzidos estão no dicionário do `home.js` (`pt`/`en`/`es`); ao componentizar, leve as traduções junto.
4. A carta (`carta.html`) é independente e roda em iframe: pode continuar como está até haver motivo para mudar.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (tem que passar antes de abrir PR)
npm run typecheck
```
