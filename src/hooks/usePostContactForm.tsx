import { QueryID } from "@src/constants/query";
import { SubmitPostContactParams } from "@src/types/components";
import axios, { AxiosError } from "axios";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

export const postContact = async (
  params: SubmitPostContactParams
): Promise<SubmitPostContactParams> => {
  return await axios.post('/v1/contact', params, {
  });
};
export const usePostContactUs = (
  onSuccess?: () => void,
  onError?: (error: AxiosError) => void
): UseMutationResult<
  SubmitPostContactParams,
  Error,
  SubmitPostContactParams,
  SubmitPostContactParams
> => {
  const queryClient = useQueryClient();
  const queryId = QueryID.postContactEnquiry;
  return useMutation({
    mutationFn: async (params: SubmitPostContactParams) => postContact(params),
    onSettled: async () => queryClient.invalidateQueries(queryId),
    onSuccess,
    onError,
  });
};
