import {
  UE10Q1,
  UE10Q2,
  UE10Q3,
  UE10Q4,
  UE10Q5,
  UE10Q6,
  UE10Q7,
  UE10Q8,
  UE10Q9,
} from "./data/questions-ue10.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
import { generateCompleteWithSelectQuestion } from "./components/CompleteWithSelectQuestion/CompleteWithSelectQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE10Q1);
  generateCompleteQuestion(UE10Q2);
  generateRadioQuestion(UE10Q3);
  generateRadioQuestion(UE10Q4);
  generateRadioQuestion(UE10Q5);
  generateRadioQuestion(UE10Q6);
  generateRadioQuestion(UE10Q7);
  generateRadioQuestion(UE10Q8);
  generateCompleteWithSelectQuestion(UE10Q9);
}
