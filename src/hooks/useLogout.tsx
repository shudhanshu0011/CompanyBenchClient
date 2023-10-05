import http from "@config/request";
import { QueryID } from "@src/constants/query";
import { UseQueryResult, useQuery } from "react-query";

const logoutUser = async (): Promise<void> => {
  return await http.get<void>("/v1/user/logout", {
    headers: { service_ref: 123456 },
  });
};

export const useGetUser = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<void, Error> => {
  return useQuery(QueryID.logoutUser, async () => logoutUser(), {
    onSuccess,
    onError,
    staleTime: 0,
  });
};
