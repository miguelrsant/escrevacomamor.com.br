# Design system · Escreva com Amor

Versão aprovada: rascunho v4 (2026-10-13) + home (2026-10-14). Página visual completa em [../prototipos/design-system.html](../prototipos/design-system.html) (abra no navegador a partir do repositório para as fotos carregarem).

## Princípios

1. **Parece real.** Papel com grão, cera de lacre, polaroids, fita, buquê embrulhado, ouro com textura. Cada elemento tem um material físico por trás.
2. **A letra sente junto.** "Te amo" pulsa, "beijo" estala, "paixão" pega fogo. A fonte e o movimento dizem o mesmo que a palavra.
3. **Revela com calma.** O lacre se rompe, a carta sai, a folha cresce, as flores brotam. Quem recebe vive um momento.
4. **Leve em qualquer celular.** Nada de WebGL, shaders ou partículas pesadas. Pseudo-3D com CSS.

## Arquivos

| Arquivo | Conteúdo |
| --- | --- |
| [cores.md](cores.md) | Paleta, fundos, texturas e o que foi retirado |
| [tokens.css](tokens.css) | Todas as variáveis CSS (cores, fontes, texturas, easing) |
| [tipografia.md](tipografia.md) | Fontes base, letra da carta e os 16 sentimentos expressivos |
| [marca.md](marca.md) | Logo, wordmark e ícone |
| [carta.md](carta.md) | Envelope, lacre, abertura com as mãos, papéis, flores, galerias, stickers, contador, clássico × divertido |
| [componentes.md](componentes.md) | Botões, campos, chips, celular da prévia, seções da home, editor, preços, entrega |
| [movimento.md](movimento.md) | Animações da carta e da home, ritmo de cada estilo, o que não usar |
| [fotos.md](fotos.md) | Fotos de exemplo, créditos e regras |

## Onde está no código

- Tokens: `:root` de `src/legacy/home.css` (o mesmo bloco existe no topo de `src/legacy/carta.html`).
- Sprites SVG (logo, lacre, ceras, envelope, mãos, flores, stickers, coração, pétalas): bloco `<svg width="0">` no início de `src/legacy/home.html`, usados com `<use href="#id">`.
- Texturas: `--grao`, `--grao-leve`, `--fibras`, `--ouro-tex`, `--forro` (SVG `feTurbulence` em data URI).
