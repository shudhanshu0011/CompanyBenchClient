import "./choose-us-section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <img className="guide-logo" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/Save%20The%20Overhead%20cost%20Icon-02.svg"></img>
            </div>
            <h4>Save The<br></br>Overhead Costs</h4>
            <p>Waiting time for a resource for hire is passed, Company Bench nick of time resource management product</p>
          </div>
          <div className="steps">
            <div className="step-img-container2">
              <img className="steps-link" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage5/step1.svg"></img>
              <img className="guide-logo" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/Availability%20of%20Right%20Resources%20across%20the%20Globe%20Icon-01.svg"></img>
            </div>
            <h4>Availability of Right Resources Across The Globe</h4>
            <p>Availability of resource is the most precious and an integrated part, then finding the right resource, We at company bench has cracked the code of this immensely important criteria, and showcased you only available resources across the globe</p>
          </div>
          <div className="steps">
            <div className="step-img-container3">
              <img className="steps-link" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage5/step1.svg"></img>
              <img className="guide-logo" src="https://companybench.com/assets/cb-new-style/Frontend/imgs/template/Ensure%20Hassel%20free%20Hiring%20Icon-03.svg"></img>
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
