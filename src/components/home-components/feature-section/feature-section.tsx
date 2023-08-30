import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FeatureSection = () => {
  return (
    <section className='feature-section-container'>
      <div className="feature-grid-container">
        <div className="feature-first-grid">
          <h3>Choose From a Pool of Experienced and Polished Resources</h3>
          <p>Company Bench prevents you from spending a fortune on hiring the resource.
            As we cut down the resource obtaining cost and rather provides a solution to 
            Hire Remote Developers within 24 hours.</p>
          <button
            className="btn btn-default btn-find font-sm"
          >
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
            Contact Us
          </button>
        </div>
        <div className="feature-second-grid">
          <div>
            <h4>Rigorous Tests and Interviews</h4>
            <div className='feature-text-detail'>
              <p>We already have a benchmark criteria set before onboarding a resource, we validate the candidate with multiple tests and assignments.</p>
            </div>
          </div>
          <div>
            <h4>Assured Seniority of Professionals</h4>
            <div className='feature-text-detail'>
              <p>At Company Bench we set the standards high that helps us deliver the righteous resource, who are well qualified and have delivered in the past.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
