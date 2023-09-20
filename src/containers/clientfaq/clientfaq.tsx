import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./clientfaq.scss";
import iconTopBanner from "@assets/images/icon-top-banner.png";
import bannerimg from "@assets/images/banner2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChooseUsSection } from '@src/components/home-components/choose-us-section';
import { SendUsEnquiry } from '@src/components/send-us-enquiry';
import { ReviewSection } from '@src/components/home-components/review-section';

const ClientFandQ = (): JSX.Element => {

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
              <h1 className='service-head'>Client</h1>
              <h1>Frequently Asked Questions</h1>
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
          <ChooseUsSection/>
          <div className='hire-developer-faq'>
              <h2>Frequently Asked Questions</h2>
              <div className='faq-content'>
                <div className='faq-card'>
                  <h4>How do you make sure that all my requirements are fulfilled on time?</h4>
                  <p>Company Bench has a vast database of professionals from varied fields possessing a range of different skills. Once you put in your request, we would provide you with options that best suit your requirements and make sure that your work is done on time. You can trust us on the quality of professionals we help you hire.</p>
                </div>

                <div className='faq-card'>
                  <h4>What if we like the services provided by your professionals but feel they need some additional training?</h4>
                  <p>We are associated with some of the best trainers and IT education experts that would help the concerned professional get trained in the required field. You can continue with their services once the training is completed.</p>
                </div>

                <div className='faq-card'>
                  <h4>How can I get more information about a specific professional I am interested in hiring?</h4>
                  <p>You can write us an email requesting more information about a specific professional. We would get in touch with them and provide you with all the required information.</p>
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
          <SendUsEnquiry/>
          <ReviewSection/>
        </section>
      </PageWrapper>
    </div>
  );
};

export default ClientFandQ;
