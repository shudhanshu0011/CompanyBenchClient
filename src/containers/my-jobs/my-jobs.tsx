import { useLocation } from "react-router-dom";
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { DashboardWrapper } from "@components/dashboard-wrapper/dashboard-wrapper";
import { Paper } from "@src/common/Paper";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { AppPagination } from "@common/app-pagination";
import { JobsCard } from "@src/components/job-card";
import { JobDetails } from "@components/job-detail";
import "@styles/common/_pages.scss";
import "./my-jobs.scss";
import { useGetJob } from "@src/hooks/useGetJob";
import { Job } from "@src/types/components";

export const MyJobs = (): JSX.Element => {
  const [showDetail, setShowDetail] = useState(false);
  const { data: myJobs } = useGetJob();
  const [selectedJob, setSelectedJob] = useState<Job>();

  const options = [
    { value: ".NET", label: ".NET" },
    { value: "Android", label: "Android" },
    { value: "Angular", label: "Angular" },
    { value: "Apttus CPQ", label: "Apttus CPQ" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Automation Anywhere", label: "Automation Anywhere" },
  ];
  const candidatePagination = () => {
    return <AppPagination />;
  };
  const pageViewDropdown = () => {
    const options = [
      { value: "10", label: "10" },
      { value: "15", label: "15" },
      { value: "20", label: "20" },
    ];
    return <SelectDropdown options={options} size="sm" />;
  };

  const handleShowDetails = (isVisible: boolean) => {
    setShowDetail(isVisible);
  };
  const location = useLocation();

  const handleCardClicked = (id: string) => {
    const selectedJob = myJobs?.data.jobs.find((item: Job) => {
      return item.clientGuid === id;
    });
    setSelectedJob(selectedJob);
    setShowDetail(true);
  };
  return (
    <PageWrapper>
      <DashboardWrapper activeLink={location.pathname}>
        {showDetail ? (
          <JobDetails handleShowDetails={handleShowDetails} job={selectedJob} />
        ) : (
          <>
            <div className="box-heading">
              <div className="box-title">
                <h3 className="mb-35">My Jobs</h3>
              </div>
            </div>
            <Row>
              <Col xs={12} md={12}>
                <Paper title="Advance Filter" titleRight="Search Result : 5">
                  <div className="filter-dropdown-container">
                    <Row>
                      <Col xs={3}>
                        <SelectDropdown
                          options={options}
                          placeholder="Select Technology"
                          isClearable
                          size="lg"
                        />
                      </Col>
                      <Col xs={3}>
                        <SelectDropdown
                          options={options}
                          placeholder="Select Location"
                          size="lg"
                          isClearable
                        />
                      </Col>
                    </Row>
                  </div>
                </Paper>
                <Paper
                  title={candidatePagination()}
                  titleRight={pageViewDropdown()}
                >
                  <Row className="flex-box candidate-card-wrapper">
                    {myJobs?.data.jobs.map((job: Job) => {
                      return (
                        <Col xs={12} md={3}>
                          <JobsCard
                            handleShowDetails={handleShowDetails}
                            handleCardClicked={handleCardClicked}
                            showAvatar={false}
                            title={job.jobHeading}
                            compact={true}
                            job={job}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Paper>
              </Col>
            </Row>
          </>
        )}
      </DashboardWrapper>
    </PageWrapper>
  );
};
