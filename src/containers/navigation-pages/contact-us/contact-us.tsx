import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./contact-us.scss";
import logo from "../../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import indialogo from "../../../assets/images/india.png";
import uklogo from "../../../assets/images/uk.jpg";

type Inputs = {
  firstName: string
  lastName: string
  email: string
  companyName: string
  contactNumber: number
  description: string
}

export const ContactUs = (): JSX.Element => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <PageWrapper>
        <section className="contact-body">
          <div className="contact-banner">
            <h2>Contact Us</h2>
            <p>Explore 1000s of immediately available candidates for your project needs</p>
          </div>
          <div className="contact-info">
            <div className="info-banner">
              <div className="info-address">
                <img alt="company-bench" src={logo} />
                <p>hello@companybench.com<br/>
                402, Summer Court, Magarpatta City,<br/>
                Pune, Maharashtra 411013.</p>
              </div>
              <div className="info-call">
                <h6>Call Us</h6>
                <div>
                  <a href="tel:+91-8371010101">
                    <img src={indialogo}></img>
                    +91-8371010101
                  </a>
                </div>
                <div>
                  <a href="tel:+1-830 444 4477">
                    <img src={uklogo}></img>
                    +1-830 444 4477
                  </a>
                </div>
              </div>
              <div className="info-email">
                <h6>Email</h6>
                <a href="email:hello@companybench.com">hello@companybench.com</a>
              </div>
            </div>
          </div>
          <div className="connect-section">
            <h2>Connect With Us</h2>
            <p>We would love to respond to your queries and help you succeed.<br/> Feel free to get in touch with us.</p>
            <div className="map-form">
              <div className="map-box">
                <iframe _ngcontent-mox-c69="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.45131693440462!2d73.9292424795926!3d18.518909423774325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19ead72c829%3A0x4c18c61bbc9c5f07!2sCompany%20Bench!5e0!3m2!1sen!2sin!4v1650446756860!5m2!1sen!2sin" width="100%" height="564" loading="lazy"></iframe>
              </div>
              <div className="query-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <input placeholder="First Name" {...register("firstName", { required: true })} className={errors.firstName ? "error-input" : "form-input-field"}></input>
                    {errors.firstName && <span>First Name is required</span>}
                  </div>
                  <div>
                    <input placeholder="Last Name" {...register("lastName", { required: true })} className={errors.lastName ? "error-input" : "form-input-field"}></input>
                    {errors.lastName && <span>Last Name is required</span>}
                  </div>
                  <div>
                    <input placeholder="Email" {...register("email", { required: true })} className={errors.email ? "error-input" : "form-input-field"}></input>
                    {errors.email && <span>Email is required</span>}
                  </div>
                  <div>
                    <input placeholder="Company Name" {...register("companyName", { required: true })} className={errors.companyName ? "error-input" : "form-input-field"}></input>
                    {errors.companyName && <span>Company Name is required</span>}
                  </div>
                  <div>
                    <input placeholder="Contact Number" {...register("contactNumber", { required: true })} className={errors.contactNumber ? "error-input" : "form-input-field"}></input>
                    {errors.contactNumber && <span>Contact Number is required</span>}
                  </div>
                  <div>
                    <textarea rows={7} placeholder="Description" {...register("description", { required: false })} className={errors.description ? "error-input" : "form-input-field"}></textarea>
                  </div>
                  <input type="submit" className="query-contact-btn" value="Contact Us"/>
                </form>
              </div>
            </div>
          </div>
        </section>
    </PageWrapper>
  );
};