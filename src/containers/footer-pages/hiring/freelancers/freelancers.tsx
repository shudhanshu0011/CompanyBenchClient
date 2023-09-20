import React, { useState, useEffect } from 'react';
import "./freelancers.scss";
import freelanceJobData from '@assets/content/mock/freelancers-data';
import { PageWrapper } from '@src/components/page-wrapper/page-wrapper';

interface FreelanceJob {
  skill: string;
  url: string;
  logo: string;
  intro: string;
};

export const FreelancerJob: React.FC = (): JSX.Element => {
  const [freelanceJob, setFreelanceJob] = useState<any>([]);

  useEffect(() => {
    setFreelanceJob(freelanceJobData);
  }, []);

  return (
    <PageWrapper>
      <div className="main-hire-container">
        <h2>Freelancing Jobs</h2>
        <section className="banner-container">
          {freelanceJob.map((developer: FreelanceJob) => (
            <div className="skill-container" key={developer.skill}>
              <a href={developer.url} className="skill-link">
                <button>
                  <img src={developer.logo} alt={developer.skill} />
                  {developer.skill} Freelance Job
                </button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};
