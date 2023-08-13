import routes from './routes';
import { useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/index.scss';

const App = () => {
  const content = useRoutes(routes);
  return content;
};
export default App;