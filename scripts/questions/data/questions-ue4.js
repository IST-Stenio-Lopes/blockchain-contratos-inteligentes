import { CheckListQuestion } from "@/components/Questions/CheckListQuestion/domain";
import { CompleteWithSelectQuestion } from "../CompleteWithSelectQuestion/domain";
import { RadioQuestion } from "@/components/Questions/RadioQuestion/domain"
import { CompleteQuestion } from "@/components/Questions/CompleteQuestion/domain";
import { EvaluationByAssessment } from "@/components/Questions/CompleteQuestion/domain";


const UE4Q1 = new CheckListQuestion({
  uid: "UE4Q1",
  assertive: "Múltipla escolha. Você pode selecionar mais de uma opção",
  components: [
    {
      value:
        "A blockchain proporciona um controle de transações descentralizado. Atualmente, grande parte do controle financeiro mundial é feita por instituições financeiras de forma centralizada. Marque abaixo duas <strong>DESVANTAGENS</strong> da centralização",
      type: "TEXT",
    },
  ],
  alternatives: [
    {
      label: "Risco de perda ou destruição de dados",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A centralização de qualquer tipo de informação coloca em risco a segurança dos dados.",
      },
    },
    {
      label: "Informação inconsistente distribuída na rede.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "A informação é centralizada, logo não estará distribuída na rede.",
      },
    },
    {
      label: "Validação única",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A validação única é uma desvantagem, pois está vinculada ao um alto grau de confiança na instituição validadora e possuindo uma tolerância zero de erros.",
      },
    },
    {
      label: "Validações múltiplas inconsistentes",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "A validação é única feito pela unidade centralizadora.",
      },
    },
  ],
});

const UE4Q2 = new RadioQuestion({
  uid: "UE4Q2",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Na Blockchain cada nó da rede distribuída possui uma cópia do livro-razão. O mecanismo relacionado à distribuição da informação faz com que uma das principais características da Blockchain seja a <strong>segurança.</strong>",
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
          "A distribuição da informação faz com que qualquer modificação do livro-razão seja facilmente reconhecida pelos demais nós, já que cada nó possui uma cópia local e pode comparar e identificar alterações indevidas.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite o conteúdo.",
      },
    },
  ],
});

const UE4Q3 = new RadioQuestion({
  uid: "UE4Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Após um ataque malicioso, uma inconsistência nos dados foi inserida. Sem mecanismo de proteção, a atualização do livro razão foi propagada por toda a rede, invalidando as informações na blockchain.",
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
          "Revisite o conteúdo. A informação será propagada apenas depois do consenso da rede.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "A informação será propagada apenas depois do consenso da rede. Nesse caso, não haveria consenso da rede e a atualização não seria propagada.",
      },
    },
  ],
});

const UE4Q4 = new RadioQuestion({
  uid: "UE4Q4",
  assertive:
    "Joana comprou um apartamento diretamente à Paula. Toda parte financeira e de documentação foi feita entre as duas, sem necessidade de intervenção de terceiros. Joana e Paula podem ter utilizado:",
  components: [],
  alternatives: [
    {
      label:
        "Verificar, manualmente, cada uma das novas transações antes de adicionar a um novo bloco.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Revisite o conteúdo.",
      },
    },
    {
      label:
        "Manter a estrutura da cadeia de blocos, adicionando novos blocos com transações que estavam pendentes de validação ou informações recém-validadas.",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Criptomoedas são moedas digitais descentralizadas que não necessitam de uma instituição financeira como intermediária",
      },
    },
    {
      label: "Encontrar novas criptomoedas distribuídas pela rede.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Revisite o conteúdo, pois esta função não caracteriza uma mineradora.",
      },
    },
  ],
});

const UE4Q5 = new CompleteQuestion({
  uid: 'UE4Q5',
  assertive: "Escolha a palavra ou frase que é a resposta correta para completar as sentenças a seguir:",
  components: [],
  assessments: [
    {
      sentence: "1. A mineração é um tarefa de custo elevado, uma dos motivos é <input />.",
      alternatives: ['Alto consumo de energia elétrica', 'Remuneração para um grande número de trabalhadores envolvidos'],
      correctAnswer: ['Alto consumo de energia elétrica'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'Outros motivos são o custo do hardware envolvido, necessidade de espaço físico para as máquinas, entre outros.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo de mineração'
          }
        }
      })
    },
    {
      sentence: "2. Os mineradores são recompensados pela trabalho através de uma transação especial chamada <input />.",
      alternatives: ['Prova de trabalho', 'Coinbase'],
      correctAnswer: ['Coinbase'],
      evaluation: new EvaluationByAssessment({
        feedback: {
          correct: {
            title: 'CORRETO',
            subtitle: 'Coinbase é um tipo de transação especial que é paga ao minerador caso ele consiga incluir o novo bloco na rede.'
          },
          incorrect: {
            title: 'OPS!',
            subtitle: 'Revise o conteúdo de mineração'
          }
        }
      })
    }
  ]
});

const UE4Q6 = new RadioQuestion({
  uid: "UE4Q6",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      value:
        "Proof of Work ou prova de trabalho é uma rotina computacional que está por trás da mineração. Consiste em obter, do bloco candidato, uma hash que apresente um certo número de zeros iniciais.",
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
          "Você acertou a descrição e o funcionamento básico do Proof of Work.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Revisite o conteúdo de Proof of Work (Pow) ou prova de trabalho.",
      },
    },
  ],
});

const UE4Q7 = new CompleteWithSelectQuestion({
  uid: 'UE4Q7',
  assertive: 'Clique no espaço em branco para selecionar a opção CORRETA para a sentença a seguir:',
  components: [],
  assessments: [{
    sentence: 'Quantidade de zeros iniciais que uma hash deve possuir para ser válida. Com o passar do tempo, encontrar sua solução torna-se cada vez mais difícil. As redes Blockchain utilizam esse método como forma de aumentar a proteção. Selecione o conceito relacionado a descrição acima: <select />',
    alternatives: ['Grau de dificuldade', 'Proof of Work', 'Mineração'],
    correctAnswer: ['Grau de dificuldade'],
    evaluation: new EvaluationByAssessment({
      feedback: {
        correct: {
          title: 'CORRETO',
          subtitle: 'Uma maior quantidade de zeros indica que, provavelmente, terão mais tentativas para achar hash.'
        },
        incorrect: {
          title: 'OPS!',
          subtitle: 'Revise o conteúdo'
        }
      }
    })
  }]
})

export { UE4Q1, UE4Q2, UE4Q3, UE4Q4, UE4Q5, UE4Q6, UE4Q7 };
