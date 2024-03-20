const UE13Q1 = {
  uid: "UE13Q1",
  assertive: "Considere o evento definido para troca de produto",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 13/Imagem - Q. 1.png",
    },
    {
      type: "TEXT",
      value:
        "Qual linha você incluiria para inserir a quantidade de pontos envolvidos na troca ao evento?",
    },
  ],
  alternatives: [
    {
      label: "uint256 _quantidadePontos.",
      isCorrect: true,
      feedback: {
        title: "CORRETO!",
        subtitle:
          "uint256 _quantidadePontos é a forma adequada de inserir a quantidade de pontos envolvidos na troca de produtos. Isso porque uint256 é um tipo de dado que pode armazenar valores inteiros não negativos de até 2^256-1, o que é adequado para armazenar a quantidade de pontos.",
      },
    },
    {
      label: "int _quantidadePontos",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "Embora int seja um tipo de dados inteiro, é importante notar que ele pode ser assinado (signed) ou não-assinado (unsigned), o que pode levar a comportamentos inesperados quando usado em conjunto com outros tipos de dados. Além disso, uint é geralmente preferido em vez de int para evitar erros relacionados a aritmética de complemento de dois. Portanto, não é a opção correta.",
      },
    },
    {
      label: "string _quantidadePontos",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "String é um tipo de dados para armazenar texto. Embora possa ser usado para armazenar a quantidade de pontos, não é o tipo de dados mais adequado para isso, pois adiciona complexidade ao processamento da informação.",
      },
    },
    {
      label: "bool _quantidadePontos:",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "bool é um tipo de dados que pode armazenar valores true ou false, o que não é adequado para armazenar a quantidade de pontos.",
      },
    },
    {
      label: "bytes32 _quantidadePontos:",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "bytes32 é um tipo de dados que pode armazenar até 32 bytes de informação. Embora isso possa ser usado para armazenar a quantidade de pontos, isso adiciona complexidade ao processamento da informação. Além disso, bytes32 é um tipo de dados estático, mas não é tão adequado quanto uint256, que é especificamente projetado para armazenar valores inteiros não negativos.",
      },
    },
  ],
};

