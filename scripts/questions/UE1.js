import {getQuestionNumber} from './utils'


function generateQuestionHeader(question) {	
	const container = document.createElement('div'); 
	const questionNumberWrapper = document.createElement('span'); 

	const classes = "bg-secondary-950 text-secondary-300 font-semibold flex flex-col px-8 py-2 border-b-2 border-secondary-800".split(" "); 
	console.log(classes)

	container.classList.add(classes)
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
}

generateRadioQuestion(UE1Q1)