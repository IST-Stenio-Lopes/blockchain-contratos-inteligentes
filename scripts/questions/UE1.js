import {getQuestionNumber, generateID} from './utils'
//import {} from '../../images/icons/'
import { UE1Q1 } from './data/questions-ue1';


function createElementWithClasses(tag, classes){
	const element = document.createElement(tag);
	const classesElement = classes.split(" ");
	element.classList.add(...classesElement);
	return element;
}


function generateQuestionHeader(question) {	
	const container = createElementWithClasses("div", "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800");
	const questionNumberWrapper = document.createElement('span'); 

	questionNumberWrapper.innerHTML = getQuestionNumber(question.uid); 

	container.appendChild(questionNumberWrapper); 

	return container; 
}

/// verificar função
function onSubmit(answer) {
	const evaluation = {
		isCorrect: answer.isCorrect,
		feedback: answer.feedback
	}

	var evento = new Event('evaluationCreated', { evaluation: evaluation });
	document.dispatchEvent(evento);

	return evaluation;
}

function generateRadioOptions(question) {

	const alternativesMap = {};
	question.alternatives.forEach((alternative, i) => {
    	const alternativeId = generateID(question.uid, "ALT", i);
    	alternativesMap[alternativeId] = alternative;
	});

	function getCurrentSelected(e) {
		const form = e.currentTarget; // e- form atual, e é gerando qnd o user envia o formulario (form enviado)
		const formData = new FormData(form);
		const formJson = {};
	  
		formData.forEach((value, key) => {
		  formJson[key] = value; // transformando pro formato json
		});
	  
		return formJson[question.uid]; // o input do radio que tem o nome question.uid
	};
	
	function handleSubmit(e) {
		// Prevent the browser from reloading the page.
		e.preventDefault();

		const selected = getCurrentSelected(e); //form sendo enviado (names dos inputs com seus valores)
		// select vai retornar ex UE1Q1-ALT1

		if (!selected) return; 

		const answer = alternativesMap[selected]; // vai pegar o objetoAlternative referente aquele id UE1Q1-ALT1

		return onSubmit(answer); // fazer onSubmit ainda - no react vai criar o evaluation, e se evaluation existir se cria a div de feedback
	};
	
	function handleChange(e) {
		const selectedAnswer = alternativesMap[e.target.value].label;
		onChange({ [question.uid]: selectedAnswer }); // aqui que vai rolar a escolha atual
	};

	// form
	const form = createElementWithClasses("form", "w-full flex flex-col gap-4");
	rootContainer.appendChild(form);
	form.addEventListener('submit', handleSubmit); // ver function

	// table inside the form for alternatives 
	const alternativesTable = createElementWithClasses("table", "w-full bg-gray-overlay-120");
	form.appendChild(alternativesTable);

	// tbody inside the table
	const tbody = document.createElement("tbody");
	alternativesTable.appendChild(tbody);

	for (let i = 0; i < question.alternatives.length; i++) {
		const alternative = question.alternatives[i];
		const alternativeId = generateID(question.uid, "ALT", i);

		// tr for each alternative
		const tr = createElementWithClasses("tr", "w-full border-b-[1.5px] border-secondary-800 h-fit"); // border-b-[1.5px] / h-fit not found
		tbody.appendChild(tr);

		// first td for the radio button 
		const td1 = document.createElement("td");
		tr.appendChild(td1);
		
		// container for the radio
		const radioContainer = createElementWithClasses("div", "h-20 w-100"); // w-100 created
		td1.appendChild(radioContainer);

		// label for the radio button
		const label = createElementWithClasses("label", "relative flex cursor-pointer justify-center items-center rounded-full h-full");
		label.htmlFor = alternativeId;
		radioContainer.appendChild(label);

		// the radio input
		const input = createElementWithClasses("input", "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-200 dark:border-gray-600 text-primary-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-400 dark:checked:border-primary-800 checked:before:bg-gray-100 dark:checked:before:bg-gray-600 hover:before:opacity-10"); // not seen entirely
		input.id = alternativeId;
		input.name = question.uid;
		input.type = "radio";
		input.value = alternativeId;
		input.addEventListener("change", handleChange); // TODO add function
		label.appendChild(input);

		// container for the icon
		const iconContainer = createElementWithClasses("div", "pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary-400 dark:text-primary-800 opacity-0 transition-opacity peer-checked:opacity-100");
		label.appendChild(iconContainer);

		// the circle with svg
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		const classesSvg = "h-3.5 w-3.5".split(" ");
		svg.classList.add(...classesSvg);
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svg.setAttribute("viewBox", "0 0 16 16");
		svg.setAttribute("fill", "currentColor");
		iconContainer.appendChild(svg);

		const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("data-name", "ellipse");
    	circle.setAttribute("cx", "8");
    	circle.setAttribute("cy", "8");
    	circle.setAttribute("r", "8");
    	svg.appendChild(circle);

		// second td for the description of the alternative
		const td2 = createElementWithClasses("td", "p-4 border-l-[1.5px] border-secondary-800 w-10/12 box-border");
		tr.appendChild(td2);
	
		// label for the description of the alternative
		const labelDescription = createElementWithClasses("label", "box-border cursor-pointer font-regular text-base text-start text-gray-200 dark:text-gray-900 break-words flex flex-1");
		labelDescription.innerHTML = alternative.label;
		labelDescription.htmlFor = alternativeId;
		td2.appendChild(labelDescription);
	}

	const submitButton = generateButtonEnviarResposta(form);
	form.appendChild(submitButton);

	return form;
}

