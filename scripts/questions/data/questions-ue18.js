import { RadioQuestion } from "@/components/Questions/RadioQuestion/domain"

const UE18Q1 = new RadioQuestion({
  uid: "UE18Q1",
  assertive: "João, um gerente de projetos em uma empresa de tecnologia, está liderando uma equipe para desenvolver um novo sistema DeFi. Durante uma reunião com a equipe, ele precisa tomar uma decisão que envolve a ética profissional. Com base no texto sobre ética profissional, qual das seguintes opções representa a melhor decisão ética de João?",
  components: [],
  alternatives: [
    {
      label: "Ignorar a opinião de um colega de equipe por considerá-lo chato, acreditando que isso não afeta o projeto.",
      feedback: {
        subtitle:
        "Esta alternativa é antiética porque envolve discriminação e exclusão com base na característica de um colega de equipe. A ética profissional defende o respeito às diferenças individuais e à diversidade.",
      },
    },
    {
      label: "Compartilhar informações confidenciais do projeto com um amigo que trabalha em uma empresa concorrente para obter conselhos.",
      feedback: {
        subtitle:
          "Esta opção é antiética porque envolve a divulgação de informações confidenciais para uma pessoa de fora da empresa, o que pode comprometer a privacidade e a confidencialidade das informações. A ética profissional destaca a importância de manter a confidencialidade e privacidade dos clientes e informações confidenciais.",
      },
    },
    {
      label: "Escolher a solução mais barata para o projeto, mesmo sabendo que isso pode comprometer aspectos de segurança do projeto.",
      feedback: {
        subtitle:
        "Esta alternativa é antiética, porque coloca em risco a segurança e a privacidade dos usuários finais, ignorando possíveis consequências negativas. A ética profissional enfatiza a promoção da segurança e a saúde dos clientes e colaboradores, além de cumprir as leis e regulamentações.",
      },
    },
    {
      label: "Favorecer a contratação de um amigo para um cargo importante no projeto, sem considerar a qualificação de outros candidatos.",
      feedback: {
        subtitle:
          "Esta opção é antiética porque representa um conflito de interesse, onde João toma uma decisão em benefício próprio ou de seu amigo, em detrimento dos interesses da empresa ou dos clientes. A ética profissional defende a importância de evitar conflitos de interesse.",
      },
    },
    {
      isCorrect: true,
      label: "Priorizar o cumprimento das leis e regulamentações, garantindo a segurança e privacidade dos usuários finais e respeitando a diversidade dentro da equipe.",
      feedback: {
        subtitle:
          "Essa opção demonstra integridade, responsabilidade e respeito, contribuindo para um ambiente de trabalho saudável e um projeto bem-sucedido.",
      },
    },
  ],
});

const UE18Q2 = new RadioQuestion({
  uid: "UE18Q2",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Considere o contexto:",
        "José tem uma empresa que oferece soluções em blockchain. Diante de uma crise financeira, ele começou a ocultar informações importantes para os clientes a fim de garantir lealdade à empresa. Além disso, para tentar amenizar a crise, ele começou  a oferecer serviços de consultoria para clientes aos quais ele sabia que não precisam deles, apenas para aumentar sua receita.",
      ].join("<br/><br/>"),
    },
    {
      type: "TEXT",
      value: [
        "Nesse contexto, José quebrou pelo menos dois princípios éticos importantes: integridade e honestidade.",
        "Essa afirmação é verdadeira ou falsa?",
      ].join("<br/><br/>"),
    },
  ],

  alternatives: [
    {
      isCorrect: true,
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "Ao ocultar informações importantes para os clientes, José não está agindo com integridade. Além disso, ao oferecer serviços de consultoria para clientes que ele sabe que não precisam, apenas para aumentar sua receita, José está violando o princípio de honestidade.",
      },
    },
    {
      label: "Falso",
      feedback: {
        subtitle:
          "A afirmativa está correta. Ao ocultar informações importantes para os clientes, José não está agindo com integridade. Além disso, ao oferecer serviços de consultoria para clientes que ele sabe que não precisam, apenas para aumentar sua receita, José está violando o princípio de honestidade.",
      },
    },
  ],
});

