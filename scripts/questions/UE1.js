import {
  UE1Q1,
  UE1Q2,
  UE1Q3,
  UE1Q4,
  UE1Q5,
  UE1Q6,
  UE1Q7
} from "./data/questions-ue1.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
//import ImageQ3 from '/images/ue/UE 10/Imagem - Q. 3.png'
//import ImageQ4 from '@/../public/images/UE 10/Imagem - Q. 4.png'
// ImageQ5 from '@/../public/images/UE 10/Imagem - Q. 5.png'

// Evaluation By Assessment
const UE10Q3 = {
  uid: "UE10Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: 'TEXT',
      value: 'Um contrato inteligente que gerencia a quantidade de produtos no estoque de um comércio. Sempre que um produto for vendido, é necessário diminuir uma unidade da variável, identificada como numProduto, que controla a quantidade de estoque (numProduto). Considere que a variável foi previamente declarada como uint. Uma forma de fazer essa operação é:',
    },
    {
      type: 'IMAGE',
      value: '/images/ue/UE 10/Imagem - Q. 3.png',
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
};

const UE10Q4 = {
  uid: "UE10Q4",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: 'TEXT',
      value: `Considere a seguinte situação. <br /> <br /> João está programando um contrato inteligente para inscrição em um evento. O pagamento da inscrição será feito em um endereço de uma wallet. João deseja chamar variável de pagamento e a declaração deve ser da seguinte forma:`,
    },
    {
      type: 'IMAGE',
      value: '/images/ue/UE 10/Imagem - Q. 4.png',
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
};

const UE3Q4 = {
  uid: "UE3Q4",
  assertive: [
    "Para preencher o espaço em branco, selecione a função que tem as características abaixo: <br /><br />",
    "1. Seu objetivo é compilar dados de qualquer tamanho para um tamanho fixo. <br />",
    "2. Na tecnologia da Blockchain, os dados de um bloco são vinculados ao valor gerado pela função, que será utilizada pelo bloco seguinte, formando o encadeamento dos blocos. <br />",
  ].join(""),
  components: [],
  alternatives: ["Hash", "Modular", "Injetora"],
  correctAnswer: ["Hash"],
  evaluation: {
    feedback: {
      correct: {
        title: "CORRETO",
        subtitle:
          "A função hash tem papel muito importante na rede blockchain.",
      },
      incorrect: {
        title: "OPS!",
        subtitle: "Revise o conteúdo sobre a função hash.",
      },
    },
  },
};

// Evaluation By Assessment
const UE3Q2 = {
  uid: "UE3Q2",
  assertive:
    "Analise a imagem abaixo e, respectivamente, clique na palavra que corresponde aos espaços vazios na estrutura do bloco da blockchain:",
  components: [],
  alternatives: ["Assinatura", "Hash", "Transação"],
  correctAnswer: ["Hash", "Transação", "Assinatura"],
  evaluation: {
    feedback: {
      correct: {
        title: "CORRETO",
        subtitle: "Você acertou a posição dos blocos.",
      },
      incorrect: {
        title: "OPS!",
        subtitle: "Revise o conteúdo sobre a estrutura de bloco.",
      },
    },
  },
};

generateRadioQuestion(UE1Q1);
generateRadioQuestion(UE1Q2);
generateClassificationQuestion(UE1Q3);
generateCompleteQuestion(UE1Q4);
generateRadioQuestion(UE1Q5);
generateRadioQuestion(UE1Q7);
