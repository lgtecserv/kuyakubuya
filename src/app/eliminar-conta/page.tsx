import Link from "next/link";
import { Trash2, ShieldAlert, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Eliminar Conta e Dados",
  description:
    "Solicite a eliminação definitiva da sua conta KuyaKubuya e dos dados pessoais associados conforme as diretrizes da Google Play Store.",
  path: "/eliminar-conta",
});

export default function EliminarContaPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white rounded-3xl border border-[#dce9ff] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-slate-200 pb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#001a67]">
              <Trash2 className="w-4 h-4" />
              <span>Google Play Data Safety — Eliminação de Conta</span>
            </span>
            <h1 className="text-3xl font-extrabold text-[#001a67]">
              Como eliminar a sua conta KuyaKubuya
            </h1>
            <p className="text-sm text-[#444653] leading-relaxed">
              Qualquer utilizador (Passageiro ou Motorista) da app <strong>{SITE_CONFIG.brandName}</strong> (<code className="font-mono text-xs">{SITE_CONFIG.packageId}</code>) pode solicitar a remoção permanente da conta e dos seus dados pessoais sem precisar de abrir o aplicativo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] space-y-2">
              <h2 className="text-sm font-extrabold text-[#001a67] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#006e2e]" />
                <span>Dados que são eliminados</span>
              </h2>
              <ul className="text-xs text-[#444653] space-y-1 list-disc pl-4">
                <li>Perfil de autenticação, nome, e-mail e telefone</li>
                <li>Tokens de notificação push (<code className="font-mono">user_push_tokens</code>)</li>
                <li>Documentos de habilitação e fotografia enviados (motoristas)</li>
                <li>Preferências locais e dados de sessão</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#cbdbf5] space-y-2">
              <h2 className="text-sm font-extrabold text-[#001a67] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#001a67]" />
                <span>Retenção mínima legal</span>
              </h2>
              <p className="text-xs text-[#243247] leading-relaxed">
                Registos financeiros de transações já liquidadas ou obrigações fiscais em Moçambique podem ser anonimizados e conservados pelo prazo estrito exigido por lei, sem exposição ao público.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-lg font-extrabold text-[#001a67] mb-3">
              Submeter pedido de eliminação (Prazo: até 7 dias úteis)
            </h2>
            <DeleteAccountForm />
          </div>

          <div className="pt-4 border-t border-slate-200 text-xs text-[#444653] flex items-center justify-between flex-wrap gap-2">
            <span>
              Contacto direto: <strong className="font-mono">{SITE_CONFIG.supportEmail}</strong>
            </span>
            <Link href="/privacidade" className="font-bold text-[#001a67] hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
