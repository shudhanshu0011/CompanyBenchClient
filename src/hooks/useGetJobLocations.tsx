import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";

const getJobLocationList = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/joblocation", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetJobLocations = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["QUERY_ID"], async () => getJobLocationList(), {
    onSuccess,
    onError,
    select: (data: unknown) => data.data.data.joblocations,
    staleTime: 0
  });
};
