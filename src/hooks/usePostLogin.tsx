import http from "@config/request";
import { QueryID } from "@src/constants/constants";
import { LoginUserResponseData, SignInParams } from "@src/types/components";
import { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postLogin = async (
  params: SignInParams
): Promise<LoginUserResponseData> => {
  return await http.post("/v1/user/login", params);
};

export const usePostLogin = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<
  LoginUserResponseData,
  Error,
  SignInParams,
  SignInParams
> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postLogin;
  return useMutation({
    mutationFn: async (params: SignInParams) => postLogin(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess: (userResponse) => {
      queryClient.setQueryData(
        ["user", userResponse.data.data.user.guid],
        userResponse.data
      );
    },
    onError,
  });
};
