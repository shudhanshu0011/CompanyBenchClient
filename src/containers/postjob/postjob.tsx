
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./postjob.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const PostJob = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/newjob"/>
        <div className="box-content pt-40 pl-30">
          Post Job
        </div>
      </div>
    </PageWrapper>
  );
};
