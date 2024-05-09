var capes = [
  {
    page: 1,
    title: "Visão geral",
    description:
      "Identificar as propriedades em uma blockchain e sua relação com as criptomoedas",
    background: "images/capes/_UE1.png",
  },
  {
    page: 2,
    title: "Blockchain e criptomoeda",
    description:
      "Identificar as propriedades em uma blockchain e sua relação com as criptomoedas",
    background: "images/capes/_UE2.png",
  },
  {
    page: 3,
    title: "Estrutura da blockchain",
    description:
      "Reconhecer as estruturas e princípios de uma Blockchain por meio de um ambiente simulado.",
    background: "images/capes/_UE3.png",
  },
  {
    page: 4,
    title: "LIVRO RAZÃO DE UMA BLOCKCHAIN",
    description:
      "Reconhecer as estruturas e princípios de uma Blockchain por meio de um ambiente simulado.",
    background: "images/capes/_UE4.png",
  },
  {
    page: 5,
    title: "Ethereum",
    description:
      "Utilizar as estruturas de uma Blockchain pública por meio do ecossistema Ethereum",
    background: "images/capes/_UE5.png",
  },
  {
    page: 6,
    title: "Blockchain",
    description:
      "Utilizar as estruturas de uma Blockchain pública por meio do ecossistema Ethereum",
    background: "images/capes/_UE6.png",
  },
  {
    page: 7,
    title: "Protocolos e algoritmos de uma Blockchain ",
    description:
      "Identificar os protocolos e algoritmos utilizados em uma blockchain pública turing completa",
    background: "images/capes/_UE7.png",
  },
  {
    page: 8,
    title: "CONTRATOS INTELIGENTES",
    description: "Identificar contratos inteligentes",
    background: "images/capes/_UE8.png",
  },
  {
    page: 9,
    title: "Sintaxe da linguagem",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE9.png",
  },
  {
    page: 10,
    title: "Sintaxe da linguagem Solidity",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE10.png",
  },
  {
    page: 11,
    title: "Sintaxe",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE11.png",
  },
  {
    page: 12,
    title: "Construindo um contrato inteligente",
    description: "Estruturar contratos inteligente na linguagem Solidity",
    background: "images/capes/_UE12.png",
  },
  {
    page: 13,
    title: "Implantando um contrato inteligente ",
    description: "Estruturar contratos inteligente na linguagem Solidity",
    background: "images/capes/_UE13.png",
  },
  {
    page: 14,
    title: "Validação e testes",
    description:
      "Reconhecer o ambiente e técnicas de testes na infraestrutura Ethereum por meio de análise projetos exemplo",
    background: "images/capes/_UE14.png",
  },
  {
    page: 15,
    title: "Padrões de Projeto para Contratos Inteligentes",
    description:
      "Identificar boas práticas de padrões de projeto para o desenvolvimento de contratos inteligentes",
    background: "images/capes/_UE15.png",
  },
  {
    page: 16,
    title: "Aplicação descentralizadas",
    description:
      "Analisar aplicações financeiras (DeFi) dentro do ecossistema Ethereum",
    background: "images/capes/_UE16.png",
  },
  {
    page: 17,
    title: "Protocolo DeFI em um Projeto Agile",
    description: "Implementar uma DeFi utilizando um framework agile",
    background: "images/capes/_UE17.png",
  },
  {
    page: 18,
    title: "Ética profissional",
    description:
      "Demonstrar ética nas decisões sobre a concepção, construção e execução de projetos seguindo critérios de segurança da informação.",
    background: "images/capes/_UE18.png",
  },
];

function handleStart() {
  let tempLink = document.createElement("a");
  tempLink.href = "#start-ue";
  tempLink.click();
}

function loadUeInformation(currentUe) {
  const capeObj = capes[currentUe - 1];

  const number = document.getElementById("page-number");
  const cover = document.getElementById("page-cover");
  const title = document.getElementById("page-title");
  const description = document.getElementById("page-description");

  number.innerHTML = capeObj.page;
  cover.src = capeObj.background;
  title.innerHTML = capeObj.title;
  description.innerHTML = capeObj.description;
}
