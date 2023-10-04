import http from "@config/request";
import { QueryID } from "@src/constants/constants";
import { SignInParams } from "@src/types/components";
import { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postLogin = async (params: SignInParams): Promise<string> => {
  return await http.post("/v1/user/login", params);
};

export const usePostLogin = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<string, Error, SignInParams, SignInParams> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postLogin;
  return useMutation({
    mutationFn: async (params: SignInParams) => postLogin(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess: onSuccess,
    onError,
  });
};
