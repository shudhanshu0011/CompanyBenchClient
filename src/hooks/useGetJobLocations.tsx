import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { GetJobLocationListResponse } from "@src/types/components";



const getJobLocationList = async (): Promise<GetJobLocationListResponse> => {
  const response = await http.get<GetJobLocationListResponse>('/v1/joblocation');
  return response.data;
};

export const useGetJobLocationsList = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobLocationListResponse, Error> => {
  return useQuery(QueryID.locationQuery, async () => getJobLocationList(), {
    onSuccess,
    onError,
    select: (data: GetJobLocationListResponse) => data,
    staleTime: 0
  });
};