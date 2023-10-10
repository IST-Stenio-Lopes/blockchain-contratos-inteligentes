const capes = [
  {
    page: 1,
    title: "Visão geral",
    description:
      "Identificar as propriedades em uma blockchain e sua relação com as criptomoedas",
    background: "images/capes/_UE1.jpg",
  },
  {
    page: 2,
    title: "Blockchain e criptomoeda",
    description:
      "Identificar as propriedades em uma blockchain e sua relação com as criptomoedas",
    background: "images/capes/_UE2.jpg",
  },
  {
    page: 3,
    title: "Estrutura da blockchain",
    description:
      "Reconhecer as estruturas e princípios de uma Blockchain por meio de um ambiente simulado.",
    background: "images/capes/_UE3.jpg",
  },
  {
    page: 4,
    title: "LIVRO RAZÃO DE UMA BLOCKCHAIN",
    description:
      "Reconhecer as estruturas e princípios de uma Blockchain por meio de um ambiente simulado.",
    background: "images/capes/_UE4.jpg",
  },
  {
    page: 5,
    title: "Ethereum",
    description:
      "Utilizar as estruturas de uma Blockchain pública por meio do ecossistema Ethereum",
    background: "images/capes/_UE5.jpg",
  },
  {
    page: 6,
    title: "Blockchain",
    description:
      "Utilizar as estruturas de uma Blockchain pública por meio do ecossistema Ethereum",
    background: "images/capes/_UE6.jpg",
  },
  {
    page: 7,
    title: "Protocolos e algoritmos de uma Blockchain ",
    description:
      "Identificar os protocolos e algoritmos utilizados em uma blockchain pública turing completa",
    background: "images/capes/_UE7.jpg",
  },
  {
    page: 8,
    title: "CONTRATOS INTELIGENTES",
    description: "Identificar contratos inteligentes",
    background: "images/capes/_UE8.jpg",
  },
  {
    page: 9,
    title: "Sintaxe da linguagem",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE9.jpg",
  },
  {
    page: 10,
    title: "Sintaxe da linguagem Solidity",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE10.jpg",
  },
  {
    page: 11,
    title: "Sintaxe",
    description: "Identificar a sintaxe da linguagem Solidity",
    background: "images/capes/_UE11.jpg",
  },
  {
    page: 12,
    title: "Construindo um contrato inteligente",
    description: "Estruturar contratos inteligente na linguagem Solidity",
    background: "images/capes/_UE12.jpg",
  },
  {
    page: 13,
    title: "Implantando um contrato inteligente ",
    description: "Estruturar contratos inteligente na linguagem Solidity",
    background: "images/capes/_UE13.jpg",
  },
  {
    page: 14,
    title: "Validação e testes",
    description:
      "Reconhecer o ambiente e técnicas de testes na infraestrutura Ethereum por meio de análise projetos exemplo",
    background: "images/capes/_UE14.jpg",
  },
  {
    page: 15,
    title: "Padrões de Projeto para Contratos Inteligentes",
    description:
      "Identificar boas práticas de padrões de projeto para o desenvolvimento de contratos inteligentes",
    background: "images/capes/_UE15.jpg",
  },
  {
    page: 16,
    title: "Aplicação descentralizadas",
    description:
      "Analisar aplicações financeiras (DeFi) dentro do ecossistema Ethereum",
    background: "images/capes/_UE16.jpg",
  },
  {
    page: 17,
    title: "Protocolo DeFI em um Projeto Agile",
    description: "Implementar uma DeFi utilizando um framework agile",
    background: "images/capes/_UE17.jpg",
  },
  {
    page: 18,
    title: "Ética profissional",
    description:
      "Demonstrar ética nas decisões sobre a concepção, construção e execução de projetos seguindo critérios de segurança da informação.",
    background: "images/capes/_UE18.jpg",
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
