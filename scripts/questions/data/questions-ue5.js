const UE5Q1 = {
  uid: "UE5Q1",
  assertive: "Verdadeiro ou Falso",
  components: [{
    type: "TEXT",
    value: "Através da plataforma Ethereum é possível implementar código da rede distribuída.",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Os códigos executados na rede distribuída são os contratos inteligentes.",
      },

    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A plataforma Ethereum oferece mais do que transações com moeda digital. O código executado na rede distribuída se chama contrato inteligente.",
      },
    },
  ],
};

const UE5Q2 = {
  uid: 'UE5Q2',
  assertive: "Associe a descrição do mecanismo da plataforma Ethereum ao seu tipo",
  components: [],
  descriptions: ['Descrição', 'Mecanismo'],
  classifications: {
    "Proporciona um serviço financeiro sem a presença de uma instituição centralizadora.": "DeFI",
    "São ativos digitais que garantem origem e autenticidade a arquivos, muito usados para manutenção e transação de direitos autorais.": "NFTs",
  },
  alternatives: ['DeFI', 'NFTs'],
  correctFeedback: {
    title: 'PARABÉNS!',
    subtitle: 'Você identificou o conceito de DeFI e de NFTs.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite os conceitos da unidade.'
  },
};


const UE5Q3 = {
  uid: "UE5Q3",
  assertive: "A EVM é uma máquina virtual distribuída que proporciona a operação e implantação dos contratos inteligentes. Ela é a base da blockchain <input /> . ",
  components: [],
  alternatives: [
    {
      label: "Ethereum",
      isCorrect: true,
      feedback: {
        title: "Parabéns",
        subtitle: "A EVM significa Ethereum Virtual Machine e é utilizada na blockchain Ethereum.",
      },
    },
    {
      label: "Bitcoin",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Bitcoin não usa o conceito de EVM, revisite o conteúdo.",
      },
    },
    {
      label: "Ether",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Ether é a criptomoeda da blockchain Ethereum.",
      },
    },
  ],
};


const UE5Q4 = {
  uid: "UE5Q4",
  assertive: "Um dispositivo ou linguagem que, tendo memória e tempo suficiente, consegue resolver qualquer problema computacional é considerado Turing <input />.",
  components: [],
  alternatives: [
    {
      label: "Completo",
      isCorrect: true,
      feedback: {
        title: "Parabéns",
        subtitle:
          "Dispositivos ou linguagem Turing completos podem resolver qualquer problema que pode ser solucionado pela máquina de Turing. ",
      },

    },
    {
      label: "Incompleto",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Pense bem, só será incompleto se realizar apenas alguns tipos de cálculo.",
      },
    }
  ],
};

const UE5Q5 = {
  uid: "UE5Q5",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "O Ethereum é considerado uma blockchain Turing incompleta, pois pode realizar transações de criptomoedas e dá suporte a contratos inteligentes.",
    type: "TEXT"
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite os conceitos da unidade.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A plataforma Ethereum é considerada uma blockchain Turing Completa e é capaz de usar sua base de código para realizar praticamente qualquer tarefa, desde que tenha as instruções corretas, tempo suficiente e poder de processamento.",
      },
    },
  ],
};

const UE5Q6 = {
  uid: 'UE5Q6',
  assertive: "Associe a descrição do mecanismo da plataforma Ethereum ao seu tipo",
  components: [],
  descriptions: ['Descrição', 'Mecanismo'],
  classifications: {
    "Relacionada às transações de transferência de ativos digitais. Controlada por qualquer pessoa com as chaves privadas e não tem código relacionado a ela.": "Conta de propriedade externa",
    "É um contrato inteligente implantado na rede, controlado por código.": "Conta contrato",
  },
  alternatives: ['Conta de propriedade externa', 'Conta contrato'],
  correctFeedback: {
    title: 'PARABÉNS!',
    subtitle: 'Você identificou características de uma conta de propriedade externa e de uma conta contrato.'
  },
  incorrectFeedback: {
    title: 'OPS!',
    subtitle: 'Revisite os conceitos da unidade.'
  },
};


export { UE5Q1, UE5Q2, UE5Q3, UE5Q4, UE5Q5, UE5Q6 }