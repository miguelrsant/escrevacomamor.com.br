# Roadmap

## Já existe (protótipo em Next.js)

- Home completa (hero, manifesto, formatos, modelos, recursos, como funciona, entrega, dúvidas, chamada final) em PT/EN/ES
- Editor dos três formatos com prévia ao vivo no celular, rascunho salvo no navegador
- Aba de preços com os três pacotes
- Pagamento **simulado** e tela de entrega (link, copiar, WhatsApp, QR code)
- Exemplos em tela cheia (carta de cada modelo, álbum, retrospectiva, "ver como ficou")
- Carta de exemplo de cada modelo em `/carta/<modelo>`

## Falta construir

1. **Salvar o presente de verdade**: banco de dados com a configuração (`CartaCfg`), fotos enviadas pelo cliente (storage) e um id curto. A carta paga abre em `/c/<id>` usando a mesma montagem de `/carta/<modelo>` (`montarCarta(cfg)` em `src/lib/legado.ts`).
2. **Pagamento real** (ver pendências abaixo para a forma), créditos do pacote por conta ou por e-mail, e liberação do link só depois da aprovação.
3. **Upload de fotos** com compressão no celular (hoje as fotos ficam só no navegador).
4. **Música**: decidir a origem (ver pendências).
5. **Componentizar** o protótipo em React, uma seção por vez (ver [arquitetura.md](arquitetura.md)).
6. **Logo final** e ícone do site/app.
7. SEO, Open Graph com a carta selada, analytics de conversão.
8. Política de privacidade, termos e créditos das fotos de exemplo no site.

## Perguntas em aberto (perguntar ao Miguel, não decidir sozinho)

- **Validade dos pacotes**: os créditos de 3 e 5 presentes expiram? Em quanto tempo?
- **Editar depois de enviar**: pode? Por quanto tempo (referências usam 72 h ou sem limite), mantendo o mesmo link?
- **Formas de pagamento**: Pix, cartão, qual gateway (as referências usam Mercado Pago)?
- **Origem da música**: link do YouTube/Spotify colado pelo cliente, biblioteca própria licenciada, ou upload?
- **Reembolso**: existe? Em que condições?
- **Depoimentos reais**: só entram quando existirem; nada inventado.
- **Símbolo do logo**: carta selada (recomendado), monograma no lacre ou carta voando.
- **Letra do texto longo**: fixa ou o cliente escolhe entre 3 ou 4 (Caveat como padrão, recomendado).
- **Funcionalidades do lançamento**: quais entram na primeira versão entre contagem regressiva, "Abra quando...", linha do tempo, senha na carta, editar depois de pagar.
