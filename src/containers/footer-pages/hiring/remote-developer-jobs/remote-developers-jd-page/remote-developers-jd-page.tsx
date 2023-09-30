import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';
import "./remote-developers-jd-page.scss";
import remoteDevelopersJD from '@assets/content/mock/remote-developers-job-data';
import iconTopBanner from "@assets/images/icon-top-banner.png";
import bannerimg from "@assets/images/Web_Development.png";
import whyjoinbannerimg from "@assets/images/why join company bench.jpg";
import { SendUsEnquiry } from '@src/components/send-us-enquiry';

interface PageDesc {
  url: string;
}

const RemoteDevelopersJDPage = ({ url: pageUrl }: PageDesc): JSX.Element => {
  const skills: any = remoteDevelopersJD.find((skill) => skill.url===pageUrl)

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='service-banner'>
            <div className='service-banner-img'>
              <div className='bottom-img'>
                <img src={iconTopBanner}></img>
              </div>
              <div className='center-image'>
                <img src={skills.logo}></img>
              </div>
              <div className='top-img'>
                <img src={iconTopBanner}></img>
              </div>
            </div>
            <div className='service-header-text'>
              <h1 className='service-head-txt'>Remote {skills.skill} Developer Job</h1>
              <p>{skills.intro}</p>
              <a href="/apply">
                <button
                    className="btn btn-default btn-find font-sm"
                  >
                    <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                    Apply as {skills.skill} Developer
                </button>
              </a>
            </div>
          </div>

          <div className='service-points-container'>
            <div className='bulletpoint-container'>
              <h2>Job Descriptions</h2>
              <h4>Job Responsibilities</h4>
              <ul>
                {
                  skills.jobResponsibilities.map((points: any) => (
                    <li><p>{points}</p></li>    
                  ))
                }
              </ul>

              <h4>Minimum Requirements</h4>
              <ul>
                {
                  skills.minimumRequirement.map((points: any) => (
                    <li><p>{points}</p></li>    
                  ))
                }
              </ul>

              <h4>Preferred Skills</h4>
              <ul>
                {
                  skills.preferedSkills.map((points: any) => (
                    <li><p>{points}</p></li>    
                  ))
                }
              </ul>
            </div>
            <div className='service-banner-img'>
              <img src={bannerimg}></img>
            </div>
          </div>

          <div className='why-join-points-container'>
            <div className='why-join-banner-img'>
              <img src={whyjoinbannerimg}></img>
            </div>
            <div className='why-join-container'>
              <h2>Why Join Company Bench?</h2>
              <h4>High-Paying Jobs:</h4>
              <p>Company Bench's software developers get lucrative salary packages from top companies.</p>
              <h4>Career Growth:</h4>
              <p>You can advance career growth rapidly by solving complex business and technical problems using the latest technology.</p>
              <h4>Community of Top Developers:</h4>
              <p>Join the world's leading software engineering community by registering today.</p>
            </div>
          </div>

          <div className='hire-developer-faq'>
              <h2>Frequently Asked Questions</h2>
              <div className='faq-content'>
                {
                  skills.faq.map((faq: any) => (
                    <div className='faq-card'>
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))
                }
              </div>
          </div>
          <SendUsEnquiry/>
        </section>
      </PageWrapper>
    </div>
  );
};

export default RemoteDevelopersJDPage;
