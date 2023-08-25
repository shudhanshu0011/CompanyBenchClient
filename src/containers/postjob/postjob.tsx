import React, { useEffect, useState } from "react";
import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Row, Col } from "react-bootstrap";
import "@styles/common/_pages.scss";
import "./postjob.scss";
import Select from 'react-select';

const defaultFormData = {
    duration: 0,
    skill: [],
    JobHeading: "",
    location: [],
    openpositions: "",
    experienceLevel: "",
    startDate: "",
    hourlyPrice: "",
    description: "",
    jobStatus: "",
};

const skillList = [
  {
    label: "React",
    value: 1,
  },
  {
    label: "Python",
    value: 2
  },
  {
    label: "Django",
    value: 3
  },
  {
    label: "Node Js",
    value: 4,
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
      const options = []
      resData.data.joblocations.map(tmp => {
        options.push({value: tmp.cityId, label: tmp.cityName})
      })
      // console.log(options);
      setLocationLists(options);
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
      const options = []
      resData.data.jobs.map(tmp => {
        options.push({value: tmp.statusId, label: tmp.statusName})
      })
      // console.log(options);
      setStatusList(options);
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
    setFormData(defaultFormData);
    console.log(formData)
  };
  const defaultLocation = [
    {value:1, label: "Anywhere in India"}
  ]

  const defaultStatus = [
    {value: 0, label: "New"}
  ]

  return (
    <PageWrapperUser>
      <div className="body-items">
        <Sidebar activeLink="/newjob"/>
        <Col xs={12} md={10}>
              <div className="box-content pt-40 pl-30">
                <h3 className="mb-35">Post a New Job</h3>
                <div className="form-card">
                  <form onSubmit={onSubmit}>
                    <div className="form">
                      <div className="coll-1">
                        <div className="container">
                          <Row>
                            <label>Job Title*</label>
                            <input type="text" id="JobHeading" value={JobHeading} placeholder="Enter Title" onChange={onChange} />
                          </Row>
                          <Row>
                            <label>Locations</label>
                            <Select
                              className="basic-multi-single"
                              classNamePrefix="select"
                              defaultValue={defaultLocation}
                              isMulti
                              options={locationLists}
                              onChange={(event) => {
                                defaultFormData.location.length=0
                                for(let i=0; i<event.length; i++){
                                  defaultFormData.location.push(event[i].label)
                                }
                                console.log(defaultFormData.location)
                              }}
                            />
                          </Row>
                          <Row>
                            <label>Skills</label>
                            <Select
                              className="basic-multi-single"
                              classNamePrefix="select"
                              isMulti
                              placeholder="You can add upto 10 skills"
                              options={skillList}
                              onChange={(event) => {
                                defaultFormData.skill.length=0
                                for(let i=0; i<event.length; i++){
                                  defaultFormData.skill.push(event[i].label)
                                }
                                console.log(defaultFormData.skill)
                              }}
                            />
                          </Row>
                          <Row>
                            <label>Summary</label>
                            <textarea rows={6} id="description" value={description} placeholder="Description" onChange={onChange}></textarea>
                          </Row>
                        </div>
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
                                  <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={defaultStatus}
                                    options={statusList}
                                    onChange={(event) => {
                                      defaultFormData.jobStatus = event.value;
                                      console.log(defaultFormData.jobStatus)
                                    }}
                                  />
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
    </PageWrapperUser>
  );
};
