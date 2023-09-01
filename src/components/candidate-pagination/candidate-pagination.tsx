import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useGetCandidates } from "@hooks/useGetCandidates";
import { Btn } from "../../common/button";
import "./candidate-pagination.scss";
import { useGetJobLocations } from "@hooks/useGetJobLocations";
import { ReactComponent as AboutIcon } from "../../assets/icons/icon-about.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/icons/experience.svg";
import { ReactComponent as SalaryIcon } from "../../assets/icons/salary.svg";
import { ReactComponent as UpdatedIcon } from "../../assets/icons/updated.svg";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

interface LocationOption {
  value: string;
  label: string;
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

interface Candidate {
  candidateId: number,
  vendorId: number,
  firstName: string,
  lastName: string,
  email: string,
  location: string,
  skill: string[],
  summary: string,
  hourlyPrice: number,
  certifications: string[],
  projects: string[],
  designation: string,
  status: string,
}

export default function CandidatePagination() {
  const [locationLists, setLocationLists] = React.useState<LocationOption[]>([]);
  const [CandidateList, setCandidateLists] = React.useState<Candidate[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [candidateDetails, setCandidateDetails] = React.useState<Candidate>();

  const {data: jobLocationData} = useGetJobLocations();
  const [candidateTableStyle, setCandidateTableStyle] = React.useState("candidate-table");
  const [candidateDetailStyle, setCandidateDetailStyle] = React.useState("candidate-details-collapsed");

  const { data: candidateData } = useGetCandidates();

  React.useEffect(() => {
    if (candidateData && Array.isArray(candidateData)) {
      const candidates: Candidate[] = candidateData.map((tmp: any) => ({
        candidateId: tmp.candidateId,
        vendorId: tmp.vendorId,
        firstName: tmp.firstName,
        lastName: tmp.lastName,
        email: tmp.email,
        location: tmp.location,
        skill: tmp.skill,
        summary: tmp.summary,
        hourlyPrice: tmp.hourlyPrice,
        certifications: tmp.certifications,
        projects: tmp.projects,
        designation: tmp.designation,
        status: tmp.status,
      }));
      setCandidateLists(candidates);
    }
  }, [candidateData]);

  React.useEffect(() => {
    if (jobLocationData) {
      const options: LocationOption[] = jobLocationData.map((tmp: any) => ({
        value: tmp.cityId,
        label: tmp.cityName
      }));
      setLocationLists(options);
    }
  }, [jobLocationData]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - CandidateList.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const showDetail = (candidateProp: Candidate) => {
    setCandidateTableStyle("candidate-table-collapsed");
    setCandidateDetailStyle("candidate-details");
    
    setCandidateDetails(candidateProp);
  }

  const hideDetail = () => {
    setCandidateTableStyle("candidate-table");
    setCandidateDetailStyle("candidate-details-collapsed");
  }

  const findLocById = (id: string) => {
    const location = locationLists.find(loc => loc.value == id);
    return location?.label;
  };

  return (
    <div style={{display:'flex'}}>
      <div className={candidateTableStyle}>
        <TableContainer style={{ width:'100%',borderRadius:'15px'}} component={Paper}>
        <Table sx={{ width:'100%' }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? CandidateList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : CandidateList
            ).map((row) => (
              <TableRow key={row.candidateId}>
                <TableCell component="th" scope="row">
                  <h6>{row.firstName} {row.lastName}</h6>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {
                    (candidateTableStyle=="candidate-table") ? 
                    <h6>
                      {/* {row.skill[0]} */}
                      Java, React
                    </h6>
                    : <p></p>
                  }
                </TableCell>
                <TableCell style={{ width: 200 }} align="right">
                  <h6>{row.designation}</h6>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h6>
                    {findLocById(row.location)}
                  </h6>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <Btn className='btn-apply-now' title='View Details' handleOnClick={() => showDetail(row)}></Btn>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={5}
                count={CandidateList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      </div>
      <div className={candidateDetailStyle}>
        <div style={{height:'600px', marginLeft:'2%', borderRadius:'15px'}}>                    
          <div className={`panel-white job-overview`}>
            <div className="mb-15">
              <div className="panel_header flex-box justify-content-space-between">
                <h5 className="pb-15">{candidateDetails?.firstName} {candidateDetails?.lastName}</h5>
                <h6><Btn className='btn-contact-us' title={"Close"} handleOnClick={hideDetail}></Btn></h6>
              </div>
              <div className="divider-text-center" style={{marginTop:'5px'}}></div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                <div className="sidebar-icon-item about-icon">
                  <AboutIcon />
                </div>
                <div className="sidebar-text-info ml-10 skill_custom">
                  <span className="text-description industry-icon mb-10">
                    Skills
                  </span>
                  <Btn
                    className="btn btn-grey-small mr-5 mb-5"
                    title="Java, React"
                  />
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
                        {findLocById(candidateDetails?.location ? candidateDetails?.location : "Anywhere in India")}
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
                  <strong className="small-heading">3 years of experience</strong>
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
                    More than ₹ {candidateDetails?.hourlyPrice ? candidateDetails?.hourlyPrice*30 : 0}/ Month
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
                  <p>{candidateDetails?.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
