import {  useLocation } from 'react-router-dom';
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { DashboardWrapper } from "@components/dashboard-wrapper/dashboard-wrapper";
import { Card } from "@src/common/card";
import { ReactComponent as ManIcon } from "@assets/page/dashboard/man.svg";
import { Paper } from "@src/common/Paper";
import { Btn } from "@src/common/button";
import { VerticalBarChart } from "@components/charts/vertical-bar-chart";
import { PieChart } from "@components/charts/pie-chart";
import { AreaChart } from "@components/charts/area-chart";
import { BubbleChart } from "@components/charts/bubble-chart";
import "@styles/common/_pages.scss";

export const Dashboard = (): JSX.Element => {
  const location = useLocation();
  return (
    <PageWrapper>
      <DashboardWrapper activeLink={location.pathname}>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Dashboard</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="section-box">
              <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title={6}
                    subTitle="My Jobs"
                    type="sm"
                    link='/c/myjobs'
                    cardImg={<ManIcon />}
                  />
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title={480}
                    subTitle="Matching Candidates"
                    type="sm"
                    link='/c/matchingcandidate'
                    cardImg={<ManIcon />}
                  />
                </div>

                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title={65}
                    subTitle="Applied Candidates"
                    type="sm"
                    link='/interestedcandidate'
                    
                    cardImg={<ManIcon />}
                  />
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title={80}
                    subTitle="Shortlisted"
                    type="sm"
                    link='/shortlistedcandidates'
                    
                    cardImg={<ManIcon />}
                  />
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title={15}
                    subTitle="Interviews"
                    type="sm"
                    link='/jobinterviewlist'
                    cardImg={<ManIcon />}
                  />
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                  <Card
                    title="Coming Soon"
                    subTitle="contracts"
                    type="sm"
                    link='/c/dashboard'
                    cardImg={<ManIcon />}
                  />
                </div>
              </div>
            </div>
            <div className="section-box">
              <Paper
                title="Candidates by Technologies"
                titleRight={
                  <Btn
                    title="View All"
                    className="btn candidate-view-btn font-sm"
                  />
                }
              >
                <div className="chart-container">
                  <VerticalBarChart />
                </div>
              </Paper>
            </div>
            <div className="section-box">
              <Paper
                title="My Jobs: 6"
                titleRight={
                  <Btn
                    title="View All"
                    className="btn candidate-view-btn font-sm"
                  />
                }
              >
                <div className="chart-container">
                  <AreaChart />
                </div>
              </Paper>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="section-box">
              <Paper
                title="Shortlisted: 80"
                titleRight={
                  <Btn
                    title="View All"
                    className="btn candidate-view-btn font-sm"
                  />
                }
              >
                <div className="chart-container">
                  <BubbleChart />
                </div>
              </Paper>
            </div>
            <div className="section-box">
              <Paper
                title="Interviews: 15"
                titleRight={
                  <Btn
                    title="View All"
                    className="btn candidate-view-btn font-sm"
                  />
                }
              >
                <div className="chart-container">
                  <PieChart />
                </div>
                
              </Paper>
            </div>
            <div className="section-box">
              <Paper
                title="Applied Candidates: 65"
                titleRight={
                  <Btn
                    title="View All"
                    className="btn candidate-view-btn font-sm"
                  />
                }
              >
                <div className="chart-container">
                  <AreaChart />
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </PageWrapper>
  );
};
