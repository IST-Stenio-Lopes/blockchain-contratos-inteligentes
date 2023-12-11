import {
  createElementWithClasses,
  generateID,
} from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";

function generateClassificationOptions(question) {
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

  let currentAnswer = {};
  function setCurrentAnswer(updateAnswer) {
    currentAnswer = updateAnswer;
  }

  function checkResponses(userAnswer, correctAnswer) {
    const isCorrect = correctAnswer.every(
      (answer, ansIndex) => answer === userAnswer[ansIndex]
    );
    const feedback = isCorrect ? correctFeedback : incorrectFeedback;
    return { isCorrect, feedback };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Converte o FormData em um objeto JavaScript
    const userAnswer = {};
    for (const [key, value] of formData.entries()) {
      userAnswer[key] = value;
    }

    // Converte os valores do objeto em um array
    const userAnswerArray = Object.values(userAnswer);

    const correctAnswer = Object.values(classifications); // resposta do obj question

    const result = checkResponses(userAnswerArray, correctAnswer); // verificar se sao iguais

    let div = document.getElementById(questionId); // faz o elemento ser escutado só na div pai da questão
    let evento = new CustomEvent("evaluationCreated", { detail: result });
    div.dispatchEvent(evento);
  }

  function canSubmit(questionId) {
    const sizeOfResponses = Object.values(currentAnswer).length;
    const sizeOfCorrectAnswer = Object.values(classifications).length;
    if (sizeOfCorrectAnswer == sizeOfResponses) {
      let div2 = document.getElementById(questionId);
      var evento2 = new CustomEvent("canSubmit"); // evento que ativa botao e radioAssertive para mudar o <input /> do assertive
      div2.dispatchEvent(evento2);
    }
  }

  function onChangeHandler(classificationKey, alternativeValue) {
    let updateAnswer = { ...currentAnswer };
    updateAnswer[classificationKey] = alternativeValue;
    setCurrentAnswer(updateAnswer);
    /*
		let div = document.getElementById(questionId);
		var evento = new CustomEvent('currentAnswer', { detail: object }); // evento que ativa botao e radioAssertive para mudar o <input /> do assertive
		div.dispatchEvent(evento);*/
  }

  // form
  const form = createElementWithClasses("form", "flex flex-col gap-4");
  //form.id = generateID(questionId, "FORM", 1);
  form.addEventListener("submit", handleSubmit);

  // table
  const table = createElementWithClasses("table", "w-full bg-gray-overlay-120");
  form.appendChild(table);

  // thead
  const thead = document.createElement("thead");
  table.appendChild(thead);

  // tr
  const tr = createElementWithClasses(
    "tr",
    "bg-secondary-950 h-16 text-base border-b-[1.5px] border-secondary-800"
  );
  thead.appendChild(tr);

  descriptions.map((header, headerIndex) => {
    const th = createElementWithClasses(
      "th",
      "font-semibold text-lg text-center w-1/2 text-secondary-300 border-r-[1.5px] border-secondary-800 last:border-r-0"
    );
    th.key = questionId + "H" + headerIndex;
    th.innerHTML = header.toUpperCase();
    tr.appendChild(th);
  });

  // tbody
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  Object.keys(classifications).map(
    (classification, classificationIndex) => {
      const classificationId = generateID(
        questionId,
        "CLA",
        classificationIndex
      );
      const tr2 = createElementWithClasses(
        "tr",
        "w-full border-b-[1.5px] border-secondary-800"
      );
      tr2.key = classificationId;
      tbody.appendChild(tr2);

      const td = createElementWithClasses(
        "td",
        "p-2 font-regular h-auto text-base text-left text-gray-200 dark:text-gray-900 border-r-[1.5px] border-secondary-800"
      );
      td.innerHTML = classification;
      tr2.appendChild(td);

      const td2 = createElementWithClasses(
        "td",
        "p-2 border-secondary-800 box-border"
      );
      tr2.appendChild(td2);

      const div = createElementWithClasses(
        "div",
        "flex items-center justify-center"
      );
      td2.appendChild(div);

      const select = createElementWithClasses(
        "select",
        "block w-3/5 p-2 text-lg text-secondary-300 border border-secondary-500 bg-secondary-900 focus:ring-blue-500 focus:border-secondary-500 dark:border-secondary-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      );
      select.name = classificationId;
      select.id = classificationId;
      select.defaultValue = "";
      select.value = currentAnswer[classificationId]; // VER URGENTE
      //select.addEventListener("currentAnswerMudou", function (){
      //    console.log("CURRENT ANSWER:");
      //    console.log(currentAnswer);
      //    select.value = currentAnswer[classificationId];
      //})
      //console.log("CURRENT ANSWER:");
      //console.log(currentAnswer);
      select.addEventListener("change", function (e) {
        //optionSelecione.disabled = true;
        onChangeHandler(classificationId, e.target.value);
        canSubmit(questionId);
      });
      div.appendChild(select);

      // primeiro option
      const optionSelecione = document.createElement("option");
      optionSelecione.innerHTML = " Selecione ";
      optionSelecione.value = "";
      optionSelecione.disabled = true;
      optionSelecione.selected = true;
      select.appendChild(optionSelecione);

      alternatives.map((alternative, alternativeIndex) => {
        const alternativeId = generateID(questionId, "ALT", alternativeIndex);

        ////// ESSA PARTE DO CODIGO DISABLED QUE TA ATRAPALHANDO TUDO NA SUBMISSAO DO FORM !!!!!! //////////////////

        //let disabled = allowMultipleSelect ? false : Object.values(currentAnswer).includes(alternative);
        //select.addEventListener("change", function() {
        //	console.log("Eita mds");
        //	disabled = allowMultipleSelect ? false : Object.values(currentAnswer).includes(alternative);
        //	console.log(Object.values(currentAnswer).includes(alternative));
        //	option.disabled = disabled;
        //	console.log(currentAnswer);
        //})
        const option = document.createElement("option");
        option.id = alternativeId;
        option.key = alternativeId;
        option.value = alternative;
        //option.disabled = disabled;
        option.innerHTML = alternative;
        select.appendChild(option);
      });
    }
  );
  const containerButton = createElementWithClasses(
    "div",
    "flex justify-center items-center w-full w-full mt-6"
  );
  const submitButton = generateButtonEnviarResposta(questionId, "secondary");
  containerButton.appendChild(submitButton);
  form.appendChild(containerButton);
  submitButton.disabled = true;
  const div3 = document.getElementById(questionId);
  div3.addEventListener("canSubmit", function (e) {
    submitButton.disabled = false;
  });

  return form;
}

export { generateClassificationOptions };
