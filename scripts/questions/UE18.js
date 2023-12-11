import { UE18Q1, UE18Q2, UE18Q3, UE18Q4 } from "./data/questions-ue18.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE18Q1);
  generateRadioQuestion(UE18Q2);
  generateRadioQuestion(UE18Q3);
  generateRadioQuestion(UE18Q4);
}
