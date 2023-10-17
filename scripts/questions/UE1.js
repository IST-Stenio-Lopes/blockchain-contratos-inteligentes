import {getQuestionNumber, generateID} from './utils'
import { UE1Q1 } from './data/questions-ue1';



function generateQuestionHeader(question) {	
	const container = document.createElement('div'); 
	const questionNumberWrapper = document.createElement('span'); 

	const classes = "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800".split(" "); 
	console.log(classes)

	container.classList.add(...classes) // add(...classes)?
	questionNumberWrapper.innerHTML = getQuestionNumber(question.uid); 

	container.appendChild(questionNumberWrapper); 

	return container; 
}

function generateRadioQuestion(question) {
	const rootContainer = document.getElementById(question.uid); 
	
	// root container not found
	if (!rootContainer) return; 

	const header = generateQuestionHeader(question); 
	rootContainer.appendChild(header);

	// form
	const form = document.createElement("form");
	const classesForm = "w-full flex flex-col gap-4".split(" ");
    form.classList.add(...classesForm); 
	rootContainer.appendChild(form);
	form.addEventListener('submit', handleSubmit); // TODO add function

	// table inside the form for alternatives 
	const alternativesTable = document.createElement("table");
	const classesTable = "w-full bg-gray-overlay-120".split(" ")
	alternativesTable.classList.add(...classesTable);
	form.appendChild(alternativesTable);

	// tbody inside the table
	const tbody = document.createElement("tbody");
	alternativesTable.appendChild(tbody);

	for (let i = 0; i < question.alternatives.length; i++) {
		const alternative = question.alternatives[i];
		const alternativeId = generateID(question.uid, "ALT", i);

		// tr for each alternative
		const tr = document.createElement("tr");
		const classesTr = "w-full border-b-[1.5px] border-secondary-800 h-fit".split(" "); // border-b-[1.5px] / h-fit not found
		tr.classList.add(...classesTr);
		tbody.appendChild(tr);

		// first td for the radio button 
		const td1 = document.createElement("td");
		tr.appendChild(td1);
		
		// container for the radio
		const radioContainer = document.createElement('div'); 
		const classesRadioContainer = "h-20 w-100".split(" "); // w-100 created
		radioContainer.classList.add(...classesRadioContainer);
		td1.appendChild(radioContainer);

		// label for the radio button
		const label = document.createElement("label");
		const classesLabel = "relative flex cursor-pointer justify-center items-center rounded-full h-full".split(" ");
		label.classList.add(...classesLabel);
		label.htmlFor = alternativeId;
		radioContainer.appendChild(label);

		// the radio input
		const input = document.createElement("input");
		input.id = alternativeId;
		input.name = question.uid;
		input.type = "radio";
		input.value = alternativeId;
		const classesInput = "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-200 dark:border-gray-600 text-primary-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-400 dark:checked:border-primary-800 checked:before:bg-gray-100 dark:checked:before:bg-gray-600 hover:before:opacity-10".split(" "); // not seen entirely
		input.classList.add(...classesInput);
		input.addEventListener("change", handleChange); // TODO add function
		label.appendChild(input);

		// container for the icon
		const iconContainer = document.createElement("div");
		const classesIconContainer = "pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary-400 dark:text-primary-800 opacity-0 transition-opacity peer-checked:opacity-100".split(" ");
		iconContainer.classList.add(...classesIconContainer);
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
		const td2 = document.createElement("td");
		const classesTd2 = "p-4 border-l-[1.5px] border-secondary-800 w-10/12 box-border".split(" ");
		td2.classList.add(...classesTd2);
		tr.appendChild(td2);
	
		// label for the description of the alternative
		const labelDescription = document.createElement("label");
		const classesLabelDescription = "box-border cursor-pointer font-regular text-base text-start text-gray-200 dark:text-gray-900 break-words flex flex-1".split(" ");
		labelDescription.classList.add(...classesLabelDescription);
		labelDescription.innerHTML = alternative.label;
		labelDescription.htmlFor = alternativeId;
		td2.appendChild(labelDescription);
	}
}


generateRadioQuestion(UE1Q1) // tag still not created