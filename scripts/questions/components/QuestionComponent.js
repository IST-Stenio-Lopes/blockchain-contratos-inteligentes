import { generateQuestionSubHeader } from "./QuestionSubHeader.js";
import { generateImage } from "./Image.js";

function generateQuestionComponent(component) {
  switch (component.type) {
    case "TEXT":
      const subHeader = generateQuestionSubHeader(component.value);
      return subHeader;
    case "IMAGE":
      const image = generateImage(component.value);
      return image;
    default:
      return null;
  }
}

export { generateQuestionComponent };
