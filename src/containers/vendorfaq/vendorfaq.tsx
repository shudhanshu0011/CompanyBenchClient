import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';
import iconTopBanner from "@assets/images/icon-top-banner.png";
import bannerimg from "@assets/images/banner2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChooseUsSection } from '@src/components/home-components/choose-us-section';
import { SendUsEnquiry } from '@src/components/send-us-enquiry';
import { ReviewSection } from '@src/components/home-components/review-section';

const VendorFandQ = (): JSX.Element => {

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
              <h1 className='service-head'>Vendor</h1>
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
                  <h4>How is Company Bench different from a recruitment portal?</h4>
                  <p>A recruitment portal allows experienced and inexperienced candidates to search for job opportunities and companies to hire them. On the other hand, Company Bench helps organizations hire skilled professionals and allows capable professionals to avail themselves of job opportunities.</p>
                </div>

                <div className='faq-card'>
                  <h4>Is a third party involved between you and the professionals offering their services?</h4>
                  <p>No, you can hire professionals directly through our portal. There is no third party involved between Company Bench and the professionals offering their services.</p>
                </div>

                <div className='faq-card'>
                  <h4>What are the payment terms for being hired by an organization?</h4>
                  <p>The payment terms differ according to the company hiring the professionals, the job to be done, and the mode of hiring chosen. However, the professionals can rest assured that you will have a well-defined contract and/or agreement in place before they start working with a specific organization.</p>
                </div>

                <div className='faq-card'>
                  <h4>Do you offer any guarantee to the vendors associated with Company Bench?</h4>
                  <p>Company Bench does not offer any guarantee to the vendors associated with them. However, we are associated with a number of clients with a number of requirements, having enough opportunities in store for all vendors.</p>
                </div>

                <div className='faq-card'>
                  <h4>Are all the clients associated with the platform genuine?</h4>
                  <p>Yes, you can rest assured that all the clients associated with Company Bench are verified and genuine</p>
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

export default VendorFandQ;
