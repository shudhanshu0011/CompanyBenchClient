
import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import { PostJobForm } from "@components/post-job-form";
import { Sidebar } from "@components/sidebar/sidebar";
import { usePostJob } from "@hooks/usePostJob";
import { SubmitPostJobParams } from "@src/types/components";

export const PostJob = (): JSX.Element => {
  const {mutate: postJobs} = usePostJob();
  
  const handlePostJobs = (formdata: SubmitPostJobParams) => {
    postJobs(formdata)
  }
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/newjob"/>
        <div className="box-content pt-40 pl-30">
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Post a Job</h3>
          </div>
        </div>
          <PostJobForm handlePostJobs={handlePostJobs}/>
        </div>
      </div>
    </PageWrapper>
  );
};
