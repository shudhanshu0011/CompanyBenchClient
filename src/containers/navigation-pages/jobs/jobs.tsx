
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { Paper } from "@common/Paper";
import { AppPagination } from "@common/app-pagination";
import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { useState, useEffect } from "react";
import { CandidateDetails } from "@components/candidate-detail/candidate-detail";
import { useGetJobLocList } from "@hooks/useGetJobLocations";
import { useGetTechnologies } from "@src/hooks/useGetTechnologies";
import { CandidateCard } from "@src/components/candidate-card";
import { DropdownOption } from "@src/types/common";
import "@styles/common/_pages.scss";
import "./jobs.scss";

export const Jobs = (): JSX.Element => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [locationLists, setLocationLists] = useState<DropdownOption[]>([]);
  const [technologyList, setTechnologyLists] = useState<DropdownOption[]>([]);

  const {data: jobLocationData} = useGetJobLocList();
  const {data: technologyData} = useGetTechnologies();

  useEffect(() => {
    if (jobLocationData?.data.jobs && Array.isArray(jobLocationData.data.jobs)) {
      const options: DropdownOption[] = jobLocationData.data.jobs.map((tmp) => ({
        value: tmp.cityId,
        label: tmp.cityName
      }));
      setLocationLists(options);
    }
  }, [jobLocationData]);

  useEffect(() => {
    if (technologyData?.data.technologys && Array.isArray(technologyData.data.technologys)) {
      const options: DropdownOption[] = technologyData.data.technologys.map((tmp) => ({
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

  return (
    <PageWrapper>
        <div className="body-items">
          <Col xs={12} md={2} className="we-hiring-banner">
            <div className="nav pt-0">
              <div className="sidebar-border-bg">
                <span className="text-grey">WE ARE</span>
                <span className="text-hiring">HIRING</span>
              </div>
            </div>
          </Col>
          {showDetail ? (
            <CandidateDetails handleShowDetails={handleShowDetails} />
          ) : (
            <Col>
              <div className="box-content pt-40 pl-30">
                <Paper title="Advance Filter" titleRight="Search Result : 3">
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
                  <Row className="flex-box candidate-card-wrapper">
                    <Col xs={12} md={3}>
                      <CandidateCard
                        handleShowDetails={handleShowDetails}
                        showAvatar={false}
                        title="TestJob"
                        compact={true}
                      />
                    </Col>

                    <Col xs={12} md={3}>
                      <CandidateCard
                        handleShowDetails={handleShowDetails}
                        showAvatar={false}
                        title="Java Developer"
                        compact={true}
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <CandidateCard
                        handleShowDetails={handleShowDetails}
                        showAvatar={false}
                        title="Jr Engineer"
                        compact={true}
                      />
                    </Col>
                    
                  </Row>
                </Paper>
              </div>
            </Col>
          )}
        </div>
    </PageWrapper>
  );
};