import { DropdownOption } from "./common";

export interface SubmitPostJobParams {
    location: string;
    jobHeading: string;
    skill: Array<string>;
    description: string;
    monthlyBudget: string;
    startDate: Date | string;
    experienceLevel: number;
    duration: number;
    openpositions: number;
    jobStatus: string;
  }

 export interface SubmitInputsTypes{
    location: Array<DropdownOption> | string;
    jobHeading: string;
    skill: Array<DropdownOption> | Array<string>;
    description: string;
    monthlyBudget: string;
    startDate: Date | string;
    experienceLevel: number;
    duration: number;
    openpositions: number;
    jobStatus: DropdownOption | string;
  }