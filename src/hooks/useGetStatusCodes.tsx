import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";

const getStatusCodes = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/jobstatus/codes", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetStatusCodes = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["QUERY_ID"], async () => getStatusCodes(), {
    onSuccess,
    onError,
    select: (data: unknown) => data.data.jobs,
    staleTime: 0
  });
};
