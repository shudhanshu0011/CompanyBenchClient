import { QueryID } from "@src/constants/constants";
import { SignInParams } from "@src/types/components";
import axios, { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postLogin = async (
  params: SignInParams
): Promise<SignInParams> => {
  return await axios.post(`http://localhost:3001/v1/user/login`, params, {
    headers: { service_ref: 123456 },
  });
};
export const usePostLogin = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<SignInParams, Error, SignInParams, SignInParams> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postLogin;
  return useMutation({
    mutationFn: async (params: SignInParams) => postLogin(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess,
    onError,
  });


};
