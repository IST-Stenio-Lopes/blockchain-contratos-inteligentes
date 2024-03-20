const UE15Q1 = {
  uid: "UE15Q1",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "“Os padrões de projetos são soluções específicas para problemas únicos encontrados na arquitetura de software.”<br/>",
        "A afirmativa acima é verdadeira?",
      ].join(""),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: false,
      feedback: {
        title: "CORRETO!",
        subtitle:
          "Os padrões de projetos são soluções genéricas para problemas comuns encontrados na arquitetura de software. São soluções genéricas para problemas comuns encontrados na arquitetura de software.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        title: "OPS!",
        subtitle:
          "Os padrões de projetos são soluções genéricas para problemas comuns encontrados na arquitetura de software. São soluções genéricas para problemas comuns encontrados na arquitetura de software.",
      },
    },
  ],
};

const UE15Q2 = {
  uid: "UE15Q2",
  assertive:
    "A empresa CryptoBank está desenvolvendo um contrato inteligente para lidar com transações financeiras em sua plataforma DeFi. A equipe de desenvolvimento quer garantir que o contrato seja eficiente, seguro e de fácil manutenção. Para atingir esses objetivos, qual das seguintes estratégias deve ser adotada pela equipe? ",
  components: [],
  alternatives: [
    {
      isCorrect: false,
      label:
        "Ignorar padrões de projeto e focar apenas na funcionalidade básica do contrato.",
      feedback: {
        title: "OPS!",
        subtitle:
          "Ignorar padrões de projeto pode levar a um contrato menos organizado, difícil de manter e menos seguro.",
      },
    },
    {
      isCorrect: false,
      label:
        "Escrever todo o código do contrato em um único arquivo para simplificar a estrutura.",
      feedback: {
        title: "OPS!",
        subtitle:
          "Escrever todo o código em um único arquivo torna o contrato mais difícil de entender e manter, além de reduzir a modularidade e a reutilização de código.",
      },
    },
    {
      isCorrect: true,
      label:
        "Implementar padrões de projeto no contrato inteligente para melhorar a qualidade, segurança e manutenibilidade.",
      feedback: {
        title: "CORRETO!",
        subtitle:
          "Ignorar padrões de projeto e focar apenas na funcionalidade básica do contrato.",
      },
    },
    {
      isCorrect: false,
      label:
        "Evitar a reutilização de código e escrever todas as funções do contrato do zero.",
      feedback: {
        title: "OPS!",
        subtitle:
          "Evitar a reutilização de código torna o desenvolvimento menos eficiente e mais propenso a erros, uma vez que cada função terá de ser escrita do zero.",
      },
    },
    {
      isCorrect: false,
      label:
        "Deixar a segurança do contrato como uma preocupação secundária e priorizar a velocidade de desenvolvimento",
      feedback: {
        title: "OPS!",
        subtitle:
          "Deixar a segurança como uma preocupação secundária pode resultar em vulnerabilidades e ataques ao contrato, comprometendo a integridade e a confiabilidade do sistema.",
      },
    },
  ],
};

const UE15Q3 = {
  uid: "UE15Q3",
  assertive:
    "Qual é o objetivo do padrão de autoridade em contratos inteligentes?",
  components: [],
  alternatives: [
    {
      label: "Permitir que vários endereços acessem o contrato ao mesmo tempo",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O padrão de autoridade tem como objetivo garantir que apenas um endereço ou grupo de endereços tenha o controle exclusivo sobre o contrato, ao invés de permitir o controle por vários endereços.",
      },
    },
    {
      label: "Fornecer acesso igualitário a todos os usuários",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O padrão de autoridade tem como objetivo garantir o controle exclusivo por um endereço ou grupo de endereços, ao invés de fornecer acesso igualitário a todos os usuários.",
      },
    },
    {
      label:
        "Garantir que apenas um endereço ou grupo de endereços tenha controle exclusivo sobre o contrato",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle:
          "Isso é útil em situações em que é importante ter controle restrito sobre as decisões e as alterações feitas no contrato.",
      },
    },
    {
      label: "Tornar o contrato totalmente descentralizado",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "O padrão de autoridade tem como objetivo garantir o controle exclusivo por um endereço ou grupo de endereços, ao invés de tornar o contrato totalmente descentralizado.",
      },
    },
    {
      label: "Proteger o contrato contra ataques maliciosos",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Embora a proteção contra ataques maliciosos seja importante, ela não é o objetivo principal do padrão de autoridade. Ele tem como objetivo garantir o controle exclusivo por um endereço ou grupo de endereços sobre o contrato.",
      },
    },
  ],
};

