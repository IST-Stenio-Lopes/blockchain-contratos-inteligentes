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

export {
	generateID,
	getQuestionNumber,
	getInputIndexById
};
