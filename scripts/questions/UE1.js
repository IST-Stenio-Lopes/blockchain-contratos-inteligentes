import {getQuestionNumber, generateID} from './utils/index.js'
import { UE1Q1, UE1Q2, UE1Q5, UE1Q7 } from './data/questions-ue1.js';

function createElementWithClasses(tag, classes){
	const element = document.createElement(tag);
	const classesElement = classes.split(" ");
	element.classList.add(...classesElement);
	return element;
}
  
function generateCompleteRadioAssertive(assertive, questionId, currentAnswer) {
	const assertiveStructure = assertive.split("<input />");
	const radioAssertiveContainer = createElementWithClasses("div","text-secondary-300 font-semibold inline-block");
  
	assertiveStructure.map((assertiveItem, assertiveIndex) => {
		//const componentKey = generateID(questionId, "ASI", assertiveIndex);
		const shouldRenderInput = assertiveIndex !== assertiveStructure.length - 1; // coloca input qnd n tá na ultima string da lista (pq isso significa que antes dela teve o ultimo input)
		const isTextValue = assertiveItem.length !== 0;
  
		if (isTextValue) {
			const span = document.createElement("span");
			span.innerHTML = assertiveItem;
			radioAssertiveContainer.appendChild(span);
		}
  
		if (shouldRenderInput) {
			const input = createElementWithClasses("input", "w-32 bg-inherit text-secondary-300 font-semibold border-b-2 border-secondary-500 outline-none mx-1 text-center"); // visto. bg-inherit added
			radioAssertiveContainer.appendChild(input);
			//input.id = componentKey;
			//input.name = componentKey;
			input.readOnly = true; // readonly 
			if(currentAnswer){
				input.value = currentAnswer[questionId]; // valor (texto escrito)
			} else {
				input.value = ""; // valor sem texto
			}
		}
});
  
	return radioAssertiveContainer;
}
  
function generateQuestionHeader(question) {	
	const container = createElementWithClasses("div", "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800");
	const questionNumberWrapper = createElementWithClasses("span", "text-xs mb-3");
	container.appendChild(questionNumberWrapper);
	const textbase = createElementWithClasses("span","text-base");
	container.appendChild(textbase);
  
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
	
	console.log(answer);
	let evento = new CustomEvent('evaluationCreated', { detail: evaluation });
	document.dispatchEvent(evento);
  
}
  
