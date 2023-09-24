import routes from './routes';
import { useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@styles/index.scss';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {
  const content = useRoutes(routes);
  return content;
};
export default App;