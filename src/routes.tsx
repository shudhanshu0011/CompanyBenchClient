import { RouteObject } from "react-router-dom";
import { Home } from "./containers/home";
import { Candidates } from "./containers/candidates";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/candidates",
    element: <Candidates />,
  },
];

export default routes;
