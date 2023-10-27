import { createElementWithClasses } from "../utils/index.js";

function generateQuestionSubHeader(subtitle) {
  const div = createElementWithClasses(
    "div",
    "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800"
  );
  const span = createElementWithClasses("span", "text-base");
  span.innerHTML = subtitle;
  div.appendChild(span);
  return div;
}

export { generateQuestionSubHeader };
