import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      // Loja de ofertas (AfiliadosPro, hospedada na VPS) espelhada sob
      // /loja — mantém a pessoa em amigabeauty.com.br em vez de pular pro
      // subdomínio. Os uploads de produto da loja usam caminhos raiz
      // relativos (/uploads/...), por isso precisam de uma rota própria.
      {
        source: "/loja",
        destination: "https://ofertas.amigabeauty.com.br/",
      },
      {
        source: "/loja/:path*",
        destination: "https://ofertas.amigabeauty.com.br/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "https://ofertas.amigabeauty.com.br/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;