const UE13Q2 = {
  uid: "UE13Q2",
  assertive: "Considere a função:",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 13/Imagem - Q. 2.png",
    },
    {
      type: "TEXT",
      value: [
        "Considere que o modificador 'payable' foi retirado da assinatura função “pagamento”. Analise as seguintes implicações:<br/><br/>",
        "<ol class='list-decimal ms-6'>",
        "<li class='text-secondary-300 font-semibold'>A função não poderia receber Ether diretamente: Contratos inteligentes no Ethereum só podem receber Ether em funções marcadas como payable. Se você tentar enviar Ether para uma função sem o modificador payable, a transação será rejeitada e falhará</li><br/>",
        "<li class='text-secondary-300 font-semibold'>A verificação de msg.value se tornaria irrelevante: Como a função não aceitaria Ether, a verificação na linha 82 se tornaria desnecessária, pois msg.value sempre seria 0. Nesse caso, você precisaria modificar a lógica para lidar com o pagamento de outra forma</li><br/>",
        "<li class='text-secondary-300 font-semibold'>O conceito de pagamento precisaria ser repensado: Se a função não aceitar Ether diretamente, você teria que encontrar uma maneira alternativa de lidar com pagamentos no seu contrato inteligente.</li><br/>",
        "</ol>",
        "Marque a alternativa que mostra a(s) opção(es) verdadeiras.",
      ].join(""),
    },
  ],
  alternatives: [
    {
      label: "Apenas a 1ª está correta",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: [
          "As afirmativas I, II e III são verdadeiras.<br/><br/>",
          "<ol class='list-decimal ms-6'>",
          "<li>O modificador 'payable' é necessário para permitir que uma função aceite pagamentos em Ether no Ethereum.</li><br/>",
          "<li>Sem o modificador 'payable', a função não aceitaria Ether, e o valor de msg.value sempre seria igual a 0.</li><br/>",
          "<li>Uma possível abordagem substituta seria utilizar tokens ERC20 como forma de pagamento, o que exigiria a implementação de lógicas adicionais para interagir com o contrato do token e realizar transferências.</li><br/>",
          "</ol>",
        ].join(""),
      },
    },
    {
      label: "1ª e 2ª estão corretas",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: [
          "As afirmativas I, II e III são verdadeiras.<br/><br/>",
          "<ol class='list-decimal ms-6'>",
          "<li>O modificador 'payable' é necessário para permitir que uma função aceite pagamentos em Ether no Ethereum.</li><br/>",
          "<li>Sem o modificador 'payable', a função não aceitaria Ether, e o valor de msg.value sempre seria igual a 0.</li><br/>",
          "<li>Uma possível abordagem substituta seria utilizar tokens ERC20 como forma de pagamento, o que exigiria a implementação de lógicas adicionais para interagir com o contrato do token e realizar transferências.</li><br/>",
          "</ol>",
        ].join(""),
      },
    },
    {
      label: "1ª e 3ª estão corretas",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: [
          "As afirmativas I, II e III são verdadeiras.<br/><br/>",
          "<ol class='list-decimal ms-6'>",
          "<li>O modificador 'payable' é necessário para permitir que uma função aceite pagamentos em Ether no Ethereum.</li><br/>",
          "<li>Sem o modificador 'payable', a função não aceitaria Ether, e o valor de msg.value sempre seria igual a 0.</li><br/>",
          "<li>Uma possível abordagem substituta seria utilizar tokens ERC20 como forma de pagamento, o que exigiria a implementação de lógicas adicionais para interagir com o contrato do token e realizar transferências.</li><br/>",
          "</ol>",
        ].join(""),
      },
    },
    {
      label: "1ª, 2ª e 3ª estão corretas",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: [
          "<ol class='list-decimal ms-6'>",
          "<li>O modificador 'payable' é necessário para permitir que uma função aceite pagamentos em Ether no Ethereum.</li><br/>",
          "<li>Sem o modificador 'payable', a função não aceitaria Ether, e o valor de msg.value sempre seria igual a 0.</li><br/>",
          "<li>Uma possível abordagem substituta seria utilizar tokens ERC20 como forma de pagamento, o que exigiria a implementação de lógicas adicionais para interagir com o contrato do token e realizar transferências.</li><br/>",
          "</ol>",
        ].join(""),
      },
    },
  ],
};

const UE13Q3 = {
  uid: "UE13Q3",
  assertive:
    "Considere o seguinte trecho de código de um contrato inteligente de um sistema de votação que utiliza tokens. A função 'votar' é responsável por verificar se o eleitor tem tokens suficientes para votar em um candidato específico. Analise o código a seguir:",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 13/Imagem - Q. 3.png",
    },
    {
      type: "TEXT",
      value:
        "Com base no trecho de código apresentado, qual das seguintes afirmações é VERDADEIRA?",
    },
  ],
  alternatives: [
    {
      label:
        "A função 'votar' aceita dois parâmetros: o endereço do eleitor e o índice do candidato.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "A função 'votar' aceita apenas um parâmetro, que é o índice do candidato.",
      },
    },
    {
      label:
        "A função 'votar' não verifica se o eleitor tem tokens suficientes para votar no candidato desejado.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          " A função 'votar' utiliza a diretiva 'require' (linha 4) para verificar se o eleitor tem tokens suficientes para votar no candidato desejado.",
      },
    },
    {
      label:
        "A função 'votar' atualiza o total de tokens do eleitor e o total de votos do candidato após a conclusão da votação.",
      isCorrect: true,
      feedback: {
        title: "CORRETO!",
        subtitle:
          "A função 'votar' subtrai os tokens gastos pelo eleitor e atualiza o total de votos do candidato após a votação.",
      },
    },
    {
      label:
        "A função 'votar' permite que qualquer endereço visualize a quantidade de tokens do eleitor.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "A função 'votar' não permite visualizar a quantidade de tokens do eleitor. Isso seria feito por outra função, como 'getTokens' ou similar.",
      },
    },
    {
      label:
        "A função 'votar' não emite nenhum evento após a conclusão da votação.",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle:
          "A função 'votar' emite um evento chamado 'VotoRealizado' com informações sobre a votação concluída.",
      },
    },
  ],
};

export { UE13Q1, UE13Q2, UE13Q3 };
