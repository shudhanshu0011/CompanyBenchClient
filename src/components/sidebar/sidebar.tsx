import { useState } from "react";
import classNames from "classnames";
import { ReactComponent as DashboardIcon } from "@assets/page/dashboard/dashboard.svg";
import { ReactComponent as JobsIcon } from "../../assets/page/dashboard/jobs.svg";
import { ReactComponent as TasksIcon } from "../../assets/page/dashboard/tasks.svg";
import { ReactComponent as SettingsIcon } from "../../assets/page/dashboard/settings.svg";
import { ReactComponent as CandidatesIcon } from "../../assets/page/dashboard/candidates.svg";
import { ReactComponent as ProfilesIcon } from "../../assets/page/dashboard/profiles.svg";
import { ReactComponent as RecruitersIcon } from "../../assets/page/dashboard/recruiters.svg";
import { ReactComponent as CvManageIcon } from "../../assets/page/dashboard/cv-manage.svg";
import { ReactComponent as LogoutIcon } from "../../assets/page/dashboard/logout.svg";
import "./sidebar.scss";

interface Props {
  activeLink: string;
}

export const Sidebar = ({ activeLink }: Props): JSX.Element => {
  const [isExpanded, setExpandState] = useState<boolean>(true);

  const menuItems = [
    {
      text: "Dashboard",
      link: "/c/dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "My Jobs",
      icon: <JobsIcon />,
      link: "/c/myjobs",
    },
    {
      text: "Post Job",
      icon: <TasksIcon />,
      link: "/newjob",
    },
    {
      text: "Shortlisted",
      icon: <SettingsIcon />,
      link: "/shortlistedcandidates",
    },
    {
      text: "All Candidates",
      icon: <CandidatesIcon />,
      link: "/allcandidates",
    },
    {
      text: "Matching Candidates",
      icon: <ProfilesIcon />,
      link: "/c/matchingcandidate",
    },
    {
      text: "Applied Candidates",
      icon: <RecruitersIcon />,
      link: "/interestedcandidate",
    },
    {
      text: "Interview",
      icon: <CvManageIcon />,
      link: "/jobinterviewlist",
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      link: "/",
    },
  ];

  const getClassname = (link: string) => {
    return classNames(
      {
        "menu-item-icon-only": !isExpanded,
        active: activeLink === link,
      },
      "menu-item"
    );
  };
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <button
            className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"}
            onClick={() => setExpandState(!isExpanded)}
          />
        </div>
        <ul className="nav-menu">
          {menuItems.map(({ text, icon, link }, index: number) => (
            <li key={index}>
              <a className={getClassname(link)} href={link}>
                <span>{icon}</span>
                {isExpanded && <span style={{marginLeft:'9px'}}>{text}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
