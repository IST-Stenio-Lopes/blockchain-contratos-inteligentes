const UE2Q1 = new CompleteQuestion({
  uid: 'UE2Q1',
  assertive: "Respectivamente, clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "<input /> são moedas digitais que utilizam criptografia como elemento de segurança. <input /> é uma tecnologia distribuída popularmente utilizada nas criptomoedas.",
      alternatives: ['Blockchain', 'Criptomoedas'],
      correctAnswer: ['Criptomoedas', 'Blockchain'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: "PARABÉNS!",
            subtitle: "Você identificou o conceito de criptomoedas e blockchain.",
          },
          incorrect: {
            title: "OPS!",
            subtitle: "Revise o conceito de blockchain e criptomoedas."
          },
        }
      })
    },
  ],
});


const UE2Q2 = new RadioQuestion({
  uid: "UE2Q2",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "João foi impedido de utilizar uma criptomoeda que usa uma blockchain pública",
    type: 'TEXT',
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Uma das características das blockchain públicas é que ninguém pode impedir a participação.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Uma das características das blockchain públicas é que ninguém pode impedir a participação.",
      },
    },
  ],
});

const UE2Q3 = new RadioQuestion({
  uid: "UE2Q3",
  assertive: "As blockchains <input /> são indicadas para empresas que querem usufruir da tecnologia blockchain, mas ainda preservar a publicidade de seus dados.",
  components: [],
  alternatives: [
    {
      label: "Privadas",
      isCorrect: true,
      feedback: {
        title: "PARABÉNS!",
        subtitle: "Você acertou a aplicação das blockchain privadas.",
      },
    },
    {
      label: "Públicas",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revise os conceitos de blockchain públicas e privadas.",
      },
    },
  ],
});

const UE2Q4 = new RadioQuestion({
  uid: "UE2Q4",
  assertive: "Joana comprou um apartamento diretamente à Paula. Toda parte financeira e de documentação foi feita entre as duas, sem necessidade de intervenção de terceiros. Joana e Paula podem ter utilizado:",
  components: [],
  alternatives: [
    {

      label: "Contrato em cartório",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O cartório é um intermediário relacionado a parte documental",
      },
    },
    {
      label: "Contrato inteligente",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Os contratos inteligentes são capazes de realizar a transação financeira e de documentação sem intermediários.",
      },
    },
    {
      label: "Criptomoedas",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "As criptomoedas solucionam a parte financeira, mas não de documentação.",
      },
    },
    {
      label: "Blockchain",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Blockchain é a base para aplicações capazes de solucionar o problema.",
      },
    },
  ],
});

const UE2Q5 = new RadioQuestion({
  uid: "UE2Q5",
  assertive: "Verdadeiro ou Falso",
  components: [{
    type: 'TEXT',
    value: "A blockchain pode ser usada para armazenar registros documentais de diversos tipos de pessoas físicas de forma eficiente e segura.",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Existem inúmeras vantagens de usar a blockchain para armazenamento de registros.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Uma aplicação interessante da blockchain é o registro de documentos de pessoas físicas. Revise o exemplo.",
      },
    },
  ],
});

const UE2Q6 = new RadioQuestion({
  uid: "UE2Q6",
  assertive: "Verdadeiro ou Falso",
  components: [{
    type: 'TEXT',
    value: "As características da Blockchain não oferecem diversas vantagens para a indústria. Sendo assim, não há possibilidade de usar a Blockchain como uma opção ao ciclo industrial tradicional.",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "A Blockchain já é uma realidade no ciclo industrial de várias indústrias. Revise o conteúdo",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A Blockchain já é uma realidade no ciclo industrial de várias indústrias.",
      },

    },
  ],
});

export { UE2Q1, UE2Q2, UE2Q3, UE2Q4, UE2Q5, UE2Q6 };
