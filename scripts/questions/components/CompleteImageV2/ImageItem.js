import { createElementWithClasses } from "../../utils/index.js";
import { generateImage } from "../Image.js";

function generateImagemIten(imageSrc) {
  const div = createElementWithClasses("div", "relative w-1/3 z-10");
  const image = generateImage(imageSrc);
  image.alt = "";
  div.appendChild(image);
  return div;
}

export { generateImagemIten };
