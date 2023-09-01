
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { Paper } from "@common/Paper";
import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper-user";
import "./allcandidates.scss";
import { Sidebar } from "../../components/sidebar/sidebar";
import "@styles/common/_pages.scss";
import CandidatePagination from "@components/candidate-pagination/candidate-pagination";

export const AllCandidates = (): JSX.Element => {
  const options = [
    { value: ".NET", label: ".NET" },
    { value: "Android", label: "Android" },
    { value: "Angular", label: "Angular" },
    { value: "Apttus CPQ", label: "Apttus CPQ" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Automation Anywhere", label: "Automation Anywhere" },
  ];
  return (
    <PageWrapperUser>
      <div className="body-items">
        <Sidebar activeLink="/allcandidates" />
        <Col>
          <div className="box-content pt-40 pl-30">
            <h3 className="mb-35">All Candidates</h3>
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
            <CandidatePagination/>
          </div>
        </Col>
      </div>
    </PageWrapperUser>
  );
};