function onChange(object, questionId) {
	let div = document.getElementById(questionId);
	var evento = new CustomEvent('currentAnswer', { detail: object }); // evento que ativa botao e radioAssertive para mudar o <input /> do assertive
	div.dispatchEvent(evento);
}
  
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
	};
	
	
	function handleChange(e) {
		const selectedAnswer = alternativesMap[e.target.value].label;
	const id = e.target.name;
	const object = {
		[id]: selectedAnswer
	}
	
		onChange(object, question.uid); // aqui que vai rolar a escolha atual e passo question.uid para o evento ser jogado apenas para a div da minha questão
	};

	function handleSubmit(e) {
		// Prevent the browser from reloading the page.
		e.preventDefault(); 

		const selected = getCurrentSelected(e); 

		if (!selected) return; 

		// const answer = alternativesMap[selected]; - obg alternatives referente aquele id UE1Q1-ALT1
		const evaluation = {
		isCorrect: alternativesMap[selected].isCorrect,
		feedback: alternativesMap[selected].feedback
		}
	
		console.log(evaluation);
		let div = document.getElementById(question.uid); // faz o elemento ser escutado só na div pai da questão
		let evento = new CustomEvent('evaluationCreated', { detail: evaluation });
		div.dispatchEvent(evento);
	
	//return onSubmit(answer);
	};

	// form
	var form = createElementWithClasses("form", "w-full flex flex-col gap-4");
	form.addEventListener('submit', handleSubmit); 
	
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
		const tr = createElementWithClasses("tr", "w-full border-b-[1.5px] border-secondary-800 h-fit"); // border-b-[1.5px] created / h-fit created
		tbody.appendChild(tr);

		// first td for the radio button 
		const td1 = createElementWithClasses("td", "flex items-center justify-center h-full");
		tr.appendChild(td1);
		
		// container for the radio
		const radioContainer = createElementWithClasses("div", "h-20"); // w-100 removed (só atrapalhando)
		td1.appendChild(radioContainer);

		// label for the radio button
		const label = createElementWithClasses("label", "relative flex cursor-pointer justify-center items-center rounded-full h-full");
		label.htmlFor = alternativeId;
		radioContainer.appendChild(label);

		// the radio input
		const input = createElementWithClasses("input", "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-200 dark:border-gray-600 text-primary-400 transition-all before:absolute before:top--90% before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-400 dark:checked:border-primary-800 checked:before:bg-gray-100 dark:checked:before:bg-gray-600 hover:before:opacity-10"); // before:bg-blue-gray-500 not created
		input.id = alternativeId;
		input.name = question.uid;
		input.type = "radio";
		input.value = alternativeId;
		input.addEventListener("change", handleChange);
		label.appendChild(input);

		// container for the icon
		const iconContainer = createElementWithClasses("div", "pointer-events-none absolute top-41% left--20% -translate-y-2/4 -translate-x-2/4 text-primary-400 dark:text-primary-800 opacity-0 transition-opacity peer-checked:opacity-100"); //
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
		circle.setAttribute("fill", "green");
		svg.appendChild(circle);

		// second td for the description of the alternative
		const td2 = createElementWithClasses("td", "p-4 border-l-[1.5px] border-secondary-800 w-10/12 box-border");
		tr.appendChild(td2);
	
		// label for the description of the alternative
		const labelDescription = createElementWithClasses("label", "box-border cursor-pointer font-regular text-base text-start text-gray-200 dark:text-gray-900 break-words flex flex-1"); // font-regular not created
		labelDescription.innerHTML = alternative.label;
		labelDescription.htmlFor = alternativeId;
		td2.appendChild(labelDescription);
	}

	const containerButton = createElementWithClasses("div", "flex justify-center items-center w-full w-full mt-6");
	const submitButton = generateButtonEnviarResposta(question, "secondary");
	containerButton.appendChild(submitButton);

	form.appendChild(containerButton);

	return form;
	
}
  
function generateButtonEnviarResposta(question, variant) {
	// all the classes including those that let the button disabled
	let classesButton = "h-12 rounded-sm border z-10 font-semibold px-14 disabled:cursor-not-allowed";
	if (variant === "primary") {
		classesButton += " border-primary-900 text-primary-900 bg-gray-200";
	} else {
		classesButton += " border-secondary-500 text-secondary-500 bg-secondary-900 disabled:text-secondary-overlay-200 rounded-md disabled:border-secondary-overlay-200 disabled:bg-secondary-overlay-800";
	}

	const submitButton = createElementWithClasses("button", classesButton);
	submitButton.innerHTML = "Enviar resposta";
	submitButton.setAttribute("type","submit"); // to send the form

	submitButton.disabled = true;

	const div = document.getElementById(question.uid);
	div.addEventListener("currentAnswer", (e) => {
	submitButton.disabled = false;
	});

	return submitButton;

}
  