function generateButtonEnviarResposta(form) {

	const containerButton = createElementWithClasses("div", "flex justify-center items-center w-full w-full mt-6");

	const submitButton = createElementWithClasses("button", "border-secondary-500 text-secondary-500 bg-secondary-900 disabled:text-secondary-overlay-200 rounded-md disabled:border-secondary-overlay-200 disabled:bg-secondary-overlay-800");
    submitButton.innerHTML = "Enviar resposta";

	/// TODO disabled

	submitButton.addEventListener("click", () => {
        if (form) {
            form.submit(); // Submit the form
        }
    });

  return containerButton;

}


function generateFeedBack(title, subtitle, isCorrect){
	// main container
	const feedbackContainer = document.createElement("div");

	// title container inside the feedbackContainer
	const classesTitle = isCorrect ? "bg-primary-990 text-primary-400" : "bg-red-950 text-red-300";
	classesTitle += " h-10 flex flex-row items-center justify-between px-8 py-2";
	const titleContainer = createElementWithClasses("div", classesTitle);
	feedbackContainer.appendChild(titleContainer);

    // title inside the title container
	const feedbackTitle = createElementWithClasses("span", "text-lg font-semibold");
	feedbackTitle.innerHTML = title;
	titleContainer.appendChild(feedbackTitle);

	///////////// TODO add ICON /////////////////

	// subtitle container inside the feedbackContainer
	const classesSubtitle = isCorrect ? "border-primary-800" : "border-red-500";
	classesSubtitle += " border px-8 py-2 bg-gray-overlay-120";
	const subtitleContainer = createElementWithClasses("div", classesSubtitle);
	feedbackContainer.appendChild(subtitleContainer);

	// subtitle inside the subtitle container
	const feedbackSubtitle = createElementWithClasses("span", "font-medium text-lg text-gray-200 dark:text-gray-900");
	subtitleContainer.appendChild(feedbackSubtitle);
	feedbackSubtitle.innerHTML = subtitle;

	return feedbackContainer;
}

function generateRadioQuestion(question) {
	const rootContainer = document.getElementById(question.uid); 
	
	// root container not found
	if (!rootContainer) return; 

	const header = generateQuestionHeader(question); 
	rootContainer.appendChild(header);

	document.addEventListener('evaluationCreated', function (event) {
		const evaluation = event.evaluation;
		const feedback = generateFeedBack(evaluation.feedback.title, evaluation.feedback.subtitle, evaluation.isCorrect);
		rootContainer.appendChild(feedback); // verificar
	});

	const radioOptions = generateRadioOptions(question);
	rootContainer.appendChild(radioOptions);
}


generateRadioQuestion(UE1Q1) // tag still not created