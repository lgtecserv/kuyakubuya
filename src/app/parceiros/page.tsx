import Link from "next/link";
import { Building2, Truck, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Frotas e Parceiros",
  description:
    "Programa para proprietários de viaturas, frotas de txopelas, carrinhas de frete e empresas de entregas em Moçambique.",
  path: "/parceiros",
});

export default function ParceirosPage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      <section className="bg-[#001a67] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#7ffc98] text-xs font-extrabold uppercase tracking-wider">
              Frotas & Empresas
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Cresça a sua frota ou operação logística com a KuyaKubuya
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Proprietários de múltiplas motorizadas, txopelas, automóveis ou carrinhas de frete podem operar motoristas verificados através da plataforma e otimizar entregas comerciais.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}?subject=Parceria%20de%20Frota%20KuyaKubuya`}
                className="px-7 py-3.5 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm inline-flex items-center gap-2"
              >
                <span>Solicitar contacto comercial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/motorista"
                className="px-7 py-3.5 rounded-full bg-white text-[#001a67] hover:bg-[#eff4ff] font-bold text-sm"
              >
                Registo de motorista
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/images/delivery-frete.jpg"
              alt="Parceiro de entregas e logística KuyaKubuya"
              className="w-full h-[340px] sm:h-[420px] object-cover rounded-[28px] shadow-2xl border border-white/15"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#dce9ff] space-y-3">
            <Building2 className="w-7 h-7 text-[#001a67]" />
            <h2 className="font-extrabold text-lg">Frotas de Terceiros</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              O sistema suporta registo explícito de viaturas próprias ou de terceiros com dados do proprietário.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-[#dce9ff] space-y-3">
            <Truck className="w-7 h-7 text-[#006e2e]" />
            <h2 className="font-extrabold text-lg">Fretes & Cargas</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Pedidos específicos para carrinhas e camiões, incluindo opção de ajudantes e estimativa clara.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-[#dce9ff] space-y-3">
            <Users className="w-7 h-7 text-[#001a67]" />
            <h2 className="font-extrabold text-lg">Lojas & E-Commerce</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Serviço de Delivery urbano com estafetas verificados e rastreamento para os seus clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-[#dce9ff] space-y-3">
            <ShieldCheck className="w-7 h-7 text-[#006e2e]" />
            <h2 className="font-extrabold text-lg">Controlo Auditável</h2>
            <p className="text-sm text-[#444653] leading-relaxed">
              Histórico completo de viagens, recibos, recargas M-Pesa/E-Mola e avaliações por condutor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
