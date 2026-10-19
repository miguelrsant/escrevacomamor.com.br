import ScriptsLegado from "@/components/ScriptsLegado";
import { lerLegado } from "@/lib/legado";

/**
 * Home, editor ("criar") e preços. As três telas são views da mesma página
 * (#inicio, #criar, #precos) e os exemplos abrem em tela cheia por hash
 * (#ver-carta-<modelo>, #ver-album, #ver-retro, #ver-minha).
 */
export default function Home() {
  return (
    <>
      {/* O home.js lê as fotos daqui e repassa para a carta da prévia. */}
      <style id="ph-css" dangerouslySetInnerHTML={{ __html: lerLegado("fotos.css") }} />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: lerLegado("home.html") }} />
      <ScriptsLegado />
    </>
  );
}
