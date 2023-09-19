import "./how-to-hire-through-bench.scss";
import awsdeveloperlogo from "@assets/images/Hire AWS Developers-03-02.svg";
import icon1 from "@assets/icons/Icon-1.png";
import icon2 from "@assets/icons/Icon-2.png";
import icon3 from "@assets/icons/Icon-3.png";

export const HowToHireThrouhgBench = () => {

  return (
    <div className='hire-guide-container'>
      <div className='hero-banner-img'>
        <img src={awsdeveloperlogo}></img>
      </div>
      <div className='guide-content'>
        <h2>How to Hire Developers through Bench</h2>
        <div>
          <img src={icon1}></img>
          <h4>State your requirement for the position</h4>
        </div>
        <div>
          <img src={icon2}></img>
          <h4>Obtain the required talent immediately</h4>
        </div>
        <div>
          <img src={icon3}></img>
          <h4>Avail of their expertise</h4>
        </div>
      </div>
    </div>
  );
};