import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { TypeGeneralObj } from "@src/types/common";

interface GetCompanyNameResponse {
  data: {
    companylists: TypeGeneralObj[];
  };
}

const getCompanyList = async (): Promise<GetCompanyNameResponse> => {
  const response = await http.get<GetCompanyNameResponse>("/v1/companies");
  return response.data;
};

export const useGetCompanyList = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetCompanyNameResponse, Error> => {
  return useQuery(QueryID.locationQuery, async () => getCompanyList(), {
    onSuccess,
    onError,
    select: (data: GetCompanyNameResponse) => data,
    staleTime: 0,
  });
};
