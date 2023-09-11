import "./choose-us-section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SaveOverheadIcon from "../../../assets/images/Save The Overhead cost Icon-02 (1).svg"
import AvailabilityIcon from "../../../assets/images/Availability of Right Resources across the Globe Icon-01.svg"
import EnsureHassleIcon from "../../../assets/images/Ensure Hassel free Hiring Icon-03.svg"
import stepsPath from "../../../assets/images/step1.svg"

export const ChooseUsSection = () => {
  return (
    <section className='choose-us-container'>
      <div className="main-container">
        <div className="choose-us-header-area">
          <h2>Why Choose Us?</h2>
          <p>At Company Bench, we are highly selective about the software, domains,
            and technologies we focus on. We provide companies with state-of-the-art
              solutions that help them build a team of skilled professionals.</p>
        </div>
        <div className="step-guide">
          <div className="steps">
            <div className="step-img-container1">
              <img className="guide-logo" src={SaveOverheadIcon}></img>
            </div>
            <h4>Save The<br></br>Overhead Costs</h4>
            <p>Waiting time for a resource for hire is passed, Company Bench nick of time resource management product</p>
          </div>
          <div className="steps">
            <div className="step-img-container2">
              <img className="steps-link" src={stepsPath}></img>
              <img className="guide-logo" src={AvailabilityIcon}></img>
            </div>
            <h4>Availability of Right Resources Across The Globe</h4>
            <p>Availability of resource is the most precious and an integrated part, then finding the right resource, We at company bench has cracked the code of this immensely important criteria, and showcased you only available resources across the globe</p>
          </div>
          <div className="steps">
            <div className="step-img-container3">
              <img className="steps-link" src={stepsPath}></img>
              <img className="guide-logo" src={EnsureHassleIcon}></img>
            </div>
            <h4>Ensure Hassel Free Hiring</h4>
            <p>We will take care of all your hiring and resource management needs and present you a customized, tailored solution to meet your present and future demand of resources</p>
          </div>
        </div>
        <div className="contact-us-btn">
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