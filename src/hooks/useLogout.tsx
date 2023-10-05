import http from "@config/request";
import { QueryID } from "@src/constants/query";
import { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

const logoutUser = async (): Promise<void> => {
  return await http.get<void>("/v1/user/logout", {
    headers: { service_ref: 123456 },
  });
};

export const useLogout = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<void, Error, void, void> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.logoutUser;
  return useMutation({
    mutationFn: async () => logoutUser(),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess,
    onError,
  });
};
