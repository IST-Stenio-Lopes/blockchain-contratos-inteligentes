import ImageQ3 from '@/../public/images/UE 10/Imagem - Q. 3.png'
import ImageQ4 from '@/../public/images/UE 10/Imagem - Q. 4.png'
import ImageQ5 from '@/../public/images/UE 10/Imagem - Q. 5.png'

import { RadioQuestion } from "@/components/Questions/RadioQuestion/domain";
import { CompleteWithSelectQuestion } from '../CompleteWithSelectQuestion/domain';
import { CompleteQuestion, EvaluationByAssessment } from "@/components/Questions/CompleteQuestion/domain";
import { EvaluationBySingleResponse } from '../CompleteQuestion/domain/entities/EvaluationBySingleResponse';

const UE10Q1 = new RadioQuestion({
  uid: "UE10Q1",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: "Solidity é uma linguagem estaticamente tipada, ou seja, o compilador não é capaz de identificar o tipo dos dados de forma dinâmica. O tipo deve ser especificado pelo programador sempre que for declarado.",
    type: "TEXT",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Uma das características de Solidity é ser estaticamente tipada e a afirmativa acima está correta.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A afirmativa está correta. Revise o conteúdo sobre protocolos de consenso.",
      },
    },
  ],
});

const UE10Q2 = new CompleteQuestion({
  uid: 'UE10Q2',
  assertive: "Respectivamente, clique nas palavras abaixo para escolher a ordem CORRETA das palavras e preencher a sentença a seguir:",
  components: [
    {
      type: 'TEXT',
      value: "Considere o contexto que você deseja declarar uma variável para guardar o valor do ano atual. Escolha as opções para fazer uma declaração válida",
    }
  ],
  highlight: true,
  assessments: [
    {
      sentence: "<input /> <input /> = <input />",
      alternatives: ['ano', 'uint', '2022'],
      correctAnswer: ['uint', 'ano', '2022'],
      evaluation: new EvaluationBySingleResponse({
        feedbacks: [
          {
            correct: {
              title: 'CORRETO',
              subtitle: 'Inicialmente, é necessário definir o tipo de variável.',
            }, 
            incorrect: {
              title: 'OPS!', 
              subtitle: 'O tipo é o primeiro elemento declarado em uma variável.'
            }
          }, 
          {
            correct: {
              title: 'CORRETO',
              subtitle: 'Após a declaração do tipo, o identificador da variável deve ser declarado.',
            }, 
            incorrect: {
              title: 'OPS!', 
              subtitle: 'O identificador deve ser declarado após a especificação do tipo.'
            }
          }, 
          {
            correct: {
              title: 'CORRETO',
              subtitle: 'A atribuição do valor só pode acontecer após declarado o tipo e identificador da variável.',
            }, 
            incorrect: {
              title: 'OPS!', 
              subtitle: 'A atribuição do valor só pode acontecer após declarado o tipo e identificador da variável.'
            }
          }
        ]
      })
    },
  ],
});

