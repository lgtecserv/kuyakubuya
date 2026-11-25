import Link from "next/link";
import { Mail, Phone, ShieldCheck, Trash2 } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ_ITEMS } from "@/data/faq";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Suporte e Perguntas Frequentes",
  description:
    "Central de ajuda da KuyaKubuya em Moçambique: dúvidas de passageiros, motoristas, M-Pesa/E-Mola, privacidade e contacto direto.",
  path: "/suporte",
});

export default function SuportePage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      <section className="bg-[#001a67] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7ffc98]">
            Central de Ajuda
          </span>
          <h1 className="text-4xl font-extrabold mt-2 tracking-tight">
            Como podemos ajudar hoje?
          </h1>
          <p className="text-base text-slate-200 mt-3 max-w-2xl leading-relaxed">
            Consulte as respostas mais frequentes ou contacte diretamente a equipa da {SITE_CONFIG.legalName}.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#f8f9ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="bg-white p-6 rounded-2xl border border-[#dce9ff] hover:border-[#001a67] transition-colors space-y-2"
          >
            <Mail className="w-6 h-6 text-[#001a67]" />
            <h2 className="font-extrabold text-base">E-mail de Suporte</h2>
            <p className="text-xs text-[#444653]">{SITE_CONFIG.supportEmail}</p>
          </a>

          <div className="bg-white p-6 rounded-2xl border border-[#dce9ff] space-y-2">
            <Phone className="w-6 h-6 text-[#006e2e]" />
            <h2 className="font-extrabold text-base">Atendimento Moçambique</h2>
            <p className="text-xs text-[#444653] font-mono">{SITE_CONFIG.supportPhone}</p>
          </div>

          <Link
            href="/eliminar-conta"
            className="bg-white p-6 rounded-2xl border border-[#dce9ff] hover:border-[#001a67] transition-colors space-y-2"
          >
            <Trash2 className="w-6 h-6 text-[#001a67]" />
            <h2 className="font-extrabold text-base">Privacidade e Conta</h2>
            <p className="text-xs text-[#444653]">Pedir eliminação de conta e dados</p>
          </Link>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0b1c30] mb-6">
            Todas as Perguntas Frequentes
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />

          <div className="mt-8 p-5 rounded-2xl bg-[#eff4ff] border border-[#cbdbf5] flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#001a67]">
              <ShieldCheck className="w-5 h-5 text-[#006e2e]" />
              <span>Consulte também a nossa Política de Privacidade e Permissões da App.</span>
            </div>
            <Link
              href="/privacidade"
              className="px-5 py-2 rounded-full bg-[#001a67] text-white text-xs font-bold"
            >
              Ver Política de Privacidade
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
