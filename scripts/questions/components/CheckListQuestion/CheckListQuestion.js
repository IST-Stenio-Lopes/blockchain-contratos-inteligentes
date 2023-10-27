import { generateQuestionHeader } from "../QuestionHeader.js";
import { generateQuestionComponent } from "../QuestionComponent.js";
import { generateFeedBack } from "../Feedback.js";
import { generateCheckListOptions } from "./CheckListOptions.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";

function generateCheckListQuestion(question) {
  console.log("Creating new CheckList Question");
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

  // ADD Feedback

  // CheckListOptions
  const checkListOptions = generateCheckListOptions(question);
  rootContainer.appendChild(checkListOptions);
}

export { generateCheckListQuestion };
