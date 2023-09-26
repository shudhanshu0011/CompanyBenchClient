import { QueryID } from "@src/constants/query";
import { SubmitPostJobParams } from "@src/types/components";
import axios, { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postJobs = async (
  params: SubmitPostJobParams
): Promise<SubmitPostJobParams> => {
  return await axios.post(`https://testbenchapi.azurewebsites.net/api/PostJob/NewJobPost`, params, {
    headers: { service_ref: 123456 },
  });
};
export const usePostJob = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<
  SubmitPostJobParams,
  Error,
  SubmitPostJobParams,
  SubmitPostJobParams
> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postJob;
  return useMutation({
    mutationFn: async (params: SubmitPostJobParams) => postJobs(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess,
    onError,
  });
};
