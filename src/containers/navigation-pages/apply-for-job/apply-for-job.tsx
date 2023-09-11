
import { Col } from "react-bootstrap";
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./apply-for-job.scss";
import { useGetTechnology } from "@hooks/useGetTechnology";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { DropdownOption } from "@srctypes/common";

type Inputs = {
  firstName: string
  lastName: string
  email: string
  mobile: number
  technology: string
  availability: string
}

export const ApplyForJob = (): JSX.Element => {
  const [technologyList, setTechnologyLists] = useState<DropdownOption[]>([]);
  const {data: technologyData} = useGetTechnology();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  useEffect(() => {
    if (technologyData?.data.technologys && Array.isArray(technologyData.data.technologys)) {
      const options: DropdownOption[] = technologyData.data.technologys.map((tmp: any) => ({
        value: tmp.tecnologyId,
        label: tmp.technologyName
      }));
      setTechnologyLists(options);
    }
  }, [technologyData]);

  return (
    <PageWrapper>
        <div className="body-items">
          <Col xs={12} md={2}>
            <div className="nav pt-0">
              <div className="sidebar-border-bg">
                <span className="text-grey">WE ARE</span>
                <span className="text-hiring">HIRING</span>
              </div>
            </div>
          </Col>
          <Col md={10} className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="create-text"><h3>Create New Account</h3></div>
              <div className="apply-job-form">
                <div className="upload-resume">
                  <div><label>Upload Resume*</label></div>
                  <input className="resume-file-upload" placeholder="Upload" type="file"></input>
                </div>
                <div className="personel-detail">
                  <div className="first-name-apply-job">
                    <div><label>First Name*</label></div>
                    <input placeholder="First Name" {...register("firstName", { required: true })}></input>
                    {errors.firstName && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*First Name is required</span>}
                  </div>
                  <div>
                    <div><label>Last Name*</label></div>
                    <input placeholder="Last Name" {...register("lastName", { required: true })}></input>
                    {errors.lastName && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Last Name is required</span>}
                  </div>
                  <div className="email-apply-job">
                    <div><label>Email*</label></div>
                    <input placeholder="Email" {...register("email", { required: true })}></input>
                    {errors.email && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Email is required</span>}
                  </div>
                  <div>
                    <div><label>Contact Number*</label></div>
                    <input placeholder="Contact Number" {...register("mobile", { required: true })}></input>
                    {errors.mobile && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Contact Number is required</span>}
                  </div>
                </div>
                <div className="select-tech">
                  <div><label>Select Technology*</label></div>
                  <select {...register("technology", { required: true })} placeholder="Select Technology">
                    {
                      technologyList.map((technology)=>(
                        <option key={technology.value}>{technology.label}</option>
                      ))
                    }
                  </select>
                  {errors.technology && <span style={{fontSize:'10px', paddingLeft:'15px', color:'red'}}>*Technology is required</span>}
                </div>
                <div className="availaiblity-option">
                  <div><label>Availability*</label></div>
                  <div className="radio-option">
                    <input type="radio" value="1" {...register("availability", { required: true })}/>
                    <label>Full Time</label>
                    <input type="radio" value="2" {...register("availability", { required: true })}/>
                    <label>Part Time</label>
                  </div>
                </div>
                <input type="submit" className="create-account-btn" value="Create My Account" style={{width:'180px'}}/>
              </div>
            </form>
          </Col>
        </div>
    </PageWrapper>
  );
};