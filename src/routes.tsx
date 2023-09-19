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
import { Jobs } from "./containers/navigation-pages/jobs";
import { ApplyForJob } from "./containers/navigation-pages/apply-for-job";
import { ContactUs } from "./containers/navigation-pages/contact-us";
import { Blogs } from "./containers/navigation-pages/blog";
import { HireDeveloper } from "./containers/navigation-pages/hire-developer";
import SkillDescPage from "./containers/navigation-pages/skill-desc-page/skill-desc-page";
import BlogDescPage from "./containers/navigation-pages/blog-desc-page/blog-desc-page";
import TopCompanyByCity from "./containers/footer-pages/company/top-company-by-city";
import { RemoteDevelopersJob } from "./containers/footer-pages/hiring/remote-developer-jobs/hire-developer-banner";
import { DevelopersResume } from "./containers/footer-pages/hiring/developers-resume";
import { FreelancerJob } from "./containers/footer-pages/hiring/freelancers";
import { InterviewQandA } from "./containers/footer-pages/hiring/interviewQandA";
import Services from "./containers/footer-pages/services/services";

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
    element: <SkillDescPage url="/c/hire-aem-developer?ut=1"/>
  },
  {
    path: "/c/hire-aws-developer",
    element: <SkillDescPage url="/c/hire-aws-developer?ut=1"/>
  },
  {
    path: "/c/hire-blockchain-developer",
    element: <SkillDescPage url="/c/hire-blockchain-developer?ut=1"/>
  },
  {
    path: "/c/hire-cloudcraze-developer",
    element: <SkillDescPage url="/c/hire-cloudcraze-developer?ut=1"/>
  },
  {
    path: "/c/hire-demandware-developer",
    element: <SkillDescPage url="/c/hire-demandware-developer?ut=1"/>
  },
  {
    path: "/c/hire-devops-developer",
    element: <SkillDescPage url="/c/hire-devops-developer?ut=1"/>
  },
  {
    path: "/c/hire-dot-net-developer",
    element: <SkillDescPage url="/c/hire-dot-net-developer?ut=1"/>
  },
  {
    path: "/c/hire-drupal-developer",
    element: <SkillDescPage url="/c/hire-drupal-developer?ut=1"/>
  },
  {
    path: "/c/hire-software-developer",
    element: <SkillDescPage url="/c/hire-software-developer?ut=1"/>
  },
  {
    path: "/c/hire-java-developer",
    element: <SkillDescPage url="/c/hire-java-developer?ut=1"/>
  },
  {
    path: "/c/hire-magento-developer",
    element: <SkillDescPage url="/c/hire-magento-developer?ut=1"/>
  },
  {
    path: "/c/hire-mean-stack-developer",
    element: <SkillDescPage url="/c/hire-mean-stack-developer?ut=1"/>
  },
  {
    path: "/c/hire-full-stack-developer",
    element: <SkillDescPage url="/c/hire-full-stack-developer?ut=1"/>
  },
  {
    path: "/c/hire-golang-developer",
    element: <SkillDescPage url="/c/hire-golang-developer?ut=1"/>
  },
  {
    path: "/c/hire-hibernate-developer",
    element: <SkillDescPage url="/c/hire-hibernate-developer?ut=1"/>
  },
  {
    path: "/c/hire-hubspot-developer",
    element: <SkillDescPage url="/c/hire-hubspot-developer?ut=1"/>
  },
  {
    path: "/c/hire-mulesoft-developer",
    element: <SkillDescPage url="/c/hire-mulesoft-developer?ut=1"/>
  },
  {
    path: "/c/hire-node-js-developer",
    element: <SkillDescPage url="/c/hire-node-js-developer?ut=1"/>
  },
  {
    path: "/c/hire-react-js-developer",
    element: <SkillDescPage url="/c/hire-react-js-developer?ut=1"/>
  },
  {
    path: "/c/hire-react-native-developer",
    element: <SkillDescPage url="/c/hire-react-native-developer?ut=1"/>
  },
  {
    path: "/c/hire-salesforce-developer",
    element: <SkillDescPage url="/c/hire-salesforce-developer?ut=1"/>
  },
  {
    path: "/c/hire-service-now-developer",
    element: <SkillDescPage url="/c/hire-service-now-developer?ut=1"/>
  },
  {
    path: "/c/hire-developers-startup",
    element: <SkillDescPage url="/c/hire-developers-startup?ut=1"/>
  },
  {
    path: "/c/hire-share-point-developer",
    element: <SkillDescPage url="/c/hire-share-point-developer?ut=1"/>
  },
  {
    path: "/c/hire-shopify-developer",
    element: <SkillDescPage url="/c/hire-shopify-developer?ut=1"/>
  },
  {
    path: "/c/hire-sitecore-developer",
    element: <SkillDescPage url="/c/hire-sitecore-developer?ut=1"/>
  },
  {
    path: "/c/hire-snowflake-developer",
    element: <SkillDescPage url="/c/hire-snowflake-developer?ut=1"/>
  },
  {
    path: "/c/hire-tableau-developer",
    element: <SkillDescPage url="/c/hire-tableau-developer?ut=1"/>
  },
  {
    path: "/c/hire-talend-developer",
    element: <SkillDescPage url="/c/hire-talend-developer?ut=1"/>
  },
  {
    path: "c/hire-uipath-developer",
    element: <SkillDescPage url="c/hire-uipath-developer?ut=1"/>
  },
  {
    path: "/c/hire-vlocity-developer",
    element: <SkillDescPage url="/c/hire-vlocity-developer?ut=1"/>
  },
  {
    path: "/c/hire-microsoft-dynamics-developer",
    element: <SkillDescPage url="/c/hire-microsoft-dynamics-developer?ut=1"/>
  },
  {
    path: "/c/offshore-software-testing-company",
    element: <SkillDescPage url="/c/offshore-software-testing-company?ut=1"/>
  },
  {
    path: "/c/hire-salesforce-cpq-developer",
    element: <SkillDescPage url="/c/hire-salesforce-cpq-developer?ut=1"/>
  },
  {
    path: "/c/hire-workday-developer",
    element: <SkillDescPage url="/c/hire-workday-developer?ut=1"/>
  },
  {
    path: "/c/why-should-you-hire-remote-developers",
    element: <BlogDescPage url="/c/why-should-you-hire-remote-developers"/>
  },
  {
    path: "/c/why-should-you-hire-contractors-instead-of-full-time-employees",
    element: <BlogDescPage url="/c/why-should-you-hire-contractors-instead-of-full-time-employees"/>
  },
  {
    path: "/c/11-disadvantages-of-hiring-dedicated-developers",
    element: <BlogDescPage url="/c/11-disadvantages-of-hiring-dedicated-developers"/>
  },
  {
    path: "/c/9-best-benefits-of-hiring-contractors",
    element: <BlogDescPage url="/c/9-best-benefits-of-hiring-contractors"/>
  },
  {
    path: "/c/direct-hire-vs-contract-employees:-which-one-is-better-for-your-company",
    element: <BlogDescPage url="/c/direct-hire-vs-contract-employees:-which-one-is-better-for-your-company"/>
  },
  {
    path: "/c/attracting-and-retaining-top-talent-in-the-it-industry",
    element: <BlogDescPage url="/c/attracting-and-retaining-top-talent-in-the-it-industry"/>
  },
  {
    path: "/c/top-10-It-companies-in-india",
    element: <TopCompanyByCity url="/c/top-10-It-companies-in-india" />
  },
  {
    path: "/c/software-development-company-in-mumbai",
    element: <TopCompanyByCity url="/c/software-development-company-in-mumbai" />
  },
  {
    path: "/c/it-companies-pune",
    element: <TopCompanyByCity url="/c/it-companies-pune" />
  },
  {
    path: "/c/list-software-companies-in-bangalore",
    element: <TopCompanyByCity url="/c/list-software-companies-in-bangalore" />
  },
  {
    path: "/c/software-development-company-in-delhi",
    element: <TopCompanyByCity url="/c/software-development-company-in-delhi" />
  },
  {
    path: "/c/best-software-development-companies-in-hyderabad",
    element: <TopCompanyByCity url="/c/best-software-development-companies-in-hyderabad" />
  },
  {
    path: "/c/best-software-companies-in-chennai",
    element: <TopCompanyByCity url="/c/best-software-companies-in-chennai" />
  },
  {
    path: "/c/software-companies-in-gurgaon",
    element: <TopCompanyByCity url="/c/software-companies-in-gurgaon" />
  },
  {
    path: "/c/software-companies-in-jaipur",
    element: <TopCompanyByCity url="/c/software-companies-in-jaipur" />
  },
  {
    path: "/c/software-companies-in-ahmedabad",
    element: <TopCompanyByCity url="/c/software-companies-in-ahmedabad" />
  },
  {
    path: "/c/software-companies-in-indore",
    element: <TopCompanyByCity url="/c/software-companies-in-indore" />
  },
  {
    path: "/c/top-10-software-development-companies-in-noida",
    element: <TopCompanyByCity url="/c/top-10-software-development-companies-in-noida" />
  },
  {
    path: "/c/remote-developer-jobs",
    element: <RemoteDevelopersJob />
  },
  {
    path: "/c/developers-resume",
    element: <DevelopersResume />
  },
  {
    path: "/c/freelancers",
    element: <FreelancerJob />
  },
  {
    path: "/c/interview-qa",
    element: <InterviewQandA />
  },
  {
    path: "/c/staff-augmentation",
    element: <Services url="/c/staff-augmentation" />
  },
  {
    path: "/c/direct-hire",
    element: <Services url="/c/direct-hire" />
  },
  {
    path: "/c/hire-train-deploy",
    element: <Services url="/c/hire-train-deploy" />
  },
  {
    path: "/c/master-vendor",
    element: <Services url="/c/master-vendor" />
  },
];

export default routes;

