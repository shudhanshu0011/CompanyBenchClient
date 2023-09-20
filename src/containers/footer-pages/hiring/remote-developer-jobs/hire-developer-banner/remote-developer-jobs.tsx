import React, { useState, useEffect } from 'react';
import "./remote-developer-jobs.scss";
import remoteDevelopersData from '@assets/content/mock/remote-developers-job-data';
import { PageWrapper } from '@src/components/page-wrapper/page-wrapper';

interface RemoteDeveloper {
  skill: string;
  url: string;
  logo: string;
};

export const RemoteDevelopersJob: React.FC = (): JSX.Element => {
  const [remoteDevelopers, setRemoteDevelopers] = useState<RemoteDeveloper[]>([]);

  useEffect(() => {
    setRemoteDevelopers(remoteDevelopersData);
  }, []);

  return (
    <PageWrapper>
      <div className="main-hire-container">
        <h2>Remote Developer Jobs</h2>
        <section className="banner-container">
          {remoteDevelopers.map((developer: RemoteDeveloper) => (
            <div className="skill-container" key={developer.skill}>
              <a href={developer.url} className="skill-link">
                <button>
                  <img src={developer.logo} alt={developer.skill} />
                  Remote {developer.skill} Developer
                </button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};
