import { RouteObject } from "react-router-dom";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";
import { AllCandidates } from "./containers/all-candidates/all-candidates";
import { Dashboard } from "./containers/dashboard/dashboard";
import { AppliedCandidates } from "./containers/applied-candidates/applied-candidates";
import { InterviewList } from "./containers/interview/interview";
import { MatchingCandidates } from "./containers/matching-candidates/matching-candidates";
import { MyJobs } from "./containers/my-jobs/my-jobs";
import { PostJob } from "./containers/post-job/post-job";
import { Shortlisted } from "./containers/shortlisted/shortlisted";
import { Sidebar } from "./components/sidebar/sidebar";


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
    path: "/c/matchingcandidate",
    element: <MatchingCandidates />,
  },
  {
    path: "/c/myjobs",
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
];

export default routes;

