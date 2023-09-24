import {  useLocation } from 'react-router-dom';
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { DashboardWrapper } from "@components/dashboard-wrapper/dashboard-wrapper";
import { Paper } from "@src/common/Paper";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { AppPagination } from "@common/app-pagination";
import { CandidateCard } from "@src/components/candidate-card";
import { CandidateDetails } from "@components/candidate-detail/candidate-detail";
import "@styles/common/_pages.scss";

export const Shortlisted = (): JSX.Element => {
  const [showDetail, setShowDetail] = useState(false);

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

  return (
    <PageWrapper>
      <DashboardWrapper activeLink={location.pathname}>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Shortlisted</h3>
          </div>
        </div>
        <Row>
          {showDetail ? (
            <CandidateDetails handleShowDetails={handleShowDetails} />
          ) : (
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
                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Sjdbfjksf Sdfsdfdth"
                
                    />
                  </Col>

                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Test01 31082023"
                
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Mike-11 Rosso-11"
                
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Mike-10 Rosso-10"
                
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Trainer"
                
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <CandidateCard
                      handleShowDetails={handleShowDetails}
                      showAvatar={true}
                      title="Fgdg Dfgdg"
                
                    />
                  </Col>
                </Row>
              </Paper>
            </Col>
          )}
        </Row>
      </DashboardWrapper>
    </PageWrapper>
  );
};
