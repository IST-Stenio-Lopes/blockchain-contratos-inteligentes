import {
  UE6Q1,
  UE6Q2,
  UE6Q3,
  UE6Q4,
  UE6Q5,
  UE6Q6,
} from "./data/questions-ue6.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";

export function createAllQuestions() {
  generateRadioQuestion(UE6Q1);
  generateClassificationQuestion(UE6Q2);
  generateRadioQuestion(UE6Q3);
  generateCompleteQuestion(UE6Q4);
  generateClassificationQuestion(UE6Q5);
  generateCompleteQuestion(UE6Q6);
}