function generateQuestionComponent(component) {
	switch (component.type){
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
  
function generateQuestionSubHeader(subtitle) {
	const div = createElementWithClasses("div", "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800");
	const span = createElementWithClasses("span", "text-base");
	span.innerHTML = subtitle;
	div.appendChild(span);
	return div;
}
  
function generateImage(imageSrc) {
	const image = createElementWithClasses("image", "w-full");
	image.setAttribute("src", imageSrc);
	image.setAttribute("alt", "");
	return image;
}
  
function generateFeedBack(title, subtitle, isCorrect) {
	// main container
	const feedbackContainer = document.createElement("div");

	// title container inside the feedbackContainer
	let classesTitle = isCorrect ? "bg-primary-990 text-primary-400" : "bg-red-950 text-red-300";
	classesTitle += " h-10 flex flex-row items-center justify-between px-8 py-2";
	const titleContainer = createElementWithClasses("div", classesTitle);
	feedbackContainer.appendChild(titleContainer);

	// title inside the title container
	const feedbackTitle = createElementWithClasses("span", "text-lg font-semibold");
	feedbackTitle.innerHTML = title;
	titleContainer.appendChild(feedbackTitle);

	//// the icon
	// svg
	const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgIcon.setAttribute("viewBox", "0 0 24 24");
	svgIcon.setAttribute("fill", "none");
	svgIcon.setAttribute("width", "24");
	svgIcon.setAttribute("height", "24");
	titleContainer.appendChild(svgIcon);

	if (isCorrect) {
		// path
		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("fill-rule", "evenodd");
		path.setAttribute("clip-rule", "evenodd");
		path.setAttribute("d", "M20.9571 6.04289C21.3476 6.43342 21.3476 7.06658 20.9571 7.45711L10.4571 17.9571C10.0666 18.3476 9.43342 18.3476 9.04289 17.9571L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.75 15.8358L19.5429 6.04289C19.9334 5.65237 20.5666 5.65237 20.9571 6.04289Z");
		path.setAttribute("fill", "#436900");
		svgIcon.appendChild(path);
	} else {
		// path 1 inside the svg
		const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path1.setAttribute("fill-rule", "evenodd");
		path1.setAttribute("clip-rule", "evenodd");
		path1.setAttribute("d", "M19.4571 4.54289C19.8476 4.93342 19.8476 5.56658 19.4571 5.95711L5.95711 19.4571C5.56658 19.8476 4.93342 19.8476 4.54289 19.4571C4.15237 19.0666 4.15237 18.4334 4.54289 18.0429L18.0429 4.54289C18.4334 4.15237 19.0666 4.15237 19.4571 4.54289Z");
		path1.setAttribute("fill", "currentColor");
		svgIcon.appendChild(path1);

		// path 2 inside the svg
		const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path2.setAttribute("fill-rule", "evenodd");
		path2.setAttribute("clip-rule", "evenodd");
		path2.setAttribute("d", "M4.54289 4.54289C4.93342 4.15237 5.56658 4.15237 5.95711 4.54289L19.4571 18.0429C19.8476 18.4334 19.8476 19.0666 19.4571 19.4571C19.0666 19.8476 18.4334 19.8476 18.0429 19.4571L4.54289 5.95711C4.15237 5.56658 4.15237 4.93342 4.54289 4.54289Z");
		path2.setAttribute("fill", "currentColor");
		svgIcon.appendChild(path2);

	}

	// subtitle container inside the feedbackContainer
	let classesSubtitle = isCorrect ? "border-primary-800" : "border-red-500";
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
	console.log("Creating new Radio Question");
	let feedbackElement = null;
  
	const rootContainer = document.getElementById(question.uid); 
  
	// root container not found
	if (!rootContainer) return; 
	
	// header
	const header = generateQuestionHeader(question); 
	rootContainer.appendChild(header);
  
	// radioAssertive
	let radioAssertive = generateCompleteRadioAssertive(question.assertive, question.uid, null); // iniciamente null
	header.appendChild(radioAssertive);
	
	rootContainer.addEventListener("currentAnswer", (e) => {
	    radioAssertive.remove(); // always remove the actual one to create the one with the input
	    radioAssertive = generateCompleteRadioAssertive(question.assertive, question.uid, e.detail); // create the one passing the currentAnswer
	    header.appendChild(radioAssertive);
	});
	
	// Components (Image / SubHeader)
	question.components.map((component, componentIndex) => {
	    console.log(" -> Adding Component");
	    const questionComponent = generateQuestionComponent(component);
	    rootContainer.appendChild(questionComponent);
	});
  
	// Feedback
	rootContainer.addEventListener('evaluationCreated', function (e) { // HandleSubmit + onSubmit dispara esse evento
		const evaluation = e.detail;
		const feedback = generateFeedBack(evaluation.feedback.title, evaluation.feedback.subtitle, evaluation.isCorrect);
	    if (feedbackElement){
		  feedbackElement.remove(); // if an feedback already exists here it is removed
	    }
	    feedbackElement = feedback;
		rootContainer.insertBefore(feedbackElement, radioOptions); // feeback put before the radioOptions
	}); 
  
	// radioOptions
	const radioOptions = generateRadioOptions(question);
	rootContainer.appendChild(radioOptions);
}
  
  
generateRadioQuestion(UE1Q1); 
generateRadioQuestion(UE1Q2);
generateRadioQuestion(UE1Q5);
generateRadioQuestion(UE1Q7);

 /* 
 done: (apto a revisao)
  generateQuestionHeader
  generateCompleteRadioAssertive
  generateRadioOptions
  generateQuestionComponent
  generateImage
  generateButtonEnviarResposta
  generateFeedBack
*/