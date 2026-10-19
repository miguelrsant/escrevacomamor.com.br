# Componentes e telas

Classes em `src/legacy/home.css`; marcação em `src/legacy/home.html`.

## Base

- **Botões**: principal vermelho (`.btn` vermelho carta, texto creme), ouro (`.btn-gold.ouro-bg`, para "Criar agora", "Pagar e receber o link", "Gostei, quero enviar"), contorno (`.btn` secundário, ex. "Ver exemplo"), tamanho pequeno `.sm`. Efeito elástico ao tocar (`.spring`).
- **Chips de ocasião**: pílulas com borda; a selecionada fica em ouro texturizado (fundo vinho) ou vermelho (fundo branco).
- **Campo**: fundo papel, cantos arredondados, rótulo em Jost, placeholder em letra de mão ("Nome de quem vai receber").
- **Fundo das seções**: `.bg-vinho` e `.bg-branco` alternando, ambos com grão; o vinho tem padrão de corações bem sutil.
- **Celular da prévia**: moldura de celular com notch e a carta real rodando dentro (iframe). A prévia do editor é **sempre** num celular.

## Home (`#inicio`), na ordem

1. **Barra de aviso** no topo: "Monte grátis e só pague quando vir pronta · Chega por link ou QR code, sem baixar nada".
2. **Cabeçalho**: logo, Modelos, Álbum e retrospectiva, Como funciona, Dúvidas, seletor de idioma (globo + PT/EN/ES), Preços, "Criar agora".
3. **Hero** (vinho): selo "Uma carta digital com envelope, lacre e flores", título "Tem coisa que só cabe numa carta.", frase "Uma carta para <palavras que alternam>", campo "Para quem é a carta?" + chips das 7 ocasiões + "Começar minha carta", três garantias, buquê e celular com a carta de exemplo ("toque no lacre para abrir").
4. **Faixa inclinada** com as ocasiões em fontes misturadas.
5. **Manifesto** (branco) com flores.
6. **Formatos**: "Três jeitos de dizer o que você sente" (Carta, Álbum, Retrospectiva), cada um com exemplo em tela cheia.
7. **Modelos** (vinho): "Comece por um modelo", carrossel arrastável com inércia e setinhas, filtro por ocasião (FLIP).
8. **Recursos**: "Tudo que cabe na sua carta" (lacre, envelopes e papéis, flores, fotos, contador, música, stickers, letras que falam, perguntas).
9. **Como funciona** (vinho): "Você só paga no último passo", 4 passos com linha do tempo que se desenha.
10. **Entrega**: "Chega como mensagem, abre como carta" (link + QR code).
11. **Dúvidas**: perguntas frequentes em acordeão.
12. **Chamada final** (vinho): "O que você sente merece ficar por escrito".
13. **Rodapé** (vinho) e **CTA fixo no celular** ("Escrever minha carta · montar é grátis").

## Editor (`#criar`)

- Passos no topo: 1 Montar, 2 Ver pronta, 3 Enviar.
- Abas de formato: Carta, Álbum, Retrospectiva.
- No celular: alternância "Editar" / "Prévia ao vivo" e barra fixa "Carta para <nome> · Ver como ficou". No PC: formulário à esquerda, celular com a prévia à direita.
- Blocos numerados: Ocasião, O que você quer dizer (para, assinatura, mensagem, palavra de destaque e sentimento), estilo clássico/divertido, envelope, lacre (símbolo, iniciais, cera), papel, flores, fotos (galeria, legenda, data), stickers, juntos desde, música, tom de pele.
- Trocar de ocasião muda cores e texto de exemplo, mas mantém o que a pessoa já escreveu.
- "Ver como ficou" abre a tela cheia `#ver-minha` com "Gostei, quero enviar".

## Preços (`#precos`)

Três cartões (1, 3 recomendado, 5), lista do que inclui, "Continuar com 3 presentes". Depois, tela de pagamento (hoje **simulado**, com aviso de prévia) e tela de entrega: link da carta, Copiar, Enviar no WhatsApp, Abrir como quem recebe, QR code para imprimir, "Montar o próximo presente".

## Tela cheia de exemplo (`.ov`)

Cabeçalho com "Voltar", título ("Assim a pessoa vai receber") e botão de ação; abre por hash (`#ver-carta-<modelo>`, `#ver-album`, `#ver-retro`, `#ver-minha`), responsiva para celular e PC.

## Álbum

Mesa de madeira com livro de couro vinho (foto do casal em moldura arqueada dourada, "Nós dois", nomes em assinatura), vela, polaroids, envelope com lacre, raminho e chave. Botão "Abrir o álbum". Por dentro, scrapbook em livro aberto (duas páginas no PC, uma no celular), navegação "a–b de n". As páginas não podem sumir ao virar. Tocar no lado direito avança, no esquerdo volta; arrastar também vira.

Páginas do exemplo (12): guarda com dedicatória, onde tudo começou, jornal, mural, juntos há, coisas que eu amo (com flor prensada), música, foto inteira com frase, ingressos, carta final, continua, guarda final.

## Retrospectiva

Página de playlist estilo Spotify em creme/vinho/ouro: capa, play dourado, lista de capítulos (miniatura + subtítulo), mini player. O play abre 9 stories animados; a música só começa depois de um toque (regra dos navegadores).
