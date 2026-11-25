import Link from "next/link";
import { MapPin, Bell, Camera, Wifi, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Permissões da App",
  description:
    "Explicação transparente de todas as permissões solicitadas pelo aplicativo Android KuyaKubuya.",
  path: "/permissoes",
});

const PERMISSIONS = [
  {
    icon: <MapPin className="w-6 h-6 text-[#001a67]" />,
    name: "Localização Precisa e Aproximada (ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION)",
    purpose: "Enquanto o aplicativo está em uso",
    description:
      "Permite identificar automaticamente o teu ponto de recolha em Moçambique, calcular distância e tarifa antes de pedir e ligar o passageiro ao motorista disponível mais próximo.",
  },
  {
    icon: <Bell className="w-6 h-6 text-[#006e2e]" />,
    name: "Notificações Push (POST_NOTIFICATIONS)",
    purpose: "Android 13+ e Web Push",
    description:
      "Necessária para mostrar na barra de notificações do Android, mesmo fora do aplicativo, novas chamadas de corrida (motoristas), chegada da viatura, mensagens do chat da corrida e confirmações de recarga.",
  },
  {
    icon: <Camera className="w-6 h-6 text-[#001a67]" />,
    name: "Seleção de Ficheiros / Fotos (Documentos e Comprovativos)",
    purpose: "Apenas quando o utilizador escolhe anexar um ficheiro",
    description:
      "Utilizada quando um motorista envia os documentos de habilitação (BI, Carta, Livrete, Registo Criminal, Inspeção, Seguro) ou um comprovativo de recarga M-Pesa/E-Mola.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#006e2e]" />,
    name: "Vibração e Estado de Ativação (VIBRATE / WAKE_LOCK)",
    purpose: "Alertas sonoros e táteis",
    description:
      "Garante que o telemóvel vibre e acorde brevemente para entregar alertas de corrida urgente sem falhas.",
  },
  {
    icon: <Wifi className="w-6 h-6 text-[#001a67]" />,
    name: "Internet e Estado da Rede (INTERNET / ACCESS_NETWORK_STATE)",
    purpose: "Comunicação segura HTTPS",
    description:
      "Indispensável para carregar mapas Mapbox, autenticar a conta e sincronizar viagens em tempo real com os servidores KuyaKubuya.",
  },
];

export default function PermissoesPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl border border-[#dce9ff] p-6 sm:p-10 shadow-xs">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#006e2e]">
            Transparência Google Play ({SITE_CONFIG.packageId})
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a67] mt-2">
            Permissões do Aplicativo KuyaKubuya
          </h1>
          <p className="text-sm sm:text-base text-[#444653] mt-3 leading-relaxed">
            Solicitamos apenas as permissões estritamente necessárias para o funcionamento seguro das viagens, entregas e notificações. Não recolhemos contactos pessoais, SMS nem localização em segundo plano quando o motorista está offline ou a app está fechada.
          </p>

          <div className="mt-8 space-y-4">
            {PERMISSIONS.map((perm) => (
              <div
                key={perm.name}
                className="p-5 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  {perm.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#006e2e] block">
                    {perm.purpose}
                  </span>
                  <h2 className="font-extrabold text-[#001a67] text-base">{perm.name}</h2>
                  <p className="text-sm text-[#444653] leading-relaxed">{perm.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/privacidade"
              className="text-sm font-bold text-[#001a67] hover:underline"
            >
              Ver Política de Privacidade Completa →
            </Link>
            <Link
              href="/eliminar-conta"
              className="px-5 py-2.5 rounded-full bg-[#001a67] text-white text-xs font-bold"
            >
              Eliminar Conta e Dados
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
