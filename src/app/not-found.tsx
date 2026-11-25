import Link from "next/link";
import { Compass, Home, ShieldCheck, Headphones, Trash2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#dce9ff] p-8 sm:p-12 shadow-xs text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#001a67]">
            <Compass className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
              Página não encontrada (404)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a67] tracking-tight">
              Este endereço não existe na KuyaKubuya
            </h1>
            <p className="text-sm sm:text-base text-[#444653] max-w-xl mx-auto leading-relaxed">
              O link pode ter sido digitado de forma incompleta. Utilize um dos acessos oficiais abaixo para navegar sem erros.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-[#001a67] hover:bg-[#002b9a] text-white font-bold text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Página Inicial</span>
            </Link>
            <Link
              href="/privacidade"
              className="px-6 py-3 rounded-full bg-[#006e2e] hover:bg-[#1da64e] text-white font-bold text-sm inline-flex items-center gap-2 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Política de Privacidade</span>
            </Link>
            <Link
              href="/eliminar-conta"
              className="px-5 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0b1c30] font-bold text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4 text-[#001a67]" />
              <span>Eliminar Conta</span>
            </Link>
            <Link
              href="/suporte"
              className="px-5 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0b1c30] font-bold text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Headphones className="w-4 h-4 text-[#006e2e]" />
              <span>Suporte</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
