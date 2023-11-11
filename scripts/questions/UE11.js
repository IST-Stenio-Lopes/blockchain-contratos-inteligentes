import {
  UE11Q1,
  UE11Q2,
  UE11Q3,
  UE11Q4,
  UE11Q5,
  UE11Q6,
} from "./data/questions-ue11.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";

generateRadioQuestion(UE11Q1);
generateRadioQuestion(UE11Q2);
generateRadioQuestion(UE11Q3);
generateCompleteQuestion(UE11Q4);
generateRadioQuestion(UE11Q5);
generateCompleteQuestion(UE11Q6);
