
const UE9Q1 = new RadioQuestion({
  uid: "UE9Q1",
  assertive:
    "Maria quer fazer uma função para realizar uma operação entre dois números e escreveu o seguinte código:",
  components: [
    {
      type: "IMAGE",
      value: ImageQ1,
    },
    {
      type: "TEXT",
      value: "O nome da função escolhido por Maria foi:",
    },
  ],
  alternatives: [
    {
      label: "num1, num2",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `num1 e num2 são os nomes escolhidos para os parâmetros.`,
      },
    },
    {
      label: "soma",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `O nome escolhido por Maria é soma, definido logo após a palavra reservada function.`,
      },
    },
    {
      label: "external",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `external define a visibilidade da função.`,
      },
    },
    {
      label: "pure",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `pure é a definição da mutabilidade de estado possível para a função.`,
      },
    },
  ],
});

const UE9Q2 = new RadioQuestion({
  uid: "UE9Q2",
  assertive: "A imagem mostra o código da função soma feita por Maria",
  components: [
    {
      type: "IMAGE",
      value: ImageQ1,
    },
    {
      type: "TEXT",
      value: "Quais os nomes escolhidos para os parâmetros?",
    },
  ],
  alternatives: [
    {
      label: "num1, num2",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `num1 e num2 são os nomes escolhidos para os parâmetros.`,
      },
    },
    {
      label: "soma",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `soma é o nome escolhido por Maria para a função.`,
      },
    },
    {
      label: "external",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `external define a visibilidade da função.`,
      },
    },
    {
      label: "pure",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `pure é a definição da mutabilidade de estado possível para a função.`,
      },
    },
  ],
});

const UE9Q3 = new RadioQuestion({
  uid: "UE9Q3",
  assertive: "A imagem mostra o código da função soma feita por Maria",
  components: [
    {
      type: "IMAGE",
      value: ImageQ1,
    },
    {
      type: "TEXT",
      value: "Qual o tipo do dado retornado?",
    },
  ],
  alternatives: [
    {
      label: "string",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Revise o conteúdo da unidade.`,
      },
    },
    {
      label: "ufixed",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Revise o conteúdo da unidade.`,
      },
    },
    {
      label: "adress",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Revise o conteúdo da unidade.`,
      },
    },
    {
      label: "uint",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `O tipo de retorno é definido nos parênteses após o returns`,
      },
    },
  ],
});

const UE9Q4 = new RadioQuestion({
  uid: "UE9Q4",
  assertive: "A imagem mostra o código da função soma feita por Maria",
  components: [
    {
      type: "IMAGE",
      value: ImageQ1,
    },
    {
      type: "TEXT",
      value:
        "Inicialmente, Maria escolheu a visibilidade external para a função. Porém, ela deseja que a função seja chamada unicamente pelo contrato no qual foi implementada. Qual visibilidade deve ser escolhida?",
    },
  ],
  alternatives: [
    {
      label: "public",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `As funções public podem ser chamadas por qualquer contrato (próprio, derivado e os demais).`,
      },
    },
    {
      label: "internal",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `As funções internal podem ser chamadas pelo próprio contrato, mas também por contratos derivados.`,
      },
    },
    {
      label: "private",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `As funções private só podem ser chamadas pelo próprio contrato no qual foram implementadas.`,
      },
    },
    {
      label: "não deve definir visibilidade",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Quando não definimos a visibilidade da função, por padrão, ela é public, ou seja, qualquer contrato pode chamar a função.`,
      },
    },
  ],
});

