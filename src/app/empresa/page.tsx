import Link from "next/link";
import { ShieldCheck, Globe, Compass, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Sobre a Empresa",
  description:
    "Conheça a KuyaKubuya Serviços Lda, plataforma tecnológica moçambicana de mobilidade, entregas e fretes.",
  path: "/empresa",
});

export default function EmpresaPage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      <section className="bg-[#001a67] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7ffc98]">
              {SITE_CONFIG.legalName}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
              Mobilidade pensada para a realidade de Moçambique
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              A KuyaKubuya nasce em Maputo com o propósito de ligar passageiros, comerciantes e condutores locais numa plataforma rápida, fiável e transparente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-[#dce9ff] space-y-3">
            <Compass className="w-7 h-7 text-[#001a67]" />
            <h2 className="text-xl font-extrabold text-[#001a67]">Multimodal Real</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Integramos os meios reais das cidades moçambicanas — Mototáxi, Txopela, Carro, Delivery e Frete — numa só experiência simples.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#dce9ff] space-y-3">
            <ShieldCheck className="w-7 h-7 text-[#006e2e]" />
            <h2 className="text-xl font-extrabold text-[#001a67]">Integridade & Segurança</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Exigimos documentação completa aos condutores, PIN de embarque de 4 dígitos e controlo estrito de privacidade por utilizador.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-[#dce9ff] space-y-3">
            <Globe className="w-7 h-7 text-[#001a67]" />
            <h2 className="text-xl font-extrabold text-[#001a67]">Economia Local</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Operação integrada com carteiras móveis nacionais (M-Pesa e E-Mola) e foco em oportunidades reais de rendimento em Moçambique.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap gap-4">
          <Link
            href="/privacidade"
            className="px-6 py-3 rounded-full bg-[#001a67] text-white font-bold text-sm inline-flex items-center gap-2"
          >
            <span>Política de Privacidade</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/permissoes"
            className="px-6 py-3 rounded-full bg-white border border-slate-300 text-[#0b1c30] font-bold text-sm"
          >
            Permissões da App
          </Link>
        </div>
      </section>
    </div>
  );
}
