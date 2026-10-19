# Movimento

Easing padrão: `--ease: cubic-bezier(.22,.8,.24,1)`. Animações com CSS e Web Animations API; nada de bibliotecas pesadas.

## Regras

- **Leve em celular fraco**: só `transform` e `opacity` nas animações longas; pseudo-3D com `perspective`; sem WebGL, shaders ou partículas em massa.
- **Revela com calma**: abertura em etapas, flores brotam quando entram na tela (IntersectionObserver).
- Respeitar `prefers-reduced-motion` (o protótipo já reduz as animações contínuas).
- Transição da carta para tela cheia por **FLIP** (medir, inverter, animar `transform`). A versão antiga que trocava de página travava e foi refeita.

## Carta

Ver a tabela clássico × divertido em [carta.md](carta.md) e os 16 movimentos de palavra em [tipografia.md](tipografia.md).

## Home (vindas do naocodei.com/free-code, escolhidas "as que fazem sentido")

| Efeito | Onde |
| --- | --- |
| Palavra por palavra | Títulos entrando |
| Palavras que alternam | "Uma carta para …" no hero |
| Cartões que empilham | Formatos no celular |
| Luz que segue o mouse | Cartões no PC |
| Filtro com FLIP | Filtro de ocasião nos modelos |
| Arrastar com inércia | Carrossel de modelos |
| Janela que nasce do card | Abrir exemplo em tela cheia |
| Odômetro | Números (dias de história, preços) |
| Linha do tempo que se desenha | Como funciona |
| Botão elástico | `.spring` |
| Transição entre telas | Trocar de view (início, criar, preços) |
| Confete | Pagamento aprovado |

**Não usar**: shader, partículas, estrelas, cursor customizado, gotas (visual tecnológico e pesado em celular fraco). **Tirado a pedido do Miguel**: efeito de texto que se preenche.
