
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { Paper } from "@common/Paper";
import { AppPagination } from "@common/app-pagination";
import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper-user";
import "@styles/common/_pages.scss";
import "./myjobs.scss";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useState, useEffect } from "react";
import { CandidateDetails } from "@components/candidate-detail/candidate-detail";
import { Btn } from "@src/common/button";
import "@styles/common/_pages.scss";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import "./myjobs-card.scss";
import { useGetJobLocations } from "@hooks/useGetJobLocations";
import { useGetStatusCodes } from "@hooks/useGetStatusCodes";
import { useGetJob } from "@hooks/useGetJob";
import { useGetTechnology } from "@hooks/useGetTechnology";


interface LocationOption {
  value: string;
  label: string;
}

interface TechnologyOption {
  value: string;
  label: string;
}

interface StatusOption {
  value: string;
  label: string;
}

interface Job {
  company: string;
  location: string[];
  jobStatus: string;
  startdate: string;
  skill: string[];
}

interface Props {
  handleShowDetails(isVisible: boolean): void;
}

export const MyJobs = (): JSX.Element => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [locationLists, setLocationLists] = useState<LocationOption[]>([]);
  const [technologyList, setTechnologyLists] = useState<TechnologyOption[]>([]);
  const [jobList, setJobList] = useState<Job[]>([]);
  const [statusList, setStatusList] = useState<StatusOption[]>([]);

  const {data: jobLocationData} = useGetJobLocations();
  const {data: statusListData} = useGetStatusCodes();
  const {data: jobData} = useGetJob();
  const {data: technologyData} = useGetTechnology();
  console.log(jobData);

  useEffect(() => {
    if (jobLocationData) {
      const options: LocationOption[] = jobLocationData.map((tmp: any) => ({
        value: tmp.cityId,
        label: tmp.cityName
      }));
      setLocationLists(options);
    }
  }, [jobLocationData]);

  useEffect(() => {
    if (statusListData) {
      const options: StatusOption[] = statusListData.map((tmp: any) => ({
        value: tmp.statusId,
        label: tmp.statusName
      }));
      setStatusList(options);
    }
  }, [statusListData]);

  useEffect(() => {
    if (jobData?.data.jobs && Array.isArray(jobData.data.jobs)) {
      const options: Job[] = jobData.data.jobs.map((tmp: any) => ({
        company: tmp.jobHeading,
        location: tmp.location,
        jobStatus: tmp.jobStatus,
        startdate: tmp.startdate,
        skill: tmp.skill
      }));
      setJobList(options);
    }
  }, [jobData]);

  useEffect(() => {
    if (technologyData) {
      const options: TechnologyOption[] = technologyData.map((tmp: any) => ({
        value: tmp.tecnologyId,
        label: tmp.technologyName
      }));
      setTechnologyLists(options);
    }
  }, [technologyData]);

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

  const handleBtnClick = () => {
    handleShowDetails(true);
  }

  const findLocById = (id: string): string | undefined => {
    const location = locationLists.find(loc => loc.value === id);
    return location?.label;
  };

  const findStatusById = (id: string): string | undefined => {
    const status = statusList.find(s => s.value === id);
    return status?.label;
  };

  return (
    <PageWrapperUser>
        <div className="body-items">
          <Sidebar activeLink="/cmyjobs"/>
          {showDetail ? (
            <CandidateDetails handleShowDetails={handleShowDetails} />
          ) : (
            <Col>
              <div className="box-content pt-40 pl-30">
                <h3 className="mb-35">My Jobs</h3>
                <Paper title="Advance Filter" titleRight="Search Result : 5">
                  <div className="filter-dropdown-container">
                    <Row>
                      <Col xs={3}>
                        <SelectDropdown
                          options={technologyList}
                          placeholder="Select Technology"
                          isClearable
                          size="lg"
                        />
                      </Col>
                      <Col xs={3}>
                        <SelectDropdown
                          options={locationLists}
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
                  <div className="job-container">
                      {
                        jobList.map(job => (
                          <div className="job-card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <div className="card-profile pt-10">
                                <a href="candidate-details.html">
                                  <h5>{job.company}</h5>
                                </a>
                                <p className="font-xs color-text-mutted">
                                  <PlaceOutlinedIcon />
                                  <span>{findLocById(job.location)}</span>
                                </p>
                                <p className="font-xs color-text-mutted">
                                  <BusinessCenterSharpIcon />
                                  <span>Job Status: {findStatusById(job.jobStatus)}</span><AccessTimeSharpIcon />
                                  <span>{job.startdate.slice(0,10)}</span>
                                </p>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <div className="card-2-bottom card-2-bottom-candidate">
                                <div className="text-start">
                                  {
                                    job.skill.map(skill => (
                                      <span className="btn-tags-sm mb-10 mr-5">{skill}</span>
                                    ))
                                  }
                                </div>
                              </div>
                              <div className="mt-5">
                                <div className="row">
                                  <div className="col-6">
                                    <Btn className="btn-apply-now" title="View Details" handleOnClick={handleBtnClick} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }                      
                  </div>
                  <Btn
                    title="Login to see more"
                    className="btn btn-default btn-apply font-sm"
                  />
                </Paper>
              </div>
            </Col>
          )}
        </div>
    </PageWrapperUser>
  );
};