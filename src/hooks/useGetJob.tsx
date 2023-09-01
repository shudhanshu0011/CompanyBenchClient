import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";

const getJobList = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/job", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetJob = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["Get_Job"], async () => getJobList(), {
    onSuccess,
    onError,
    select: (data: unknown) => data.data.data.jobs,
    staleTime: 0
  });
};
