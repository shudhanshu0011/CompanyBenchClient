import { http } from "@config/request";
import { AxiosResponse } from "axios";
import { UseQueryResult, useQuery } from "react-query";

const getCandidatesList = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/candidate", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetCandidates = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["Get_Candidate"], async () => getCandidatesList(), {
    onSuccess,
    onError,
    select: (data: unknown) => data.data.data.candidates
    ,
    staleTime: 0
  });
};
