import  http  from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { GET_CANDIDATES_QUERY } from "@src/constants/query";

interface Candidate {
  candidateId: number,
  vendorId: number,
  firstName: string,
  lastName: string,
  email: string,
  location: string,
  skill: string[],
  summary: string,
  hourlyPrice: number,
  certifications: string[],
  projects: string[],
  designation: string,
  status: string,
}

interface GetCandidatesResponse {
  data: {
    candidates: Candidate[];
  };
}

const getCandidatesList = async (): Promise<GetCandidatesResponse> => {
  const response = await http.get<GetCandidatesResponse>("/v1/candidate/vendor/4321");
  return response.data;
};

export const useGetCandidates = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetCandidatesResponse, Error> => {
  return useQuery(GET_CANDIDATES_QUERY, async () => getCandidatesList(), {
    onSuccess,
    onError,
    select: (data: GetCandidatesResponse) => data,
    staleTime: 0
  });
};
