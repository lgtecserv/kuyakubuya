import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/politica-de-privacidade", destination: "/privacidade" },
      { source: "/privacy", destination: "/privacidade" },
      { source: "/privacy-policy", destination: "/privacidade" },
      { source: "/delete-account", destination: "/eliminar-conta" },
      { source: "/passageiro", destination: "/" },
      { source: "/motoristas", destination: "/motorista" },
      { source: "/condutor", destination: "/motorista" },
      { source: "/parceiro", destination: "/parceiros" },
      { source: "/cidade", destination: "/cidades" },
      { source: "/sobre", destination: "/empresa" },
      { source: "/faq", destination: "/suporte" },
      { source: "/ajuda", destination: "/suporte" },
      { source: "/termos-de-uso", destination: "/termos" },
      { source: "/terms", destination: "/termos" },
    ];
  },
};

export default nextConfig;
