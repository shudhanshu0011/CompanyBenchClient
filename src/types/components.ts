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
  userType: string;
  firstName: string;
  lastName: string;
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

export interface Candidate {
  createdAt: string;
  guid: string;
  updatedAt: string;
  userSfId: 99999;
  candidateId: number;
  vendorId: number;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  skill: string[];
  summary: string;
  hourlyPrice: number;
  certifications: string[];
  projects: string[];
  designation: string;
  status: string;
  totalExp: number;
}
export interface GetCandidatesResponse {
  data: {
    candidate: Candidate[];
  };
  total: number;
  limit: number;
  page: number;
}

export interface Job {
  clientGuid: string;
  clientId: number;
  company: string;
  createdAt: string;
  description: string;
  duration: number;
  experienceLevel: number;
  guid: string;
  hourlyPrice: number;
  jobHeading: string;
  jobStatus: string;
  location: string[];
  skill: string[];
  startdate: string;
  updatedAt: string;
  userSfId: string;
}

export interface GetJobResponse {
  data: {
    jobs: Job[];
  };
  total: number;
  limit: number;
  page: number;
}

export type SubmitPostContactParams = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  description: string;
};

export interface SubmitPostContactTypes {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  description: string;
}

export interface Technology {
  tecnologyId: string;
  technologyName: string;
}

export interface GetJobTechnologyResponse {
  data: GetJobTechnologyResponseData;
}

export interface GetJobTechnologyResponseData {
  technologys: Technology[];
}
