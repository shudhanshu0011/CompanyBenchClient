import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./top-company-by-city.scss";
import cityData from "@assets/content/mock/company-location-data";
import backgroundImage from "@assets/images/img-single (1).png";
import hireImg from "@assets/images/Hire 1.png"
import companyData from "@assets/content/mock/company-location-data"
import { useEffect, useState } from 'react';
import { ChooseUsSection } from '@src/components/home-components/choose-us-section';
import { SendUsEnquiry } from '@src/components/send-us-enquiry';

interface TopCompanyByCityProps {
  url: string;
}

type Company = {
  location: string;
  url : string;
};

const TopCompanyByCity = ({ url: pageUrl }: TopCompanyByCityProps): JSX.Element => {
  const city = cityData.find((city) => city.url===pageUrl)
  const [company, setcompany] = useState<Company[]>([]);

  useEffect(() => {
    setcompany(companyData);
  }, []);

  return (
    <div>
      <PageWrapper>
        <section>
          <div className='blog-header-img-desc'>
            <img src={backgroundImage}></img>
            <div className='blog-other-details'>
              <h2>
                {city?.location}
              </h2>
              <div className='blog-post-details'>
                <h5>Are you looking for {city?.location}</h5>
              </div>
            </div>
          </div>
          <div className='intro-section'>
            <div>
              <h2>INTRODUCTION</h2>
              <p>{city?.intro}</p>
            </div>
          </div>
          <div className='company-list-container'>
            <div className='company-list'>
              <h2>
                List of {city?.location}
              </h2>
              <p>Some of the most popular and dignified IT companies in {city?.city}</p>
              <img src={hireImg}></img>
              {
                city?.companies.map((company) => (
                  <div>
                    <h3>{company.companyName}</h3>
                    <p>{company.companyDetail}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='intro-section'>
            <div>
              <h2>CONCLUSION</h2>
              <p>{city?.conclusion}</p>
            </div>
          </div>
          <div className="main-company-container">
            <h2>Top IT Companies</h2>
            <h3>Following are the Top location based IT companies, Please click to see more</h3>
            <section className="company-banner-container">
              {company.map((company: Company) => (
                <div className="location-container" key={company.location}>
                  <a href={company.url} className="skill-link">
                    <button>
                      {company.location}
                    </button>
                  </a>
                </div>
              ))}
            </section>
          </div>
          <ChooseUsSection/>
          <SendUsEnquiry/>
        </section>
      </PageWrapper>
    </div>
  );
};

export default TopCompanyByCity;
