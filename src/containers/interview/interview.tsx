
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./interview.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const InterviewList = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/jobinterviewlist"/>
        <div className="box-content pt-40 pl-30">
          Interview List
        </div>
      </div>
    </PageWrapper>
  );
};
