import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";

interface Technology {
  tecnologyId: string;
  technologyName: string;
}

interface GetJobTechnologyResponse {
  data: {
    technologys: Technology[];
  };
}

const getJobTechnologyList = async (): Promise<GetJobTechnologyResponse> => {
  const response = await http.get<GetJobTechnologyResponse>('/v1/technology');
  return response.data;
};

export const useGetTechnology = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobTechnologyResponse, Error> => {
  return useQuery(QueryID.technologyQuery, async () => getJobTechnologyList(), {
    onSuccess,
    onError,
    select: (data: GetJobTechnologyResponse) => data,
    staleTime: 0
  });
};