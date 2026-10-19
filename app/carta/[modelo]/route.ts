import { MODELOS, montarCarta, type Modelo } from "@/lib/legado";

export const dynamicParams = false;

export function generateStaticParams() {
  return MODELOS.map((modelo) => ({ modelo }));
}

/**
 * Carta de exemplo de cada modelo, como quem recebe vê: só o envelope;
 * ao tocar no lacre, a carta abre em tela cheia. Ex.: /carta/declaracao
 * Quando houver banco de dados, a carta paga vai usar a mesma montagem
 * com a configuração salva do cliente (ver docs/roadmap.md).
 */
export async function GET(_req: Request, ctx: { params: Promise<{ modelo: string }> }) {
  const { modelo } = await ctx.params;
  const html = montarCarta({ occ: modelo as Modelo });
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
