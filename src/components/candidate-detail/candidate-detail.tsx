import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Paper } from "@common/Paper";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { ReactComponent as PeopleIcon } from "@assets/icons/icon-people.svg";
import { ReactComponent as AboutIcon } from "@assets/icons/icon-about.svg";
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { ReactComponent as ExperienceIcon } from "@assets/icons/experience.svg";
import { ReactComponent as SalaryIcon } from "@assets/icons/salary.svg";
import { ReactComponent as UpdatedIcon } from "@assets/icons/updated.svg";
import { Btn } from "@common/button";
import { Candidate } from "@src/types/components";
import { useGetTechnology } from "@src/hooks/useGetTechnology";
import { useGetJobLocList } from "@src/hooks/useGetJobLocations";

interface Props {
  handleShowDetails(isVisible: boolean): void;
  selectedCandidate?: Candidate;
}

export const CandidateDetails = ({
  handleShowDetails,
  selectedCandidate,
}: Props) => {
  const { data: allTechnologiesData } = useGetTechnology();
  const { data: allLocationData } = useGetJobLocList();
  const [allTechnologies, setAllTechnologies] = useState();
  const [allLocations, setAllLocations] = useState();

  const {
    firstName,
    hourlyPrice,
    lastName,
    location,
    skill,
    summary,
    totalExp,
  } = selectedCandidate as Candidate;
  const handleBtnClick = () => {
    handleShowDetails(false);
  };

  useEffect(() => {
    setAllTechnologies(allTechnologiesData);
  }, [allTechnologiesData]);

  useEffect(() => {
    setAllLocations(allLocationData);
  }, [allLocationData]);

  const getTechnology = (id: string) => {
    const technology = allTechnologies?.data?.technologys?.find(
      (item: { technologyId: number }) => {
        return item.technologyId === parseInt(id);
      }
    );

    return technology?.technologyName;
  };

  const getLocation = (id: string) => {
    const location = allLocations?.data?.jobs?.find(
      (item: { cityId: number }) => {
        return item.cityId === parseInt(id);
      }
    );

    return location?.cityName;
  };

  return (
    <Col>
      <div className="box-content pt-40 pl-30">
        <div className="flex-box justify-content-space-between mb-35 ">
          <h3 className="flex-box align-items-center">
            {firstName} {lastName}
            <span className=" title-icon">
              <span className="font-xs color-text-mutted">
                <PlaceOutlinedIcon />
              </span>{" "}
              <span className="font-sm color-text-mutted"> {getLocation(location)} </span>
            </span>
          </h3>
          <Btn
            title="Back"
            className="btn"
            handleOnClick={handleBtnClick}
          ></Btn>
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
        <Paper
          title="Overview"
          className="job-overview"
          titleRight={
            <Btn
              title="Invite Candidate"
              className="btn candidate-view-btn font-sm"
            />
          }
        >
          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="sidebar-icon-item about-icon">
                <AboutIcon />
              </div>
              <div className="sidebar-text-info ml-10 skill_custom">
                <span className="text-description industry-icon mb-10">
                  Skills
                </span>
                {skill.map((item: string) => {
                  return (
                    <Btn
                      className="btn btn-grey-small mr-5 mb-5"
                      title={getTechnology(item)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-md-12 d-flex mt-sm-15">
              <div className="sidebar-icon-item">
                <LocationIcon />
              </div>
              <div className="sidebar-text-info ml-10">
                <span className="text-description mb-10">Location</span>
                <span className="card_loc_area">
                  <strong>
                    <span className="card-location font-sm mr-5 ml-0 pl-0">
                      <PlaceOutlinedIcon />
                      {getLocation(location)}
                    </span>
                  </strong>
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-md-12 d-flex">
              <div className="sidebar-icon-item">
                <ExperienceIcon />
              </div>
              <div className="sidebar-text-info ml-10">
                <span className="text-description experience-icon mb-10">
                  {" "}
                  Experience
                </span>
                <strong className="small-heading">
                  {totalExp} years of experience
                </strong>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-md-12 d-flex mt-sm-15">
              <div className="sidebar-icon-item">
                <SalaryIcon />
              </div>
              <div className="sidebar-text-info ml-10">
                <span className="text-description salary-icon mb-10">
                  Budget (₹)
                </span>
                <strong className="small-heading">
                  More than ₹ {hourlyPrice}/ Hours
                </strong>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-md-12 d-flex mt-sm-15">
              <div className="sidebar-icon-item">
                <UpdatedIcon />
              </div>
              <div className="sidebar-text-info ml-10">
                <span className="text-description jobtype-icon mb-10">
                  Summary
                </span>
                <p>{summary}</p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </Col>
  );
};
