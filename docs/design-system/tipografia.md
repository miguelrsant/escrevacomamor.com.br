# Tipografia

Fontes bem expressivas: a letra reforça o que a palavra diz. Todas do Google Fonts, carregadas em `app/layout.tsx` (e no topo de `carta.html`).

## Fontes base

| Fonte | Token | Uso |
| --- | --- | --- |
| Bodoni Moda | `--f-display` | Títulos do site e do estilo clássico |
| Pinyon Script | `--f-assinatura` | Logo, nomes, assinatura ("Com amor, Miguel") |
| Jost | `--f-ui` | Interface: botões, campos, preços, textos corridos do site |
| Caveat | `--f-mao` | Letra de mão da carta (padrão do texto longo) |

Letra do texto longo da carta (ainda em aberto, ver roadmap): Caveat (mais legível, recomendada), Sacramento (mais elegante) ou Homemade Apple (caneta de verdade).

## Os 16 sentimentos

No editor, o cliente escreve a **palavra de destaque** e escolhe o sentimento. Cada sentimento tem uma fonte e um movimento (classes `.fx-<nome>` em `home.css`; animação em JS com Web Animations).

| Palavra exemplo | Classe | Fonte · movimento | Quando usar |
| --- | --- | --- | --- |
| te amo | `fx-beat` | Shrikhand · pulsa como coração | Declarações |
| pra sempre | `fx-write` | Mrs Saint Delafield · escrita a pena | Promessas, bodas |
| saudade | `fx-fade` | Cormorant itálico · some e volta | Distância, homenagens |
| SIM! | `fx-bounce` | Bagel Fat One · pula de alegria | Convites, respostas |
| juntos | `fx-meet` | Playfair Black itálico · as metades se encontram e um coração aparece | Aniversário de namoro |
| paixão ✔ | `fx-flame` | Abril Fatface · chama tremendo | Momentos intensos |
| você | `fx-stamp` | Pinyon em ouro · carimbado | Nome de quem recebe |
| beijo ✔ | `fx-kiss` | Caveat Brush · balança e estala | Despedidas, P.S. |
| sorriso | `fx-wave` | Pacifico · onda de alegria | Aniversários |
| abraço | `fx-hug` | Fredoka · aperta e solta | Amigos, saudade |
| meu bem | `fx-swash` | Great Vibes · floreio dourado | Apelidos |
| eterno | `fx-rise` | Gloock · sobe devagar | Homenagens |
| amiga | `fx-wiggle` | Love Ya Like A Sister · rabisco que dança | Amizade |
| brilho | `fx-neon` | Monoton · neon piscando | Festa, noite |
| carinho | `fx-float` | Dancing Script · flutua leve | Cuidado, afeto |
| obrigado | `fx-type` | Special Elite · máquina de escrever | Gratidão |

✔ = aprovadas explicitamente pelo Miguel.

## Estilo divertido

Várias fontes na mesma frase (cada palavra numa fonte), letras que pulam no lugar. Exemplo do design system: "prometo flores toda semana (ou pelo menos memes)". A faixa inclinada da home, com as ocasiões em fontes misturadas, segue a mesma ideia.

## Tokens de fonte

Ver `--f-*` em [tokens.css](tokens.css): `display`, `assinatura`, `ui`, `mao`, `pincel`, `gordinha`, `bolha`, `sussurro`, `pena`, `cartaz`, `onda`, `fofa`, `vibes`, `gloock`, `amiga`, `neon`, `danca`, `playfair`, `maquina`.
