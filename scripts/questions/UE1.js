import {
  UE1Q1,
  UE1Q2,
  UE1Q3,
  UE1Q4,
  UE1Q5,
  UE1Q6,
  UE1Q7,
} from "./data/questions-ue1.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateClassificationQuestion } from "./components/ClassificationQuestion/ClassificationQuestion.js";
import { generateCheckListQuestion } from "./components/CheckListQuestion/CheckListQuestion.js";

generateRadioQuestion(UE1Q1);
generateRadioQuestion(UE1Q2);
generateClassificationQuestion(UE1Q3);
generateRadioQuestion(UE1Q5);
generateRadioQuestion(UE1Q7);
