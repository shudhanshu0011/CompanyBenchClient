import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { GetJobStatusListResponse } from "@src/types/components";

const getJobStatus = async (): Promise<GetJobStatusListResponse> => {
  const response = await http.get<GetJobStatusListResponse>(
    "/v1/jobstatus/codes"
  );
  return response.data;
};

export const useGetJobStatus = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobStatusListResponse, Error> => {
  return useQuery(QueryID.jobStatusQuery, async () => getJobStatus(), {
    onSuccess,
    onError,
    select: (data: GetJobStatusListResponse) => data,
    staleTime: 0,
  });
};
