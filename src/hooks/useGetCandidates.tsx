import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";

const getCandidatesList = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/candidate/vendor/4321", {
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
    select: (data: unknown) => data.data,
    staleTime: 0
  });
};
