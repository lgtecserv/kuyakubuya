import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Wallet,
  BellRing,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Para Motoristas",
  description:
    "Conduza com a KuyaKubuya em Moçambique: requisitos de registo, veículos aceites, promoções de arranque e recargas M-Pesa e E-Mola.",
  path: "/motorista",
});

const REQUIRED_DOCS = [
  "Bilhete de Identidade (BI) ou Passaporte válido",
  "NUIT (Número Único de Identificação Tributária)",
  "Carta de Condução válida para a categoria do veículo",
  "Registo Criminal atualizado",
  "Livrete e Título de Registo de Propriedade da viatura",
  "Certificado de Inspeção e Seguro automóvel ativo",
  "Fotografia de rosto recente e telefone com WhatsApp/chamadas",
];

const VEHICLE_CATEGORIES = [
  {
    name: "Moto (Duas Rodas)",
    services: "Mototáxi Express & Delivery",
    detail: "Ideal para deslocações rápidas e pequenas encomendas urbanas.",
  },
  {
    name: "Txopela (Triciclo)",
    services: "Txopela Passageiros & Delivery",
    detail: "Muito procurada nos bairros, mercados e percursos curtos.",
  },
  {
    name: "Carro Ligeiro",
    services: "Carro Particular & Delivery",
    detail: "Viagens confortáveis de cidade, executivas e aeroporto.",
  },
  {
    name: "Carrinha / Camião",
    services: "Frete & Mudanças",
    detail: "Transporte de cargas, mercadorias comerciais e mudanças com ajudantes.",
  },
  {
    name: "Bicicleta",
    services: "Delivery Ecológico",
    detail: "Entregas rápidas de proximidade em zonas centrais.",
  },
];

export default function MotoristaPage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      {/* Hero Motorista */}
      <section className="bg-[#001a67] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#7ffc98] text-xs font-extrabold uppercase tracking-wider">
              Motorista Parceiro KuyaKubuya
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Transforma o teu veículo numa fonte diária de renda
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Fica online quando quiseres, recebe pedidos próximos de até 40 km com alerta sonoro mesmo com a tela bloqueada e gere o teu saldo facilmente via M-Pesa e E-Mola.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/#servicos"
                className="px-7 py-3.5 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Ver como começar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/suporte"
                className="px-7 py-3.5 rounded-full bg-white text-[#001a67] hover:bg-[#eff4ff] font-bold text-sm transition-colors"
              >
                Falar com suporte
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/images/driver-maputo.jpg"
              alt="Motorista parceiro KuyaKubuya em Maputo"
              className="w-full h-[340px] sm:h-[420px] object-cover rounded-[28px] shadow-2xl border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* Estrutura de Comissões */}
      <section className="py-16 sm:py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
              Regras Transparentes
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b1c30] mt-2">
              Comissões pensadas para o teu crescimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#dce9ff]">
              <span className="text-xs font-extrabold uppercase text-[#001a67]">1.ª Viagem</span>
              <p className="text-3xl font-black text-[#001a67] mt-2">50 MT fixos</p>
              <p className="text-sm text-[#444653] mt-3 leading-relaxed">
                Taxa única inicial de ativação cobrada na primeira corrida concluída com sucesso.
              </p>
            </div>

            <div className="bg-[#006e2e] text-white rounded-3xl p-6 shadow-md">
              <span className="text-xs font-extrabold uppercase text-[#7ffc98]">
                Viagens 2 a 10 (Bónus)
              </span>
              <p className="text-3xl font-black mt-2">0% de comissão</p>
              <p className="text-sm text-emerald-50 mt-3 leading-relaxed">
                Fica com 100% do valor das 9 corridas seguintes para impulsionares o teu arranque na plataforma.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#dce9ff]">
              <span className="text-xs font-extrabold uppercase text-[#001a67]">
                A partir da 11.ª viagem
              </span>
              <p className="text-3xl font-black text-[#001a67] mt-2">10% de comissão</p>
              <p className="text-sm text-[#444653] mt-3 leading-relaxed">
                Uma das taxas mais competitivas do mercado, com margem de tolerância para não perderes viagens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veículos e Documentos */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mb-6 flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-[#001a67]" />
              <span>Documentos exigidos no cadastro</span>
            </h2>
            <div className="space-y-3">
              {REQUIRED_DOCS.map((doc) => (
                <div
                  key={doc}
                  className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#006e2e] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#0b1c30]">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mb-6 flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#006e2e]" />
              <span>Categorias aceites</span>
            </h2>
            <div className="space-y-3">
              {VEHICLE_CATEGORIES.map((v) => (
                <div
                  key={v.name}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-extrabold text-[#001a67]">{v.name}</h3>
                    <span className="text-xs font-bold text-[#006e2e] bg-[#7ffc98]/30 px-2.5 py-0.5 rounded-full">
                      {v.services}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#444653] mt-1.5">{v.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-[#eff4ff] border border-[#cbdbf5] flex items-start gap-3">
              <div className="flex gap-2 shrink-0 text-[#001a67]">
                <Wallet className="w-5 h-5" />
                <BellRing className="w-5 h-5 text-[#006e2e]" />
              </div>
              <p className="text-xs sm:text-sm text-[#0b1c30] leading-relaxed">
                Assim que submeteres os teus dados na app, os nossos administradores analisam os documentos e enviam uma notificação push direta quando a conta ficar <strong>Ativa</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
