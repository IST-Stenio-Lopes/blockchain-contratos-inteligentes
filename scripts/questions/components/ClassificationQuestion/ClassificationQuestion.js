import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateFeedBack } from "../Feedback.js";
import { generateClassificationOptions } from "./ClassificationOptions.js";

function generateClassificationQuestion(question) {
  //let currentAnswer = {}

  let feedbackElement = null;

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
    // HandleSubmit + onSubmit dispara esse evento
    const evaluation = e.detail;
    const feedback = generateFeedBack(
      evaluation.feedback.title,
      evaluation.feedback.subtitle,
      evaluation.isCorrect
    );
    if (feedbackElement) {
      feedbackElement.remove(); // if an feedback already exists here it is removed
    }
    feedbackElement = feedback;
    rootContainer.insertBefore(feedbackElement, classificationOptions); // feeback put before the radioOptions
  });

  // classificationOptions
  const classificationOptions = generateClassificationOptions(question);
  rootContainer.appendChild(classificationOptions);
}

export { generateClassificationQuestion };
