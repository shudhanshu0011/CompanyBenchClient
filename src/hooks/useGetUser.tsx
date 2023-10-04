import http from "@config/request";
import { QueryID } from "@src/constants/query";
import { GetUserResponseData } from "@src/types/components";
import { UseQueryResult, useQuery } from "react-query";

const getUser = async (): Promise<GetUserResponseData> => {
  const response = await http.get<GetUserResponseData>("/v1/user", {
    headers: { service_ref: 123456 },
  });
  return response.data;
};

export const useGetUser = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetUserResponseData, Error> => {
  return useQuery(QueryID.getUserQuery, async () => getUser(), {
    onSuccess,
    onError,
    select: (data: GetUserResponseData) => data,
    staleTime: 0,
  });
};
