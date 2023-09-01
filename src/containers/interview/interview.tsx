
import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper-user";
import "@styles/common/_pages.scss";
import "./interview.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const InterviewList = (): JSX.Element => {
  return (
    <PageWrapperUser>
      <div className="body-items">
        <Sidebar activeLink="/jobinterviewlist"/>
        <div className="box-content pt-40 pl-30">
          Interview List
        </div>
      </div>
    </PageWrapperUser>
  );
};
