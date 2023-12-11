const UE12Q1 = {
  uid: "UE12Q1",
  assertive: "Verdadeiro ou Falso",
  components: [
    {
      type: "TEXT",
      value: "Para adicionar uma característica chamada sobrenomeEstudante no contrato inteligente “ContratoCadastroEstudante”, uma possível implementação, seria:",
    },
    {
      type: "IMAGE",
      value: "/images/ue/UE 12/Imagem - Q. 1.png",
    },
  ],
  alternatives: [
    {
      label: "Verdadeiro",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "Adicionar uma variável sobrenomeEstudante do tipo string ao struct é uma solução correta.",
      },
    },
    {
      label: "Falso",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "Adicionar uma variável sobrenomeEstudante do tipo string ao struct é uma solução correta.",
      },
    },
  ],
};

const UE12Q2 = {
  uid: "UE12Q2",
  assertive: "Os valores assumidos para preRequisito já representam sua validade, logo optamos, no nosso exemplo,  por não implementar uma função para verificar sua validação especificamente. Caso fosse definida, teria a seguinte implementação:",
  components: [
    {
      type: "IMAGE",
      value: "/images/ue/UE 12/Imagem - Q. 2.png",
    },
    {
      type: "TEXT",
      value: "Quais valores devem ser utilizados para os campos (1) e (2), respectivamente:",
    },
  ],
  alternatives: [
    {
      label: "unit , _preRequisito",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "O tipo de _preRequisito não é unit.",
      },
    },
    {
      label: "bool, _preRequisito == true",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "O retorno deve ser o valor do preRequisito e não uma comparação.",
      },
    },
    {
      label: "bool, _preRequisito",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "O tipo de _preRequisito é bool e deve retornar seu valor.",
      },
    },
    {
      label: "unit, _preRequisito == true",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "O tipo de _preRequisito não é unit e não deve retornar uma comparação.",
      },
    },
  ],
};

const UE12Q3 = {
  uid: "UE12Q3",
  assertive: "Considerando a implementação da função ehEstudanteValido, marque a alternativa que apresenta uma tupla de dados para um estudante válido.",
  components: [
  ],
  alternatives: [
    {
      label: "(“”, 0, false)",
      isCorrect: false,
      feedback: {
        title: "CORRETO",
        subtitle: "nomeEstudante, idade e preRequisito estão inválidos. ",
      },
    },
    {
      label: "(“Juliana”, 18, true)",
      isCorrect: true,
      feedback: {
        title: "CORRETO",
        subtitle: "nomeEstudante, idade e preRequisito apresentam valores válidos.",
      },
    },
    {
      label: "(“Diego”, 40, false)",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "preRequisito apresenta valor inválido.",
      },
    },
    {
      label: "(“”, 3, true)",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "preRequisito apresenta valor inválido.",
      },
    },
    {
      label: "(“Caio”, 0, true)",
      isCorrect: false,
      feedback: {
        title: "OPS!",
        subtitle: "idade apresenta valor inválido.",
      },
    },
  ],
};

export {
  UE12Q1,
  UE12Q2,
  UE12Q3,
}