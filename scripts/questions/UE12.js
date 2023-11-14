import { UE12Q1, UE12Q2, UE12Q3 } from "./data/questions-ue12.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE12Q1);
  generateRadioQuestion(UE12Q2);
  generateRadioQuestion(UE12Q3);
}
