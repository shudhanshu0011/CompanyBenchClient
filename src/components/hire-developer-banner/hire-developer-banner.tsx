import "./hire-developer-banner.scss";
import developers from '../../assets/content/mock/developer-data';

type Developer = {
  skill: string;
  url: string;
  logo: string;
};

export const HireDeveloperBanner: React.FC = (): JSX.Element => {

  return (
    <div className="main-hire-container">
      <h2>Hire Developers</h2>
      <section className="banner-container">
        {
          developers.map((developer: Developer) => (
            <div className="skill-container">
              <a href={developer.url} className="skill-link">
                <button>
                  <img src={"https://companybench.com/" + developer.logo}></img>
                  {developer.skill} Developer
                </button>
              </a>
            </div>
          ))
        }
      </section>
    </div>
  );
};
