const UE7Q1 = {
  uid: 'UE7Q1',
  assertive: "Clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "Mesmo que alguns nós falhem, o mecanismo de <input /> garante que os nós concordem sobre o estado da rede.",
      alternatives: ['Consenso', 'Assinaturas digitais', 'Criptografia'],
      correctAnswer: ['Consenso'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'O mecanismo de consenso requer que todos os pares cheguem a um acordo em comum sobre o estado na rede.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revisite os conceitos da unidade.'
          }
        }
      }
    }
  ]
};

const UE7Q2 = {
  uid: "UE7Q2",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Os protocolos de consenso são responsáveis pelo acordo dos nós em relação ao estado de rede e, além disso, também protegem da manipulação do consenso por usuários mal intencionados.",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Existem vários tipos de protocolos que podem ser aplicados.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revise o conteúdo sobre protocolos de consenso.",
      },
    },
  ],
};

const UE7Q3 = {
  uid: 'UE7Q3',
  assertive: "Relacione cada elemento do cálculo de gás com sua descrição.",
  components: [],
  descriptions: ['Característica', 'Algoritmo de consenso'],
  classifications: {
    "Usa o conceito de mineradores que fazem hash dos dados que eles desejam adicionar, até produzir uma solução específica válida.": 'Proof of Work (Pow) ou prova de trabalho',
    "A ideia é que os líderes devem decidir e agir juntos sobre o consenso. Caso façam de modo separado, podem fracassar.": 'Byzantine Fault Tolerance (BFT) ou Tolerância à falha bizantina',
    "Os validadores apostam nos blocos que serão selecionados. Caso seu bloco seja escolhido, você receberá uma proporção da taxa de transação": 'Proof of stake ou prova de participação'
  },
  alternatives: ['Proof of Work (Pow) ou prova de trabalho', 'Proof of stake ou prova de participação', 'Byzantine Fault Tolerance (BFT) ou Tolerância à falha bizantina'],
  correctFeedback: {
    title: 'CORRETO!',
    subtitle: 'Você identificou os conceitos corretamente'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite os conceitos dos tipos de chaves e endereço.'
  },
};

const UE7Q4 = {
  uid: 'UE7Q4',
  assertive: "Clique nas palavras abaixo para escolher a resposta CORRETA para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "Hash e criptografia são mecanismos relacionados a <input /> da informação",
      alternatives: ['Segurança', 'Consenso', 'Distribuição'],
      correctAnswer: ['Segurança'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Eles estão envolvidos em alguns mecanismos relacionados com integridade e proteção da informação.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revisite os conceitos da unidade.'
          }
        }
      }
    }
  ]
};

const UE7Q5 = {
  uid: "UE7Q5",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "O número 256 do algoritmo de criptografia SHA 256 significa que são usados 256 modelos matemáticos para geração do hash",
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
          "Significa que o algoritmo gera um hash de 256 caracteres alfanuméricos.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Significa que o algoritmo gera um hash de 256 caracteres alfanuméricos.",
      },
    },
  ],
};

const UE7Q6 = {
  uid: 'UE7Q6',
  assertive: "Escolha a palavra que é a resposta CORRETA para completar as sentenças a seguir:",
  components: [],
  assessments: [
    {
      sentence: "A própria estrutura da blockchain proporciona a <input />",
      alternatives: ['Atualização', 'Exclusão', 'Imutabilidade'],
      correctAnswer: ['Exclusão'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'A cadeia de blocos associada ao hash proporciona imutabilidade ao conteúdo inserido.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revisite os conceitos da unidade.'
          }
        }
      }
    },
    {
      sentence: "(...) dos dados que já foram validados. Associada aos algoritmos de <input /> tem-se estrutura para segurança da rede.",
      alternatives: ['Criptografia', 'Escalonamento', 'Consenso'],
      correctAnswer: ['Escalonamento'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'Os algoritmos garantem que todas as regras do sistemas estejam sendo seguidas e que todas as partes concordem com o estado da rede.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revisite os conceitos da unidade.'
          }
        }
      }
    }
  ]
};

const UE7Q7 = {
  uid: "UE7Q7",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "O conjunto de mecanismo, como algoritmos de consenso, imutabilidade e criptografia em diversos contextos, garante a segurança da informação da blockchain",
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
          "A segurança na Blockchain é complexa e envolve muitos aspectos.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite o conteúdo da unidade.",
      },
    },
  ],
};

export { UE7Q1, UE7Q2, UE7Q3, UE7Q4, UE7Q5, UE7Q6, UE7Q7 };
