import Link from "next/link";
import {
  Bike,
  Car,
  Package,
  Truck,
  Navigation,
  ShieldCheck,
  Headphones,
  UserCheck,
  MapPin,
  Wallet,
  Bell,
  ArrowRight,
  CheckCircle2,
  KeyRound,
} from "lucide-react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FaqAccordion from "@/components/FaqAccordion";
import { MOBILITY_SERVICES, CITIES_MOZAMBIQUE, SITE_CONFIG } from "@/config/site";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: {
    absolute: "KuyaKubuya Moçambique — Viagens, Entregas e Fretes com Conforto",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    siteName: SITE_CONFIG.brandName,
    title: "KuyaKubuya — Viaja com conforto em Moçambique",
    description:
      "Peça Mototáxi, Txopela, Carro, Delivery ou Frete em segundos com acompanhamento em tempo real e PIN de embarque.",
    url: "/",
    images: ["/brand/icon-kk.png"],
  },
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  mototaxi: <Bike className="w-6 h-6 text-[#001a67]" />,
  txopela: <span className="text-2xl leading-none">🛺</span>,
  carro: <Car className="w-6 h-6 text-[#001a67]" />,
  delivery: <Package className="w-6 h-6 text-[#006e2e]" />,
  frete: <Truck className="w-6 h-6 text-[#006e2e]" />,
};

