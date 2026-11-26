import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Termos de Uso",
  description:
    "Termos e Condições de Uso dos serviços de mobilidade, delivery e fretes da plataforma KuyaKubuya em Moçambique.",
  path: "/termos",
});

export default function TermosPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#dce9ff] p-6 sm:p-10 lg:p-12 shadow-xs space-y-6">
          <header className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#001a67]">
              Termos e Condições de Uso — KuyaKubuya
            </h1>
            <p className="text-sm text-[#444653] mt-2">
              {SITE_CONFIG.legalName} • {SITE_CONFIG.headquarters} • Atualizado em Novembro de 2026
            </p>
          </header>

          <article className="space-y-6 text-sm sm:text-[15px] text-[#243247] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">1. Objeto da Plataforma</h2>
              <p>
                A {SITE_CONFIG.legalName} disponibiliza uma plataforma tecnológica de intermediação que conecta utilizadores (Passageiros e Remetentes) a Motoristas e Transportadores independentes em Moçambique para viagens de Mototáxi, Txopela, Carro, Delivery e Frete.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">2. Registo e Verificação</h2>
              <p>
                Para utilizar a plataforma como passageiro, o utilizador deve ter pelo menos <strong>13 anos</strong> (sendo necessária autorização dos pais ou encarregados de educação entre os 13 e os 17 anos) e fornecer informações verdadeiras. O registo como Motorista ou Transportador Parceiro é reservado a maiores de <strong>18 anos</strong> e só fica ativo após validação documental pela administração.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">3. Código PIN e Segurança da Viagem</h2>
              <p>
                O passageiro compromete-se a confirmar a matrícula do veículo e partilhar o PIN de 4 dígitos apenas com o motorista atribuído no momento do embarque. O motorista deve iniciar a viagem no aplicativo exclusivamente após validar esse PIN.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">4. Tarifas, Comissões e Cancelamentos</h2>
              <p>
                O preço estimado da viagem ou frete em Meticais (MT) é apresentado antes da confirmação. O cancelamento gratuito é permitido antes de a viagem entrar em curso (<code className="font-mono text-xs">in_progress</code>). Motoristas utilizam carteira pré-paga recarregada via contas oficiais M-Pesa, E-Mola ou NIB indicadas na aplicação.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">5. Conduta e Suspensão</h2>
              <p>
                Comportamentos abusivos, fraudes em comprovativos, tentativa de burla ou partilha falsa de identidade resultam em suspensão imediata da conta.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-extrabold text-[#001a67]">6. Contacto e Privacidade</h2>
              <p>
                O tratamento dos dados pessoais rege-se pela nossa{" "}
                <Link href="/privacidade" className="text-[#001a67] font-bold underline">
                  Política de Privacidade
                </Link>
                . Suporte disponível em{" "}
                <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="font-bold underline">
                  {SITE_CONFIG.supportEmail}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
