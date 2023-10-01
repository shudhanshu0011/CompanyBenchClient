import http from "@config/request";
import { UseQueryResult, useQuery } from "react-query";
import { QueryID } from "@src/constants/query";

interface CompanyList {
    id: Number;
    name: string;
}

interface GetCompanyNameResponse {
    data: {
        companies: CompanyList[];
    };
}

const getCompanyList = async (): Promise<GetCompanyNameResponse> => {
    const response = await http.get<GetCompanyNameResponse>('/v1/companies');
    return response.data;
};

export const useGetCompanyList = (
    onSuccess?: () => void,
    onError?: () => void
): UseQueryResult<GetCompanyNameResponse, Error> => {
    return useQuery(QueryID.locationQuery, async () => getCompanyList(), {
        onSuccess,
        onError,
        select: (data: GetCompanyNameResponse) => data,
        staleTime: 0
    });
};