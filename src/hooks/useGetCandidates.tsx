import { http } from "@config/request";
import { AxiosResponse } from "axios";
import { UseQueryResult, useQuery } from "react-query";

const getCandidatesList = async () => {
  return await http.get<unknown>("localhost:3001/v1/candidate/vendor/4321", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetCandidates = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["QUERY_ID"], async () => getCandidatesList(), {
    onSuccess,
    onError,
    select: (data: AxiosResponse) => data.data,
    staleTime: 0
  });
};
