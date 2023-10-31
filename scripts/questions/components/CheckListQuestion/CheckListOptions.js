import {
  generateID,
  createElementWithClasses,
  getInputIndexById,
} from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";
import { generateCheckMark } from "./CheckMark.js";
import { generateCheckMarkError } from "./CheckMarkError.js";

function generateCheckListOptions(question) {
  const {
    assertive,
    classifications,
    alternatives,
    components,
    descriptions,
    uid: questionId,
    correctFeedback,
    incorrectFeedback,
    allowMultipleSelect,
  } = question;

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page.
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const checkedValues = Object.keys(formJson);

    const answer = alternatives.filter(function (_, checkedIndex) {
      const alternativeId = alternativeIds[checkedIndex];
      return checkedValues.indexOf(alternativeId) !== -1;
    });

    let div = document.getElementById(questionId); // faz o elemento ser escutado só na div pai da questão
    let evento = new CustomEvent("evaluationCreated", { detail: answer });
    div.dispatchEvent(evento);
  };

  const alternativeIds = {};
  alternatives.forEach((_, index) => {
    alternativeIds[index] = generateID(questionId, "ALT", index);
  });

  // form
  var form = createElementWithClasses("form", "w-full flex flex-col gap-4");
  form.addEventListener('submit', handleSubmit);

  // table inside the form for alternatives
  const alternativesTable = createElementWithClasses(
    "table",
    "w-full bg-gray-overlay-120"
  );
  form.appendChild(alternativesTable);

  // tbody inside the table
  const tbody = document.createElement("tbody");
  alternativesTable.appendChild(tbody);

  alternatives.map((alternative, alternativeIndex) => {
    const alternativeId = alternativeIds[alternativeIndex];
    const rootContainer = document.getElementById(questionId);
    rootContainer.addEventListener("evaluationCreated", function (e) {
      const answer = e.detail;
      const isInCurrentAnswer = answer.indexOf(alternative) !== -1;
      const shouldShowErrorCheck = isInCurrentAnswer && !alternative.isCorrect;
      if (shouldShowErrorCheck) {
        renderCheck.remove(); 
        renderCheck = generateCheckMarkError(alternativeId);
        div.appendChild(renderCheck);
      }

    });

    // tr for each alternative
    const tr = createElementWithClasses(
      "tr",
      "w-full border-b-[1.5px] border-secondary-800 h-fit"
    ); // border-b-[1.5px] created / h-fit created
    tbody.appendChild(tr);

    // first td for the check mark
    const td1 = createElementWithClasses(
      "td",
      "flex items-center justify-center h-full"
    );
    tr.appendChild(td1);

    const div = createElementWithClasses("div", "h-20 w-[24px]");
    td1.appendChild(div);
  
    let renderCheck = generateCheckMark(alternativeId);
    div.appendChild(renderCheck);

    // second td for the description of the alternative
    const td2 = createElementWithClasses(
      "td",
      "p-4 border-l-[1.5px] border-secondary-800 w-10/12 box-border"
    );
    tr.appendChild(td2);

    // label for the description of the alternative
    const labelDescription = createElementWithClasses(
      "label",
      "box-border cursor-pointer font-regular text-base text-start text-gray-200 dark:text-gray-900 break-words flex flex-1"
    ); // font-regular not created
    labelDescription.innerHTML = alternative.label;
    labelDescription.htmlFor = alternativeId;
    td2.appendChild(labelDescription);
  });

  const containerButton = createElementWithClasses(
    "div",
    "flex justify-center items-center w-full w-full mt-6"
  );
  const submitButton = generateButtonEnviarResposta(questionId, "secondary");
  containerButton.appendChild(submitButton);
  form.appendChild(containerButton);

  return form;
}

export { generateCheckListOptions };
