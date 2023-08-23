import React, { useEffect, useState } from "react";
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Row, Col } from "react-bootstrap";
import "@styles/common/_pages.scss";
import "./postjob.scss";

const defaultFormData = {
    duration: 0,
    skill: "",
    JobHeading: "",
    location: "",
    openpositions: 0,
    experienceLevel: 0,
    startDate: "",
    hourlyPrice: 0,
    description: "",
    jobStatus: "",
};

const skillList = [
  {
    skillName: "React",
    skillId: 1,
  },
  {
    skillName: "Python",
    skillId: 2
  },
  {
    skillName: "Django",
    skillId: 3
  },
  {
    skillName: "Node Js",
    skillId: 4,
  },
];

export const PostJob = (): JSX.Element => {
  const [locationLists, setLocationLists] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    const getLocationList = async() => {
      const reqData = await fetch("http://localhost:3001/v1/joblocation", {
        method: 'GET',
        headers: { "service_ref": 123456 },
      });
      const resData = await reqData.json();
      setLocationLists(resData.data.joblocations);
    }
    getLocationList();
  }, []);

  useEffect(() => {
    const getStatus = async () =>{
      const statusData = await fetch("http://localhost:3001/v1/jobstatus/codes", {
        method: 'GET',
        headers: { "service_ref": 123456 },
      });
      const resData = await statusData.json();
      console.log(resData);
      setStatusList(resData.data.jobs)
    }
    getStatus();
  }, []);

  const [formData, setFormData] = useState(defaultFormData);
  const {duration,
         skill,
         JobHeading,
         location,
         openpositions,
         experienceLevel,
         startDate,
         hourlyPrice,
         description,
         jobStatus } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };  

  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/newjob"/>
        <Col xs={12} md={10}>
              <div className="box-content pt-40 pl-30">
                <h3 className="mb-35">Post a New Job</h3>
                <div className="form-card">
                  <form onSubmit={onSubmit}>
                    <div className="form">
                      <div className="coll-1">
                          <Row>
                            <label>Job Title*</label>
                            <input type="text" id="JobHeading" value={JobHeading} placeholder="Enter Title" onChange={onChange} />
                          </Row>
                          <Row>
                            <label>Locations</label>
                            <select className="basic-single" type="text" id="location" value={location} placeholder="Location" onChange={onChange}>
                              <option selected disabled hidden>Select an Option</option>
                              {
                                locationLists.map(locations => (
                                  <option value={locations.cityId}>{locations.cityName}</option>
                                ))
                              }
                            </select>
                          </Row>
                          <Row>
                            <label>Skills</label>
                            <select type="text" id="skill" value={skill} placeholder="Skill" onChange={onChange}>
                            <option selected disabled hidden>Select an Option</option>
                              {
                                skillList.map(skills => (
                                  <option value={skills.skillId}>{skills.skillName}</option>
                                ))
                              }
                            </select>
                          </Row>
                          <Row>
                            <label>Summary</label>
                            <textarea rows={6} id="description" value={description} placeholder="Description" onChange={onChange}></textarea>
                          </Row>
                      </div>
                      <div className="coll-2">
                        <div className="coll-2-card">
                          <div className="coll-2-1">
                                <Row>
                                  <label>Monthly Budget (INR)*</label>
                                  <input type="number" id="hourlyPrice" value={hourlyPrice} placeholder="Enter Monthly Budget" onChange={onChange} />
                                </Row>
                                <Row>
                                  <label>Project Start Date*</label>
                                  <input type="date" id="startDate" value={startDate} placeholder="Select a date" onChange={onChange} />
                                </Row>
                                <Row>
                                  <label>Status</label>
                                  <select type="text" id="jobStatus" value={jobStatus} placeholder="Select Status" onChange={onChange}>
                                    {
                                      statusList.map(status => (
                                        <option value={status.statusId}>{status.statusName}</option>
                                      ))
                                    }
                                  </select>
                                </Row>
                          </div>
                          <div className="coll-2-2">
                                <Row>
                                  <label>Minimum Experience*</label>
                                  <input type="number" id="experienceLevel" value={experienceLevel} placeholder="Minimum Experience (in years)" onChange={onChange} />
                                </Row>
                                <Row>
                                  <label>Duration in Months* </label>
                                  <input type="number" id="duration" value={duration} placeholder="Project Duration in Months " onChange={onChange} />
                                </Row>
                                <Row>
                                  <label>Open positions*</label>
                                  <input type="number" id="openpositions" value={openpositions} placeholder="Enter No. Position" onChange={onChange} />
                                </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submitButton">
                      <button type="submit" className="submit-btn"><span>Submit</span></button>
                    </div>
                  </form>
                  
                </div>
                </div>
            </Col>
      </div>  
    </PageWrapper>
  );
};
