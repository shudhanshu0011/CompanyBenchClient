import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { Btn } from "../../common/button";
import "./candidate-card.scss";

interface Props {
  handleShowDetails(isVisible: boolean): void;
}
export const CandidateCard = ({ handleShowDetails }: Props): JSX.Element => {
  const handleBtnClick = () => {
    handleShowDetails(true);
  }
  return (
    <div className="card-grid-2 hover-up">
      <div className="card-grid-2-image-left">
        <div className="card-grid-2-image-rd online">
          <a href="candidate-details.html">
            <figure>
              <img
                alt="jobBox"
                src="https://testcompanybench.azurewebsites.net/assets/images/avtar.png"
              />
            </figure>
          </a>
        </div>
        <div className="card-profile pt-10">
          <a href="candidate-details.html">
            <h5>Robert Fox</h5>
          </a>
          <p className="font-xs color-text-mutted">
            <PlaceOutlinedIcon />
            <span>Anywhere in India </span>
          </p>
          <p className="font-xs color-text-mutted">
            <BusinessCenterSharpIcon />
            <span>NA</span> <AccessTimeSharpIcon />
            <span>Jul 28, 2023</span>
          </p>
        </div>
      </div>
      <div className="card-block-info">
        <div className="card-2-bottom card-2-bottom-candidate">
          <div className="text-start">
            <span className="btn-tags-sm mb-10 mr-5">Figma</span>
            <span className="btn-tags-sm mb-10 mr-5">Adobe XD</span>
            <span className="btn-tags-sm mb-10 mr-5">PSD</span>
            <span className="btn-tags-sm mb-10 mr-5">App</span>
            <span className="btn-tags-sm mb-10 mr-5">Digital</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-6">
              <Btn className="btn-apply-now" title="View Details" handleOnClick={handleBtnClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};