import { generateQuestionHeader } from "./QuestionHeader.js";
import { generateQuestionComponent } from "./QuestionComponent.js";
import { generateFeedBack } from "./Feedback.js";
import { generateClassificationOptions } from "./ClassificationQuestion/ClassificationOptions.js";

function generateCompleteQuestion(question) {
  const rootContainer = document.getElementById(question.uid);

  // root container not found
  if (!rootContainer) return;

  // header
  const header = generateQuestionHeader(question, question.assertive);
  rootContainer.appendChild(header);

  // Components (Image / SubHeader)
  question.components.map((component, componentIndex) => {
    console.log(" -> Adding Component");
    const questionComponent = generateQuestionComponent(component);
    rootContainer.appendChild(questionComponent);
  });
}

export { generateCompleteQuestion };
