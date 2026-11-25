export interface FaqItem {
  category: "Passageiros" | "Motoristas" | "Pagamentos" | "Segurança e Privacidade";
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Passageiros",
    question: "Como peço uma viagem ou entrega na KuyaKubuya?",
    answer:
      "Abra o aplicativo KuyaKubuya, confirme o seu ponto de recolha no mapa, escreva o destino, escolha entre Mototáxi, Txopela, Carro, Delivery ou Frete e toque em Solicitar. Pode acompanhar o motorista a caminho em tempo real.",
  },
  {
    category: "Segurança e Privacidade",
    question: "Para que serve o PIN de embarque de 4 dígitos?",
    answer:
      "Cada viagem gera um código PIN único no telemóvel do passageiro. O motorista só consegue iniciar oficialmente a corrida depois de confirmar esse PIN consigo no embarque, garantindo que entra sempre na viatura certa.",
  },
  {
    category: "Segurança e Privacidade",
    question: "Como os motoristas da KuyaKubuya são verificados?",
    answer:
      "Antes de ficarem ativos na plataforma, todos os condutores submetem Bilhete de Identidade ou Passaporte, NUIT, Carta de Condução válida, Registo Criminal, Livrete, Inspeção e Seguro da viatura para análise e aprovação manual da nossa equipa.",
  },
  {
    category: "Pagamentos",
    question: "Quais são os métodos de pagamento disponíveis?",
    answer:
      "As corridas mostram o preço estimado em Meticais (MT) antes da confirmação. Os motoristas parceiros também carregam a sua carteira diretamente via Vodacom M-Pesa, Movitel E-Mola ou transferência bancária/NIB com validação transparente.",
  },
  {
    category: "Motoristas",
    question: "Como faço para conduzir ou registar a minha viatura na KuyaKubuya?",
    answer:
      "Aceda à opção 'Registar como Motorista' na app, preencha os seus dados pessoais, tipo de veículo (Moto, Txopela, Carro, Camião/Frete ou Bicicleta para entregas) e envie os documentos obrigatórios. Receberá uma notificação assim que a conta for aprovada.",
  },
  {
    category: "Motoristas",
    question: "Como funcionam as taxas e bónus iniciais para motoristas?",
    answer:
      "Na 1.ª viagem é aplicada a taxa fixa de ativação de 50 MT; da 2.ª à 10.ª viagem a taxa de comissão é 0% (promoção de arranque para o motorista ficar com 100% do ganho); a partir da 11.ª viagem aplica-se a comissão transparente de 10%.",
  },
  {
    category: "Segurança e Privacidade",
    question: "A KuyaKubuya recolhe a minha localização com a app fechada?",
    answer:
      "Não. Para passageiros, a localização GPS é usada apenas enquanto a aplicação está aberta para definir a recolha e calcular o percurso. Para motoristas, a localização é atualizada apenas enquanto o condutor escolhe ficar 'Online' para receber pedidos próximos.",
  },
  {
    category: "Segurança e Privacidade",
    question: "Como posso pedir a eliminação da minha conta e dados?",
    answer:
      "Pode solicitar a eliminação a qualquer momento através da nossa página dedicada em /eliminar-conta ou escrevendo para o e-mail oficial de suporte indicado na Política de Privacidade.",
  },
];
