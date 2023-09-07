import "./how-to-hire-guide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HowToHireGuide = () => {
  return (
    <section className='how-to-container'>
      <div className="main-container-guide">
        <div className="how-to-header-area">
          <h2>How To Hire Developers Through Bench?</h2>
        </div>
        <div className="step-hire-guide">
          <div className="steps-guide">
            <div className="step-img-container1-how-to">
              <img className="guide-logo-how-to" src="https://companybench.com/assets/images/first.png"></img>
            </div>
            <h4>Post Yours Job Requirements</h4>
          </div>
          <div className="steps-guide">
            <div className="step-img-container2-how-to">
              <img className="steps-link-how-to" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage5/step1.svg"></img>
              <img className="guide-logo-how-to" src="https://companybench.com/assets/images/second.png"></img>
            </div>
            <h4>Check Our Available Bench</h4>
          </div>
          <div className="steps-guide">
            <div className="step-img-container3-how-to">
              <img className="steps-link-how-to" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage5/step1.svg"></img>
              <img className="guide-logo-how-to" src="https://companybench.com/assets/images/third.png"></img>
            </div>
            <h4>Hire A Contractor</h4>
          </div>
        </div>
        <div className="contact-us-btn-guide">
          <button
            className="btn btn-default btn-find font-sm"
          >
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
            Contact Us
         </button>
        </div>
      </div>
    </section>
  );
};
