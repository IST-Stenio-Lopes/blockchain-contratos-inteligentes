import { createElementWithClasses } from "../utils/index.js";

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

export {
    generateCompleteRadioAssertive
}