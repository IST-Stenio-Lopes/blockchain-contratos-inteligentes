import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateFeedBack } from "../Feedback.js";
import { generateCheckListOptions } from "./CheckListOptions.js";
import { generateID } from "../../utils/index.js";

function generateCheckListQuestion(question) {
  let feedbackCount = null; // quantidade de feedbacks presentes
  const rootContainer = document.getElementById(question.uid);

  // root container not found
  if (!rootContainer) return;

  // header
  const header = generateQuestionHeader(question, question.assertive);
  rootContainer.appendChild(header);

  // Components (Image / SubHeader)
  question.components.map((component, componentIndex) => {
    const questionComponent = generateQuestionComponent(component);
    rootContainer.appendChild(questionComponent);
  });
  // Feedback
  rootContainer.addEventListener("evaluationCreated", function (e) {
    // remover feedbacks se existirem, e transformar feedbackElement pra 0
    let i = 0;
    for (i = 0; i < feedbackCount; i++) {
      let feedbackId = generateID(question.uid, "EVAL", i);
      let feedbackElement = document.getElementById(feedbackId);
      feedbackElement.remove();
    }
    feedbackCount = 0;
    // HandleSubmit + onSubmit dispara esse evento
    const answer = e.detail;
    answer.map((checked, checkedIndex) => {
      const feedbackId = generateID(question.uid, "EVAL", checkedIndex);
      const feedback = generateFeedBack(
        checked.feedback.title,
        checked.feedback.subtitle,
        checked.isCorrect
      );
      feedback.id = feedbackId;
      feedbackCount += 1; // adicionei mais um feedback
      const feedbackElement1 = feedback;
      rootContainer.insertBefore(feedbackElement1, checkListOptions); // feeback put before the radioOptions
    });
  });

  // CheckListOptions
  const checkListOptions = generateCheckListOptions(question);
  rootContainer.appendChild(checkListOptions);
}

export { generateCheckListQuestion };
