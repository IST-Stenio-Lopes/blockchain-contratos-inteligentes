const UE3Q1 = {
  uid: "UE3Q1",
  assertive: "Escolha a palavra que é a resposta correta para completar as sentenças a seguir:",
  components: [],
  assessments: [
    {
      sentence: "1. O banco de dados da Blockchain é constituído por <input /> que, juntos, formam uma cadeia.",
      alternatives: ['Blocos', 'Tabelas'],
      correctAnswer: ['Blocos'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'Na blockchain, o banco de dados é constituído por blocos que possuem informações ou transações.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo sobre a estrutura da rede Blockchain'
          },
        }
      }
    },
    {
      sentence: "2. Os blocos possuem <input /> que funcionam com links com os blocos anteriores até o bloco inicial.",
      alternatives: ['Relações', 'Hashes'],
      correctAnswer: ['Hashes'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'A hash funciona como links e é formada como uma chave criptografada, o que confere ao sistema segurança quanto à informação registrada.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo sobre a estrutura da rede Blockchain'
          },
        }
      }
    },
  ]
};

const UE3Q2 = {
  uid: "UE3Q2",
  assertive: "Analise a imagem abaixo e, respectivamente, clique na palavra que corresponde aos espaços vazios na estrutura do bloco da blockchain:",
  components: [],
  alternatives: ['Assinatura', 'Hash', 'Transação'],
  correctAnswer: ['Hash', 'Transação', 'Assinatura'],
  evaluation: { //EvaluationByAssessment
    feedback: {
      correct: {
        title: 'CORRETO',
        subtitle: 'Você acertou a posição dos blocos.'
      },
      incorrect: {
        title: 'OPS!',
        subtitle: 'Revise o conteúdo sobre a estrutura de bloco.'
      },
    }
  }
};


const UE3Q3 = {
  uid: "UE3Q3",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "As alterações de informação de um bloco da rede são isoladas, não existe impacto nos outros blocos.",
    type: 'TEXT'
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Revise o conteúdo sobre a estrutura da rede Blockchain. A alteração de um bloco resulta na alteração de vários blocos. Para alterar uma informação no Bloco 1, teríamos que alterar o Bloco 2, que teria sua Hash alterada e impactaria o Bloco 3, e assim por diante.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A alteração de um bloco resulta na alteração de vários blocos. Para alterar uma informação no Bloco 1, teríamos que alterar o Bloco 2, que teria sua Hash alterada e impactaria o Bloco 3, e assim por diante.",
      },
    },
  ],
};

const UE3Q4 = {
  uid: "UE3Q4",
  assertive: [
    "Para preencher o espaço em branco, selecione a função que tem as características abaixo: <br /><br />",
    "1. Seu objetivo é compilar dados de qualquer tamanho para um tamanho fixo. <br />",
    "2. Na tecnologia da Blockchain, os dados de um bloco são vinculados ao valor gerado pela função, que será utilizada pelo bloco seguinte, formando o encadeamento dos blocos. <br />"
  ].join(""),
  components: [],
  alternatives: ['Hash', 'Modular', 'Injetora'],
  correctAnswer: ['Hash'],
  evaluation: {
    feedback: {
      correct: {
        title: 'CORRETO',
        subtitle: 'A função hash tem papel muito importante na rede blockchain.'
      },
      incorrect: {
        title: 'OPS!',
        subtitle: 'Revise o conteúdo sobre a função hash.'
      },
    }
  }
};

const UE3Q5 = {
  uid: "UE3Q5",
  assertive: "Uma das formas de minerar dados na blockchain é achar o número <input /> para criação do hash.",
  components: [],
  alternatives: [
    {
      label: "Nonce",
      isCorrect: true,
      feedback: {
        title: "PARABÉNS!",
        subtitle:
          "No Proof of Work (PoW) os mineradores trabalham para achar o número aleatório nonce para criação da hash",
      },
    },
    {
      label: "De bloco",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Assista ao vídeo novamente.",
      },
    },
    {
      label: "De transações",
      isCorrect: false,
      feedback: {
        title: "INCORRETO",
        subtitle: "Assista ao vídeo novamente.",
      },
    },
  ],
};

const UE3Q6 = {
  uid: "UE3Q6",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "As transações definem uma quantidade de criptomoedas que serão transferidas de um endereço de origem para um endereço destino em um determinado tempo (data e hora). Associada a cada transação existe um id.",
    type: 'TEXT'
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "As transações são registros digitais e os dados listados são utilizados para transferência das criptomoedas",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revise o conteúdo de transações.",
      },
    },
  ],
};

const UE3Q7 = {
  uid: "UE3Q7",
  assertive: "As transações estão relacionadas a uma <input /> garantindo segurança e o anonimato",
  components: [],
  alternatives: [
    {
      label: "Assinatura física",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O processo de transações é totalmente digital. Revisite o conteúdo.",
      },
    },
    {
      label: "Digital eletrônica",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O processo de transação garante o anonimato. Com o uso da digital, haveria um vínculo com a pessoa física. Reviste o conteúdo",
      },
    },
    {
      label: "Assinatura digital",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "São vinculadas às transações e garantem segurança e anonimato.",
      },
    },
  ],
};

const UE3Q8 = {
  uid: 'UE3Q8',
  assertive: "Clique nos campos vazios e escolha a opção correspondente a sua característica:",
  components: [],
  descriptions: ['Característica', 'Tipo de chave'],
  classifications: {
    "Com ela é possível realizar transações de criptomoedas. Deve ser de conhecimento apenas do proprietário e guardada em local seguro.": "Chave privada",
    "Gerada a partir da chave privada e pode ser conhecida por toda a rede.": "Chave pública",
    "Derivado da chave pública, deve ser informado em transferências de criptomoedas e é um identificador da conta para transações.": "Endereço"
  },
  alternatives: ['Chave pública', 'Endereço', 'Chave privada'],
  correctFeedback: {
    title: 'CORRETO!',
    subtitle: 'Parabéns! Você identificou características das chaves privadas, públicas e dos endereços.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite os conceitos dos tipos de chaves e endereço.'
  },
};

const UE3Q9 = {
  uid: 'UE3Q9',
  assertive: "Clique nos campos vazios e escolha o tipo de carteira que corresponde a sua característica:",
  components: [],
  descriptions: ['Característica', 'Tipo de chave'],
  classifications: {
    "São conectadas à Internet e mais vulneráveis.": "Hot Wallet",
    "São as mais seguras e não possuem conexão com a internet.": "Cold Wallet",
  },
  alternatives: ["Cold Wallet", "Hot Wallet"],
  correctFeedback: {
    title: 'CORRETO!',
    subtitle: 'Parabéns! Você identificou características das hot e cold wallets.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite o conteúdo de tipos de carteira.'
  },
};


export { UE3Q1, UE3Q2, UE3Q3, UE3Q4, UE3Q5, UE3Q6, UE3Q7, UE3Q8, UE3Q9 };
