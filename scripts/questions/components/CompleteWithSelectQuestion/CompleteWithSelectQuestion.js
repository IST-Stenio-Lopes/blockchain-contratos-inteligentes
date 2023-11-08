import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";
import { createElementWithClasses, generateID } from "../../utils/index.js";
import { generateFeedBack } from "../Feedback.js";

function responsesAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function generateCompleteWithSelectQuestion(question) {
  const { uid: questionId, assertive, components, assessments } = question;

  let counterRespostas = 0;
  let currentCounterRespostas = 0;
  let currentAnswer = {};

  let evaluation = []; // a lista de evaluations
  assessments.map((assessment, _) => {
    evaluation += assessment.evaluation;
  });

  // vai mapear para array certinho
  function answerMapping(answerForm) {
    return assessments.map((assessment, assessmentIndex) => {
      const assessmentId = generateID(questionId, "ASS", assessmentIndex);
      return assessment.correctAnswer.map((_, answerIndex) => {
        const inputId = generateID(assessmentId, "IN", answerIndex);
        return answerForm[inputId];
      });
    });
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
  function evaluateAssessment(responses) {
    return assessments.map((assessment, assessmentIndex) => {
      var evaluation = assessment.evaluation;
      var correctAnswer = assessment.correctAnswer;
      return getEvaluations(
        evaluation,
        responses[assessmentIndex],
        correctAnswer
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formResponse = e.target;
    const formData = new FormData(formResponse);
    const submittedAnswer = Object.fromEntries(formData.entries());

    const responses = answerMapping(submittedAnswer); // respostas em array

    /* Avaliar Respostas */
    const assessmentResults = evaluateAssessment(responses);

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

  const rootContainer = document.getElementById(questionId);

  // root container not found
  if (!rootContainer) return;

  // header
  const header = generateQuestionHeader(question, assertive);
  rootContainer.appendChild(header);

  // Components (Image / SubHeader)
  components.map((component, _) => {
    const questionComponent = generateQuestionComponent(component);
    rootContainer.appendChild(questionComponent);
  });

  // form
  const formId = generateID(questionId, "FORM", 1); // id do form
  const form = createElementWithClasses("form", "flex flex-col gap-2");
  form.id = formId;
  rootContainer.appendChild(form);
  form.addEventListener("submit", handleSubmit);
  assessments.map((assessment, assessmentIndex) => {
    const assessmentId = generateID(questionId, "ASS", assessmentIndex);
    const completeWithBoxAssessment = generateCompleteWithBoxAssessment(
      assessment,
      assessmentIndex,
      assessmentId,
      currentAnswer,
      questionId
    );
    form.appendChild(completeWithBoxAssessment);
    counterRespostas += assessment.correctAnswer.length;
  });
  // botao enviar resposta
  const containerButton = createElementWithClasses(
    "div",
    "flex justify-center items-center w-full w-full mt-6"
  );
  const submitButton = generateButtonEnviarResposta(questionId, "secondary");
  containerButton.appendChild(submitButton);
  submitButton.disabled = true;
  const div = document.getElementById(questionId);
  div.addEventListener("canSubmit", (e) => {
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
}

function generateCompleteWithBoxAssessment(
  assessment,
  assessmentIndex,
  assessmentId,
  currentAnswer,
  questionId
) {
  const { alternatives } = assessment;

  function onChangeHandler(classificationKey, alternativeValue) {
    let updateAnswer = { ...currentAnswer };
    updateAnswer[classificationKey] = alternativeValue;
    currentAnswer = updateAnswer;
    let div = document.getElementById(questionId);
    let evento = new CustomEvent("canSubmit", { detail: currentAnswer });
    div.dispatchEvent(evento);
  }

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
  const assertiveStructure = assessment.sentence.split("<select />");

  assertiveStructure.map((assertiveItem, assertiveIndex) => {
    const inputId = generateID(assessmentId, "IN", assertiveIndex);

    const shouldRenderInput = assertiveIndex !== assertiveStructure.length - 1;

    const isTextValue = assertiveItem.length !== 0;

    const rawTextValue = currentAnswer[inputId];

    const selectWidth =
      rawTextValue !== undefined ? rawTextValue.length * 10 : "none";

    if (isTextValue) {
      const span = document.createElement("span");
      span.innerHTML = assertiveItem;
      firstDiv.appendChild(span);
    }

    if (shouldRenderInput) {
      const classesSelect =
        "h-8 ps-1 text-secondary-300 border border-secondary-500 bg-secondary-900 focus:ring-blue-500 focus:border-secondary-500 dark:border-secondary-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none";
      const select = document.createElement("select");
      select.classList.add(...classesSelect.split(" "));
      select.id = inputId;
      select.name = inputId;
      select.defaultValue = "";
      select.readOnly = true;
      // style
      select.style.width = selectWidth; // Define a largura do elemento
      select.style.maxWidth = "600px";
      select.style.minWidth = "128px";
      firstDiv.appendChild(select);

      select.addEventListener("change", function (e) {
        onChangeHandler(inputId, e.target.value);
      });
      firstDiv.appendChild(select);

      // primeiro option
      const optionSelecione = document.createElement("option");
      optionSelecione.innerHTML = " Selecione ";
      optionSelecione.value = "";
      optionSelecione.disabled = true;
      optionSelecione.selected = true;
      select.appendChild(optionSelecione);

      alternatives.map((alternative, alternativeIndex) => {
        const alternativeId = generateID(questionId, "ALT", alternativeIndex);
        const option = document.createElement("option");
        option.id = alternativeId;
        option.key = alternativeId;
        option.value = alternative;
        option.innerHTML = alternative;
        select.appendChild(option);
      });
    }
  });

  // HandleSubmit + onSubmit dispara esse evento
  const divContainer = document.getElementById(questionId);
  divContainer.addEventListener("RecieveFeedbacks", (e) => {
    const assessmentResponse = e.detail[assessmentIndex];
    for (let i = 0; i < assessmentResponse.length; i++) {
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

export { generateCompleteWithSelectQuestion };
