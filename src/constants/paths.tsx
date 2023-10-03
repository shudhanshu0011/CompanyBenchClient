import { ReactComponent as DashboardIcon } from "@assets/page/dashboard/dashboard.svg";
import { ReactComponent as JobsIcon } from "../../assets/page/dashboard/jobs.svg";
import { ReactComponent as TasksIcon } from "../../assets/page/dashboard/tasks.svg";
import { ReactComponent as SettingsIcon } from "../../assets/page/dashboard/settings.svg";
import { ReactComponent as CandidatesIcon } from "../../assets/page/dashboard/candidates.svg";
import { ReactComponent as ProfilesIcon } from "../../assets/page/dashboard/profiles.svg";
import { ReactComponent as RecruitersIcon } from "../../assets/page/dashboard/recruiters.svg";
import { ReactComponent as CvManageIcon } from "../../assets/page/dashboard/cv-manage.svg";
import { ReactComponent as LogoutIcon } from "../../assets/page/dashboard/logout.svg";

export const paths = [
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
    link: "/cmatchingcandidate",
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
