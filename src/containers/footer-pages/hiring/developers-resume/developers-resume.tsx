import React, { useState, useEffect } from 'react';
import developersResumeData from '@assets/content/mock/developers-resume-data';
import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';

interface DevelopersResume {
  skill: string;
  url: string;
  logo: string;
};

export const DevelopersResume: React.FC = (): JSX.Element => {
  const [developersResume, setdevelopersResume] = useState<DevelopersResume[]>([]);

  useEffect(() => {
    setdevelopersResume(developersResumeData);
  }, []);

  return (
    <PageWrapper>
      <div className="main-hire-container">
        <h2>Developers Resume</h2>
        <section className="banner-container">
          {developersResume.map((developer: DevelopersResume) => (
            <div className="skill-container" key={developer.skill}>
              <a href={developer.url} className="skill-link">
                <button>
                  <img src={developer.logo} alt={developer.skill} />
                  {developer.skill} Developer Resume
                </button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};
