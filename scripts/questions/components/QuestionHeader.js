import { getQuestionNumber, createElementWithClasses } from "../utils/index.js";

function generateQuestionHeader(question, assertive) {
  const container = createElementWithClasses(
    "div",
    "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800"
  );

  const questionNumberWrapper = createElementWithClasses(
    "span",
    "text-xs mb-3"
  );
  questionNumberWrapper.innerHTML = getQuestionNumber(question.uid);
  container.appendChild(questionNumberWrapper);

  const textbase = createElementWithClasses("span", "text-base");
  if (assertive) {
    textbase.innerHTML = assertive;
  }
  container.appendChild(textbase);

  return container;
}

export { generateQuestionHeader };
