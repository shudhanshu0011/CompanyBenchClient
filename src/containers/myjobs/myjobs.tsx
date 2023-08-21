
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./myjobs.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const MyJobs = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/cmyjobs"/>
        <div className="box-content pt-40 pl-30">
          My Jobs
        </div>
      </div>
    </PageWrapper>
  );
};
