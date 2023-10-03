import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Paper } from "@src/common/Paper";
import { Btn } from "@src/common/button";
import { SelectDropdown } from "@src/common/select";
import { DropdownOption } from "@src/types/common";
import DatePicker from "react-datepicker";
import {
  Job,
  SubmitInputsTypes,
  SubmitPostJobParams,
} from "@src/types/components";
import { useSelector } from "react-redux";
import { RootState } from "@src/store";
import {
  dropDownMapperLocations,
  getMappedLocations,
  dropdownMapperTechnologies,
  getMappedTechnologies,
  dropdownMapperJobStatus,
  getMappedJobStatus,
  getDate,
} from "@src/utils/helpers";
import "react-datepicker/dist/react-datepicker.css";
import "./post-job-form.scss";

interface Props {
  handlePostJobs(formData: SubmitPostJobParams): void;
  isFormDisabled?: boolean;
  job?: Job;
  handleFormDisabled?(): void;
  showAction?: boolean;
}
export const PostJobForm = ({
  handlePostJobs,
  isFormDisabled,
  job,
  handleFormDisabled,
  showAction,
}: Props) => {
  const {
    handleSubmit,
    formState: { errors, isDirty },
    control,
    register,
    clearErrors,
    reset,
    setValue,
  } = useForm<SubmitInputsTypes>();
  const [jobDetail, setJobDetail] = useState<Job>();
  const [jobLocation, setJobLocation] = useState<DropdownOption[]>([]);
  const [jobSkill, setJobSkill] = useState<DropdownOption[]>([]);
  const [statusJob, setStatusJob] = useState<DropdownOption>();

  // useEffect(() => {

  //   let defaultValues = {} as Job;
  //   defaultValues.jobHeading =job?.jobHeading as string;
  //   defaultValues.description =job?.description as string;
  //   defaultValues.monthlyBudget =job?.monthlyBudget as string;
  //   defaultValues.experienceLevel =job?.experienceLevel as number;
  //   defaultValues.duration =job?.duration as number;
  //   defaultValues.openpositions =job?.openpositions as string;
  //   defaultValues.location =job?.location as string[];
  //   defaultValues.skill =job?.skill as string[];
  //   defaultValues.jobStatus =job?.jobStatus as string;
  //   reset({ ...defaultValues });
  // }, [job, reset]);

  const {
    jobHeading,
    description,
    monthlyBudget,
    experienceLevel,
    duration,
    openpositions,
    startdate,
  } = (jobDetail || {}) as Job;

  const [startDate, setStartDate] = useState<string>();

  const allLocationsList = useSelector(
    (state: RootState) => state.appData.location
  );

  const technologiesData = useSelector(
    (state: RootState) => state.appData.technologies
  );

  const jobStatusList = useSelector(
    (state: RootState) => state.appData.jobStatus
  );

  const onSubmit: SubmitHandler<SubmitInputsTypes> = (
    data: SubmitInputsTypes
  ) => {
    const formData = { ...data } as SubmitPostJobParams;
    const skillsArray = [] as Array<string>;

    (data.skill as Array<DropdownOption>).forEach((item: DropdownOption) => {
      skillsArray.push(item.value as string);
    });
    formData.location = (
      data?.location as Array<DropdownOption>
    )[0].value?.toString() as string;
    formData.jobStatus = (data?.jobStatus as DropdownOption).value as string;
    formData.skill = skillsArray;
    formData.startdate = formData?.startdate;
    formData.company = "ABC";
    formData.hourlyPrice = 2000;
    formData.clientId = 17739;
    formData.userSfId = "0013C00000pi60aQAA";
    handlePostJobs(formData);
  };

  const getFormEdit = () => {
    return (
      <div className="flex-box form-btn-right">
        <Button
          className={`btn  mb-10 ml-5 mr-5 ${
            isFormDisabled ? "edit-form-button" : "close-form-button"
          }`}
          onClick={handleFormDisabled}
        >
          {isFormDisabled ? <EditOutlinedIcon /> : <CloseIcon />}
        </Button>
        <Btn className="btn" title="Save" type="submit" disabled={!isDirty} />
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => setJobDetail(job), 1000);
  }, [job]);

  useEffect(() => {
    reset(job);
  }, [job, reset]);

  useEffect(() => {
    const location = getMappedLocations(
      (jobDetail as Job)?.location,
      allLocationsList?.jobs
    );

    const skill = getMappedTechnologies(
      (jobDetail as Job)?.skill,
      technologiesData?.technologys
    );

    const jobStatus = getMappedJobStatus(
      (jobDetail as Job)?.jobStatus,
      jobStatusList?.jobs
    );

    setJobLocation(location);
    setJobSkill(skill);
    setStatusJob(jobStatus);
    setStartDate(startdate);
  }, [
    allLocationsList?.jobs,
    jobDetail,
    jobStatusList?.jobs,
    startdate,
    technologiesData?.technologys,
  ]);

  const handleLocationChange = (data: DropdownOption[]) => {
    setJobLocation(data);
    setValue("location", data);
    clearErrors("location");
  };
  const handleSkillChange = (data: DropdownOption[]) => {
    setJobSkill(data);
    setValue("skill", data);
    clearErrors("skill");
  };
  const handleStatusChange = (data: DropdownOption) => {
    setStatusJob(data);
    setValue("jobStatus", data);
    clearErrors("jobStatus");
  };
  const handleDate = (date: string) => {
    setStartDate(date);
    setValue("startdate", date);
    clearErrors("startdate");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Paper titleRight={showAction ? getFormEdit() : null}>
        <Row>
          <Col xs={12} lg={6}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="font-sm color-text-mutted mb-10">
                Job Title *
              </Form.Label>
              <Form.Control
                type="text"
                className="font-sm"
                placeholder="Enter Title"
                {...register("jobHeading", { required: true })}
                disabled={isFormDisabled}
                defaultValue={jobHeading}
              />
              {errors.jobHeading && (
                <span className="pt-10 font-xs error flex-box">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="font-sm color-text-mutted mb-10">
                Location
              </Form.Label>

              <Controller
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    options={dropDownMapperLocations(allLocationsList?.jobs)}
                    value={jobLocation}
                    placeholder="Select City"
                    isClearable
                    isDisabled={isFormDisabled}
                    size="lg"
                    className="font-sm"
                    isMulti
                    onChange={handleLocationChange}
                  />
                )}
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="pt-10 font-xs error flex-box">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="font-sm color-text-mutted mb-10">
                Skills *
              </Form.Label>
              <Controller
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    options={dropdownMapperTechnologies(
                      technologiesData?.technologys
                    )}
                    value={jobSkill}
                    placeholder="You can add upto 10 skills"
                    isClearable
                    size="lg"
                    className="font-sm"
                    isMulti
                    isDisabled={isFormDisabled}
                    onChange={handleSkillChange}
                  />
                )}
                {...register("skill", { required: true })}
              />
              {errors.skill && (
                <span className="pt-10 font-xs error flex-box">
                  This field is required
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="font-sm color-text-mutted mb-10">
                Summary *
              </Form.Label>
              <Form.Control
                as="textarea"
                className="font-sm"
                placeholder="Description"
                disabled={isFormDisabled}
                defaultValue={description}
                {...register("description", { required: true })}
              />
            </Form.Group>
            {errors.description && (
              <span className="font-xs error flex-box">
                This field is required
              </span>
            )}
          </Col>
          <Col xs={12} lg={6}>
            <div className="border p-30 mt-30">
              <Row>
                <Col xs={12} lg={6}>
                  <Form.Group className="mb-25" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Monthly Budget (INR) *
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Monthly Budget"
                      className="font-sm"
                      disabled={isFormDisabled}
                      defaultValue={monthlyBudget}
                      {...register("monthlyBudget", { required: true })}
                    />
                    {errors.monthlyBudget && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-25" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Project Start Date *
                    </Form.Label>

                    <Form.Control
                      type="date"
                      placeholder="Enter Date"
                      className="font-sm"
                      defaultValue={getDate(startDate as string)}
                      disabled={isFormDisabled}
                      onChange={handleDate}
                      {...register("startdate", { required: true })}
                    />

                    {errors.startdate && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Status
                    </Form.Label>
                    <Controller
                      control={control}
                      render={({ field }) => (
                        <SelectDropdown
                          {...field}
                          options={dropdownMapperJobStatus(jobStatusList?.jobs)}
                          value={statusJob}
                          placeholder="Status"
                          isClearable
                          size="lg"
                          className="font-sm"
                          isDisabled={isFormDisabled}
                          onChange={handleStatusChange}
                        />
                      )}
                      {...register("jobStatus", { required: true })}
                    />
                    {errors.jobStatus && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6}>
                  <Form.Group className="mb-25" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Minimum Experience *
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Minimum Experience (in Years)"
                      className="font-sm"
                      disabled={isFormDisabled}
                      defaultValue={experienceLevel}
                      {...register("experienceLevel", { required: true })}
                    />
                    {errors.experienceLevel && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-25" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Duration in Months *
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Project Duration in Months"
                      className="font-sm"
                      disabled={isFormDisabled}
                      defaultValue={duration}
                      {...register("duration", { required: true })}
                    />
                    {errors.duration && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label className="font-sm color-text-mutted mb-10">
                      Open positions *
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter No. Position"
                      className="font-sm"
                      disabled={isFormDisabled}
                      defaultValue={openpositions}
                      {...register("openpositions", { required: true })}
                    />
                    {errors.openpositions && (
                      <span className="pt-10 font-xs error flex-box">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        {!showAction && (
          <Row>
            <Col>
              <div className="divider-text-center mt-20 mb-40"></div>
              <Btn className="btn-apply-now" title="Submit" type="submit" />
            </Col>
          </Row>
        )}
      </Paper>
    </Form>
  );
};
