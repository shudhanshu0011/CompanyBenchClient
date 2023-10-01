import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";

interface Status {
  statusId: string;
  statusName: string;
}

interface GetStatusListResponse {
  data: {
    jobs: Status[];
  };
}

const getJobStatus = async (): Promise<GetStatusListResponse> => {
  const response = await http.get<GetStatusListResponse>('/v1/jobstatus/codes', {
  });
  return response.data;
};

export const useGetJobStatus = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetStatusListResponse, Error> => {
  return useQuery(QueryID.jobStatusQuery, async () => getJobStatus(), {
    onSuccess,
    onError,
    select: (data: GetStatusListResponse) => data,
    staleTime: 0
  });
};
