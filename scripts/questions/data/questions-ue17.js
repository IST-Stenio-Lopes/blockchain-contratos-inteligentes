const UE17Q1 = {
  uid: "UE17Q1",
  assertive: "No contexto do desenvolvimento de um Protocolo DeFi, qual dos seguintes benefícios está diretamente associado ao uso de uma metodologia ágil como o Scrum, em comparação ao desenvolvimento tradicional?",
  components: [],
  alternatives: [
    {
      label:
        "Um planejamento detalhado e antecipado de todas as funcionalidades do projeto.",
      feedback: {
        subtitle:
          "Esta alternativa descreve uma característica do desenvolvimento tradicional, onde se busca planejar todo o projeto antes de sua execução.",
      },
    },
    {
      label:
        "Ênfase na prevenção de problemas antes que eles aconteçam, através de processos rígidos e pré-definidos.",
      feedback: {
        subtitle:
          "Esta alternativa descreve uma característica do desenvolvimento tradicional.",
      },
    },
    {
      label:
      "Testes realizados apenas ao final do processo de desenvolvimento para garantir a qualidade do software",
      feedback: {
        subtitle:
        "Essa abordagem faz parte do desenvolvimento tradicional, onde os testes são realizados após o término do desenvolvimento.",
      },
    },
    {
      isCorrect: true,
      label:
        "Adaptação e entrega incremental, permitindo que os desenvolvedores priorizem recursos críticos e se ajustem às mudanças no projeto.",
      feedback: {
        subtitle:
          "Esta alternativa descreve a principal vantagem do desenvolvimento ágil em relação ao desenvolvimento tradicional. Ao adotar essa abordagem, a equipe de desenvolvimento pode se adaptar às mudanças e priorizar os recursos mais importantes para o sucesso do Protocolo DeFi.",
      },
    },
    {
      label:
        "Comunicação estritamente vertical e hierárquica entre os membros da equipe de desenvolvimento.",
      feedback: {
        subtitle:
          "Essa alternativa descreve a abordagem de comunicação no desenvolvimento tradicional.",
      },
    },
  ],
};

const UE17Q2 = {
  uid: "UE17Q2",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Durante o desenvolvimento de um contrato inteligente utilizando o framework Scrum, a equipe se depara com um desafio técnico no meio do sprint. De acordo com a metodologia Scrum, a equipe deve aguardar até a próxima reunião de revisão de sprint para discutir e resolver o problema. <br/>",
        "Verdadeiro ou falso?",
      ].join(""),
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "No Scrum, a equipe realiza reuniões diárias chamadas Daily Scrum para discutir o progresso do sprint e identificar quaisquer obstáculos que precisam ser resolvidos. Isso permite que a equipe trabalhe de forma colaborativa e proativa para superar desafios e permanecer focada nos objetivos do sprint.",
      },
    },
    {
      label: "Falso",
      isCorrect: true,
      feedback: {
        subtitle:
          "No Scrum, a equipe realiza reuniões diárias chamadas Daily Scrum para discutir o progresso do sprint e identificar quaisquer obstáculos que precisam ser resolvidos. Isso permite que a equipe trabalhe de forma colaborativa e proativa para superar desafios e permanecer focada nos objetivos do sprint.",
      },
    },
  ],
};

const UE17Q3 = {
  uid: "UE17Q3",
  assertive: "Qual das seguintes opções melhor justifica o motivo do Protocolo DeFi ser considerado um produto de software, e não apenas um contrato inteligente na blockchain? ",
  components: [],
  alternatives: [
    {
      label:
        "O Protocolo DeFi é considerado um produto de software apenas porque é desenvolvido usando linguagens de programação modernas.",
      feedback: {
        subtitle:
          "Embora o Protocolo DeFi seja desenvolvido usando linguagens de programação, isso não é o único motivo pelo qual ele é considerado um produto de software.",
      },
    },
    {
      label:
        "O Protocolo DeFi deve ser considerado um produto de software porque ele só pode ser usado em dispositivos móveis e computadores pessoais.",
      feedback: {
        subtitle:
          "O Protocolo DeFi é utilizado em várias plataformas e dispositivos, mas isso não é o motivo principal pelo qual é considerado um produto de software.",
      },
    },
    {
      label:
      "O Protocolo DeFi é considerado um produto de software porque pode ser usado apenas por indivíduos com conhecimentos avançados de programação.",
      feedback: {
        subtitle:
        "O Protocolo DeFi é projetado para ser utilizado por uma ampla variedade de usuários, não apenas por aqueles com conhecimentos avançados de programação. Essa característica não é a principal razão pela qual é considerado um produto de software.",
      },
    },
    {
      label:
      "O Protocolo DeFi é considerado um produto de software apenas devido à sua capacidade de gerar lucros para seus desenvolvedores.",
      feedback: {
        subtitle:
        "Gerar lucros pode ser um objetivo dos desenvolvedores, mas isso não é o motivo pelo qual o Protocolo DeFi é considerado um produto de software.",
      },
    },
    {
      isCorrect: true,
      label:
        "Fatores relevantes que fazem o Protocolo DeFi ser considerado um produto de software é porque ele requer atualizações regulares, possui uma comunidade importante, precisa de documentação adequada e deve ser seguro.",
      feedback: {
        subtitle:
          "Essas são as principais razões pelas quais o Protocolo DeFi é considerado um produto de software, conforme descrito no texto.",
      },
    },
  ],
};


