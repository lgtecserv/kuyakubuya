import Link from "next/link";
import { ShieldCheck, Lock, MapPin, Bell, Trash2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Política de Privacidade",
  description:
    "Política de Privacidade oficial do aplicativo KuyaKubuya (com.kuyakubuya.app): dados recolhidos, localização GPS, notificações Firebase FCM, segurança e eliminação de conta.",
  path: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#dce9ff] p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
          {/* Cabeçalho */}
          <header className="border-b border-slate-200 pb-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#001a67] text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#006e2e]" />
              <span>Documento Oficial • Google Play Store ({SITE_CONFIG.packageId})</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a67] tracking-tight">
              Política de Privacidade — KuyaKubuya
            </h1>
            <p className="text-sm text-[#444653]">
              <strong>Entidade Responsável:</strong> {SITE_CONFIG.legalName} • {SITE_CONFIG.headquarters}
              <br />
              <strong>Última atualização:</strong> Novembro de 2026
            </p>
          </header>

          {/* Resumo Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] space-y-1.5">
              <MapPin className="w-5 h-5 text-[#001a67]" />
              <h2 className="text-sm font-extrabold">Localização em Uso</h2>
              <p className="text-xs text-[#444653] leading-relaxed">
                Usada apenas para mapas, recolha e ligação a condutores próximos enquanto usa o app.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] space-y-1.5">
              <Bell className="w-5 h-5 text-[#006e2e]" />
              <h2 className="text-sm font-extrabold">Push em Tempo Real</h2>
              <p className="text-xs text-[#444653] leading-relaxed">
                Tokens FCM usados só para alertas de viagem, chat e carteira. Removidos no logout.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] space-y-1.5">
              <Lock className="w-5 h-5 text-[#001a67]" />
              <h2 className="text-sm font-extrabold">Nunca Vendemos Dados</h2>
              <p className="text-xs text-[#444653] leading-relaxed">
                Tráfego encriptado por TLS/HTTPS e isolamento rigoroso de acesso por utilizador.
              </p>
            </div>
          </div>

          {/* Secções Legais */}
          <article className="space-y-7 text-sm sm:text-[15px] text-[#243247] leading-relaxed">
            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">1. Âmbito e Aceitação</h2>
              <p>
                A presente Política de Privacidade descreve como a <strong>{SITE_CONFIG.legalName}</strong> recolhe, utiliza, armazena e protege os dados pessoais dos utilizadores do aplicativo móvel e web <strong>KuyaKubuya</strong> (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">{SITE_CONFIG.packageId}</code>), incluindo Passageiros, Motoristas/Transportadores Parceiros e Administradores em Moçambique.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">2. Dados Pessoais que Recolhemos</h2>
              <p>Recolhemos exclusivamente os dados necessários para prestar os serviços de mobilidade, entregas (Delivery) e fretes:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Dados de Conta e Passageiros:</strong> nome completo, endereço de e-mail, número de telefone, código PIN de embarque de 4 dígitos, endereços de recolha/destino, histórico de viagens, mensagens enviadas no chat da viagem e avaliações atribuídas.
                </li>
                <li>
                  <strong>Dados de Motoristas e Transportadores Parceiros:</strong> nome, data de nascimento, género, nacionalidade, número de Bilhete de Identidade (BI) ou Passaporte, NUIT, telefone principal e secundário, bairro/distrito, número e validade da Carta de Condução, Registo Criminal, Livrete, Inspeção e Seguro da viatura, fotografia de perfil, dados da viatura (tipo, modelo, ano, matrícula, cor, capacidade), dados bancários/carteira móvel e comprovativos de recarga M-Pesa/E-Mola.
                </li>
                <li>
                  <strong>Dados Técnicos e Tokens de Notificação:</strong> identificadores de token Firebase Cloud Messaging (FCM), tipo de plataforma (<code className="font-mono text-xs">android</code> / <code className="font-mono text-xs">web</code>) e informações básicas do dispositivo necessárias para entregar notificações na barra do sistema.
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">3. Dados de Localização Geográfica (GPS)</h2>
              <p>
                O aplicativo solicita permissões de localização precisa (<code className="font-mono text-xs">ACCESS_FINE_LOCATION</code>) e aproximada (<code className="font-mono text-xs">ACCESS_COARSE_LOCATION</code>):
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Passageiros:</strong> a localização é recolhida apenas enquanto o aplicativo está aberto e em utilização, para preencher automaticamente o ponto de recolha, calcular rotas/preços e acompanhar o trajeto no mapa.
                </li>
                <li>
                  <strong>Motoristas Parceiros:</strong> quando o condutor ativa manualmente o estado <strong>Online</strong> no painel, as suas coordenadas são atualizadas para que o servidor possa enviar pedidos de viagens próximos (num raio operacional de até 40 km) e mostrar a aproximação ao passageiro atribuído.
                </li>
                <li>
                  O utilizador pode revogar a permissão de localização a qualquer momento nas definições do Android.
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">4. Notificações Push em Tempo Real</h2>
              <p>
                Com a autorização do utilizador (<code className="font-mono text-xs">POST_NOTIFICATIONS</code> no Android 13+ ou permissão do navegador), utilizamos o serviço <strong>Firebase Cloud Messaging (FCM)</strong> para enviar alertas operacionais fora do aplicativo (novas chamadas de corrida para motoristas ativos, aceitação, chegada do motorista, início/fim da corrida, mensagens no chat da viagem e validação de recargas). Ao terminar sessão (<em>Sign Out</em>), o token FCM associado ao dispositivo é removido da conta para evitar notificações indevidas a terceiros.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">5. Partilha de Dados e Subprocessadores</h2>
              <p>Não vendemos nem alugamos dados pessoais. A partilha ocorre apenas nos casos estritamente operacionais:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Entre Passageiro e Motorista na Mesma Viagem:</strong> após a aceitação de um pedido, o passageiro vê nome, telefone, modelo/matrícula e localização do motorista atribuído; o motorista vê nome, recolha, destino e chat da viagem em curso. Outros utilizadores não têm acesso aos seus dados.
                </li>
                <li>
                  <strong>Infraestrutura Tecnológica:</strong> utilizamos <strong>Supabase</strong> (autenticação e base de dados protegida por políticas RLS), <strong>Mapbox</strong> (renderização de mapas, pesquisa de endereços e cálculo de rotas) e <strong>Google Firebase</strong> (entrega segura de notificações push).
                </li>
                <li>
                  <strong>Obrigação Legal:</strong> mediante requisição formal das autoridades competentes da República de Moçambique.
                </li>
              </ul>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">6. Segurança e Retenção de Dados</h2>
              <p>
                Todas as comunicações entre o aplicativo e os nossos servidores são encriptadas em trânsito via <strong>HTTPS/TLS</strong>. O acesso às tabelas da base de dados é protegido por controlo estrito de acesso ao nível da linha (<em>Row Level Security</em>) e validação por JWT no servidor. Os dados são conservados apenas enquanto a conta estiver ativa ou pelo prazo exigido pela legislação contabilística e fiscal aplicável em Moçambique.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">7. Proteção de Menores</h2>
              <p>
                Os serviços da KuyaKubuya destinam-se exclusivamente a utilizadores com <strong>18 anos ou mais</strong>. Não recolhemos intencionalmente dados de crianças ou menores de idade.
              </p>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">8. Direitos do Utilizador e Eliminação de Conta</h2>
              <p>
                Tem o direito de consultar, retificar ou solicitar a eliminação da sua conta e dados pessoais. Disponibilizamos uma página específica para submissão de pedidos de eliminação conforme exigido pela Google Play Store:
              </p>
              <div className="p-4 rounded-2xl bg-[#eff4ff] border border-[#cbdbf5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-sm font-bold text-[#001a67]">
                  <Trash2 className="w-5 h-5 text-[#001a67] shrink-0" />
                  <span>Pedido de Eliminação de Conta e Dados</span>
                </div>
                <Link
                  href="/eliminar-conta"
                  className="px-5 py-2.5 rounded-full bg-[#001a67] hover:bg-[#002b9a] text-white text-xs font-bold text-center"
                >
                  Aceder a /eliminar-conta
                </Link>
              </div>
            </section>

            <section className="space-y-2.5">
              <h2 className="text-xl font-extrabold text-[#001a67]">9. Contactos</h2>
              <p>
                Para dúvidas sobre privacidade ou proteção de dados:
                <br />
                <strong>Empresa:</strong> {SITE_CONFIG.legalName} ({SITE_CONFIG.headquarters})
                <br />
                <strong>E-mail:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="text-[#001a67] font-bold underline"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
                <br />
                <strong>Telefone:</strong> {SITE_CONFIG.supportPhone}
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
