import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./skill-desc-page.scss";
import developers from '../../assets/developer-data';
import { ReviewSection } from '@components/home-components/review-section';
import { HireDeveloperBanner } from '@components/hire-developer-banner';
import { ChooseUsSection } from '@components/home-components/choose-us-section';
import { Btn } from '@common/button';

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
              <img src={skillset?.logo}></img>
              <h1>Hire {<span>{skillset?.skill}</span>} Developer</h1>
              <div>
                <p>Are you looking for immediate Hire {skillset?.skill} Developer</p>
              </div>
              <div>
                <form>
                  <input placeholder='Name' className='input-name'></input>
                  <input placeholder='Email' className='input-email'></input>
                  <input type='Submit' className='hire-interest-btn'></input>
                </form>
              </div>
            </div>
            <div className='banner-img'>
              <img src='https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage4/banner.png'></img>
            </div>
          </div>
          <div className='recent-candidate'>
            <h2 style={{textAlign:'center'}}>Recent Candidates</h2>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
              {/* First Candidate */}
              <div style={{margin:'20px', border:'1px solid #E0E6F7', padding:'20px', borderRadius:'10px', background:'#F8FAFF'}}>
                <div style={{display:'flex', marginRight:'150px', marginBottom:'30px'}}>
                  <img src='https://companybench.com/assets/images/avtar.png' style={{width:'85px', borderRadius:'50%'}}></img>
                  <div style={{padding:'20px'}}>
                    <h5>Amit M***</h5>
                    <p style={{fontSize:'12px', color:'#A0ABB8'}}>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div style={{marginTop:'20px', padding:'15px', borderTop:'1px solid #E0E6F7'}}>
                  <span style={{float:'left', fontSize:'14px', color:'#A0ABB8'}}>Anywhere in India</span>
                  <span style={{float:'right', fontSize:'14px', color:'#A0ABB8'}}>Aug 1, 2023</span>
                </div>
              </div>
              {/* Second Candidate */}
              <div style={{margin:'20px', border:'1px solid #E0E6F7', padding:'20px', borderRadius:'10px', background:'#F8FAFF'}}>
                <div style={{display:'flex', marginRight:'150px', marginBottom:'30px'}}>
                  <img src='https://companybench.com/assets/images/avtar.png' style={{width:'85px', borderRadius:'50%'}}></img>
                  <div style={{padding:'20px'}}>
                    <h5>Amit M***</h5>
                    <p style={{fontSize:'12px', color:'#A0ABB8'}}>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div style={{marginTop:'20px', padding:'15px', borderTop:'1px solid #E0E6F7'}}>
                  <span style={{float:'left', fontSize:'14px', color:'#A0ABB8'}}>Anywhere in India</span>
                  <span style={{float:'right', fontSize:'14px', color:'#A0ABB8'}}>Aug 1, 2023</span>
                </div>
              </div>
              {/* Third Candidate */}
              <div style={{margin:'20px', border:'1px solid #E0E6F7', padding:'20px', borderRadius:'10px', background:'#F8FAFF'}}>
                <div style={{display:'flex', marginRight:'150px', marginBottom:'30px'}}>
                  <img src='https://companybench.com/assets/images/avtar.png' style={{width:'85px', borderRadius:'50%'}}></img>
                  <div style={{padding:'20px'}}>
                    <h5>Amit M***</h5>
                    <p style={{fontSize:'12px', color:'#A0ABB8'}}>6 years of experience</p>
                  </div>
                </div>
                <Btn className='btn-apply-now' title={skillset?.skill || "Skills"}/>
                <div style={{marginTop:'20px', padding:'15px', borderTop:'1px solid #E0E6F7'}}>
                  <span style={{float:'left', fontSize:'14px', color:'#A0ABB8'}}>Anywhere in India</span>
                  <span style={{float:'right', fontSize:'14px', color:'#A0ABB8'}}>Aug 1, 2023</span>
                </div>
              </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <a href='/'><button style={{padding:'15px 25px 15px 25px', background:'#05264E', color:'white', border:'none', borderRadius:'5px', margin:'20px 0px 30px 0px'}}>View More</button></a>
            </div>
          </div>
          <div className='skill-content-container'>
            <div className='hero-banner-img'>
              <img src='https://companybench.com/assets/images/Hire%201.png'></img>
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
                    <img src='https://companybench.com/assets/cb-new-style/Frontend/imgs/page/homepage3/check-box.svg'></img>
                    <p>{bullets}</p>
                  </div>
                ))
              }
            </div>
            <div className='hero-banner-img'>
              <img src='https://companybench.com/assets/images/Hire%204.png'></img>
            </div>
          </div>
          <ChooseUsSection/>
          <HireDeveloperBanner/>
          <ReviewSection/>
        </section>
      </PageWrapper>
    </div>
  );
};

export default SkillDescPage;
