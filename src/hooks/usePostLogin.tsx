import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { SignInParams } from "@src/types/components";



export const postSignIn = async (): Promise<SignInParams> => {
  console.log("param aaasas",)
  const response = await http.post<SignInParams>('/v1/user/login', {
  });
  console.log("sign in data ", response.data)
  return response.data;
};

export const usePostLogin = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<SignInParams, Error> => {
  return useQuery(QueryID.jobsQuery, async () => postSignIn(), {
    onSuccess,
    onError,
    select: (data: SignInParams) => data,
    staleTime: 0
  });
};
