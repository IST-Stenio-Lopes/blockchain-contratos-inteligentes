import { createElementWithClasses } from "../utils/index.js";

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

	return submitButton;

}

export {
    generateButtonEnviarResposta
}