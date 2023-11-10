import {
  UE9Q1,
  UE9Q2,
  UE9Q3,
  UE9Q4,
  UE9Q5,
  UE9Q6,
  UE9Q7,
  UE9Q8,
  UE9Q9
} from "./data/questions-ue9.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";

generateRadioQuestion(UE9Q1);
generateRadioQuestion(UE9Q2);
generateRadioQuestion(UE9Q3);
generateRadioQuestion(UE9Q4);
generateRadioQuestion(UE9Q5);
generateClassificationQuestion(UE9Q6);
generateRadioQuestion(UE9Q7);
generateRadioQuestion(UE9Q8);
generateCompleteQuestion(UE9Q9);
