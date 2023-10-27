import {
  generateID,
  createElementWithClasses,
  getInputIndexById,
} from "../../utils/index.js";

function generateCheckMark(alternativeId) {
  // container for the checkmark
  const checkContainer = createElementWithClasses("div", "h-20 w-[24px]"); // w-100 removed (só atrapalhando)

  // label for the checkmark
  const label = createElementWithClasses(
    "label",
    "relative flex cursor-pointer justify-center items-center rounded-full h-full"
  );
  label.htmlFor = alternativeId;
  label.setAttribute("data-ripple-dark", "true");
  checkContainer.appendChild(label);

  // the check input
  const input = createElementWithClasses(
    "input",
    "before:content[''] peer relative h-[24px] w-[24px] cursor-pointer appearance-none border-[1.5px] rounded-sm border-black dark:border-gray-600 transition-all before:absolute before:top--2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-600 before:opacity-0 before:transition-opacity checked:bg-transparent checked:before:bg-white hover:before:opacity-10"
  ); // border-blue-gray changed to border-black
  input.id = alternativeId;
  input.name = alternativeId;
  input.type = "checkbox";
  label.appendChild(input);

  // container for the checkbox
  const checkboxContainer = createElementWithClasses(
    "div",
    "pointer-events-none absolute -left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100"
  );
  label.appendChild(checkboxContainer);

  // svg inside the div
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  checkboxContainer.appendChild(svg);

  // path inside the svg
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const classesPath = "fill-primary-400 dark:fill-primary-800".split(" ");
  path.classList.add(...classesPath);
  path.setAttribute(
    "d",
    "M21.3125 0H2.6875C1.1875 0 0 1.1875 0 2.6875V21.3125C0 22.8125 1.1875 24 2.6875 24H21.3125C22.8125 24 24 22.8125 24 21.3125V2.6875C24 1.1875 22.8125 0 21.3125 0ZM21.3125 21.3125H2.6875V2.6875H21.3125V21.3125ZM20 8L18.125 6.125L9.3125 14.875L5.875 11.4375L4 13.375L9.3125 18.6875L20 8Z"
  );
  svg.appendChild(path);

  return checkContainer;
}

export { generateCheckMark };
