import {  useLocation } from 'react-router-dom';
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { DashboardWrapper } from "@components/dashboard-wrapper/dashboard-wrapper";
import { Paper } from "@src/common/Paper";
import { Row, Col } from "react-bootstrap";
import { CandidateInterviewCard } from "@components/candidate-interview-card";
import "@styles/common/_pages.scss";
import './interview.scss';

export const InterviewList = (): JSX.Element => {
  const location = useLocation();
  return (
    <PageWrapper>
      <DashboardWrapper activeLink={location.pathname}>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Interview List</h3>
          </div>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <Paper>
              <Row className="flex-box candidate-card-wrapper">
                <Col xs={12} md={6}>
                  <CandidateInterviewCard
                    title="Sjdbfjksf Sdfsdfdth"
                    compact={true}
                    position="Jr Developer"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <CandidateInterviewCard
                    title="Test01 31082023"
                    compact={true}
                    position="Jr Developer"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CandidateInterviewCard
                    title="Mike-11 Rosso-11"
                    compact={true}
                    position="Jr Developer"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CandidateInterviewCard
                    title="Mike-10 Rosso-10"
                    compact={true}
                    position="Jr Developer"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CandidateInterviewCard title="Trainer" compact={true} position="Jr Developer" />
                </Col>
                <Col xs={12} md={6}>
                  <CandidateInterviewCard title="Fgdg Dfgdg" compact={true} position="Jr Developer"/>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
      </DashboardWrapper>
    </PageWrapper>
  );
};
