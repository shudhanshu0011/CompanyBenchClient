import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { RowClickedEvent } from "ag-grid-community";
import { SelectDropdown } from "@common/select";
import { Paper } from "@common/Paper";
import { AppPagination } from "@common/app-pagination";
import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { CandidateDetails } from "@components/candidate-detail/candidate-detail";
import { Btn } from "@src/common/button";
import { useGetCandidates } from "@hooks/useGetCandidates";
import { DropdownOption } from "@src/types/common";
import { useGetJobLocationsList } from "@src/hooks/useGetJobLocations";
import { Candidate } from "@src/types/components";
import { defaultColumns } from "./coloumn-types/coloumn-types";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@styles/common/_pages.scss";
import "./candidates.scss";
import { Link } from "react-router-dom";


export const Candidates = (): JSX.Element => {
  const [technologyList, setTechnologyLists] = useState<DropdownOption[]>([]);
  const [locationList, setLocationLists] = useState<DropdownOption[]>([]);

  const technologiesData = useSelector(
    (state: RootState) => state.appData.technologies
  );

  const { data: locationData } = useGetJobLocationsList();
  const { data: candidateData } = useGetCandidates();

  const [showDetail, setShowDetail] = useState(false);
  const [rowData, setRowData] = useState<Array<Candidate>>();
  const [selectedCandidate, setSelectedCandidate] = useState();

  useEffect(() => {
    setRowData(candidateData?.data?.candidate);
  }, [candidateData?.data.candidate]);

  useEffect(() => {
    if (
      technologiesData?.technologys &&
      Array.isArray(technologiesData?.technologys)
    ) {
      const options: DropdownOption[] = technologiesData.technologys.map(
        (tmp) => ({
          value: tmp.technologyId,
          label: tmp.technologyName,
        })
      );
      setTechnologyLists(options);
    }
  }, [technologiesData]);

  useEffect(() => {
    if (locationData?.data.jobs && Array.isArray(locationData.data.jobs)) {
      const options: DropdownOption[] = locationData.data.jobs.map((tmp) => ({
        value: tmp.cityId,
        label: tmp.cityName,
      }));
      setLocationLists(options);
    }
  }, [locationData]);

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

  const handleRowClicked = (event: RowClickedEvent) => {
    setSelectedCandidate(event.data);
    setShowDetail(true);
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
            <CandidateDetails
              handleShowDetails={handleShowDetails}
              selectedCandidate={selectedCandidate}
            />
          ) : (
            <Col xs={12} md={10}>
              <div className="box-contents">
                <h3 className="mb-35">Candidates</h3>
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
                          options={locationList}
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
                  <div className="ag-theme-alpine react-table">
                    <AgGridReact
                      rowData={rowData}
                      columnDefs={defaultColumns()}
                      onRowClicked={(event) => handleRowClicked(event)}
                      className="candidate-data-table"
                    />
                  </div>
                  <Link to="/signin">
                    <Btn
                      title="Login to see more"
                      className="btn btn-default btn-apply font-sm mt-4"
                    />
                  </Link>
                </Paper>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </PageWrapper>
  );
};
