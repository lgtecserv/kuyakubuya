"use client";

import Link from "next/link";
import { X, Smartphone, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DownloadModal({ open, onClose }: DownloadModalProps) {
  if (!open) return null;

  const hasPlayStoreUrl = Boolean(SITE_CONFIG.playStoreUrl);
  const hasAppUrl = Boolean(SITE_CONFIG.appUrl);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de download"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <img
            src="/brand/icon-kk.png"
            alt="KuyaKubuya"
            className="w-12 h-12 rounded-2xl shadow-sm"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006e2e]">
              Android & Web App
            </span>
            <h3 className="text-xl font-extrabold text-[#0b1c30]">
              Baixar a App KuyaKubuya
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#444653] leading-relaxed mb-6">
          Viaje por Maputo, Matola e arredores com Mototáxi, Txopela, Carro, Delivery ou Frete. Receba alertas em tempo real mesmo fora do aplicativo.
        </p>

        <div className="space-y-3">
          {hasPlayStoreUrl ? (
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-5 rounded-full bg-[#001a67] hover:bg-[#002b9a] text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-colors shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Obter na Google Play Store</span>
            </a>
          ) : (
            <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#cbdbf5] text-sm">
              <div className="flex items-center gap-2 font-bold text-[#001a67] mb-1">
                <Smartphone className="w-4 h-4 text-[#006e2e]" />
                <span>Google Play Store — Versão {SITE_CONFIG.appVersion}</span>
              </div>
              <p className="text-xs text-[#444653] leading-relaxed">
                O pacote oficial (<code className="font-mono">{SITE_CONFIG.packageId}</code>) encontra-se em processo de publicação na Google Play Store. Assim que estiver aprovado, o botão direto ficará disponível aqui.
              </p>
            </div>
          )}

          {hasAppUrl ? (
            <a
              href={SITE_CONFIG.appUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-5 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>Abrir KuyaKubuya no Navegador</span>
            </a>
          ) : (
            <Link
              href="/motorista"
              onClick={onClose}
              className="w-full py-3.5 px-5 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0b1c30] font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-[#006e2e]" />
              <span>Ver Requisitos para Motoristas</span>
            </Link>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-[#444653]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#006e2e]" />
            Verificado • Android 7.0+
          </span>
          <Link
            href="/privacidade"
            onClick={onClose}
            className="font-semibold text-[#001a67] hover:underline"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}
