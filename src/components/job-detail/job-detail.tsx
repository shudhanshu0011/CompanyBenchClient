import { Col } from "react-bootstrap";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { ReactComponent as PeopleIcon } from "@assets/icons/icon-people.svg";
import { Btn } from "@common/button";
import { Job } from "@src/types/components";
import { PostJobForm } from "../post-job-form";

interface Props {
  handleShowDetails(isVisible: boolean): void;
  job?: Job;
}

export const JobDetails = ({ handleShowDetails, job }: Props) => {
  const { jobHeading } = job as Job;
  const handleBtnClick = () => {
    handleShowDetails(false);
  };

  return (
    <>
      <div className="flex-box justify-content-space-between mb-35 ">
        <h3 className="flex-box align-items-center">
          {jobHeading}
          <span className=" title-icon">
            <span className="font-xs color-text-mutted">
              <PlaceOutlinedIcon />
            </span>{" "}
            <span className="font-sm color-text-mutted"> </span>
          </span>
        </h3>
        <Btn title="Back" className="btn" handleOnClick={handleBtnClick}></Btn>
      </div>

      <div className="box-nav-tabs mt-40 mb-5">
        <ul className="nav" role="tablist">
          <li>
            <a
              className="btn btn-border tab-btn mr-15 mb-5"
              href="#tab-short-bio"
              data-bs-toggle="tab"
              role="tab"
              aria-controls="tab-short-bio"
              aria-selected="true"
            >
              <span className="mr-5">
                <PeopleIcon />
              </span>
              <span>Candidate Detail</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="divider-text-center mt-20 mb-40"></div>
      <PostJobForm handlePostJobs={() => {}} />
    </>
  );
};
