import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { DashboardWrapper } from "@components/dashboard-wrapper/dashboard-wrapper";
import { Paper } from "@src/common/Paper";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { SelectDropdown } from "@common/select";
import { AppPagination } from "@common/app-pagination";
import { JobDetails } from "@src/components/job-detail";
import "./my-jobs.scss";
import "@styles/common/_pages.scss";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { defaultColumns } from "./coloumn-types/coloumn-types";
import { RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Btn } from "@src/common/button";
import { DropdownOption } from "@src/types/common";
import { useGetTechnology } from "@src/hooks/useGetTechnology";
import { useGetJobLocList } from "@src/hooks/useGetJobLocations";
import { useGetJob } from "@src/hooks/useGetJob";

export const MyJobs = (): JSX.Element => {
  const [technologyList, setTechnologyLists] = useState<DropdownOption[]>([]);
  const [locationList, setLocationLists] = useState<DropdownOption[]>([]);
  const {data: technologyData} = useGetTechnology();
  const {data: locationData} = useGetJobLocList();
  const { data: jobData } = useGetJob();
  console.log(jobData);

  const [showDetail, setShowDetail] = useState(false);
  const [rowData, setRowData] = useState();
  const [selectedJob, setSelectedJob] = useState();

  useEffect(() => {
    setRowData(jobData?.data.jobs);
    console.log(rowData);
  }, [jobData?.data.candidate]);

  useEffect(() => {
    if (technologyData?.data.technologys && Array.isArray(technologyData.data.technologys)) {
      const options: DropdownOption[] = technologyData.data.technologys.map((tmp) => ({
        value: tmp.tecnologyId,
        label: tmp.technologyName
      }));
      setTechnologyLists(options);
    }
  }, [technologyData]);

  useEffect(() => {
    if (locationData?.data.jobs && Array.isArray(locationData.data.jobs)) {
      const options: DropdownOption[] = locationData.data.jobs.map((tmp) => ({
        value: tmp.cityId,
        label: tmp.cityName
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
    setSelectedJob(event.data);
    setShowDetail(true);
  };

  return (
    <PageWrapper>
      <DashboardWrapper activeLink={location.pathname}>
          {showDetail ? (
            <JobDetails handleShowDetails={handleShowDetails} job={selectedJob} />
          ) : (
            <Col xs={12} md={12}>
              <div className="box-content">
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
                    />
                  </div>
                  <Btn
                    title="Login to see more"
                    className="btn btn-default btn-apply font-sm mt-4"
                  />
                </Paper>
              </div>
            </Col>
          )}
      </DashboardWrapper>
    </PageWrapper>
  );
};