const UE17Q4 = {
  uid: "UE17Q4",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: [
        "Lívia é uma desenvolvedora que está trabalhando em um projeto de Protocolo DeFi com outros membros de sua equipe. Eles decidiram usar o Remix IDE para desenvolver seus contratos inteligentes e o Git para o controle de versão, integrando-o ao GitHub. Ao fazer isso, Lívia e sua equipe conseguem trabalhar de forma colaborativa no projeto, rastrear as mudanças no código, acessar os arquivos de código de contratos inteligentes de qualquer lugar e reverter as mudanças, se necessário.<br/>",
        "Essa afirmação é verdadeira ou falsa?",
      ].join("<br/>"),
    },
  ],
  alternatives: [
    {
      isCorrect: true,
      label: "Verdadeiro",
      feedback: {
        subtitle:
        "A integração do Git com o Remix IDE permite que os desenvolvedores mantenham o controle de suas versões de código de contratos inteligentes, trabalhem de forma colaborativa com outros desenvolvedores e acessem seus arquivos de código de contratos inteligentes de qualquer lugar.Portanto, a situação descrita é consistente com o conteúdo do texto e a afirmação é verdadeira.",
      },
    },
    {
      label: "Falso",
      feedback: {
        subtitle:
          "A integração do Git com o Remix IDE permite que os desenvolvedores mantenham o controle de suas versões de código de contratos inteligentes, trabalhem de forma colaborativa com outros desenvolvedores e acessem seus arquivos de código de contratos inteligentes de qualquer lugar.Portanto, a situação descrita é consistente com o conteúdo do texto e a afirmação é verdadeira.",
      },
    },
  ],
};

const UE17Q5 = {
  uid: "UE17Q5",
  assertive: "Guilherme precisa garantir que o contrato inteligente esteja funcionando corretamente e que nenhuma atualização afete negativamente as funcionalidades já existentes. Qual dos seguintes tipos de teste é mais adequado para garantir que as alterações introduzidas não afetem negativamente as funcionalidades que já estavam em funcionamento?",
  components: [],
  alternatives: [
    {
      label:
        "Testes de desempenho",
      feedback: {
        subtitle:
          "Testes de desempenho são utilizados para avaliar a velocidade, escalabilidade e estabilidade do sistema.",
      },
    },
    {
      label:
        "Testes de integração",
      feedback: {
        subtitle:
          "Testes de integração são utilizados para verificar como diferentes partes do código funcionam juntas, garantindo que o sistema funcione corretamente como um todo e não apresente problemas de compatibilidade entre as diferentes partes do sistema.",
      },
    },
    {
      isCorrect: true,
      label:
      "Testes de regressão",
      feedback: {
        subtitle:
        "Testes de regressão são projetados especificamente para garantir que as alterações introduzidas não afetem negativamente as funcionalidades que já estavam em funcionamento.",
      },
    },
    {
      label:
      "Testes unitários",
      feedback: {
        subtitle:
        "Testes unitários verificam se cada unidade de código funciona corretamente de forma isolada.",
      },
    },
    {
      label:
        " Testes de carga.",
      feedback: {
        subtitle:
          "Testes de carga são utilizados para verificar a capacidade do sistema de lidar com grandes volumes de tráfego ou solicitações.",
      },
    },
  ],
};

export { UE17Q1, UE17Q2, UE17Q3, UE17Q4, UE17Q5 };
