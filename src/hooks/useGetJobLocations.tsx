import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { GET_JOB_LOCATIONS_QUERY } from "@src/constants/query";

interface JobLocList {
  cityId: string;
  cityName: string;
}

interface GetJobLocListResponse {
  data: {
    joblocations: JobLocList[];
  };
}

const getJobLocationList = async (): Promise<GetJobLocListResponse> => {
  const response = await http.get<GetJobLocListResponse>("http://localhost:3001/v1/joblocation", {
    headers: { "service_ref": 123456 },
  });
  return response.data;
};

export const useGetJobLocList = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobLocListResponse, Error> => {
  return useQuery(GET_JOB_LOCATIONS_QUERY, async () => getJobLocationList(), {
    onSuccess,
    onError,
    select: (data: GetJobLocListResponse) => data,
    staleTime: 0
  });
};