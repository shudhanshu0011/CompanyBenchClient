import { http } from "@config/request";
import { UseQueryResult, useQuery } from "react-query";

const getJobTechnologyList = async () => {
  return await http.get<unknown>("http://localhost:3001/v1/technology", {
    headers: { "service_ref": 123456 },
  });
};
export const useGetTechnology = (
  onSuccess?: () => void,
  onError?: () => void
): UseQueryResult<unknown, Error> => {
  return useQuery(["Get_Technology"], async () => getJobTechnologyList(), {
    onSuccess,
    onError,
    select: (data: unknown) => data.data.data.technologys,
    staleTime: 0
  });
};
