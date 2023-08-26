import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { Paper } from "@common/Paper";
import { AppPagination } from "@common/app-pagination";
import { CandidateCard } from "@components/candidate-card";
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { CandidateDetails } from "@components/candidate-detail/candidate-detail";
// import { useGetCandidates } from "@hooks/useGetCandidates";
import { Btn } from "@src/common/button";

import "@styles/common/_pages.scss";
import "./candidates.scss";

export const Candidates = (): JSX.Element => {
  // const { data: candidateData } = useGetCandidates();
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

  return (
    <PageWrapper>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
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
            <Col xs={12} md={10}>
              <div className="box-content pt-40 pl-30">
                <h3 className="mb-35">Candidates</h3>
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
                  <div className="flex-box candidate-card-wrapper">
                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>

                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>
                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>
                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>
                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>
                    <div className="candidate-card-item">
                      <CandidateCard handleShowDetails={handleShowDetails} />
                    </div>
                  </div>
                  <Btn
                    title="Login to see more"
                    className="btn btn-default btn-apply font-sm"
                  />
                </Paper>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </PageWrapper>
  );
};
