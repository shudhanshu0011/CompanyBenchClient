import "./hire-developer-banner.scss";
import developers from '../../assets/developer-data';

export const HireDeveloperBanner: React.FC = (): JSX.Element => {

  return (
    <div style={{textAlign:'center', backgroundColor:'#f0f0f0', padding: '40px 0px 0px 0px'}}>
      <h2>Hire Developers</h2>
      <section className="banner-container">
        {
          developers.map((developer) => (
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
