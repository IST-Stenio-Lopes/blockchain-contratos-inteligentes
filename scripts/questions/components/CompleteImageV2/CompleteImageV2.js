import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateFeedBack } from "../Feedback.js";
import {
  createElementWithClasses,
  generateID,
  getInputIndexById,
  responsesAreEqual,
} from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";
import { generateImagemIten } from "./ImageItem.js";
import { generateImage } from "../Image.js";

function generateCompleteImageV2Question(question) {
  const { uid: questionId, alternatives, evaluation, correctAnswer } = question;
  const rootContainer = document.getElementById(question.uid);

  // root container not found
  if (!rootContainer) return;

  // header
  const header = generateQuestionHeader(question, question.assertive);
  rootContainer.appendChild(header);

  let counterRespostas = correctAnswer.length;
  let currentCounterRespostas = 0;
  let currentAnswer = {};
  let currentInput = 0; // o input do momento
  // Função para atualizar a variável de estado
  function setCurrentInput(newValue) {
    currentInput = newValue;
  }

  // vai mapear para array certinho
  function answerMapping(answerForm) {
    let lista = [];
    for (let i = 0; i < correctAnswer.length; i++) {
      const inputId = generateID(questionId, "IN", i);
      lista.push(answerForm[inputId]);
    }
    return lista;
  }

  function getEvaluations(evaluation, response, correctAnswer) {
    let feedbackResponse = [];
    let objeto = {};
    let responseCorrect = responsesAreEqual(response, correctAnswer); // ve se os arrays são iguais
    if (responseCorrect) {
      objeto = {
        isCorrect: true,
        feedback: evaluation.feedback.correct,
      };
      feedbackResponse.push(objeto);
    } else {
      objeto = {
        isCorrect: false,
        feedback: evaluation.feedback.incorrect,
      };
      feedbackResponse.push(objeto);
    }
    return feedbackResponse;
  }

  // devolve apenas os feedbacks das respostas
  function evaluateAssessment(response) {
    return getEvaluations(evaluation, response, correctAnswer);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formResponse = e.target;
    const formData = new FormData(formResponse);
    const submittedAnswer = Object.fromEntries(formData.entries());

    const response = answerMapping(submittedAnswer); // respostas em array

    /* Avaliar Respostas */
    const assessmentResults = evaluateAssessment(response);

    var eventFeedbacks = new CustomEvent("RecieveFeedbacks", {
      detail: assessmentResults,
    }); // evento que manda os feedbacks surgirem e muda as classes dos <input />
    const elements = rootContainer.getElementsByClassName(
      "class-feedbacks-remove"
    ); // pega todos os elementos feedback e remove antes de pedir para criar mais feedbacks
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].remove();
    }
    rootContainer.dispatchEvent(eventFeedbacks);
  }

  const onRemove = (inputId) => {
    const updateAnswer = { ...currentAnswer, [inputId]: undefined };
    currentAnswer = updateAnswer;
    let div = document.getElementById(questionId); // faz o elemento ser escutado só na div pai da questão
    let evento = new CustomEvent("canSubmit", { detail: currentAnswer }); // para "mudar o current answer na outra tela para o botão ser desativado, mando ele para outra tela sempre ao mudar os inputs"
    div.dispatchEvent(evento);
  };

  function onSelect(inputId, alternative) {
    const updateAnswer = { ...currentAnswer, [inputId]: alternative };
    // Atualizando o currentAnswer com a nova resposta
    currentAnswer = updateAnswer;
    let div = document.getElementById(questionId);
    let evento = new CustomEvent("canSubmit", { detail: currentAnswer });
    div.dispatchEvent(evento);
  }

  // ao clicar no input
  const onRemoveAlternative = (inputId) => {
    let inputNow = document.getElementById(inputId);
    inputNow.value = ""; // apago o que há no input
    setCurrentInput(getInputIndexById(inputId));
    onRemove(inputId);
    alternatives.map((alternative, _) => {
      let button = document.getElementById(alternative);
      let evento = new CustomEvent("disableButton", { detail: currentAnswer }); // lanço evento pra todos botões verificarem se eles devem estar disable ou não
      button.dispatchEvent(evento);
    });
  };

  // ao clicar no botão (alternativa)
  const onSelectAlternative = (alternative) => {
    const inputId = generateID(questionId, "IN", currentInput); //  vai pegar o id do input que está no momento

    // aqui faz mostrar no input
    let inputNow = document.getElementById(inputId);
    inputNow.value = alternative;

    setCurrentInput((currentInput + 1) % correctAnswer.length); //current input vai ser tal agora (ao clicar ele muda)

    onSelect(inputId, alternative);
    alternatives.map((alternative, _) => {
      let button = document.getElementById(alternative);
      let evento = new CustomEvent("disableButton", { detail: currentAnswer }); // lanço evento pra todos botões
      button.dispatchEvent(evento);
    });
  };

  // função pra escolher a grid dos botões
  const alternativesGridColSizeFunction = () => {
    if (alternatives.length <= 5) return alternatives.length;

    const gridColOptions = [3, 4, 5];
    let result = 2;

    for (const option of gridColOptions) {
      if (alternatives.length % option === 0) {
        result = option;
        break;
      }
    }
    return result;
  };

  const alternativesGridColSize = alternativesGridColSizeFunction();

  const inputId = generateID(questionId, "IN", 0);

  const form = createElementWithClasses("form", "flex flex-col gap-2");
  form.addEventListener("submit", handleSubmit);
  rootContainer.appendChild(form);

  const div1 = createElementWithClasses(
    "div",
    "relative w-full flex items-center justify-end"
  );
  form.appendChild(div1);

  const image1 = generateImage("/images/ue/UE 3/_Imagem Q4 - BG.png");
  div1.appendChild(image1);

  const div2 = createElementWithClasses(
    "div",
    "absolute bottom-6 flex items-center justify-center w-full flex-grow"
  );
  div1.appendChild(div2);

  const imagemItem1 = generateImagemIten(
    "/images/ue/UE 3/CT_Imagem Q4 - R Azul.png"
  );
  div2.appendChild(imagemItem1);

  const imagemItem2 = generateImagemIten(
    "/images/ue/UE 3/_Imagem Q4 - R Verde.png"
  );
  div2.appendChild(imagemItem2);

  const div3 = createElementWithClasses(
    "div",
    "absolute inset-12 flex items-center justify-center"
  );
  imagemItem2.appendChild(div3);

  const input = createElementWithClasses(
    "input",
    "text-center z-20 w-full bg-transparent outline-none"
  );
  input.id = inputId;
  input.name = inputId;
  input.value = "";
  input.readOnly = true;
  input.addEventListener("click", () => onRemoveAlternative(inputId));
  div3.appendChild(input);

  const imagemItem3 = generateImagemIten(
    "/images/ue/UE 3/CT_Imagem Q4 - R Laranja.png"
  );
  div2.appendChild(imagemItem3);

  const secondDiv = createElementWithClasses(
    "div",
    "grid gap-2 text-secondary-300 font-medium h-auto w-full"
  );
  secondDiv.style.gridTemplateColumns = `repeat(${alternativesGridColSize}, minmax(0, 1fr))`;
  form.appendChild(secondDiv);

  alternatives.map((alternative, _) => {
    const button = createElementWithClasses(
      "button",
      "w-full py-3 bg-red-990 hover:bg-secondary-800 border disabled:bg-secondary-overlay-800 border-secondary-300 disabled:text-secondary-overlay-200 disabled:border-secondary-overlay-200"
    );
    button.type = "button";
    button.id = alternative;
    button.innerHTML = alternative;
    button.addEventListener("click", () => onSelectAlternative(alternative));
    // evento para ver se o botão desabilita ou não
    button.addEventListener("disableButton", (e) => {
      if (Object.values(currentAnswer).includes(alternative)) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });
    secondDiv.appendChild(button);
  });

  // botao enviar resposta
  const containerButton = createElementWithClasses(
    "div",
    "flex justify-center items-center w-full w-full mt-6"
  );
  const submitButton = generateButtonEnviarResposta(questionId, "secondary");
  containerButton.appendChild(submitButton);
  submitButton.disabled = true;
  rootContainer.addEventListener("canSubmit", (e) => {
    for (const key in e.detail) {
      currentAnswer[key] = e.detail[key];
    }
    currentCounterRespostas = 0;
    for (const key in currentAnswer) {
      if (currentAnswer[key] !== undefined) {
        currentCounterRespostas += 1;
      }
    }
    if (currentCounterRespostas === counterRespostas) {
      // se todos inputs tem valores
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
  form.appendChild(containerButton);

  // HandleSubmit + onSubmit dispara esse evento
  const divContainer = document.getElementById(questionId);
  divContainer.addEventListener("RecieveFeedbacks", (e) => {
    const response = e.detail;

    const feedback = generateFeedBack(
      response[0].feedback.title,
      response[0].feedback.subtitle,
      response[0].isCorrect
    );
    feedback.classList.add("class-feedbacks-remove");

    form.insertBefore(feedback, containerButton);
  });
}

export { generateCompleteImageV2Question };
