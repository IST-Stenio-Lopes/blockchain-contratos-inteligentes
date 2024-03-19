const UE1Q1 = {
  uid: "UE1Q1",
  assertive:
    "Escolha a opção CORRETA para a sentença a seguir: João transferiu <input /> para Pedro de forma digital e sem intermédio de uma instituição financeira.",
  components: [],
  alternatives: [
    {
      label: "Criptomoedas",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Criptomoedas são moedas digitais descentralizadas que não necessitam de uma instituição financeira como intermediária",
      },
    },
    {
      label: "Real",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O real é a moeda brasileira e necessita de uma instituição financeira como intermediária.",
      },
    },
    {
      label: "Dólar",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O dólar é a moeda americana e necessita de uma instituição financeira como intermediária.",
      },
    },
  ],
};

const UE1Q2 = {
  uid: "UE1Q2",
  assertive:
    "As redes <input /> armazenam e controlam informações em um ponto central são chamadas de?",
  components: [],
  alternatives: [
    {
      label: "Centralizadas",
      isCorrect: true,
      feedback: {
        title: "PARABÉNS!",
        subtitle: "Você acertou o conceito de redes centralizadas.",
      },
    },
    {
      label: "Descentralizadas",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite o conceito de redes centralizadas.",
      },
    },
  ],
};

const UE1Q3 = {
  uid: "UE1Q3",
  assertive:
    "Considere as duas situações abaixo <br/><br/> Situação A: Camila transferiu uma quantia diretamente para Carlos de forma bastante segura sem necessidade de intermediários.<br/><br/> Situação B: Camila transferiu uma quantia para Carlos utilizando como intermediário uma instituição financeira. <br/><br/> Qual o tipo de rede usada em cada situação?",
  components: [],
  descriptions: ["Situação", "Tipo de rede"],
  classifications: {
    "Situação A": "Distribuída",
    "Situação B": "Centralizada",
  },
  alternatives: ["Distribuída", "Centralizada"],
  correctFeedback: {
    title: "PARABÉNS!",
    subtitle:
      "Você identificou o conceito de redes de distribuídas e centralizadas.",
  },
  incorrectFeedback: {
    title: "OPS!",
    subtitle: "Revisite o conceito de redes distribuídas e centralizadas",
  },
};

const UE1Q4 = {
  uid: "UE1Q4",
  assertive:
    "Respectivamente, clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence:
        "A blockchain é uma rede <input /> que compartilha entre os nós o ledger ou livro razão, no qual são registradas as <input />",
      alternatives: [
        "Centralizada",
        "Descentralizada",
        "Transações",
        "Criptomoedas",
      ],
      correctAnswer: ["Descentralizada", "Transações"],
      evaluation: {
        feedback: {
          correct: {
            title: "PARABÉNS!",
            subtitle:
              "Você acertou o tipo de rede na Blockchain e o que é registrado no livro razão.",
          },
          incorrect: {
            title: "OPS!",
            subtitle:
              "Revisite o conceito de Blockchain, e como as criptomoedas são manipuladas...",
          },
        },
      },
    },
  ],
};

const UE1Q5 = {
  uid: "UE1Q5",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value:
        "Na blockchain, os blocos possuem informações ou transações e são conectados em cadeia.",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Você acertou a estrutura básica da Blockchain",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O nome da Blockchain mostra sua estrutura. Em inglês, block significa bloco e chain significa cadeia. Ou seja, cadeia de blocos.",
      },
    },
  ],
};

const UE1Q6 = {
  uid: "UE1Q6",
  assertive:
    "Clique no espaço em branco para selecionar a opção CORRETA para a sentença a seguir:",
  components: [
    {
      type: "TEXT",
      value:
        "Júlia solicitou a inserção de um contrato de locação na blockchain. Complete as lacunas abaixo com o fluxo da informação da transação.",
    },
  ],
  assessments: [
    {
      sentence:
        "1. O bloco com a informação será transmitida na rede <input />",
      alternatives: ["Centralizadas", "Distribuída"],
      correctAnswer: ["Distribuída"],
    },
    {
      sentence: "2. O bloco será validado e verificado pelos <input />",
      alternatives: ["Cartório", "Mineradores"],
      correctAnswer: ["Mineradores"],
    },
    {
      sentence:
        "3. O bloco será inserido na blockchain e a operação será concluída",
      alternatives: [],
      correctAnswer: [],
    },
  ],
  evaluation: {
    feedback: {
      correct: {
        title: "CORRETO",
        subtitle:
          "Você acertou o tipo de rede da blockchain e os agentes que realizam a validação e verificação na Blockchain.",
      },
      incorrect: {
        title: "OPS!",
        subtitle:
          "As transações passam pelo consenso dos nós antes de serem adicionadas à Blockchain.",
      },
    },
  },
};

const UE1Q7 = {
  uid: "UE1Q7",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Felipe realizou uma transação e, imediatamente, foi adicionada à Blockchain sem passar por nenhum tipo de validação.",
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
          "As transações passam pelo consenso dos nós antes de serem adicionadas à Blockchain.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "As transações passam pelo consenso dos nós antes de serem adicionadas à Blockchain.",
      },
    },
  ],
};

export { UE1Q1, UE1Q2, UE1Q3, UE1Q4, UE1Q5, UE1Q6, UE1Q7 };
