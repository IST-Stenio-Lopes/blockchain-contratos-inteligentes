import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateCompleteRadioAssertive } from "./CompleteRadioAssertive.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateFeedBack } from "../Feedback.js";
import { generateRadioOptions } from "./RadioOptions.js";

function generateRadioQuestion(question) {
  let feedbackElement = null;

  const rootContainer = document.getElementById(question.uid);

  // root container not found
  if (!rootContainer) return;

  // header
  const header = generateQuestionHeader(question, null);
  rootContainer.appendChild(header);

  // radioAssertive
  let radioAssertive = generateCompleteRadioAssertive(
    question.assertive,
    question.uid,
    null
  ); // iniciamente null
  header.appendChild(radioAssertive);

  rootContainer.addEventListener("currentAnswer", (e) => {
    radioAssertive.remove(); // always remove the actual one to create the one with the input
    radioAssertive = generateCompleteRadioAssertive(
      question.assertive,
      question.uid,
      e.detail
    ); // create the one passing the currentAnswer
    header.appendChild(radioAssertive);
  });

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
    rootContainer.insertBefore(feedbackElement, radioOptions); // feeback put before the radioOptions
  });

  // radioOptions
  const radioOptions = generateRadioOptions(question);
  rootContainer.appendChild(radioOptions);
}

export { generateRadioQuestion };
