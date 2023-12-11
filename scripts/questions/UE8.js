import {
  UE8Q1,
  UE8Q2,
  UE8Q3,
  UE8Q4,
  UE8Q5,
  UE8Q6,
} from "./data/questions-ue8.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
import { generateCheckListQuestion } from "./components/CheckListQuestion/CheckListQuestion.js";
import { generateCompleteWithSelectQuestion } from "./components/CompleteWithSelectQuestion/CompleteWithSelectQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE8Q1);
  generateCompleteQuestion(UE8Q2);
  generateCheckListQuestion(UE8Q3);
  generateRadioQuestion(UE8Q4);
  generateCompleteWithSelectQuestion(UE8Q5);
  generateRadioQuestion(UE8Q6);
}
