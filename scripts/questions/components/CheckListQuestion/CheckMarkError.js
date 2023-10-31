import { createElementWithClasses } from "../../utils/index.js";

function generateCheckMarkError(alternativeId) {
  // container for the checkmark error
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
    "before:content[''] peer relative h-[24px] w-[24px] rounded-sm cursor-pointer appearance-none border-[1.5px] border-black dark:border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-600 before:opacity-0 before:transition-opacity checked:border-red-500 dark:checked:border-red-500 checked:bg-transparent checked:before:bg-white hover:before:opacity-10"
  );
  input.id = alternativeId;
  input.name = alternativeId;
  input.type = "checkbox";
  input.checked = true; // defaultChecked
  label.appendChild(input);

  // container for the checkbox
  const checkboxContainer = createElementWithClasses(
    "div",
    "pointer-events-none absolute left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100"
  );
  label.appendChild(checkboxContainer);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "32");
  svg.setAttribute("height", "32");
  svg.setAttribute("viewBox", "0 0 32 32");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  checkboxContainer.appendChild(svg);

  const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  mask.setAttribute("id", "mask0_586_355");
  mask.setAttribute("maskUnits", "userSpaceOnUse");
  mask.setAttribute("x", "0");
  mask.setAttribute("y", "0");
  mask.setAttribute("width", "32");
  mask.setAttribute("height", "32");
  svg.appendChild(mask);

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("width", "32");
  rect.setAttribute("height", "32");
  rect.setAttribute("fill", "#D9D9D9");
  mask.appendChild(rect);

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("mask", "url(#mask0_586_355)");
  svg.appendChild(g);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M11.2007 22.6666L16.0006 17.8666L20.8006 22.6666L22.6673 20.8L17.8673 16L22.6673 11.2L20.8006 9.33331L16.0006 14.1333L11.2007 9.33331L9.33398 11.2L14.134 16L9.33398 20.8L11.2007 22.6666Z"
  );
  path.setAttribute("fill", "#DE3730");
  g.appendChild(path);

  return checkContainer;
}

export { generateCheckMarkError };
