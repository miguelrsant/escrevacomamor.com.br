# Cores e texturas

Branco, vinho e ouro com textura. Dois fundos que se alternam entre as seções, vermelhos para o envelope e os destaques, ouro com grão como detalhe precioso. O verde só aparece nas folhas.

## Fundos

| Nome | Hex | Token | Uso |
| --- | --- | --- | --- |
| Branco papel | `#FAF6EF` | `--branco` | Fundo claro, sempre com textura (`.bg-branco`) |
| Papel da carta | `#F6EEDF` | `--papel-100` | A folha da carta |
| Papel sombra | `#E6D8BE` | `--papel-200` | Bordas e sombras do papel |
| Vinho | `#5E0B18` | `--vinho-700` | Fundo principal, abertura (`.bg-vinho`) |
| Vinho profundo | `#3A0710` | `--vinho-900` | Degradês, rodapé, texto sobre ouro |

## Vermelhos e ouro

| Nome | Hex | Token | Uso |
| --- | --- | --- | --- |
| Vermelho carta | `#8E1422` | `--vermelho-600` | Envelope, botão principal |
| Vermelho paixão | `#B11E2F` | `--vermelho-500` | Corações, rosas, estilo divertido |
| Vermelho vivo | `#D2334A` | `--vermelho-400` | Brilho da chama, detalhes |
| Cera | `#6E0D19` | `--lacre` | Só no lacre |
| Ouro escuro | `#7E5A22` | `--ouro-700` | Sombra do ouro |
| Ouro com textura | `#B88C3E` | `--ouro-500` | Logo, lacre, prendedor, botão de pagar |
| Ouro claro | `#DDBF7E` | `--ouro-300` | Realces. **Sem brilho metálico** |

## Tinta e flores

| Nome | Hex | Token | Uso |
| --- | --- | --- | --- |
| Tinta | `#4A0E16` | `--tinta` | Texto escrito |
| Tinta suave | `#7A4A4F` | `--tinta-suave` | Texto secundário |
| Girassol | `#F2B51F` | | Só nas flores |
| Folha | `#4E6B35` | `--folha` | Caules e folhas |
| Folha clara | `#7C9A55` | `--folha-claro` | Caules e folhas |

## Envelopes e ceras (opções do cliente)

- Envelope: vinho `#6A0E1A`, vermelho `#B11E2F`, kraft `#BF976A`, marfim `#ECE0C6`, verde `#557440`.
- Cera: vinho `#5E0B18`, vermelha `#A8192C`, ouro `#C9A253`, marfim `#EFE6D2`, verde `#3E5729`.

## Texturas

Todas geradas com SVG `feTurbulence` (leves, sem imagem externa):

- `--grao`: grão forte, para papel e cera.
- `--grao-leve`: grão sutil para o fundo branco.
- `--fibras`: fibras de papel.
- `--ouro-tex`: o ouro com grão (classe `.ouro-bg`, `.ouro-texto`). É assim que o dourado deve aparecer sempre.
- `--forro`: corações dourados do forro do envelope.

## Retirados a pedido do Miguel

- **Preto** como fundo.
- **Rosa claro**.
- **Ouro metálico** brilhante.
