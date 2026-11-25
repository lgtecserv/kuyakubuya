import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES_MOZAMBIQUE } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Cidades em Moçambique",
  description:
    "Veja as cidades e distritos de Moçambique onde a KuyaKubuya opera: Maputo, Matola, Boane, Manhiça, Xinavane, Gaza e Beira.",
  path: "/cidades",
});

export default function CidadesPage() {
  return (
    <div className="bg-white text-[#0b1c30]">
      <section className="bg-[#001a67] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7ffc98]">
              Cobertura Moçambique
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
              Cidades e zonas onde operamos
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Conectamos passageiros, condutores e negócios desde a baixa de Maputo até aos grandes corredores da Matola, Boane e províncias em expansão.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES_MOZAMBIQUE.map((city) => (
            <div
              key={city.name}
              className="bg-white rounded-3xl p-6 border border-[#dce9ff] shadow-xs flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#001a67]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#7ffc98]/35 text-[#005321]">
                    {city.status}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-[#001a67]">{city.name}</h2>
                <p className="text-sm text-[#444653] mt-2 leading-relaxed">
                  <strong>Zonas cobertas:</strong> {city.zones}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {city.services.map((srv) => (
                  <span
                    key={srv}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#001a67]"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-[#001a67] text-white rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-extrabold">Quer levar a KuyaKubuya para a sua cidade?</h3>
              <p className="text-sm text-slate-200 mt-1">
                Frotistas locais e parceiros comerciais podem contactar a nossa equipa de expansão.
              </p>
            </div>
            <Link
              href="/parceiros"
              className="px-6 py-3 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm inline-flex items-center gap-2 shrink-0 self-start sm:self-center"
            >
              <span>Falar sobre parcerias</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
