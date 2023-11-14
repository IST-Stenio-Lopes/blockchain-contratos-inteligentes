import {
  UE5Q1,
  UE5Q2,
  UE5Q3,
  UE5Q4,
  UE5Q5,
  UE5Q6,
} from "./data/questions-ue5.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE5Q1);
  generateClassificationQuestion(UE5Q2);
  generateRadioQuestion(UE5Q3);
  generateRadioQuestion(UE5Q4);
  generateRadioQuestion(UE5Q5);
  generateClassificationQuestion(UE5Q6);
}
