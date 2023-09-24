import  http  from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";

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
  const response = await http.get<GetJobLocListResponse>("v1/joblocation");
  return response.data;
};

export const useGetJobLocList = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobLocListResponse, Error> => {
  return useQuery(QueryID.locationQuery, async () => getJobLocationList(), {
    onSuccess,
    onError,
    select: (data: GetJobLocListResponse) => data,
    staleTime: 0
  });
};