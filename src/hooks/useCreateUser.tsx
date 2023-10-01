import { QueryID } from "@src/constants/query";
import { CreateUserParams } from "@src/types/components";
import axios, { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const createUser = async (
  params: CreateUserParams
): Promise<CreateUserParams> => {
  return await axios.post(`/v1/user`, params, {
  });
};
export const useCreateUser = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<
  CreateUserParams,
  Error,
  CreateUserParams,
  CreateUserParams
> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.createUser;
  return useMutation({
    mutationFn: async (params: CreateUserParams) => createUser(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess,
    onError,
  });
};
