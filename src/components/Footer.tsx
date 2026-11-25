"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import DownloadModal from "@/components/DownloadModal";

export default function Footer() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#060b14] text-slate-300 pt-14 pb-10 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Marca + Botões de Loja */}
            <div className="md:col-span-3 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <img
                  src="/brand/icon-kk.png"
                  alt="KuyaKubuya"
                  className="w-9 h-9 rounded-xl"
                />
                <span className="text-white text-2xl font-black italic tracking-tight">
                  KuyaKubuya
                </span>
              </Link>

              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Mobilidade urbana, entregas rápidas e fretes sob medida em Moçambique.
              </p>

              <div className="flex flex-col gap-2.5 max-w-[200px]">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <Smartphone className="w-5 h-5 text-[#7ffc98] shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400">
                      Disponível no
                    </span>
                    <span className="block text-xs font-bold text-white">Google Play</span>
                  </div>
                </button>

                {SITE_CONFIG.appUrl && (
                  <a
                    href={SITE_CONFIG.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left flex items-center gap-3 transition-colors"
                  >
                    <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">
                        Acesso rápido
                      </span>
                      <span className="block text-xs font-bold text-white">App Web / PWA</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Colunas estruturadas como na referência */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
              <div>
                <h4 className="text-white font-bold mb-3.5 text-sm">Cidades</h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/cidades" className="hover:text-white transition-colors">
                      Maputo
                    </Link>
                  </li>
                  <li>
                    <Link href="/cidades" className="hover:text-white transition-colors">
                      Matola
                    </Link>
                  </li>
                  <li>
                    <Link href="/cidades" className="hover:text-white transition-colors">
                      Boane
                    </Link>
                  </li>
                  <li>
                    <Link href="/cidades" className="hover:text-white transition-colors">
                      Manhiça & Xinavane
                    </Link>
                  </li>
                  <li>
                    <Link href="/cidades" className="hover:text-white transition-colors">
                      Beira & Gaza
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3.5 text-sm">Os nossos serviços</h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/#servicos" className="hover:text-white transition-colors">
                      Mototáxi
                    </Link>
                  </li>
                  <li>
                    <Link href="/#servicos" className="hover:text-white transition-colors">
                      Txopela
                    </Link>
                  </li>
                  <li>
                    <Link href="/#servicos" className="hover:text-white transition-colors">
                      Carro Particular
                    </Link>
                  </li>
                  <li>
                    <Link href="/#servicos" className="hover:text-white transition-colors">
                      Delivery & Frete
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3.5 text-sm">Para passageiros</h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/#seguranca" className="hover:text-white transition-colors">
                      Segurança e PIN
                    </Link>
                  </li>
                  <li>
                    <Link href="/suporte" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/suporte" className="hover:text-white transition-colors">
                      Suporte
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3.5 text-sm">Para parceiros</h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/motorista" className="hover:text-white transition-colors">
                      Motorista
                    </Link>
                  </li>
                  <li>
                    <Link href="/parceiros" className="hover:text-white transition-colors">
                      Frotas & Empresas
                    </Link>
                  </li>
                  <li>
                    <Link href="/empresa" className="hover:text-white transition-colors">
                      Sobre a Empresa
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3.5 text-sm">Legal & Privacidade</h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/permissoes" className="hover:text-white transition-colors">
                      Permissões da app
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacidade" className="text-[#7ffc98] hover:text-white font-semibold transition-colors">
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="/termos" className="hover:text-white transition-colors">
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link href="/eliminar-conta" className="hover:text-white transition-colors">
                      Eliminar conta e dados
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div className="space-y-1.5">
              <p className="text-slate-400 font-medium">
                © 2026 {SITE_CONFIG.legalName}. Todos os direitos reservados.
              </p>
              <p className="max-w-3xl leading-relaxed">
                A KuyaKubuya é uma plataforma tecnológica de intermediação de mobilidade, entregas e fretes em Moçambique. Os serviços de transporte são prestados por motoristas e transportadores parceiros verificados. Contacto: {SITE_CONFIG.supportEmail}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 text-slate-300 shrink-0 self-start sm:self-center">
              <Globe className="w-3.5 h-3.5 text-[#7ffc98]" />
              <span>Português (Moçambique)</span>
            </div>
          </div>
        </div>
      </footer>

      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </>
  );
}
