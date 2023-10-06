import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';
import developers from '@assets/content/mock/developer-data';
import { ReviewSection } from '@components/home-components/review-section';
import { HireDeveloperBanner } from '@components/hire-developer-banner';
import { ChooseUsSection } from '@components/home-components/choose-us-section';
import { SendUsEnquiry } from '@src/components/send-us-enquiry';
import { HowToHireThrouhgBench } from '@src/components/how-to-hire-through-bench';
import { Btn } from '@common/button';
import bannerimg from "@assets/images/banner.png";
import avataricon from "@assets/icons/avtar.png";
import hire201 from "@assets/icons/Hire 1.png";
import checkboxicon from "@assets/icons/check-box.svg";
import hire204 from "@assets/icons/Hire 4.png";
import "./skill-desc-page.scss";
import { Link } from 'react-router-dom';

interface SkillDescPageProps {
  url: string;
}

const SkillDescPage = ({ url: pageUrl }: SkillDescPageProps): JSX.Element => {
  const skillset = developers.find((developer) => developer.url===pageUrl)

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='hire-cust-banner'>
            <div className='hire-cust-form'>
              <img src={"https://companybench.com" + skillset?.logo}></img>
              <h1>Hire {<span>{skillset?.skill}</span>} Developer</h1>
              <div>
                <p>Are you looking for immediate Hire {skillset?.skill} Developer</p>
              </div>
              <div>
                <form className='hire-cust-form-field'>
                  <input placeholder='Name' className='input-name'></input>
                  <input placeholder='Email' className='input-email'></input>
                  <input type='Submit' className='hire-interest-btn'></input>
                </form>
              </div>
            </div>
            <div className='banner-img'>
              <img src={bannerimg}></img>
            </div>
          </div>
          <div className='recent-candidate'>
            <h2>Recent Candidates</h2>
            <div className='sample-candidate-container'>
              {/* First Candidate */}
              <div className='sample-candidate-card'>
                <div className='card-user-detail'>
                  <img src={avataricon}></img>
                  <div>
                    <h5>Amit M***</h5>
                    <p>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div className='user-more-detail'>
                  <span className='user-more-detail-left'>Anywhere in India</span>
                  <span className='user-more-detail-right'>Aug 1, 2023</span>
                </div>
              </div>
              {/* Second Candidate */}
              <div className='sample-candidate-card'>
                <div className='card-user-detail'>
                  <img src={avataricon}></img>
                  <div>
                    <h5>Amit M***</h5>
                    <p>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div className='user-more-detail'>
                  <span className='user-more-detail-left'>Anywhere in India</span>
                  <span className='user-more-detail-right'>Aug 1, 2023</span>
                </div>
              </div>
              {/* Third Candidate */}
              <div className='sample-candidate-card'>
                <div className='card-user-detail'>
                  <img src={avataricon}></img>
                  <div>
                    <h5>Amit M***</h5>
                    <p>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div className='user-more-detail'>
                  <span className='user-more-detail-left'>Anywhere in India</span>
                  <span className='user-more-detail-right'>Aug 1, 2023</span>
                </div>
              </div>
            </div>
            <div className='view-more-btn-container'>
              <Link to="/signin">
                <a href='/'><button >View More</button></a>
              </Link>
            </div>
          </div>
          <div className='skill-content-container'>
            <div className='hero-banner-img'>
              <img src={hire201}></img>
            </div>
            <div className='hero-content'>
              <h2>Hire {skillset?.skill} Developer</h2>
              <p>{skillset?.skillDescription}</p>
            </div>
          </div>
          <div className='skill-points-container'>
            <div className='bulletpoints-container'>
              {
                skillset?.bulletPoints.map((bullets) => (
                  <div className='bulletpoints'>
                    <img src={checkboxicon}></img>
                    <p>{bullets}</p>
                  </div>
                ))
              }
            </div>
            <div className='hero-banner-img'>
              <img src={hire204}></img>
            </div>
          </div>
          <ChooseUsSection/>
          <HowToHireThrouhgBench/>
          <HireDeveloperBanner/>
          <div className='hire-developer-faq'>
              <h2>Frequently Asked Questions</h2>
              <div className='faq-content'>
                <div className='faq-card'>
                  <h4>How Much Do {skillset?.skill} Developers Cost?</h4>
                  <p>The cost of hiring an {skillset?.skill} developer would be determined by business requirements. 
                    Experience and expertise, geography, as well as market circumstances are all variables 
                    that influence rates. Furthermore, the budget of the project would be determined by the
                     needed {skillset?.skill} developer expertise as well as the country. {skillset?.skill} Developers For Hire The cost
                      of an {skillset?.skill} developer at the freelancing platform UpWork is approximately $20-$45 per hour.</p>
                </div>

                <div className='faq-card'>
                  <h4>Who Is A Developer In {skillset?.skill}?</h4>
                  <p>An {skillset?.skill} Developer is typically responsible for building and/or updating mobile hubs, as well 
                    as overseeing functionality such as push notifications. However, Those looking to break into 
                    the {skillset?.skill} Developer field will find this position to be challenging, rewarding, and unique.</p>
                </div>

                <div className='faq-card'>
                  <h4>Does {skillset?.skill} Require Coding?</h4>
                  <p>It is not necessary to know any coding to begin getting started with {skillset?.skill}, many basic 
                    functions can be done without coding. Even though you need some programming skills, you 
                    may still need to learn them depending on the job/skills you have (or need). Some jobs with 
                    {skillset?.skill} don't require coding skills.</p>
                </div>

                <div className='faq-card'>
                  <h4>How Difficult Is Being An {skillset?.skill} Developer?</h4>
                  <p>While this profession may seem difficult, anyone with the proper training can learn it. {skillset?.skill} cloud 
                    development skills, as well as familiarizing yourself with its features, are crucial. {skillset?.skill} recommends
                     at least one year of experience prior to appearing for their exam. The exam can still be passed with
                      intensive study, however, since most people need between one and two months to prepare.</p>
                </div>

                <div className='faq-card'>
                  <h4>Is {skillset?.skill} Good For A Freelancing Career?</h4>
                  <p>There is no doubt that {skillset?.skill} skills are in high demand among employers. The demand for cloud computing
                     professionals like {skillset?.skill} certifications has increased. As an {skillset?.skill} freelancer, you will be responsible for
                      the services like solutions in architect, consultant or developer? If you search at any of the freelancing
                       marketplaces, you'll notice that {skillset?.skill} freelancers are charging between $10 and $130 per hr.</p>
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

export default SkillDescPage;
