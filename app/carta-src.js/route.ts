import { lerLegado } from "@/lib/legado";

export const dynamic = "force-static";

/** Modelo da carta como string JS, usado pela prévia ao vivo do editor. */
export function GET() {
  const js = "window.CARTA_SRC=" + JSON.stringify(lerLegado("carta.html")).replace(/</g, "\\u003c") + ";\n";
  return new Response(js, {
    headers: { "content-type": "application/javascript; charset=utf-8" },
  });
}