const UE10Q3 = new RadioQuestion({
  uid: "UE10Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: 'TEXT',
      value: 'Um contrato inteligente que gerencia a quantidade de produtos no estoque de um comércio. Sempre que um produto for vendido, é necessário diminuir uma unidade da variável, identificada como numProduto, que controla a quantidade de estoque (numProduto). Considere que a variável foi previamente declarada como uint. Uma forma de fazer essa operação é:',
    },
    {
      type: 'IMAGE',
      value: ImageQ3,
    }
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Considere um contexto que exista numProduto = 10. Após a venda do produto, numProduto = 10 -1, cumprindo de forma correta o especifica na questão.`,
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `A forma especificada na questão é suprida pela solução indicada.`,
      },
    },
  ],
});

const UE10Q4 = new RadioQuestion({
  uid: "UE10Q4",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: 'TEXT',
      value: `Considere a seguinte situação. <br /> <br /> João está programando um contrato inteligente para inscrição em um evento. O pagamento da inscrição será feito em um endereço de uma wallet. João deseja chamar variável de pagamento e a declaração deve ser da seguinte forma:`,
    },
    {
      type: 'IMAGE',
      value: ImageQ4,
    }
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Considerando que o endereço deve receber pagamento, ele deve ser payable. Logo, sua declaração seria: <code>address payable pagamento;</code>`,
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Considerando que o endereço deve receber pagamento, ele deve ser payable. Logo, sua declaração seria: <code>address payable pagamento;</code>`,
      },
    },
  ],
});

const UE10Q5 = new RadioQuestion({
  uid: "UE10Q5",
  assertive: "Considere o código abaixo:",
  components: [
    {
      type: 'IMAGE',
      value: ImageQ5,
    },
    {
      type: 'TEXT',
      value: `Analise as alternativas e marque aquela que descreve o valor que será atribuído a variável x.`,
    }
  ],
  alternatives: [
    {
      label: "x receberá o valor do saldo do contrato corrente.",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Na linha 01, a variável conta recebe o endereço do contrato corrente. Na linha 02, a variável x recebe o saldo do contrato através do membro balance.`,
      },
    },
    {
      label: "x receberá o valor a ser recebido pelo contrato corrente.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Na linha 01, a variável conta recebe o endereço do contrato corrente. Na linha 02, a variável x recebe o saldo do contrato através do membro balance.`,
      },
    },
    {
      label: "x receberá o valor a ser transferido do contrato corrente para outro.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Na linha 01, a variável conta recebe o endereço do contrato corrente. Na linha 02, a variável x recebe o saldo do contrato através do membro balance.`,
      },
    },
    {
      label: "x receberá o endereço da conta do contrato corrente.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Na linha 01, a variável conta recebe o endereço do contrato corrente. Na linha 02, a variável x recebe o saldo do contrato através do membro balance."`,
      },
    },
  ],
});


const UE10Q6 = new RadioQuestion({
  uid: "UE10Q6",
  assertive: "Verdadeiro ou Falso",
  components: [{
    value: `Considere a seguinte situação. <br /><br /> Fernando está programando um contrato inteligente para um sistema de ouvidoria que possui os seguintes tipos de manifestações bem definidas: reclamação, elogio e sugestão. É possível utilizar um enum para esse contexto?`,
    type: "TEXT",
  }],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `É possível usar o tipo enum para criar uma lista de opções pré-definidas para um determinado campo. Logo, é possível usar o seguinte enum: <br /> <br />
        <code>
          enum Manifestacao { <br />
          &#8194; Reclamacao, <br />
          &#8194; Elogio, <br />
          &#8194; Sugestao <br />
          } <br />
        </code>
        `,
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `É possível usar o tipo enum para criar uma lista de opções pré-definidas para um determinado campo. Logo, é possível usar o seguinte enum: <br /> <br />
          <code>
            enum Manifestacao { <br />
            &#8194;  Reclamacao, <br />
            &#8194;  Elogio, <br />
            &#8194;  Sugestao <br />
            } <br />
          </code>
        `,
      },
    },
  ],
});

const UE10Q7 = new RadioQuestion({
  uid: "UE10Q7",
  assertive: "Qual das seguintes opções é a forma correta de criar um array de inteiros de <strong>tamanho fixo</strong> com o Solidity?",
  components: [],
  alternatives: [
    {
      label: "int[] array = [1, 2, 3];",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `A alternativa cria um array dinâmico de inteiros e inicializa 3 elementos.`,
      },
    },
    {

      label: "int[3] array;",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `A alternativa cria um array de inteiros de tamanho fixo com 3 elementos`,
      },
    },
    {
      label: "int array[3];",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `A alternativa mostra uma sintaxe inválida.`,
      },
    },
    {
      label: "int array(3);",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `A alternativa mostra uma sintaxe inválida.`,
      },
    },
  ],
});


const UE10Q8 = new RadioQuestion({
  uid: "UE10Q8",
  assertive: "Você está trabalhando em um projeto de contrato inteligente para uma plataforma de licitações online. Neste projeto, é necessário armazenar os lances feitos pelos licitantes para cada item licitado. Para isso, você decide usar um mapping em Solidity para criar uma tabela associativa que mapeie cada item licitado para uma lista de lances. Qual das seguintes afirmações é verdadeira sobre mappings em Solidity nesse contexto?",
  components: [],
  alternatives: [
    {
      label: "Mappings são uma estrutura de dados que permite acessar os elementos por meio de índices numéricos, como em um array",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Os mappings permitem acessar os elementos por meio de chaves.`,
      },
    },
    {
      label: "Mappings são uma estrutura de dados que permite acessar os elementos por meio de chaves.",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: `Na linha 01, a variável conta recebe o endereço do contrato corrente. Na linha 02, a variável x recebe o saldo do contrato através do membro balance.`,
      },
    },
    {
      label: "Mappings são uma estrutura de dados que permite acessar os elementos por meio de índices booleanos, como em um conjunto",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Os mappings permitem acessar os elementos por meio de chaves.`,
      },
    },
    {
      label: "Mappings são uma estrutura de dados que permite acessar os elementos por meio de chaves criptografadas, como em uma tabela hash",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Os mappings permitem acessar os elementos por meio de chaves.`,
      },
    },
    {
      label: "Mappings são uma estrutura de dados que permite acessar os elementos por meio de índices gerados aleatoriamente, como em uma lista encadeada",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: `Os mappings permitem acessar os elementos por meio de chaves.`,
      },
    },
  ],
});

const UE10Q9 = new CompleteWithSelectQuestion({
  uid: 'UE10Q9',
  assertive: "Clique no espaço em branco para selecionar a opção CORRETA para a sentença a seguir:",
  components: [{
    type: 'TEXT',
    value: 'Associe cada estrutura de controle de Solidity com sua descrição:'
  }],
  assessments: [
    {
      sentence: "a. Permite a execução de uma sequência de ações repetidas até que uma condição seja satisfeita, com a verificação da condição no início da sequência <select />",
      alternatives: ['if/else', 'while', 'do/while'],
      correctAnswer: ['while'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'A estrutura while é bastante útil quando o número de repetições é desconhecido ou variável.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo'
          }
        }
      })
    },
    {
      sentence: "b. Executa uma ação específica se a condição for verdadeira e outra ação se a condição for falsa <select />",
      alternatives: ['if/else', 'while', 'do/while'],
      correctAnswer: ['if/else'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: 'CORRETO!',
            subtitle: 'A estrutura if/else é usada para tomar decisões lógicas no código.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo'
          }
        }
      })
    },
    {
      sentence: "c. Executa uma sequência de ações repetidas até que uma condição seja satisfeita, com a verificação da condição no final da sequência <select />",
      alternatives: ['if/else', 'while', 'do/while'],
      correctAnswer: ['do/while'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: 'PARABÉNS!',
            subtitle: 'Muito semelhante a while, mas a condição só é verificada no final. Isso significa que a sequência de ações será executada pelo menos uma vez, independentemente da condição.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo'
          }
        }
      })
    }
  ]
});

export {
  UE10Q1,
  UE10Q2,
  UE10Q3,
  UE10Q4,
  UE10Q5,
  UE10Q6,
  UE10Q7,
  UE10Q8,
  UE10Q9
}