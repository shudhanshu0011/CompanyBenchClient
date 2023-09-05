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
import { HireDeveloper } from "./containers/hire-developer";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/c/candidates",
    element: <Candidates />,
  },
  {
    path: "/allcandidates",
    element: <AllCandidates />,
  },
  {
    path: "/c/dashboard",
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
  {
    path: "/c/hire-talent",
    element: <HireDeveloper/>,
  },
];

export default routes;

