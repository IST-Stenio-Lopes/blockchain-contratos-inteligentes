const UE11Q1 = {
  uid: "UE11Q1",
  assertive: "Assinale a alternativa FALSA sobre herança em Solidity.",
  components: [
  ],
  alternatives: [
    {
      label: "A palavra reservada utilizada para estabelecer a herança é is.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está verdadeira.",
      },
    },
    {
      label: "Utilizando herança, contratos inteligentes podem 'herdar' características de outros contratos.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está verdadeira.",
      },
    },
    {
      label: "Pode-se chamar os contratos que têm suas características herdadas de contrato base ou pai e os contratos que herdam os elementos de contrato derivado ou filho.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está verdadeira.",
      },
    },
    {
      label: "Herança é um mecanismo utilizado para transferir todos os Ether de um contrato para outro após sua finalização",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "A alternativa é falsa, pois a herança das linguagens orientadas a objetos (caso do Solidity) está relacionada a características e comportamentos, não a valores financeiros.",
      },
    },
  ],
};

const UE11Q2 = {
  uid: "UE11Q2",
  assertive: "Considerando o exemplo anterior. Se o contrato Teste teve a seguinte modificação de implementação:",
  components: [
    {
      type: "IMAGE",
      value: "images/ue/UE 11/Imagem - Q. 2.png",
    },
    {
      type: "TEXT",
      value: "Qual é a saída esperada?",
    },
  ],
  alternatives: [
    {
      label: "“0”: “uint256:40”",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
    {
      label: "“0”: “uint256:0”",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Ao executar a função dobrarValor(0), a variável dobro receberá o valor 0. Logo após, a variável é retornada pela função consultar( ).",
      },
    },
    {
      label: "“0”: “uint256:2”",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
    {
      label: "O contrato apresenta um erro de compilação.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
  ],
};

const UE11Q3 = {
  uid: "UE11Q3",
  assertive: "Considerando o exemplo anterior. Se o contrato Teste teve a seguinte modificação de implementação:",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 11/Imagem - Q. 3.png",
    },
    {
      type: "TEXT",
      value: "Qual é a nova saída esperada?",
    },
  ],
  alternatives: [
    {
      label: "“0”: “string: Heranca de contratos no SENAI”",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "“Heranca de contratos” será o novo valor da variável títuloA.",
      },
    },
    {
      label: "“0”: “string: Heranca em Solidity Heranca de contratos no SENAI”",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
    {
      label: "“0”: “string: Heranca de contratos Heranca em Solidity no SENAI”",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
    {
      label: "O contrato apresenta um erro de compilação.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A alternativa está errada. Revise o exemplo.",
      },
    },
  ],
};

const UE11Q4 = {
  uid: 'UE11Q4',
  assertive: "Respectivamente, clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "O marcador <input /> é utilizado no contrato base indicando que a função pode ser sobrescrita. O marcador <input /> é usado no contrato derivado e indica que a função foi sobrescrita.",
      alternatives: ['override', 'virtual'],
      correctAnswer: ['virtual', 'override'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Você identificou o marcador correto.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo.'
          }
        }
      }
    }
  ]
};


const UE11Q5 = {
  uid: "UE11Q5",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: "O log é uma estrutura de dados especial da Blockchain que armazena os dados emitidos pelos eventos dos contratos.",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Os logs estão associados ao endereço do contrato e permanecerão lá enquanto um bloco estiver acessível.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revise os conceitos de log e eventos.",
      },
    },
  ],
};

const UE11Q6 = {
  uid: 'UE11Q6',
  assertive: "Respectivamente, clique nas palavras abaixo para escolher a resposta correta para os espaços em branco e completar a sentença a seguir:",
  components: [],
  assessments: [
    {
      sentence: "Erros de sintaxe são considerados erros de <input /> . Já os erros de <input /> acontecem durante a execução do contrato, podendo gerar falhas para os usuários.",
      alternatives: ['compilação', 'execução'],
      correctAnswer: ['compilação', 'execução'],
      evaluation: {
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Você identificou o tipo correto de erro.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo.'
          }
        }
      }
    }
  ]
};

export {
  UE11Q1,
  UE11Q2,
  UE11Q3,
  UE11Q4,
  UE11Q5,
  UE11Q6,
}