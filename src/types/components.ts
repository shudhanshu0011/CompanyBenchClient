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

export interface SubmitInputsTypes {
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

export interface CreateUserParams {
  email: string;
  password: string;
  userType:string;
  firstName: string;
  lastName:string;
  isEmailVerified: boolean;
  isActive: boolean;
  userSource: string;
  availability: boolean;
  mobile: number;
  company: string;
}

export interface SignInParams {
  email: string;
  password: string;
}
