# Fotos de exemplo

Cada modelo usa fotos de exemplo de bancos gratuitos para ficar bonito antes de o cliente colocar as suas.

## Onde estão

`public/fotos/<pasta>/`, cada pasta com `creditos.txt` (arquivo | autor | página | licença):

| Pasta | Variáveis CSS | Modelos |
| --- | --- | --- |
| `casal/` (8) | `--ph0` … `--ph7` | Declaração, aniversário de namoro, álbum, retrospectiva |
| `pedido-namoro/` (6) | `--pedido0` … `--pedido5` | Pedir em namoro |
| `sair/` (8) | `--sair0` … `--sair7` | Chamar para sair (um lugar por foto: barzinho, cinema, jantar, praia, piquenique, café, show, sorvete) |
| `amigos/` (6) | `--amigos0` … `--amigos5` | Amigos |
| `homenagem/` (6) | `--homenagem0` … `--homenagem5` | Homenagem |
| `aniversario/` (6) | `--aniversario0` … `--aniversario5` | Aniversário |

O mapeamento fica em `src/legacy/fotos.css`.

## Regras

- Licença **Unsplash License** (gratuita, sem atribuição obrigatória, mas guardamos os créditos). Não usar Unsplash+ (premium).
- Luz quente, pessoas variadas, JPEG com lado maior de 800 px.
- As fotos de referência de mãos (pasta `referencias/maos/` do projeto) são só para desenhar a animação e **não podem ser publicadas**.
- Para trocar uma foto, substitua o arquivo, atualize o `creditos.txt` e, se o nome mudar, o `fotos.css`.