const UE18Q3 = new RadioQuestion({
  uid: "UE18Q3",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Carlos é um desenvolvedor de blockchain que recebe uma solicitação de um cliente para adicionar uma funcionalidade em um sistema de pagamento, permitindo o rastreamento de todas as transações de um usuário específico, mesmo sem o consentimento deste usuário. Carlos conhece o código de ética profissional e sabe das normas relacionadas à privacidade dos usuários e à integridade profissional. Porém, Carlos aceita a solicitação do cliente considerando que está seguindo o princípio da lealdade.",
        "A atitude de Carlos seguiu a ética profissional.",
        "Verdadeiro ou falso?",
      ].join("<br/><br/>"),
    },
  ],

  alternatives: [
    {
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "A afirmativa é falsa. Embora Carlos possa ter agido com lealdade ao aceitar a solicitação do cliente, ele violou a ética profissional ao não respeitar a privacidade do usuário. Ao aceitar a solicitação do cliente, Carlos agiu em desacordo com o código de ética profissional que estabelece normas relacionadas à privacidade dos usuários e à integridade profissional. Dessa forma, a atitude de Carlos não seguiu a ética profissional.",
      },
    },
    {
      isCorrect: true,
      label: "Falso",
      feedback: {
        subtitle:
          "Embora Carlos possa ter agido com lealdade ao aceitar a solicitação do cliente, ele violou a ética profissional ao não respeitar a privacidade do usuário. Ao aceitar a solicitação do cliente, Carlos agiu em desacordo com o código de ética profissional que estabelece normas relacionadas à privacidade dos usuários e à integridade profissional. Dessa forma, a atitude de Carlos não seguiu a ética profissional.",
      },
    },
  ],
});

const UE18Q4 = new RadioQuestion({
  uid: "UE18Q4",
  assertive: [
    "Arthur é gerente de projetos em uma empresa de TI e está liderando a seleção de um novo fornecedor de software para um projeto importante. Um de seus melhores amigos é dono de uma das empresas que estão concorrendo ao contrato. Pedro está preocupado com o potencial conflito de interesses na situação.",
    "Qual das seguintes ações é a melhor maneira de Arthur lidar com a situação?",
  ].join("<br/><br/>"),
  components: [],
  alternatives: [
    {
      label: "Escolher a empresa do amigo sem considerar outras propostas, já que confia no trabalho do amigo.",
      feedback: {
        subtitle:
          "Essa opção pode levar a uma tomada de decisão tendenciosa, prejudicando a imparcialidade e a integridade do processo de seleção.",
      },
    },
    {
      label: "Avaliar todas as propostas igualmente e selecionar a empresa do amigo, sem revelar sua amizade aos colegas.",
      feedback: {
        subtitle:
          "Embora Pedro possa tentar ser imparcial, ainda há o risco de um conflito de interesses, e a falta de transparência pode prejudicar a confiança de seus colegas e superiores. clientes e informações confidenciais.",
      },
    },
    {
      isCorrect: true,
      label:
        "Informar seus superiores sobre a amizade com o proprietário de uma das empresas concorrentes e solicitar que outra pessoa lidere a seleção do fornecedor.",
      feedback: {
        subtitle:
          "Esta opção lida com a situação de forma transparente e ética, garantindo a imparcialidade do processo de seleção e evitando possíveis conflitos de interesse.",
      },
    },
    {
      label: "Excluir a empresa do amigo da seleção de fornecedores, para evitar possíveis conflitos de interesse.",
      feedback: {
        subtitle:
          "Essa opção não é justa para a empresa do amigo e pode privar a organização de uma possível proposta válida.",
      },
    },
  ],
});

export { UE18Q1, UE18Q2, UE18Q3, UE18Q4 };
