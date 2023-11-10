import {
  UE2Q1,
  UE2Q2,
  UE2Q3,
  UE2Q4,
  UE2Q5,
  UE2Q6,
} from "./data/questions-ue2.js";
import { generateRadioQuestion } from "./components/RadioQuestion/RadioQuestion.js";
import { generateCompleteQuestion } from "./components/CompleteQuestion/CompleteQuestion.js";

generateCompleteQuestion(UE2Q1);
generateRadioQuestion(UE2Q2);
generateRadioQuestion(UE2Q3);
generateRadioQuestion(UE2Q4);
generateRadioQuestion(UE2Q5);
generateRadioQuestion(UE2Q6);
