import http from "@config/request";
import { QueryID } from "@src/constants/query";
import { SubmitPostContactParams } from "@src/types/components";
import { UseMutationResult, useMutation, useQueryClient } from "react-query";

const postContact = async (
  params: SubmitPostContactParams
): Promise<SubmitPostContactParams> => {
  const response = await http.post<SubmitPostContactParams>("/v1/contact", params);
  return response.data;
};

export const usePostContactUs = (
  onSuccess?: () => void,
  onError?: () => void
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
