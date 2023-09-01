import { http } from "@config/request";
import { useMutation } from "react-query";

interface defaultFormData {
  duration: number,
  skill: string[],
  jobHeading: string,
  location: string[],
  openpositions: string,
  experienceLevel: string,
  startDate: string,
  hourlyPrice: string,
  description: string,
  jobStatus: string,
};

const postJob = async (data: defaultFormData) => {
  return await http.post<unknown>("http://localhost:3001/v1/job", data);
};
export const usePostJob = () => {
  return useMutation(postJob);
};
