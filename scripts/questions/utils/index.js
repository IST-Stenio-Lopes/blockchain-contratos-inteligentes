const generateID = (prefix, id, index) => {
  return [prefix, id + index].join("-");
};

const getQuestionNumber = (questionId) => {
  const questionIndex = questionId.indexOf('Q') + 1; 
  const questionNumber = questionId.substring(questionIndex)
  return ["QUESTÃO", questionNumber].join(" ");
};

const getInputIndexById = (inputId) => {
	return parseInt(inputId[inputId.length - 1])
}

function createElementWithClasses(tag, classes){
	const element = document.createElement(tag);
	const classesElement = classes.split(" ");
	element.classList.add(...classesElement);
	return element;
}

export {
	generateID,
	getQuestionNumber,
	getInputIndexById,
  createElementWithClasses
};
