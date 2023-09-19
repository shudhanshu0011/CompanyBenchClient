import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./services.scss";
import serviceData from '@assets/content/mock/services-data';
import iconTopBanner from "@assets/images/icon-top-banner.png";
import bannerimg from "@assets/images/banner1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hirebannerimg from "@assets/images/how to become compbench developer.jpg"
import whyjoinbannerimg from "@assets/images/why join company bench.jpg"
import { HowToHireThrouhgBench } from '@src/components/how-to-hire-through-bench';
import { ChooseUsSection } from '@src/components/home-components/choose-us-section';
import { HireDeveloperBanner } from '@src/components/hire-developer-banner';

interface ServiceDesc {
  url: string;
}

const Services = ({ url: pageUrl }: ServiceDesc): JSX.Element => {
  const services: any = serviceData.find((service) => service.url===pageUrl)

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='service-banner'>
            <div className='service-banner-img'>
              <div className='bottom-img'>
                <img src={iconTopBanner}></img>
              </div>
              <div className='center-img'>
                <img src={bannerimg}></img>
              </div>
              <div className='top-img'>
                <img src={iconTopBanner}></img>
              </div>
            </div>
            <div className='service-header-text'>
              <h1 className='service-head'>{services.service}</h1>
              <h1>Services</h1>
              <h5>Are you looking for {services.service}</h5>
              <p>{services.intro}</p>
              <a href="/c/contact">
                <button
                    className="btn btn-default btn-find font-sm"
                  >
                    <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                    Contact Us
                </button>
              </a>
            </div>
          </div>

          <div className='service-points-container'>
            <div className='bulletpoint-container'>
              <h2>{services.service} Services</h2>
              <h4>We Help You In Hiring IT {services.service}</h4>
              <p>
                {services.description}
              </p>
            </div>
            <div className='service-banner-img'>
              <img src={hirebannerimg}></img>
            </div>
          </div>

          <div className='why-join-points-container'>
            <div className='why-join-banner-img'>
              <img src={whyjoinbannerimg}></img>
            </div>
            <div className='why-join-container'>
              <h2>Conduct a Thorough Research</h2>
              <p>Company Bench allows you to scout the web for search for all open positions for the vacancy you are willing to fill. Also, read thousands of reviews online and get your salary estimate based on the industry standards.</p>
              <h4>Rigorous Tests and Interviews</h4>
              <p>The developers we help you hire have passed through rigorous tests and multiple interviews to obtain an official stamp of recognition for their skills.</p>
              <h4>Assured Seniority of Professionals</h4>
              <p>You can rest assured that all professionals have been passed the seniority tests, relieving you from the time and effort needed for micromanagement of the employees.</p>
            </div>
          </div>
          <ChooseUsSection/>
          <HowToHireThrouhgBench/>
          <HireDeveloperBanner/>
          <div className='hire-developer-faq'>
              <h2>Frequently Asked Questions</h2>
              <div className='faq-content'>
                <div className='faq-card'>
                  <h4>How can i get more information about a specific professional i am interested in hiring?</h4>
                  <p>You can write us an email requesting more information about a specific professional. We would get in touch with them and provide you with all the required information.</p>
                </div>

                <div className='faq-card'>
                  <h4>How do you make sure that all my requirements are fulfilled on time?</h4>
                  <p>Company Bench has a vast database of professionals from varied fields possessing a range of different skills. Once you put in your request, we would provide you with options that best suit your requirements and make sure that your work is done on time. You can trust us on the quality of professionals we help you hire.</p>
                </div>

                <div className='faq-card'>
                  <h4>What if we like the services provided by your professionals but feel they need some additional training?</h4>
                  <p>We are associated with some of the best trainers and IT education experts that would help the concerned professional get trained in the required field. You can continue with their services once the training is completed.</p>
                </div>

                <div className='faq-card'>
                  <h4>How do i know i am hiring a capable professional?</h4>
                  <p>We make regular assessments and reshufflings with our database to ensure that only the best professionals are associated with us. No matter what your requirements are, we help you hire professionals that provide you with state-of-the-art services.</p>
                </div>

                <div className='faq-card'>
                  <h4>Are your professionals well-versed with the latest technologies?</h4>
                  <p>Yes, all the professionals associated with us are well-versed with the latest technologies in their respective fields. They will make sure that you are in sync with the latest technological advancements in the industry.</p>
                </div>
              </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default Services;
