import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { VENDOR_ID } from "@src/constants/constants";
import { GetCandidatesResponse } from "@src/types/components";

const getCandidatesList = async (): Promise<GetCandidatesResponse> => {
  const response = await http.get<GetCandidatesResponse>(
    `/v1/candidate/vendor/${VENDOR_ID}`
  );
  return response.data;
};

export const useGetCandidates = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetCandidatesResponse, Error> => {
  return useQuery(QueryID.candidateQuery, async () => getCandidatesList(), {
    onSuccess,
    onError,
    select: (data: GetCandidatesResponse) => data,
    staleTime: 0,
  });
};
