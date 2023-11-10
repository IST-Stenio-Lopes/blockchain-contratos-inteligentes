const UE16Q1 = {
  uid: "UE16Q1",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Isis está desenvolvendo uma DApp para gerenciamento de ativos digitais. Ela afirma que, após a implantação do contrato inteligente na rede, será possível realizar alterações no contrato sempre que necessário, pois a natureza da blockchain permite ajustes contínuos no contrato.",
        "Essa afirmação é verdadeira ou falsa?",
      ].join("<br/><br/>"),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "Após a implantação de um contrato inteligente na rede blockchain, não é possível realizar alterações no contrato devido à imutabilidade da própria estrutura da blockchain. Portanto, as alterações no contrato não são permitidas após a implantação e os desenvolvedores devem garantir que o contrato seja testado e validado adequadamente antes de implantá-lo na rede.",
      },
    },
    {
      isCorrect: true,
      label: "Falso",
      feedback: {
        subtitle:
          "Após a implantação de um contrato inteligente na rede blockchain, não é possível realizar alterações no contrato devido à imutabilidade da própria estrutura da blockchain. Portanto, as alterações no contrato não são permitidas após a implantação e os desenvolvedores devem garantir que o contrato seja testado e validado adequadamente antes de implantá-lo na rede.",
      },
    },
  ],
};

const UE16Q2 = {
  uid: "UE16Q2",
  assertive:
  [
    "Maria deseja obter um empréstimo de US$ 1.000 em criptomoedas usando a plataforma DeFi, sem recorrer a uma instituição financeira tradicional. Ela possui US$ 1.500 em Ether para fornecer como garantia e concorda em pagar uma taxa de juros de 5%.",
    "Escolha a opção CORRETA, qual das seguintes ações é a principal vantagem de Maria usar um contrato DeFi em vez de um empréstimo tradicional?",
  ].join("<br/><br/>"),
    components: [],
  alternatives: [
    {
      label:
        "Maria pode negociar diretamente com o banco e evitar intermediários.",
      feedback: {
        subtitle:
          "Maria negociará diretamente com outro usuário na plataforma DeFi, sem a necessidade de um banco como intermediário.",
      },
    },
    {
      label:
        "Maria receberá o empréstimo em moeda fiduciária em vez de criptomoedas.",
      feedback: {
        subtitle:
          "Maria receberá o empréstimo em criptomoedas, conforme o exemplo.",
      },
    },
    {
      label:
      "Maria pode obter o empréstimo sem fornecer qualquer garantia.",
      feedback: {
        subtitle:
        "Maria fornecerá US$ 1.500 em Ether como garantia, conforme mencionado no exemplo.",
      },
    },
    {
      isCorrect: true,
      label:
        "O contrato DeFi facilita as transações mais rapidamente e com menos burocracia do que em uma instituição financeira tradicional.",
      feedback: {
        subtitle:
          "Contratos DeFi são baseados em blockchain e executam transações de forma descentralizada, eliminando a necessidade de intermediários e reduzindo a burocracia.",
      },
    },
    {
      label:
        "Maria pode obter um empréstimo sem uma taxa de juros.",
      feedback: {
        subtitle:
          "Maria pagará 5% de taxa de juros. A taxa de juros pode variar entre as plataformas DeFi.",
      },
    },
  ],
};

const UE16Q3 = {
  uid: "UE16Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Um novo protocolo DeFi chamado FinChain está sendo desenvolvido para permitir empréstimos e trocas de criptomoedas de maneira descentralizada. Durante a fase de design do projeto, a equipe de desenvolvimento está focada exclusivamente na codificação dos contratos inteligentes e não se preocupa com a interface do usuário. ",
        "A afirmativa acima é verdadeira?",
      ].join("<br/><br/>"),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "A equipe de desenvolvimento deve se preocupar não apenas com a codificação dos contratos inteligentes, mas também com a arquitetura do protocolo e a interface do usuário, tornando o projeto mais completo e acessível aos usuários.",
      },
    },
    {
      isCorrect: true,
      label: "Falso",
      feedback: {
        subtitle:
          "A equipe de desenvolvimento deve se preocupar não apenas com a codificação dos contratos inteligentes, mas também com a arquitetura do protocolo e a interface do usuário, tornando o projeto mais completo e acessível aos usuários.",
      },
    },
  ],
};

const UE16Q4 = {
  uid: "UE16Q4",
  assertive: [
    "Suponha que você seja um desenvolvedor planejando lançar um novo protocolo DeFi. Ao considerar os desafios potenciais associados aos sistemas distribuídos, você pondera sobre o aspecto da escalabilidade e a latência.",
    "Qual das seguintes afirmações melhor descreve as considerações que você deve ter em mente?",
  ].join("<br/><br/>"),
  components: [],
  alternatives: [
    {
      label: "A escalabilidade não é uma preocupação em protocolos DeFi, pois a natureza descentralizada da blockchain permite o processamento ilimitado de transações.",
      feedback: {
        subtitle:
          "A natureza descentralizada da blockchain pode, na verdade, tornar a escalabilidade um desafio.",
      },
    },
    {
      label: "A latência em um protocolo DeFi não tem efeito sobre a eficiência das transações, uma vez que cada nó opera de forma autônoma.",
      feedback: {
        subtitle:
          "O tempo de atraso que ocorre quando uma mensagem é enviada de um nó para outro pode levar a tempos de espera prolongados e uma experiência de usuário subótima.",
      },
    },
    {
      label:
        "O lançamento de um protocolo DeFi é livre de desafios, graças à segurança inerente e resistência à censura oferecida pela blockchain.",
      feedback: {
        subtitle:
          "A escalabilidade e a latência são dois desafios que os desenvolvedores precisam levar em conta.",
      },
    },
    {
      isCorrect: true,
      label: " A escalabilidade e a latência são desafios significativos no protocolo DeFi, pois lidar com um grande número de transações rapidamente pode ser limitado, e o atraso no tempo de transmissão entre os nós pode afetar a eficiência das transações.",
      feedback: {
        subtitle:
          "A escalabilidade e a latência são desafios significativos quando se trata de protocolos DeFi. O grande volume de transações e a necessidade de comunicação rápida entre os nós podem tornar essas questões particularmente problemáticas.",
      },
    },
    {
      label: "Em um protocolo DeFi, uma única entidade controla todo o sistema, portanto, a escalabilidade e a latência não são preocupações.",
      feedback: {
        subtitle:
          "A natureza de um protocolo DeFi é descentralizada, o que significa que nenhuma entidade única controla todo o sistema. ",
      },
    },
  ],
};

export { UE16Q1, UE16Q2, UE16Q3, UE16Q4 };
