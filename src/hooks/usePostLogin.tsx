import http from "@config/request";
import { QueryID } from "@src/constants/constants";
import { GetUserResponseData, SignInParams } from "@src/types/components";
import { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postLogin = async (
  params: SignInParams
): Promise<GetUserResponseData> => {
  await http.post("/v1/user/login", params, {
    headers: { service_ref: 123456 },
  });

  const response = await http.get<GetUserResponseData>("/v1/user", {
    headers: { service_ref: 123456 },
  });
  return response.data;
};

export const usePostLogin = (
  onSuccess?: () => GetUserResponseData,
  onError?: (error: AxiosError) => void,
  onSettled?: () => void
): UseMutationResult<
  GetUserResponseData,
  Error,
  SignInParams,
  SignInParams
> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postLogin;
  return useMutation({
    mutationFn: async (params: SignInParams) => postLogin(params),
    onSettled: async () => {
      return queryClient.invalidateQueries(queryId).then(() => {
        onSettled && onSettled();
      });
    },
    onSuccess: (userData) =>
      queryClient.setQueryData(
        ["userData", userData.data.users[0]._id],
        userData
      ),
    onError,
  });
};
