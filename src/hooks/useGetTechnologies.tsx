import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { GetJobTechnologyResponse } from "@src/types/components";

const getJobTechnologiesList = async (): Promise<GetJobTechnologyResponse> => {
  const response = await http.get<GetJobTechnologyResponse>("/v1/technology");
  return response.data;
};

export const useGetTechnologies = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetJobTechnologyResponse, Error> => {
  return useQuery(
    QueryID.technologyQuery,
    async () => getJobTechnologiesList(),
    {
      onSuccess,
      onError,
      select: (data: GetJobTechnologyResponse) => data,
      staleTime: 0,
    }
  );
};
