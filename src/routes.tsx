import { RouteObject } from "react-router-dom";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";
import { AllCandidates } from "./containers/allcandidates/allcandidates";
import { Dashboard } from "./containers/dashboard/dashboard";
import { AppliedCandidates } from "./containers/appliedcandidates/appliedcandidates";
import { InterviewList } from "./containers/interview/interview";
import { MatchingCandidates } from "./containers/matchingcandidates/matchingcandidates";
import { MyJobs } from "./containers/myjobs/myjobs";
import { PostJob } from "./containers/postjob/postjob";
import { Shortlisted } from "./containers/shortlisted/shortlisted";
import { Sidebar } from "./components/sidebar/sidebar";
import { Jobs } from "./containers/jobs";
import { ApplyForJob } from "./containers/apply-for-job";
import { ContactUs } from "./containers/contact-us";
import { Blogs } from "./containers/blog";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/candidates",
    element: <Candidates />,
  },
  {
    path: "/allcandidates",
    element: <AllCandidates />,
  },
  {
    path: "/cdashboard",
    element: <Dashboard />,
  },
  {
    path: "/interestedcandidate",
    element: <AppliedCandidates />,
  },
  {
    path: "/jobinterviewlist",
    element: <InterviewList />,
  },
  {
    path: "/cmatchingcandidate",
    element: <MatchingCandidates />,
  },
  {
    path: "/cmyjobs",
    element: <MyJobs />,
  },
  {
    path: "/newjob",
    element: <PostJob />,
  },
  {
    path: "/shortlistedcandidates",
    element: <Shortlisted />,
  },
  {
    path: "/",
    element: <Sidebar activeLink="/" />,
  },
  {
    path: "/jobs",
    element: <Jobs/>,
  },
  {
    path: "/apply",
    element: <ApplyForJob/>,
  },
  {
    path: "/c/contact",
    element: <ContactUs/>,
  },
  {
    path: "/c/blogs",
    element: <Blogs/>,
  },
];

export default routes;

