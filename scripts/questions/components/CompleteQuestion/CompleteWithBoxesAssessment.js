import {
  createElementWithClasses,
  generateID,
  getInputIndexById,
} from "../../utils/index.js";
import { generateFeedBack } from "../Feedback.js";

function generateCompleteWithBoxAssessment(
  assessment,
  assessmentIndex,
  assessmentId,
  currentAnswer,
  highlight,
  questionId
) {
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

    // depois que mudou a alternativa mudamos o tamanho do input
    let inputNow = document.getElementById(inputId);
    const rawTextValue = currentAnswer[inputId] || "";
    const inputWidth = rawTextValue.length * 9;
    var inputWidthNow = inputWidth + "px";
    inputNow.style.width = inputWidthNow;
  }

  const { alternatives, sentence, correctAnswer } = assessment;

  let currentInput = 0; // o input do momento
  // Função para atualizar a variável de estado
  function setCurrentInput(newValue) {
    currentInput = newValue;
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
    const inputId = generateID(assessmentId, "IN", currentInput); //  vai pegar o id do input que está no momento

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

  const rootContainer = createElementWithClasses(
    "div",
    "w-full flex flex-1 flex-col space-y-2"
  );

  const containerQuestionBox = createElementWithClasses(
    "div",
    "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800"
  );
  rootContainer.appendChild(containerQuestionBox);

  const divDeCima = createElementWithClasses(
    "div",
    "text-secondary-300 font-semibold inline-block"
  );
  containerQuestionBox.appendChild(divDeCima);

  const firstDiv = createElementWithClasses(
    "div",
    "text-secondary-300 font-semibold inline-block"
  );
  divDeCima.appendChild(firstDiv);
  const assertiveStructure = sentence.split("<input />");

  assertiveStructure.map((assertiveItem, assertiveIndex) => {
    const inputId = generateID(assessmentId, "IN", assertiveIndex);

    const shouldRenderInput = assertiveIndex !== assertiveStructure.length - 1;

    const isTextValue = assertiveItem.length !== 0;

    const rawTextValue = currentAnswer[inputId] || "";

    const inputWidth = rawTextValue.length * 9;

    if (isTextValue) {
      const span = document.createElement("span");
      span.innerHTML = assertiveItem;
      firstDiv.appendChild(span);
    }

    if (shouldRenderInput) {
      const classesInput =
        "bg-secondary-overlay-800 text-secondary-300 font-normal border-b-2 border-secondary-500 outline-none mx-1 text-center";
      const input = document.createElement("input");
      input.classList.add(...classesInput.split(" ")); // TODO ver se funciona
      input.id = inputId;
      input.name = inputId;
      input.value = rawTextValue;
      input.readOnly = true;
      // style
      input.style.width = inputWidth; // Define a largura do elemento
      input.style.maxWidth = "600px";
      input.style.minWidth = "128px";
      firstDiv.appendChild(input);
      input.addEventListener("click", () => onRemoveAlternative(inputId));
    }
  });

  const secondDiv = createElementWithClasses(
    "div",
    "grid gap-2 text-secondary-300 font-medium h-auto w-full"
  );
  secondDiv.style.gridTemplateColumns = `repeat(${alternativesGridColSize}, minmax(0, 1fr))`;
  rootContainer.appendChild(secondDiv);

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

  // HandleSubmit + onSubmit dispara esse evento
  const divContainer = document.getElementById(questionId);
  divContainer.addEventListener("RecieveFeedbacks", (e) => {
    const assessmentResponse = e.detail[assessmentIndex];
    for (let i = 0; i < assessmentResponse.length; i++) {
      let inputId = generateID(assessmentId, "IN", i);
      let inputElement = document.getElementById(inputId);
      if (highlight) {
        // se for questão com hightlight, muda desgin dos inputs
        if (assessmentResponse[i].isCorrect) {
          inputElement.className =
            "bg-primary-990 border border-primary-400 text-primary-400 font-semibold outline-none mx-1 text-center";
        } else {
          inputElement.className =
            "bg-red-950 border border-red-300 text-red-300 font-semibold outline-none mx-1 text-center";
        }
      }
      const feedback = generateFeedBack(
        assessmentResponse[i].feedback.title,
        assessmentResponse[i].feedback.subtitle,
        assessmentResponse[i].isCorrect
      );
      feedback.classList.add("class-feedbacks-remove");
      rootContainer.appendChild(feedback);
    }
  });
  return rootContainer;
}

export { generateCompleteWithBoxAssessment };
