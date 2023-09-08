import { RouteObject } from "react-router-dom";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";
import { AllCandidates } from "./containers/all-candidates/all-candidates";
import { Dashboard } from "./containers/dashboard/dashboard";
import { AppliedCandidates } from "./containers/applied-candidates/applied-candidates";
import { InterviewList } from "./containers/interview/interview";
import { MatchingCandidates } from "./containers/matching-candidates/matching-candidates";
import { MyJobs } from "./containers/my-jobs/my-jobs";
import { PostJob } from "./containers/postjob/postjob";
import { Shortlisted } from "./containers/shortlisted/shortlisted";
import { Sidebar } from "./components/sidebar/sidebar";
import { Jobs } from "./containers/navigation-pages/jobs";
import { ApplyForJob } from "./containers/navigation-pages/apply-for-job";
import { ContactUs } from "./containers/navigation-pages/contact-us";
import { Blogs } from "./containers/navigation-pages/blog";
import { HireDeveloper } from "./containers/navigation-pages/hire-developer";
import SkillDescPage from "./containers/navigation-pages/skill-desc-page/skill-desc-page";

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
  {
    path: "/c/hire-aem-developer",
    element: <SkillDescPage url="/c/hire-aem-developer"/>
  },
  {
    path: "/c/hire-aws-developer",
    element: <SkillDescPage url="/c/hire-aws-developer"/>
  },
  {
    path: "/c/hire-blockchain-developer",
    element: <SkillDescPage url="/c/hire-blockchain-developer"/>
  },
  {
    path: "/c/hire-cloudcraze-developer",
    element: <SkillDescPage url="/c/hire-cloudcraze-developer"/>
  },
  {
    path: "/c/hire-demandware-developer",
    element: <SkillDescPage url="/c/hire-demandware-developer"/>
  },
  {
    path: "/c/hire-devops-developer",
    element: <SkillDescPage url="/c/hire-devops-developer"/>
  },
  {
    path: "/c/hire-dot-net-developer",
    element: <SkillDescPage url="/c/hire-dot-net-developer"/>
  },
  {
    path: "/c/hire-drupal-developer",
    element: <SkillDescPage url="/c/hire-drupal-developer"/>
  },
  {
    path: "/c/hire-software-developer",
    element: <SkillDescPage url="/c/hire-software-developer"/>
  },
  {
    path: "/c/hire-java-developer",
    element: <SkillDescPage url="/c/hire-java-developer"/>
  },
  {
    path: "/c/hire-magento-developer",
    element: <SkillDescPage url="/c/hire-magento-developer"/>
  },
  {
    path: "/c/hire-mean-stack-developer",
    element: <SkillDescPage url="/c/hire-mean-stack-developer"/>
  },
  {
    path: "/c/hire-full-stack-developer",
    element: <SkillDescPage url="/c/hire-full-stack-developer"/>
  },
  {
    path: "/c/hire-golang-developer",
    element: <SkillDescPage url="/c/hire-golang-developer"/>
  },
  {
    path: "/c/hire-hibernate-developer",
    element: <SkillDescPage url="/c/hire-hibernate-developer"/>
  },
  {
    path: "/c/hire-hubspot-developer",
    element: <SkillDescPage url="/c/hire-hubspot-developer"/>
  },
  {
    path: "/c/hire-mulesoft-developer",
    element: <SkillDescPage url="/c/hire-mulesoft-developer"/>
  },
  {
    path: "/c/hire-node-js-developer",
    element: <SkillDescPage url="/c/hire-node-js-developer"/>
  },
  {
    path: "/c/hire-react-js-developer",
    element: <SkillDescPage url="/c/hire-react-js-developer"/>
  },
  {
    path: "/c/hire-react-native-developer",
    element: <SkillDescPage url="/c/hire-react-native-developer"/>
  },
  {
    path: "/c/hire-salesforce-developer",
    element: <SkillDescPage url="/c/hire-salesforce-developer"/>
  },
  {
    path: "/c/hire-service-now-developer",
    element: <SkillDescPage url="/c/hire-service-now-developer"/>
  },
  {
    path: "/c/hire-developers-startup",
    element: <SkillDescPage url="/c/hire-developers-startup"/>
  },
  {
    path: "/c/hire-share-point-developer",
    element: <SkillDescPage url="/c/hire-share-point-developer"/>
  },
  {
    path: "/c/hire-shopify-developer",
    element: <SkillDescPage url="/c/hire-shopify-developer"/>
  },
  {
    path: "/c/hire-sitecore-developer",
    element: <SkillDescPage url="/c/hire-sitecore-developer"/>
  },
  {
    path: "/c/hire-snowflake-developer",
    element: <SkillDescPage url="/c/hire-snowflake-developer"/>
  },
  {
    path: "/c/hire-tableau-developer",
    element: <SkillDescPage url="/c/hire-tableau-developer"/>
  },
  {
    path: "/c/hire-talend-developer",
    element: <SkillDescPage url="/c/hire-talend-developer"/>
  },
  {
    path: "c/hire-uipath-developer",
    element: <SkillDescPage url="c/hire-uipath-developer"/>
  },
  {
    path: "/c/hire-vlocity-developer",
    element: <SkillDescPage url="/c/hire-vlocity-developer"/>
  },
  {
    path: "/c/hire-microsoft-dynamics-developer",
    element: <SkillDescPage url="/c/hire-microsoft-dynamics-developer"/>
  },
  {
    path: "/c/offshore-software-testing-company",
    element: <SkillDescPage url="/c/offshore-software-testing-company"/>
  },
  {
    path: "/c/hire-salesforce-cpq-developer",
    element: <SkillDescPage url="/c/hire-salesforce-cpq-developer"/>
  },
  {
    path: "/c/hire-workday-developer",
    element: <SkillDescPage url="/c/hire-workday-developer"/>
  },
];

export default routes;

