function resolveSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim() ||
    "https://kuyakubuya.vercel.app";

  const withProtocol = /^https?:\/\//i.test(configured)
    ? configured
    : `https://${configured}`;

  return withProtocol.replace(/\/+$/, "");
}

export const SITE_CONFIG = {
  brandName: "KuyaKubuya",
  legalName: "KuyaKubuya Serviços Lda",
  country: "Moçambique",
  headquarters: "Maputo, Moçambique",
  siteUrl: resolveSiteUrl(),
  appUrl: process.env.NEXT_PUBLIC_APP_URL?.trim() || "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAYSTORE_URL?.trim() || "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "suporte@kuyakubuya.co.mz",
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE?.trim() || "+258 84 900 1234",
  packageId: "com.kuyakubuya.app",
  appVersion: "1.1.0",
};

export interface MobilityService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  basePrice: string;
  highlights: string[];
}

export const MOBILITY_SERVICES: MobilityService[] = [
  {
    id: "mototaxi",
    name: "Mototáxi",
    tagline: "Deslocações rápidas sem trânsito",
    description:
      "Ideal para atravessar a cidade com agilidade, chegar a horas ao trabalho ou evitar horas de ponta em Maputo e Matola.",
    basePrice: "Desde 50 MT",
    highlights: ["Chegada rápida", "PIN de embarque", "Preço calculado antes de pedir"],
  },
  {
    id: "txopela",
    name: "Txopela",
    tagline: "Praticidade nos bairros e avenidas",
    description:
      "Transporte urbano versátil para o dia a dia, compras e trajectos curtos com cobertura e conforto.",
    basePrice: "Desde 70 MT",
    highlights: ["Até 3 passageiros", "Cobertura nos bairros", "Condutores verificados"],
  },
  {
    id: "carro",
    name: "Carro Particular",
    tagline: "Conforto para viagens e reuniões",
    description:
      "Viaturas ligeiras confortáveis para deslocações executivas, família, aeroporto ou trajectos intermunicipais.",
    basePrice: "Desde 150 MT",
    highlights: ["Ar condicionado e espaço", "Rastreio em tempo real", "Partilha de percurso"],
  },
  {
    id: "delivery",
    name: "Delivery",
    tagline: "Encomendas e compras entregues na hora",
    description:
      "Envie documentos, encomendas de loja ou refeições dentro da cidade com acompanhamento ao vivo no mapa.",
    basePrice: "Desde 80 MT",
    highlights: ["Entrega porta a porta", "Notificações em tempo real", "Chat direto com estafeta"],
  },
  {
    id: "frete",
    name: "Frete & Mudanças",
    tagline: "Carrinhas e camiões sob medida",
    description:
      "Transporte de mercadorias, eletrodomésticos ou mudanças completas com opção de selecionar ajudantes na app.",
    basePrice: "Desde 250 MT",
    highlights: ["Ajudantes opcionais", "Carga protegida", "Orçamento imediato"],
  },
];

export const CITIES_MOZAMBIQUE = [
  {
    name: "Maputo Cidade",
    status: "Operação Activa",
    zones: "Baixa, Polana, Sommerschield, Alto Maé, Zimpeto, Costa do Sol, Hulene",
    services: ["Mototáxi", "Txopela", "Carro", "Delivery", "Frete"],
  },
  {
    name: "Matola & Matola-Rio",
    status: "Operação Activa",
    zones: "Machava, Liberdade, T-3, Mozal, Fomento, Malhampsene, Bunhiça",
    services: ["Mototáxi", "Txopela", "Carro", "Delivery", "Frete"],
  },
  {
    name: "Boane",
    status: "Operação Activa",
    zones: "Vila de Boane, Beluluane, Campoane, Massaca, Matola-Rio",
    services: ["Mototáxi", "Txopela", "Carro", "Delivery", "Frete"],
  },
  {
    name: "Manhiça & Xinavane",
    status: "Operação Activa",
    zones: "Vila da Manhiça, Maragra, Palmeira, Xinavane",
    services: ["Mototáxi", "Txopela", "Carro", "Delivery"],
  },
  {
    name: "Gaza (Xai-Xai)",
    status: "Operação Regional",
    zones: "Xai-Xai Cidade, Praia do Xai-Xai, Chókwè, Macia",
    services: ["Mototáxi", "Txopela", "Carro", "Frete"],
  },
  {
    name: "Beira (Sofala)",
    status: "Em Expansão",
    zones: "Ponta Gêa, Macuti, Munhava, Matacuane, Esturro",
    services: ["Mototáxi", "Txopela", "Carro", "Delivery"],
  },
];
