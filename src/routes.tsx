import { RouteObject } from "react-router-dom";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";
import { AllCandidates } from "./containers/allcandidates/allcandidates";


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
];

export default routes;

