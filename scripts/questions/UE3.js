import {
  UE3Q1,
  UE3Q2,
  UE3Q3,
  UE3Q4,
  UE3Q5,
  UE3Q6,
  UE3Q7,
  UE3Q8,
  UE3Q9,
} from "./data/questions-ue3.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
import { generateCompleteImageQuestion } from "./components/CompleteImage/CompleteImage.js";
import { generateCompleteImageV2Question } from "./components/CompleteImageV2/CompleteImageV2.js";

generateCompleteQuestion(UE3Q1);
generateCompleteImageQuestion(UE3Q2);
generateRadioQuestion(UE3Q3);
generateCompleteImageV2Question(UE3Q4);
generateRadioQuestion(UE3Q5);
generateRadioQuestion(UE3Q6);
generateRadioQuestion(UE3Q7);
generateClassificationQuestion(UE3Q8);
generateClassificationQuestion(UE3Q9);
