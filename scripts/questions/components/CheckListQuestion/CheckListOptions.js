import {
  generateID,
  createElementWithClasses,
  getInputIndexById,
} from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";
import { generateCheckMark } from "./CheckMark.js";
import { generateCheckMarkError } from "./CheckMarkError.js";

// TODO here
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

  /*const alternativeIds = alternatives.map((_, index) => {
        console.log("Scr deus");
        generateID(questionId, "ALT", index);
        console.log(index);
    });*/
  const alternativeIds = {};
  alternatives.forEach((_, index) => {
    alternativeIds[index] = generateID(questionId, "ALT", index);
  });
  console.log(alternativeIds);

  // form
  var form = createElementWithClasses("form", "w-full flex flex-col gap-4");
  //form.addEventListener('submit', handleSubmit);

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
    console.log("Entrou");
    const alternativeId = alternativeIds[alternativeIndex];
    //const isInCurrentAnswer = currentAnswer.indexOf(alternative) !== -1;
    //const shouldShowErrorCheck = isInCurrentAnswer && !alternative.isCorrect;

    /*
        if (shouldShowErrorCheck) {
            const renderCheck = generateCheckMarkError(alternativeId, true);
        } else {
            const renderCheck = generateCheckMark(alternativeId);
        }*/

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

    const div = createElementWithClasses("div", "h-20 w-[24px]"); // TODO VERIFY w-100 removed (só atrapalhando)
    td1.appendChild(div);
    console.log(alternativeId);
    const renderCheck = generateCheckMark(alternativeId);
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

  // TODO ajeitar botao
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
