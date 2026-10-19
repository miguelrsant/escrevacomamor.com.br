# A carta

Código: `src/legacy/carta.html` (uma página só, com os 7 modelos). Exemplo: `/carta/declaracao`.

## Página de quem recebe

1. A tela mostra **só o envelope** sobre fundo vinho, com "Uma carta de <nome>" / "para <nome>" e a dica "toque no lacre para abrir".
2. Ao tocar no lacre (área de clique generosa, cobre o envelope inteiro com margem), começa a abertura com as mãos.
3. A folha cresce até a **tela cheia** (transição FLIP por `transform`, sem travar) e vira uma página rolável: texto, palavra de destaque animada, contador, galeria, perguntas, mensagens, flores no fim.
4. Música opcional com mini player ("a música escolhida toca aqui").

## Abertura com as mãos (pseudo-3D)

Regras fechadas (ver [../decisoes.md](../decisoes.md)):

- **Dois braços em primeira pessoa**, vindos dos cantos de baixo da tela, em diagonal.
- Seguram o envelope pela base; **polegar por cima da frente** apontando para dentro, demais dedos escondidos atrás (como numa foto em primeira pessoa).
- Quem olha vê o **dorso da mão** (unhas e nós dos dedos), **nunca a palma**.
- Sequência: um dedo rompe o lacre → o polegar abre a aba e puxa a folha → o envelope cai → as duas mãos seguram a folha e a aproximam da tela → a folha cresce.
- **Nunca 3 braços**: a mão troca de pose no mesmo lugar.
- O envelope recua um pouco enquanto é segurado para as mãos caberem inteiras.
- 4 tons de pele: `#EBC2A0` clara, `#D29B73` média, `#9B6542` morena, `#5E3B26` negra.
- Só CSS `perspective`/`transform` e SVG. Sem WebGL.
- Referências de fotos de mãos (uso interno, não publicar): pasta do projeto `referencias/maos/`.

Sprites: `#mao-*`, `#m2-*` (dorso, dedos, polegar, unha, punho, manga) em `home.html`.

## Envelope

5 cores (vinho, vermelho, kraft, marfim, verde), sempre com grão e forro de corações dourados (`--forro`). Sprites `#g-env-front`, `#g-env-side`, `#g-env-flap`.

## Lacre

- Símbolo: **iniciais dos dois** (padrão, ex. "M·A"), coração, rosa ou estrela.
- Cera: vinho, vermelha, ouro, marfim, verde (gradientes `#g-cera-*`).
- O símbolo em ouro texturizado.

## Papéis (7)

`pautado` (Pautado), `liso` (Algodão), `kraft` (Kraft), `antigo` (Envelhecido), `caderno` (Caderno), `aquarela` (Aquarela), `quadriculado` (Quadriculado). O mesmo papel aparece na carta dentro do envelope e na folha em tela cheia.

## Enfeites

Pétalas caindo (poucas e escuras no clássico, mais e coloridas no divertido), flores brotando, selo, carimbo, fita adesiva e flor prensada.

## Flores

Opções: `rosas`, `girassois`, `tulipas`, `lirios`, `campo` (do campo). Desenhadas em código: abrem, balançam com o vento, mudam de cor; tocar faz desabrochar de novo.

Regra: **um só campo de flores no fim da carta, plantado no chão** (base de grama encostada na borda de baixo), e um **raminho como divisor** entre seções. Nunca repetir o campo nem deixar flores flutuando no meio do papel.

No estilo divertido, um buquê desabrocha no topo da carta.

## Fotos (galerias)

| Chave | Nome | Descrição |
| --- | --- | --- |
| `carrossel` | Carrossel | Carrossel de polaroids |
| `fita` | Na fita | Fotos presas com fita adesiva (referência do Miguel) |
| `varal` | Varal | Polaroids no varal com prendedor dourado |
| `mosaico` | Galeria | Galeria sem polaroid |

Cada foto tem legenda e data opcionais; tocar amplia (lightbox). "Polaroids na mesa" foi removida.

## Stickers

20 desenhos próprios com borda branca de adesivo: gatinho, cachorrinho, ursinho, coelhinho, coraçãozinho, café, pizza, sorvete, pipoca, música, videogame, viagem, livros, futebol, fotografia, violão, plantinhas, boa noite, bolo, cerveja. Cada modelo vem com alguns; o cliente escolhe **até 6**. Personagens licenciados não entram.

## Contador

"juntos há …" desde a data escolhida (campo "Juntos desde"), contando até os segundos.

## Perguntas na carta

- Pedido de namoro: "Sim!" / "não" (no divertido, o "não" foge).
- Chamar para sair: quem recebe escolhe o lugar entre barzinho, cinema, jantar, praia, piquenique, cafezinho, show e sorvete; a resposta final usa o lugar escolhido.
- Bilhetes que viram ao tocar (clássico).

## Clássico × divertido

| Momento | Clássico | Divertido |
| --- | --- | --- |
| Abertura | Envelope sobe, mãos rompem o lacre, folha cresce | O mesmo, e o buquê desabrocha no topo |
| Títulos | A expressão da palavra escolhida (pulsa, pena, digita…) | Cada letra pula, cada palavra numa fonte |
| Entre seções | Flores brotam ao rolar | Flores mais cheias e coloridas |
| Fotos | Na fita ou carrossel | Varal ou sem polaroid |
| Ambiente | Poucas pétalas escuras caindo devagar | Mais pétalas, mais cor |
| Interação extra | Bilhetes que viram ao tocar | Botão "não" que foge; escolher o lugar do encontro |

## Os 7 modelos

Cada modelo define envelope, cera, símbolo, papel, flores, galeria, stickers, textos de exemplo e fotos (`EA_PHOTOSETS` / variáveis `--<ocasiao>N`). Ver a tabela em [../produto.md](../produto.md).
