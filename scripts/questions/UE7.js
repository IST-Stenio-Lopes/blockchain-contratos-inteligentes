import {
  UE7Q1,
  UE7Q2,
  UE7Q3,
  UE7Q4,
  UE7Q5,
  UE7Q6,
  UE7Q7,
} from "./data/questions-ue7.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";

export function createAllQuestions() {
  generateCompleteQuestion(UE7Q1);
  generateRadioQuestion(UE7Q2);
  generateClassificationQuestion(UE7Q3);
  generateCompleteQuestion(UE7Q4);
  generateRadioQuestion(UE7Q5);
  generateCompleteQuestion(UE7Q6);
  generateRadioQuestion(UE7Q7);
}
