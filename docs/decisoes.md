# Decisões do Miguel

Registro do que foi decidido nas conversas do projeto. O que está aqui é fechado; mudar exige falar com o Miguel antes.

## 2026-10-13 · Design system

- **Fundos**: só branco com textura (`#FAF6EF`) e vinho (`#5E0B18`), alternando entre seções. **Preto e rosa claro foram retirados** (ele não gostou).
- **Dourado**: nada de ouro metálico brilhante. Ouro com textura/grão, como folha de ouro envelhecida (`#B88C3E`, `#DDBF7E`).
- **Personalidade**: duas, **Clássico** e **Divertido**, para atender vários públicos. Divertido = várias fontes misturadas, animações em JavaScript, flores animadas e buquês, bem romântico.
- **Fontes bem expressivas**, que reforçam o que está sendo dito. Aprovadas: "beijo" (Caveat Brush) e "paixão" (Abril Fatface com chama). "Juntos" ficou ruim e foi refeito (as metades se encontram e um coração aparece no meio).
- **Flores**: rosas, girassóis, tulipas e lírios (e "do campo"). Pétalas caindo e flores brotando. Carta bem enfeitada.
- **Fotos**: carrossel de polaroids, galeria sem polaroid, fotos na fita (referência dele) e varal. "Polaroids na mesa" foi **removida**.
- **Papéis**: várias texturas (pautado, algodão, kraft, envelhecido, caderno, aquarela, quadriculado). A carta precisa de mais textura e variações.
- **Prévia** do editor sempre dentro de um celular.
- **Página da carta**: só o envelope; ao tocar no lacre ele abre, a folha cresce até a tela cheia e dá para rolar e ver galeria, tempo juntos e mensagens. A transição tem que ser fluida (feita com FLIP por `transform`, sem travar).
- **Lacre**: iniciais dos dois por padrão, personalizável (coração, rosa, estrela), porque também serve para amigos e aniversário. Cores de cera: vinho, vermelho, ouro, marfim, verde.
- **Envelopes**: vinho, vermelho, kraft, marfim, verde, com textura e forro.
- **Abertura em pseudo-3D**: parece 3D, mas é CSS (`perspective`), sem WebGL, para rodar em celular fraco.
- **Logo**: a marca é uma carta, com mais personalidade. Proposta "carta selada" (`#logo-p`), ainda sem escolha final.
- **Stickers** próprios para personalizar (bichinhos, comidas, hobbies). Nada de personagens licenciados.
- **Fotos de exemplo** de bancos gratuitos (Unsplash License), uma pasta por ocasião.

## 2026-10-14 · Abertura com as mãos

- Uma mão só não ficou boa: são **dois braços em primeira pessoa**, vindo dos cantos de baixo da tela. Seguram o envelope pela base, um dedo rompe o lacre, o polegar abre a aba e puxa a folha, o envelope cai, as duas mãos seguram a folha e a aproximam da tela antes de ela crescer.
- A mão fica **virada para a carta**: quem olha vê o dorso (unhas e nós dos dedos), **nunca a palma**.
- **Nunca podem aparecer 3 braços**: a mão troca de pose no mesmo lugar.
- Segurar como numa foto em primeira pessoa: polegar por cima da frente do envelope apontando para dentro, demais dedos escondidos atrás. O envelope recua um pouco para as mãos caberem inteiras.
- 4 tons de pele, escolhidos pelo cliente.
- Área de clique do lacre **generosa**: uma camada plana cobre o envelope inteiro com margem (o 3D deixava buracos no clique dos cantos).

## 2026-10-14 · Carta

- O campo de flores repetido três vezes e flutuando no meio do papel foi corrigido: **um só campo no fim da carta, plantado no chão** (base de grama encostada na borda de baixo), e um raminho como divisor.
- 20 stickers com borda branca; cada modelo vem com alguns, o cliente escolhe **até 6**.
- "Chamar para sair": quem recebe escolhe o lugar.

## 2026-10-14 · Home, formatos e preços

- Home de **alta conversão**: a pessoa entra e já quer fazer, com exemplos de cartas.
- Fluxo: **monta, vê pronta, depois paga**. Preços em **aba separada**.
- Pacotes: 1 por R$ 9,90; 3 por R$ 24,90; 5 por R$ 39,90.
- Três formatos (carta, álbum, retrospectiva), cada um usa 1 do pacote.
- Estrutura da home inspirada na lovepanda.com.br, no nosso design system, sem copiar marca, textos, depoimentos ou números.
- Animações do naocodei.com/free-code "que fazem sentido": palavra por palavra, palavras que alternam, cartões que empilham (celular), luz que segue o mouse, filtro FLIP, arrastar com inércia, janela que nasce do card, odômetro, linha do tempo que se desenha, botão elástico, transição entre telas, confete. **Fora**: shader, partículas, estrelas, cursor, gotas (visual tecnológico e pesado em celular fraco).
- O efeito de texto que se preenche foi **tirado** (ele não gostou). O manifesto ganhou flores.
- Faixa inclinada com as ocasiões em fontes misturadas abaixo do hero. Setinhas no carrossel de modelos.
- Exemplos (carta, álbum, retrospectiva, "ver como ficou") abrem em **tela cheia própria**, responsiva, com endereço `#ver-album`, `#ver-retro`, `#ver-carta-<modelo>`, `#ver-minha` e botão Voltar. Não mais dentro de um celular.
- Álbum segue as referências dele (mesa de madeira, livro de couro, vela, envelope, flores; scrapbook por dentro).
- Retrospectiva "como se fosse no Spotify".
- Idiomas PT, EN e ES, com seletor no cabeçalho.

## 2026-10-14 · Vídeo de lançamento

Vídeo vertical "Em breve" (~47 s) com narração feminina (ElevenLabs, voz Bianca), mostrando modelos, personalização, link/QR e a abertura real. Arquivo no Drive do projeto: `video/escreva-com-amor-lancamento.mp4` (fora do repositório).

## 2026-10-19 · Código

- Site em **Next.js**, neste repositório, com a pasta `docs/` e o `CLAUDE.md` apontando para ela.
- Entrega por branch e PR, não direto na `main`. Pagamento continua **simulado**.
