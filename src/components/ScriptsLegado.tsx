"use client";

import { useEffect } from "react";

/**
 * Carrega, em ordem, os scripts do protótipo depois que a página hidrata.
 * O home.js lê window.CARTA_SRC (carta usada na prévia ao vivo) e usa
 * window.QRCode na entrega; por isso a ordem importa.
 */
const SCRIPTS = ["/vendor/qrcode.min.js", "/carta-src.js", "/js/home.js"];

declare global {
  interface Window {
    __eaLegado?: boolean;
  }
}

export default function ScriptsLegado() {
  useEffect(() => {
    if (window.__eaLegado) return;
    window.__eaLegado = true;
    let i = 0;
    const proximo = () => {
      if (i >= SCRIPTS.length) return;
      const s = document.createElement("script");
      s.src = SCRIPTS[i++];
      s.async = false;
      s.onload = proximo;
      document.body.appendChild(s);
    };
    proximo();
  }, []);
  return null;
}
