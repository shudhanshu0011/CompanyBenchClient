import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Col, Form, Row } from "react-bootstrap";
import { Btn } from "@src/common/button";
import { SelectDropdown } from "@src/common/select";
//import { companyOptions } from "@src/assets/__mock__/content";
import { useGetCompanyList } from "@src/hooks/useGetCompany";
import { useCreateUser } from "@src/hooks/useCreateUser";
import "@styles/common/_pages.scss";
import "./signup.scss";

interface InputTypes {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
  isTermsAndCondition: boolean;
  userType: string;
}

export const SignUp = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<InputTypes>();

  const { mutate: createUser } = useCreateUser();

  const { data: companyList } = useGetCompanyList();

  console.log("data data ", companyList)

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    const formData = {
      ...data,
      isEmailVerified: false,
      isActive: false,
      userSource: "abc",
      availability: true,
      mobile: 9898987654,
    };
    createUser(formData);
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="login-register-cover">
          <Row className="justify-content-md-center  mt-30">
            <Col sm={12} md={6} lg={4}>
              <div className="text-center">
                <h2 className="mt-10 mb-25 text-brand-1">Member Sign In</h2>
                <button className="btn social-login hover-up mb-20 font-sm">
                  <img src="social/office365.png" alt="office" />
                  <strong>Sign in with Office 365</strong>
                </button>
                <button className="btn social-login hover-up mb-20 font-sm">
                  <img src="social/google.png" alt="google" />
                  <strong>Sign in with Google</strong>
                </button>
                <div className="divider-text-center font-sm">
                  <span>Or continue with</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={12} md={6} lg={4}>
              <Form onSubmit={handleSubmit(onSubmit)} className="mt-20">
                <Form.Group className="mb-3 flex-box">
                  <label
                    className="flex-box justify-content-space-between checkbox-label"
                    htmlFor="field-client"
                  >
                    <input
                      {...register("userType")}
                      type="radio"
                      value="client"
                      id="field-client"
                      className="checkbox-tab"
                    />
                    <div className="tab-button">I am a Client</div>
                  </label>
                  <label
                    className="flex-box justify-content-space-between checkbox-label"
                    htmlFor="field-vendor"
                  >
                    <input
                      {...register("userType")}
                      type="radio"
                      value="vendor"
                      id="field-vendor"
                      className="checkbox-tab"
                    />
                    <div className="tab-button">I am a Vendor</div>
                  </label>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="font-sm mb-10">
                    First Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-md"
                    placeholder="Steven Job"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="pt-10 font-xs error flex-box">
                      This field is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="font-sm mb-10">Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    className="font-md"
                    placeholder="Steven Job"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="pt-10 font-xs error flex-box">
                      This field is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="font-sm mb-10">Company *</Form.Label>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <SelectDropdown
                        {...field}
                        options={companyList}
                        placeholder="Select Company or Add New"
                        isClearable
                        size="lg"
                        className="font-sm"
                        isMulti
                      />
                    )}
                    {...register("company", { required: true })}
                  />
                  {errors.company && (
                    <span className="pt-10 font-xs error flex-box">
                      This field is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="font-sm mb-10">
                    Work Email *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-md"
                    placeholder="Steven Job"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="pt-10 font-xs error flex-box">
                      This field is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="font-sm mb-10">Password *</Form.Label>
                  <Form.Control
                    type="text"
                    className="font-md"
                    placeholder="************"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="pt-10 font-xs error flex-box">
                      This field is required
                    </span>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3 font-sm flex-box"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label=""
                    {...register("isTermsAndCondition", { required: true })}
                  />
                  <p>
                    Yes, I understand and agree to the{" "}
                    <a href="#" className="link">
                      Bench Terms of Service
                    </a>
                    , including the{" "}
                    <a href="#" className="link">
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="link">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </Form.Group>
                {errors.isTermsAndCondition && (
                  <span className="pt-10 font-xs error flex-box">
                    This field is required
                  </span>
                )}
                <Row className="justify-content-md-center mb-15">
                  <Col sm={12}>
                    <a className="font-sm link" href="page-contact.html">
                      Forgot Password?
                    </a>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col sm={12}>
                    <Btn
                      className="full-w font-sm p-10"
                      title="Create My Account"
                      type="submit"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col sm={12}>
                    <div className="text-muted text-center font-sm mb-15 mt-15">
                      Already have an Bench account?{" "}
                      <a href="/signin" className="link">
                        Sign in
                      </a>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="baloon d-none d-lg-block">
          <img className="shape-1" src="/baloon.svg" alt="JobBox" />
        </div>
        <div>
          <img src="/architect-bg.svg" alt="JobBox" />
        </div>
      </div>
    </PageWrapper>
  );
};
