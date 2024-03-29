import { Btn } from "@src/common/button";
import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { usePostLogin } from "@src/hooks/usePostLogin";
// import { RootState } from "@src/store";
import { resetUser, setUser } from "@src/store/reducer/userDataReducer";
import { SignInParams } from "@src/types/components";
import "@styles/common/_pages.scss";
import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./signin.scss";
import { useGetUser } from "@src/hooks/useGetUser";

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  // const user = useSelector((state: RootState) => state?.userData?.user);
  const dispatch = useDispatch();
  const onError = () => {
    dispatch(resetUser());
  };
  const onSettled = () => {
    refetch();
  };
  const { mutate: postLogin } = usePostLogin(
    () => {},
    () => {},
    onSettled
  );
  const { data: userNewData, refetch } = useGetUser(() => {}, onError);

  // useEffect(() => {
  //   const isUserLoggedIn =
  //     user !== undefined && Object.keys(user).length > 0 && user.guid !== "";
  //   if (isUserLoggedIn) {
  //     // navigate("/c/dashboard");
  //   }
  // }, [user]);

  useEffect(() => {
    if (userNewData !== undefined) {
      dispatch(setUser(userNewData?.data.users[0]));
      navigate("/c/dashboard");
    }
  }, [dispatch, navigate, userNewData]);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SignInParams>();

  const onSubmit: SubmitHandler<SignInParams> = (data) => {
    handlePostJobs(data);
  };

  const handlePostJobs = (formdata: SignInParams) => {
    postLogin(formdata);
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
            <Col sm={12} md={6} lg={4} className="mx-auto">
              <Form onSubmit={handleSubmit(onSubmit)} className="mt-20">
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="font-sm mb-10">
                    Username or Email address *
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
                <Form.Group className="mb-3" controlId="">
                  <Form.Label className="font-sm mb-10">Password *</Form.Label>
                  <Form.Control
                    type="password"
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
                      title="Login"
                      type="submit"
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col sm={12}>
                    <div className="text-muted text-center font-sm mb-15 mt-15">
                      Don't have an Bench Account?{" "}
                      <a href="/signup" className="link">
                        Sign up
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
