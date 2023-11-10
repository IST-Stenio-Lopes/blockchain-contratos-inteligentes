const UE8Q1 = {
  uid: "UE8Q1",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "Para testar contratos inteligentes é necessário uma quantidade de Ether para pagamento do Gás.",
    type: "TEXT",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revise o conteúdo da unidade. É possível criar um ambiente simulado e utilizar uma moeda sem valor real.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "É possível criar um ambiente simulado e utilizar uma moeda sem valor real.",
      },
    },
  ],
};

const UE8Q2 = {
  uid: 'UE8Q2',
  assertive: "Respectivamente, clique nas palavras abaixo para escolher a resposta CORRETA para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "A blockchain é uma rede <input /> que compartilha entre os nós o ledger ou livro razão, no qual são registradas as <input />",
      alternatives: ['Remix', 'Node.js', 'JavaScript', 'Solidity'],
      correctAnswer: ['Remix', 'Solidity'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: [
              'Remix é uma plataforma madura e amplamente utilizada, principalmente para fins didáticos.',
              'Solidity é uma das linguagens de programação utilizadas para desenvolvimento de contratos inteligentes no Ethereum'
            ].join('<br/><br/>')
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

const UE8Q3 = {
  uid: "UE8Q3",
  assertive: "Múltipla escolha. Você pode selecionar mais de uma opção",
  components: [
    {
      value: "O Solidity é uma linguagem de programação utilizada para programação de contratos inteligentes. Assinale abaixo as características da linguagem.",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Linguagem de baixo nível",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Solidity é uma linguagem de alto nível.",
      },
    },
    {
      label: "Linguagem orientada a objetos",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Solidity é uma linguagem orientada a objetos.",
      },
    },
    {
      label: "Linguagem estaticamente tipada",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Solidity é uma linguagem que há necessidade de definir os tipos de dados.",
      },
    },
  ],
};

const UE8Q4 = {
  uid: "UE8Q4",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "É possível que a compilação de um contrato inteligente aconteça corretamente com uma versão do compilador e, com outra versão, não seja possível ser concluída por apresentar erros.",
    type: "TEXT",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Solidity é uma linguagem que está em constante desenvolvimento e mudanças podem invalidar uma versão do compilador.",
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

const UE8Q5 = {
  uid: 'UE8Q5',
  assertive: "Clique no espaço em branco para selecionar a opção CORRETA para a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: [
        "Os contratos inteligentes codificados em Solidity possuem algumas estruturas. Identifique as duas descritas abaixo.",
        "1. Um elemento capaz de reter e representar um valor ou expressão de um tipo pré determinado, no exemplo chamado de mensagem é uma <select />"
      ].join('<br/><br/>'),
      alternatives: ['Construtor', 'Variável', 'Compilador'],
      correctAnswer: ['Variável'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'As variáveis tem tipo pré determinado pois são estaticamente tipadas.'
          },
          incorrect: {
            title: 'OPS',
            subtitle: 'Revise o conteúdo da unidade'
          }
        }
      }
    },
    {
      sentence: "2. Um trecho de código que realiza alguma tarefa específica e pode ser chamado por outras parte do programa, no exemplo chamado de olaMundo() é uma <select />",
      alternatives: ['Função', 'Return', 'Licença'],
      correctAnswer: ['Função'],
      evaluation: {
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'As funções podem receber parâmetros de entrada e também retornar valores.'
          },
          incorrect: {
            title: 'OPS',
            subtitle: 'Revise o conteúdo da unidade'
          }
        }
      }
    }
  ]
}

const UE8Q6 = {
  uid: "UE8Q6",
  assertive: "Marque a alternativa que apresenta a ordem correta das atividades para produção e uso de contratos in",
  components: [],
  alternatives: [
    {
      label: `
        1. Implementação <br/>
        2. Compilação <br/>
        3. Implantação <br/>
        4. Uso do contrato <br/>
      `,

      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Você acertou a ordem das atividades!",
      },
    },
    {
      label: `
        1. Implementação <br/>
        2. Implantação <br/>
        3. Compilação <br/>
        4. Uso do contrato <br/>
      `,
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite os conceitos da unidade.",
      },
    },
    {
      label: `
        1. Implementação <br/>
        2. Uso do contrato <br/>
        3. Compilação <br/>
        4. Implantação <br/>
      `,
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite os conceitos da unidade.",
      },
    },
  ],
};



export {
  UE8Q1,
  UE8Q2,
  UE8Q3,
  UE8Q4,
  UE8Q5,
  UE8Q6,
}