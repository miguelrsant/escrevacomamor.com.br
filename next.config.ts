import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // As telas "criar" e "preços" ainda vivem dentro da home (views por hash).
  // Estas rotas existem para links bonitos e já levam para a view certa.
  async redirects() {
    return [
      { source: "/criar", destination: "/#criar", permanent: false },
      { source: "/precos", destination: "/#precos", permanent: false },
    ];
  },
};

export default nextConfig;
