import type { Metadata, Viewport } from "next";
import "@/legacy/home.css";

export const metadata: Metadata = {
  title: "Escreva com Amor",
  description:
    "Cartas digitais com envelope, lacre, flores, fotos e música. Monte grátis e só pague depois de ver pronta.",
  metadataBase: new URL("https://escrevacomamor.com.br"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#5E0B18",
};

// Todas as fontes do design system (ver docs/design-system/tipografia.md).
const FONTES =
  "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Pinyon+Script&family=Jost:wght@400;500;600&family=Caveat:wght@400;600;700&family=Caveat+Brush&family=Sacramento&family=Homemade+Apple&family=Shrikhand&family=Bagel+Fat+One&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Mrs+Saint+Delafield&family=Abril+Fatface&family=Pacifico&family=Fredoka:wght@600;700&family=Great+Vibes&family=Gloock&family=Love+Ya+Like+A+Sister&family=Monoton&family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@1,900&family=Special+Elite&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTES} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