const UE15Q4 = {
  uid: "UE15Q4",
  assertive:
    "Considere o código abaixo para depósito e saque de saldo de uma conta:",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 15/Imagem - Q. 4.png",
    },
    {
      type: "TEXT",
      value:
        "Você deve ter notado que este projeto não adere aos padrões de segurança recomendados. Entre as opções a seguir, qual delas NÃO apresenta maneiras de incluir padrões de segurança no código?",
    },
  ],
  alternatives: [
    {
      label: "Usar funções de acesso",
      feedback: {
        subtitle:
          "Essa técnica ajuda a proteger o contrato contra ataques e a garantir que os dados e as operações do contrato sejam manipulados de maneira adequada.",
      },
    },
    {
      label: "Usar funções de verificação de dados.",
      feedback: {
        subtitle:
          "Essa técnica ajuda a proteger o contrato contra ataques e a garantir que os dados e as operações do contrato sejam manipulados de maneira adequada.",
      },
    },
    {
      label: "Tornar a variável privada",
      feedback: {
        subtitle:
          "Essa técnica ajuda a proteger o contrato contra ataques e a garantir que os dados e as operações do contrato sejam manipulados de maneira adequada.",
      },
    },
    {
      label: "Documentar e comentar o código.",
      isCorrect: true,
      feedback: {
        subtitle:
          "Embora a documentação e comentários possam ser úteis para manter o código, eles não são uma medida de segurança eficaz para proteger o contrato.",
      },
    },
    {
      label: "Incluir assinatura digitais",
      feedback: {
        subtitle:
          "Essa técnica ajuda a proteger o contrato contra ataques e a garantir que os dados e as operações do contrato sejam manipulados de maneira adequada.",
      },
    },
  ],
};

const UE15Q5 = {
  uid: "UE15Q5",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "“Realizar manutenção em contratos inteligentes é um desafio devido à própria natureza estrutural da blockchain”",
        "A afirmativa acima é verdadeira ou falsa?",
      ].join("<br/>"),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        subtitle:
          "A natureza imutável e descentralizada da blockchain torna difícil fazer alterações em contratos inteligentes após seu lançamento. Isso pode tornar a realização de manutenção em contratos inteligentes um desafio, especialmente quando surgem bugs ou são necessárias atualizações.",
      },
    },
    {
      label: "Falso",
      feedback: {
        subtitle:
          "A afirmação está correta. A natureza imutável e descentralizada da blockchain torna difícil fazer alterações em contratos inteligentes após seu lançamento. Isso pode tornar a realização de manutenção em contratos inteligentes um desafio, especialmente quando surgem bugs ou são necessárias atualizações.",
      },
    },
  ],
};

const UE15Q6 = {
  uid: "UE15Q6",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "A startup ArtChain está desenvolvendo um contrato inteligente para realizar leilões de arte online.A utilização do padrão de controle ajuda a garantir a integridade, segurança e justiça das operações.",
        "A afirmativa acima é verdadeira ou falsa?",
      ].join("<br/>"),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        subtitle:
          "O padrão de controle permite que as operações do contrato sejam executadas de maneira controlada e segura, usando funções de verificação, variáveis privadas e mecanismos de acesso para validar os dados de entrada e as condições prévias antes de executar uma operação no contrato.",
      },
    },
    {
      label: "Falso",
      feedback: {
        subtitle:
          "O padrão de controle (resposta correta) permite que as operações do contrato sejam executadas de maneira controlada e segura, usando funções de verificação, variáveis privadas e mecanismos de acesso para validar os dados de entrada e as condições prévias antes de executar uma operação no contrato.",
      },
    },
  ],
};

export { UE15Q1, UE15Q2, UE15Q3, UE15Q4, UE15Q5, UE15Q6 };
