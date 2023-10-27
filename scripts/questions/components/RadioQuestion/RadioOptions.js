import {
  generateID,
  createElementWithClasses,
  getInputIndexById,
} from "../../utils/index.js";
import { generateButtonEnviarResposta } from "../ButtonEnviarResposta.js";

function generateRadioOptions(question) {
  const alternativesMap = {};
  question.alternatives.forEach((alternative, i) => {
    const alternativeId = generateID(question.uid, "ALT", i);
    alternativesMap[alternativeId] = alternative;
  });

  function getCurrentSelected(e) {
    const form = e.currentTarget; // e- form atual, e é gerado qnd o user envia o formulario (form enviado)
    const formData = new FormData(form);
    const formJson = {};

    formData.forEach((value, key) => {
      formJson[key] = value; // transformando pro formato json
    });

    return formJson[question.uid]; // o input do radio que tem o nome question.uid
  }

  function onChange(object, questionId) {
    let div = document.getElementById(questionId);
    var evento = new CustomEvent("currentAnswer", { detail: object }); // evento que ativa botao e radioAssertive para mudar o <input /> do assertive
    div.dispatchEvent(evento);
  }

  function handleChange(e) {
    const selectedAnswer = alternativesMap[e.target.value].label;
    const id = e.target.name;
    const object = {
      [id]: selectedAnswer,
    };

    onChange(object, question.uid); // aqui que vai rolar a escolha atual e passo question.uid para o evento ser jogado apenas para a div da minha questão
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page.
    e.preventDefault();

    const selected = getCurrentSelected(e);

    if (!selected) return;

    // const answer = alternativesMap[selected]; - obg alternatives referente aquele id UE1Q1-ALT1
    const evaluation = {
      isCorrect: alternativesMap[selected].isCorrect,
      feedback: alternativesMap[selected].feedback,
    };

    let div = document.getElementById(question.uid); // faz o elemento ser escutado só na div pai da questão
    let evento = new CustomEvent("evaluationCreated", { detail: evaluation });
    div.dispatchEvent(evento);

    //return onSubmit(answer);
  }

  // form
  var form = createElementWithClasses("form", "w-full flex flex-col gap-4");
  form.addEventListener("submit", handleSubmit);

  // table inside the form for alternatives
  const alternativesTable = createElementWithClasses(
    "table",
    "w-full bg-gray-overlay-120"
  );
  form.appendChild(alternativesTable);

  // tbody inside the table
  const tbody = document.createElement("tbody");
  alternativesTable.appendChild(tbody);

  for (let i = 0; i < question.alternatives.length; i++) {
    const alternative = question.alternatives[i];
    const alternativeId = generateID(question.uid, "ALT", i);

    // tr for each alternative
    const tr = createElementWithClasses(
      "tr",
      "w-full border-b-[1.5px] border-secondary-800 h-fit"
    ); // border-b-[1.5px] created / h-fit created
    tbody.appendChild(tr);

    // first td for the radio button
    const td1 = createElementWithClasses(
      "td",
      "flex items-center justify-center h-full"
    );
    tr.appendChild(td1);

    // container for the radio
    const radioContainer = createElementWithClasses("div", "h-20"); // w-100 removed (só atrapalhando)
    td1.appendChild(radioContainer);

    // label for the radio button
    const label = createElementWithClasses(
      "label",
      "relative flex cursor-pointer justify-center items-center rounded-full h-full"
    );
    label.htmlFor = alternativeId;
    radioContainer.appendChild(label);

    // the radio input
    const input = createElementWithClasses(
      "input",
      "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-200 dark:border-gray-600 text-primary-400 transition-all before:absolute before:top--90% before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-400 dark:checked:border-primary-800 checked:before:bg-gray-100 dark:checked:before:bg-gray-600 hover:before:opacity-10"
    ); // before:bg-blue-gray-500 not created
    input.id = alternativeId;
    input.name = question.uid;
    input.type = "radio";
    input.value = alternativeId;
    input.addEventListener("change", handleChange);
    label.appendChild(input);

    // container for the icon
    const iconContainer = createElementWithClasses(
      "div",
      "pointer-events-none absolute top-41% left--20% -translate-y-2/4 -translate-x-2/4 text-primary-400 dark:text-primary-800 opacity-0 transition-opacity peer-checked:opacity-100"
    ); //
    label.appendChild(iconContainer);

    // the circle with svg
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const classesSvg = "h-3.5 w-3.5".split(" ");
    svg.classList.add(...classesSvg);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("fill", "currentColor");
    iconContainer.appendChild(svg);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("data-name", "ellipse");
    circle.setAttribute("cx", "8");
    circle.setAttribute("cy", "8");
    circle.setAttribute("r", "8");
    circle.setAttribute("fill", "green");
    svg.appendChild(circle);

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
  }

  const containerButton = createElementWithClasses(
    "div",
    "flex justify-center items-center w-full w-full mt-6"
  );
  const submitButton = generateButtonEnviarResposta(question, "secondary");
  containerButton.appendChild(submitButton);
  submitButton.disabled = true;
  const div = document.getElementById(question.uid);
  div.addEventListener("currentAnswer", (e) => {
    submitButton.disabled = false;
  });

  form.appendChild(containerButton);

  return form;
}

export { generateRadioOptions };
