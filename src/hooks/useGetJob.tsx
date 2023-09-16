import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { GET_JOBS_QUERY } from "@src/constants/query";

interface Job {
  company: string;
  location: string[];
  jobStatus: string;
  startdate: string;
  skill: string[];
}

interface GetJobResponse {
  data: {
    jobs: Job[];
  };
}

const getJobList = async (): Promise<GetJobResponse> => {
  const response = await http.get<GetJobResponse>("http://localhost:3001/v1/job", {
    headers: { "service_ref": 123456 },
  });
  return response.data;
};

export const useGetJob = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobResponse, Error> => {
  return useQuery(GET_JOBS_QUERY, async () => getJobList(), {
    onSuccess,
    onError,
    select: (data: GetJobResponse) => data,
    staleTime: 0
  });
};