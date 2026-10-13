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
      // A loja em si (/loja e /loja/[...path]) é tratada por Route
      // Handlers (src/app/loja), que além de buscar o conteúdo da VPS
      // também ajustam os links de "voltar à home" da AfiliadosPro.
      // Os uploads de produto usam caminhos raiz relativos
      // (/uploads/...), por isso têm uma rota própria aqui.
      {
        source: "/uploads/:path*",
        destination: "https://ofertas.amigabeauty.com.br/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;
