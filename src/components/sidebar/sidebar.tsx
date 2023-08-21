import "./sidebar.scss";
import {useState} from "react";

interface Props{
  activeLink: string;
}
export const Sidebar = ({activeLink}: Props): JSX.Element => {
  const [isExpanded, setExpandState] = useState(true);
  const menuItems = [
		{
			text: "Dashboard",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/dashboard.svg",
      		link: "/cdashboard",
		},
		{
			text: "My Jobs",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/jobs.svg",
      		link: "/cmyjobs",
		},
		{
			text: "Post Job",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/tasks.svg",
      		link: "/newjob",
		},
		{
			text: "Shortlisted",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/settings.svg",
      		link: "/shortlistedcandidates",
		},
		{
			text: "All Candidates",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/candidates.svg",
      		link: "/allcandidates",
		},
		{
			text: "Matching Candidates",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/profiles.svg",
      		link: "/cmatchingcandidate",
		},
		{
			text: "Applied Candidates",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/recruiters.svg",
      		link: "/interestedcandidate",
		},
		{
			text: "Interview",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/cv-manage.svg",
      		link: "/jobinterviewlist",
		},
    {
			text: "Logout",
			icon: "https://companybench.com/assets/cb-new-style/Dashboard/imgs/page/dashboard/logout.svg",
      		link: "/",
		},
	];
  return (
    <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
      <div className="nav-upper">
        <div className="nav-heading">
          <button 
            className={
              isExpanded ? "hamburger hamburger-in": "hamburger hamburger-out"
            }

            onClick={() => setExpandState(!isExpanded)}
          >
            
          </button>
        </div>
        <div className="nav-menu">
					{menuItems.map(({ text, icon, link }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href={link} style={activeLink==link ? {backgroundColor: '#d1d1d1'} : {}}>
							<img className="menu-item-icon" src={icon} alt="" srcSet="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
      </div>
    </div>
  );
};