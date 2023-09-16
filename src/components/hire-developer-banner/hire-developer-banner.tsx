import React, { useState, useEffect } from 'react';
import "./hire-developer-banner.scss";
import developersData from '../../assets/content/mock/developer-data';

type Developer = {
  skill: string;
  url: string;
  logo: string;
};

export const HireDeveloperBanner: React.FC = (): JSX.Element => {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    setDevelopers(developersData);
  }, []);

  return (
    <div className="main-hire-container">
      <h2>Hire Developers</h2>
      <section className="banner-container">
        {developers.map((developer: Developer) => (
          <div className="skill-container" key={developer.skill}>
            <a href={developer.url} className="skill-link">
              <button>
                <img src={"https://companybench.com/" + developer.logo} alt={developer.skill} />
                {developer.skill} Developer
              </button>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
