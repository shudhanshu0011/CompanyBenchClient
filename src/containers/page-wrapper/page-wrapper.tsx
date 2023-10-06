import { CopyrightFooter } from "@components/copyright-footer";
import { Header } from "@components/header";
import { FooterSection } from "@components/home-components/footer";
import { useDispatch } from "react-redux";
import {
  setLocations,
  setTechnologies,
  setJobStatus,
} from "@src/store/reducer/refDataReducer";
import { useGetTechnologies } from "@src/hooks/useGetTechnologies";
import { useGetJobLocationsList } from "@src/hooks/useGetJobLocations";
import {
  GetJobLocationListResponseData,
  GetJobStatusListResponseData,
  GetJobTechnologyResponseData,
} from "@src/types/components";
import { useGetJobStatus } from "@src/hooks/useGetStatusCodes";

interface Props {
  children: React.ReactElement;
}
export const PageWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { data: allTechnologiesData } = useGetTechnologies();
  const { data: allLocationsData } = useGetJobLocationsList();
  const { data: jobStatusList } = useGetJobStatus();
  // const onError = () => {
  //   dispatch(resetUser());
  // };
  // const { data: userData } = useGetUser(() => {}, onError);

  dispatch(
    setTechnologies(allTechnologiesData?.data as GetJobTechnologyResponseData)
  );
  dispatch(
    setLocations(allLocationsData?.data as GetJobLocationListResponseData)
  );

  dispatch(setJobStatus(jobStatusList?.data as GetJobStatusListResponseData));

  // dispatch(setUser(userData?.data.users[0] as User));

  return (
    <main className="main">
      <div className="page-wrapper">
        <Header />
        {children}
        <FooterSection />
        <CopyrightFooter />
      </div>
    </main>
  );
};
