import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { Btn } from "../button";
import "./card.scss";

interface Props {
  type?: string;
  avatar?: string;
  title?: string | number;
  subTitle?: string | number;
  cardImg?: React.ReactNode;
  link: string ;
}

export const Card = ({ type, avatar, title, subTitle, cardImg, link }: Props): JSX.Element => {
  if (type === "sm") {
    return (
      <div className="card-grid-2 hover-up mh-105">
        <div className="flex-box p-15"> 
          <div className="pr-20">
            <a href={link}>
              <figure>
                {cardImg}
              </figure>
            </a>
          </div>
          <div className="card-profile pt-0">
            <a href={link}>
              <h5>{title}</h5>
            </a>
            <p className="font-sm color-text-mutted">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card-grid-2 hover-up">
      <div className="card-grid-2-image-left">
        <div className="card-grid-2-image-rd online">
          <a href={link}>
            <figure>
              <img
                alt="jobBox"
                src={
                  avatar ||
                  "https://testcompanybench.azurewebsites.net/assets/images/avtar.png"
                }
              />
            </figure>
          </a>
        </div>
        <div className="card-profile pt-10">
          <a href={link}>
            <h5>{title || "Robert Fox"}</h5>
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
        <div className="card-2-bottom card-2-bottom-candidate mt-30">
          <div className="text-start">
            <span className="btn btn-tags-sm mb-10 mr-5">Figma</span>
            <span className="btn btn-tags-sm mb-10 mr-5">Adobe XD</span>
            <span className="btn btn-tags-sm mb-10 mr-5">PSD</span>
            <span className="btn btn-tags-sm mb-10 mr-5">App</span>
            <span className="btn btn-tags-sm mb-10 mr-5">Digital</span>
          </div>
        </div>
        <div className="employers-info align-items-center justify-content-center mt-15">
          <div className="row">
            <div className="col-6">
              <Btn className="btn btn-primary" title="View Details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
