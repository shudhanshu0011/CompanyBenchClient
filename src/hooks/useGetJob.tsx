import  http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { GetJobResponse } from "@src/types/components";

const getJobList = async (): Promise<GetJobResponse> => {
  const response = await http.get<GetJobResponse>("/v1/job", {
    headers: { "service_ref": 123456 },
  });
  return response.data;
};

export const useGetJob = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobResponse, Error> => {
  return useQuery(QueryID.jobsQuery, async () => getJobList(), {
    onSuccess,
    onError,
    select: (data: GetJobResponse) => data,
    staleTime: 0
  });
};