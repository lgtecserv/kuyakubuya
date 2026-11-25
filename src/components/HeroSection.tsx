"use client";

import { useState } from "react";
import Link from "next/link";
import { Smartphone, Globe, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import DownloadModal from "@/components/DownloadModal";

export default function HeroSection() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center bg-[#060b14] overflow-hidden">
        {/* Foto realista em Maputo com sedan azul KuyaKubuya */}
        <img
          src="/images/hero-maputo.jpg"
          alt="Viaja com conforto em Moçambique com a KuyaKubuya"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradiente escuro à esquerda idêntico ao contraste editorial da referência */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04091a]/95 via-[#04091a]/75 to-[#04091a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04091a]/80 via-transparent to-transparent sm:hidden" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002b9a]/90 border border-white/20 text-xs font-bold text-[#7ffc98] backdrop-blur-xs">
              <span>🇲🇿 Mobilidade e Entregas em Moçambique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.06]">
              Viaja com conforto <br className="hidden sm:inline" />
              em Moçambique
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-medium">
              Chega de esperar sem resposta na estrada. A KuyaKubuya é a tua solução moçambicana para viajar de Mototáxi, Txopela ou Carro, e enviar encomendas ou fretes em minutos.
            </p>

            {/* CTAs principais estilo Yango adaptados */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="px-7 py-3.5 rounded-full bg-[#002b9a] hover:bg-[#001a67] border border-white/20 text-white font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer active:scale-[0.99]"
              >
                Baixar a app
              </button>

              {SITE_CONFIG.appUrl ? (
                <a
                  href={SITE_CONFIG.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-[#eff4ff] text-[#0b1c30] font-bold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Abrir no navegador</span>
                  <ArrowRight className="w-4 h-4 text-[#001a67]" />
                </a>
              ) : (
                <Link
                  href="/motorista"
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-[#eff4ff] text-[#0b1c30] font-bold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Quero ser Motorista</span>
                  <ArrowRight className="w-4 h-4 text-[#006e2e]" />
                </Link>
              )}
            </div>

            {/* Badges inferiores de plataforma */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="px-4 py-2 rounded-xl bg-black/75 hover:bg-black border border-white/25 text-white flex items-center gap-2.5 transition-colors cursor-pointer backdrop-blur-xs"
              >
                <Smartphone className="w-5 h-5 text-[#7ffc98]" />
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-slate-300 leading-none">
                    Obtém no
                  </span>
                  <span className="block text-sm font-bold leading-tight">Google Play</span>
                </div>
              </button>

              <Link
                href="/permissoes"
                className="px-4 py-2 rounded-xl bg-black/65 hover:bg-black border border-white/25 text-white flex items-center gap-2.5 transition-colors backdrop-blur-xs"
              >
                <Globe className="w-5 h-5 text-blue-300" />
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-slate-300 leading-none">
                    Transparência
                  </span>
                  <span className="block text-sm font-bold leading-tight">App Segura</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </>
  );
}
