import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Col } from "react-bootstrap";
import { DropdownOption } from "@src/types/common";
import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { useGetTechnologies } from "@src/hooks/useGetTechnologies";
import "@styles/common/_pages.scss";
import "./apply-for-job.scss";

interface Inputs {
  firstName: string
  lastName: string
  email: string
  mobile: number
  technology: string
  availability: string
  file: string
}

export const ApplyForJob = (): JSX.Element => {
  const [technologyList, setTechnologyLists] = useState<DropdownOption[]>([]);
  const {data: technologyData} = useGetTechnologies();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  useEffect(() => {
    if (technologyData?.data.technologys && Array.isArray(technologyData.data.technologys)) {
      const options: DropdownOption[] = technologyData.data.technologys.map((tmp) => ({
        value: tmp.technologyId,
        label: tmp.technologyName
      }));
      setTechnologyLists(options);
    }
  }, [technologyData]);

  return (
    <PageWrapper>
        <div className="body-items">
          <Col xs={12} md={2} className="we-hiring-banner">
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
                  <input className="resume-file-upload" placeholder="Upload" type="file" {...register("file", { required: true })}></input>
                  {errors.file && <span>Please upload file with .docx, .pdf extension</span>}
                </div>
                <div className="personel-detail">
                  <div className="first-name-apply-job">
                    <div><label>First Name*</label></div>
                    <input placeholder="First Name" {...register("firstName", { required: true })} className={errors.firstName ? "error-input" : "form-input-field"}></input>
                    {errors.firstName && <span>First Name is required</span>}
                  </div>
                  <div>
                    <div><label>Last Name*</label></div>
                    <input placeholder="Last Name" {...register("lastName", { required: true })} className={errors.lastName ? "error-input" : "form-input-field"}></input>
                    {errors.lastName && <span>Last Name is required</span>}
                  </div>
                  <div className="email-apply-job">
                    <div><label>Email*</label></div>
                    <input placeholder="Email" {...register("email", { required: true })} className={errors.email ? "error-input" : "form-input-field"}></input>
                    {errors.email && <span>Email is required</span>}
                  </div>
                  <div>
                    <div><label>Contact Number*</label></div>
                    <input placeholder="Contact Number" {...register("mobile", { required: true })} className={errors.mobile ? "error-input" : "form-input-field"}></input>
                    {errors.mobile && <span>Contact Number is required</span>}
                  </div>
                </div>
                <div className="select-tech">
                  <div><label>Select Technology*</label></div>
                  <select {...register("technology", { required: true })} placeholder="Select Technology" className={errors.technology ? "error-input" : "form-input-field"}>
                    {
                      technologyList.map((technology)=>(
                        <option key={technology.value}>{technology.label}</option>
                      ))
                    }
                  </select>
                  {errors.technology && <span>Technology is required</span>}
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
                <input type="submit" className="create-account-btn" value="Create My Account" />
              </div>
            </form>
          </Col>
        </div>
    </PageWrapper>
  );
};