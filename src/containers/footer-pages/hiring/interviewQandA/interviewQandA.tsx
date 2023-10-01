import React, { useState, useEffect } from 'react';
import interviewQandAdata from '@assets/content/mock/interviewQandA-data';
import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';

interface Interview {
  skill: string;
  url: string;
  logo: string;
};

export const InterviewQandA: React.FC = (): JSX.Element => {
  const [interviewqanda, setInterviewQandA] = useState<Interview[]>([]);

  useEffect(() => {
    setInterviewQandA(interviewQandAdata);
  }, []);

  return (
    <PageWrapper>
      <div className="main-hire-container">
        <h2>Interviews Questions & Answers</h2>
        <section className="banner-container">
          {interviewqanda.map((developer: Interview) => (
            <div className="skill-container" key={developer.skill}>
              <a href={developer.url} className="skill-link">
                <button>
                  <img src={developer.logo} alt={developer.skill} />
                  {developer.skill} Interview Q&A
                </button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};
