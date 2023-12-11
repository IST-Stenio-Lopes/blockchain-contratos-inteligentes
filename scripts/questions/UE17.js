import {
  UE17Q1,
  UE17Q2,
  UE17Q3,
  UE17Q4,
  UE17Q5,
} from "./data/questions-ue17.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE17Q1);
  generateRadioQuestion(UE17Q2);
  generateRadioQuestion(UE17Q3);
  generateRadioQuestion(UE17Q4);
  generateRadioQuestion(UE17Q5);
}
