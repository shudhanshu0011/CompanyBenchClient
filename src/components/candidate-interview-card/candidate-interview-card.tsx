// import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterSharp";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";

interface Props {
  showAvatar?: boolean;
  title?: string;
  compact?: boolean;
  position?: string;
}
export const CandidateInterviewCard = ({
  showAvatar,
  title,
  compact,
  position,
}: Props): JSX.Element => {
  return (
    <div className="card-grid-2 hover-up">
      <div className="card-grid-2-image-left">
        {showAvatar && (
          <div className="card-grid-2-image-rd online">
            <a href="#">
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
          {!compact ? <h5>{title}</h5> : <h6>{title}</h6>}

          {/* <p className="font-xs color-text-mutted">
            <PlaceOutlinedIcon />
            <span>Anywhere in India </span>
          </p> */}
          <div className="font-xs text-candidated-detail">
            <div className="flex-box mt-2 mn-2">
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <span>
                <span className="color-brand-2">Technology: </span>
                <span className="ml-5 color-text-mutted-lt">
                  React;Salesforce.com Developer;Web
                  Developer;LendingXL;iPhone;Java;Accountant;Sales;Full-Stack
                  Developer;CPQ;Sharepoint;Liferay;Kentico;Demandware
                  B2C;Cloudcraze;Oracle;Kafka;PostgreSQL;Magento;Salesforce.com
                  Marketing Cloud;Salesforce.com Community Cloud;Einstein
                  Analytics;Data Architect;Salesforce.com Health
                  Cloud;Demandware;Java (Programming Language);Data Science;Data
                  Engineer;UI/UX;SQL;Laravel;JavaScript;Web
                  Development;Ios;Salesforce Pardot;Salesforce Marketing
                  Cloud;Trainer;Sales Cloud;SLDS;Marketing Cloud;Salesforce
                  Health Cloud;Visualforce;Integration;FourGen Computer-Aided
                  Software Engineering (CASE) Tools;workflows;Agile Software
                  Development;Salesforce Commerce
                  Cloud;AEM;Drupal;Hibernate;Hubspot;Tableau;Workday
                </span>
              </span>
            </div>
            <div className="flex-box mt-2 mn-2">
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <span>
                <span className="ml-5 color-text-mutted-lt">
                  4 years of experience
                </span>
              </span>
            </div>
            <div className="mt-3">
            {!compact ? <h5>{position}</h5> : <h6>{position}</h6>}
            </div>
            <div className="flex-box mt-2 mn-2">
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <span>
                <span className="color-brand-2">Job Technology: </span>
                <span className="ml-5 color-text-mutted-lt">.NET;Android</span>
              </span>
            </div>
            <div className="flex-box mt-2 mn-2">
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <div className="mr-5 color-text-mutted-lt">
                <span className="color-brand-2">Required Experience: </span>
                <span className="ml-5 color-text-mutted-lt">. 1 Year</span>
              </div>
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <span>
                <span className="color-brand-2">Interview Status: </span>
                <span className="ml-5 color-text-mutted-lt">Cancelled</span>
              </span>
            </div>
            <div className="flex-box mt-2 mn-2">
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <div className="mr-5">
                <span className="color-brand-2">Interview Date: </span>
                <span className="ml-5 color-text-mutted-lt">
                  11-May-23 12:00 PM
                </span>
              </div>
              <div className="mr-5 color-text-mutted-lt">
                <BusinessCenterOutlinedIcon />
              </div>
              <span>
                <span className="color-brand-2">Interview Type: </span>
                <span className="ml-5 color-text-mutted-lt">HR</span>
              </span>
            </div>

            {/* <AccessTimeSharpIcon />
            <span>Jul 28, 2023</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
