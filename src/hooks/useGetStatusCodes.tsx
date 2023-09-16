import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { GET_JOB_STATUSES_QUERY } from "@src/constants/query";

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
  const response = await http.get<GetStatusListResponse>("http://localhost:3001/v1/jobstatus/codes", {
    headers: { "service_ref": 123456 },
  });
  return response.data;
};

export const useGetJobStatus = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetStatusListResponse, Error> => {
  return useQuery(GET_JOB_STATUSES_QUERY, async () => getJobStatus(), {
    onSuccess,
    onError,
    select: (data: GetStatusListResponse) => data,
    staleTime: 0
  });
};
