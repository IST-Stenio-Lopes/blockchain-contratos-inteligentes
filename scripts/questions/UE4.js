import {
  UE4Q1,
  UE4Q2,
  UE4Q3,
  UE4Q4,
  UE4Q5,
  UE4Q6,
  UE4Q7,
} from "./data/questions-ue4.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";
import { generateCheckListQuestion } from "./components/CheckListQuestion/CheckListQuestion.js";
import { generateCompleteWithSelectQuestion } from "./components/CompleteWithSelectQuestion/CompleteWithSelectQuestion.js";

generateCheckListQuestion(UE4Q1);
generateRadioQuestion(UE4Q2);
generateRadioQuestion(UE4Q3);
generateRadioQuestion(UE4Q4);
generateCompleteQuestion(UE4Q5);
generateRadioQuestion(UE4Q6);
generateCompleteWithSelectQuestion(UE4Q7);