export default function HomePage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      {/* 1. HERO BANNER (Estilo Yango MZ com identidade KuyaKubuya) */}
      <HeroSection />

      {/* 2. NOSSOS SERVIÇOS EM MOÇAMBIQUE */}
      <section id="servicos" className="py-16 sm:py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
              Mobilidade, Entregas & Fretes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2 tracking-tight">
              Um veículo certo para cada momento do teu dia
            </h2>
            <p className="text-base text-[#444653] mt-3 leading-relaxed">
              Do mototáxi rápido à carrinha de mudanças com ajudantes: vê sempre o preço transparente em Meticais antes de confirmar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOBILITY_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#dce9ff] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#7ffc98]/35 text-[#005321] text-xs font-extrabold">
                      {service.basePrice}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#001a67]">{service.name}</h3>
                  <p className="text-xs font-semibold text-[#006e2e] mt-0.5">{service.tagline}</p>
                  <p className="text-sm text-[#444653] mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-semibold text-[#0b1c30]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#006e2e] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Card Visual Realista Delivery & Frete */}
            <div className="bg-[#001a67] text-white rounded-3xl overflow-hidden flex flex-col justify-between shadow-md">
              <div className="relative h-48 sm:h-52 w-full">
                <img
                  src="/images/delivery-frete.jpg"
                  alt="Entregas e Fretes KuyaKubuya em Maputo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a67] via-transparent to-transparent" />
              </div>
              <div className="p-6 pt-3 space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#7ffc98]">
                  Empresas & Lojas
                </span>
                <h3 className="text-xl font-extrabold">
                  Entregas comerciais e frotas parceiras
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Envie mercadorias com acompanhamento ao vivo ou integre a sua frota na plataforma.
                </p>
                <Link
                  href="/parceiros"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#7ffc98] hover:underline pt-1"
                >
                  <span>Saber mais sobre parcerias</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIAJA EM SEGURANÇA (Layout 2 colunas idêntico ao 2.º print da referência) */}
      <section id="seguranca" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 bg-[#eff4ff]">
                <img
                  src="/images/safety-maputo.jpg"
                  alt="Passageira KuyaKubuya embarcando em segurança em Maputo"
                  className="w-full h-[340px] sm:h-[440px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
                  Proteção em cada trajecto
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2 tracking-tight">
                  Viaja em segurança
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#001a67]">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0b1c30]">Rastreamento ao vivo</h3>
                  <p className="text-sm text-[#444653] leading-relaxed">
                    Acompanhe a posição do condutor, a rota estimada e o estado da viagem no mapa em tempo real até ao destino.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006e2e]">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0b1c30]">PIN de embarque</h3>
                  <p className="text-sm text-[#444653] leading-relaxed">
                    A viagem só arranca quando o motorista confirma o código secreto de 4 dígitos exibido no teu telemóvel.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#001a67]">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0b1c30]">Suporte dedicado</h3>
                  <p className="text-sm text-[#444653] leading-relaxed">
                    Equipa moçambicana disponível para esclarecer dúvidas, validar recargas e responder rapidamente às ocorrências.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006e2e]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0b1c30]">Condutores verificados</h3>
                  <p className="text-sm text-[#444653] leading-relaxed">
                    Todos os motoristas passam por validação de BI, Carta de Condução, Registo Criminal, Livrete, Inspeção e Seguro.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/privacidade"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#001a67] hover:text-[#006e2e] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ler como protegemos os teus dados e privacidade</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MOTORISTA & GANHOS (Seção dedicada na Home) */}
      <section className="py-16 sm:py-24 bg-[#001a67] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#7ffc98] text-xs font-extrabold uppercase tracking-wider">
                Para Motoristas e Transportadores
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Conduz com a KuyaKubuya e multiplica os teus ganhos
              </h2>
              <p className="text-base text-slate-200 leading-relaxed">
                Tem mota, txopela, carro ligeiro ou carrinha de frete? Trabalhe nos seus horários, receba pedidos em tempo real na barra do Android e faça recargas rápidas via M-Pesa e E-Mola.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1.5">
                  <Wallet className="w-5 h-5 text-[#7ffc98]" />
                  <h3 className="font-bold text-sm">Recargas M-Pesa e E-Mola</h3>
                  <p className="text-xs text-slate-300">
                    Envio direto do comprovativo no aplicativo com aprovação transparente pela administração.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1.5">
                  <Bell className="w-5 h-5 text-[#7ffc98]" />
                  <h3 className="font-bold text-sm">Alertas mesmo fora da app</h3>
                  <p className="text-xs text-slate-300">
                    Chamadas próximas de até 40 km e mensagens de clientes chegam direto na barra do telemóvel.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/motorista"
                  className="px-7 py-3.5 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Ver requisitos e comissões</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/parceiros"
                  className="px-7 py-3.5 rounded-full bg-white text-[#001a67] hover:bg-[#eff4ff] font-bold text-sm transition-colors"
                >
                  Registar frota
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-2xl border border-white/15">
                <img
                  src="/images/driver-maputo.jpg"
                  alt="Motorista parceiro KuyaKubuya com txopela e motorizada em Maputo"
                  className="w-full h-[340px] sm:h-[430px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CIDADES EM MOÇAMBIQUE */}
      <section className="py-16 sm:py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
                Cobertura Nacional
              </span>
              <h2 className="text-3xl font-extrabold text-[#0b1c30] mt-2">
                Onde a KuyaKubuya já está presente
              </h2>
            </div>
            <Link
              href="/cidades"
              className="text-sm font-bold text-[#001a67] hover:text-[#006e2e] inline-flex items-center gap-1.5"
            >
              <span>Ver todas as zonas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES_MOZAMBIQUE.map((city) => (
              <div
                key={city.name}
                className="bg-white rounded-2xl p-5 border border-[#dce9ff] flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-extrabold text-lg text-[#001a67] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#006e2e] shrink-0" />
                      <span>{city.name}</span>
                    </h3>
                    <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#001a67]">
                      {city.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#444653] leading-relaxed">{city.zones}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {city.services.map((srv) => (
                    <span
                      key={srv}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0b1c30]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES + BOTÃO "FAZER UMA PERGUNTA" (igual ao 3.º print) */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2">
              Perguntas sobre a KuyaKubuya
            </h2>
          </div>

          <FaqAccordion items={FAQ_ITEMS} />

          <div className="mt-10 text-center">
            <Link
              href="/suporte"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0b1c30] hover:bg-[#001a67] text-white font-bold text-sm transition-colors shadow-md"
            >
              Fazer uma pergunta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
