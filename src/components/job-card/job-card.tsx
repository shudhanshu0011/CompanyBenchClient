import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import classNames from "classnames";
import { Btn } from "../../common/button";
import { Job } from "@src/types/components";

interface Props {
  handleShowDetails?(isVisible: boolean): void;
  handleCardClicked?(cardId: string): void;
  showAvatar?: boolean;
  title?: string;
  compact?: boolean;
  job?: Job;
}
export const JobsCard = ({
  handleCardClicked,
  showAvatar,
  title,
  compact,
  job,
}: Props): JSX.Element => {
  const {location, skill, jobStatus, clientGuid} = job;
  const handleBtnClick = () => {
    if (handleCardClicked !== undefined) {
      handleCardClicked(clientGuid);
    }
  };

  const getBtnMarginClassname = () => {
    return classNames(
      {
        "mt-65": !compact,
        "mt-10": compact,
      },
      ""
    );
  };

  return (
    <div className="card-grid-2 hover-up">
      <div className="card-grid-2-image-left">
        {showAvatar && (
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
        )}

        <div className="card-profile pt-10">
          <a href="candidate-details.html">
            {!compact ? <h5>{title}</h5> : <h6>{title}</h6>}
          </a>
          <p className="font-xs color-text-mutted">
            <PlaceOutlinedIcon />
            <span>{location} </span>
          </p>
          <p className="font-xs color-text-mutted">
            <BusinessCenterSharpIcon />
            <span>Job Status: {jobStatus || 'NA'}</span> <AccessTimeSharpIcon />
            <span>Jul 28, 2023</span>
          </p>
        </div>
      </div>
      <div className="card-block-info">
        <div className="card-2-bottom card-2-bottom-candidate">
          <div className="text-start flex-box">
            {skill.map((sk: string) => {
              return <span className="btn-tags-sm mb-10 mr-5">{sk}</span>
            })}
          </div>
        </div>
        <div className={getBtnMarginClassname()}>
          <div className="row">
            <div className="col-6">
              <Btn
                className="btn-apply-now"
                title="View Details"
                handleOnClick={handleBtnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
