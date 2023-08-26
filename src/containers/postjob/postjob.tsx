import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper";
import { Sidebar } from "../../components/sidebar/sidebar";
import "@styles/common/_pages.scss";
import { NewJobForm } from "../../components/newJobForm/new-job-form";

export const PostJob = (): JSX.Element => {

  return (
    <PageWrapperUser>
      <div className="body-items">
        <Sidebar activeLink="/newjob"/>
        <NewJobForm/>
      </div>  
    </PageWrapperUser>
  );
};
