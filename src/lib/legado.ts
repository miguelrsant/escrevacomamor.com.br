import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Arquivos do protótipo aprovado (home, editor, preços e carta) que ainda
 * não foram quebrados em componentes React. Ficam em src/legacy/ e são lidos
 * no build. Ver docs/arquitetura.md.
 */
const DIR = path.join(process.cwd(), "src", "legacy");

export function lerLegado(nome: "home.html" | "carta.html" | "fotos.css"): string {
  return readFileSync(path.join(DIR, nome), "utf8");
}

/** As 7 ocasiões (chaves usadas pela carta e pelo editor). */
export const MODELOS = [
  "declaracao",
  "namoro",
  "pedido",
  "aniversario",
  "amigos",
  "sair",
  "homenagem",
] as const;

export type Modelo = (typeof MODELOS)[number];

/** Configuração aceita pela carta (window.EA_CFG / mensagem "ea-cfg"). */
export type CartaCfg = {
  occ?: Modelo;
  style?: "classic" | "fun";
  env?: string;
  wax?: string;
  sym?: string;
  ini?: string;
  pele?: string;
  paper?: string;
  flor?: string;
  gal?: string;
  stk?: string[];
  txt?: Record<string, string> | null;
  photos?: unknown[] | null;
  lang?: "pt" | "en" | "es";
  embed?: boolean;
  open?: boolean;
};

/** Monta o HTML da carta com as fotos e a configuração já embutidas. */
export function montarCarta(cfg: CartaCfg): string {
  const json = JSON.stringify(cfg).replace(/</g, "\\u003c");
  return lerLegado("carta.html")
    .replace("/*%%PH%%*/", () => lerLegado("fotos.css"))
    .replace('"%%CFG%%"', () => json);
}