const UE9Q5 = new RadioQuestion({
  uid: "UE9Q5",
  assertive: "A imagem mostra o código da função soma feita por Maria",
  components: [
    {
      type: "IMAGE",
      value: ImageQ1,
    },
    {
      type: "TEXT",
      value:
        "Ela escolheu pure para sua função soma, o que faz com que ela tenha algumas características comportamentais. Marque a alternativa que melhor representa as propriedades dessa função.",
    },
  ],
  alternatives: [
    {
      label: "A função não tem permissão para ler ou alterar dados de estado.",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Além disso, sua execução não envolve custo de gás.`,
      },
    },
    {
      label:
        "A função tem permissão de acessar, mas não é possível modificar o estado do elemento a que se referem.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `As funções pure não tem permissão para acessar os dados de estado.`,
      },
    },
    {
      label: "A função pode acessar e modificar os dados do estado.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `As funções pure não tem permissão para acessar os dados de estado.`,
      },
    },
  ],
});

const UE9Q6 = new ClassificationQuestion({
  uid: "UE9Q6",
  assertive:
    "Clique no espaço vazio e escolha a letra correspondente a função/variáveis intrínsecas (build-in) com sua funcionalidade.",
  components: [
    {
      type: "TEXT",
      value: [
        "<span class='font-normal text-xl'>",
        "<strong>a.</strong>",
        "<code class='text-blue-990 font-normal'> block.chainid (uint) </code>",
        "</span>",
      ].join(""),
    },
    {
      type: "TEXT",
      value: [
        "<span class='font-normal text-xl'>",
        "<strong>b.</strong>",
        "<code class='text-blue-990 font-normal'> block.chainid (uint) </code>",
        "</span>",
      ].join(""),
    },
    {
      type: "TEXT",
      value: [
        "<span class='font-normal text-xl'>",
        "<strong>b.</strong>",
        "<code class='text-blue-990 font-normal'> block.chainid (uint) </code>",
        "</span>",
      ].join(""),
    },
    {
      type: "TEXT",
      value: [
        "<span class='font-normal text-xl'>",
        "<strong>d.</strong>",
        "<code class='text-blue-990 font-normal'> block.chainid (uint) </code>",
        "</span>",
      ].join(""),
    },
  ],
  descriptions: ["Funcionalidade", "Funções/variáveis build in"],
  classifications: {
    "Retorna o número do bloco atual.": "c",
    "Retorna o saldo do contrato corrente.": "d",
    "Retorna um 'id' (identificador) da Blockchain atual.": "a",
    "Retorna o grau de dificuldade do bloco.": "b",
  },
  alternatives: ["a", "b", "c", "d"],
  correctFeedback: {
    title: "CORRETO!",
    subtitle:
      "Parabéns! Você identificou a funcionalidade da função intrínseca.",
  },
  incorrectFeedback: {
    title: "OPS!",
    subtitle: "Revisite as funcionalidades das funções intrínsecas.",
  },
});

const UE9Q7 = new RadioQuestion({
  uid: "UE9Q7",
  assertive:
    "Considerando o exemplo anterior, se a função guardar(5724) for executada, qual será o valor retornado na saída de consultar( )?",
  components: [],
  alternatives: [
    {
      label: "234",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Revisite o exemplo.`,
      },
    },
    {
      label: "5724",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Guardar(5724) modificará a variável numero que será retornada pela função consultar().`,
      },
    },
    {
      label: "0",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Revisite o exemplo.`,
      },
    },
  ],
});

const UE9Q8 = new RadioQuestion({
  uid: "UE9Q8",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Pode-se definir um ou mais construtores para inicialização das variáveis de estado.",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Cada contrato possui um único construtor.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Cada contrato possui um único construtor.",
      },
    },
  ],
});

const UE9Q9 = new CompleteQuestion({
  uid: "UE9Q9",
  assertive:
    "Clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence:
        "<input /> são códigos chamados antes e/ou depois da execução de uma função, garantindo cumprimento de critérios importantes. A palavra reservada utilizada para sua definição, em Solidity, é <input />.",
      alternatives: [
        "Modificadores",
        "Visibilidade",
        "Construtores",
        "visibility",
        "modifier",
        "constructor",
      ],
      correctAnswer: ["Modificadores", "modifier"],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: "PARABÉNS!",
            subtitle: "Você identificou o conceito dos modificadores e a palavra reservada em Solidity.",
          },
          incorrect: {
            title: "OPS!",
            subtitle: "Revisite o conteúdo sobre modificadores.",
          },
        }
      })
    },
  ],
});

export {
  UE9Q1,
  UE9Q2,
  UE9Q3,
  UE9Q4,
  UE9Q5,
  UE9Q6,
  UE9Q7,
  UE9Q8,
  UE9Q9
};
