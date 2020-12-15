import './App.css';
import { useRoutes } from 'hookrouter';
import Landing from './components/Landing';

const routes = {
	'/': () => <Landing />,
};
function App() {
	const routeResult = useRoutes(routes);

	return routeResult || <div>404 Not Found</div>;
}

export default App;
