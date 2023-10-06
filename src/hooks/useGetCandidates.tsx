import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";
import { VENDOR_ID } from "@src/constants/constants";
import { GetCandidatesResponse } from "@src/types/components";

const getCandidatesList = async (offset: number, limit: number,): Promise<GetCandidatesResponse> => {
  const response = await http.get<GetCandidatesResponse>(
    `/v1/candidate/vendor/${VENDOR_ID}`,
    {
      params: {
        offset: offset,
        limit: limit,
      }
    }
  );
  return response.data;
};

export const useGetCandidates = (
  offset: number,
  limit: number,
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<GetCandidatesResponse, Error> => {
  return useQuery([QueryID.candidateQuery], async () => getCandidatesList(offset, limit), {
    onSuccess,
    onError,
    select: (data: GetCandidatesResponse) => data,
    staleTime: 0,
  });
};
