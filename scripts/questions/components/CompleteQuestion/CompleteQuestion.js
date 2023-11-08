import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateCompleteWithBoxAssessment } from "./CompleteWithBoxesAssessment.js";
import { createElementWithClasses, generateID } from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";

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

function generateCompleteQuestion(question) {
  const {
    uid: questionId,
    assertive,
    components,
    assessments,
    highlight,
  } = question;

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

    if (!evaluation.feedbacks) {
      // EvaluationByAssessment
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
    } else {
      if (evaluation.feedbacks) {
        // EvaluationBySingleAnswer
        for (let i = 0; i < evaluation.feedbacks.length; i++) {
          if (response[i] === correctAnswer[i]) {
            objeto = {
              isCorrect: true,
              feedback: evaluation.feedbacks[i].correct,
            };
            feedbackResponse.push(objeto);
          } else {
            objeto = {
              isCorrect: false,
              feedback: evaluation.feedbacks[i].incorrect,
            };
            feedbackResponse.push(objeto);
          }
        }
        return feedbackResponse;
      }
    }
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
      highlight,
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

export { generateCompleteQuestion };
