import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Paper } from "@src/common/Paper";
import { Btn } from "@src/common/button";
import { SelectDropdown } from "@src/common/select";
import "react-datepicker/dist/react-datepicker.css";
import "./post-job-form.scss";
import {
  cityOptions,
  skillOptions,
  statusOptions,
} from "@src/assets/__mock__/content";
import { DropdownOption } from "@src/types/common";
import { SubmitInputsTypes, SubmitPostJobParams } from "@src/types/components";

interface Props {
  handlePostJobs(formData: SubmitPostJobParams): void;
}
export const PostJobForm = ({ handlePostJobs }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    clearErrors,
  } = useForm<SubmitInputsTypes>();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit: SubmitHandler<SubmitInputsTypes> = (
    data: SubmitInputsTypes
  ) => {
    const formData = { ...data } as SubmitPostJobParams;
    const skillsArray = [] as Array<string>;

    (data.skill as Array<DropdownOption>).forEach((item: DropdownOption) => {
      skillsArray.push(item.value as string);
    });
    formData.location = (data?.location as Array<DropdownOption>)[0]
      .value as string;
    formData.jobStatus = (data?.jobStatus as DropdownOption).value as string;
    formData.skill = skillsArray;
    formData.startDate = (startDate as Date).toISOString().split("T")[0];
    handlePostJobs(formData);
  };

  const handleDate = (date: Date) => {
    setStartDate(date as Date);
    clearErrors("startDate");
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
                    options={cityOptions}
                    placeholder="Select City"
                    isClearable
                    size="lg"
                    className="font-sm"
                    isMulti
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
                    options={skillOptions}
                    placeholder="You can add upto 10 skills"
                    isClearable
                    size="lg"
                    className="font-sm"
                    isMulti
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

                    <Controller
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          value={field.value as string}
                          onChange={handleDate}
                          className="font-sm"
                          selected={startDate}
                        />
                      )}
                        {...register("startDate", { required: true })}
                    />

                    {errors.startDate && (
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
                          options={statusOptions}
                          placeholder="Status"
                          isClearable
                          size="lg"
                          className="font-sm"
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
        <Row>
          <Col>
            <div className="divider-text-center mt-20 mb-40"></div>
            <Btn className="btn-apply-now" title="Submit" type="submit" />
          </Col>
        </Row>
      </Form>
    </Paper>
  );
};
