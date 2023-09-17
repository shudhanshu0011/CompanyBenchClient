import "./send-us-enquiry.scss";
import sendusenquiryimg from "@assets/images/Send Us Enquiry.svg";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  contactNumber: number;
  description: string;
};

export const SendUsEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className='hire-enquiry-container'>
      <h2>Send Us Enquiry</h2>
      <div className='hire-developer-enquiry'>
        <div className='hero-banner-img'>
          <img src={sendusenquiryimg}></img>
        </div>
        <div className='enquiry-content'>
          <div className='hire-enquiry-form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  {errors.firstName && <span>First Name is required</span>}
                  <input placeholder="First Name" {...register("firstName", { required: true })} className={errors.firstName ? "error-input" : "form-input-field"}></input>
                </div>
                <div>
                  {errors.lastName && <span>Last Name is required</span>}
                  <input placeholder="Last Name" {...register("lastName", { required: true })} className={errors.lastName ? "error-input" : "form-input-field"}></input>                          
                </div>
                <div>
                  {errors.email && <span>Email is required</span>}
                  <input placeholder="Email" {...register("email", { required: true })} className={errors.email ? "error-input" : "form-input-field"}></input>                        
                </div>
                <div>
                  {errors.companyName && <span>Company Name is required</span>}
                  <input placeholder="Company Name" {...register("companyName", { required: true })} className={errors.companyName ? "error-input" : "form-input-field"}></input>                        
                </div>
                <div>
                  {errors.contactNumber && <span>Contact Number is required</span>}
                  <input placeholder="Contact Number" {...register("contactNumber", { required: true })} className={errors.contactNumber ? "error-input" : "form-input-field"}></input>                        
                </div>
                <div>
                  {errors.description && <span>Description is required</span>}
                  <textarea rows={7} placeholder="Description" {...register("description", { required: false })} className={errors.description ? "error-input" : "form-input-field"}></textarea>
                </div>
                  <input type="submit" className="query-contact-btn"/>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};