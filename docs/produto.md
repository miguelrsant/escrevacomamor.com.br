# Produto

## O que é

O Escreva com Amor é um site onde a pessoa monta um presente digital (uma carta, um álbum ou uma retrospectiva) para quem ama, vê como ficou, paga uma vez e recebe um **link e um QR code** para enviar. Quem recebe abre no navegador do celular ou do computador, sem baixar nada.

A carta tem que **parecer uma carta de verdade**: papel com textura, envelope, lacre de cera, fotos presas com fita, flores. Abrir é um momento: o lacre se rompe, duas mãos puxam a folha, a folha cresce até a tela cheia e a pessoa rola para ler, ver as fotos, o tempo juntos e as mensagens.

Tudo é personalizável.

## Para quem (ocasiões)

Sete modelos, um para cada ocasião. Cada modelo já vem com envelope, lacre, papel, flores, fontes, texto e fotos de exemplo combinando; o cliente troca tudo.

| Chave no código | Ocasião | Particularidade |
| --- | --- | --- |
| `declaracao` | Declaração | |
| `namoro` | Aniversário de namoro | contador "juntos há" |
| `pedido` | Pedir em namoro | pergunta com resposta (botão "não" que foge no estilo divertido) |
| `aniversario` | Aniversário | |
| `amigos` | Amigos | |
| `sair` | Chamar para sair | quem recebe **escolhe o lugar** (barzinho, cinema, jantar, praia, piquenique, café, show, sorvete) e a resposta final usa o lugar escolhido |
| `homenagem` | Homenagem (mãe, pai, avós) | |

Não é só para casais: amigos, aniversário e homenagem fazem parte do público.

## Três formatos de presente

Decidido em 2026-10-14 (inspirado na estrutura da lovepanda.com.br, com o nosso design system e texto próprio). Cada um gasta **1 crédito** do pacote.

1. **Carta**: envelope com lacre que se abre em tela cheia, com texto, flores, fotos, contador e música.
2. **Álbum do casal**: um livro para folhear no celular. Abre numa mesa de madeira com livro de couro, vela, envelope e flores; por dentro, páginas tipo scrapbook em livro aberto (duas páginas no PC, uma no celular), navegação "a–b de n". As páginas nunca podem sumir ao virar.
3. **Retrospectiva do casal**: "como se fosse no Spotify". Página de playlist (capa, play dourado, lista de capítulos, mini player) que abre stories animados com música, no nosso design system (creme, vinho, ouro).

## Fluxo

1. Escolhe o formato e o modelo.
2. Escreve e personaliza, com **prévia ao vivo sempre dentro de um celular**.
3. Vê pronta, em tela cheia, como a pessoa vai receber.
4. Só então paga e recebe o link e o QR code.

Montar é grátis. O preço aparece numa **aba separada** (Preços), não na home.

## Preços (pacotes)

| Pacote | Preço | Por presente |
| --- | --- | --- |
| 1 presente | R$ 9,90 | R$ 9,90 |
| 3 presentes (recomendado) | R$ 24,90 | R$ 8,30 |
| 5 presentes | R$ 39,90 | R$ 7,98 |

Preços em R$ mesmo nas versões em inglês e espanhol (padrão escolhido, avisado ao Miguel). Não usar "preço de" riscado nem descontos inventados.

## Idiomas

Português (padrão), inglês e espanhol, com seletor no cabeçalho (globo + sigla). As cartas de exemplo também são traduzidas. O idioma é detectado pelo navegador e guardado no `localStorage`.

## Funcionalidades previstas

Já no protótipo:

- Editor com prévia ao vivo no celular (carta, álbum e retrospectiva)
- 7 modelos com fotos de exemplo próprias
- Estilos **clássico** e **divertido**
- Envelope (5 cores), lacre (iniciais, coração, rosa, estrela; 5 cores de cera), papel (7), flores (5 opções), galeria (4 jeitos), stickers (até 6), tom de pele das mãos (4)
- Palavra de destaque com sentimento (16 fontes expressivas animadas)
- Contador do tempo juntos
- Perguntas na carta (pedido de namoro, escolher o lugar do encontro)
- Fotos do cliente com legenda e data
- Ver em tela cheia como quem recebe (`#ver-minha`)
- Pagamento **simulado**, tela de entrega com link, copiar, WhatsApp e QR code
- Rascunho salvo no navegador

Vistas nos sites de referência (qartinha, tempojuntos, 2-luv) e ainda **sem decisão** de entrar no lançamento: música por link do YouTube, contagem regressiva para abrir na data, "Abra quando...", linha do tempo, senha na carta, editar depois de pagar. Ver [roadmap.md](roadmap.md).

## O que não fazer

- Não inventar depoimentos, número de clientes, avaliações ou "preço de".
- Não usar personagens licenciados nos stickers.
- Não copiar marca, textos ou números de sites de referência; usar só a estrutura e as ideias.
