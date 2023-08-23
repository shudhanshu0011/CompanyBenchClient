import React, { useEffect, useState } from "react";
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Row, Col } from "react-bootstrap";
import "@styles/common/_pages.scss";
import "./postjob.scss";
import axios from "axios";

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

export const PostJob = (): JSX.Element => {
  // const [locationList, setLocationList] = useState([{'cityName':'', 'cityId': ''}])

  // useEffect(() => {
  //   const fetchData =async () => {
  //     const response = await fetch(`http://localhost:3001/v1/joblocation`);
  //     const newData = await response.json();
  //     setLocationList(newData);
  //     console.log(newData);
  //   };
  //   fetchData();
  // }, [])

  const locationList = [
    {
      cityName: "Delhi",
      cityId: 1,
    },
    {
      cityName: "Guragon",
      cityId: 2,
    },
    {
      cityName: "Hyderabad",
      cityId: 3,
    },
    {
      cityName: "Bangalore",
      cityId: 4,
    }
  ];

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

  const statusList = [
    {
      statusName: "New",
      statusId: 1,
    },
    {
      statusName: "Assigned",
      statusId: 2,
    },
    {
      statusName: "Profile Shared",
      statusId: 3,
    },
    {
      statusName: "Interviews",
      statusId: 4,
    },
    {
      statusName: "Selected",
      statusId: 5,
    },
    {
      statusName: "Won",
      statusId: 6,
    },
    {
      statusName: "Lost",
      statusId: 7,
    },
    {
      statusName: "Hold",
      statusId: 8,
    },
  ];

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
    // fetch("http://localhost:3001/v1/job", {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     formData
    //   })
    // }).then((response) => response.json()).then((data) => {
    //   console.log(data)
    // })
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
                                locationList.map(locations => (
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
                                  <select type="text" id="status" value={jobStatus} placeholder="Select Status" onChange={onChange}>
                                  <option selected disabled hidden>Select an Option</option>
                                    {
                                      statusList.map(statuss => (
                                        <option value={statuss.statusId}>{statuss.statusName}</option>
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
