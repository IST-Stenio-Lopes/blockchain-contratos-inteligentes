const UE6Q1 = {
  uid: "UE6Q1",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Uma das vantagens da rede Ethereum é a ausência de pagamento de taxas para a realização das transações.",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Existem recursos relacionados ao funcionamento da rede que são pagos através da taxa chamada de gás.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A taxa paga aos recursos relacionados ao funcionamento da rede é chamada de gás.",
      },
    },
  ],
};

const UE6Q2 = {
  uid: 'UE6Q2',
  assertive: "Relacione cada elemento do cálculo de gás com sua descrição.",
  components: [],
  descriptions: ['Descrição', 'Elementos do cálculo de gás'],
  classifications: {
    "O limite máximo que você está disposto gastar com uma operação.": 'Limite de gás',
    "Quantidade mínima de gás que a blockchain Ethereum precisa para processar a transação naquele instante": 'Taxa base',
    "Taxa adicional feita para que sua operação seja concluída rapidamente.": 'Gorjeta'
  },
  alternatives: ['Taxa base', 'Limite de gás', 'Gorjeta'],
  correctFeedback: {
    title: 'PARABÉNS!',
    subtitle: 'Você identificou o conceito de redes de distribuídas e centralizadas.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite o conceito de redes distribuídas e centralizadas'
  },
};

const UE6Q3 = {
  uid: "UE6Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "A emissão de diploma digital pode ser implementada através de um contrato inteligente, ou seja, um programa no ecossistema Ethereum.",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "O contrato digital definirá as regras de emissão do diploma por meio de código",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite os conceitos da unidade.",
      },
    },
  ],
};

const UE6Q4 = {
  uid: 'UE6Q4',
  assertive: "Clique nas palavras abaixo para escolher a resposta CORRETA para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "Os contratos inteligentes utilizam <input /> como plataforma para seu funcionamento?",
      alternatives: ['Blockchain', 'EVM', 'Proof of Stake'],
      correctAnswer: ['EVM'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Os desenvolvedores desenvolvem e carregam programas para serem armazenados e compilados na EVM.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise os conceitos da unidade.'
          }
        }
      }
    }
  ]
};

const UE6Q5 = {
  uid: 'UE6Q5',
  assertive: "Relacione corretamente as características de cada algoritmo de validação abaixo:",
  components: [],
  allowMultipleSelect: true,
  descriptions: ['Características', 'Algoritmo de validação'],
  classifications: {
    "O poder computacional é utilizado resolvendo um problema matemático para minerar um bloco.": 'Proof of work ou prova de trabalho',
    "Alto custo relacionado a energia elétrica e hardware especializado.": 'Proof of work ou prova de trabalho',
    "A chance de cada validador construir o bloco é proporcional à quantidade de criptomoedas na aposta.": 'Proof of stake ou prova de participação',
    "Solução mais ecológica e rápida, pois não envolve uso de hardware especializado e algot consumo de energia elétrica": 'Proof of stake ou prova de participação'
  },
  alternatives: ['Proof of work ou prova de trabalho', 'Proof of stake ou prova de participação'],
  correctFeedback: {
    title: 'PARABÉNS!',
    subtitle: 'Você identificou as características da prova de trabalho e a descrição de gorjeta.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite os conceitos da unidade.'
  },
};


const UE6Q6 = {
  uid: 'UE6Q6',
  assertive: "Clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "Parte do funcionamento Proof of Stake ou prova de participação consiste que o participante tenha uma quantidade de criptomoedas bloqueadas na “apostadas” em um bloco. <input />",
      alternatives: ['Blockchain', 'EVM', 'Proof of Stake'],
      correctAnswer: ['EVM'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Os desenvolvedores desenvolvem e carregam programas para serem armazenados e compilados na EVM.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise os conceitos da unidade.'
          }
        }
      }
    }
  ]
};

export { UE6Q1, UE6Q2, UE6Q3, UE6Q4, UE6Q5, UE6Q6 };
