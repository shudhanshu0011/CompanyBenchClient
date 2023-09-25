import "./send-us-enquiry.scss";
import sendusenquiryimg from "@assets/images/Send Us Enquiry.svg";
import { ContactUsForm } from "../contact-us-form";

export const SendUsEnquiry = () => {

  return (
    <div className='hire-enquiry-container'>
      <h2>Send Us Enquiry</h2>
      <div className='hire-developer-enquiry'>
        <div className='hero-banner-img'>
          <img src={sendusenquiryimg}></img>
        </div>
        <div className='enquiry-content'>
          <div className="hire-enquiry-form">
            <ContactUsForm/>
          </div>
        </div>
      </div>
    </div>
  );
};